js:
	coffee -c crypt.coffee
	coffee -c app.coffee
	coffee -c episopass.coffee

XPIFILES=manifest.json app.js crypt.js episopass.js exports.js jquery-2.1.4.min.js md5.js episopass.png icons
xpi: js
	/bin/rm -f episopass.xpi
	zip -r episopass.xpi ${XPIFILES}

# Firefox拡張機能を署名する
# バージョンを上げる必要あり
sign: xpi
	web-ext sign --api-key $(MOZILLA_USER) --api-secret $(MOZILLA_SECRET)

clean:
	/bin/rm -r -f *~
