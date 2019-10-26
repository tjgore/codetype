---
title: "Laravel Cheatsheet"
date: 2019-06-17
description: ""
author: ""
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-primary-gradient"
categories: ["Laravel"]
keywords: ["Laravel cheatsheet"]
draft: true
---

## Artisan

```bash
# Create laravel project with folder blog
composer create-project --prefer-dist laravel/laravel blog

# start php server
php artisan serve
# or run on custom host and port
php artisan serve --host=babycar.tes --port=8000

# generate key
php artisan key:generate

```

## Migration

```bash
# create built in authentication
php artisan make:auth

# run migrations
php artisan migrate
```