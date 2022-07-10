# Vision

Trane aims to offer a coherent and powerful user experience that is capable of taking students of
any level and allowing them to make the most out of their practice sessions, as well as offering
features to allow teachers to track and guide the progress of their students. Trane will attempt to
fulfil those goals by making progress along main four axes. Those are described below using
musical training as an example, but any skill for which the proper exercises and the dependencies
among them can be derived should be an apt candidate for Trane.

## Defining arbitrary skill graphs

Complex skills are in fact a complex network of simpler skills and domain knowledge that have been
acquired after many years of practice. Experts on a field might not be consciously aware of the full
network, either because some of it is the result of unconscious processes or because it was learned
in early childhood or in an unstructured manner. Trane's first goal is to allow this graph to be
defined and reused for the purpose of teaching other people.

To succeed at this task, Trane must be able to handle a large set of exercises as well as their
dependencies in a way that allows users to define arbitrary relationships between them, to
seamlessly combine exercises from multiple sources, and to provide primitives to select particular
sections of the graph to focus on or to ignore during practice sessions.

As an example, the skill of playing a large musical piece depends on the skills of playing each
movement, which in turn depend on skills to play each passage. By defining the practice of the piece
on this manner, the student is first asked to master individual passages, then individual movements,
and eventually the entire piece.

## Automated and guided progress

Having defined an extensive skill graph, students should be able to take advantage of it without
lots of effort or planning. In its default mode, Trane provides exercises to the user that gradually
introduce students to new skills and reinforce the ones already in the process of being mastered.
Trane also takes care of keeping the difficulty of the exercise balanced so only a small percentage
of very hard and very easy questions are shown. In doing so, Trane ensures that the student is
slightly challenged without falling into any extreme of frustration or boredom.

Trane's main mechanism for guiding progress is to allow students to rate the mastery of each trial
of an exercise. Trane uses the past scores to decide which exercises to show, when to stop
traversing the dependency graph, how often to show an exercise, and how to balance the difficulty of
each batch of exercises.

In combination with its abilities to handle large graphs of dependency relationships, Trane also
allows students to focus on specific courses, lessons, or on material that matches specific
metadata, while still keeping the guarantees mentioned above. For example, a student could choose to
focus on exercises made for the guitar while Trane still makes sure that harder guitar exercises are
not shown to the student until easier guitar exercises are sufficiently mastered.

## Plain text configuration files for easy sharing and collaboration

The task of defining the dependency graphs for a skill is impossible for a beginner to undertake
because they lack the experience needed to understand the full picture. It is also difficult for
teachers because the task is big, and they might lack the technical knowledge to do it. However, one
of Trane's assumptions is that the majority of learners will follow the same path to mastering a
skill, so the task of defining the graph needs to be undertaken once.

To make collaboration and sharing easier, Trane provides a simple text file format for defining the
exercises, lessons, and courses and their relationships. This allows these files to be automatically
generated and managed in version control software. Trane also provides utilities that make it easier
to generate these files and to verify the generated output.

By allowing the generation of these files, one could define a course that asks a student to perform
some exercises in each key without the burden of manually defining the files for each key. And by
allowing these files to version controlled, it is our hope that students can easily get started by
taking advantage of official courses and those created by the community.

## Integration with teachers materials and feedback

*Note: Most of the ideas in this section are not yet implemented.*

Another of Trane's goals is to integrate teachers into the process. The first way Trane achieves
this is by letting them integrate their own materials with existing materials. For example, a
teacher could add additional exercises to a lesson, or add new courses that depend on existing ones.

Another way is to let teachers provide feedback on the progress of students. While these ideas are
not yet implemented, the goal is to allow teachers to rate the mastery of their students in a given
exercise and have Trane adjust how it schedules the exercises accordingly. Students should also be
able to make a note of which exercises they need to review with their teachers during their next
session.

Using the earlier example of performing a large musical piece, a teacher could ask the student to
perform some exercises in front of them and give them a score, which might be different from the
student's self-assessment. Teacher and student could also go through the list of exercises the
student flagged for review as the teacher provides notes on the finer points of performing the
piece.
