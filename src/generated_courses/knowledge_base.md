# Knowledge Base Course Generator

This course generator is the most generic of them and can be adopted to create courses for any
subject or topic. The idea is to reduce the need to write manifests for the lessons and exercises by
giving special meaning to the names of their files and directories. The documentation of the code
contains the specification of the file structure that is used to generate the manifests, so it's
reproduced below. Note that `Vec` is a list of values, `Ustr` is a unique string type that is
treated just like a string, a `BTreeMap` is used to store the metadata as keys and their associated
list of values, and `Option` is used to represent files that are not required.

Here's the specification for an exercise:
```rust
@@knowledge-base-exercise
```

And here's the specification for a lesson:
```rust
@@knowledge-base-lesson
```

If we translate this specification into an example course with two lessons of two exercises each,
the file structure is as follows:

```text
course_root/
├── course_manifest.json
├── lesson_1.lesson/
|   ├── lesson.name.json
|   ├── lesson.description.json
|   ├── lesson.dependencies.json
|   ├── lesson.metadata.json
|   ├── lesson.instructions.md
|   ├── lesson.material.md
│   ├── exercise_1.front.md
│   ├── exercise_1.back.md
│   ├── exercise_1.name.json
│   ├── exercise_1.description.json
│   ├── exercise_1.type.json
│   ├── exercise_2.front.md
│   └── exercise_2.back.md
│   ├── exercise_2.name.json
│   ├── exercise_2.description.json
│   ├── exercise_2.type.json
└── lesson_2.lesson/
    ├── exercise_3.front.md
    ├── exercise_3.back.md
    ├── exercise_4.front.md
```

The first lesson includes all the files that can be written to specify the properties of a lesson,
the front, and back of exercises, and the properties of each exercise. The second lesson contains
the minimum number of files required to specify the lesson and exercises. Not even the dependencies
of a lesson are required. If they are missing, the lesson will be assumed to have no dependencies.
The rest of the properties are given a sensible default. Also note that an exercise is not required
to have a back file, such as `exercise_4` in the example above. This can happen, for example, if the
exercise is open-ended or refers to an external resource.

Most of the time, a course author will only need to specify the front and back of the exercises and
the dependencies for each lesson. The flashcards already needed to be written anyway, and the
dependencies are much easier to write than the entire manifest. Following this strategy, most of the
extra effort to writing the course materials themselves that was previously required to complete the
course is eliminated.

## Example Configuration

Example of a course manifest for a knowledge base course:
```json
{
  "id": "trane::example::knowledge_base",
  "name": "Example Knowledge Base Course",
  "dependencies": [],
  "description": "An example knowledge base course.",
  "authors": [
    "The Trane Project"
  ],
  "metadata": null,
  "course_material": null,
  "course_instructions": null,
  "generator_config": {
    "KnowledgeBase": {}
  }
}
```

## Example Courses

Below there are a few examples of official Trane courses that are using this course generator to
give you a better idea of how it is used:

- [Long tones for the tenor
  saxophone](https://github.com/trane-project/trane-saxophone/tree/master/courses/tenor_saxophone/long_tones):
  A course to teach you how to produce long tones on the tenor saxophone, starting at the first
  octave and gradually working your way up.
- [Art of Problem Solving
  1](https://github.com/trane-project/trane-math/tree/master/courses/olympiads/aops/aops_1): The
  "Art of Problem Solving" book series is intended to begin preparing students for competing in math
  Olympiads. This course translates the first volume of that series into a Trane course.
