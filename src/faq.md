# FAQ

## What is the current state of the project?

Trane is in an early state, but it works and should not break for most people. A lot of bugs were
found and addressed in earlier versions in the process of testing the library and reaching 100% code
coverage (see the [blog post](./blog/100_code_coverage.md)). If you run into any bugs, feel free to
report them in the relevant GitHub repository.

Due to the early state of the project, Trane is subject changes to its API and data formats. The
only state by Trane depends on the ID of a unit, so as long as that is not changed, updating the
files to match any breaking changes is the only thing needed to make Trane pick up the updated
versions and keep your progress.

I do not expect big changes in the scheduling logic until there is enough user feedback to know what
works and what does not. So far, I've only had to change the values of certain constants because
initially progress through the units was a little slow.

## How well does Trane work?

The honest answer is that I am not sure. One of the goals of releasing Trane to the public is to get
feedback and user reports in the hope that I can fine-tune it. I suspect Trane will work fairly well
in learning skills that require the repetition of complex chains of patterns until mastery of each
and the whole is achieved. Playing music mostly follows this pattern, but I would like to figure out
how it can be applied to other skills.

In my personal use, I have found Trane to work well. It is easy to practice for longer than I used
to and if I can move on to practice other skills if I encounter an exercise that is too difficult
and becomes frustrating. I have made more progress going through the exercises in EarMaster (with
the help of [trane-earmaster](https://github.com/trane-project/trane-earmaster)) than I ever did
without Trane. However, I am still working regularly on Trane itself and in creating new material
for it, so my practice time is limited at the moment.

## How do I use Trane?

See the [quick start guide](./quick_start.md) for instructions on how to get started.

## How do I get content for Trane.

For official courses, see the section on [Official Courses](./official_courses.md).

Since Trane courses are just collections of plain-text files, you can also create your own content.
This content can freely reference other courses, even those written by others. For example, you
could add new courses that link to a course in `trane-music`, or add additional exercises to one of
the lessons. See the section on [writing Trane courses](./writing_courses.md) for more information.

You can also experiment with augmenting existing educational materials by translating them into
Trane courses. The `trane-earmaster` course mentioned above is an example of this. It might not be
possible at the moment to embed the material directly within Trane, but you can create flashcards
that direct you to separate material. For example, you could create a flashcard that asks you to
practice a certain section from a PDF music score you own or a flashcard to review a theorem from a
math textbook.

## Are there plans to have a graphic interface?

I recognize the importance of having a graphical interface and the barrier it creates for less
technical users, so it is on my plans to create one eventually. At the moment, I am focusing on the
core library and the command-line interface. There are some problems with creating a graphical
interface:

- I am not very familiar with modern GUI or web development. I can learn it, but it would take time
  away from working on the core library, which I do not have as I work a full-time job.
- At this moment, the Rust ecosystem for GUI development is not very mature. There are some
  promising projects, but they are still in an early stage. I would like to wait until they are
  more mature before committing to a particular one. If I were to use HTML/CSS/JS, I would have to
  figure out a way to integrate it with the Rust data structures, which is a problem of its own.

## Why not Anki or another existing software?

Originally, I tried to use Anki for practicing music but quickly found some limitations. First, Anki
and similar software are optimized for memorization, not for practicing skills. Most importantly,
defining arbitrary dependencies between subsets of flashcards *and* having the algorithm use those
dependencies to select the flashcards to present is not supported.

The solution given by Anki is to create multiple decks. However, asking users to manually decide
which deck to practice and which decks should be practiced once the current one is sufficiently
mastered sort of defeats the purpose of using an automated system in the first place.

I tried looking for other software that would allow me to define arbitrary dependencies between
flashcards. While some allow a limited version of this, none of them worked the way I envisioned and
most were focused on memorization. Out of this frustration, Trane was born.
