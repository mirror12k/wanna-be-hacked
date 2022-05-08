

docker:
	docker build -t c2-haxe . && docker run -p 8000:8000 -it c2-haxe make build run

build:
	haxe -js C2Server.js -lib hxnodejs -lib tink_http -main C2Server
# 	haxe -js C2Controller.js -lib hxnodejs -lib tink_http -main C2Controller
run:
	haxe --main C2Controller --interp
# 	node C2Controller.js
server:
	node C2Server.js