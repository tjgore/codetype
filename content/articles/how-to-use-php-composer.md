---
title: "How to Use Php Composer"
date: 2018-06-23T02:22:58-05:00
description: "Understanding how to use php composer better"
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: "/images/articles/composer.jpg"
haveImage: true
categories: ["PHP"]
keywords: ["how to use php composer", "what is php composer"]
draft: false
---

{{<contentTitle title="What is composer and why should you use it?">}}

Composer is a dependency manager for PHP. For each project, composer downloads the libraries or packages your project requires and helps you to manage them.

Composer is inspired by Node’s npm and Ruby’s bundler and runs through the command line just as they do.

Composer is used in many modern day PHP frameworks such as Laravel, CodeIgniter and Symphony.


Learning how to use composer is extremely useful and can save you a lot of time. Here a few reasons why you would want to use composer:

- To allow you to download open-source packages and their dependencies and use them in your project
- To ensure all the developers working on the same project are running the same package versions
- To prevent you from reinventing the wheel for every task you run into
- To keep packages updated
- To help with autoloading all your classes

**Dependencies are packages, libraries, or code needed in order for the main code base to work.**


{{<contentTitle title="Prequisites">}}

You must have PHP 5.3.2 or higher installed. You can check to see if PHP is installed by running <span class="notice">php -version</span> in the command line.
You should also have a PHP server environment. You can quickly set this up by installing [wamp](http://www.wampserver.com/en/) or [xampp](https://www.apachefriends.org/index.html).

{{<contentTitle title="Installing composer">}}

Throughout this article I will be using Ubuntu 14.04, but the following should be the same for Mac OS X.

To get started with composer, we first need to install and make sure it's working. To install composer enter the following commands into your terminal.

<span class="hl-info">terminal</span>
```bash
curl -s https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

The fist command downloads composer.phar to the current directory and the second command renames and moves composer.phar to the /usr/local/bin folder, which allows you to run composer from any directory on your system.

Test composer by running composer. If it was successfully installed, you should see composer, the version installed and a list of composer commands as shown below.

![alt text](/images/articles/composer-shot.jpg "Composer")

For windows users, install composer by downloading and running the Composer-setup.exe found [here](https://getcomposer.org/doc/00-intro.md#installation-windows).

{{<contentTitle title="Installing packages with Composer">}}

[Packagist](https://packagist.org/) is a repository for php packages. This is where you can search and find almost any package you need for your project. You can also publish your own packages for other developers to use.

Let's search for faker, which is a package for generating fake data for testing purposes. Select the first package called fzaninotto/faker.

You should be able to see all the information concerning the package such as the composer command to install it, the author, the github repo link, the description, total number of installs, the package version and an example of how to use the package.

Before we install faker we should create an empty project folder and initiate composer.

<span class="hl-info">terminal</span>
```bash
$ mkdir practice-composer
$ composer init
```

The <span class="notice">composer init</span> command displays a prompt asking you to fill out some common questions to create the <span class="notice">composer.json</span> file.

The prompt will ask you to enter:

- Package name (vendor/name)
- The description
- The author
- Minimum stability
- Package type
- The license
- Package to require with a version constraint. Should be in format vendor/package:1.0.0.
- and the Development required package

Fill in the questions with your information and if in doubt about what to fill in leave it blank or enter “n”.

Your composer.json should look like this with your information.

<span class="hl-info">composer.json</span>
```bash
{
  "name": "tjgore/practice-composer",
  "description": "a practice project for composer",
  "type": "project",
  "license": "MIT",
  "authors": [
      {
          "name": "TJ Gore",
          "email": "tjgore@example.com"
      }
  ],
  "require": {}
}
```

This is not necessary but is a helpful way to describe and get your compose.json started. Even if you skip this step, your compose.json file will still be created but with less details.

We will now install the faker package with <span class="notice">composer require fzaninotto/faker</span>. This command will create a composer.json file if you did not create it with composer init.

The command will update your composer.json file, add a composer.lock file and a vendor folder with the fzaninotto/faker package code and dependencies, if any.

Your composer.json require key will now have "fzaninotto/faker": "^1.7" as seen below.

<span class="hl-info">composer.json</span>
```bash
{
  "name": "tjgore/practice-composer",
  "description": "a practice project for composer",
  "type": "project",
  "license": "MIT",
  "authors": [
      {
          "name": "TJ Gore",
          "email": "tjgore@example.com"
      }
  ],
  "require": {
      "fzaninotto/faker": "^1.7"
  }
}
```

<p class="font-weight-bold">You could have also manually added "fzaninotto/faker": "^1.7" in your composer.json file require section and run <span class="notice">composer install</span>. That would have created the same result as before.</p>


The composer.json require key contains all the packages your project needs in order to work. To add packages that are only used for development like PHPUnit, add the --dev flag to your composer require command like the following command <span class="notice">composer require --dev phpunit/phpunit</span>.

You should now see a new key added to your composer.json require-dev.

<span class="hl-info">composer.json</span>
```bash
{
  "name": "tjgore/practice-composer",
  "description": "a practice project for composer",
  "type": "project",
  "license": "MIT",
  "authors": [
      {
          "name": "TJ Gore",
          "email": "tjgore@example.com"
      }
  ],
  "require": {
      "fzaninotto/faker": "^1.7"
  }
  "require-dev": {
      "phpunit/phpunit": "^6.5"
  }
}
```

You should also take a look in your vendor folder and you will notice that a few more folders got added. These are phpunit package's dependencies.

This is where composer really comes in handy because we did not have to know or manually install any of those other packages. Composer handles all the heavy lifting for us.

<p class="font-weight-bold">Make sure all the composer commands that you run are within the right project directory.</p>


Take note that the composer.json declares the packages and general versions you want to download, while the composer.lock file is created and updated on every package download and shows the details of the packages and specific versions that were downloaded and are being used in your project.

<span class="hl-info">composer.json</span>
```js
"require": {
    "fzaninotto/faker": "^1.7"
}
```
<span class="hl-info">composer.lock</span>
```js
[
  {
    "name": "fzaninotto/faker",
    "version": "v1.7.1",
    "source": {
        "type": "git",
        "url": "https://github.com/fzaninotto/Faker.git",
        "reference": "d3ed4cc37051c1ca52d22d76b437d14809fc7e0d"
    },
    "dist": {
        "type": "zip",
        "url": "https://api.github.com/repos/fzaninotto/Faker/zipball/d3ed4cc37051c1ca52d22d76b437d14809fc7e0d",
        "reference": "d3ed4cc37051c1ca52d22d76b437d14809fc7e0d",
        "shasum": ""
    },
    "require": {
        "php": "^5.3.3 || ^7.0"
    },
    "require-dev": {
        "ext-intl": "*",
        "phpunit/phpunit": "^4.0 || ^5.0",
        "squizlabs/php_codesniffer": "^1.5"
    },
    "type": "library",
    "extra": {
        "branch-alias": {
            "dev-master": "1.8-dev"
        }
    },
    "autoload": {
        "psr-4": {
            "Faker\\": "src/Faker/"
        }
    },
    "notification-url": "https://packagist.org/downloads/",
    "license": [
        "MIT"
    ],
    "authors": [
        {
            "name": "François Zaninotto"
        }
    ],
    "description": "Faker is a PHP library that generates fake data for you.",
    "keywords": [
        "data",
        "faker",
        "fixtures"
    ],
    "time": "2017-08-15T16:48:10+00:00"
  }
],
```

{{<contentTitle title="Using your installed packages">}}

Now that you have added the faker package to your project, let’s use it. Create an index.php file in your project folder and add the following code to it.

<span class="hl-info">index.php</span>
```php
<?php
  require_once 'vendor/autoload.php';
  use Faker\Factory;

  $faker = Factory::create();

  echo $faker->name;
  echo '<br>';  
  echo $faker->address;
  echo '<br>';
  echo $faker->text;
```

Open your index.php file in your local php server environment under localhost and view the results. You should see something like below. We most likely will not have the same values, since the purpose of Faker is to create random fake data.

<span class="hl-info">output</span>
```
Dr. Sister Rippin
5425 Enrico Cliffs Lockmanhaven, NY 00395-3102
Molestias quae voluptates asperiores praesentium et. Dolore tempore perspiciatis dolorem qui. Architecto laborum animi modi et. Nemo ratione harum repellat.
```

The faker package contains a Factory class with a bunch of useful functions to allow us to generate fake data for testing and demo purposes.

Imagine all the packages we can install and save development time. Just think about all the hassle we would have if we had to manual download a package with 10 dependencies everytime we wanted to use or update it.



{{<contentTitle title="Updating Packages">}}

Updating packages with composer is very simple. It's as easy as executing <span class="notice">composer update</span>. This command will look within your composer.json and install the latest version of all the packages according to their semantic version format.

For more information on semantic versioning, take a look [here](https://docs.npmjs.com/misc/semver).

{{<contentTitle title="Composer Namespacing and Autoloading">}}

As seen above, when we were using the faker package, we only needed to require <span class="notice">vendor/autoload.php</span> and not the faker package source. This is because composer did a lot of work for us in the background and handled the autoloading and namespacing. If you check your vendor folder you should see a composer folder.


All the files in this folder were created by composer and helped to manage the package's namespacing. Open <span class="notice">autoload_psr4.php</span> and you will see the Faker namespace pointing to the Faker folder location.


You can also add your own classes and files to the autoloading by using the autoloading psr-4 object and the files and classes arrays within the composer.json file. However, I won't dive into this topic beacuse that deserves an article for itself. If you are interested in learning how to add your own classes to composer's autoloading, check out this [video](https://www.youtube.com/watch?v=Llok4cE88nQ&list=PLZU0qJlzY07WwVlxzHMwN0pJmMrc7LMLT&index=13).


{{<contentTitle title="Composer Commands">}}

You have already used a few common composer commands, but there are still quite a bit more you will need to know to use composer even better.

We will go over all the commands we used throughout the article plus some extras to wrap up.

- **composer Init** initiates the compposer.json file.
- **composer require vendor/package** downloads the package, adds it to your vendor folder, and adds it to the required key in your compose.json file. If you use **composer require --dev vendor/package**, the package will be added to the require-dev key in your composer.json file instead.
- The **composer install** command looks for a composer.lock file and installs all the packages within the file. If the composer.lock file does not exist, the composer update command is run automatically.
- The **composer update** command looks for a composer.json file and downloads all the latest versions of the packages listed in the composer.json file and creates the composer.lock file. The downloaded packages are stored in the vendor folder. This command is also used to update your packages.
  - Most times when you pull a php project from github they will contain a composer.json file and no vendor folder. Running composer install will install all the packages needed to run the project.
  - **Composer install and composer update** can use the <span class="notice">--no-dev</span> flag to perform the commands on the required packages only; while the --dev flag performs the commands on the required-dev packages, which are only needed for development. By default both the install and update commands run on both the required-dev and required packages.
- The **composer create-project vendor/package my-project** command will create a project folder called my-project based on the package. This is commonly seen with laravel when starting a new project. For example, **composer create-project laravel/laravel blog** creates a blog project with the laravel package.
- To remove a package from composer use the **composer remove vendor/package** command.
- **composer show** will list out all of the available packages in your project.
- **composer outdated -a** will show a list of installed packages in different colors with their current and latest version. The colors indicate whether the packages need to be updated or not. Green indicates the package is up to date. Orange/yellow indicates the package has a new version but may not include backwards compatibility; and red indicates a new version is available and is backward compatible, therfeore you should update it.
- To update Composer itself to the latest version, run the **composer self-update** command. It will replace your composer.phar with the latest version.
- When you add a class or file to your composer.json autoload key, you can update the autoloader found in the vendor/composer folder by using the **composer dump-autoload** command.

Composer is really a handy tool to help you with your PHP development and in today's development, in almost all PHP based project you will come across composer. Many popular PHP frameworks that you will use are also already using Composer. Integrating and using composer is very easy once you get the hang of it.

As a PHP developer, you will definitely love using composer, especially when you realise how many packages out there already do what you need for your project.

Have fun and continue coding!
