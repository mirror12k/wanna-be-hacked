import tink.http.containers.*;
import tink.http.Response;
import tink.Url;
using tink.CoreApi;

class C2Server {
    static function main() {
        var container = new NodeContainer(8000);
        container.run(function(req) {
            var url:Url = req.header.url;
            Sys.println("req: " + url.path);
            if (req.header.url.path == "/qwerty") {
                return Future.sync(('qwerty!':OutgoingResponse));
            } else {
                return Future.sync(('Hello, World!':OutgoingResponse));
            }
        });
    }
}




