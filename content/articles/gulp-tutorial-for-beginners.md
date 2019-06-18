---
title: "Gulp Tutorial for Beginners"
date: 2017-10-28T15:50:45-05:00
description: "Automate your tasks and enhance your workflow with Gulp"
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: "/images/articles/gulp.jpg"
haveImage: true
categories: ["Javascript"]
keywords: ["gulp", "gulp for beginners", "install gulp", "sass to css", "minify css", "minify html"]
draft: false
---

## What is Gulp?

Gulp is a javascript task runner for web developers. This task runner is a tool used to automate time-consuming repetitive task such as: minifying css and html, optimizing javascript, reloading your browser , and many other redundant tasks.

Gulp is referred to as a build tool because it runs tasks for building websites. Gulp tasks are coded in javascript. In order to run Gulp tasks, we need Node.js to be installed and the command line.

## Why use Gulp?

Why not? Gulp is a extremely useful tools that cuts out repetitive tasks. Who doesn’t want to make repetitive tasks easier and faster?

In the case of Gulp vs [Grunt](https://gruntjs.com/), which is another popular task runner, Gulp advantages are it is shorter, simpler and faster than Grunt’s tasks.

## Prerequisites

- Basic knowledge of HTML , CSS, and Javascript
- Basic knowledge of the command line

## Goals

In this article you will learn a few of the basics to get started using gulp and experience an increase in your productivity. I will show you how to install gulp and different plugins, along with how to use these plugins.

With these plugins you will learn how to:

- Compile Sass to Css
- Minify Css files
- Renaming files
- Remove unnecessary css from bloated css frameworks
- Optimize js and minify Html files
- Watch your files for any changes
- Start a server and enable auto reloading of your browser
- and more...

I will be using Ubunutu OS throughout this article, for mac users installing and getting started should be fairly similiar; while for windows users it may differ but the overall javascript written and concepts are the same.

Let’s get started with Gulp.

## Setting up a Project Directory

Since Gulp runs its tasks on files, to get started we need a project to work with. You can clone this [gulp-beginner](https://github.com/tjgore/gulp-beginner/tree/start) repository using git, or you can go to the link and download the files by clicking the “clone or download” green button and download the zip.

```bash
$ git clone https://github.com/tjgore/gulp-beginner/tree/start

```

In this gulp-beginner directory you should have:

- **src folder**: this is where your project(html, css, js, etc..) files will be located.
- **gulpfile.js** file: is the file that will hold your javascript gulp tasks

```bash
# folder structure
| - src/
  | - fonts/
  | - images/
  | - js/
  | - scss/
  | - index.html  
| - gulpfile.js
| - README.md
```

To skip ahead and see the completed gulpfile.js code you can checkout the [master branch](https://github.com/tjgore/gulp-beginner/tree/master), but make sure to come back to follow along.

If you open the index.html file you will realise it does not have any css styling, this is because you need to compile your sass to css using gulp. Continue reading to see how you will achieve this later on.

## Installing Node.js

In order to you use gulp you need to install nodejs. Node js, according to nodejs.org is “a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.”


Enter in your terminal `sudo apt-get install nodejs` to install node.js, and `sudo apt-get install npm` to install node package manager.

Npm will be used to install gulp plugins. If you already have nodejs installed but want to update it, see how to [here](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions).

```bash
$ sudo apt-get install nodejs
$ sudo apt-get install npm
```
To check if they were installed successfully check the software version of both nodejs and npm by using `nodejs -v; npm -v`.


```bash
$ nodejs -v; npm -v
  v6.11.4
  3.10.10
```

## Installing Gulp Globally

Now that you have Node.js and npm installed, you can use npm to install gulp.

Enter `sudo npm install -g gulp`. This will install gulp so that you can use it anywhere on your computer, (-g: globally).

```bash
$ sudo npm install -g gulp
```

If all your commands executed successfully, you have successfully installed gulp throughout your computer. Enter`gulp -v` to verify.


## Initiating Node and adding Gulp to your gulp-beginners directory

Within your gulp-beginner directory, you need to initiate node and gulp.

Let’s start with `npm init` You will be prompted to fill out some details. If you don't have the information or you are unsure what to input, just press enter.

This command will create a package.json file with the input you submitted.

```js
$ npm init
  {
  "name": "gulp-for-beginners",
  "version": "1.0.0",
  "description": "a gulp tutorial for beginners",
  "main": "gulpfile.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/tjgore/gulp-beginner.git"
  },
  "keywords": [
    "gulp",
    "javascript",
    "gulp-beginner",
    "task-runner"
  ],
  "author": "TJ",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/tjgore/gulp-beginner/issues"
  },
  "homepage": "https://github.com/tjgore/gulp-beginner#readme"
  }
```

Next, we have to install gulp within our working directory with `npm install gulp --save-dev`. Yes, we are installing gulp again but it is not global but within the project.

This time installing gulp creates a node_modules folder and within that folder you can search and should find a gulp folder.

```bash
$ npm install gulp --save-dev
```

You may get some warnings messages, but it is ok to ignore them.

Before moving forward you should test to see if gulp is working. All your gulp task will be written in javascript in your gulpfile.js file.

The first step we must do before anything else is to require our gulpfile. The required statement tells Node to find the gulp plugin within the node_modules folder and assign its content to the variable gulp.

**gulpfile.js**

```js
var gulp = require("gulp");
```

You can create a gulp task using the gulp variable as shown below.

**gulpfile.js**

```js
gulp.task("your-task-name", function (){
  console.log("Gulp is awesome")
});
```

`Your-task-name` can be named anything you want.

To run the task in your terminal you should enter `gulp your-task-name`.

**gulpfile.js**

```js
$ gulp your-task-name

  [13:43:32] Using gulpfile ~/gulp-beginner/gulpfile.js
  [13:43:32] Starting 'your-task-name'...
  Gulp is awesome
  [13:43:32] Finished 'your-task-name' after 170 μs
```

If you see "Gulp is awesome" as your output , you have successfully installed gulp in your working directory and created your first tasks.

We are now ready to start using gulp and writing more gulp tasks for our project.

## Installing Gulp plugins

Gulp by itself does not do much for us.

Gulp gets a lot of its functionality and power from plugins.

To install plugins you use the npm install plugin-name --save-dev command. The “--save-dev ” flag is used to add gulp plugins to the devDependecies in package.json. This command will be used to install your plugins. You will be using it very often to get plugins.

You can find all the plugins you install in the package.json file.

```bash
$ npm install gulp-sass
```

The plugins you will be using throughout the rest of this article are:

- **gulp-sass**: compiles sass to css
- **gulp-cssmin**: minifies css
- **gulp-uncss**: removes unnecessary css
- **gulp-uncss**: removes unnecessary css
- **gulp-rename**: rename files
- **gulp-uglify**: minify javascript files
- **gulp-concat**: join 2 or more files into 1
- **browser-sync**: start up a server
- **gulp-htmlmin**: minify HTML files
- **run-sequence**: run a series of tasks in a specific order

## Compiling Sass to Css

You can use the `gulp-sass` plugin in Gulp to compile sass to css. To use plugins within your gulpfile.js file, you simply require them as you did with gulp and create your tasks

Give the task a name and use it with `.pipe()` as shown in the example below.

**gulpfile.js**

```js
var sass = require("gulp-sass");
// other tasks

gulp.task("sassCss", function(){
  return gulp.src("src/scss/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("src/css"));
});

```

As you can see I included a few more functions not mentioned before, the `gulp.src() and gulp.dest()`. These are 2 of gulp's common functions.

You have to edit your gulp.src() to let gulp know where to get your sass files which are located in src/scss/ folder. You also have to edit your gulp.dest to where you want your compiled files to be placed.


Below is a list of common functions used in gulp:

- gulp.task(): create a gulp task
- gulp.src(): the location of the files the gulp task will use.
- gulp.dest(): the directory where the output will be located
- .pipe(): passes a stream of data which allows for the chaining of multiple gulp plugins.
- gulp.watch(): a function for executing a task or list of tasks everytime anyone of the files listed are saved.

Let’s automate more tasks and enhancing our project's workflow further.

## Globbing in Node

Globbing patterns are like regular expressions. These allow you to add multiple files to gulp.src() and gulp.watch(), you will see how to use gulp.watch() later.

4 Globbing patterns are:

- *.scss: The * is a wildcard used to match any files ending with .scss
Eg. hello.scss, styles.scss and main.scss are all matches
- **/*.scss: This globbing pattern is also a wildcard indicating to match any file that ends with .scss in any directory 1 step up.
Eg. styles/main.scss and /css/styles.scss are matches.
- !hello.scss: The ! pattern indicates to exclude that specific file/s.
Eg. !main.scss is a match and is excluded from files to be processed.
- main.+(scss|css|sass): The + pattern along with () and | pattern indicates that files with any 3 of the file extensions are a match.
Eg. hello.scss, hello.css or hello.sass are all matches.

You can also include multiple files to the gulp.src() with an array. Take alook at the gulp tasks below to see how this is done.

**gulpfile.js**

```js
gulp.task("sassCss", function(){
  return gulp.src(["src/scss/main.scss", "src/scss/bootstrap.scss"])
      .pipe(sass())
      .pipe(gulp.dest("src/css"));
});
```

This tasks would take in 2 sass files,compile them to css and output the files in src/css.

## Minifying Css

Imagine having to minify all your css files every time you make a change. That could be very annoying and inconvenient but gulp makes minifying files quick and easy.

Let’s add the `gulp-cssmin` plugin and chain it to your first task. This plugin will minify the css we compiled from our sass and add it to our sassCss tasks using the .pipe() function.

Don't forget to install gulp-cssmin `npm install gulp-cssmin --save-dev`.

**gulpfile.js**

```js
var minify = require("gulp-cssmin");

// other tasks

gulp.task("sassCss", function(){
  return gulp.src(["src/scss/main.scss", "src/scss/bootstrap.scss"])
      .pipe(sass())
      .pipe(minify())
      .pipe(gulp.dest("src/css"));
});
```

Enter `gulp sassCss` in your terminal to run the task. This time around the task will compile sass to css, minify it and save the output into app/css folder.

```bash
$ gulp sassCss

  [13:45:43] Using gulpfile ~/gulp-beginner/gulpfile.js
  [13:45:43] Starting 'sassCss'...
  [13:45:44] Finished 'sassCss' after 836 ms
```

You can also change the name of your gulp tasks to describe what the tasks does. Let's change sassCss to sassCssMini. You will now run the the tasks with `gulp sassCssMini` command instead of gulp sassCss.

## Renaming .css files to -min.css

Again we can add another plugin called `gulp-rename` and chain it within the sassCssMini task.

This plugin will rename your .css files to -min.css by adding the suffix option for the plugin. To see all the documentation and options, you can check out the github repo for each plugin.

Do not forget to install and require all your gulp plugins.

**gulpfile.js**
```js
var rename = require("gulp-rename");

gulp.task("sassCss", function(){
  return gulp.src("src/scss/*.scss")
    .pipe(sass())
    .pipe(minify())
    .pipe(rename({
      suffix: "-min"
    }))
    .pipe(gulp.dest("src/css"));
});
```

Run `gulp sassCssMini` task again and check your src/css folder.

Your .css files should be -min.css.

```bash
$ gulp sassCssMini

  [13:48:28] Using gulpfile ~/gulp-beginner/gulpfile.js
  [13:48:28] Starting 'sassCssMini'...
  [13:48:29] Finished 'sassCssMini' after 845 ms
```

Delete the old main.css file in your src/css folder and edit your index.html file to use the main-min.css.

**index.html**

```html
<title>Gulp Tutorial</title>
  <link rel="stylesheet" type="text/css" href="./css/main-min.css">
```

## Removing unnecessary css from bloated css frameworks

Have you ever used a css framework such as Bootstrap, Foundations or Bulma and don’t need all the css styles available? Well the `gulp-uncss` plugin solves this issue by removing all the style from your css files you are not using in your html files.

Install the plugin with `npm install gulp-uncss --save-dev`.

**gulpfile.js**

```js
var removeCss = require("gulp-uncss");

gulp.task("cleanCss", function(){
return gulp.src("src/css/*-min.css")
     .pipe(removeCss({
      html: ["src/index.html"] 
    /* checks for all the styles being used within this file */
    }))
      .pipe(gulp.dest("src/css")) 
});  
```

Before running the task, check your main-min.css files size. The file size is currently 119.4 kb. After running `gulp cleanCss` your file size shrank down to 8.0kb because the tasks removed all the unused styles from your css boostrap.

## Optimizing js

When working with a lot of javascript files, you will want to optimize your javascript by combining and minifying them.

To concatenate and minify js files install these 2 plugins:

- **gulp-concat**: combine javascript files
- **gulp-uglify**: minify javascript files

```bash
npm install gulp-concat --save-dev
npm install gulp-uglify --save-dev
```

Optimize your javascript with the following task. The optjs task will take the jquery.js and bootstrap.js file concatenate them into main-min.js, minify that file, and save it within the src/js folder.

**gulpfile.js**

```js
gulp.task("optjs", function(){
return gulp.src(["src/js/jquery.js","src/js/bootstrap.js"])
     .pipe(combineJs('main-min.js'))
     .pipe(miniJs())
     .pipe(gulp.dest("src/js"));
});
```

Edit your index.html to use the main-min.js file

**index.html**

```html
<script type="text/javascript" src="./js/main-min.js"></script>
</body>
</html>
```

You can also do these edits in your html file automatically using the gulp-replace plugin.

## Watching files

Currently you have to run the sassCssMini task in order to compile your scss files every time you make a change. Gulp provides an easy function called watch to automatically run tasks when files are saved. This saves you the hassle of having to enter in the terminal the tasks everytime you save your file.


The syntax for the watch method is as follows

**gulpfile.js**

```js
gulp.task('task-name',['tasks-to-run-first'], function(){
  gulp.watch(['files-to-watch'], ['other-tasks']);
});
```

The array after the task name holds all the tasks you want to run before the actually task begins. In the task below, the sassCssMini task is ran before the watch function begins. You can add as many task within any of the arrays to run multiple tasks.


The files-to-watch are the files that will trigger the other-task to run once they have been saved. You can watch all your files in your app/scss folder with app/scss/\*.scss. You can also add as many tasks as you like in the other-tasks array.


**gulpfile.js**

```js
gulp.task('watchSass',['sassCssMini'], function(){
  gulp.watch('src/scss/*.scss', ['sassCssMini']);
});
```

To test your task run gulp watchSass. Open yor index.html in your browser. You can now change "$gulp-color: #e84c50;"" to "$gulp-color: red;" in your main.scss file ,save and reload your browser. Without this watch task, you would have to run the SassCssMini task everytime you change your main.scss file.

You can stop your watch task with Ctrl+c.

## Start a server and enable browser auto reloading

The `browser-sync` plugin let us get a server up and running quickly and easily so that we can take advantage of auto reloading. No need to keep refreshing your browser to view your changes as before.

Install browser-sync with `npm install browser-sync --save-dev`.


Requiring the plugin is a bit different from how we have been doing it before. Browser-sync also uses a create() function as shown below.

**gulpfile.js**

```js
var browserSync = require("browser-sync").create();
```

You need to create a task which will launch a server. You also need to tell the tasks where the root directory is located. Visit [browser-sync](https://browsersync.io/docs/gulp) to get more information and ways to use browser-sync.

**gulpfile.js**

```js
gulp.task('startServer', function(){
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
});
```

To start up your server enter `gulp startServer`. Anytime you wish to stop your server, use Ctrl+c


If you noticed, you can not run any tasks while your server is running. So you want to tell gulp to run the startServer tasks before watching your files as shown below. The `browserSync.reload` statement in the watch function reloads the browser everytime you save the files being watch.

**gulpfile.js**

```js
gulp.task('watchSass',['sassCssMini','optjs','startServer'], function(){
  gulp.watch("src/scss/*.scss", ['sassCssMini']);
  gulp.watch(["src/js/jquery.js","src/js/bootstrap.js"], ['optjs']);
  gulp.watch("src/css/*-min.css", browserSync.reload);
  gulp.watch("src/*.html", browserSync.reload);
});
```

This tasks allows us to make edit to our sass files and html files and the browser reloads on its own. Try it out for yourself, open index.html and edit your main.scss file.

## Transferring files

Sometimes you don't need to make any changes to certain files or you just need to transfer files from one place to the other such as the "src/fonts/" and the "src/images/"" folder.

You will be transferring these folders and all our optimized files to a dist folder with the task below. The dist folder is the folder where your completed, clean and optimized project will be.

Enter the `npm install gulp-htmlmin --save-dev` command to download and use it to minify your html files.

**gulpfile.js**

```js
/* Transfer to dist */
gulp.task('images', function(){
  gulp.src(["src/images/*","!src/images/*.not-needed"])
  .pipe(gulp.dest("dist/images"));
});

gulp.task('fonts', function(){
  gulp.src(["src/fonts/**/*"])
  .pipe(gulp.dest("dist/fonts"));
});

gulp.task('css', function(){
  gulp.src(["src/css/*-min.css"])
  .pipe(gulp.dest("dist/css"));
});

gulp.task('js', function(){
  gulp.src(["src/js/*-min.css"])
  .pipe(gulp.dest("dist/js"));
});

gulp.task('minihtml', function(){
  gulp.src('src/*.html')
  .pipe(mini({ 
      collapseWhitespace: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true
  }))
  .pipe(gulp.dest('dist'));
});
```

From the list of tasks , these tasks will transfer all your images but not images that end with .not-needed, all files and folders in the fonts folder,only your optimized css and js files and your minified html files to your dist folder.

This process could also be simplified by editing the gulp.dest() for each tasks to go to the dist folder. Feel free to be creative and find easier ways of building your final project.

The dist folder was created on the fly, you do not have to create it.


## Combining tasks and running them in a sequence

Let's create a task that will run other tasks in sequence. To do this you should install and require `run-sequence` as follows.

```bash
$ npm install run-sequence --save-dev
```

**gulpfile.js**

```js
gulp.task('default',function(callback){
  runSequence('sassCssMini','cleanCss','optjs','images','fonts','css','js', callback);
  console.log("Complete, optimized project build");
});
```

A task named "default" can simply be runned by entering `gulp`. There is no need to enter gulp default.

This tasks will do all of the follow tasks in order of how they are listed to ensure each tasks is completed before the next. This ensures that css files aren't transfered before they have been optimized or js files are optimized before they are placed in the dist folder.


## Explore more plugins

Here is a list of a few more plugins that you may find useful.

Gulp has no shortage when it comes to plugins. There is a plugin for almost every task.

- **gulp-useref**: concatenate js or css more info
- **gulp-nunjucks-render**: modularize html files, similar to twig template engine more info
- **gulp-data**: generate a data object from a variety of sources to be passed to a plugin, goes well with nunjucks plugin above more info
- **gulp-replace**: replace any string match in file more info
- **gulp-htmltidy**: clean and format html files more info
