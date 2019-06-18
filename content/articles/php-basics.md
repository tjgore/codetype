---
title: "Php Basics"
date: 2018-06-10T01:41:15-05:00
description: "A quick and simple start to PHP"
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-dark-gradient"
categories: ["PHP"]
keywords: ["php", "programming", "php basics", "php tutorial", "php crash course", "quick and easy php basics", "learning php without the hard stuff"]
draft: false
---

## What is PHP?

PHP is a server side scripting(programming) language used mostly for web development but may be used for writing software in a wide variety of applications, which also makes PHP a general-purpose programming language.

PHP stands for Hypertext Preprocessor and was created by Rasmus Lerdorf in 1994. PHP can only run on operating systems that have the PHP interpreter installed. PHP files end with “.php” and may contain HTML, CSS, Javascript and PHP tags.

## Why use PHP?

Most people use PHP without realising it, not for programming but for accessing content from websites. About 80% of the web uses PHP to dynamically display their website’s content.


Big companies such as Facebook, Etsy, Wikipedia, Slack and Facebook use PHP on their web servers to run their websites. So when you open these sites in your browser, you are sending a request to their server telling PHP to build and return that page to you as HTML.

Below are a list of reasons why you may want to use PHP:

- PHP is open source and free.
- PHP is easy and fun to learn.
- PHP is well documented and has a large community. Almost any problem you have, with PHP, has already been solved by the community.
- PHP is cross platform, meaning it can run on Windows, Mac, and Linux.
- PHP is the most supported programming language on web hostings. Almost, if not all web hosting companies, have PHP installed.
- PHP has support for many databases.

## Prerequisite

To start using PHP, we need the right development environment.

You won’t need to install PHP or set up a web server on your local computer, instead you can use [this online PHP IDE](https://www.tehplayground.com/) to run your PHP code.

If you would like to set up an environment on your own machine, you can find detailed instructions [here](http://php.net/manual/en/install.php) for each operating system. After installing, you can follow along by entering the same lines of code in a .php file and open it under localhost.

<h4 class="text-center mt-5 pt-3">Goals:</h4>
<hr/>

We will go through the basics of PHP programming and learn how to run PHP programs. You will see how to output text, do some math, loops, and much more.

## Variables and Data Types

In PHP, variables start with a $ followed by an alpha-numeric(A-z, 0-9, and _) name beginning with a letter or underscore. Variables are case sensitive, therefore variables with the same name but different cases are not equal.

Varibales are used to store data or information for later use.

Another important detail is that all php scripts must start with `<?php`

```php
<?php
  $number = 2; // integer
  $_value = 5.6; // double
  $up = true; // boolean
  $hi = 'Hi there'; // string
  $hi = "bye bye"; // string
  // $hi is not equal to $Hi
```

Comments are lines of code or text that you don’t want to run as part of your code. // is used for single line comments, while /* your comment */ is used for multi line comments.


PHP is a loosely typed language, meaning you do not have to tell a variable what data it should expect. Variables do not need to be declared and their data types are assigned depending on its value.

Data Types describe what value is stored within a variable.

The following are data types for PHP:

- Integer
- Float
- String
- Boolean
- Array
- Object
- Null

As shown above $number is an integer, $_value is a float, $hi is a string, and $up is a boolean.


## Outputting Variables/Data

PHP displays variables/data by using the echo or print statement. You can also include some html tags within the echo statement.

```php
<?php
$txt = "We like PHP";
$link = "setcodetype.com";
echo "<h1>" . $txt . "</h1>";  // displays We like PHP
echo $link . " is awesome!";  // displays setcodetype.com is awesome!
```

## Operators

Operators are symbols used to perform certain actions such as arithmetic, logic and comparison on variables and data.

Operators are divided into the following groups:

- Arithmetic operators: +,-,*,/, and %(modulus)
- Assignment operators: =, +=, -=, *=, /=, %=
- Comparison operators: ==, ===, !=, <>, !==, >, <, >=, <=
- Increment/ decrement operators: ++$number, --$number, $number++, $number--
- Logical Operators: and, or, xor, &&, ||, !
- String Operators: ., .=

Arithmetic operators are used to perform arithmetic operations such as addition and subtraction.

```php
<?php
$a = 2;
$b = 5;
echo  $a + $b;  // 2 + 5 = 7
echo  $b - $a;  // 5 - 2 = 3
echo  $a * $b;  // 2 * 5 = 10
echo  $b / $a;  // 5 / 2 = 2.5
echo  $b % $a;  // 5 % 2 = 1
```

Assignment operators are used to write a numeric value to a variable. The most common assignment operator you will see is “=”.

```php
<?php
$a = 2;
$a += 3;  // 2 + 3 = 5

$a = 2;
$a -= 1;  // 2 - 1 = 1

$a = 2;
$a *= 3;  // 2 * 3 = 6

 $a = 2;
$a /= 2;  // 2 / 2 = 1

 $a = 2;
$a %= 2;  // 2 % 2 = 0 
```

Comparison operators are used to compare 2 or more variables.

```php
<?php
$a = 5;
$b = 2;
$c = "10";
var_dump($a == $b);  // result:false, return true if 5 is equal to 2
var_dump($a === $b);  // result:false, return true if 5 is equal to 2 and data types are the same
var_dump($a != $b);  // result:true, return true if 5 is not equal to 2
var_dump($a <> $c);  // result:true, the same as !=
var_dump($a !== $b);  // result:true, return true if 5 is not equal to 2 or data types are not the same
var_dump($a < $b);  // result:false, returns true if 5 is less than 2
var_dump($a > $b);  // result:true, returns true if 5 is greater than 2
var_dump($a <= $b);  // result:false, returns true if 5 is less than or equal to 2
var_dump($a >= $b);  // result:true, returns true if 5 is greater than or equal to 2   
```

The Increment/decrement operators are used to increase/decrease a numeric variable by one.

```php
<?php
$a = 5;

//pre-increment
echo ++$a;  // 6
echo $a;  //6

//post-increment
echo $a++;  //5
echo $a;  //6 

//pre-decrement
echo --$a;  //4
echo $a; //4

//post-decrement
echo $a--; //5
echo $a;  //4
```

The logical operators are used to perform conditional statements, therefore we will use the if statement to demonstrate the logical operators. The If statement can only run if the condition is true. The if statement syntax is as shown below. We will go into more details about conditional statement later in this article.

```php
<?php
/*
if (condition) {
  your code here
}
*/

$a = true;
$b = false;

if ($a and $b) {
  echo "this code will only run if both variables are true";
}

// same as and condition
if ($a && $b) {
  echo "this code will only run if both variables are true";
}

if ($a or $b) {
  echo "this code will only run if one of the 2 variables is true";
}

// same as or condition
if ($a || $b) {
  echo "this code will only run if one of the 2 variables is true";
}

if ($a xor $b) {
  echo "this code will only run if either variables are true, but not if both are true";
}

if (!$a) {
  echo "this code will only run if the variable is false. ! gives the opposite of the value given.";
}
```

The string operators are used to concatenate strings, which simply means adding 2 strings together.

```php
<?php
$txt = "Yay, ";
$txt2 = "I'm learning PHP!";
echo $txt . $txt2;  // displays "Yay, I'm learning PHP!"

$txt .= $txt;
echo $txt; // displays "Yay, Yay, "

```

## Strings

Strings are character within single or double quotes.

Strings within single quotes do not escape characters nor expand expand variables.

```php
<?php
// These are all strings
$a = “good”;
$txt1 = “I’m ready to run”;
$txt2 = ‘Learning PHP’; 
// $txt = ‘I’m ready to run’; // this will not work 

echo $txt1; // "I'm ready to run"
echo $txt2; // "Learning PHP"
echo "Today is a $a day"; // "Today is a good day"
      
```

Below are some commonly used functions to manipulate strings. A function is a block of code that can be repeated throughout your program. We will learn and see more examples of functions further in this article.

```php
<?php

//returns the length of the string, result: 11
echo strlen(“hello world”); 

//reverse the string, result: dlrow
echo strrev(“world”); 

//searches the string for “php”, and if found returns the character position. If no match return false
// result: 7 
var_dump(strpos(“i love php”, “php”));

//1 is the start position of the string (0 = a, 1 = b, 2 = c). 3 is the number of characters you want to return, this may also be left blank to return all the remaining characters 
// result: bcd
echo substr(“abcdef”, 1, 3);

//replaces “world” with “PHP” in “Hello world”, result: Hello PHP
str_replace(“world”, “PHP”, “Hello world”);


//returns the given array elements into one string separated by a space
// result: "up down left right"
$arr = ["up", "down", "left", "right"];
echo implode(“ ”, $arr);

// breaks a string into an array and uses the space to know what is an array element
// result: array(3) and the string values as elements
var_dump(explode(“ ”, “i love php”)):

// returns the total number of words in the string, result: 3
echo str_word_count(“I love Php”);
```

## Arrays

Arrays are a very useful and unlike other data types are used for storing multi values at the same time. You can picture arrays as a variable that holds an ordered list called elements.

Arrays are also able to hold many different data types. To access the different elements within an array, you must make reference to the arrays index. As you will soon see the index is the position of the element within the array and can be called numerically or by name.

When an array has a named index it is called an associative array and the index is called a key.

There are 3 types of arrays:

- Indexed Arrays
- Associative Arrays
- And Multidimensional arrays (advanced)

Indexed Arrays
```php
<?php
$persons = ["Peter", "Sara", "Mary", "John"];
echo $persons[0]; // Peter
echo $persons[1]; // Sara
echo $persons[2] . " ". $person[3];  // Mary John

```
Indexed arrays always start at 0 therefore an array with 3 values has indexes of 0, 1, and 2. The first element index is 0 and the last element index is the total of elements minus 1.


Associative Array
```php
<?php
$cars = ["BMW" => "red", "Toyota" => "blue"];
$cars["Honda"] = "orange";
$cars["Lambo"] = "sky-blue";

echo $cars["Honda"]; // orange
```

Some common built in PHP array functions are:

```php
<?php

//creates an array
$colors = array("red", "blue", "black");

//count the number of elements within an array, result: 3
echo count($color);

//combines one or more arrays into 1
//result: $color_cars = ["red", "blue", "black", "honda", "toyota", "nissan"]
$cars = ["honda", "toyota", "nissan"]; 
$color_cars = array_merge($colors, $cars);

//deletes the last element of array
//result: $colors = array["red", "blue"];
array_pop($colors);

//adds cats and dogs to the end of the array
//result: $colors = array["red", "blue", "cat", "dog"];
array_push($colors,”cat”, “dog”);

//removes the first element from the array, and returns the removed element
// result: red
echo array_shift($colors);

//adds yellow to the beginning of the array
//result: $colors = array["yellow", "blue", "cat", "dog"];
array_unshift($colors, ‘yellow’): 

//returns the selected elements of the array, 0 is the start of the array and 2 is the number of elements to return
//result: $a = ["red", "blue"]
$a = array_slice($colors, 0, 2);

//returns the total sum of all the elements in the array
// result: 50
$number = [17, 24, 3, 6];
echo array_sum($number);

//reverse the elements of the array
// result: $reversed_number = [6, 3, 24, 17]
$reversed_number = array_reverse($number):
```

## Loops

The loop statement, as the name implies, repeats a block of code a given number of times or until a condition is met.

There are 4 types of loops

- the while loop
- the do … while loop
- the for loop
- the foreach

For loops are best used when you know the amount of times you want to repeat your code.

The while loop is used for when you don’t know how many times you need to repeat your code but when you know what conditions must be met to stop the loop.

```php
<?php

$x = 20;

// while loop
while ($x >= 10) {
  $x--;
  echo "$x ";
}
// result: 19 18 17 18 15 14 13 12 11 10 9

// do ... while loop
$x = 20;

do {
  echo "$x ";
  $x++;
} while ($x < 22);
// result: 20 21

//For loops
for($a = 0; $a <= 5; $a++) {
  echo "$a ";
}
//result: 0 1 2 3 4 5

//Loop though array
$colors = ["red", "blue", "orange", "purple"];
for($i = 0; $i < count($colors); $i++) {
  echo $i . ":" . $colors[$i]. " ";
}
// result: 0:red 1:blue 2:orange 3:purple 

```

The for syntax takes 3 parameters:

- $a = 0 initializes the loop and sets the starting point
- $a <= 10 is the condition that is checked on each iteration to see if the loop has ended or to continue.
- and the $a++ is a post increment operation that is done on each run of the block of code

The foreach array is commonly used for looping over arrays.

For every iteration the value of the current array element is assigned to $value, and the index is incremented by one, until there are no more elements in the array.

```php
<?php

//foreach loop through indexed array
$colors = ["red", "blue", "orange", "purple"];
foreach ($colors as $value) {
  echo $value . " ";
}
// result: red blue orange purple 

// foreach loop through associated array
$colors = ["tall" => "red", "long" => "blue", "short" => "orange", "wide" => "purple"];
foreach ($colors as $index => $value) {
  echo $index . ":" . $value . " ";
}
//result: tall:red long:blue short:orange wide:purple
```

## Conditional Statements

Conditional statements are used in programming to make decisions. Conditional statements are used to perform actions based on conditions.

The following are useful conditional statements that you will commonly use:

- If statement: runs a block of code if one condition is true
- If ... else statement: runs a block of code if the first condition is true and an alternative block of code if the first condition is false
- If ... elseif ... else: runs some code if the first condition is true else checks the second condition and run its code or else default to the last block of code if all previous conditions are false.
- And switch: depending on the value passed into the switch, runs the block of code which the condition satisfies.

```php
<?php
        
$a = 5;
$b = 3;

if ($a == $b) {
   echo "$a is equal to $b";
}

if ($a == $b) {
   echo "$a is equal to $b";
} else {
  echo "$a is not equal to $b";
}

if ($a > 10) {
  echo "$a is greater than 10";
} elseif ($a < 10) {
  echo "$a is less than 10";
} else {
  echo "$a is equal to 10";
}
  

$car = "honda"; 
switch ($car) {
  case "bmw":
    echo "Your car is a bmw";
    break;
  case "toyota":
    echo "Your car is a toyota";
    break;
  case "honda":
    echo "Your car is a honda";
    break;
  default:
    echo "Your car is not here";
} 
```
{{%note%}}
The following conditions are considered false:

- integer zero (0)
- double zero (0.0)
- empty string and string "0"
- array with no elements
- object with no elements
- special value NULL
{{%/note%}}

## Functions

A function is a block of code that can be executed repeatedly across your program. It is a compartmentalized part of code and modular in nature. It is good programming practice to modularize your code with functions.

PHP has hundreds of built-in functions that assist with common tasks. You have already seen a few functions for string and arrays. Besides those built in functions , you can create your own functions.

Functions start with the keyword function and just as a variable an alpha-numeric(A-z, 0-9, and _) name beginning with a letter or underscore. Function names should be descriptive of what they do. To run a function you must call the function by simple writing its name followed by ().

```php
<?php

function sayHi () {
  echo "Hello there! How are you?";
}

sayHi(); // call the function to execute its block of code
//result: Hello there! How are you?
```

### Function arguments

Function arguments are variables passed to a function to be used within the function. Arguments are passed within the function (). You can pass as many arguments as you like and separate them with commas.

```php
<?php

function intro ($name, $age) {
  echo "Hi, my name is $name. ";
  echo "I am $age years old.";
}

intro("Peter", 7);  //Hi, my name is Peter. I am 7 years old.
echo "<br>";
intro("Sara" , 6);  //Hi, my name is Sara. I am 6 years old.


//Default arguments
//If no argument is pass to the function the function will set the argument to the default value
// the default value for gender is boy 
function intro ($name, $age, $gender = "boy") {
  echo "Hi, my name is $name. I am a $gender. ";
  echo "I am $age years old.";
}

intro("Peter", 7); //Hi, my name is Peter. I am a boy. I am 7 years old.
echo "<br>";
intro("Sara", 7, "girl"); //Hi, my name is Sara. I am a girl. I am 7 years old

//to return value to a variable outside of the function use the return keyword
function sayHi () {
  return "Hello there! How are you?";
}
$welcome = sayHi();
echo $welcome;
//result: Hello there! How are you?
```

## Summary

PHP is a fun and easy programming language to use. Throughout this article you have learned what variables are, how to use them and their different data types, loops, conditions, and functions.

These are only the basics and there is a lot more you can learn and do with PHP. Keep learning and growing and you may be surprised how much you can do with it.