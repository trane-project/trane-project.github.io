# Transcription Course Generator

The transcription course generator is used to create courses that help you learn how to transcribe
passages of music onto your ear and your instrument(s). This page explains how they are configured
and set up. For more information on the methodology and instructions, see the [course
instructions](./transcription/course_instructions.md) page.

## Specification

The specification for the course configuration for transcription courses:

```rust
@@transcription-config
```

The specification for how the passages are declared:

```rust
@@transcription-passages
```

The specification for how the transcription assets (the description of the song to transcribe) are
declared:

```rust
@@transcription-asset
```

The specification for how the external links are declared:

```rust
@@transcription-link
```

The transcription courses allow you to specify which instruments you want to use for the courses in
the user preferences. Refer to the [User Preferences](../user_preferences.md) page for more details.

The specification for the user preferences for the transcription course is as follows:

```rust
@@transcription-preferences
```

These preferences require that you declare the instruments that you want to use for the
transcription. The specification for them is:

```rust
@@instrument
```

## Example courses

Here are a few examples of existing transcription courses:

- [IFR Jam Tracks Level 1 - Key of
  C](https://github.com/trane-project/trane-music/blob/master/courses/improvise_for_real/jam_tracks_1/c/course_manifest.json)
- [IFR Jam Trakcs Level 2 - Key of
  D](https://github.com/trane-project/trane-music/blob/master/courses/improvise_for_real/jam_tracks_2/d/course_manifest.json)
- [Jazz Standards Vol
  1](https://github.com/trane-project/trane-music/blob/master/courses/transcription/jazz/standards_1/course_manifest.json)