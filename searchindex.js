Search.setIndex({"docnames": ["how_to/linux_tutorial", "how_to/sharedir_tutorial", "how_to/windows_tutorial", "index", "reference/deployment", "reference/hypercall_api", "tutorials/fuzzing_linux_kernel", "tutorials/installation", "tutorials/introduction"], "filenames": ["how_to/linux_tutorial.md", "how_to/sharedir_tutorial.md", "how_to/windows_tutorial.md", "index.md", "reference/deployment.md", "reference/hypercall_api.md", "tutorials/fuzzing_linux_kernel.md", "tutorials/installation.md", "tutorials/introduction.md"], "titles": ["Getting Started with Linux Fuzzing", "Using Nyx htools + sharedir for OS Fuzzing", "Getting Started with Windows Fuzzing", "\ud83d\udcd7 kAFL\u2019s Documentation", "Deployment", "kAFL/Nyx Hypercall API", "Fuzzing the Linux Kernel", "Installation", "Introduction"], "terms": {"base": [0, 4], "legaci": [0, 2], "kafl": [0, 1, 2, 6, 8], "guid": [0, 2, 8], "run": [0, 1, 2, 3, 4, 6, 7], "newer": [0, 5, 7], "distribut": [0, 4], "mai": [0, 1, 2, 5, 6], "requir": [0, 1, 3, 4, 6], "minor": 0, "fix": [0, 1, 2, 4], "provid": [0, 1, 6], "sampl": [0, 1], "code": [0, 1, 3, 5, 6], "For": [0, 1, 2, 3, 5, 6], "follow": [0, 2, 3, 7], "step": [0, 2, 3, 7], "download": [0, 1, 2, 3, 4, 7], "ubuntu": [0, 1, 2, 7], "16": [0, 6], "04": [0, 1, 2, 7], "iso": [0, 2], "last": 0, "verifi": [0, 3], "work": [0, 1, 2, 4, 6], "version": [0, 1, 4, 5], "wget": 0, "c": [0, 1, 2, 5], "o": [0, 3, 6], "http": [0, 4, 6, 7], "releas": [0, 4, 5], "com": [0, 3, 4, 6, 7], "7": [0, 6], "server": [0, 2, 6], "amd64": 0, "creat": [0, 2, 3, 5, 7], "qemu": [0, 1, 2, 3, 4, 5, 6], "hard": [0, 2], "drive": [0, 2], "img": [0, 2], "f": [0, 2], "qcow2": [0, 1, 2], "20g": 0, "machin": [0, 2, 4, 6, 7, 8], "q35": [0, 2], "enabl": [0, 2, 5, 6], "kvm": [0, 2, 3, 4, 6], "m": [0, 2, 6], "1024": [0, 2], "hda": [0, 2], "cdrom": [0, 2], "insid": [0, 1, 7], "guest": [0, 1, 3, 4, 5, 6], "clone": [0, 3, 4, 6], "repositori": [0, 3, 4, 7], "agent": [0, 1, 2, 5, 6, 8], "git": [0, 4, 6, 7], "github": [0, 4, 6, 7], "intellab": [0, 3, 6, 7], "sh": [0, 1, 2, 7], "target": [0, 1, 2, 3, 5, 7, 8], "perform": [0, 1, 4, 5, 6], "ani": [0, 1, 3, 5, 6, 7], "other": [0, 1, 2, 3, 4, 5, 6], "setup": [0, 1, 4, 6, 7, 8], "up": 0, "updat": [0, 1, 4], "grub": [0, 1, 4], "spectre_v2": [0, 1], "off": [0, 1, 6], "mitig": [0, 1, 6], "nopti": [0, 1, 6], "oop": [0, 1, 6], "panic": [0, 1, 5, 6], "nokaslr": [0, 1, 6], "consol": [0, 1, 2], "ttys0": [0, 1], "sudo": [0, 1, 2, 6, 7], "sysctl": 0, "kernel": [0, 1, 3, 4, 7, 8], "randomize_va_spac": 0, "0": [0, 2, 6], "shutdown": [0, 2], "gener": [0, 2, 3, 5], "directli": [0, 1, 2, 4, 6], "desir": [0, 3, 4], "hierarchi": 0, "help": [0, 6], "result": [0, 1, 5, 6, 8], "smaller": 0, "footprint": 0, "The": [0, 1, 3, 4, 5, 6, 7], "snippet": 0, "minim": [0, 1, 3, 5], "root": [0, 1, 6, 7, 8], "us": [0, 2, 3, 4, 5, 6, 7, 8], "debootstrap": 0, "hello": [0, 1, 6], "world": [0, 1, 6], "kafl_vuln_test": [0, 1], "test": [0, 1, 2, 5, 7], "case": [0, 4, 5, 6], "tend": 0, "have": [0, 1, 2, 4, 5, 7, 8], "similar": 0, "tool": [0, 1, 4, 6, 7], "e": [0, 1, 5], "g": [0, 1, 5], "febootstrap": 0, "fedora": 0, "you": [0, 1, 2, 4, 5, 6, 7, 8], "can": [0, 1, 2, 4, 5, 6, 7], "also": [0, 1, 5, 6], "busybox": 0, "further": [0, 1, 3], "reduc": 0, "memori": [0, 2, 6], "your": [0, 1, 2, 3, 4, 7, 8], "har": [0, 1, 5, 6], "rootf": 0, "cd": [0, 1, 6, 7], "realpath": 0, "ubuntu_16": 0, "mkdir": [0, 1, 2], "p": [0, 1, 6], "arch": [0, 6], "variant": 0, "minbas": 0, "includ": [0, 1, 4], "vim": 0, "ssh": 0, "xenial": 0, "archiv": 0, "deploi": [0, 3, 4], "loader": [0, 2, 3], "we": [0, 1, 2, 4, 5, 6, 7, 8], "current": [0, 1, 2, 4, 5, 7], "host": [0, 1, 2, 4, 5, 6], "here": [0, 1, 2], "so": [0, 2, 5], "don": 0, "t": [0, 2, 4, 6, 7], "worri": 0, "about": [0, 5], "cross": [0, 1, 6], "compil": [0, 1, 2, 6], "port": [0, 3], "compon": [0, 1, 4], "choic": 0, "lib": 0, "modul": [0, 1], "cp": [0, 1, 2, 6], "unam": 0, "r": [0, 6], "boot": [0, 1, 6], "fuzzer": [0, 1, 2, 3, 4, 5, 6, 7, 8], "depend": [0, 4, 6], "linux_x86_64": [0, 1], "bin": [0, 1, 2, 6], "pushd": 0, "test_cas": [0, 1], "simpl": [0, 1, 6], "linux_x86": [0, 1], "64": [0, 1, 5], "make": [0, 1, 3, 4, 5, 6], "ko": [0, 1], "popd": 0, "launch": [0, 2, 3, 6], "tee": [0, 1], "etc": [0, 1, 4, 5, 6], "rc": 0, "local": [0, 1, 4, 7, 8], "modprob": [0, 1, 2], "loop": [0, 1, 5, 6], "vfat": 0, "insmod": 0, "set": [0, 1, 3, 4, 5], "password": [0, 7], "easi": [0, 3, 4], "login": [0, 2], "debug": [0, 2, 5], "chroot": 0, "passwd": 0, "wrap": 0, "time": [0, 1, 5], "need": [0, 1, 2, 4, 5], "aggreg": 0, "regular": [0, 1, 5], "file": [0, 1, 2, 4, 5, 6, 7], "mkf": 0, "ext4": 0, "l": [0, 6], "n": [0, 1, 7], "d": [0, 1, 6], "2g": 0, "convert": [0, 4], "raw": 0, "note": [0, 2, 3], "thi": [0, 1, 2, 4, 5, 6, 7, 8], "wai": [0, 1, 2, 4], "doe": [0, 1, 2, 6], "bootload": 0, "initrd": 0, "sinc": [0, 2, 4, 5, 6], "ha": [0, 1, 4, 6, 7], "been": [0, 7, 8], "proce": 0, "creation": 0, "final": 0, "configur": [0, 1, 3, 5], "when": [0, 1, 4, 5, 6], "must": [0, 1, 5, 7], "ident": 0, "one": [0, 2], "restor": [0, 5, 6], "later": 0, "dure": [0, 6], "i": [0, 1, 2, 3, 4, 5, 6, 7], "adjust": 0, "ram": 0, "size": [0, 5], "type": [0, 4, 5], "peripher": 0, "avail": [0, 4, 6, 7], "even": [0, 1], "thing": [0, 6], "like": [0, 2, 3, 4, 5], "miss": 0, "commandlin": 0, "incompat": 0, "against": 0, "report": [0, 5, 6], "log": [0, 1, 2, 5, 6], "kafl_fuzz": [0, 1, 2, 6, 7], "py": [0, 1, 2, 6, 7], "v": [0, 2], "an": [0, 1, 3, 4, 5, 6], "overlai": [0, 2], "copi": [0, 2], "multipl": [0, 3, 6], "instanc": [0, 1, 3, 6], "parallel": [0, 3, 6], "b": [0, 2, 6], "overlay_0": [0, 2], "execut": [0, 1, 2, 3, 4, 5, 6, 7], "initi": [0, 1, 5, 6], "If": [0, 1, 4, 7], "path": [0, 2, 4, 6, 7], "abov": [0, 6], "snip": 0, "correspond": [0, 1, 2, 5], "direct": 0, "automat": [0, 1, 5], "5": [0, 2, 3, 4], "x86_64": [0, 2, 6], "softmmu": [0, 2, 6], "system": [0, 1, 2, 3, 6, 7], "nograph": 0, "net": [0, 2, 6], "none": [0, 2, 6], "serial": [0, 1, 6], "mon": 0, "stdio": 0, "vmlinuz": 0, "512": [0, 1, 6], "append": [0, 6], "dev": [0, 1, 2, 4, 6], "sda": 0, "rw": [0, 6], "wa": [0, 1, 4], "info": [0, 1, 2, 5, 6], "seq": 0, "nproc": [0, 6], "do": [0, 2, 6], "overlay_": 0, "done": [0, 1, 2, 5], "virtual": [0, 4, 5, 6], "address": [0, 1, 5], "rang": [0, 1, 5, 6], "trace": [0, 1, 5, 6, 7], "coverag": [0, 3, 6], "feedback": [0, 3, 5], "It": [0, 2, 3, 4, 5, 6], "recommend": [0, 1], "specif": [0, 5], "subsystem": 0, "want": [0, 2, 4, 7], "order": [0, 3], "nois": 0, "schedul": [0, 3], "interrupt": 0, "To": [0, 1, 2, 7], "obtain": [0, 5], "driver": [0, 1], "kafl_info": [0, 2], "script": [0, 2, 3], "feed": 0, "binari": [0, 1, 2, 5, 7], "where": [0, 2, 4, 5], "scan": [0, 6], "output": [0, 1, 2, 6], "all": [0, 1, 3, 4, 7], "purg": [0, 1, 2, 6], "vm_dir": [0, 2], "mem": [0, 1, 2], "work_dir": [0, 1, 2, 5], "exampl": [0, 1, 3, 4, 6], "0xffffffffc0022000": 0, "0xffffffffc0042000": 0, "psmous": 0, "0xffffffffc0010000": 0, "0xffffffffc001a000": 0, "ahci": 0, "0xffffffffc0002000": 0, "0xffffffffc000a000": 0, "0xffffffff81000000": 0, "0xffffffff81a4aea0": 0, "core": 0, "pt": [0, 2, 3, 5, 6, 7], "filter": [0, 1, 5, 6], "seed": [0, 1, 2], "echo": [0, 1, 2, 7], "abcdefg1234567890": 0, "seed_dir": [0, 1, 2, 6], "ip0": [0, 2, 6], "view": 0, "progress": 0, "troubleshoot": 0, "sens": 0, "dir": 0, "continu": [0, 5, 7], "main": [0, 1, 3, 7], "tbd": 0, "see": [0, 2, 4, 7], "readm": 0, "md": 0, "window": [0, 3], "option": [1, 2, 3, 4, 6], "replac": 1, "v0": [1, 4], "2": [1, 3], "old": 1, "singl": [1, 5], "kind": [1, 5], "fanci": 1, "packag": [1, 4], "approach": [1, 5], "With": [1, 4], "shell": [1, 4, 7], "which": [1, 2, 3, 5, 6], "turn": 1, "load": [1, 6], "addit": [1, 4, 6], "via": [1, 4], "hypercal": [1, 3], "transpar": 1, "todo": 1, "ar": [1, 2, 4, 5, 6, 7], "integr": [1, 3], "sourc": [1, 3, 4, 6], "separ": [1, 6], "from": [1, 2, 3, 4, 5, 6, 7, 8], "packer": 1, "avoid": 1, "frequent": 1, "modif": [1, 3, 7], "purpos": [1, 2], "second": 1, "stage": 1, "dub": 1, "below": 1, "actual": [1, 2, 5, 7], "non": 1, "patch": [1, 3], "recent": [1, 7], "most": [1, 2, 6], "20": [1, 2, 6, 7], "consid": 1, "same": [1, 4, 6], "problem": [1, 2], "activ": [1, 6], "disabl": [1, 5, 6], "kaslr": 1, "pti": 1, "default": [1, 2, 4], "grub_cmdline_linux_default": 1, "grub_cmdline_linux": 1, "grub_timeout_styl": 1, "menu": 1, "grub_timeout": 1, "1": [1, 2, 3], "grub_disable_recoveri": 1, "true": 1, "mount": [1, 2], "bash": 1, "nbd": [1, 2], "nbd0": [1, 2], "nbd0p1": 1, "mnt": [1, 2], "hget": 1, "chmod": 1, "x": 1, "reboot": [1, 4, 6, 7], "manual": [1, 2, 5], "snapshot": [1, 3, 5, 6], "lock": [1, 5], "still": 1, "some": [1, 4, 6, 7], "instead": [1, 2, 5, 6], "cron": 1, "sure": [1, 6, 7], "instal": [1, 2, 3, 4, 6, 8], "crontab": 1, "unount": 1, "disconnect": [1, 2], "import": 1, "umount": [1, 2], "vulner": 1, "hprintf_test": 1, "review": 1, "understand": [1, 6, 8], "startup": [1, 5, 6], "flow": 1, "secret": 1, "ingredi": 1, "issu": [1, 3, 5], "fetch": [1, 5], "store": [1, 5], "runtim": [1, 3], "select": [1, 4], "ip": [1, 5], "reason": [1, 4], "decod": [1, 3, 5, 6], "while": [1, 5], "possibl": [1, 2, 4, 6], "suppli": [1, 5], "paramet": [1, 2, 4], "": [1, 2, 4, 6, 7], "part": [1, 2, 5], "combin": [1, 5], "hinfo": 1, "hrang": 1, "accomplish": 1, "origin": 1, "simpli": [1, 5], "dump": [1, 5, 6], "take": [1, 5], "list": [1, 2, 4], "them": [1, 4], "A": [1, 4], "seen": 1, "stdout": 1, "redirect": 1, "hcat": 1, "grep": [1, 7], "pipe": 1, "kafl_vuln": 1, "awk": 1, "print": [1, 5], "nr": 1, "xarg": 1, "usag": 1, "custom": [1, 3, 5], "python3": 1, "redqueen": [1, 3, 6], "vm_imag": 1, "shm": [1, 6], "kafl_ubuntu": 1, "By": 1, "now": [1, 2, 5, 7], "workdir": [1, 6], "qemu_serial_": 1, "ampl": 1, "frontend": [1, 3, 4, 5], "hprintf": [1, 5, 6], "send": [1, 5], "printf": [1, 5], "string": [1, 4, 5], "python": [1, 3, 7], "immedi": 1, "messag": [1, 7], "togeth": 1, "switch": [1, 2], "more": [1, 3, 5], "verbos": [1, 4], "At": [1, 2, 8], "point": [1, 2, 5, 6, 7], "unpatch": 1, "special": [1, 2, 5], "mode": 1, "exit": [1, 5, 6], "error": [1, 2, 5, 6], "intend": 1, "baselin": 1, "bootstrap": [1, 5, 6], "differ": [1, 2, 6], "scenario": [1, 3], "outsid": 1, "environ": [1, 3, 4], "own": [1, 4], "extract": [1, 3], "function": [1, 5, 6], "hook": 1, "In": [1, 2, 4, 5, 6, 7], "particular": [1, 3, 6], "typic": [1, 3, 5], "fail": [1, 2], "enough": 1, "just": [1, 2, 7], "complex": 1, "static": 1, "link": 1, "librari": [1, 2, 3], "encount": 1, "first": [1, 2, 5, 6, 7], "next_payload": [1, 5], "mean": [1, 2, 5], "okai": 1, "longer": 1, "phase": [1, 6], "befor": [1, 5, 7], "start": [1, 3, 5, 7], "onli": [1, 2, 4, 5], "after": [1, 2, 4], "resum": [1, 5, 6], "statu": 1, "its": 1, "wait": [1, 6], "state": [1, 6], "due": [1, 6], "bootup": 1, "ll": 2, "2019": 2, "evalu": 2, "17763": 2, "737": 2, "190906": 2, "2324": 2, "rs5_release_svc_refresh_server_eval_x64fre_en": 2, "us_1": 2, "50g": 2, "everyth": 2, "seem": [2, 6], "nat": 2, "network": 2, "give": 2, "access": 2, "well": [2, 3], "internet": 2, "move": [2, 7], "anywher": 2, "els": [2, 7], "correct": 2, "directori": [2, 4, 6, 7], "windows_x86_64": 2, "ex": 2, "build": [2, 3, 4, 7], "mingw": 2, "suggest": 2, "disk": 2, "connect": 2, "sleep": 2, "nbd0p2": 2, "rmdir": 2, "without": [2, 6, 7], "should": [2, 7, 8], "eventu": 2, "shut": 2, "down": 2, "probabl": 2, "freez": 2, "desktop": 2, "manag": [2, 4], "ctrl": 2, "alt": 2, "f3": 2, "killal": 2, "9": [2, 6], "back": 2, "f1": 2, "check": [2, 3, 4, 7], "congratz": 2, "readi": 2, "next": [2, 3, 5, 7], "payload": [2, 5, 6], "fed": 2, "map": 2, "pass": [2, 4], "0xfffff801ecf00000": 2, "0xfffff801ecf18000": 2, "lltdio": 2, "sy": 2, "0xfffff801ecf20000": 2, "0xfffff801ecf3b000": 2, "rspndr": 2, "0xfffff801ecf40000": 2, "0xfffff801ecf65000": 2, "bowser": 2, "0xfffff801ecf70000": 2, "0xfffff801ecf8a000": 2, "mpsdrv": 2, "find": [2, 6, 8], "rememb": 2, "two": 2, "As": [2, 4], "consequ": 2, "occur": 2, "exist": [2, 5, 6], "ini": 2, "absolut": 2, "preffer": 2, "fatal": [2, 5], "pleas": [2, 3], "errno": 2, "104": 2, "reset": [2, 3], "peer": 2, "usual": 2, "mismatch": 2, "command": [2, 4, 7], "again": 2, "argument": [2, 4], "ad": [2, 4, 5], "afterward": 2, "cpu": [2, 6, 7], "anoth": 2, "forgot": 2, "hang": [2, 5], "pci": [2, 6], "devic": [2, 4, 6], "0123456789abcdef": 2, "modifi": [2, 3], "src": 2, "vuln_test": 2, "chang": [2, 7], "call": [2, 6], "properli": [2, 7], "0xfffff801ec850000": 2, "0xfffff801ec915000": 2, "add": 2, "too": 2, "kafl_gui": [2, 6], "observ": 2, "nyx": [3, 6], "fast": [3, 6], "x86": [3, 6], "vm": [3, 5, 6, 7], "great": 3, "anyth": [3, 7], "firmwar": 3, "full": 3, "blown": 3, "oper": 3, "intel": [3, 4, 7], "vt": 3, "pml": 3, "achiev": [3, 4], "effici": 3, "greybox": 3, "whitebox": 3, "fuzz": [3, 5, 7, 8], "allow": [3, 7], "mani": 3, "fw": 3, "toolchain": [3, 7], "written": 3, "design": 3, "afl": 3, "extend": [3, 5], "mutat": 3, "analysi": 3, "radamsa": [3, 4, 6], "grimoir": [3, 6], "extens": 3, "introspect": 3, "input": [3, 5, 6], "condit": 3, "instruct": 3, "overcom": 3, "magic": 3, "byte": 3, "attempt": [3, 6], "identifi": 3, "keyword": [3, 4], "syntax": 3, "clever": 3, "larg": [3, 5], "scale": 3, "detail": 3, "ijon": 3, "visit": 3, "project": [3, 4], "structur": 3, "around": [3, 4], "organis": 3, "subcompon": 3, "linux": [3, 4, 7, 8], "support": [3, 5, 7], "libxdc": [3, 4, 5], "introduct": 3, "3": 3, "4": 3, "env": [3, 4], "prefer": [3, 5], "known": [3, 5], "get": [3, 5, 6], "prepar": 3, "imag": [3, 6], "htool": 3, "sharedir": [3, 5, 6], "deploy": [3, 7], "makefil": 3, "ansibl": [3, 7], "tag": 3, "galaxi": 3, "compos": 3, "api": 3, "essenti": [3, 4, 7], "untest": 3, "fulli": 3, "built": [4, 6], "IT": 4, "autom": 4, "framework": 4, "cloud": 4, "servic": 4, "provis": 4, "user": [4, 6, 7, 8], "expect": [4, 6], "inventori": 4, "remot": 4, "document": [4, 6, 7, 8], "level": [4, 5, 6], "made": [4, 7], "playbook": 4, "compat": [4, 7], "necessari": [4, 7], "new": [4, 7], "10": [4, 6], "73": 4, "ensur": 4, "group": 4, "permiss": 4, "descript": 4, "accord": 4, "Will": 4, "localhost": 4, "enter": [4, 6, 7], "sub": [4, 7], "variabl": [4, 7], "clean": 4, "remov": 4, "virtualenv": 4, "venv": 4, "forc": 4, "pull": 4, "everi": 4, "develop": 4, "orient": 4, "rebuild": 4, "accept": 4, "line": 4, "specifi": 4, "end": [4, 8], "symbol": 4, "doubl": 4, "dash": 4, "These": 4, "underli": 4, "toggl": 4, "3rd": 4, "vvv": 4, "skip": [4, 7], "hardware_check": 4, "hardare_check": 4, "hack": 4, "quot": 4, "doesn": [4, 7], "extra": 4, "var": 4, "ansible_connect": 4, "fine": 4, "grain": 4, "control": [4, 5], "thei": [4, 6], "featur": [4, 7], "describ": 4, "previous": [4, 5, 6], "task": [4, 5], "capston": 4, "hardwar": 4, "introduc": [4, 7, 8], "ci": 4, "kvm_devic": 4, "relat": 4, "node": 4, "reboot_kernel": 4, "respons": 4, "update_grub": 4, "entri": 4, "One": [4, 5], "rewrit": [4, 5, 6], "scratch": 4, "better": [4, 8], "fact": [4, 7], "ccc": 4, "harden": 4, "repo": 4, "And": 4, "commun": 4, "cherri": 4, "pick": 4, "goal": 4, "mind": 4, "leverag": 4, "power": 4, "breakdown": 4, "modular": 4, "role": 4, "reusabl": 4, "regroup": 4, "each": [4, 6], "out": [4, 6], "share": [4, 5], "top": 4, "hand": 4, "subfold": 4, "yet": 4, "publicli": 4, "websit": 4, "referenc": 4, "yml": 4, "name": [4, 5], "master": 4, "coordin": 5, "offer": [5, 6], "low": [5, 6], "interfac": [5, 6, 8], "inject": [5, 6], "acquir": 5, "collect": 5, "mark": 5, "stop": 5, "handshak": 5, "reach": 5, "return": 5, "ok": 5, "backend": 5, "get_payload": 5, "tell": 5, "write": 5, "care": 5, "alloc": 5, "suffici": [5, 6], "buffer": 5, "page": 5, "align": 5, "mmap": 5, "trigger": [5, 7], "regist": 5, "invoc": 5, "our": [5, 8], "alwai": 5, "anymor": 5, "pointer": 5, "veri": 5, "forward": 5, "sanit": 5, "except": 5, "stack": 5, "kasan": 5, "rais": 5, "crash": [5, 6], "event": 5, "reload": 5, "submit_pan": 5, "submit_kasan": 5, "handler": 5, "overwrit": 5, "detect": [5, 6], "side": 5, "unexpect": [5, 6], "inlin": 5, "macro": 5, "often": 5, "flexibl": 5, "place": [5, 6], "range_submit": 5, "easier": 5, "overrid": 5, "ipn": 5, "submit_cr3": 5, "cr3": 5, "valu": 5, "limit": 5, "context": 5, "user_abort": 5, "signal": 5, "mainli": [5, 6], "assert": [5, 6], "perspect": 5, "auto": [5, 6], "user_submit_mod": 5, "explicitli": 5, "32": [5, 6], "bit": [5, 6], "influenc": 5, "possibli": 5, "set_agent_config": 5, "capabl": 5, "get_host_config": 5, "queri": 5, "req_stream_data": 5, "data": 5, "correspondingli": 5, "folder": 5, "dump_fil": 5, "null": 5, "valid": [5, 6], "mkstemp": 5, "templat": 5, "filenam": 5, "let": [5, 7], "uniqu": 5, "user_fast_acquir": 5, "save": 5, "usermod": 5, "printk_addr": 5, "submit": 5, "printk": 5, "interpret": [5, 6, 7], "arg": 5, "panic_extend": 5, "mix": 5, "bug": [5, 8], "create_tmp_snapshot": 5, "increment": 5, "posit": 5, "debug_tmp_snapshot": 5, "nested_": 5, "roughli": 5, "equival": 5, "nest": 5, "l2": 5, "user_range_advis": 5, "get_argv": 5, "idea": 5, "get_program": 5, "deprec": 5, "show": 6, "how": [6, 8], "implement": 6, "userspac": [6, 7], "benefit": 6, "filesystem": 6, "silli": 6, "tdx": 6, "mmio": 6, "pio": 6, "read": 6, "interest": 6, "virtio": 6, "branch": 6, "variou": 6, "examples_root": 6, "15": 6, "config": 6, "apt": 6, "gawk": 6, "bison": 6, "flex": 6, "openssl": 6, "libssl": 6, "libelf": 6, "lz4": 6, "dwarv": 6, "vanilla": 6, "j": 6, "kafl_config_fil": 6, "kafl_config": 6, "yaml": 6, "w": 6, "bzimag": 6, "01": 6, "__": [6, 7], "___": [6, 7], "________": [6, 7], "_____": [6, 7], "_________": [6, 7], "____": [6, 7], "_": [6, 7], "warn": 6, "No": 6, "region": 6, "defin": 6, "00": 6, "exec": 6, "edg": 6, "fav": 6, "pend": 6, "worker": 6, "home": 6, "kafl64": 6, "v1": 6, "hypervisor": 6, "vmx": 6, "displai": [6, 7], "netdev": 6, "id": 6, "mynet0": 6, "chardev": 6, "socket": 6, "nowait": 6, "nyx_socket": 6, "interface_0": 6, "worker_id": 6, "bitmap_s": 6, "65536": 6, "input_buffer_s": 6, "131072": 6, "isa": 6, "kafl_seri": 6, "mux": 6, "serial_00": 6, "vda1": 6, "fast_vm_reload": 6, "invalid": 6, "02": 6, "got": 6, "5637": 6, "56msec": 6, "2kb": 6, "kickstart": 6, "261": 6, "605": 6, "743": 6, "55msec": 6, "2298": 6, "2785": 6, "21": 6, "20msec": 6, "576": 6, "35": 6, "17": 6, "62msec": 6, "644": 6, "2072": 6, "11": 6, "99msec": 6, "03": 6, "6": [6, 7], "14": 6, "52msec": 6, "19": 6, "8": 6, "49msec": 6, "12": 6, "25msec": 6, "42": 6, "3502": 6, "36": 6, "80msec": 6, "k": 6, "8667": 6, "98": 6, "15msec": 6, "calibr": 6, "1516": 6, "796": 6, "27msec": 6, "13": 6, "19msec": 6, "61msec": 6, "636": 6, "1132": 6, "54msec": 6, "0kb": 6, "trim": 6, "272": 6, "50msec": 6, "79": 6, "26msec": 6, "18": 6, "395": 6, "81msec": 6, "247": 6, "41msec": 6, "670": 6, "44msec": 6, "22": 6, "1kb": 6, "trim_cent": 6, "look": 6, "Be": 6, "hint": 6, "termin": 6, "kafl_workdir": 6, "corpu": 6, "what": 6, "kafl_hprintf": 6, "try": 6, "hprintf_00": 6, "Then": 6, "kafl_cov": 6, "page_cach": 6, "replai": 6, "faithfulli": 6, "ptdump": 6, "txt": 6, "big": 6, "corpus": 6, "process": [6, 7, 8], "ffffffff81000000": 6, "ffffffff83603000": 6, "ip1": 6, "ffffffff855ed000": 6, "ffffffff856e4000": 6, "abort": [6, 7], "finish": 6, "never": 6, "happen": 6, "consum": 6, "op": 6, "did": 6, "libxdc_decode_error": 6, "dynam": 6, "sever": 6, "paravirtu": 6, "ftrace": 6, "jump": 6, "label": 6, "xyz": 6, "especi": 6, "emul": 6, "caus": [6, 8], "leak": 6, "dive": 7, "meet": 7, "processor": 7, "gen": 7, "skylak": 7, "although": 7, "broadwel": 7, "addion": 7, "q": 7, "intel_pt": 7, "proc": 7, "cpuinfo": 7, "fi": 7, "gcc": 7, "workflow": 7, "debian": 7, "bullsey": 7, "contain": 7, "might": 7, "glimps": 7, "touch": 7, "dry": 7, "prompt": 7, "press": 7, "onc": 7, "confort": 7, "becom": 7, "passwordless": 7, "nopasswd": 7, "sudoer": 7, "complet": 7, "newli": 7, "acsii": 7, "art": 7, "logo": 7, "regard": 7, "refer": [7, 8], "tutori": 8, "real": 8, "throughout": 8, "analyz": 8, "abl": 8, "few": 8, "overal": 8, "adapt": 8}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"get": [0, 2], "start": [0, 2, 6], "linux": [0, 1, 6], "fuzz": [0, 1, 2, 6], "prepar": [0, 1, 2], "vm": [0, 1, 2], "imag": [0, 1, 2], "option": [0, 5], "1": [0, 6, 7], "full": 0, "instal": [0, 7], "manual": 0, "2": [0, 6, 7], "build": [0, 6], "from": 0, "filesystem": 0, "autom": 0, "snapshot": [0, 2], "us": 1, "nyx": [1, 5], "htool": 1, "sharedir": 1, "o": 1, "creat": 1, "deploi": [1, 7], "loader": 1, "script": 1, "launch": 1, "note": 1, "window": 2, "base": 2, "obtain": 2, "driver": 2, "virtual": 2, "address": 2, "rang": 2, "troubleshoot": 2, "kafl": [3, 4, 5, 7], "": 3, "document": 3, "featur": 3, "compon": 3, "content": 3, "tutori": 3, "how": 3, "To": 3, "guid": 3, "refer": 3, "deploy": 4, "system": 4, "modif": 4, "makefil": 4, "target": [4, 6], "extra_arg": 4, "ansibl": 4, "tag": 4, "galaxi": 4, "compos": 4, "intellab": 4, "collect": 4, "reus": 4, "hypercal": 5, "api": 5, "essenti": 5, "further": 5, "untest": 5, "fulli": 5, "integr": 5, "kernel": 6, "download": 6, "patch": 6, "port": 6, "your": 6, "prefer": 6, "configur": 6, "3": [6, 7], "4": [6, 7], "next": 6, "step": 6, "5": [6, 7], "known": 6, "issu": 6, "requir": 7, "hardwar": 7, "softwar": 7, "clone": 7, "sourc": 7, "make": 7, "set": 7, "environ": 7, "env": 7, "verifi": 7, "introduct": 8}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})