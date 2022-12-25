# Music Piece Generator

This course generator is used to create courses that progressively teach mastery of a musical piece,
starting at the smallest fragments and gradually building up to the entire piece. The course author
must divide up the piece into fragments and write them down in the configuration of the course. 

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

TODO: This section is under construction.

Below is an example course generator config for this type of course. Only the relevant fragments
from the course manifest are shown.

```json
```

## Example course

TODO: This section is under construction.
