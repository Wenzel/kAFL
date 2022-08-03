<h1 align="center">
  <br>kAFL</br>
</h1>

<h3 align="center">
HW-assisted Feedback Fuzzer for x86 VMs
</h3>

<p align="center">
  <a href="https://github.com/IntelLabs/kAFL/actions/workflows/CI.yml">
    <img src="https://github.com/IntelLabs/kAFL/actions/workflows/CI.yml/badge.svg" alt="CI">
  </a>
  <a href="https://wenzel.github.io/kAFL/">
    <img src="https://img.shields.io/badge/Online-Documentation-green?style=for-the-badge&logo=gitbook" alt="online_docs"/>
  </a>
</p>

_kAFL_/_Nyx_ is a fast guided fuzzer for the x86 VM. It is great for anything that
executes as _QEMU_/_KVM_ guest, in particular x86 firmware, kernels and full-blown
operating systems.

## Building the documentation

The project's documentation is hosted online at [![online_docs](https://img.shields.io/badge/Online-Documentation-green)](https://wenzel.github.io/kAFL/)

To build the docs locally:
~~~
<<<<<<< HEAD

Ansible setup will ask for your root password.
If you are using a _passwordless sudo_ setup, just skip this by pressing enter.

## Remote Installation

kAFL's deployment offers the possibility of remote installation using Ansible.
Update the `deploy/inventory` file according to the [Ansible inventory
guide](https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html)
and make sure to **remove** the `localhost` host:

> localhost


Deployment will install kAFL to `$HOME/kafl` of the target machines:

~~~sh
make deploy
=======
cd docs
make html
xdg-open build/html/index.html
>>>>>>> a0959ec (README: link to Sphinx docs)
~~~
