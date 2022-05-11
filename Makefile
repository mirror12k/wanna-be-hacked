

docker-build:
	-mkdir bin
	echo "$(CURDIR)"
	docker build -t c2-haxe . && docker run -p 8000:8000 -v $(CURDIR)/bin:/app/bin -it c2-haxe make build

docker-client:
	docker build -t c2-haxe . && docker run --network="host" -it c2-haxe make run-client
docker-controller:
	docker build -t c2-haxe . && docker run --network="host" -it c2-haxe make run-controller

build:
	haxe -js bin/C2Server.js -lib hxnodejs -lib tink_http -main C2Server
	haxe --main C2Client --java bin/C2Client
	haxe --main C2Client --cpp bin/C2Client.linux.x86_64
	haxe --main C2Client --python bin/C2Client.py

run-controller:
	haxe --main C2Controller --interp
run-server:
	node bin/C2Server.js
run-client:
# 	./bin/C2Client.linux.x86_64/C2Client
# 	java -jar bin/C2Client/C2Client.jar
	python3 bin/C2Client.py



