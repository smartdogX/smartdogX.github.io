---
title: Notes-Path integral
mathjax: true
last_modified_at: 2025-11-09T11:54:02-04:00
categories:
  - Notes
tags:
  - Physics
---

## path integral
The main goal of the path intergral is to calculate
$$\langle\psi_i|e^{-\mathrm{i}\hat{H}t/\hbar}|\psi_f\rangle$$
where $\langle\psi_i|$ refers to the initial state, $|\psi_f\rangle$ refers the final state. So this expression refers to the "overlap" of the wavefunction after a time interval under the Hamiltonian $\hat{H}$. Anyway, this label is just a notation which represents this kind of meaning, but how to actually calculate this term is actually very challenging. For example, take the Hamiltonian $\hat{H}=\frac{\hat{p}^2}{2m}+V(\hat{x})$ if we really write this term explicitly, say
$$\langle\psi_i|e^{-\mathrm{i}\hat{H}t/\hbar}|\psi_f\rangle=\langle\psi_i|\sum_{n=0}^{\infty}\frac{1}{n!}\left(-\frac{\mathrm{i}}{\hbar}\right)^n\left(\frac{\hat{p}^2}{2m}+V(\hat{x})\right)^n|\psi_f\rangle$$
My head already starts to ache just considering so many commute relation.
A smart way to calculate is to use Trotter product: 
$$e^{t(\hat{A}+\hat{B})}=\lim_{n\to\infty}\left(e^{\frac{t\hat{A}}{n}}e^{\frac{t\hat{B}}{n}}\right)^n$$
The reason we can do this is that $\left[e^{\frac{t\hat{A}}{n}},e^{\frac{t\hat{B}}{n}}\right]\sim O((t/n)^2)$.
So with this formula, we can really calculate $\langle\psi_i|e^{-\mathrm{i}\hat{\hat{H}}t}|\psi_f\rangle$, as shown below, let's assume that the time is divided into many time intervals, say $[t_0,t_1]$, $[t_1,t_2]$, $\cdots$, $[t_{N-1},t_N]$. And each time interval is $\delta t = \frac{t}{N}$.
$$\langle\psi_i|e^{-\mathrm{i}\hat{H}t/\hbar}|\psi_f\rangle=\langle\psi_i|\left(e^{-\mathrm{i}\hat{H}\delta t/\hbar}\right)^N|\psi_f\rangle=\langle\psi_i|e^{-\mathrm{i}\hat{H}\delta t/\hbar} \cdots e^{-\mathrm{i}\hat{H}\delta t/\hbar}|\psi_f\rangle$$
Now we have already divided the time, let's start actually calculate. For $\hat{H}=T(\hat{p})+V(\hat{x})$, 
$$\langle\psi_i|e^{-\mathrm{i}\hat{H}\delta t/\hbar} \cdots e^{-\mathrm{i}\hat{H}\delta t/\hbar}|\psi_f\rangle=\langle\psi_i|e^{-\mathrm{i}T(\hat{p})\delta t/\hbar}e^{V(\hat{x})\delta t/\hbar}\cdots e^{-\mathrm{i}T(\hat{p})\delta t/\hbar}e^{-\mathrm{i}V(\hat{x})\delta t/\hbar}|\psi_f\rangle$$
And we have identical matrix
$$I = \int \mathrm{d}q_n\int\mathrm{d}p_n|q_n\rangle\langle q_n|p_n\rangle\langle p_n|$$
Insert into the formula
$$\langle\psi_i|e^{-\mathrm{i}T(\hat{p})\delta t/\hbar}e^{-\mathrm{i}V(\hat{x})\delta t/\hbar}\cdots e^{-\mathrm{i}T(\hat{p})\delta t/\hbar}e^{-\mathrm{i}V(\hat{x})\delta t/\hbar}|\psi_f\rangle=\int\prod_{i=1}^{i=N-1}\mathrm{d}q_i\int\prod_{i=1}^{i=N}\mathrm{d}p_i\langle\psi_i|e^{-\mathrm{i}T(\hat{p})\delta t/\hbar}|p_1\rangle \langle p_1|e^{-\mathrm{i}V(\hat{x})\delta t/\hbar}|q_1\rangle\langle q_1|e^{-\mathrm{i}T(\hat{p})\delta t/\hbar}\cdots|\psi_f\rangle$$
Considering that $$\langle q|p\rangle = \frac{e^{\mathrm{i}qp/\hbar}}{\sqrt{2\pi \hbar}}$$
We find that this leads to a new add term in the calculation, for example,
$$\langle\psi_i|e^{-\mathrm{i}T(\hat{p})\delta t/\hbar}|p_1\rangle \langle p_1|e^{-\mathrm{i}V(\hat{x})\delta t/\hbar}|q_1\rangle=\frac{1}{2\pi\hbar}e^{-\mathrm{i}T(\hat{p})\delta t/\hbar}e^{-\mathrm{i}V(\hat{x})\delta t/\hbar}e^{ip(q_0-q_1)/\hbar}=e^{-\mathrm{i}(T(\hat{p})+V(\hat{x})-p\dot{q})\delta t/\hbar}$$
Finally, we get the answer
$$\langle\psi_i|e^{-\mathrm{i}\hat{H}t/\hbar}|\psi_f\rangle=\frac{1}{\left(2\pi\hbar\right)^{N}}\int\prod_{i=1}^{i=N-1}\mathrm{d}q_i\int\prod_{i=1}^{i=N}\mathrm{d}p_i \exp\left[\frac{\mathrm{i}}{\hbar}\int \mathrm{d}t \left(p\dot{q}-\hat{H}\right)\right]$$
Nice!
Let's now give some physical intution into this result. We can imagine in quantum region, the least action principle starts some quantum properties, so we need to consider all the possible path and add them up with a weight $e^{iS/\hbar}$. In class limit, it's just the least action path, because when $\hbar\to0$, other contribution interfer deconstructively.
## Feynman's story
![[Path integral.png]]
The schematic of path integral
Basically we start from one point and travel through every plane until another point. In this way, we count all the path and get the expression! This is Feynman's elegant idea.
## Relation with partition function
Acutually, the form of path integral is very similar to partition function in statistical physics. Let's check by using Wick rotation, say the time $t$ to imagine time $-\mathrm{i}\hbar\beta$.
$$\langle q|e^{-\mathrm{i}\hat{H}t/\hbar}|q\rangle=\langle q|e^{-\beta\hat{H}}|q\rangle (t\to-\mathrm{i}\hbar\beta)$$
$\langle q|e^{-\beta\hat{H}}|q\rangle$ is just the partition function!
