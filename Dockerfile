FROM haxe:latest

RUN haxelib install tink_http \
	&& haxelib install hxnodejs \
	&& haxelib install hxjava \
	&& haxelib install hxcpp \
	&& apt update \
	&& apt install -y nodejs make gcc g++ default-jdk

WORKDIR /app
copy . /app

CMD [ 'sh' ]

