---
title: "Handy PHP Array Functions to Remember"
date: 2019-03-30T03:49:15-05:00
description: "How to use handy php array functions in your project"
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-dark-gradient"
categories: ["PHP"]
keywords: ["handy php array functions", "most commonly used php array functions", "how to use these handy php array function in your project"]
draft: false
---

{{% tableOfContent hide="true" column="column-2" content="array_chunk,array_combine,array_count_values,array_diff,array_map, array_filter,array_flip,array_key_exists,array_search" %}}


What is an array? An array is a collection of data. You can create an array in many ways.

<span></span>
```php
<?php
# Defining an array
$people = array("John", "Sara", "Mike");

$fruits = ["pineapples", "grapes", "oranges"];
echo $fruits[0];
# Result: pineapple

# Defining an associate array
$cars = ["name" => "Toyota", "wheels" => 4, "fast" => true];
echo $cars["name"];
# Result: Toyota

$computer["brand"] = "DELL";
``` 

{{<contentTitle title="array_chunk">}}

Splits an array into groups or chunks of new arrays.
Syntax:
`array_chunk(array, int) :array` 

- `array` is the array you want to chunk. 
- `int` is the number of chunks to return.

<span></span>
```php
<?php

$animals = ["tigers", "birds", "cats", "dogs", "fish", "bears", "cow", "sheep"];
$chunks = array_chunk($animals, 3);
var_dump($chunks);

/*
array(3) {
  [0]=>
  array(3) {
    [0]=>
    string(6) "tigers"
    [1]=>
    string(5) "birds"
    [2]=>
    string(4) "cats"
  }
  [1]=>
  array(3) {
    [0]=>
    string(4) "dogs"
    [1]=>
    string(4) "fish"
    [2]=>
    string(5) "bears"
  }
  [2]=>
  array(2) {
    [0]=>
    string(3) "cow"
    [1]=>
    string(5) "sheep"
  }
}
*/
```

{{<contentTitle title="array_combine">}}

Creates an array from 2 arrays. The first array being the keys, while the second array are the values.
Syntax: `array_combine(array, array) :array`

- 1st param is the array that will be the new array indexes
- 2nd param is the array that will be the new array values

<span></span>
```php
<?php

$books = ["Peter Pan", "Moby Dick", "Oliver Twist"];
$pages = [20, 150, 12];
$combinedArray = array_combine($books, $pages);
print_r($combinedArray);

/*
Array
(
  [Peter Pan] => 20
  [Moby Dick] => 150
  [Oliver Twist] => 12
)
*/
```

{{<contentTitle title="array_count_values">}}

Count the values of an array and returns an array with the value as the key and the count as the value
Syntax: `array_count_values(array) :array`

<span></span>
```php
<?php

$records = ["paper", "data", "cat", "paper", "dog", "data", "data"];
$countValues = array_count_values($records);
print_r($countValues);

/*
Array
(
  [paper] => 2
  [data] => 3
  [cat] => 1
  [dog] => 1
)
*/
```

{{<contentTitle title="array_diff">}}

Compare 2 or more arrays and returns an array with the elements present in the 1st array that are not in the other arrays.
Syntax: `array_diff(array, array) :array`

<span></span>
```php
<?php

$companies = ["Walmart", "Apple", "Google", "Target"];
$techCompanies = ["Apple", "Google", "Samsung"];
$diff = array_diff($companies,$techCompanies);
print_r($diff);
// echo $diff[2] is not valid, because the key is not available

/*
Array
(
  [0] => Walmart
  [3] => Target
)
*/
```

{{<contentTitle title="array_map">}}

Passes each element of an array through a custom function and returns an updated array of the values.
Syntax: `array_map(aFunction, array1, array2, array3) :array`

<span></span>
```php
<?php
$phones = ["Samsung", "Iphone", "LG", "Nokia"];
$updated = array_map(function ($phone) {
  return $phone . " 2.0";
}, $phones);
print_r($updated);
/*
Array
(
  [0] => Samsung2.0
  [1] => Iphone2.0
  [2] => LG2.0
  [3] => Nokia2.0
)
*/
```
{{<contentTitle title="array_filter">}}

Works like array_map and loops through an array except array_filter removes elements that don't satisfy the condition.
Syntax: `array_filter(array, aFunction) :array`

<span></span>
```php
<?php
$posts = ["title" => "This is a post", "date" => "25 July", "comments" => "25"];
$updatedPost = array_filter($posts, function($value){
  if($value == "25 July")
    return false;
    else
    return true;
});
print_r($updatedPost);
/*
Array
(
  [title] => This is a post
  [comments] => 25
)
*/
```

{{<contentTitle title="array_flip">}}

Flips the array's keys with its values.
Syntax: `array_flip(array) :array`

<span></span>
```php
<?php
$person = ["name" => "Sara", "age" => 28, "weight" => "135"];
print_r(array_flip($person));
/*
Array
(
  [Sara] => name
  [28] => age
  [135] => weight
)
*/
```

{{<contentTitle title="array_key_exists">}}

Finds the key within the array. Syntax: `array_key_exists(key, array) :bool`

<span></span>
```php
<?php
$house = ["price" => "$100M", "color" => "blue"];
if(array_key_exists("price", $house)) {
  echo "The house price is available!";
}
# The house price is available!
```

{{<contentTitle title="array_search">}}

Search an entire array for a value and returns the key.
Syntax: `array_search(string, array) :string`

<span></span>
```php
<?php
$clothes = ["color" => "red", "sizes" => "M", "store" => "H&M", "sale" => true];
$key = array_search("H&M", $clothes);
echo $key;
// store
```

{{<contentTitle title="array_push">}}
  
 Add an element to an array.
 Syntax: `array_push(array, element1, element2, elementNth) :array`
 
 <span></span>
 ```php
 $tools = ["hammer"];
 array_push($tools, "chain", "screw driver");
 print_r($tools);
 /*
Array
(
  [0] => hammer
  [1] => chain
  [2] => srcew driver
)
*/
 ```

