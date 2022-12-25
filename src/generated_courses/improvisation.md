# Improvisation Course Generator

This course generator can be used to practice improvisation based on a set of provided musical
passage. The course has several stages which progressively introduced all the elements of the
musical passages and ask the student to improvise and play with them, both with their voice and
their preferred instruments. More information on each stage and the rest of the instructions can be
found in the [Course Instructions](./improvisation/instructions.md) page.

The specification for a musical passage. The passages are picked up automatically if they are in the
specified directory as shown further below.
```rust
@@improvisation-passage
```

The specification for the course configuration for improvisation courses:
```rust
@@improvisation-config
```

`Vec<Ustr>` is an array of strings and is written as a normal list in the `course_manifest.json`
file. The rhythm-only option is used for courses that contain passages that only have a rhythm. For
example, a course that teaches drum licks would use this option.

## User Preferences

This course also allows the user to set their preferences. Specifically, the user can set the
instruments that they want to practice, as well as additional instruments to be practiced
exclusively in the rhythm lessons (drums, for example).

The specification for an instrument:
```rust
@@improvisation-instrument
```

The specification for the user preferences for the improvisation courses:
```rust
@@improvisation-preferences
```

See the [User Preferences](../user_preferences.md) page for more information on how to set the user
preferences in Trane.

## Example Configuration

TODO: This section is under construction.

Example of a course generator configuration:
```json
```

Example of a user preferences file:
```json
```

## Example Course

The repository (TODO) contains all the official improvisation courses. Contributions for this
repository are welcome. See the [Contributing](../contributing.md) section for more information.
