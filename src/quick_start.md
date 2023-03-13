# Quick Start

## For technical users

This section assumes you know the terminal for your operating system, and can install software in a
place where your terminal can find it.

### Install trane-cli

#### Prebuilt binaries

[trane-cli](https://github.com/trane-project/trane-cli) is the command-line interface for Trane. To
install it download the appropriate binary for your operating system and CPU architecture from the
[Releases](https://github.com/trane-project/trane-cli/releases) page. Then move the binary to a
directory in your `PATH` environment variable or somewhere else where your terminal can find it.

#### From source

If you want to build the binary from source, you need to have the Rust toolchain installed. Then,
clone the `trane-cli` repository and run the command `cargo install --path .`

### Create your first Trane library

A Trane library is simply a directory with a `.trane` directory in it. Your progress and options are
stored under this directory. This directory is created and populated automatically the first time
you open it with Trane. Thus, the only thing needed to create a new Trane library is to create a new
directory.

### Opening your Trane library

From the directory you just created, open a terminal, and run the command `trane`. You should see a
prompt like this:

```
trane >> 
```

Inside this command-line interface, type `open .` followed by the Enter key. You should see a
message saying that the library is open. To see a new exercise, type `next`.  Since there are no
materials downloaded yet, you'll get a message saying there was an error retrieving an exercise.

If you have difficulties navigating the command-line interface, refer to the "Basic shortcuts"
section in the [trane-cli](./trane-cli.md) documentation.

### Downloading material for Trane.

For this guide, we'll use the official Trane course
[trane-music](https://github.com/trane-project/trane-music). Go to that webpage and click on the
green button that says "Code". In the "Local" tab, there are options for cloning the repository.
Click on the option that says "HTTPS" and copy the URL shown. In this example, it is
`https://github.com/trane-project/trane-music.git`.

In the terminal, type the following command:

```
repository add https://github.com/trane-project/trane-music.git
```

This will download the contents of that repository into your computer in a directory called
`managed_courses`. You can verify that the repository was downloaded by executing the command
`repository list`.

### Working on your first exercise

Without exiting Trane, refresh the library by executing the command `open .`. Now that there are
exercises in the library, you can execute the command `next` to get a new exercise. You should see
the exercise on your screen. If an answer is available, you can see it by executing the command
`answer`. Providing a score for the exercise is done by executing the command `score <YOUR_SCORE>`,
where `<YOUR_SCORE>` is a number between 1 and 5 that indicates your mastery of the exercise. Once
you have provided a score, you can get a new exercise by executing the command `next`.

## For non-technical users

For less technical users, the only difference with respect to the previous section is that you
should download the prebuilt `trane` binary and place it in the directory you created to store your
Trane library. This way, you don't need to install it in a directory in your `PATH` environment
variable if you don't know what that means. All the other steps are the same.
