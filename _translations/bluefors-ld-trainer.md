---
layout: single
title: "Bluefors LD Trainer：一步步看清氦的流向"
lang: zh-CN
source_slug: bluefors-ld-trainer
original_url: /blog/bluefors-ld-trainer/
permalink: /zh/blog/bluefors-ld-trainer/
date: 2026-11-12 00:00:00 -0500
subtitle: "用可操作的控制面板和气路图理解稀释制冷，也留出停下来观察的时间。"
excerpt: "我发布了一个开源的稀释制冷机教学模拟器。可以在浏览器里分六步追踪氦的流向、查看各部件的作用，并探索简化的热学模型。"
---

我发布了一个叫作 **Bluefors LD Trainer** 的小型交互工具，用来帮助理解稀释制冷机如何工作。我希望把屏幕上的控制按钮，与机器内部的气体流向和制冷过程联系起来。无需安装软件，就可以[在浏览器中打开模拟器](https://smartdogx.github.io/Bluefors-LD-Trainer/)。

[![模拟器进入循环阶段后的功能示意图，黑色线条表示设备，蓝色表示氦的流动。]({{ '/assets/images/bluefors-ld-trainer.png' | relative_url }})](https://smartdogx.github.io/Bluefors-LD-Trainer/)

*模拟器中的循环阶段。这是 LD 系列系统的简化功能示意图，蓝色表示正在流动的氦混合物。*

模拟器涵盖六个阶段，从抽绝热真空、启动脉管预冷，到混合物冷凝、稀释循环，再到混合物回收和升温。默认的 **Slides** 模式像幻灯片一样，每一步都会保持温度读数和气路状态，方便看清楚后再按 **Next slide** 继续。**Continuous** 模式可以较慢地展示降温过程，也可以暂停或调整速度；其中的自动演示到进入循环阶段为止。点击部件，还能查看它的作用。

我特别想让三套不同的回路容易区分：绝热真空、脉管制冷机独立的氦回路，以及循环的氦-3/氦-4混合物回路。在混合室里，氦-3从浓相进入稀相时吸收热量，从而产生制冷。Still（蒸馏室）优先蒸发氦-3，泵组再将它送回入口，维持循环。关于这个过程，可以阅读 [Bluefors 对稀释制冷循环的介绍](https://bluefors.com/stories/how-does-a-dilution-refrigerator-work/)。

第一次尝试时，可以先进入 **Slide 4, Circulate**，保持 still 加热不变，增加样品热负载。松开滑块后，模拟器会更新响应，可以观察模型中混合室温度的上升。然后降低样品热负载，再调整 still 加热，看看模型中的循环如何响应。五个温度读数、对数坐标的温度历史曲线，以及混合室相界面的剖面图，分别展示了同一过程的不同侧面。

这个模型有明确的简化。启动和回收使用示意性的弛豫动力学，低温响应使用理想稀释制冷近似。时间、温度和滑块响应都是合成的演示结果，没有针对某一台真实制冷机做标定。示意图也省略了真实系统的详细阀门编号、压力动力学和联锁逻辑。这是一个独立的教学项目，与 Bluefors 公司没有隶属关系。真实设备的操作仍须遵循其实际文档和所在实验室的培训要求。

项目以 **MIT 许可证**开源。可以[在 GitHub 上查看源代码](https://github.com/smartdogX/Bluefors-LD-Trainer)，也可以[下载独立 HTML 文件](https://github.com/smartdogX/Bluefors-LD-Trainer/releases/download/v0.1.0/Bluefors-LD-Trainer.html)，直接离线打开。[v0.1.0 发布页](https://github.com/smartdogX/Bluefors-LD-Trainer/releases/tag/v0.1.0)包含当前版本。如果某条气路不够清楚、物理解释需要纠正，或者你希望增加课堂练习，欢迎[提交 issue](https://github.com/smartdogX/Bluefors-LD-Trainer/issues)。希望它能帮助学生和刚接触低温实验的研究者，开始理解制冷机内部究竟发生了什么。
