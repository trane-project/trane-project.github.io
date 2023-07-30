# User Preferences

The user preferences can be set to customize the behavior of Trane.

## Specification

The specification for the user preferences:

```rust
@@user-preferences
```

The user preferences can be set in the `user_preferences.json` file inside the `.trane` directory in
a Trane library. The value is a serialized JSON object that matches the Rust type shown above. If
none is found, Trane will create it with the default values.

Currently, the only user preferences that are supported are the ones for the transcription course.
Refer to the [Transcription Course](./generated_courses/transcription.md) page for more information
on the user preferences for that course.
