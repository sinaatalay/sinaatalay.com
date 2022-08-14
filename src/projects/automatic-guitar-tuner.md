---
title: Automatic Guitar Tuner
author: "Sina Atalay, Abdullah Gedük,\nAlp Uysal, Ediz Ferit Kula, Elif Hacıhasanoğlu, and Kevser Didar İskender"
slug: automatic-guitar-tuner
order: 1
date: Fall 2020
shortAbstract: This report briefly describes the design and construction of a microcontroller-based guitar tuner device with DC motors.
abstract: This report briefly describes the design and construction of a microcontroller-based guitar tuner device that consists of an amplifier circuit, signal processing algorithms, a decoder, H-bridges, pick-up sensors, and DC motors. To be continued...
---

## Introduction

During [Bogazici University Mechanical Engineering Department](https://www.me.boun.edu.tr/)'s Mechatronics (ME 331) class, we designed and built an automatic guitar tuner device with a team of six mechanical engineering students. It was a real team effort, and everyone contributed substantially to the project's success. In the end, the device was capable of tuning the guitar accurately with motors without the need for manually tuning each string. All the user had to do was play a string and wait for the device to tune the string.

We put tremendous effort into this project. It required advanced knowledge of signal processing, electronics, and programming. Therefore, we spent over 80% of the time researching and discovering new things. Moreover, building the mechanical structure required using tools we had never tried before, like a drill press and a circular saw. We drew and 3D printed some parts as well. Furthermore, we learned a lot about planning project timelines, task distributions, and communication among the team members.

This report provides brief information on the project so one can replicate, contribute and make use of it.

## Preparation

Firstly, to make the goal precise, we tried to visualize how this device would work. The conclusion was this:

1.  The user selects the tuning they desire.
2.  The user plays the guitar so that the device can hear it.
3.  The device tunes the guitar until the desired pitch is achieved.

Then we examined and thought about each step.

The tuning selection part was the simplest one. With buttons and a microcontroller, a circuit could be built that takes inputs from the user. Moreover, with an LCD screen, the device could be more user-friendly. After the tuning selection, each string's pitch will be assigned, and the device will know the goal. For example, if the user selects E standard tuning, the sixth string's fundamental frequency must be 82.4 Hz.

The second part was tricky. Technically a microphone can be connected to the microcontroller so that it can hear sounds, but how can it decide whether the string pitch is correct or not? It turns out that the only characteristic of a string's sound that could be changed is its fundamental frequency. So if the device could calculate the string's fundamental frequency, it would be enough. There are numerous methods to calculate the fundamental frequency of a sound wave, and it is discussed in Subsection 3.4.

If the device could hear the strings' sounds and calculate their fundamental frequencies, the next step would be tuning the guitar to the assigned pitches. Thankfully, a microcontroller can do that with DC motors! If one turns the tuning key away from them, the string will be tightened, making the pitch higher. Conversely, if one turns the tuning key toward them, the string will loosen, making the pitch lower. The device's task is to tune the guitar and ensure each string's frequency has its assigned value.

## Design and Construction

To be continued...

## Conclusion

A video of the tuner can be seen below. Even though the video is in Turkish, English subtitles are available.

<div style="position: relative; width: 100%; padding-top: 56.25%; margin-top: 16px;">
<iframe
    width="100%"
    height="100%"
    style="position: absolute; top:0px; left:0px;"
    className="absolute top-0 left-0"
    src="https://www.youtube-nocookie.com/embed/nXmTJzbAJRM"
    title="YouTube video player"
    frameborder="0"
    allowfullscreen
></iframe>
</div>

<h2 class="nocount">References</h2>

1. ...
2. ...
