System.register(["engine.io-parser@5.0.6","@socket.io/component-emitter@3.1.0","engine.io-client@6.4.0","socket.io-parser@4.2.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.4.0"],["socket.io-client","4.6.1"],["socket.io-parser","4.2.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.0.6', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep), dep => dependencies.set('engine.io-client@6.4.0', dep), dep => dependencies.set('socket.io-parser@4.2.2', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/socket.io-client.4.6.1.js
var socket_io_client_4_6_1_exports = {};
__export(socket_io_client_4_6_1_exports, {
  Manager: () => Manager,
  Socket: () => Socket,
  connect: () => lookup,
  default: () => socket_io_client_4_6_1_default,
  io: () => lookup,
  protocol: () => import_socket4.protocol
});
module.exports = __toCommonJS(socket_io_client_4_6_1_exports);

// node_modules/socket.io-client/build/esm/url.js
var import_engine = require("engine.io-client@6.4.0");
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = (0, import_engine.parse)(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-client/build/esm/on.js
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// node_modules/socket.io-client/build/esm/socket.js
var import_socket = require("socket.io-parser@4.2.2");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
var Socket = class extends import_component_emitter.Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect) this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const io = this.io;
    this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    if (this.connected) return this;
    this.subEvents();
    if (!this.io["_reconnecting"]) this.io.open();
    if ("open" === this.io._readyState) this.onopen();
    return this;
  }
  open() {
    return this.connect();
  }
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: import_socket.PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket) {} else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  _registerAckCallback(id, ack) {
    var _a;
    const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  emitWithAck(ev, ...args) {
    const withErr = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((resolve, reject) => {
      args.push((arg1, arg2) => {
        if (withErr) {
          return arg1 ? reject(arg1) : resolve(arg2);
        } else {
          return resolve(arg1);
        }
      });
      this.emit(ev, ...args);
    });
  }
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({
        fromQueue: true
      }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return;
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  onopen() {
    if (typeof this.auth == "function") {
      this.auth(data => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  _sendConnectPacket(data) {
    this.packet({
      type: import_socket.PacketType.CONNECT,
      data: this._pid ? Object.assign({
        pid: this._pid,
        offset: this._lastOffset
      }, data) : data
    });
  }
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace) return;
    switch (packet.type) {
      case import_socket.PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case import_socket.PacketType.EVENT:
      case import_socket.PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case import_socket.PacketType.ACK:
      case import_socket.PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case import_socket.PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case import_socket.PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  ack(id) {
    const self = this;
    let sent = false;
    return function (...args) {
      if (sent) return;
      sent = true;
      self.packet({
        type: import_socket.PacketType.ACK,
        id,
        data: args
      });
    };
  }
  onack(packet) {
    const ack = this.acks[packet.id];
    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {}
  }
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  emitBuffered() {
    this.receiveBuffer.forEach(args => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(packet => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  destroy() {
    if (this.subs) {
      this.subs.forEach(subDestroy => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  disconnect() {
    if (this.connected) {
      this.packet({
        type: import_socket.PacketType.DISCONNECT
      });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  close() {
    return this.disconnect();
  }
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// node_modules/socket.io-client/build/esm/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function () {
  this.attempts = 0;
};
Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
Backoff.prototype.setMax = function (max) {
  this.max = max;
};
Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

// node_modules/socket.io-client/build/esm/manager.js
var import_engine2 = require("engine.io-client@6.4.0");
var parser = __toESM(require("socket.io-parser@4.2.2"), 0);
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
var Manager = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    (0, import_engine2.installTimerFunctions)(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || parser;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect) this.open();
  }
  reconnection(v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0) return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  }
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  open(fn) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new import_engine2.Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function () {
      self.onopen();
      fn && fn();
    });
    const errorSub = on(socket, "error", err => {
      self.cleanup();
      self._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        self.maybeReconnectOnOpen();
      }
    });
    if (false !== this._timeout) {
      const timeout = this._timeout;
      if (timeout === 0) {
        openSubDestroy();
      }
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket.close();
        socket.emit("error", new Error("timeout"));
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  connect(fn) {
    return this.open(fn);
  }
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  ondecoded(packet) {
    (0, import_engine2.nextTick)(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  onerror(err) {
    this.emitReserved("error", err);
  }
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  cleanup() {
    this.subs.forEach(subDestroy => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine) this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const self = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect) return;
        this.emitReserved("reconnect_attempt", self.backoff.attempts);
        if (self.skipReconnect) return;
        self.open(err => {
          if (err) {
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// node_modules/socket.io-client/build/esm/index.js
var import_socket4 = require("socket.io-parser@4.2.2");
var cache = {};
function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup, {
  Manager,
  Socket,
  io: lookup,
  connect: lookup
});

// .beyond/uimport/temp/socket.io-client.4.6.1.js
var socket_io_client_4_6_1_default = lookup;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3NvY2tldC5pby1jbGllbnQuNC42LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vdXJsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL29uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL3NvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2JhY2tvMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiTWFuYWdlciIsIlNvY2tldCIsImNvbm5lY3QiLCJkZWZhdWx0IiwiaW8iLCJwcm90b2NvbCIsIm1vZHVsZSIsInJlcXVpcmUiLCJ1cmwiLCJ1cmkiLCJwYXRoIiwibG9jIiwib2JqIiwibG9jYXRpb24iLCJob3N0IiwiY2hhckF0IiwidGVzdCIsImltcG9ydF9lbmdpbmUiLCJwb3J0IiwiaXB2NiIsImluZGV4T2YiLCJpZCIsImhyZWYiLCJvbiIsImV2IiwiZm4iLCJzdWJEZXN0cm95Iiwib2ZmIiwiUkVTRVJWRURfRVZFTlRTIiwiT2JqZWN0IiwiZnJlZXplIiwiY29ubmVjdF9lcnJvciIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0aW5nIiwibmV3TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlciIsImNvbnN0cnVjdG9yIiwibnNwIiwib3B0cyIsImNvbm5lY3RlZCIsInJlY292ZXJlZCIsInJlY2VpdmVCdWZmZXIiLCJzZW5kQnVmZmVyIiwiX3F1ZXVlIiwiX3F1ZXVlU2VxIiwiaWRzIiwiYWNrcyIsImZsYWdzIiwiYXV0aCIsIl9vcHRzIiwiYXNzaWduIiwiX2F1dG9Db25uZWN0Iiwib3BlbiIsImRpc2Nvbm5lY3RlZCIsInN1YkV2ZW50cyIsInN1YnMiLCJvbm9wZW4iLCJiaW5kIiwib25wYWNrZXQiLCJvbmVycm9yIiwib25jbG9zZSIsImFjdGl2ZSIsIl9yZWFkeVN0YXRlIiwic2VuZCIsImFyZ3MiLCJ1bnNoaWZ0IiwiZW1pdCIsImFwcGx5IiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciIsInRvU3RyaW5nIiwicmV0cmllcyIsImZyb21RdWV1ZSIsInZvbGF0aWxlIiwiX2FkZFRvUXVldWUiLCJwYWNrZXQiLCJ0eXBlIiwiaW1wb3J0X3NvY2tldCIsIkVWRU5UIiwiZGF0YSIsIm9wdGlvbnMiLCJjb21wcmVzcyIsImxlbmd0aCIsImFjayIsInBvcCIsIl9yZWdpc3RlckFja0NhbGxiYWNrIiwiaXNUcmFuc3BvcnRXcml0YWJsZSIsImVuZ2luZSIsInRyYW5zcG9ydCIsIndyaXRhYmxlIiwiZGlzY2FyZFBhY2tldCIsIm5vdGlmeU91dGdvaW5nTGlzdGVuZXJzIiwicHVzaCIsIl9hIiwidGltZW91dCIsImFja1RpbWVvdXQiLCJ0aW1lciIsInNldFRpbWVvdXRGbiIsImkiLCJzcGxpY2UiLCJjYWxsIiwiY2xlYXJUaW1lb3V0Rm4iLCJlbWl0V2l0aEFjayIsIndpdGhFcnIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFyZzEiLCJhcmcyIiwidHJ5Q291bnQiLCJwZW5kaW5nIiwiZXJyIiwicmVzcG9uc2VBcmdzIiwiaGFzRXJyb3IiLCJzaGlmdCIsIl9kcmFpblF1ZXVlIiwiZm9yY2UiLCJfcGFja2V0IiwiX3NlbmRDb25uZWN0UGFja2V0IiwiQ09OTkVDVCIsIl9waWQiLCJwaWQiLCJvZmZzZXQiLCJfbGFzdE9mZnNldCIsImVtaXRSZXNlcnZlZCIsInJlYXNvbiIsImRlc2NyaXB0aW9uIiwic2FtZU5hbWVzcGFjZSIsInNpZCIsIm9uY29ubmVjdCIsIkJJTkFSWV9FVkVOVCIsIm9uZXZlbnQiLCJBQ0siLCJCSU5BUllfQUNLIiwib25hY2siLCJESVNDT05ORUNUIiwib25kaXNjb25uZWN0IiwiQ09OTkVDVF9FUlJPUiIsImRlc3Ryb3kiLCJtZXNzYWdlIiwiZW1pdEV2ZW50IiwiX2FueUxpc3RlbmVycyIsImxpc3RlbmVycyIsInNsaWNlIiwibGlzdGVuZXIiLCJzZWxmIiwic2VudCIsImVtaXRCdWZmZXJlZCIsImZvckVhY2giLCJjbG9zZSIsIm9uQW55IiwicHJlcGVuZEFueSIsIm9mZkFueSIsImxpc3RlbmVyc0FueSIsIm9uQW55T3V0Z29pbmciLCJfYW55T3V0Z29pbmdMaXN0ZW5lcnMiLCJwcmVwZW5kQW55T3V0Z29pbmciLCJvZmZBbnlPdXRnb2luZyIsImxpc3RlbmVyc0FueU91dGdvaW5nIiwiQmFja29mZiIsIm1zIiwibWluIiwibWF4IiwiZmFjdG9yIiwiaml0dGVyIiwiYXR0ZW1wdHMiLCJwcm90b3R5cGUiLCJkdXJhdGlvbiIsIk1hdGgiLCJwb3ciLCJyYW5kIiwicmFuZG9tIiwiZGV2aWF0aW9uIiwiZmxvb3IiLCJyZXNldCIsInNldE1pbiIsInNldE1heCIsInNldEppdHRlciIsIl9fdG9FU00iLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIyIiwibnNwcyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwicmFuZG9taXphdGlvbkZhY3RvciIsImJhY2tvZmYiLCJfcGFyc2VyIiwicGFyc2VyIiwiZW5jb2RlciIsIkVuY29kZXIiLCJkZWNvZGVyIiwiRGVjb2RlciIsImF1dG9Db25uZWN0IiwidiIsImFyZ3VtZW50cyIsIl9yZWNvbm5lY3Rpb24iLCJfcmVjb25uZWN0aW9uQXR0ZW1wdHMiLCJfcmVjb25uZWN0aW9uRGVsYXkiLCJfcmFuZG9taXphdGlvbkZhY3RvciIsIl9yZWNvbm5lY3Rpb25EZWxheU1heCIsIl90aW1lb3V0IiwibWF5YmVSZWNvbm5lY3RPbk9wZW4iLCJfcmVjb25uZWN0aW5nIiwicmVjb25uZWN0IiwiaW1wb3J0X2VuZ2luZTIiLCJzb2NrZXQiLCJza2lwUmVjb25uZWN0Iiwib3BlblN1YkRlc3Ryb3kiLCJlcnJvclN1YiIsImNsZWFudXAiLCJhdXRvVW5yZWYiLCJ1bnJlZiIsImNsZWFyVGltZW91dCIsIm9ucGluZyIsIm9uZGF0YSIsIm9uZGVjb2RlZCIsImFkZCIsImUiLCJfZGVzdHJveSIsImtleXMiLCJfY2xvc2UiLCJlbmNvZGVkUGFja2V0cyIsImVuY29kZSIsIndyaXRlIiwiZGVsYXkiLCJvbnJlY29ubmVjdCIsImF0dGVtcHQiLCJjYWNoZSIsImxvb2t1cCIsInBhcnNlZCIsInNvdXJjZSIsIm5ld0Nvbm5lY3Rpb24iLCJmb3JjZU5ldyIsIm11bHRpcGxleCIsInF1ZXJ5IiwicXVlcnlLZXkiLCJzb2NrZXRfaW9fY2xpZW50XzRfNl8xX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FBLG9CQUFzQkM7QUFVZixTQUFTQyxJQUFJQyxLQUFLQyxPQUFPLElBQUlDLEtBQUs7RUFDckMsSUFBSUMsTUFBTUg7RUFFVkUsTUFBTUEsT0FBUSxPQUFPRSxhQUFhLGVBQWVBO0VBQ2pELElBQUksUUFBUUosS0FDUkEsTUFBTUUsSUFBSU4sV0FBVyxPQUFPTSxJQUFJRztFQUVwQyxJQUFJLE9BQU9MLFFBQVEsVUFBVTtJQUN6QixJQUFJLFFBQVFBLElBQUlNLE9BQU8sQ0FBQyxHQUFHO01BQ3ZCLElBQUksUUFBUU4sSUFBSU0sT0FBTyxDQUFDLEdBQUc7UUFDdkJOLE1BQU1FLElBQUlOLFdBQVdJO01BQ3pCLE9BQ0s7UUFDREEsTUFBTUUsSUFBSUcsT0FBT0w7TUFDckI7SUFDSjtJQUNBLElBQUksQ0FBQyxzQkFBc0JPLEtB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