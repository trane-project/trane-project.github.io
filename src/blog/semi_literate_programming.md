# Semi-Literate Programming

One of the goals of [Trane](https://github.com/trane-project/trane) is to make its source code as
clear and easy to understand as possible. The reasons are both altruistic and selfish. The
altruistic reason is that a clearer codebase would make it easier for potential collaborators to get
started, either modifying Trane itself or writing courses for it. The selfish reason is that while I
don't expect any monetary reward for releasing my work as free software, I want Trane to serve as a
showcase of my programming skills. All in the hopes of never having to solve another algorithm and
data structure problem during a job search.

It was with great interest then that I came across the concept of [literate
programming](https://en.wikipedia.org/wiki/Literate_programming). The idea and naming comes from
Donald Knuth, and at its core it's the idea of writing programs with the human reader at mind,
rather than the computer that will execute it. The writing can then follow a more free-flowing
narrative that is not constricted by the syntax of the programming language. Immediately I was sold
on the idea for a few reasons.

1. Unlike what seems the vast majority of programmers, I greatly enjoy writing.
1. Freeing the writing from the syntax would make it easier to guide readers not only through the
   code but through the reasoning and restrictions that led to its design.
1. Having to flesh out the ideas along writing the code might help me avoid mistakes in tricky parts
   of the programs, as Donald Knuth argues so himself.

However, the excitement was short-lived. I quickly realized that the tooling suffers from two issues
that make it a non-starter.

1. The tools are fragmented and there's no clear standard. They are all based on wrapping the code
   using special syntax and using a pre-processing tool to generate the code that is eventually
   passed to the compiler or interpreter.
1. Because of that, all the existing tooling for the language breaks. There's no way to rename a
   function for example, as the tooling does not understand the special syntax of the tool.

Determined to make the basic ideas behind literate programming work, I decided that the best way
forward was to use the existing tooling of the language to write the documentation without the use
of any external tool. I call this semi-literate programming. Since Trane is written in Rust, the
documentation tooling already supports markdown, references, and links, among other features. It's
more than powerful enough, but the only hard requirement is to provide a syntax to write comments,
which most languages do.

Below I present some of the guidelines I used to improve Trane's documentation.

## Rules of Semi-Literate Programming

- This shouldn't even have to be said, but comments should be written in clear language free of
  grammar and spelling mistakes.
- Comments explaining the why of a section of code are more important than comments answering what
  or how. However, there's still use for the latter. They allow a reader to quickly skim what
  a section of code does without having to read a line of code. Below is an example from Trane's
  `scheduler` module.
  
```rust
@@lp-example-1 
```

- Each file (or module, package, etc. depending on the language) should have a top-level comment
  that explains the purpose of the file and how it fits into the larger system. This comment should
  not explain the code in any or too much detail but present the reader with an account of the main
  design decisions that lead to structuring the code in this way. Below is an example from Trane's
  `scheduler::cache` module.

```rust
@@lp-example-2 
```

- The main file (or module, package, etc.) should explain what the whole library or program does and
  also contain a short explanation of the structure of the code to allow readers to better navigate
  the codebase. Below is the relevant section from Trane's `lib.rs` file:

```rust
@@lp-example-3 
```

- Document what each struct, enum, field, function, etc. does, even if it seems obvious to you. It's
  hard to gauge what will be obvious to the readers of your code, which include future you. If the
  purpose is obvious, no more than a short sentence is needed. If there's a detail which is not
  obvious, document why that is so. Below there are examples of both situations taken from Trane's
  `data` module.

```rust
@@lp-example-4
```

```rust
@@lp-example-5
```

- Document situations in which the design was changed and the reasons why. This is part of using the
  documentation of your code to tell the story behind the design decisions. Below is an example from
  Trane's `practice_stats` module.
  
```rust
@@lp-example-6
```

## Tools for semi-literate programming

Here are a few of the tools that helped me while revamping the documentation for Trane.

- An editor plugin to auto-wrap comment lines as you type. I develop in Visual Studio Code and use
  the [Rewrap](https://marketplace.visualstudio.com/items?itemName=stkb.rewrap) extension.
- An editor plugin to check the grammar and spelling of comments. I use the
  [LTeX](https://marketplace.visualstudio.com/items?itemName=valentjn.vscode-ltex) plugin that
  integrates VS Code with [LanguageTool](https://languagetool.org/).

## Results

Does this level of documentation work to improve the quality of the code? I think so. I started
after Trane was already in a fairly complete state, so I cannot say whether this makes writing a new
complex codebase from start any easier. However, I can say that I found several minor bugs and did
some minor refactoring while in the process of improving the documentation.

Does it work to make it easier for others to understand and contribute to the code? I suppose that
judgement falls on others. Whether it can be made to work for larger teams is also a question I
cannot answer as Trane is currently a solo project.