# codecrafters-git

This is a playground to get familiar with git and how to flow with it. If you want to try it I'll have to add you as a collaborator first, so drop me a message with your Github name and I'll have that sorted 😁

## Cloning the repository

Go to the repository link [CodeCrafters Git](https://github.com/T-Tavares/codecrafters-git/tree/main)

![Git Clone link](/Images/git-clone-01.png)
On the green button "<>Code"

Select HTTPS and copy that link. This is the link you'll need to clone that repo.

On your terminal, navigate to the folder you want that repo to be cloned to and use the git clone command.

    git clone https://github.com/T-Tavares/codecrafters-git.git

## Creating your own branch

I advise to avoid symbols and uppercase letters on your branches. You'll still be able to create them, but to save yourself from some future problems on deployments and other related things it's easier to keep it algit-clone-01l on lowcase with "-" as divisors.

Also, the industry best practices is to name your branches with your name followed by the feature you're working on.
Ex:

yourname-feature
thiago-navbar

That said let's go to branches commands.

Git branch withouth any branch name will show a list of existing branches

    git branch

![git branch output](/Images/git-branch-output.png)

There are a few ways to create branches, but let's stick to the more common one.

    git branch <your-branch-name>

From there you can change to your branch with

    git checkout <your-branch-name>

From here you can code everything you planned. Always remember to commit through your process, those are your saving points in case things go wrong in the future.

## Merging things from your branch to the main branch

After all changes are commited on your personal branch, switch to the main branch

    git checkout main

from here pull any changes that might be added to the repo while you were working on your own stuff

    git pull

That's will assure your project is up to date with everyone else. And avoid unecessary conflicts and errors.
To merge the changes you just need to call

    git merge <branch-you're-bringing-the-changes>

    // Ex.

    git merge thiago-navbar

You'll see the code on VS code change instantly on merges and when you swap from one branch to another. And that's version control beauty working with you my friend :D

At this point you might get conflicts. Which are overlapping code that git is not sure how to deal with. So you have to resolve them. But it's quite easy. Instead of having loads of images to explain that part of the process I'll drop a link here that goes through how to resolve conflicts.

[![merge conflicts](/Images/merge-conflicts.png)](https://www.youtube.com/watch?v=lz5OuKzvadQ)

[Link Here](https://www.youtube.com/watch?v=lz5OuKzvadQ)

## Updating your main and personal branches

1 - Make sure you're on the main branch

    git checkout main

2 - Update / Pull main branch changes

    git pull

3 - Change to your branch

    git checkout <your-branch>

    // or

    git switch <your-branch>

4 - Bring main changes to your branch with merge

4.1 - Make sure youre on the branch receiving the changes

4.2 - Git merge from main

    git merge <the branch you're bringing>

    // in our case

    git merge main

5 - Now you have your branch up to date with the main branch
