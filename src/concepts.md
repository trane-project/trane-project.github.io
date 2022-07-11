# Concepts

This section defines basic concepts used in Trane, useful both for using it and for creating new
material.

## Mastery Score.

When presented an exercise, a user performs it and assigns it a score signifying their mastery of
the task. The scores range from one to five, with one meaning the skill is just being introduced
(e.g. reading a section of a music score and figuring out the notes and movements required to play
it) and five meaning complete mastery of the material (e.g. effortlessly playing the section and
improvising on it).

## Units

There are three types of units in Trane:

- Exercise: An exercise is just a task that needs to be performed and assigned a score.
- Lesson: A set of related exercises, which ideally follow the same format.
- Course: A set of lessons on a related topic.

A Trane library is a set of courses stored under the same directory. Trane stores its configuration
under a directory called `.trane` in that directory. Users might want to have multiple separate
libraries if they are learning separate skills (e.g. music and chess), and they want to keep their
practice separate.

Units are defined in JSON files called manifests, which are serialized versions of structs defined
in the data module. The ID, name, description, locations of any external files (e.g. the files
storing the front and back of a flashcard), etc., are defined in those files.

## Blacklist

Each Trane library has a blacklist. A unit in a blacklist can be any exercise, lesson, or course. If
a unit is in the blacklist, Trane will not show any exercises from it. If a lesson or course depend
on a blacklisted unit, the scheduling algorithm will act as if the blacklisted unit has been
mastered.

A unit should be added to the blacklist if the user already has mastered the material (e.g. an
accomplished musician will want to skip the course teaching the notes in the major scale) or if they
have no interest in learning the material (e.g. someone interested in learning the guitar might want
 to skip units which are focused on another instrument).

## Filters

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
