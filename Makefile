.PROTO: build
build: src
	if [ -e ./docs ] ; then rm -r ./docs ; fi
	jsdoc -r src -d ./docs -R README.md -t ./dev/jsdoc/template

%/:
	mkdir -p "$@"
