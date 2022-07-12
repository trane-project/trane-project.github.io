# Writing Trane Courses

Trane courses have the following directory structure:
```
course_root/
    course_manifest.json
    <LESSON_DIR>/
        lesson_manifest.json
        <EXERCISE_DIR>/
            exercise_manifest.json
```

There can be multiple lessons in a course and multiple exercises in a lesson. In addition, there can
be asset files (e.g. markdown files) anywhere in the course directory, but it's best to put each of
them in the same directory as the manifest that refers to it.

So writing a course for Trane consists of generating the manifest files in this directory structure
and placing any assets in the right paths. While this process is easy for small courses, it can
quickly get out of hands if you are generating courses with a lot of exercises or if you are
planning on creating a lot of courses.

For this reason, Trane provides utilities to help you write courses inside the `course_builder`
module in Trane. These utilities help you define the courses, lessons, and exercises as Rust code
and contain methods to generate all the files (including assets) while also performing several
sanity checks. While the decision of generating courses by writing Rust source files might seem
strange at first, it's actually a lot easier and less annoying than writing a course by hand.
Another advantage is that any breaking change to the manifest data structures in Trane will result
in a compile error, so you can be confident that your courses will work with a specific version of
Trane as long as the code compiles.

These utilities can be augmented to help you write more easily specific types of courses. For
example, inside the `course_builder` module, there is a `CirclesFifthCourse` struct that can be used
to generate courses that require a lesson for each key and which follow the order of the circles of
fifths, starting with the key of C and going clockwise and counterclockwise into each of the other
keys.

You can look at any of the [official Trane courses](./official_courses.md) for example of how
courses are written.
