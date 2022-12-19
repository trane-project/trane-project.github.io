# Makefile to integrate verso|recto with mdbook

# The source of the Trane code
trane_src = "../trane/src"
# The source of the mdbook
mdbook_src = "src"
# The destination to which the files written by verson|recto will be written.
verso_build = "verso_build"
# The path to the assets directory, which needs to be copied separately as
# verso|recto only support UTF-8 text files.
assets = "src/assets"

verso-build:
	# Clean the verso_build directory.
	rm -rf $(verso_build)

	# Create the verso_build directory.
	mkdir $(verso_build)

	# List all the Rust files in the Trane source directory, pass the list to
	# verso. Then, pipe the output to a command that gets all the list of
	# markdown files in the mdbook source and passes that list to recto.
	find $(trane_src) -wholename "*.rs" -exec verso {} + | \
		find $(mdbook_src) -wholename "*.md" -exec recto $(verso_build) {} +

	# Copy the assets directory to the verso_build directory.
	cp -r $(assets) $(verso_build)/src