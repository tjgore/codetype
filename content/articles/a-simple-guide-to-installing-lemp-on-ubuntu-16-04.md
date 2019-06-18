---
title: "A Simple Guide to Installing Lemp on Ubuntu 16.04"
date: 2017-11-07T00:22:19-05:00
description: "Get your own web server up and running in no time."
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-primary-gradient"
categories: ["DevOps"]
keywords: ["LEMP", "VPS", "linux", "nginx", "php-fpm", "ubuntu", "simple", "guide"]
draft: false
---

## What is LEMP?

LEMP is an acronym for a software stack consisting of a Linux OS (L), Nginx web server (E), Mysql database (M), and PHP programming language (P). LEMP is commonly used on servers to serve web pages and application across the web. LEMP is an alternative to the more popular software stack, LAMP, which replaces the Nginx web server for the Apache web server.

## Why Use LEMP?

You may be wondering why use LEMP when LAMP is more popular and used across the internet. Some benefits that may make you want to use LEMP are as follows:

- Nginx is faster than Apache at serving static content
- Nginx can handle a much higher concurrent connection load. It was specifically written to address performance and scalability issues associated with Apache.
- It uses an event-driven, asynchronous and non-blocking approach.
- Nginx can be used as a [reverse proxy](https://www.nginx.com/resources/glossary/reverse-proxy-server/) for the LAMP stack.
- Lightweight and efficient

## Prerequisite

- Have a Digitalocean Ubuntu 16 VPS. This is not a strict requirement but to avoid any difference, I recommend you use Digitalocean.
- Have ssh access to your VPS, preferable a non root user with root privileges.

<h4 class="text-center mt-4">Goals:</h4>
<hr/>

In this article, you will learn how to install the LEMP stack on your VPS and get started with your own Nginx web server.

You will go through the following steps:

- Installing Nginx
- Installing MYSQL
- Configure Nginx to work with PHP
- Test your LEMP set up


## Prepare Your VPS

First log into your VPS using ssh.


```bash
# terminal
$ ssh gore@128.199.171.208
```
Before you begin to install anything on your server, you should make sure all your packages on your VPS are up to date with these commands.

```bash
# terminal
$ sudo apt-get update && apt-get upgrade
```

Also check if Apache is already installed with `apache2 -v`. If apache is installed, you will see the version number and if not, you will get an output saying it’s not installed.

```bash
# terminal
$ apache2 -v
  The program 'apache2' is currently not installed. To run 'apache2' please ask your administrator to install the package 'apache2-bin'
```

If apache2 is installed see if it is running with this command.

```bash
# terminal
$ sudo service apache2 status
```

And if apache2 is running as your server, you should stop it before continuing. You can stop and uninstall apache2 with `sudo service apache2 stop` and `sudo apt-get --purge remove apache2`.

```bash
# terminal
$ sudo service apache2 stop
$ sudo apt-get --purge remove apache2

```

## Installing Nginx

You can now install Nginx with the following command.

```bash
# terminal
$ sudo apt-get install nginx
```

Given everything ran smoothly, you should now have the Nginx web server installed.

To check if Nginx is installed open a web browser and enter your vps ip-address, mine is currently 128.199.171.208. You can find your IP address in DigitalOcean console.

![alt text](/images/articles/digitalocean-console.jpg "DigitalOcean-console")

Below is the web page you should see, if nginx was installed successful

![alt text](/images/articles/nginx-welcome.jpg "Nginx-welcome")

## Installing MYSQL

Next you will install MYSQL, which is a database management software used to store information.

Install it by entering

```bash
# terminal
$ sudo apt-get install mysql-server
```

During your mysql installation you will be prompted to enter a password for the root user for MYSQL, not your VPS root user. This is a new root user for your MYSQL only.

I suggest you enter a very strong password which should include a combination of lowercase and uppercase letters , numbers, special characters and a minimum of 10 characters long.

![alt text](/images/articles/mysql-root-pswd.jpg "MYSQL-root-pswd")

When the mysql installation is completed. You should secure your MYSQL by running the security script provided by MYSQL `mysql_secure_installation`. Follow the instructions and enter "y" for yes to allow the script to execute its tasks.

This script will remove anonymous users, the test database,disable remote logins and load in the new rules to make MYSQL accept the changes.

## Installing PHP-FPM

You will move on to installing PHP-FPM. PHP-FPM stands for “fastCGI process manager” and will be used to execute php for Nginx.

Run `sudo apt-get install php7.0-fpm php7.0-mysql` to install the necessary php packages to allow nginx to work with php and mysql.

After the installation of the packages, you need to edit the PHP configuration file and change `cgi.fix_pathinfo from 1 to 0`.

Making this change to your php.ini file secures your server, because the default setting 1 tells PHP to try to execute the closest file it can find , if the requested file cannot be found. A malicious user can use this to their advantage and create a script that will allow them to run other scripts they should not have access to.

Your php.ini file should be located in `/etc/php/7.0/fpm` folder. Use nano to open and edit your php.ini

Once you open the file using nano, you can use Ctrl+w to search the file for "cgi.fix_pathinfo".

```bash
# terminal
$ sudo nano /etc/php/7.0/fpm/php.ini

  cgi.fix_pathinfo=0
```

Restart php7.0-fpm for the changes to take effect.

```bash
# terminal
$ sudo service php7.0-fpm restart\
```

## Configure Nginx to use PHP

If you have reached this far, you should have LEMP fully installed, but you still need to configure Nginx to work with php.

Go to `/etc/nginx/sites-availble` folder and edit your default nginx file. You may have to uncomment or add the following lines shown below.

```bash
# terminal
$ sudo nano /etc/nginx/sites-available/default
```

```bash
location ~ \.php$ {
  include snippets/fastcgi-php.conf;

  #With php7.0-cgi alone:
  #fastcgi_pass 127.0.0.1:9000;
  # With php7.0-fpm:
  fastcgi_pass unix:/run/php/php7.0-fpm.sock;
}
```

You may remove the comments to make the file cleaner.

Save your file and test your nginx config with `nginx -t`.

```bash
# terminal
$ sudo nginx -t

  nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
  nginx: configuration file /etc/nginx/nginx.conf test is successful
```

If you see syntax is ok, restart your server.

```bash    
# terminal
$ sudo service nginx restart
```

## Test Your LEMP with PHP

Finally test your LEMP server to make sure it’s working and that it can process php. Go to your website directory `/var/www/html`and add an info.php file.

```php
# info.php
<?php 
phpinfo();
```

Open this page in your browser `http://your-ip-address/info.php`, and you should see the page as shown below.

![alt text](/images/articles/phpinfo.jpg "phpinfo") 

Do not keep the info.php file on your server. This allows anyone to few a lot of your server's details and reduces its security.

You have successfully installed LEMP and configure it correctly.