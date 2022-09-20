ARG baseimage=python:3.8-slim
FROM ${baseimage} as build

WORKDIR /app
COPY . .

# skip ghidra since it adds 1G to the final image,
# and we don't use it for our fuzzing use case with Docker
RUN apt-get update && apt-get install -y build-essential git python3 python3-venv && \
    make deploy -- --tags fuzzer --skip-tags kernel,kvm_device,ghidra

FROM ${baseimage} as run
# need to use the same directory structure so we can copy the venv.
# the venv's scripts shebang will be:
#!/app/kafl/.venv/bin/kafl
WORKDIR /app/kafl
# install QEMU
COPY --from=build /app/kafl/qemu/x86_64-softmmu/qemu-system-x86_64 /usr/local/bin/
COPY --from=build /app/kafl/qemu/pc-bios/* /usr/local/share/qemu-firmware/
# install radamsa
COPY --from=build /app/kafl/radamsa/bin/radamsa /usr/local/bin
# install ptdump
COPY --from=build /app/kafl/libxdc/build/ptdump /usr/local/bin
# copy fuzzer venv in current dir
COPY --from=build /app/kafl/.venv ./.venv

# kafl_fuzz.py depends on libgraphviz
# TODO: can we remove this ? it pulls 156M
RUN apt-get update && \
    apt-get install -y graphviz-dev && \
    apt-get autoremove && apt-get clean

# configure kafl with a local kafl.yaml
RUN echo "qemu_path: /usr/local/bin/qemu-system-x86_64" >> kafl.yaml && \
    echo "ptdump_path: /usr/local/bin/ptdump" >> kafl.yaml && \
    echo "radamsa_path: /usr/local/bin/radamsa" >> kafl.yaml

# add fuzzer venv to PATH
ENV PATH="/app/kafl/.venv/bin:$PATH"
# Setup env to run Dockerized Python app
ENV LANG C.UF-8
ENV LC_ALL C.UTF-8
# don't write .pyc compiled code
ENV PYTHONDONTWRITEBYTECODE 1
# enable python stacktraces on segfaults
ENV PYTHONFAULTHANDLER 1
# ensure that python output is sent straight to container logs without buffering
ENV PYTHONUNBUFFERED 1

ENTRYPOINT ["kafl_fuzz.py"]
