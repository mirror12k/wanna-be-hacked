

docker:
	docker build -t c2-haxe . && docker run -p 8000:8000 -it c2-haxe make build run

docker-client:
	docker build -t c2-haxe . && docker run --network="host" -it c2-haxe make build run-client

build:
# 	haxe -js C2Server.js -lib hxnodejs -lib tink_http -main C2Server
	haxe  -main C2Client -js C2Client.js -lib hxnodejs
	haxe --main C2Client --java C2Client
run:
	haxe --main C2Controller --interp
run-client:
	node C2Client.js
# 	java -jar C2Client/C2Client.jar .

server:
	node C2Server.js


