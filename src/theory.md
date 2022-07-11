# Theory

## Spaced Repetition

Spaced repetition is a long-established way to efficiently memorize new information and to transfer
that information to long-term memory. Trane applies spaced repetition to exercises that require
memorization (e.g. recalling the notes in the chord A7) and to those which require mastery of an
action (e.g. playing a section of a song). 

The space repetition algorithm in Trane is fairly simple and relies on computing a score for a given
exercise based on previous trials rather than computing the optimal time at which the exercise needs
to be presented again. This will most likely result in exercises being presented more often than
they would in other spaced repetition software. Trane is not focused on memorization but on the
repetition of individual skills until they are mastered, so I do not believe this to be a problem.

## Mastery Learning

Mastery learning states that students must achieve a level of mastery in a skill before moving on to
learning the skills which depend on the current skill.

Trane applies mastery learning by preventing the user from moving on to the dependents of a unit
until the material in the unit is sufficiently mastered. It also excludes units whose dependencies
have not been fully met. Otherwise, a user might be presented with material that lies too outside
their current abilities and become frustrated. If a user's performance on a previously mastered unit
degrades, Trane will make the user practice the material until it is mastered again.


## Chunking

Chunking consists of breaking up a complex skill into smaller components that can be practiced
independently.

Trane applies chunking by allowing users to define lessons and courses with arbitrary dependency
relationships. For example, learning to improvise over chord progressions might be broken into units
to learn the notes in each chord, learn the fingerings of each chord, or improvise over single
chords. The user can then define a unit that exercises the union of all the previous skills and
claim the other lessons as a dependency.