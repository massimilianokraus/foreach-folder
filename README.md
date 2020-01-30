# foreach-folder

## Purpose

This command-line utility executes the same command for every subfolder of the current folder.

The `stdout` and `stderr` of every execution is shown.

If the command execution fails for one subfolder, the execution goes to the next subfolder and continues.

## Installation

2) Execute:
    - `npm install -g foreach-folder`
    - `yarn global add foreach-folder` (if you have **yarn** installed)

## Usage

1) Open the Terminal / Prompt

2) Navigate to the target folder

3) execute `forfo "<command>"`


## Example

Let's pretend you have this folder structure:

    parent
       |----child1
       |----child2

and you want to create a `x.txt` file in every subfolder.

Navigate to the folder `parent` with:

    cd <path>/<to>/parent

Execute:

    forfo "touch x.txt"

Now the folder structure is:

    parent
       |----child1
       |       |----x.txt
       |----child2
               |----x.txt

## Use cases:

You have a Node project in every subfolder, and you want to install the dependencies of every project:

    forfo "yarn install"

You have a group of directories with different Git repositories, and you want to pull them all in once:

    forfo "git pull"

You want to list all the depth-0 elements in all the subfolders:

    forfo ls

Or, for Windows:

    forfo dir

(For a more powerful folder explorer, use the the `tree` utility instead).

## Contributions:
Any advise or contribution is welcome.
