---
layout: single
title: "在 WSL 上使用 QE（Quantum Espresso）"
lang: "zh-CN"
source_slug: "qe"
original_url: "/blog/qe/"
permalink: "/zh/blog/qe/"
date: "2025-07-17"
excerpt: "记录在 Windows 上通过 WSL 安装 Quantum ESPRESSO、连接 VS Code，以及尝试运行自带测试套件的过程。"
---

折腾了几天，我终于在自己的 Windows 电脑上通过 WSL（Windows Subsystem for Linux，适用于 Linux 的 Windows 子系统）成功下载并配置好了 Quantum Espresso。这篇文章就记录一下配置的过程。
## 配置 WSL
参考：[安装 WSL | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/install)。
基本上，只需要在 PowerShell 中输入下面这行代码，Windows 就会帮你完成剩下的事情。
```
wsl --install
```
这一步比较简单，没有什么难点。
## 与 VS Code 配合使用（可选）
参考：[开始通过 WSL 使用 VS Code | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode)
如果你想在使用 WSL 时用 VS Code 作为编辑器，可以将它们连接起来。
唯一有点麻烦的是从 VS Code 发起连接这一步，有时会遇到一些错误。遇到这种情况，可以试着从 WSL 中连接，在 WSL 终端里输入下面这行代码：
```
code .
```
## 下载 QE
参考：[Quantum-ESPRESSO 用户指南](https://www.quantum-espresso.org/Doc/user_guide/)
如果你像几天前的我一样不熟悉 Linux，这一步可能会有点麻烦。
下载 QE 有两种方式：
### 从官网下载
首先，安装编译所需的依赖：
```
# Step 1: Install dependencies
sudo apt update
sudo apt install -y \
  build-essential \
  gfortran \
  mpifort \
  libfftw3-dev \
  libblas-dev \
  liblapack-dev \
  libscalapack-mpi-dev \
  make
```
然后在 WSL 终端中输入下面的代码：
```
# Step 2: get the package from the official website
wget "official website"
(for example:wget https://www.quantum-espresso.org/rdm-download/488/v7-4-1/7ea7262b594ab757b2c13aaad1214c27/qe-7.4.1-ReleasePack.tar.gz)
```
现在你已经拿到了 QE 的安装包，接下来解压源代码：
```
# step 3: extract the source
tar -xvf 'name of the package'
(for example: qe-7.4.1-ReleasePack.tar.gz)
cd 'The folder name'
(for example: qe-7.4.1-ReleasePack.tar.gz)
```
然后进行配置：
```
# step 4: configure
./configure
```
接着编译代码：
```
# step 5: make all
make all
```
这样就完成安装了。
你可以通过下面的命令测试安装结果：
```
# Step 6: Test installation
./bin/pw.x -v
```
这些都是一些神秘的 Linux 代码，如果看不懂，随时可以问 ChatGPT。
### 通过 git 下载
步骤基本相同。

```
# Step 1: Install dependencies
sudo apt update
sudo apt install -y \
  build-essential \
  gfortran \
  mpifort \
  libfftw3-dev \
  libblas-dev \
  liblapack-dev \
  libscalapack-mpi-dev \
  git \
  wget \
  make

# Step 2: Clone Quantum ESPRESSO source code
git clone https://github.com/QEF/q-e.git
cd q-e

# Optional: Check out a stable release (e.g., 7.2)
git checkout qe-7.2

# Step 3: Configure
./configure

# Step 4: Build all modules (can take several minutes)
make all

# Step 5: Test installation
pw.x -v
```
### 将可执行文件加入 PATH
参考：[如何将可执行文件加入搜索路径？ - Ask Ubuntu](https://askubuntu.com/questions/322772/how-do-i-add-an-executable-to-my-search-path)
你可以将可执行文件加入 PATH，这样就能方便地调用这些程序：
```
(Optional) Add executables to PATH
echo 'export PATH="$PWD/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```
## 运行一些测试
QE 程序本身已经带有一些测试套件，可以查看[测试套件与测试平台 · Wiki · QEF - Quantum ESPRESSO Foundation / q-e · GitLab](https://gitlab.com/QEF/q-e/-/wikis/Developers/Test-suite-and-test-farm)。
如果这些测试无法正常运行，也可以使用 [yyyu200/DFTbook：DFT 入门](https://github.com/yyyu200/DFTbook/tree/master)提供的示例再试一试。
