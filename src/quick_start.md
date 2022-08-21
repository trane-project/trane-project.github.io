# Quick Start

## For technical users

This section assumes you know how to use git, the terminal for your operating system, and can
install software in a place where your terminal can find it.

### Install trane-cli

[trane-cli](https://github.com/trane-project/trane-cli) is the command-line interface for Trane. To
install it download the appropriate binary for your operating system and CPU architecture from the
[Releases](https://github.com/trane-project/trane-cli/releases) page. Then move the binary to a
directory in your `PATH` environment variable.

### Create your first Trane library

A Trane library is simply a directory with a `.trane` directory in it. Your progress and options are
stored under this directory. This directory is created and populated automatically the first time
you open it with Trane. Thus, the only thing needed to create a new Trane library is to create a new
directory.

### Downloading material for Trane.

For this guide, we'll use the official Trane course
[trane-music](https://github.com/trane-project/trane-music). Open a terminal, navigate inside the
directory you created in the previous step, and run the following command:

```
git clone https://github.com/trane-project/trane-music.git
```

This will download all the course's contents to your computer.

### Opening your Trane library

From the same terminal, run the command `trane`. You should see a prompt like this:

```
trane >> 
```

Inside this command-line interface, type `open ./`. You should see a message saying that the library
is open. To see a new exercise, type `next`. To score the exercise, type `score <YOUR 1-5 score>`. 
For more documentation, check out the [trane-cli](./trane-cli.md) section.

