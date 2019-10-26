---
title: "Laravel Users and Roles"
date: 2019-06-17
description: ""
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-dark-gradient"
categories: ["Laravel"]
keywords: ["Laravel user and roles"]
draft: true
---

## Users and Roles: Migrations and Models

Create a roles table
```bash
# create user model
php artisan make:model Models/User

# create role model and migration
php artisan make:model Models/Role --migration 

# create role_user migration
php artisan make:migration create_role_user_table
```
This allows a user to have many roles and a role to have many users, a many to many relationship.
Many to many relationships have pivot/intermediate tables.

**roles migration**

```php
<?php
...
public function up()
  {
    Schema::create('roles', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->string('role');
      $table->timestamps();
    });
  }
```

**role_user pivot migration**

```php
<?php
...
public function up()
  {
    Schema::create('role_user', function (Blueprint $table) {
      $table->unsignedBigInteger('role_id');
      $table->unsignedBigInteger('user_id');
    });
  }
```

Run migrations to create `roles` and `role_user` database tables
```bash
php artisan migrate
```

Create relationships within their respective Models.

**User Model**
```php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
```

**Role Model**
```php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
```