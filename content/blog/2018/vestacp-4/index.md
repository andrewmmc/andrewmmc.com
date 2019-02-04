---
title: Get free SSL Certificates from Let’s Encrypt for your domains
subtitle: Setup Ubuntu 16.04 LEMP server with VestaCP on GCE (Part 4)
date: '2018-05-23T00:00:04.000Z'
---

In the [previous article](https://medium.com/andrewmmc-io/upgrade-php-version-to-7-2-from-7-0-c005a0926642), we talked about how to upgrade PHP version to 7.2. In this article, we will continue to get free SSL certificates for our domains.

![](./image1.png)

## 4. Get free SSL Certificates from Let’s Encrypt for your domains

Let’s Encrypt offers Domain Validation (DV) certificates for free. It is an open SSL certificate authority that maintained by Internet Security Research Group (ISRG).

Although an SSL cert signed by Let’s Encrypt is only valid for 90 days, we can use an ACME agent certbot to help us to maintain the status of certs and renew them. In short, you can get wildcard certificates for your domains free.

If you are interested to know more about Let’s Encrypt, please check this article: [How Let’s Encrypt works](https://letsencrypt.org/how-it-works/).

![](./image2.png)

As we’re using Ubuntu 16.04 LTS with Apache in this tutorial, click [this link](https://certbot.eff.org/lets-encrypt/ubuntutyakkety-apache) or follow the instruction below to install certbot on our server.

```
$ apt-get update
$ apt-get install software-properties-common
$ add-apt-repository ppa:certbot/certbot
$ apt-get update
$ apt-get install python-certbot-apache
```

![](./image3.png)

During the installation process, you may need to type your personal email and agree the terms. Simply type a to agree the Terms of Service.

![](./image4.png)

All existing domains will be listed in the terminal window. Make sure that you have already updated the DNS records pointing to your server. Simply leave blank to select all domains to activate HTTPS.

After installed certbot, run the following command. It will get certificates for you and have certbot to edit your Apache configuration automatically.

```
$ certbot --apache
```

**Congratulations!** Your encrypt SSL certificates are ready. However, you still need to apply those certificates to your websites and Vesta control panel. [Check out our next post to apply certificates to your websites and force your websites in HTTPS connection.](https://medium.com/andrewmmc-io/apply-ssl-certificates-to-your-website-and-force-using-https-connections-37e481f7a29d)

### Series: Setup Ubuntu 16.04 LEMP server with VestaCP on GCE

* Part 1: [Setup VM instance on Google Cloud Compute Engine](https://medium.com/andrewmmc-io/setup-vm-instance-on-google-cloud-compute-engine-1e7063cfcde6)
* Part 2: [Install VestaCP with LEMP on your VM instance](https://medium.com/andrewmmc-io/install-vestacp-with-lemp-on-your-vm-instance-29dda138bb7d)
* Part 3: [Upgrade PHP version to 7.2 from 7.0](https://medium.com/andrewmmc-io/upgrade-php-version-to-7-2-from-7-0-c005a0926642)
* **Part 4: Get free SSL Certificates from Let’s Encrypt for your domains**
* Part 5: [Apply SSL Certificates to your website and force using HTTPS connections](https://medium.com/andrewmmc-io/apply-ssl-certificates-to-your-website-and-force-using-https-connections-37e481f7a29d)
* Part 6: [Apply SSL certificate by Let’s Encrypt to VestaCP](https://medium.com/andrewmmc-io/apply-ssl-certificate-by-lets-encrypt-to-vestacp-b2e255e93496)
