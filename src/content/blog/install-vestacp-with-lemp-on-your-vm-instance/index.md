---
title: Install VestaCP with LEMP on your VM instance
pubDate: '2018-05-22T16:15:01.018Z'
description: Setup Ubuntu 16.04 LEMP server with VestaCP on GCE (Part 2)
---

#### Setup Ubuntu 16.04 LEMP server with VestaCP on GCE (Part 2)

In the [previous article](/blog/setup-vm-instance-on-google-cloud-compute-engine/), we talked about how to setup a VM instance on Google Cloud for our web server. In this article, we will continue to install VestaCP with LEMP on the VM instance created.

![](./1*wN8p1py4LTtxyomtaBKjsQ.webp)

### 2. Install VestaCP with LEMP on your VM instance

**(1) Enter your instance via SSH connection**

![](./1*VYFBpYX7W-ieU-pJLYyoOw.webp)

First, open the console on your computer, and connect to your server using SSH. Remember, It is not suggested to log in to root directly with the password.

```
$ ssh <USERNAME>@<SERVER_IP>
```

You may see the authenticity warning when you connect to the server first time. Type `yes` to continue.If you successfully log in to your server, you will see the following message:

![](./1*6mzG-6A3L9i1jIcIYNUttg.webp)

Then switch to root account by typing following command in the console window:

```
$ sudo su -
```

Before downloading VestaCP to the instance, you may need to update and upgrade the packages installed on your server.

```
$ apt-get update
$ apt-get upgrade -y — force-yes
```

**(2) Download VestaCP install script and install it to the server**

![](./1*-9yJI4R8f8y4oUws1TrKXQ.webp)

After running above commands, type the commands below to download VestaCP install script to the server.

```
$ cd /tmp
$ curl -O http://vestacp.com/pub/vst-install.sh
```

If you would like to customize your installation, you may check [here](http://vestacp.com/install/) for the installation command suggested by VestaCP. Or just simply run below for the default modules:

```
$ bash vst-install.sh
```

![](./1*r-t2PM30_du3odmB4IhItQ.webp)

If you get the error message that prompting you the admin user group exist, simply add `-f` after the command and run it again:

You will see an installation screen that showing software will be installed.

![](./1*xx5G6F1Z8eR7ybgJJaNA5A.webp)

Type `y` to continue the installation progress.

![](./1*0VdnYof2SUOMQ-yzemaBVQ.webp)

You need to enter your email address and hostname (your domain name) for the installation as well. It may take few minutes to finish the installation progress.

**(3) Expose TCP/8083 port to public for VestaCP**

![](./1*MJmzb48BW-E4HAyJUMMrWQ.webp)

Before we enter the control panel installed on the server, we need to expose 8083 port to the public in firewall rules as VestaCP is using 8083 port. Go to `VPC network` and `Firewall rules`, and click `Create firewall rule`.

Simply type `vestacp` as the rule name, and type `http-network` and `https-network` in Target tags (You should see the related tags in your machine details).

If you are not sure the correct tags name, you can also choose `All instances in the network` in the options. In Protocols and ports, type `tcp:8083` to expose 8083 port to the public.

After that, click `Create` and wait for few seconds.

**(4) Mark your admin username and password down**

![](./1*fQDZxvyvz5kWSFs_bG37mw.webp)

You will see a successful message in the console after the installation progress. Remember mark your admin username and password down!

After that, go to the panel URL shown on the terminal window (Don't forget to update the DNS record of your domain!)

![](./1*kWd5RSJCDmcbm_uMoNXG0A.webp)

You may see the following screen before you enter the control panel. No worries, we will fix this later. Just simply click `Proceed to `.

![](./1*vx1biCABkuKakK1lQf09VQ.webp)

**Congratulations!** VestaCP is ready. [Check out next post for installing PHP 7.2 for your website.](/blog/upgrade-php-version-to-7-2-from-7-0/)
