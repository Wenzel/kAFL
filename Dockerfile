FROM ubuntu:22.04 as build

WORKDIR /build
COPY . .

# skip ghidra since it adds 1G to the final image,
# and we don't use it for our fuzzing use case with Docker
RUN apt-get update && apt-get install -y build-essential git python3 python3-venv && \
    make deploy -- --tags fuzzer --skip-tags kernel,kvm_device,ghidra

FROM python:3.8 as run
WORKDIR /app
# copy QEMU
COPY --from=build /build/kafl/qemu/x86_64-softmmu/qemu-system-x86_64 .
# copy radamsa
COPY --from=build /build/kafl/radamsa/bin/radamsa .
# copy ptdump
COPY --from=build /build/kafl/libxdc/build/ptdump .
# copy kafl_fuzzer sources
# TODO future: pip install kafl_fuzzer (binary distribution)
COPY --from=build /build/kafl/fuzzer ./fuzzer

# install fuzzer, configure and cleanup
RUN apt-get update && apt-get install -y libgraphviz-dev && \
    pip install ./fuzzer && \
    mkdir -p /root/.config/kafl && \
    cp fuzzer/kafl_fuzzer/config_default.yaml /root/.config/kafl/config.yaml && \
    sed -i 's@qemu_path:.*@qemu_path: /app/qemu-system-x86_64@g' /root/.config/kafl/config.yaml && \
    sed -i 's@ptdump_path:.*@ptdump_path: /app/ptdump@g' /root/.config/kafl/config.yaml && \
    sed -i 's@radamsa_path:.*@radamsa_path: /app/radamsa@g' /root/.config/kafl/config.yaml && \
    sed -i 's@qemu_append:.*@qemu_append: init=/sbin/init root=/dev/vda1 rw hprintf=4 lpj=300 force_tdx_guest tdx_wlist_devids=pci:0x8086:0x29c0,acpi:PNP0501 nokaslr nopti mitigations=off mce=off@g' /root/.config/kafl/config.yaml && \
    sed -i 's@qemu_base:.*@qemu_base: -enable-kvm -machine kAFL64-v1 -cpu kAFL64-Hypervisor-v1,+vmx -smp 1 -no-reboot -display none -nodefaults -netdev user,id=mynet0 -device virtio-net,netdev=mynet0 -virtfs local,path=/tmp/kafl,mount_tag=tmp,security_model=mapped-file -device virtio-serial -device virtconsole,chardev=kafl_serial -device isa-serial,chardev=kafl_serial@g' /root/.config/kafl/config.yaml && \
    apt-get autoremove && apt-get clean && rm -r fuzzer

# TODO run as user

# Setup env
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
# don't write .pyc compiled code
ENV PYTHONDONTWRITEBYTECODE 1
# enable python stacktraces on segfaults
ENV PYTHONFAULTHANDLER 1
# ensure that python output is sent straight to container logs without buffering
ENV PYTHONUNBUFFERED 1

ENTRYPOINT ["kafl_fuzz.py"]
