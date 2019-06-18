---
title: "Understanding Dependency Injection in PHP"
date: 2019-02-27T04:02:47-05:00
description: "In its simplest form, Dependency Injection is a software design pattern for writing better maintainable, modular and testable code."
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-primary-gradient"
categories: ["PHP"]
keywords: ["Dependency injection in PHP with examples", "Understanding Dependency Injection for beginners"]
draft: false
---

## Introduction

Last week I had a technical interview and questions about dependency injection came up and I was quite lost. So I took the initiative to learn more about the topic and write on it for a better understanding. 

I will cover what is dependency injection, explain it as simple as possible, and demonstrate how it’s used. A basic understanding of PHP object-oriented programming is needed to follow along. 

Let’s jump right into the definition of dependency injection.

## What is Dependency Injection?

In its simplest form, Dependency Injection is a software design pattern for writing better maintainable, modular and testable code. The main goal is to decouple objects. 

Dependency injection allows an object(client) to use another object(service) in a way that allows the service to be changed without affecting the client.

In other words, if the service’s code is changed or swapped for another service, the client should still be able to work without any changes to its code.
   
This concept is important because almost all projects have dependencies, and as your project grows, you should pay attention to how these dependencies are managed and maintained for the long run.

Before going into code examples, let me give a quick real-world example to better explain the concept.

Imagine you have a company and your company needs computers in order to use Microsoft Excel to keep track of records. In this case, your company is the client and the computers would be the service. Your business has a dependency on computers. The computers are used within your company to manage your company’s records.

With dependency injection, we should be able to change the brand or operating system of the computers without having to change how the company operates on a whole. 

Without dependency injection changing the computers to another brand or operating system would require changes to the company in order to work again. 

I hope this demonstrates how useful dependency injection can be especially when your company grows very large.

There are 3 types of dependency injection.

**1. Constructor Injection**

The service object is passed through a client’s class constructor.

**2. Setter Injection** 
    
The service object is passed into the setter method that is provided by the client class. Unlike the constructor injection, the setter injection allows the dependency to be optional.

**3. Interface Injection**

The service must implement an interface that is passed to a client’s setter or constructor method. This allows the service to be swappable with other services with the same interface.

You will see examples of all 3 types below.


## How to use Dependency Injection?

Here’s an example of a class without dependency injection.

```php
<?php

class Accountant {
    
    public $name;
    public $salary;
    
    public function __construct (string $name, int $salary) {
        $this->name = $name;
        $this->salary = $salary;
    }
    
    public function startWork () {
        echo "Managing finances";
    }
}

class Desk {
    
    public $employee;
    
    public function __construct (string $name, int $salary) {
        $this->employee = new Accountant($name, $salary);
    }
    
    public function getJobDescription () {
        $this->employee->startWork();
    }
}

$desk = new Desk("Tim", 3500);
$desk->getJobDescription();
/*
Output:
Managing finances
*/

```

The above code example may look fine and may not cause any problems in a very small application but it is hardcoded and not very flexible. 

Imagine if the Account Class changes and adds a new parameter for the constructor. You would then have to edit every occurrence of the class where the Accountant class is created for your code to work again.

What if we wanted to add a Marketing Class and use it instead of the Accountant class?

Right now there is no way to do that since the Accountant class is hardcoded into the Desk Class constructor. Our hands are tied. 

Let’s look at an alternative with dependency injection.


## Constructor Injection

Below is an example of the first type of dependency injection, the Constructor Injection. It's called the Constructor Injection because the dependency is injected into the client's construct method.

```php
<?php
class Accountant {
    
    public $name;
    public $salary;
    
    public function __construct (string $name, int $salary) {
        $this->name = $name;
        $this->salary = $salary;
    }
    
    public function startWork () {
        echo "Managing finances";
    }
}

class Desk {
    
    public $employee;
    
    public function __construct (Accountant $employee) {
        $this->employee = $employee;
    }
    
    public function getJobDescription () {
        $this->employee->startWork();
    }
}

$accountant = new Accountant("Tim", 3500);
$desk = new Desk($accountant);
$desk->getJobDescription();

/*
Output:
Managing finances
*/

```

This approach is a lot better and gives the Accountant class the freedom to change its code without affecting the Desk class. 

In the example, the Desk class is the client and the Account class is the service.

{{%note%}}
Always remember that the object being passed/injected is the dependency also known as the service and the object depending on or receiving the service is the client. 
{{%/note%}}

Passing the service to the client, rather than allowing a client to build or find the service, is the fundamental requirement of dependency injection.

We can go a set further and make the Accountant class interchangeable with other classes to give us even more flexibility with interfaces. Before we go into Interface Injection, we will look at Setter Injection which is very similar to Constructor Injection. 


## Setter Injection

With Constructor Injections, you must include the service while Setter Injections allow the service injection to be optional.

```php
<?php

class Accountant {
    
    public $name;
    public $salary;
    
    public function __construct (string $name, int $salary) {
        $this->name = $name;
        $this->salary = $salary;
    }
    
    public function startWork () {
        echo "Managing finances \n";
    }
}

class Desk {
    
    private $employee;
    
    public function setEmployee ($employee = "") {
        $this->employee = $employee;
    }
    
    public function getJobDescription () {
        if($this->employee) {
            echo $this->employee->startWork();
        } else {
           echo "No Job description \n";
        }
    }
}

$accountant = new Accountant("Tim", 3500);
$desk = new Desk();

$desk->setEmployee($accountant);
$desk->getJobDescription(); 

$desk->setEmployee(); // dependency injection is optional 
$desk->getJobDescription();

/*
Results:
Managing finances 
No Job description 
*/
```

In the Setter Injection example, we are no longer passing the service to Desk class construct method. Instead, we are passing it to the setter method setEmployee() to set the private employee variable to use later.

As you should also see, the setEmployee() setter method dependency is optional and the Desk object still works. This allows the Desk class to be a bit more flexible.


## Interface Injection

The interface injection gives the most flexibility because it allows you to swap classes without the need to change the code for the client. Check out the 2 Interface Injection examples below.

```php
<?php

interface Employee {
    public function startWork();
}

class Marketing implements Employee {
    public $dept;
    
    public function __construct (string $dept) {
        $this->dept = $dept;
    }
    
    public function startWork () {
        echo "Marketing company products \n";
    }
}

class Accountant implements Employee {
    
    public $name;
    public $salary;
    
    public function __construct (string $name, int $salary) {
        $this->name = $name;
        $this->salary = $salary;
    }
    
    public function startWork () {
        echo "Managing finances \n";
    }
}

// Desk class depends on a service with the Employee interface
class Desk {
    
    public $employee;
    
    public function __construct (Employee $employee) {
        $this->employee = $employee;
    }
    
    public function getJobDescription () {
        $this->employee->startWork();
    }
}
// Create a marketing and accountant object
$marcom = new Marketing("sales");
$accountant = new Accountant("Tim", 3500);

// Pass the accountant object as a dependency
$desk = new Desk($accountant);
$desk->getJobDescription();

// Pass the Marketing object as a dependency
$desk = new Desk($marcom);
$desk->getJobDescription();

/*
Output:
Managing finances 
Marketing company products 
*/

```

The Marketing and Accountant class both implement the Employee interface. This means that both classes must have the startWork() method.

The Desk class depends on any class that implements the Employees interface through a Constructor Injection. This is why you see Employee $employee in the Desk class construct method.

The Interface Injection allows the Desk class to use either the Accountant or Marketing class as a dependency without affecting the behavior of the Desk class.

This allows you to write and design more modular and easier to maintain code.

Here is another example. Break it down just as the first example we previously demonstrated. 


```php
<?php

interface Shape {
    public function area();
}

class Circle implements Shape {
    
    public $radius;
    
    public function __construct ($radius) {
        $this->radius = $radius;
    }
        
    public function area () {
        echo 3.14 * $this->radius * $this->radius;
        echo "\n";
    }
}

class Square implements Shape {
    
    public $side;
    
    public function __construct ($side) {
        $this->side = $side;
    }
    
    public function area () {
        echo $this->side * $this->side;
        echo "\n";
    }
}
// Drawing class depends on a class with the Shape interface
class Drawing {
    
    public $shape;
    
    public function __construct (Shape $shape) {
        $this->shape = $shape;
    }
    
    public function getArea () {
        $this->shape->area();
    }
}

// Create both a Circle and Square object which will be used as a service
$circle = new Circle(4);
$square = new Square(5);

// Inject the circle object(dependency)
$draw = new Drawing($circle);
$draw->getArea();

// Inject the square object(dependency)
$draw = new Drawing($square);
$draw->getArea();

/*
Results:
50.24
25
*/

```

Just as before the Circle and Square class implement the Shape interface because you need them to be flexible dependencies for the Drawing class.

The Drawing class is free to use either the Circle, Square or any other class that implements the Shape interface.

In the future, if the application needed to be extended to add a shape such as a triangle, you could easily create a Triangle class, implement the Shape interface, and pass the Triangle service to the Drawing class without changing any code for the Drawing class. 

Your classes should be open for extension but closed to modification. If you are always going back to your class methods to edit them to add a new feature, you probably have a bad design pattern.

I hope this article helped you to understand how and why you may want to use dependency injection in your projects and leave you with a better view of it than when you first came.