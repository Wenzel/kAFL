# KVM-Nyx

## Overview

KVM-Nyx is a fork of KVM and enables Intel-PT tracing for vCPUs and nested hypercalls which are required for hypervisor fuzzing. It enables fuzzing of any x86 / x86-64 target by using one of Nyx's fuzzer frontends. Our patches are based on kernel version 5.10.73.

Our fork is hosted on Github at [`IntelLabs/kAFL.linux`](https://github.com/IntelLabs/kafl.linux).

The KVM modifications can be found on the [`kvm-nyx-5.10.73`](https://github.com/IntelLabs/kafl.linux/tree/kvm-nyx-5.10.73) branch.

```{note}
This repository hosts multiple versions of guest and host kernel for kAFL:

* `guest-*` tracks upstream [TDX guest kernel](https://github.com/intel/tdx/).
* `kafl/fuzz-*` are variants of guest kernel for fuzzing with kAFL.
* `kafl/sdv-*` are variants of host kernel with TDX _SDV_ emulation.
```

```{warning}
Our patches are only supported on Intel CPUs (Skylake or later).
```

The [`Initial Release of Nyx`](https://github.com/IntelLabs/kafl.linux/commit/c612e238e455c34255bdb92efa7fd2fd963d287b) is the main patch which adds Nyx features to KVM.

## Patch

### KVM Capabilities

| Capability | Description |
|------------|-------------|
| `KVM_NYX_PT` | Whether KVM supports _Nyx-PT_ |
| `KVM_NYX_FDL` | Whether KVM supports _Nyx-FDL_ |

### New ioctls

The list of new ioctls can be found [here](https://github.com/IntelLabs/kafl.linux/commit/c612e238e455c34255bdb92efa7fd2fd963d287b#diff-911c8cf39390406e804c324e2831f3e6c37efa7ee8c3eab98ff6b5daafa9ee78R1783).

