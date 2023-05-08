System.register(["engine.io-parser@5.0.6","@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.4.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.0.6', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/engine.io-client.6.4.0.js
var engine_io_client_6_4_0_exports = {};
__export(engine_io_client_6_4_0_exports, {
  Socket: () => Socket,
  Transport: () => Transport,
  installTimerFunctions: () => installTimerFunctions,
  nextTick: () => nextTick,
  parse: () => parse,
  protocol: () => protocol2,
  transports: () => transports
});
module.exports = __toCommonJS(engine_io_client_6_4_0_exports);

// node_modules/engine.io-client/build/esm/globalThis.browser.js
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

// node_modules/engine.io-client/build/esm/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0,
    length2 = 0;
  for (let i2 = 0, l = str.length; i2 < l; i2++) {
    c = str.charCodeAt(i2);
    if (c < 128) {
      length2 += 1;
    } else if (c < 2048) {
      length2 += 2;
    } else if (c < 55296 || c >= 57344) {
      length2 += 3;
    } else {
      i2++;
      length2 += 4;
    }
  }
  return length2;
}

// node_modules/engine.io-client/build/esm/transport.js
var import_engine = require("engine.io-parser@5.0.6");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends import_component_emitter.Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
  }
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {}
  }
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  onData(data) {
    const packet = (0, import_engine.decodePacket)(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  pause(onPause) {}
};

// node_modules/engine.io-client/build/esm/contrib/yeast.js
var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
  length = 64,
  map = {};
var seed = 0,
  i = 0,
  prev;
function encode(num) {
  let encoded = "";
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
function decode(str) {
  let decoded = 0;
  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }
  return decoded;
}
function yeast() {
  const now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + "." + encode(seed++);
}
for (; i < length; i++) map[alphabet[i]] = i;

// node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode2(obj) {
  let str = "";
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length) str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode2(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i2 = 0, l = pairs.length; i2 < l; i2++) {
    let pair = pairs[i2].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {}
var hasCORS = value;

// node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js
function XHR(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}

// node_modules/engine.io-client/build/esm/transports/polling.js
var import_engine2 = require("engine.io-parser@5.0.6");
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
function empty() {}
var hasXHR2 = function () {
  const xhr = new XHR({
    xdomain: false
  });
  return null != xhr.responseType;
}();
var Polling = class extends Transport {
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function () {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function () {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  onData(data) {
    const callback = packet => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({
          description: "transport closed by the server"
        });
        return false;
      }
      this.onPacket(packet);
    };
    (0, import_engine2.decodePayload)(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this.polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this.poll();
      } else {}
    }
  }
  doClose() {
    const close = () => {
      this.write([{
        type: "close"
      }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  write(packets) {
    this.writable = false;
    (0, import_engine2.encodePayload)(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = "";
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    const encodedQuery = encode2(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  request(opts = {}) {
    Object.assign(opts, {
      xd: this.xd,
      xs: this.xs
    }, this.opts);
    return new Request(this.uri(), opts);
  }
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = false !== opts.async;
    this.data = void 0 !== opts.data ? opts.data : null;
    this.create();
  }
  create() {
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;
    const xhr = this.xhr = new XHR(opts);
    try {
      xhr.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i2 in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i2)) {
              xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e) {}
      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {}
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    this.xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  abort() {
    this.cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i2 in Request.requests) {
    if (Request.requests.hasOwnProperty(i2)) {
      Request.requests[i2].abort();
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var usingBrowserWebSocket = true;
var defaultBinaryType = "arraybuffer";

// node_modules/engine.io-client/build/esm/transports/websocket.js
var import_engine3 = require("engine.io-parser@5.0.6");
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var WS = class extends Transport {
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
    this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = closeEvent => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = ev => this.onData(ev.data);
    this.ws.onerror = e => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      (0, import_engine3.encodePacket)(packet, this.supportsBinary, data => {
        const opts = {};
        if (!usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }
          if (this.opts.perMessageDeflate) {
            const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {}
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = "";
    if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    const encodedQuery = encode2(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  check() {
    return !!WebSocket;
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  polling: Polling
};

// node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function parse(str) {
  const src = str,
    b = str.indexOf("["),
    e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""),
    uri = {},
    i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m[i2] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g,
    names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// node_modules/engine.io-client/build/esm/socket.js
var import_component_emitter3 = require("@socket.io/component-emitter@3.1.0");
var import_engine4 = require("engine.io-parser@5.0.6");
var Socket = class extends import_component_emitter3.Emitter {
  constructor(uri, opts = {}) {
    super();
    this.writeBuffer = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parse(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket"];
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode2(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = import_engine4.protocol;
    query.transport = name;
    if (this.id) query.sid = this.id;
    const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new transports[name](opts);
  }
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", reason => this.onClose("transport close", reason));
  }
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed) return;
      transport.send([{
        type: "ping",
        data: "probe"
      }]);
      transport.once("packet", msg => {
        if (failed) return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed) return;
            if ("closed" === this.readyState) return;
            cleanup();
            this.setTransport(transport);
            transport.send([{
              type: "upgrade"
            }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed) return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = err => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    transport.open();
  }
  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
    if ("open" === this.readyState && this.opts.upgrade) {
      let i2 = 0;
      const l = this.upgrades.length;
      for (; i2 < l; i2++) {
        this.probe(this.upgrades[i2]);
      }
    }
  }
  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {}
  }
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState) return;
    this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data = this.writeBuffer[i2].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i2 > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i2);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i2 = 0;
    const j = upgrades.length;
    for (; i2 < j; i2++) {
      if (~this.transports.indexOf(upgrades[i2])) filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
};
Socket.protocol = import_engine4.protocol;

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VuZ2luZS5pby1jbGllbnQuNi40LjAuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vZ2xvYmFsVGhpcy5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3V0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIveWVhc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9wYXJzZXFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvaGFzLWNvcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy94bWxodHRwcmVxdWVzdC5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC1jb25zdHJ1Y3Rvci5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9wYXJzZXVyaS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9zb2NrZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJTb2NrZXQiLCJUcmFuc3BvcnQiLCJpbnN0YWxsVGltZXJGdW5jdGlvbnMiLCJuZXh0VGljayIsInBhcnNlIiwicHJvdG9jb2wiLCJ0cmFuc3BvcnRzIiwibW9kdWxlIiwiZ2xvYmFsVGhpc1NoaW0iLCJzZWxmIiwid2luZG93IiwiRnVuY3Rpb24iLCJwaWNrIiwib2JqIiwiYXR0ciIsInJlZHVjZSIsImFjYyIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsIk5BVElWRV9TRVRfVElNRU9VVCIsInNldFRpbWVvdXQiLCJOQVRJVkVfQ0xFQVJfVElNRU9VVCIsImNsZWFyVGltZW91dCIsIm9wdHMiLCJ1c2VOYXRpdmVUaW1lcnMiLCJzZXRUaW1lb3V0Rm4iLCJiaW5kIiwiY2xlYXJUaW1lb3V0Rm4iLCJCQVNFNjRfT1ZFUkhFQUQiLCJieXRlTGVuZ3RoIiwidXRmOExlbmd0aCIsIk1hdGgiLCJjZWlsIiwic2l6ZSIsInN0ciIsImMiLCJsZW5ndGgiLCJpIiwibCIsImNoYXJDb2RlQXQiLCJyZXF1aXJlIiwiVHJhbnNwb3J0RXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwicmVhc29uIiwiZGVzY3JpcHRpb24iLCJjb250ZXh0IiwidHlwZSIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlciIsIndyaXRhYmxlIiwicXVlcnkiLCJzb2NrZXQiLCJvbkVycm9yIiwiZW1pdFJlc2VydmVkIiwib3BlbiIsInJlYWR5U3RhdGUiLCJkb09wZW4iLCJjbG9zZSIsImRvQ2xvc2UiLCJvbkNsb3NlIiwic2VuZCIsInBhY2tldHMiLCJ3cml0ZSIsIm9uT3BlbiIsIm9uRGF0YSIsImRhdGEiLCJwYWNrZXQiLCJpbXBvcnRfZW5naW5lIiwiYmluYXJ5VHlwZSIsIm9uUGFja2V0IiwiZGV0YWlscyIsInBhdXNlIiwib25QYXVzZSIsImFscGhhYmV0Iiwic3BsaXQiLCJtYXAiLCJzZWVkIiwicHJldiIsImVuY29kZSIsIm51bSIsImVuY29kZWQiLCJmbG9vciIsImRlY29kZSIsImRlY29kZWQiLCJjaGFyQXQiLCJ5ZWFzdCIsIm5vdyIsIkRhdGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJxcyIsInFyeSIsInBhaXJzIiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsInZhbHVlIiwiWE1MSHR0cFJlcXVlc3QiLCJlcnIiLCJoYXNDT1JTIiwiWEhSIiwieGRvbWFpbiIsImUiLCJjb25jYXQiLCJqb2luIiwiZW1wdHkiLCJoYXNYSFIyIiwieGhyIiwicmVzcG9uc2VUeXBlIiwiUG9sbGluZyIsInBvbGxpbmciLCJsb2NhdGlvbiIsImlzU1NMIiwicG9ydCIsInhkIiwiaG9zdG5hbWUiLCJ4cyIsInNlY3VyZSIsImZvcmNlQmFzZTY0Iiwic3VwcG9ydHNCaW5hcnkiLCJuYW1lIiwicG9sbCIsInRvdGFsIiwib25jZSIsImRvUG9sbCIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImRvV3JpdGUiLCJ1cmkiLCJzY2hlbWEiLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsInRpbWVzdGFtcFBhcmFtIiwic2lkIiwiYjY0IiwiTnVtYmVyIiwiZW5jb2RlZFF1ZXJ5IiwiaXB2NiIsImluZGV4T2YiLCJwYXRoIiwicmVxdWVzdCIsIk9iamVjdCIsImFzc2lnbiIsIlJlcXVlc3QiLCJmbiIsInJlcSIsIm1ldGhvZCIsIm9uIiwieGhyU3RhdHVzIiwicG9sbFhociIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjIiLCJhc3luYyIsImNyZWF0ZSIsInhzY2hlbWUiLCJleHRyYUhlYWRlcnMiLCJzZXREaXNhYmxlSGVhZGVyQ2hlY2siLCJzZXRSZXF1ZXN0SGVhZGVyIiwid2l0aENyZWRlbnRpYWxzIiwicmVxdWVzdFRpbWVvdXQiLCJ0aW1lb3V0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwic3RhdHVzIiwib25Mb2FkIiwiZG9jdW1lbnQiLCJpbmRleCIsInJlcXVlc3RzQ291bnQiLCJyZXF1ZXN0cyIsImNsZWFudXAiLCJmcm9tRXJyb3IiLCJhYm9ydCIsInJlc3BvbnNlVGV4dCIsImF0dGFjaEV2ZW50IiwidW5sb2FkSGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXJtaW5hdGlvbkV2ZW50IiwiaXNQcm9taXNlQXZhaWxhYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYiIsInRoZW4iLCJXZWJTb2NrZXQiLCJNb3pXZWJTb2NrZXQiLCJ1c2luZ0Jyb3dzZXJXZWJTb2NrZXQiLCJkZWZhdWx0QmluYXJ5VHlwZSIsImlzUmVhY3ROYXRpdmUiLCJuYXZpZ2F0b3IiLCJwcm9kdWN0IiwidG9Mb3dlckNhc2UiLCJXUyIsImNoZWNrIiwicHJvdG9jb2xzIiwiaGVhZGVycyIsIndzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbm9wZW4iLCJhdXRvVW5yZWYiLCJfc29ja2V0IiwidW5yZWYiLCJvbmNsb3NlIiwiY2xvc2VFdmVudCIsIm9ubWVzc2FnZSIsImV2Iiwib25lcnJvciIsImxhc3RQYWNrZXQiLCJvcHRpb25zIiwiY29tcHJlc3MiLCJwZXJNZXNzYWdlRGVmbGF0ZSIsImxlbiIsIkJ1ZmZlciIsInRocmVzaG9sZCIsIndlYnNvY2tldCIsInJlIiwicGFydHMiLCJzcmMiLCJiIiwic3Vic3RyaW5nIiwicmVwbGFjZSIsIm0iLCJleGVjIiwic291cmNlIiwiaG9zdCIsImF1dGhvcml0eSIsImlwdjZ1cmkiLCJwYXRoTmFtZXMiLCJxdWVyeUtleSIsInJlZ3giLCJuYW1lcyIsInNsaWNlIiwic3BsaWNlIiwiJDAiLCIkMSIsIiQyIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMyIsIndyaXRlQnVmZmVyIiwicHJldkJ1ZmZlckxlbiIsImFnZW50IiwidXBncmFkZSIsInJlbWVtYmVyVXBncmFkZSIsImFkZFRyYWlsaW5nU2xhc2giLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJ0cmFuc3BvcnRPcHRpb25zIiwiY2xvc2VPbkJlZm9yZXVubG9hZCIsImlkIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdUaW1lb3V0VGltZXIiLCJiZWZvcmV1bmxvYWRFdmVudExpc3RlbmVyIiwidHJhbnNwb3J0IiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwib2ZmbGluZUV2ZW50TGlzdGVuZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJFSU8iLCJpbXBvcnRfZW5naW5lNCIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsInNoaWZ0Iiwic2V0VHJhbnNwb3J0Iiwib25EcmFpbiIsInByb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwibXNnIiwidXBncmFkaW5nIiwiZmx1c2giLCJmcmVlemVUcmFuc3BvcnQiLCJlcnJvciIsIm9uVHJhbnNwb3J0Q2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsInJlbW92ZUxpc3RlbmVyIiwib2ZmIiwib25IYW5kc2hha2UiLCJKU09OIiwicmVzZXRQaW5nVGltZW91dCIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJtYXhQYXlsb2FkIiwiZ2V0V3JpdGFibGVQYWNrZXRzIiwic2hvdWxkQ2hlY2tQYXlsb2FkU2l6ZSIsInBheWxvYWRTaXplIiwicHVzaCIsImNsZWFudXBBbmRDbG9zZSIsIndhaXRGb3JVcGdyYWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlcmVkVXBncmFkZXMiLCJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7QUNBTyxJQUFNQyxrQkFBa0IsTUFBTTtFQUNqQyxJQUFJLE9BQU9DLFNBQVMsYUFBYTtJQUM3QixPQUFPQTtFQUNYLFdBQ1MsT0FBT0MsV0FBVyxhQUFhO0lBQ3BDLE9BQU9BO0VBQ1gsT0FDSztJQUNELE9BQU9DLFNBQVMsYUFBYSxHQUFFO0VBQ25DO0FBQ0osSUFBRzs7O0FD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TTtJQUNWO0lBQ0EsTUFBTStOLGlCQUFpQixNQUFNO01BRXpCLEtBQUsvSixLQUFLLFdBQVc4SixlQUFlO01BQ3BDLEtBQUs5SixLQUFLLGdCQUFnQjhKLGVBQWU7SUFDN0M7SUFDQSxJQUFJLGNBQWMsS0FBS2hPLGNBQWMsV0FBVyxLQUFLQSxZQUFZO01BQzdELEtBQUtBLGFBQWE7TUFDbEIsSUFBSSxLQUFLK0ssWUFBWWxNLFFBQVE7UUFDekIsS0FBS3FGLEtBQUssU0FBUyxNQUFNO1VBQ3JCLElBQUksS0FBSzBJLFdBQVc7WUFDaEJxQixnQkFBZTtVQUNuQixPQUNLO1lBQ0QvTixPQUFNO1VBQ1Y7UUFDSixDQUFDO01BQ0wsV0FDUyxLQUFLME0sV0FBVztRQUNyQnFCLGdCQUFlO01BQ25CLE9BQ0s7UUFDRC9OLE9BQU07TUFDVjtJQUNKO0lBQ0EsT0FBTztFQUNYO0VBTUFMLFFBQVE0QyxLQUFLO0lBQ1RoRyxPQUFPMlAsd0JBQXdCO0lBQy9CLEtBQUt0TSxhQUFhLFNBQVMyQyxHQUFHO0lBQzlCLEtBQUtyQyxRQUFRLG1CQUFtQnFDLEdBQUc7RUFDdkM7RUFNQXJDLFFBQVFmLFFBQVFDLGFBQWE7SUFDekIsSUFBSSxjQUFjLEtBQUtVLGNBQ25CLFdBQVcsS0FBS0EsY0FDaEIsY0FBYyxLQUFLQSxZQUFZO01BRS9CLEtBQUs1QixlQUFlLEtBQUt3TixnQkFBZ0I7TUFFekMsS0FBS0UsVUFBVUMsbUJBQW1CLE9BQU87TUFFekMsS0FBS0QsVUFBVTVMLE9BQU07TUFFckIsS0FBSzRMLFVBQVVDLG9CQUFtQjtNQUNsQyxJQUFJLE9BQU9tQyx3QkFBd0IsWUFBWTtRQUMzQ0Esb0JBQW9CLGdCQUFnQixLQUFLckMsMkJBQTJCLEtBQUs7UUFDekVxQyxvQkFBb0IsV0FBVyxLQUFLbEMsc0JBQXNCLEtBQUs7TUFDbkU7TUFFQSxLQUFLaE0sYUFBYTtNQUVsQixLQUFLd0wsS0FBSztNQUVWLEtBQUsxTCxhQUFhLFNBQVNULFFBQVFDLFdBQVc7TUFHOUMsS0FBS3lMLGNBQWMsRUFBQztNQUNwQixLQUFLQyxnQkFBZ0I7SUFDekI7RUFDSjtFQU9BMEMsZUFBZWpDLFVBQVU7SUFDckIsTUFBTTBDLG1CQUFtQixFQUFDO0lBQzFCLElBQUlyUCxLQUFJO0lBQ1IsTUFBTXNQLElBQUkzQyxTQUFTNU07SUFDbkIsT0FBT0MsS0FBSXNQLEdBQUd0UCxNQUFLO01BQ2YsSUFBSSxDQUFDLEtBQUsvQixXQUFXaUksUUFBUXlHLFNBQVMzTSxHQUFFLEdBQ3BDcVAsaUJBQWlCSixLQUFLdEMsU0FBUzNNLEdBQUU7SUFDekM7SUFDQSxPQUFPcVA7RUFDWDtBQUNKO0FBQ0ExUixPQUFPSyxXQUFXcVA7OztBQzlqQlgsSUFBTXJQLFlBQVdMLE9BQU9LIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvZGVtby9vdXQifQ==