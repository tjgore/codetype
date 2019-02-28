---
title: "Useful Javascript Functions for React Developers"
date: 2019-02-28T00:33:38-05:00
description: "A description"
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-red-gradient"
categories: ["Javascript"]
keywords: ["Useful Javascript Functions for React Developers",]
draft: false
---

Over the past year, I have been using React a lot to build projects and realized there are a few javascript functions that are repeatedly being used. 

This article provides a list of useful javascript functions for react developers.
I will explain and give code examples to demonstrate how and why you would probably use the following functions.

An understanding of javascript es6 is needed to follow along because all code examples will be written using es6.

{{<contentTitle title="Array.map() Function (Immutable)">}}

The Map() function loops through each element in the array and returns a new array of the results. This is used when you want to perform an action on each element of the array.

<span class="hl-info"></span>
```js
let animals = ["cat", "dog", "bird", "snake", "tiger"]
const zoo = animals.map(animal => '3 ' + animal + 's' )
console.log(zoo)
// Output: Array(5) ["3 cats", "3 dogs", "3 birds", "3 snakes", "3 tigers"]

let numbers = [1, 2, 3, 4, 5, 6]
numbers.map(number => console.log(number))
/*
Output:
1
2
3
4
5
6
*/
``` 

{{<contentTitle title="Array.filter() Function (Immutable)">}}

The Filter() function returns a new array of the values that passed the condition/s provided. This function is used when you are trying to add the values you are looking for from an old array into a new array.

<span class="hl-info"></span>
```js
let numbers = [1, 2, 3, 4, 5, 6]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)
// Output: Array(3) [2, 4, 6]

let names = ["Mary", "John", "Sara"]
const namesWithLetterA = names.filter(name => name.indexOf("a") !== -1)
console.log(namesWithLetterA)
// Output: Array(2) ["Mary", "Sara"]
```

{{%note%}}
The Map() function returns the results while the Filter() function returns the array value.
If you replace the filter function for the map function you will notice the difference in the output. See the code example below.
{{%/note%}}

<span class="hl-info"></span>
```js
let names = ["Mary", "John", "Sara"]
const namesWithLetterA = names.map(name => name.indexOf("a") !== -1)
console.log(namesWithLetterA)
// Output: Array(3) [true, false, true]
```

{{<contentTitle title="Array.find() Function (Immutable)">}}

The Find() function is just like the Filter() function except it returns the first value that passes the provided test and does not loop through the entire array.

<span class="hl-info"></span>
```js
let colors = ["red", "blue", "green", "black"]
const water = colors.find((color, index) => color === "blue")
console.log(water)
// Output: blue
```

{{<contentTitle title="Array.slice() Function (Immutable)">}}

The Slice() function returns a new array of the selected portion of an old array. The parameters passed represent the start and end indexes of the selected portion from the original array.

<span class="hl-info"></span>
```js
let countries = ["China", "USA", "Antigua", "Germany"]
const selectedCountries = countries.slice(1)
console.log(people)
console.log(selectedCountries)
/*
Output:
Array(4) ["China", "USA", "Antigua", "Germany"]
Array(3) ["USA", "Antigua", "Germany"]
*/

let people = ["John", "Mike", "June", "Jessica"]
people.slice(1, 3)
console.log(people)
// Output: Array(3) ["Mike", "June"]
// Note that the index value of 3 was not added
```

{{<contentTitle title="Array.splice() Function">}}

The Splice() function can remove, replace and add element/s to an array. The first parameter is the index position, the second parameter is the number of elements to remove, and the third parameter is the value you want to add. 

<span class="hl-info"></span>
```js
// Add an element 
let people = ["John", "Mike", "June", "Jessica"]
people.splice(1, 0, "Tom")
console.log(people)
// Output: Array(5) ["John", "Tom", "Mike", "June", "Jessica"]

// Replace an element 
let people = ["John", "Mike", "June", "Jessica"]
people.splice(1, 1, "Tom")
console.log(people)
// Output: Array(4) ["John", "Tom", "June", "Jessica"]

// Remove an element
let people = ["John", "Mike", "June", "Jessica"]
people.splice(1, 1)
console.log(people)
// Output: Array(3) ["John", "June", "Jessica"]
```
