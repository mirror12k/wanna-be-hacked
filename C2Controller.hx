import sys.io.Process;

class C2Controller {
    static public function main() {
        var proc = new Process('make server');

        Sys.println("Starting server");
        var line = "";
        while (line != "quit" && line != "q") {
            Sys.print(" > ");
            line = Sys.stdin().readLine();
            if (line == "help") {
                Sys.println("help:");
                Sys.println("\t stuff - do stuff");
                Sys.println("\t help - do help");
                Sys.println("\t quit - leave");
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
