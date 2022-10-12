# First steps towards a home lab
Recently I have bought an Intel NUC, primarily to self-host Home Assistant and some other software that you would expect in a [home lab](https://www.reddit.com/r/homelab/). My first step was to install Ubuntu Server with a [bootable usb](https://ubuntu.com/tutorials/create-a-usb-stick-on-macos#1-overview). For this step it is useful to connect a keyboard and a monitor. Once that was setup I generated an SSH key and shared the public part of the key with my other computer. This allows me to connect to the Intel NUC remotely over my home network, so it can be stored away. 

&nbsp;

The next step was to open up a port on my home network, so I was able to reach to NUC over the public IP. This, obviously, introduces some security risks so I followed the remedies prescribed by the [Home Assistant blog](https://www.home-assistant.io/blog/2015/12/13/setup-encryption-using-lets-encrypt/).