# Using Trane

Trane is split in multiple components for the sake of modularity. They are described below.

- [trane](https://github.com/trane-project/trane): The core library responsible for opening and
  interacting with Trane courses. It also includes the data formats for Trane and the utilities to
  build new courses.
- [trane-cli](https://github.com/trane-project/trane-cli): A command-line interface for Trane.
- `trane-app`: An upcoming graphical interface for Trane.
- `trane-server`: An upcoming HTTP REST server for Trane to allow software not written in Rust and
  software incompatible with the GPLv3 license to use Trane.
