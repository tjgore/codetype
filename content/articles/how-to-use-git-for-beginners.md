---
title: "How to Use Git for Beginners"
date: 2018-10-22T01:04:10-05:00
description: "Learn how to use git and all the common commands with the CLI"
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: "/images/articles/git.jpg"
haveImage: true
categories: ["Git"]
keywords: ["git", "git add", "git commit", "git status", "git for beginners", "how to use git"]
draft: false
---

## What is Git?

Git is an easy and powerful version control software designed to manage files. It is free and open source and used mostly by developers to keep track of their project's code. Git was originally developed by Linus Torvalds for Linux kernel development in 2005.

**Git is not GitHub!** This is a mistake I made when I found out about Github. Github is a code hosting platform used for collaboration. Github allows anyone you want to work and contribute to your projects all at the same time from anywhere in the world.

## Why use Git?

Have you ever named files like this when working on a project for work or school because you wanted to keep the previous version in case you needed it for reference later?

```bash
# Files
about.html 
oldabout.html
about1.2.3.html 
copy of about.html
```

Git solves this duplication of renaming by saving snapshots of your files so that you can revisit or revert back to previous versions of those files.

This is very useful in the case that your code stops working for a strange reason and you want to go back to the last working version or you want to undo all the changes and go back to your files 2 months ago.

**Other reasons why to use Git**

- Git is a faster more secure way of uploading files to your server.
- Git allows teams of developers to collaborate using GitHub.
- Git allows for branching which is like having completely independent folders for your entire project. You will get a better picture of this later on.
- Git is fast and small. Speed and performance has been a primary goal for git. Compared to other version control systems, Git outperforms them.
- Its free!

<h4 class="text-center">Goals:</h4>
<hr/>

In this article, I will explain the basics to get started with git and a little extra but nothing too intense. You will see how to create a local repository, track and commit, view your revisions, and use other common git commands. The best way to learn is by doing so I encourage you to execute all the commands and see the results for yourself.

## Let's get started. Installing Git

First, let's check if git is already installed on your local computer. Open your terminal, which is where we will be doing all our git commands, and enter `git --version`. If the git version number is returned, git is already installed. If git command not found is returned, you need to install git.


Here are detailed instructions for downloading and installing git on [Mac](https://git-scm.com/download/mac), [Windows](https://gitforwindows.org/), or [Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

For this article, I will be using Ubuntu OS. Most linux distros come with git installed by default, but if it is not installed, enter `sudo apt-get install git` to install it.

## Setting up your name and email address for your global Git installation

After installing git and verifying it is installed, enter the following commands to let git know your name and e-mail address.

```bash
# terminal
$ git config --global user.name "Your name"
$ git config --global user.email "your_email@example.com"
```

Enter `git config -l` (l in low) to view and check that you entered the correct details.

```bash
user.email=youremail@gmail.com
user.name=Your-Name
```

If you entered them incorrectly, You can edit your name and email with this command `nano ~/.gitconfig` and save the file.

If you don't have nano installed or you are on windows you can search for the **.gitconfig** file and edit it to make the changes.

## Creating a Local Repository

A repository(repo) is the folder where the history of your project is stored.

Create a directory named **website-project** in your current directory. `mkdir directory-name`

```bash
$ mkdir website-project
```

Move into the **website-project** directory. `cd directory`

```bash
$ cd website-project
```

Now create an **index.html**, **about.html**, and **contact.html** file with `touch filename/s`. The **website-project** directory is where your project and repo will be located.

```bash
# terminal
$ touch index.html about.html contact.html
```

To see the files you just created enter `ls`.

```bash
$ ls
  about.html  contact.html  index.html
```

Within the **website-project** directory, create a repository by entering the `git init` command. Git commands can only run in directories where a git repository is located.

```bash
# terminal
$ git init
  Initialized empty Git repository in /home/user/Desktop/website-project/.git/
```
 
You have just created your first empty git repo!

## Checking your status

Check the status of the repository by entering `git status`. Git status checks the current state of the repository. Currently, it is showing that you have 3 untracked files.

```bash
# terminal
$ git status
  On branch master

  No commits yet

  Untracked files:
   (use "git add ..." to include in what will be committed)

  about.html
  contact.html
  index.html

  nothing added to commit but untracked files present (use "git add" to track)

```

## Tracking files / Staging files

Track all your files with the `git add .` command, then check the status again with the `git status` command. The `git add` command is sometimes confused as adding the files to your repo, but this command adds your files to a middle ground between your project and your repo called **index** so the files are not added to the repository as yet.


Tracked files simply mean the files have been prepared to be added to the local repository, untracked files have not been prepared and can not be added to the repository.

Before you start to track your files let's add some content to the files, but it's ok if you are already tracking your files. You will need to track your files once they have been edited before committing them.

```bash
# Files
<!-- index.html -->
<html>
 <h1> Home Page </h1>
</html>

<!-- about.html -->
<html>
 <h1> About Us Page </h1>
</html>

<!-- contact.html -->
<html>
 <h1> Contact Page </h1>
</html>
```

```bash
# terminal
$ git add .
$ git status
  On branch master

   No commits yet

   Changes to be committed:
   (use "git rm --cached ..." to unstage)

  new file:   about.html
  new file:   contact.html
  new file:   index.html
```

You should see changes to be committed, instead of untracked files.

## Adding Files to the Repository

To add files to the local repository you must track(git add) and commit(git commit) the files.

You can think of commits as adding files to the local repository. Enter `git commit -m "First commit"` to add your project to the repo with the "-m" flag to leave the comment "First commit". If you leave out the `-m` flag git will automatically open an editor for you to leave a comment.

```bash
# terminal
$ git commit -m "First commit"
 [master (root-commit) a41c8c1] First commit
 3 files changed, 9 insertions(+)
 create mode 100644 about.html
 create mode 100644 contact.html
 create mode 100644 index.html
```

You have just completed your first commit!

To view all your commits use the `git log` command, and check your repo status again.

```bash
# terminal
$ git log
  commit a41c8c137320f324a298b4d0530be43b4dcb689f (HEAD -> master)
Author: Your name 
Date:   Fri Oct 20 07:24:09 2017 +0800

  First commit

$ git status
 On branch master
 nothing to commit, working tree clean
```

The commits you see in your logs are snapshots of your files and you can view and revert back to these files at anytime.


The working directory clean message confirms you have committed all your recent changes made to your project. If you now edit the content of the about.html file and check the status again you will see.

```html
 <!-- about.html -->
<html>
 <h1> About Us Page </h1>
 <p> This is the about us page. Welcome to my site </p>
</html>
```

```bash
# terminal
$ git status
  On branch master
  Changes not staged for commit:
  (use "git add ..." to update what will be committed)
  (use "git checkout -- ..." to discard changes in working directory)

  modified:   about.html

  no changes added to commit (use "git add" and/or "git commit -a")
```

This means that if you commit the project without tracking, the recent changes from about.html will not be added to your repository. You must track most recent changes before committing to always add the latest changes to the repository.

Before moving on, see how much you know by trying to track and commit the about.html.

## Getting old versions from the log

There will be times when you do something wrong to your project and you would like to go back to a previous version temporarily. You can by using the `git checkout your-hash` command.

To get a history let's edit the index.html and the about.html, then commit them

```bash
# Files
<!-- index.html -->
<html>
 <h1> Home Page </h1>
 <p> Welcome to the Home Page </p>
 <p> We are learning how to use git. Git is pretty awesome! </p>
</html>


 <!-- about.html -->
<html>
 <h1> About Us Page </h1>
 <p> This is the about us page. Welcome to my site </p>
 <p> This my website take a look around. </p>
</html>
```

```bash
$ git status
 On branch master
 Changes not staged for commit:
 (use "git add ..." to update what will be committed)
 (use "git checkout -- ..." to discard changes in working directory)

  modified:   about.html
  modified:   index.html

  no changes added to commit (use "git add" and/or "git commit -a")

$ git add .

$ git status 
  On branch master
  Changes to be committed:
  (use "git reset HEAD ..." to unstage)

  modified:   about.html
  modified:   index.html

$ git commit -m "added content to home and about page"
  o home and about page"
    [master 2731558] added content to home and about page
  2 files changed, 3 insertions(+)
```

If you have been following along, You should now have at least 3 commits in your history. Run `git log` to view your history.

To go back to a previous version, You will need some information from that previous version. That information is called the hash and to get it you run git log

```bash
# terminal
$ git log
  commit 2731558cd4bdacb3e3218480cc0980f0b91a0fb9 (HEAD -> master)
  Author: Your name 
  Date:   Fri Oct 20 15:59:52 2017 +0800

    added content to home and about page

  commit bbdfc225ffe28d847440b64ab57fc4af203fa255
  Author: Your name 
  Date:   Fri Oct 20 08:02:53 2017 +0800

    added a paragraph

  commit a41c8c137320f324a298b4d0530be43b4dcb689f
  Author: Your name 
  Date:   Fri Oct 20 07:24:09 2017 +0800

  First commit
```

In the Results above, I have 3 commits. Each having a commit hash, author, date, and a comment. The first 7 characters or more after "commit" will be used as our hash.

I will take the second commit's hash **bbdfc225f** and revert back to my project's state in this commit temporarily using `git checkout bbdfc225f`.

**Your hash will be different from mine so make sure to replace my hash with yours.**

Check out the contents of your files and you will see that they have been changed to that previous version.

```bash
# terminal
$ git checkout bbdfc225f
  Note: checking out 'bbdfc225f'.

  You are in 'detached HEAD' state. You can look around, make experimental
  changes and commit them, and you can discard any commits you make in this
  state without impacting any branches by performing another checkout.

  If you want to create a new branch to retain commits you create, you may
  do so (now or later) by using -b with the checkout command again. Example:

    git checkout -b 

  HEAD is now at bbdfc22... added a paragraph
```

```html
<!-- BEFORE git checkout -->
<!-- about.html -->
<html>
 <h1> About Us Page </h1>
 <p> This is the about us page. Welcome to my site </p>
 <p> This my website take a look around. </p>
</html>


<!-- AFTER git checkout -->
<!-- about.html -->
<html>
 <h1> About Us Page </h1>
 <p> This is the about us page. Welcome to my site </p>
</html>
```

You have successfully gone back in time to your project's previous version. It is like Ctrl Z but you are in control of how far to go back and when you want to, whether it is today or 2 months from now.

To return to the latest version of your working directory use `git checkout master`.

If you submit a commit while you are in a previous version, this previous version will then become your most recent version. You can commit the previous version in another branch to prevent overwriting your latest version. `git checkout -b your-branch-name hash-you-want`.


You can also do a hard reset to a previous version using `git reset --hard your-hash`, which reverts you back to a previous version permanently. Be careful using a hard reset, it can not be undone and removes every version after the version you reset to.

## Branches

You can think of branches as folders. Branches are entirely independent of other branches. For this entire article, you have been working in the master branch, the default branch.

Let's add some styles to the index.html page to give the page some color. You can add these changes to a new branch so that they don't affect the master branch using `git checkout -b designs`.

When you create a branch, you copy the latest version of your current branch into the branch you are creating.

```bash
# terminal
$ git checkout -b designs
  Switched to a new branch 'designs'
```

You have successfully created a branch and you are now working within this branch!

Create a styles file `touch style.css`, and update the index.html file to use the style.css

```css
/* style.css */
h1 {
color: red;
}
p {
color: blue;
}
```

```html
<!-- index.html -->
<html>
<link rel="stylesheet" href="style.css" >
 <h1> Home Page </h1>
 <p> Welcome to the Home Page </p>
 <p> We are learning how to use git. Git is pretty awesome! </p>
</html>
```

Track the files with `git add .` command, then `git commit -m "added style"` to commit the changes.

```bash
# terminal
$ git add .
  $ git commit -m "added style"
    [designs a9a7630] added style
  2 files changed, 7 insertions(+)
    create mode 100644 style.css

```

You now have a new branch **designs** that is separate from your main (master) branch.

You can switch back to your master branch by using `git checkout master`. After returning to your master branch, Open the "index.html" file and you will notice the `<link>` tag is gone along with the `style.css` file. That is because all the changes we made were done in the designs branch.

That is the power of branches. It is like having 2 independent folders with your files without actually having these folders.

You can use the `git show-branch -a` command to display all your branches logs and the `git branch -d your-branch-name` to delete the branch.

## Merging branches

Branches can also be merged to create a single branch. You can go back to the master branch, if you are not in it already, and combine it with the designs branch.

```bash
# terminal
$ git checkout master
  Switched to branch 'master'

  $ git merge designs
    Updating 2731558..a9a7630
  Fast-forward
  index.html | 1 +
  style.css  | 6 ++++++
  2 files changed, 7 insertions(+)
  create mode 100644 style.css

  $ git log
```

From your git log you should see that the master branch now has everything the designs branch has. You can also see that the master branch has the style.css file.

## Creating a GitHub repository

Head over to [GitHub](https://www.github.com/) and create an account if you don't already have one.

Let's assume your username for your account is john.

After creating an account, you need to create a repository called **my-project**. You can create a repo by clicking on the new repository button or start a project button. No need to initialize with a README.md or .gitignore right now.

![Github Add](/images/articles/github-add.jpg "Github-add")

![Github](/images/articles/github.jpg "Github")

Your repo link should be something like this with your username github.com/john/my-project.

## Pushing your repository to GitHub

When you push files to github, you are transferring files from your local repo to github repo.

You can now add your github repo url to your local remotes with `git remote add origin https://github/john/my-project`.

The remote called **origin** is the location of where you want to push and pull files online **https://github/john/my-project**.

To check your remotes enter `git remote -v`.

```bash
# terminal
$ git remote add origin https://github/john/my-project
$ git remote -v
```

**Remember to replace john with your own username and my-project with your github repo name, if you didn't name it "my-project".**

You can push your local repo to your github repo with the `git push origin master` command.

This command will prompt you to enter your Github account username and password. Even though the password field is blank when you type, it is still receiving your input.

Before pushing up your project, check your status to make sure you have nothing to commit.

```bash
# terminal
$ git push origin master
  Username for 'https://github.com': john
  Password for 'https://john@github.com': 
  Counting objects: 16, done.
  Delta compression using up to 4 threads.
  Compressing objects: 100% (14/14), done.
  Writing objects: 100% (16/16), 1.53 KiB | 312.00 KiB/s, done.
  Total 16 (delta 3), reused 0 (delta 0)
  remote: Resolving deltas: 100% (3/3), done.
  To https://github.com/john/my-project.git
  * [new branch]      master -> master
```

Go back to your github repo and refresh. Your local repo is now on github repo for everyone to see and contribute to.

## Pulling repository from GitHub

When you pull repositories from github, you are transferring files from the github repo to your local computer.

Pulling your github repo with the git pull origin master command will result in the result below.

```bash
# terminal
From https://github.com/john/my-project
* branch            master     -> FETCH_HEAD
Already up-to-date.

```

This is because no one has edited the files you pushed and you are the only one pulling and pushing to the repo.

This is where GitHub is used for collaborating. If someone else has edited your files and you then pull your repo while having a copy of that repo on your local machine, you should then be able to get the new changes made.

To demonstrate this go to your repository on GitHub and edit the about file there and not on your local machine.

```html
<!-- about.html -->
<html>
 <h1> About Us Page </h1>
 <p> This is the about us page. Welcome to my site </p>
 <p>This my website take a look around. </p>
 <p>I like GitHub </p>
</html> 
```

Now pull your repo with the `git pull origin master</span> command to receive all the updates.

```bash
# terminal
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From https://github.com/tjgore/my-project
 * branch            master     -> FETCH_HEAD
   a9a7630..fc7c4dc  master     -> origin/master
Updating a9a7630..fc7c4dc
Fast-forward
about.html | 1 +
1 file changed, 1 insertion(+)
```

Your local repo has been updated with the changes from your Github repo.

## Cloning a GitHub repository

To download a github repo you need to clone it with the `git clone repository-url` command.

This command will copy the files from the repository url you entered. Once you have git installed, you can clone files anywhere you like even outside of the directory we have been working in.

```bash
# terminal
$ git clone https://github/john/my-project
  Cloning into 'my-project'...
  remote: Counting objects: 16, done.
  remote: Compressing objects: 100% (11/11), done.
  remote: Total 16 (delta 3), reused 16 (delta 3), pack-reused 0
  Unpacking objects: 100% (16/16), done.
```

The clone command differs from the pull command because the clone command ignores your local repo and copies over your entire GitHub repo; while the pull command considers the local repo and copies in only the updates rather than the entire repo.

Also, the pull command can only be used in an initialized git repo on your computer, while the clone command can be used anywhere, once git is installed.

You should now know enough about git to use with your projects and continue to learn more advanced features. Now go out there Git Started!

## Summary

Below is a list of all the commands I used within this article:

- **git --version** - Displays the version of git installed.
- sudo apt-get install git - Install git as super user.
- **git config --global user.name "Your name"** - set your name for local global git installation.
- **git config --global user.email "your_email@example.com"** - Set your email for local global git installation.
- **git config -l** - Check global git name and email config.
- **mkdir website-project** - Make a directory called "website-project".
- **cd website-project** - Change directory/ move into folder "website-project".
- **touch index.html** - Create a file.
- **ls** - List all files in the current directory.
- **git init** - Initialize folder to be a git repository.
- **git status** - Check the current state of the repository.
- **git add about.html** - Track the about.html file to be committed.
- **git add .** - Track all the files to be committed.
- **git commit -m "Initial commit"** - Commit/add files that have been tracked to the local repository with the comment "First commit".
- **git log** - Displays all the history of your commits.
- **git checkout 74898jhdv** - Move to this previous commit temporarily. Get the hash from the logs
- **git checkout master** - Move back to the latest version of your files.
- **git show-branch -a** - Display all branches and commits.
- **git branch -d designs** - Delete the branch called "designs".
- **git merge designs** - Combine/merge designs branch with the current branch.
- **git remote add origin https://github/john/my-project** - Add the github repository url as a location to push and pull repos.
- **git remote -v** - Display all your remotes.
- **git push origin master** - Push/Send the repository you are currently into your origin remote master branch.
- **git pull origin master** - Pull/copy from your origin remote master branch to your local repo.
