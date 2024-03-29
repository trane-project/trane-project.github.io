# Concepts and Theory

## Concepts

This section defines basic concepts used in Trane, useful both for using it and for creating new
material.

### Skills

In Trane, a skill refers to a specific ability to perform a task that can be improved through the
practice of exercises. The result of said practice should result in the reduction or elimination of
the cognitive load needed to perform the task and the error rate. This definition covers a wide
range of tasks, including memorization. For example, learning the multiplication tables is a skill
when considering the need to retrieve an answer quickly and without error when performing mental
calculations. Skills can often be divided into smaller tasks that can be practiced separately. For
example, learning a new piece of music can be broken down into learning individual sections of the
piece. 

### Mastery Score

When presented an exercise, a user performs it and assigns it a score signifying their mastery of
the task. The scores range from one to five, with one meaning the skill is just being introduced
(e.g., reading a section of a music score and figuring out the notes and movements required to play
it) and five meaning complete mastery of the material (e.g., effortlessly playing the section and
improvising on it).


### Dependency Graph

Just as skills can be broken down into multiple smaller skills, they can also be built up in order
to perform more complicated tasks. This process requires that the dependency relationships between
skills are described. For two given skills S1 and S2, S1 is a dependency of S2 if S2 cannot be
learned properly until S1 is sufficiently mastered. For the reverse relationship, S2 is called a
dependent skill of S1.

The set of all these relationships between skills forms a directed acyclic graph and is called the
dependency graph. Trane uses this graph to make sense of a student's progress and determine which
skills should be introduced next and which previously practiced skills should be reviewed. 

### Units

There are three types of units in Trane:

- Exercise: An exercise is just a task which needs to be performed and assigned a score. Exercises
  do not define any dependencies.
- Lesson: A set of related exercises, which ideally follow the same format and are related to the
  same skill. Lessons can depend on other lessons and courses.
- Course: A set of lessons on a related topic which test and build up related skills. Courses can
  depend on other courses and lessons.

Units are defined in plain text files that are read by Trane during startup. The format of these
files is described in the section on [Writing Trane Courses](./writing_courses.md).

## Library

A Trane library is a set of courses stored under the same directory. Courses can be stored under any
directory structure, but the content of each course follows a predetermined structure (See the
section on [Writing Trane Courses](./writing_courses.md)). Trane stores its configuration
under a directory called `.trane` in that directory. Users might want to have multiple separate
libraries if they are learning separate skills (e.g., music and chess), and they want to keep their
practice separate.

### Blacklist

Each Trane library has a blacklist. A unit in a blacklist can be any exercise, lesson, or course. If
a unit is in the blacklist, Trane will not show any exercises from it. If a lesson or course depend
on a blacklisted unit, the scheduling algorithm will act as if the blacklisted unit has been
mastered.

A unit should be added to the blacklist if the user already has mastered the material (e.g., an
accomplished guitarist will want to skip the course teaching how to tune the guitar). It can also be
added if the user has no interest in learning the material (e.g., someone interested in learning the
 guitar might want to skip units which are focused on another instrument).

### Filters

In its normal mode of operation, Trane looks for exercises in the entire library. There are times
when users might want to focus on a smaller section. Filters provide users with the ability to
select specific exercises. There are three types of filters.

- Lesson filter: Only present exercises from the given lesson. For example, users might want to only
  practice exercises from a lesson covering a section of a song.
- Course filter: Only present exercises from the given course. The dependency relationships among
  the lessons in the course are respected. For example, users might want to only practice exercises
  from a course covering an entire song.
- Metadata filter: Courses and lessons can have key-value pairs as metadata. A metadata filter acts
  on this metadata to present exercises exclusively from units which match the filter, while also
  preserving the dependency relationships between those lessons. Lessons which do not pass the
  filter are considered as mastered so that the scheduler can continue the search. For example, a
  user might want to only practice exercises from lessons and courses for the guitar and in a
  specific key.
- Dependent filter: Given a set of courses or lessons, Trane will search for exercises in those and
  all the units that are dependent on them. For example, a user might want to practice exercises
  from all the lessons with intermediate or higher difficulty while skipping easier lessons.
- Dependency filter: Given a set of courses or lessons and a depth, Trane will search for all the
  units that are dependent on the given units up to the given depth, and start the exercise search
  from there. For example, a student that encounters some difficulties in a course, might want to
  practice exercises from the course and all the units that immediately precede it to refresh their
  memory.

### Review List

The review list stores units which the student feels should be given special attention. Trane
includes a special filtering mode which only presents exercises from the review list. If a course or
lesson is added to the review list, all of its exercises can appear in this mode.

## Theory

This section describes the ideas behind Trane and its design.

### Mastery Learning

Mastery learning states that students must achieve a level of mastery in a skill before moving on to
learning the skills which depend on the current skill. Conversely, students must sufficiently master
all the dependencies of a skill before they can learn it.

Trane applies mastery learning by preventing the user from moving on to the dependents of a unit
until the material in the unit is sufficiently mastered. It also excludes units whose dependencies
have not been fully met. Otherwise, a user might be presented with material that lies outside their
current abilities and become frustrated. If a user's performance on a previously mastered unit
degrades, Trane will ensure that the unit is mastered again before showing any of its dependents.

### Spaced Repetition

Spaced repetition is a long-established way to efficiently memorize new information and to transfer
that information to long-term memory. When a concept or skill is first introduced, it is presented
more frequently. Progressively, as the student gains mastery of it, the frequency is reduced,
although mastered exercises are still shown from time to time for review and maintenance.

Trane applies spaced repetition to exercises that require memorization (e.g., recalling the notes in
the chord A7) and to those which require mastery of an action (e.g., playing a section of a song).
The space repetition algorithm in Trane is fairly simple and relies on computing a score for a given
exercise based on previous trials rather than computing the optimal time at which the exercise needs
to be presented again. 

### Chunking

Chunking consists of breaking up a complex skill into smaller components that can be practiced
independently, before the individual components are combined in more complex skills.

Trane applies chunking by allowing users to define lessons and courses with arbitrary dependency
relationships. For example, learning to improvise over chord progressions might be broken into units
to learn the notes in each chord, learn the fingerings of each chord, or improvise over single
chords. The user can then define a unit that exercises the union of all the previous skills and
claim the other lessons as a dependency.

### Interleaving

Interleaving is the practice of mixing up the order in which skills are presented, instead of
showing consecutive exercises that test the same or similar skills. This strategy has been shown to
lead to improved retention and recall of the material.

Trane applies interleaving as follows. In the first phase of computing a batch of exercises to
study, Trane randomly selects branches of the dependency graph when searching for exercises that the
student is allowed to practice. In the second phase, which consists of reducing the exercises found
in the first phase into the final batch, Trane randomly selects which exercises to include in the
batch. The probability of an exercise being included in the batch is weighted based on a number of
factors, such as the exercise's score, the depth of the exercise within the dependency graph, and
the number of times it has been shown in the same session.

### Mixed Difficulties

Similar to interleaving, mixed difficulties consists of mixing exercises of different difficulty
when presenting them to the student. This strategy is meant to avoid showing too many easy
exercises, which would bore the student and slow progress on more relevant exercises, or too many
hard exercises, which would frustrate the student and lead to a loss of motivation.

Trane applies mixed difficulties by selecting exercises from a range of difficulties. In the second
phase outlined in the previous section, Trane groups exercises into buckets based on some ranges
difficulties, and selects a fixed percentage from each bucket. A small percentage of the exercises
will be selected from the easiest and hardest buckets, while the majority will be from one of the
buckets in the middle.
