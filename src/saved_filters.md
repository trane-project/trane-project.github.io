# Saved Filters

A filter restricts the set of exercises that are shown to the user (see the
[Concepts](./concepts.md) page for more information on the types of filters).

The user can save a filter for later use by writing it down in a JSON file inside the
`.trane/filters` directory in the library.

The specification for a saved filter is as follows:

```rust
@@saved-filter
```

Below there are some examples of saved filters.

A filter to show only exercises for ear training.
```json
{
    "id": "ear_training",
    "description": "Ear traning courses",
    "filter": {
        "MetadataFilter": {
            "filter": {
                "course_filter": {
                    "CombinedFilter": {
                        "op": "Any",
                        "filters": [
                            {
                                "BasicFilter": {
                                    "key": "course_series",
                                    "value": "sing_the_numbers",
                                    "filter_type": "Include"
                                }
                            },
                            {
                                "BasicFilter": {
                                    "key": "course_series",
                                    "value": "progressive_sight_singing",
                                    "filter_type": "Include"
                                }
                            }
                        ]
                    }
                },
                "op": "All"
            }
        }
    }
}
```

A filter to only show exercises for the guitar.
```json
{
    "id": "guitar",
    "description": "All guitar courses",
    "filter": {
        "MetadataFilter": {
            "filter": {
                "course_filter": {
                    "BasicFilter": {
                        "key": "instrument",
                        "value": "guitar",
                        "filter_type": "Include"
                    }
                },
                "lesson_filter": null,
                "op": "Any"
            }
        }
    }
}

```