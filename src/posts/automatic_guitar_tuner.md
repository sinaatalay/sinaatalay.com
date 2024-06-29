---
date: 2021-01-15
authors:
  - sinaatalay
---

# Design and Construction of an Automatic Guitar Tuner

This post briefly discusses designing and constructing a microcontroller-based guitar tuner device with DC motors.

<!-- more -->

The project was carried out as part of the "Mechatronics" course at Boğaziçi University during the Fall of 2020 by a team of six mechanical engineering students: Sina Atalay, Abdullah Gedük, Ediz Ferit Kula, Alp Uysal, Elif Hacıhasanoğlu, and Kevser Didar İskender.


## Overview

The goal was to build a microcontroller-based device that uses DC motors to automatically tune a guitar by listening to it. We started by conceptualizing how this device would operate. Our conclusion was:

1. The user connects the device to their guitar.
2. They then choose the desired tuning (like E standard).
3. Next, they play a string for the device to detect the current pitch.
4. The device adjusts the string until the desired pitch is achieved.

Next, we researched the available technologies to design and construct a device capable of accomplishing each step mentioned above.

The tuning selection part was the simplest one. With buttons and a microcontroller, we built a circuit that takes inputs from the user. Additionally, we made a visual user interface using an LCD screen. Once the tuning selection was made, each string's pitch was assigned, and the device knew its goal. For example, if the user selected E standard tuning, the sixth string's fundamental frequency would be 82.4 Hz.

The second part was more challenging. While we could connect a microphone to the microcontroller for sound input, it wasn't clear how the microcontroller could determine if the string's pitch was correct. We achieved this by sampling the string's sound and applying a discrete Fourier transform to compute the string's fundamental frequency. Instead of a microphone, we used an electric guitar and built an amplifier circuit to transmit the sound directly to the microcontroller.

The next step was tuning the guitar to the assigned pitches. This part was done by programming the microcontroller to control DC motors. By turning the tuning key, the string can be tightened or loosened to adjust its pitch. The device's objective was to tune the guitar so that each string's frequency matched its assigned value. The relationship between the amount of time the DC motor turns the tuning key to achieve the desired tuning and the difference between the string's current frequency and the desired frequency turned out linear. Therefore, we applied linear regression analysis to predict the necessary turning time needed to achieve precise tuning.

Our initial plan was to build a device that could tune all guitar strings simultaneously. We were unable to achieve this goal as it required more advanced algorithms and a circuit. However, we succeeded in constructing a device that can tune each guitar string individually.

## The Final Product

The schematic of the automatic guitar tuner can be seen in [Figure 1](#fig-schematic). Also, the tuner can be seen in action below (the video is in Turkish, but English subtitles are available).

<figure style="margin: 1em 0; width: 100%" id="fig-schematic">
  <object data="../../assets/figures/tuner-schematic.pdf" type="application/pdf" width="100%" height="600px">
      <embed src="../../assets/figures/tuner-schematic.pdf" type="application/pdf"/>
  </object>
  <figcaption>Figure 1: The schematic of the electronic circuit of the automatic guitar tuner.</figcaption>
</figure>


<div align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/nXmTJzbAJRM?si=tVJlwurz7VHEcfYz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>