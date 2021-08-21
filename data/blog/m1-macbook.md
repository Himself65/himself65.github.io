---
title: M1 Macbook Pro
tags: ['life']
date: '2021-08-17'
summary: 年轻人的第一台 Macbook Pro
---

## 前言

年轻人的第一台 MacBook Pro 今天到货了，用了大约一个礼拜后，对这台电脑有了一个清晰的了解。

## 配置及价格

MacBook Pro 13-inch, M1 芯片, 16GB 内存, 1TB SSD

1759 美元（免税）

## 使用

### 问题

#### 外放扬声器爆音

```shell
sudo killall -9 coreaudiod
```

### 软件

以下列出一些个人使用的 App，和一些使用须知。

#### Brew

[官网链接](https://brew.sh/)

`Brew` 是 macOS 下的包管理器，相当于 `apt` 或 `yum` 的功能，可以用来安装和卸载软件。

---

#### Iterm2

[官网链接](https://iterm2.com/)

`iTerm2` 是 macOS 上更强大的终端管理器。

---

#### Oh My Zsh

[官网链接](https://ohmyz.sh/)

macOS 目前已经自带了 `zsh` 作为默认的 Shell，而 `Oh My Zsh` 则是一个为 `zsh` 开发的 Shell 的安装包。

---

#### JetBrain Toolbox

[官网链接](https://www.jetbrains.com/toolbox-app/)

JetBrains 自家的 IDE 管理器。

---

#### Visual Studio Code

[官网链接](https://code.visualstudio.com/)

编辑器，不是 IDE。

---

#### CrossOver

[购买链接](https://www.codeweavers.com/store) 优惠码：**SILICON**

`CrossOver` 可以流畅玩很多游戏。底层是 `Wine` 进行模拟。

<https://applesilicongames.com> 可以查看哪些游戏支持 macOS 本地模拟

##### 帝国时代 2

- 多人模式修复

  原先情况下，游戏开局会失去同步并自动退出，现在已经可以通过手动替换 dll 文件来修复。

  原文链接: <https://www.reddit.com/r/aoe2/comments/dwuplr/how_to_run_age_of_empires_2_definitive_edition_on/>

  具体步骤：

  ```shell
  cd /home/$USER/.steam/steam/steamapps/compatdata/813780/pfx/drive_c/windows/system32/

  wget "https://aka.ms/vs/16/release/vc_redist.x64.exe"

  cabextract vc_redist.x64.exe

  cabextract a10
  ```
