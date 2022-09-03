# FAQ

## What is the current state of the project?

Trane is in an early state and subject to change. However, I do not expect a lot of changes to
happen in the core scheduling logic. The only state stored by Trane depends on the ID of a unit, so
as long as that is not changed, updating the files is the only thing needed to make Trane pick up
updated versions.

## How well does Trane work?

The honest answer is that I am not sure. One of the goals of releasing Trane to the public is to get
feedback and user reports in the hope that I can fine-tune it. I suspect Trane will work fairly well
in learning skills that require the repetition of complex chains of patterns until mastery of each
and the whole is achieved. Playing music mostly follows this pattern, but I would like to figure out
how it can be applied to other skills. 

## How do I use Trane?

At the moment, there is only a command line interface for using Trane. The code and releases are in
the [trane-cli](https://github.com/trane-project/trane-cli) repository.

## How do I get content for Trane.

The repository [trane-music](https://github.com/trane-project/trane-music) contains the first
courses available that you can use to experiment with Trane. More are coming, and I am open to
contributions. I am also looking into creating courses for other skills to figure out how to apply
Trane to skills other than music. Some candidates at the moment are chess, programming, and
languages.

Since Trane courses are just collections of plain-text files, you can also create your own content.
This content can freely reference other courses, even those written by others. For example, you
could add new courses that link to a course in `trane-music`, or add additional exercises to one of
the lessons.

You can also experiment with augmenting existing educational materials by translating them into
Trane exercises, lessons, and courses. For example, if you are learning the flute and have a book of
études you would like to master, you could break each into a course, each large section of the piece
into a lesson, and each small subsection into an exercise. This process does not require you to port
any of the actual material into Trane. Creating flashcards that say "Play étude 4, measures 12
through 16" is enough. Used in this manner, Trane can integrate materials from multiple sources into
one centralized practice system.

## Are there plans to have a graphic interface?

Eventually. I am not too familiar with front-end or GUI development, so it could take a while.
However, the command-line version should be enough to get going for now. The main thing to be gained
from a graphic interface is to allow external resources (e.g., images or a score from soundslice.com)
to be embedded into the application.

## Why not Anki or another existing software?

Originally, I tried to use Anki for practicing music but quickly found some limitations. First, Anki
and similar software are optimized for memorization, not for practicing the same skill until it is
mastered. Most importantly, defining arbitrary dependencies between subsets of flashcards *and*
having the algorithm use those dependencies to select the flashcards to present is not supported.

The solution given by Anki is to create multiple decks. However, asking users to manually decide
which deck to practice and which decks should be practiced once the current one is sufficiently
mastered sort of defeats the purpose of using an automated system in the first place.
