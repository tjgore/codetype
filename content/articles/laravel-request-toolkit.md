---
title: "Laravel Request Toolkit"
date: 2019-04-01T03:49:15-05:00
description: "Using laravel request"
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-primary-gradient"
categories: ["Laravel"]
keywords: ["Quicky refrence to laravel request", "Using laravel request"]
draft: false
---


<span></span>
```php
<?php
# Get the request url
$request()->url();

# Get all input values as array
$request()->all();
$request()->(['name']);

# Get input field name as string
$request('name');
$request->name;

$request()->fullUrl();

# Get input field called name and if empty return the default TJ
$request->input('name', 'TJ');

# Get json {user: { name: 'Tim'}}
$request()->input('user.name');

$request()->method();

# Check if request has admin in url
if($request->has('/admin*')) 
{...}

# Get all query string in url
request()->query();

# Get query string name and if empty use default TJ
$request->query('name', 'TJ')
```