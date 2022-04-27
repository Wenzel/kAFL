FROM python:3.9
# Setup env
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
# don't write .pyc compiled code
ENV PYTHONDONTWRITEBYTECODE 1
# enable python stacktraces on segfaults
ENV PYTHONFAULTHANDLER 1
# ensure that python output is sent straight to container logs without buffering
ENV PYTHONUNBUFFERED 1

# # add some deb-src for QEMU build-dep
RUN echo 'deb-src http://deb.debian.org/debian bullseye main' >> /etc/apt/sources.list.d/deb-src.list

# install sudo to remain compatible
# also install make git
RUN apt-get update && apt-get install -y sudo make git
# expose proxy to sudo by default
RUN echo 'Defaults env_keep += "HTTP_PROXY HTTPS_PROXY http_proxy https_proxy"' >> /etc/sudoers

# Install pipenv
RUN pip install pipenv
COPY . /code
WORKDIR /code
# --deploy will throw an error when the Pipfile.lock and Pipfile doesn't match
# PIPENV_VENV_IN_PROJECT: creates a /.venv virtualenv directory
# pipenv run -> ensure make install runs inside venv
RUN PIPENV_VENV_IN_PROJECT=1 pipenv install --deploy && \
    pipenv run west init -l manifest && \
    pipenv run west update kafl && \
    pipenv run bash ./manifest/create_env.sh > .env && \
    pipenv run west update -k && \
    pipenv run bash -c 'make install'

# copy kafl.yml in current work dir
RUN mkdir -p /root/.config/kafl && \
    cp kafl/kafl.yaml /root/.config/kafl/config.yaml && \
    sed -i 's/qemu_path:.*/qemu_path: \/code\/kafl\/nyx\/qemu\/x86_64-softmmu\/qemu-system-x86_64/g' /root/.config/kafl/config.yaml && \
    sed -i 's/ptdump_path:.*/ptdump_path: \/code\/kafl\/nyx\/libxdc\/build\/ptdump/g' /root/.config/kafl/config.yaml && \
    sed -i 's/radamsa_path:.*/radamsa_path: \/code\/kafl\/radamsa\/bin\/radamsa/g' /root/.config/kafl/config.yaml && \
    sed -i 's/qemu_append:.*/qemu_append: init=\/sbin\/init root=\/dev\/vda1 rw hprintf=4 lpj=300 force_tdx_guest tdx_wlist_devids=pci:0x8086:0x29c0,acpi:PNP0501 nokaslr nopti mitigations=off mce=off/g' /root/.config/kafl/config.yaml && \
    sed -i 's/qemu_base:.*/qemu_base: -enable-kvm -machine kAFL64-v1 -cpu kAFL64-Hypervisor-v1,+vmx -smp 1 -no-reboot -display none -nodefaults -netdev user,id=mynet0 -device virtio-net,netdev=mynet0 -virtfs local,path=\/tmp\/kafl,mount_tag=tmp,security_model=mapped-file -device virtio-serial -device virtconsole,chardev=kafl_serial -device isa-serial,chardev=kafl_serial/g' /root/.config/kafl/config.yaml

RUN mkdir -p /tmp/kafl

# add venv to path
ENV PATH="/code/.venv/bin:$PATH"

ENTRYPOINT ["kafl_fuzz.py"]
