xpi:
	/bin/rm -f episopass.xpi
	zip -r ../episopass.xpi *
	mv ../episopass.xpi .
clean:
	/bin/rm -r -f *~
js:
	coffee -c crypt.coffee
	coffee -c app.coffee
	coffee -c episopass.coffee
