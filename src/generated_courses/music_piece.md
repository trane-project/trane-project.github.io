# Music Piece Generator

This course generator is used to create courses that progressively teach mastery of a musical piece,
starting at the smallest fragments and gradually building up to the entire piece. The course author
must divide up the piece into fragments and write them down in the configuration of the course. 

## Specification

The specification for the music asset containing the music sheet of the piece:
```rust
@@music-asset
```

The specification for how musical passages are declared and divided up:
```rust
@@music-passage
```

The specification for the course configuration for music piece courses:
```rust
@@music-piece-config
```

The top musical passage should always ask the student to play the entire piece. Each of the
dependencies asks the student to play a smaller fragment of the piece. There can be an arbitrary
number of nested passages, which allow pieces to be divided into arbitrarily small fragments. To
allow more flexibility, the start and end values of each passage are specified as a string.

The musical asset specifies where the music sheet for the piece is located. It can be specified as a
link to a SoundSlice or as the path to a local file.

## Example configuration

Below is an example course generator config for this type of course.
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
    "MusicPiece": {
      "music_asset": {
        "LocalFile": "music_sheet.pdf"
      },
      "passages": {
        "start": "start of the piece",
        "end": "end of the piece",
        "sub_passages": [
          {
            "start": "start of bar 1",
            "end": "end of bar 10",
            "sub_passages": []
          },
          {
            "start": "start of bar 10",
            "end": "end of bar 20",
            "sub_passages": []
          }
        ]
      }
    }
  }
}
```

## Example course

TODO: This section is under construction.
