FROM haxe:latest

RUN haxelib install tink_http \
	&& haxelib install hxnodejs \
	&& apt update \
	&& apt install -y nodejs make

WORKDIR /app
copy . /app

CMD [ 'sh' ]

