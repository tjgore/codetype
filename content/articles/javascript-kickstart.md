---
title: "Javascript Kickstart"
date: 2018-07-08T17:44:36-05:00
description: "Learn the basics of javascript programming"
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: "/images/articles/JS.png"
haveImage: true
categories: ["Javascript"]
keywords: ["javascript kickstart", "learn javascript quickly"]
draft: false
---

## What is Javascript?

Javascript, also called JS, is a high level programming language that adds interactivity to your website. It gives you the ability to detect a user’s actions like clicking and scrolling or allows you to manipulate the webpage.

This makes your website more engaging, fun, or easier to deal with.

Don’t get javascript confused with Java. They are 2 different programming languages.

Javascript was created back in 1995 under Netscape Corporation by Brendan Eich with the goal of embedding a programming language into web browsers.

HTML, CSS, and Javascript are the three core technologies of web pages. You can view these technologies as the following:


- **HTML defines the structure**
- **CSS defines the design**
- **while Javascript performs the actions.**

Almost all websites use javascript and all modern major web browsers can run javascript.

## Why would you want to use javascript?

Here are a few reasons why you would want learn or use Javascript.

- Javascript will make your website come alive by allowing you to manipulate the website’s structure, design and functions.
- Even though it was initially built for the client side in web browsers, Javascript is now almost everywhere. You can find it on the server side, embedded systems, mobile and desktop applications.
- Javascript has grown to become the world’s most popular programming language because of its flexibility. It is also the standard for client side browser programming.
- All major browser support javascript and have it enabled by default.
Javascript can be easily mixed with HTML/CSS.

## Prerequisite

A basic knowledge of HTML and CSS would be nice but not required. If you don’t know HTML or CSS try to find the patterns in HTML and follow along.

To use Javascript you don’t need to download any software or set up an environment. All you need is your browser and you can start to write js code in the browser's console, but we won't be using that approach.

Instead, to keep things simple, we will use an online js ide, [JsFiddle](https://jsfiddle.net/).

## Goal

The objective of this article is to quickly get you started with the javascript basics and show you what you can accomplish with it.

## Variables

Variables are memory containers with descriptive names used for storing data or information.

Use the `var` keyword to declare a variable. You may also sometimes see the keyword `let`. The variable name should be camelcase meaning the first word is lowercase while the second word is uppercase.


```js
var myNumber = 10;
var totaolPrice = 23.99;
var productName = "Blue Nike t-shirt";
var stock = "230";
var colors = ["red", "blue", "green"];
var person = {
  name: "John",
  age: 24
}
```

The first variable name is myNumber with the value 10 stored in it. The variable names are case sensitive, so myNumber, mynumber and MyNumber are all different.

The const `keyword` is used to declare an unchangeable variable and the name is usually in all uppercase.

```js
 const BG_COLOR = "orange";
```

The data stored within variables have data types.

The following data types in javascript are:

- String: a sequence of characters enclosed by single quotes, double quotes, or backticks Eg. “Hello world”, “200”, “true”
- Number: a number without quotes Eg. 5, 20.5678, 64
- Boolean: has only two values true or false
- Object: a collection of data
- Function: a block of reusable code
- Null: nothing or empty
- Undefined: value is not assigned

The `typeof` operator allows you to see which type is stored in the variable.
<br/><br/>

<script async src="//jsfiddle.net/of014r36/7/embed/js,html,result/dark/"></script>


## Outputting data

There are multiple ways of displaying variable’s data in javascript.

You can simple output data by using the following common functions:

- alert() function
- document.write()
- console.log()
- innerHTML

{{%note%}}
Javascript has many more functions to manipulate and add content and html elements to the page. [Check out this list of functions](https://www.w3schools.com/js/js_htmldom_document.asp).
{{%/note%}}

The alert function uses the browser’s default alert box to display the data
<br/><br/>
<script async src="//jsfiddle.net/of014r36/11/embed/js,result/dark/"></script>

The document.write() function removes all the html from the current page and displays the data in that page.
<br/><br/>
<script async src="//jsfiddle.net/of014r36/13/embed/js,result/dark/"></script>

The console.log() function displays the data into the browser’s console.
<br/><br/>
<script async src="//jsfiddle.net/of014r36/13/embed/js,result/dark/"></script>

In Chrome, to view the browser's console simple hit F12 on your keyboard.

You can also enter you js code here directly and execute it. Try typing `document.write(“Cool”);` ,hit enter and see what happens to the current webpage.

innerHTML displays the data in a html element on the webpage, but is not as simple as the previous ways. For this you need to select an element from the page by using its html id or class attribute and replace its content with your data. See the example below and take note of the HTML and JS connection and the `document.querySelector("#container")` function to access the html element.
<br/><br/>
<script async src="//jsfiddle.net/of014r36/15/embed/js,html,result/dark/"></script>

You can also use these functions to access html elements:

- document.getElementById("element-id")
- document.getElementsByClassName("element-classname")
- document.getElementsByTagName("p")

## Operators

Operators are mathematical symbols which produce a result based on the data/variables they act on. Operators may perform different functions such as arithmetic, logic or comparison on data.

Therefore operators can be divided up into the following groups:

- Arithmetic Operators: + - * / % ++ --
- Assignment: = += -= *= /= %=
- Comparison == === != !== > < >= <=
- and Logical && || !


Arithmetic operators are used to perform arithmetic operations such as addition and subtraction. Since we are using **console.log(), press F12** to view the result.
<br/><br/>
<script async src="//jsfiddle.net/of014r36/31/embed/js,result/dark/"></script>

Assignment operators are used to write and store a value to a variable. We already used the `=` assignment operator in the variable section to store the data in a variable.
<br/>
<br/>
<script async src="//jsfiddle.net/of014r36/47/embed/js,result/dark/"></script>

Comparison operators are used to compare 2 or more variables.
<br/><br/>
<script async src="//jsfiddle.net/of014r36/58/embed/js,result/dark/"></script>

There are only 3 logical operators and they are used to perform conditional statements.
<br/><br/>
<script async src="//jsfiddle.net/of014r36/64/embed/js,result/dark/"></script>

## Conditional Statements

Conditional statements are used to perform specific actions based on a condition. The if statement checks the condition passed to it and if the condition is true, execute the if statement's block of code.

There are three types of if statements.

- if statement: this takes one condition and executes the code, if the condition is true
- if ... else statement: takes one condition and if the condition is false, a different block of code is run
- if ... else if statement: this statement may take 2 or more conditions and run a block of code depending on which condition is true
<br/><br/>
<script async src="//jsfiddle.net/of014r36/75/embed/js,result/dark/"></script>

## Loops

A loop is a block of code that you want to repeat many times in a row. Counting from 1-100 is an example of when a loop would be handy. Instead of typing out the console.log() function or the alert() function 100 times, you can use a loop.

There are 3 types of loops .

- The while loop
- The do .… while loop
- And the for loop

The while loop repeats its block of code as long as the condition is true. The condition is first checked before each iteration of the loop's body.
<br/><br/>
<script async src="//jsfiddle.net/7q8t9165/embed/js,result/dark/"></script>

Unlike the while loop, the do… while loop checks the condition after each iteration which allows the loop to execute once without any condition restrictions.
<br/><br/>
<script async src="//jsfiddle.net/7q8t9165/2/embed/js,result/dark/"></script>

The for loop is the most often used loop among the 3. The for loop takes 3 parameters in order to execute, the variable to keep track of the loop, the condition to check if the loop should continue, and the incrementation of the variable.

For loops are best suited for when you know how many times you want the loop to iterate.
<br/><br/>
<script async src="//jsfiddle.net/7q8t9165/4/embed/js,result/dark/"></script>

## Functions

Functions are modular blocks of code that allows code to be reusable. You will find that you will sometimes need to repeat a block of code in multiple places. The best approach to this problem is by creating your own functions.

Some examples of javascript built in functions are the alert(), document.write(), and queryselector().

[Here is a full list](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Methods_Index) of built in javascript function you already have at your disposal.

Go through it in detail, so that when you are creating your own functions, you are not re-creating built in functions.

To declare a function you must use the `function` keyword along with () after the functions name and include the block of code you want to execute within the function's body.

To run the code within the function you need to call the function. See the example below.
<br/><br/>
<script async src="//jsfiddle.net/7q8t9165/9/embed/js,html,result/dark/"></script>

Functions can take in data and use it to do their tasks. The data passed in is called the function's arguments and are placed within the () after the function name.

Functions also provide the `return` keyword. The return keyword stops the function's code and sends the variable after the return keyword to the function's caller.
<br/><br/>
<script async src="//jsfiddle.net/7q8t9165/21/embed/js,html,result/dark/"></script>

## Events

What makes javascript so awesome is that it is an event driven programming language. This means that an event such as a user’s click or mouse move can trigger code to be executed.

This is how javascript makes a website so interactive and come to life. Javascript has a [long list of events](https://developer.mozilla.org/en-US/docs/Web/Events) it can detect.

Here are a few common events you may find yourself using often.

- click
- dblclick
- mouseenter
- mouseleave
- scroll
- copy
- keydown
- keyup

Take look at the code below to see how you can use some of these events. Note, that events usually execute a function.
<br/><br/>
<script async src="//jsfiddle.net/7q8t9165/50/embed/js,html,css,result/dark/"></script>

{{%note%}}
`document.getElementById("hitOne").onclick = function` and `document.getElementById("hitTwo").addEventListener("click", function)` perform the same action.
{{%/note%}}

How awesome is that? Just imagine what you can do with javascript.

## Javascript demo

To give a small demonstration of how javascript can be used take a look at the 3 simple code snippets below.

You should be able to rebuild these examples from the knowledge you gained from this article.

**The Color Scroll**
<script async src="//jsfiddle.net/ze7c5otx/68/embed/dark/"></script>

This block of code changes the text color and background color as you scrolls down the page. It also displays how many pixels you have scrolled down.

To accomplish this, the scroll event was used to detect how far you have scrolled down. Depending on how far you scrolled, some conditional statements were used to perform the color changes.

Here you can see that javascript can also change the style of the elements on the page.

**A simple addition and substraction calculator**
 <script async src="//jsfiddle.net/yauogx3L/88/embed/dark"></script>

This code snippet displays a simple addition and subtraction calculator. Javascript is used here to know which number buttons and operations were clicked and displays them in the calculator’s screen.

On clicking the = sign, javascript is used to calculate and display the total.


**Tabs VS Content**
<script async src="//jsfiddle.net/gz1uLk70/48/embed/dark/"></script>

The last example demonstrates how javascript can be used to display page content on click, mouseover and double clicks.

The HTML and Javascript buttons use the mouseenter event to display their content as you move your mouse over them.

The PHP button displays its content on a simple click while the Python content displays when you double click.

## Wrap up

Javascript is a very popular language and it keeps getting bigger and better. It is a great tool to add to your knowledge set and will be around for a long time.

This article has just touched the surface of what javascript can do.

Feel free to explore and learn as much as you can. Keep learning and keep growing. Happy coding!