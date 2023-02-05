# Generated Courses

Writing Trane courses in the way specified in the [Writing Trane Courses](./writing_courses.md)
section can get tedious quickly, even if you are automating the process. In order to make it easier
to write courses for Trane, Trane can now automatically generate most of the manifest files
specified in the previous section as long as your files fit the structure specified by each type of
generated course.

This has several advantages:

- Reduce the number of manifests needed to write a course. Generated courses still require a
  `course_manifest.json` file. This file specifies the type of generated course as well as any
  available options. However, you do not need to write any manifests for the lessons and exercises
  in the course.
- You can combine normal and generated courses seamlessly. Internally, Trane uses the generator
  config and the files in the course directory to generate all the manifests needed. This means that
  once those manifests are generated, Trane makes no distinction between normal and generated
  courses. Generated courses can include individual lessons that are specified via their manifests.
  Generated courses can depend on any other course or lesson. 
- Less maintenance required for course authors. Trane's data formats and APIs are still subject to
  change. Since generated courses do not require you to write all but the course manifest, most
  changes to those formats should not require any changes on your part.
- Save on disk space. Normal courses can end up with a lot of manifests (one per the course, one per
  lesson, and another one per exercise). Generated courses only require at minimum one manifest per
  course but can contain more if there are lessons that are not generated.
- Generated courses enable custom learning experiences. For example, the improvisation course
  generator can take a folder containing the sheet music of any number of musical passages and
  create a course that guides the student through improvising on those passages. Lessons for every
  key and instrument the student is interested in practicing are automatically generated when
  needed. Lessons for practicing listening and singing the passage, and improvising on their rhythm,
  melody and harmony are also automatically generated.

## How to Write a Generated Course

The process is as follows:

1. Create a directory for your course. And write the `course_manifest.json` file just as you would
   for a normal course. A new field called `course_generator` specifies which course generator to
   use for this course. Its value is `None` for normal courses. For generated courses, it must be
   specified along with any available options.
1. Add files to your course directory. Each type of generated course requires a specific type of
   file structure. Refer to the documentation for each type of generated course for more details.
1. Once that process is complete, open the Trane library to which this course belongs. All the
   required manifests will be generated automatically and added to Trane. After that, you can work
   with them in the same way as you would with any other course.

## Generated Course config

The specification for the `course_generator` field in the `course_manifest.json` file is as follows:

```rust
@@course-generator
```

Refer to the documentation for each type of generated course for the specification for each type of
config.

## Example configs

Refer to the documentation for each type of generated course for examples of the `course_generator`
configuration.
