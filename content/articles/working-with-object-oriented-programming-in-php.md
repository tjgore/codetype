---
title: "Working With Object Oriented Programming in Php"
date: 2018-06-16T03:06:21-05:00
description: "Learn how and why you should use object oriented programming in php."
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-red-gradient"
categories: ["PHP"]
keywords: ["php object oriented programming is useful", "php object oriented programming benefits", "why use php object oriented programming", "how object oriented programming works"]
draft: false
---

{{<contentTitle title="What is object oriented programming?">}}

Object oriented programming, often referred to as OOP, is a programming design pattern used to create well structured, reusable, and easy to maintain applications.

OOP accomplishes this by creating classes that groups its data properties and data methods that make up each other.

{{<contentTitle title="Why use object oriented programming in php?">}}

Object oriented programming is very common and used in many programming languages other than PHP such as Javascript, Python, Ruby, Java and much more. So learning the basics in PHP will allow you to understand it across other languages.

The benefits of OOP are not as obvious when you start to use it, until your application begins to grow in size and you realise that code readability and maintenance becomes a nightmare.

Most of the benefits of using OOP are as follows:

- It helps to keep your code DRY(Don’t Repeat Yourself)
- Helps to make your code more readable,
- Allows your code to be reusable,
- And makes maintaining your application easier.

Don’t think of OOP as a complicated way of coding. It's here to make coding easier. Once you understand the concept of OOP, digging deeper and using it becomes fun and easy.

{{<contentTitle title="Prerequisite">}}

You should have an understanding and some experience with coding in PHP. If not you can check out [PHP basics](/articles/php-basics), which gives you an intro to php programming.


Open up this easy to use [online php IDE](https://www.tehplayground.com/) to code along with this article. No need to setup php on your local computer.

<h3 class="mt-5 text-center">Goal</h3>
<hr/>

At the end of the article you should know:

- How to create and use classes and objects
- Add class properties and methods
- Magic Methods
- Class encapsulation
- Class Inheritance

{{<contentTitle title="Classes and Objects">}}

Before getting into the code, we first should understand what are classes and objects. Classes are like blueprints for creating objects.

To demonstrate this I will use a real world example.

Imagine your dream car. It’s not built yet just in your head for now. To get it built you need to go to a car factory. This factory provides you a list of requirements they need to build a car, such as the brand, color, and the transmission of the car.

The factory must also make sure that all their cars must perform functions such as driving and reversing to be considered a complete car.

The car factory is the Car Class and the complete requirements are the Class properties.

The finished product the factory completes based on the requirements is the object.

A class defines the properties and functions of an object, while objects are instances of a Class. Therefore you can create many different cars by changing the requirements.

You will see more of this as you continue through the article.

Let’s start to create this Car Class now.

<span class="hl-info"></span>
```php
<?php
class Car
{
  // properties and methods here
}

// to instantiate an object of a class, use the keyword new and store it in a variable
$dream_car = new Car;
var_dump($dream_car);
```

{{<contentTitle title="Adding Class Properties and Methods">}}

From the above car factory example, the properties of the Car Class are the brand, the colors, and the transmission. Class properties describe the object and are class specific variables, meaning that these variables can only be access by its object.

The functions, driving and reversing are the methods of the Class. Methods are php functions specific to the classes, just as properties.

The arrow operator -&gt; is used to access an object properties/methods.

See an example of the Car Class with its properties and methods below.

<span class="hl-info"></span>
```php
<?php
class Car
{
  public $brand = "Toyota";
  public $color = "red";
  public $transmission = "automatic";

  public function drive()
  {
     echo "We are driving!";
  }

  public function reverse()
  {
     echo "We are reversing.";
  }
}

// to instantiate an object of a class, use the keyword new and store it in a variable
$dream_car = new Car;

// displays the car properties
echo $dream_car->brand. "<br>";
echo $dream_car->color. "<br>";
echo $dream_car->transmission. "<br>";

// runs the car methods 
$dream_car->drive();
echo "<br>";
$dream_car->reverse();

/* Output:
  Toyota
  red
  automatic
  We are driving!
  We are reversing.
*/
```
[View code in IDE](https://www.tehplayground.com/KHxLR1YQKoO41bn7)

The <span class="notice">$this</span> keyword allows objects to reference themself within the class.

<span class="hl-info"></span>
```php
<?php
class Car
{
  public $brand = "Toyota";
  public $color = "red";
  public $transmission = "automatic";

  public function drive()
  {
    echo "The ". $this->color . " " . $this->brand ." is driving!";

    //The below code will not be able to get the properties, the object needs to know you want this class property by using $this
   // echo "The ". $color . " " . $brand ." is driving!";
  }
}

$dream_car = new Car;
$dream_car->drive();

/* Output
  The red Toyota is driving!
*/
```


{{<contentTitle title="Magic Methods Constructor and Destructors">}}

Magic methods are default special methods within classes that are called when specific actions take place with objects.


In Php, There are a few magic methods, but we will just focus on 2

- Construct: This method is called when you instantiate an object using the keyword new
- Destruct: This is called when an object is destroyed with the unset function or when the end of the file is reached and PHP releases all its resources.

The constructor magic method is often used to set property values or execute some code you need to run when an object is created.

<span class="hl-info"></span>
```php
<?php
class Car
{
  public $brand;
  public $color;
  public $transmission;

  public function __construct($brand, $color, $transmission)
  {
     $this->brand = $brand;
     $this->color = $color;
     $this->transmission = $transmission;
  }

  public function __destruct()
  {
     echo "<br>";
     echo "The car has been destroyed!";
  }

  public function drive()
  {
    echo "The ". $this->color . " " . $this->brand ." is driving!";
  }
}

/* instantiate an object and call the class constructor 
to set the object's properties with default values
*/
$dream_car = new Car("Nissan", "blue", "manual");
$dream_car->drive();

// at the end of the file the destructor is called and destroys the object

/*
  The blue Nissan is driving!
  The car has been destroyed!
*/

```
The power OOP comes in when we use multiple instances of objects.

With OOP you can create many different objects with a class. Same way as the car factory can make many different cars based on the requirements you pass to them.

To see this in action take a look at the code below.

<span class="hl-info"></span>
```php
<?php
class Car
{
  public $brand;
  public $color;
  public $transmission;

  public function __construct($brand, $color, $transmission)
  {
     $this->brand = $brand;
     $this->color = $color;
     $this->transmission = $transmission;
  }

  public function drive()
  {
    echo "The ". $this->color . " " . $this->brand ." is driving! <br>";
  }
   
}

$dream_car = new Car("Honda", "gray", "manual");
$dream_car->drive();

$future_car = new Car("Mitsubishi", "white", "automatic");
$future_car->drive();

/*
  The gray Honda is driving!
  The white Mitsubishi is driving!
*/
```

{{<contentTitle title="Level of Visibility of Classes">}}

Classes have 3 levels of visibility for their properties and methods.

These levels of visibility are accessed by keywords which are used to determine how properties and methods are accessed by outsiders.

The types of visibility are:

- Public: This allows the property/method to be accessed by anyone. By default, properties and methods in PHP are public unless declare private or protected.
- Protected: the class properties/methods can only be accessed by the class children and itself.
- Private: the properties/methods can only be accessed by the class itself.

Visibility is the mechanism for encapsulation. Encapsulation is the way a class internals such as its structure, properties, and methods are hidden from direct unauthorized access. This approach helps to make classes modular and can be easily edited without affecting the overall application in the long run.

<span class="hl-info"></span>
```php
<?php
class Car
{
  private $brand;
  public $color;
  protected $transmission;

  public function __construct($brand, $color, $transmission)
  {
    $this->brand = $brand;
    $this->color = $color;
    $this->transmission = $transmission;
  }

  public function display()
  {
    echo "My dream car is a " . $this->color . " " . $this->brand . " with " . $this->transmission . " transmission."  ;
  }

  private function drive()
  {
    echo "The ". $this->color . " " . $this->brand ." is driving!";
  }
}


$dream_car = new Car("BMW", "orange", "manual");

$dream_car->display();

//Can not access private property, 
//but the class internal method can and display it for us as seen with the display method
//echo $dream_car->brand;
//$dream_car->drive();

//Also can not access protected property, 
//but the class children can access it through inheritance
//echo $dream_car->transmission;

/* Output:
  My dream car is a orange BMW with manual transmission.
*/ 
```

{{<contentTitle title="Class Inheritance">}}

Inheritance allows classes to inherit another class properties and methods by using the keyword extends. The level of visibility can control how the subclass will inherit the parent class.

Let’s go back to the car factory example. This time around the car factory has a parent factory, which is the vehicle factory.


The vehicle factory requirements are engine, color, seats, doors and the function move forward. This factory is responsible for building general vehicles. Therefore they can start building the parts for vehicles such as cars, trains, boats, and planes.

The car factory can use the vehicle factory properties and functions as if it is their own. This is called class inheritance.

<span class="hl-info"></span>
```php
//The vehicle class is the parent of the car class
<?php
class Vehicle
{
  protected $engine;
  public $seats;
  public $doors;
  
  public function __construct($engine, $seats, $doors)
  {
    $this->engine = $engine;
    $this->seats = $seats;
    $this->doors = $doors;
  }
  
  public function set_engine($name)
  {
    $this->engine = $name;
  }
  
  public function drive()
  {
    echo "Moving forward.";
  }
  
  public function get_vehicle_details()
  {
    echo "Engine: " . $this->engine . "<br>";
    echo "Seats: " . $this->seats . "<br>";
    echo "Doors: " . $this->doors . "<br>";
    echo "Color: " . $this->color . "<br>";
  }
}// end vehicle class

//The car class inherits the vehicle class. The car class is a child of the vehicle class, and hence it can use the vehicle class protected properties/methods 
class Car extends Vehicle
{
  private $brand;
  public $color;
  protected $transmission;
   
  public function __construct($brand, $color, $transmission)
  {
    $this->brand = $brand;
    $this->color = $color;
    $this->transmission = $transmission;
  }
   
  public function display()
  {
    echo "My dream car is a " . $this->color . " " . $this->brand . " with " . $this->transmission . " transmission. <br>"  ;
  }
   
  public function drive()
  {
    echo "The ". $this->color . " " . $this->brand ." is driving!<br>";
  }
} // end car class

$dream_car = new Car("Lamborghini", "sky blue", "manual");
$dream_car->display();
echo "<br>";

//The car object is setting the vehicle class properties and inherits them. 
//The engine property is protected, we can access it through the car class inherited parent method set_engine()
$dream_car->set_engine("V12");
$dream_car->color = "blue";
$dream_car->seats = "2";
$dream_car->doors = "2";

$dream_car->display();

//The car object is using the vehicle method get_vehicle_details to print out all the vehicle properties
$dream_car->get_vehicle_details();

//The car class overides the vehicle drive method and runs its own
$dream_car->drive();

/* Output:
  My dream car is a sky blue Lamborghini with manual transmission. 

  My dream car is a blue Lamborghini with manual transmission. 
  Engine: V12
  Seats: 2
  Doors: 2
  Color: blue
  The blue Lamborghini is driving!
*/

```
[View code in IDE](https://www.tehplayground.com/TBKhYjV16MuNpozF)

{{%note%}}
Children class properties and methods can override the parent’s. if the child class has the same property/methods name as the parents, the object will use the child’s property/method unless told otherwise.
{{%/note%}}

The above example shows single level inheritance but you can go a step further and even have multiple level inheritance. Multilevel inheritance is as simple as following the basics. See the code below.

<span class="hl-info"></span>
```php
<?php
class A 
{
  public function grandfather()
  {
    echo "I am the grandfather. ";
  }
}//end class A

class B extends A
{
  public function father()
  {
    echo "I am the father. ";
  }
}// end class B

class C extends B
{
  public function son()
  {
    echo "I am the son. ";
  }
  
  public function get_your_family()
  {
    $this->grandfather();
    $this->father();
    $this->son();
  }
}// end class C

$fam = new C;
$fam->get_your_family();

/* Output:
  I am the grandfather. 
  I am the father. 
  I am the son. 
*/
```
[View code in IDE](https://www.tehplayground.com/YFVMxhnvkVzQKI4Z)

{{<contentTitle title="Summary">}}

Now that you have seen how OOP is structured and used, I hope you notice the benefits that come with it. Large amounts of data sets can be handled easily when using OOP.

OOP greatly increases your overall application code reusability and improves your code maintainability by keeping it DRY.

Keep praticing and using OOP and you will improve your coding abilities.

Another point to take note of is to remember, not everything needs to be a class. Use your judgement wisely to know when a class is needed, as everything else in programming. The goal is always to create easy to read clean code.

Happy coding!