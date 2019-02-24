---
title: "Creating and Using Ssh Keys"
date: 2017-11-07T23:31:17-05:00
description: "Connect to your server more securely and faster with ssh keys."
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: "/images/articles/ssh.jpg"
haveImage: true
categories: ["DevOps"]
keywords: ["ssh keys"]
draft: false
---

{{<contentTitle title="What are SSH Keys?">}}

SSH keys are a pair of keys, private and public keys, that serve as a way to login to a virtual private server with secure shell. These keys are simple files with a long string of characters. SSH Keys are based on the public key cryptography, which is used for the encryption of the data stream between systems. SSH keys are the most common way to connect to a server.


{{<contentTitle title="Why use SSH Keys?">}}

SSH keys provide a more secure method of connecting to your server than password authentication. Passwords can be hacked with brute force attacks. These attacks occurs when a malicious user uses an automated software to guess a user’s password a few thousand times per second. SSH keys help to increase security drastically and virtually eliminate these threat of brute force attacks. You can even have the convenience of connecting to your VPS securely without entering a password.

{{<contentTitle title="Prerequisite">}}

- Have access to a VPS with openssh
- Know your way around the command line

<h3 class="text-center pt-4">Goals:</h4>
<hr/>

In this article, we will run through setting up your SSH keys.

You will complete the following tasks:

- Creating a non-root user
- Creating SSH keys
- Copying your public key to your remote server
- Login to your server using SSH keys
- And disabling password-based login

{{<contentTitle title="Create a non-root user account">}}

Let’s begin by creating a non root user account on your server. No need to do this step if you already have another user other than root. Feel free to skip down to create ssh keys.

Log into your server with your root user. Replace my ip address with your VPS ip address.

<span class="hl-info">terminal</span>
```bash
$ ssh root@104.236.28.27
```

Once you are logged in, enter the <span class="notice">adduser your-username</span> command. This command will start the process of creating a user with a few prompts. The first one will require you to make a password for the user and confirm it. The other prompts may be filled out or left blank.

<span class="hl-info">terminal</span>
```bash
$ adduser tjgore

  Adding user `tjgore' ...
  Adding new group `tjgore' (1000) ...
  Adding new user `tjgore' (1000) with group `tjgore' ...
  Creating home directory `/home/tjgore' ...
  Copying files from `/etc/skel' ...
  Enter new UNIX password: 
  Retype new UNIX password: 
  passwd: password updated successfully
  Changing the user information for tjgore
  Enter the new value, or press ENTER for the default
    Full Name []:
    Room Number []: 
    Work Phone []: 
    Home Phone []: 
    Other []: 
  Is the information correct? [Y/n] 
```

Let’s also make this user have root privileges. To do this we have to edit the <span class="notice">/etc/sudoers</span> file and add <span class="notice">your-username ALL=(ALL:ALL) ALL</span> below root as shown below.

Enter <span class="notice">nano /etc/sudoers</span> to edit the file.

<span class="hl-info">terminal</span>
```bash
$ nano /etc/sudoers

  # User privilege specification
  root    ALL=(ALL:ALL) ALL
  tjgore ALL=(ALL:ALL) ALL
```

Make sure to save the file and close it for the changes to take place. Log out of your server and try to log back in with the newly created user.

<span class="hl-info">terminal</span>
```bash
$ ssh tjgore@104.236.28.27
```

Test the user to see if it has root privileges with sudo ls -a /root. You should see a prompt to enter your current user password and then a list of the files in root. If you did not have root privileges, you should see "Permission denied".

{{<contentTitle title="Creating SSH Keys">}}

The first step to setting up your SSH keys is to create an ssh public and private key pair on your local computer.

Run <span class="notice">ssh-keygen -t rsa</span> to generate an RSA key pair.

**This command is to be executed on your local computer and not your server.**

<span class="hl-info">terminal</span>
```bash
$ ssh-keygen -t rsa
```

After entering the above command, you should be ask to enter the file location where you would like your keys to be stored as shown below.

<span class="hl-info">terminal</span>
```bash
Generating public/private rsa key pair.
Enter file in which to save the key (/home/tyndale/.ssh/id_rsa):    
```

Pressing Enter will save your keys in the default location <span class="notice">$HOME/.ssh/id_rsa</span>. You should now be prompted to enter a passphrase. If you already have ssh keys in this location the command will ask you to overwrite them. Feel free to save your keys in a different location, if you do not want to overwrite the keys.

<span class="hl-info">terminal</span>
```bash
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
```

This passphrase(password) is not necessary and can be left blank by pressing Enter. If you do enter a passphrase, this will be used as a Two-factor authentication for your server.

In other words, for you or anyone to have access to your server, they must have both your private key and the passphrase or else they can not login. This passphrase provides additional security. The only drawback is that on each login you have to type in your passphrase, whereas if you leave the passphrase blank, you don't need to type any passphrase(password) to login.

Even though you don't need to type in a passphrase, your server is still secure because of your ssh keys. They act as your password. For this article, we will work without a passphrase. If you do add a passphrase you will just need to remember it and enter it upon each login attempt to your server.

Upon completing your ssh keys, you should have gone through the output shown below.

<span class="hl-info">terminal</span>
```bash
Generating public/private rsa key pair.
Enter file in which to save the key (/home/tyndale/.ssh/id_rsa):
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/tyndale/sshkey.
Your public key has been saved in /home/tyndale/sshkey.pub.
The key fingerprint is:
02:55:cb:c2:5a:5b:74:bc:f6:9f:cf:1f:4b:7c:6c:d4 tyndale@tyndale-S400CA
The key's randomart image is:
+--[ RSA 2048]----+
|      ..o..      |
|     o o o.      |
|    . + +  .     |
|     + +  o     .|
|    . o S. .    E|
|       .    . .o |
|             . =+|
|              +o+|
|               o=|
+-----------------+

```

All of your ssh keys are stored in files in your $HOME/.ssh/ folder. This is the default location, but you have the option to save your keys anywhere.

<span class="notice">$HOME/.ssh/id_rsa</span> file: your private key.

<span class="notice">$HOME/.ssh/id_rsa.pub</span> file: your public key.

Never share your private key, this acts as your password. Your public key is placed on your server and is used to identify your private key to connect you to your server.


Additional options for the ssh-keygen command

<span class="notice">ssh-keygen -t rsa -b 4096 -f ~/any/file/you/want -C "your comments here"</span>

- -t rsa : indicates the type of key to create, whether it is “dsa”, “ecdsa”, “ed25519”, or “rsa”.
- -b 4096 : indicates the number of bits in the key. Default is 2048 bits, minimum is 768 bits.
- -f ~/any/file/you/want : the file location of the key. This option allows you to skip the file location question as you saw previously above.
- -C "My web-server key" : creates a comment with the key.

{{<contentTitle title="Copying the public key to your remote server">}}

After your keys have been created, we will transfer only the public key to your server.

We will use the <span class="notice">ssh-copy-id</span> command to copy your public key to your server.

<span class="hl-info">terminal</span>
```bash
$ ssh-copy-id -i $HOME/.ssh/id_rsa.pub tjgore@104.236.28.27 
```

The -i option in the command above gives the file location of your public key. This command will log into your server, take your public key from your local computer and copy it to the <span class="notice">$HOME/.ssh/authorized_keys</span> file on your server. The command may also request your server user's password to complete the task.

<span class="hl-info">terminal</span>
```bash
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
tjgore@104.236.28.27's password: 

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'tjgore@104.236.28.27'"
and check to make sure that only the key(s) you wanted were added.

```

If you don\’t have the <span class="notice">ssh-copy-id</span> command installed, you can pipe the public key over ssh with the following command <span class="notice">cat $HOME/.ssh/id rsa.pub | ssh tjgore@1 04.236.28.27 “cat >> .ssh/authorized_keys”</span>. It does the same thing as the ssh-copy-id command.

<span class="hl-info">terminal</span>
```bash
$ cat $HOME/.ssh/id rsa.pub | ssh tjgore@104.236.28.27 “cat >> .ssh/authorized_keys”
```

{{<contentTitle title="Login using ssh keys">}}

Now log into your server with ssh keys. Since we did not enter a passphrase, we will be logged right in without needing to enter a password; but if you did enter a passphrase, you will be required to enter it here and upon every login attempt.

<span class="hl-info">terminal</span>
```bash
$ ssh tjgore@104.236.28.27
```

If your ssh keys where not generated in the default file location <span class="notice">$HOME/.ssh/id_rsa and $HOME/.ssh/id_rsa.pub</span>, you should edit your private key file permissions and log in using the following command <span class="notice">ssh -i /public/key/location tj@104.236.28.27</span>.

Your private key file permissions should be edited because your server will not match up with a private key with incorrect file access permissions. Run <span class="notice">chmod 600 /your-private/key/file-location</span> to set the correct file permissions for your private key.

You should now be able to login with your ssh keys, not located in the default ssh file location.

{{<contentTitle title="Disable root login and password-based logins">}}

Once you have ensured that you can login to your server with your ssh keys and your user has root privileges, you can disable your root login by editing the sshd_config file on your server.

Open the file with <span class="notice">sudo nano /etc/ssh/sshd_config</span>

In this file use ctrl+w to find "PermitRootLogin" and "PasswordAuthentication" and change them to "no" to disable root login and password based login.

<span class="hl-info">terminal</span>
```bash
PermitRootLogin no
    ####
PasswordAuthentication no  
```

Restart ssh to make the changes take effect.

<span class="hl-info">terminal</span>
```bash
$ sudo service ssh restart
```

You will only be able to login with ssh keys from now on.

Congrats you have successfully setup SSH keys with your server.

{{<contentTitle title="Summary">}}

SSH keys are convenient and easy to setup and use. They provide a quick and more secure way of logging into your server. I suggest that you always use ssh keys when accessing your server and take advantage of its benefits.

