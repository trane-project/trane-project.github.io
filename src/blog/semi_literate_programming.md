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
    /// Returns an initial stack with all the starting units in the graph that
    /// are used to search the entire graph.
    fn get_initial_stack(
        &self,
        metadata_filter: Option<&MetadataFilter>
    ) -> Vec<StackItem> {
        // First get all the starting units and then all of their starting lessons.
        let starting_units = self.get_all_starting_units();
        let mut initial_stack: Vec<StackItem> = vec![];
        for course_id in starting_units {
            let lesson_ids = self
                .get_course_valid_starting_lessons(&course_id, metadata_filter)
                .unwrap_or_default();

            if lesson_ids.is_empty() {
                // For units with no lessons, insert the unit itself as a starting
                // unit so that its dependents are traversed.
                initial_stack.push(StackItem {
                    unit_id: course_id,
                    num_hops: 0,
                });
            } else {
                // Insert all the starting lessons in the stack.
                initial_stack
                    .extend(lesson_ids.into_iter().map(|unit_id| StackItem {
                        unit_id,
                        num_hops: 0,
                    }));
            }
        }

        // Shuffle the lessons to follow a different ordering each time a new
        // batch is requested.
        initial_stack.shuffle(&mut thread_rng());
        initial_stack
    }
  ```

- Each file (or module, package, etc. depending on the language) should have a top-level comment
  that explains the purpose of the file and how it fits into the larger system. This comment should
  not explain the code in any or too much detail but present the reader with an account of the main
  design decisions that lead to structuring the code in this way. Below is an example from Trane's
  `scheduler::cache` module.

  ```rust
    //! Defines a cache that is used to retrieve unit scores and stores
    //! previously computed exercise and lesson scores
    //!
    //! During performance testing, it was found that caching exercise
    //! and lesson scores significantly improved the performance of
    //! exercise scheduling. Caching course scores had a negligible impact,
    //! so they are not cached, although they are still computed through
    //! this cache for consistency.
  ```
- The main file (or module, package, etc.) should explain what the whole library or program does and
  also contain a short explanation of the structure of the code to allow readers to better navigate
  the codebase. Below is the relevant section from Trane's `lib.rs` file:

  ``` rust
    //! Here's an overview of some of the most important modules in this
    //! crate and their purpose:
    //! - [data](crate::data): Contains the basic data structures used by Trane.
    //! - [graph](crate::graph): Defines the graph used by Trane to list
    //!   the units of material and the dependencies among them.
    //! - [course_library](crate::course_library): Reads a collection of
    //!   courses, lessons, and exercises from the file system and provides
    //!   basic utilities for working with them.
    //! - [scheduler](crate::scheduler): Defines the algorithm used by Trane
    //!   to select exercises to present to the user.
    //! - [practice_stats](crate::practice_stats): Stores the results of practice
    //!   sessions for use in determining the next batch of exercises.
    //! - [blacklist](crate::blacklist): Defines the list of units the student
    //!   wishes to hide, either because their material has already been mastered
    //!   or they do not wish to learn it.
    //! - [scorer](crate::scorer): Calculates a score for an exercise based on the
    //!   results and timestamps of previous trials.
  ```

- Document what each struct, enum, field, function, etc. does, even if it seems obvious to you. It's
  hard to gauge what will be obvious to the readers of your code, which include future you. If the
  purpose is obvious, no more than a short sentence is needed. If there's a detail which is not
  obvious, document why that is so. Below there are examples of both situations taken from Trane's
  `data` module.

  ```rust
    /// The result of a single trial.
    #[derive(Clone, Copy, Debug, PartialEq)]
    pub struct ExerciseTrial {
        /// The score assigned to the exercise after the trial.
        pub score: f32,

        /// The timestamp at which the trial happened.
        pub timestamp: i64,
    }
  ```

  ```rust
    /// A manifest describing the contents of a course.
    #[derive(Builder, Clone, Debug, Deserialize, Serialize)]
    #[serde(deny_unknown_fields)]
    pub struct CourseManifest {
        [...]

        //// A mapping of String keys to a list of String values.
        /// For example, ("genre", ["jazz"]) could be attached to a
        /// course named "Basic Jazz Chords on Guitar".
        ///
        /// The purpose of this metadata is to allow students to focus
        /// on more specific material during a study session which does
        /// not belong to a single lesson or course. For example, a student
        /// might want to only focus on guitar scales or ear training.
        #[builder(default)]
        pub metadata: Option<BTreeMap<String, Vec<String>>>,

        [...]
    }
  ```

- Document situations in which the design was changed and the reasons why. This is part of using the
  documentation of your code to tell the story behind the design decisions. Below is an example from
  Trane's `practice_stats` module.
  
  ```rust
    /// Returns all the migrations needed to set up the database.
    fn migrations() -> Migrations<'static> {
        Migrations::new(vec![
            // Create a table with a mapping of unit IDs to a unique
            // integer ID. The purpose of this table is to save space
            // when storing the exercise trials by not having to store
            // the entire ID of the unit.
            M::up("CREATE TABLE uids(unit_uid INTEGER PRIMARY KEY,
                unit_id TEXT NOT NULL UNIQUE);")
                .down("DROP TABLE uids;"),
            // Create a table storing all the exercise trials.
            M::up(
                "CREATE TABLE practice_stats(
                id INTEGER PRIMARY KEY,
                unit_uid INTEGER NOT NULL REFERENCES uids(unit_uid),
                score REAL, timestamp INTEGER);",
            )
            .down("DROP TABLE practice_stats"),
            // Create an index of `unit_ids`.
            M::up("CREATE INDEX unit_ids ON uids (unit_id);")
            .down("DROP INDEX unit_ids"),
            // Originally the trials were indexed solely by `unit_uid`.
            // This index was replaced so this migration is immediately
            // canceled by the one right below. Remove both of them
            // altogether in a later version.
            M::up("CREATE INDEX unit_scores ON practice_stats (unit_uid);")
                .down("DROP INDEX unit_scores"),
            M::up("DROP INDEX unit_scores")
                .down("CREATE INDEX unit_scores ON practice_stats (unit_uid);"),
            // Create a combined index of `unit_uid` and `timestamp`
            // for fast trial retrieval.
            M::up("CREATE INDEX trials ON practice_stats (unit_uid, timestamp);")
                .down("DROP INDEX trials"),
        ])
    }
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