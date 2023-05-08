System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/backend","0.1.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep)],
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

// .beyond/uimport/@beyond-js/backend/client.0.1.5.js
var client_0_1_5_exports = {};
__export(client_0_1_5_exports, {
  ActionsBridge: () => ActionsBridge,
  Backend: () => Backend,
  __beyond_pkg: () => __beyond_pkg,
  backends: () => backends,
  hmr: () => hmr
});
module.exports = __toCommonJS(client_0_1_5_exports);

// node_modules/@beyond-js/backend/client/client.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/backend@0.1.5/client"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./action/bridge", {
  hash: 2081575659,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ActionsBridge = void 0;
    var _ = require2("./");
    class ActionsBridge2 {
      #distribution;
      #bundle;
      #backend;
      constructor(distribution, bundle) {
        this.#distribution = distribution;
        this.#bundle = bundle.specifier;
        this.#backend = `${bundle.module.pkg}/${this.#distribution}`;
      }
      async execute(action, ...params) {
        const a = new _.default(this.#backend, this.#bundle, action, ...params);
        return await a.execute();
      }
    }
    exports.ActionsBridge = ActionsBridge2;
  }
});
ims.set("./action/execution-error", {
  hash: 3368390780,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ExecutionError = void 0;
    const ExecutionError = class {
      #message;
      get message() {
        return this.#message;
      }
      #stack;
      get stack() {
        return this.#stack;
      }
      constructor(message, stack) {
        this.#message = message;
        this.#stack = stack;
      }
    };
    exports.ExecutionError = ExecutionError;
  }
});
ims.set("./action/index", {
  hash: 2047620412,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _backends = require2("../backends");
    var _executionError = require2("./execution-error");
    let autoincrement = 0;
    class _default extends _core.Events {
      #pkg;
      #request;
      #module;
      get module() {
        return this.#module;
      }
      #action;
      get action() {
        return this.#action;
      }
      #params;
      get params() {
        return this.#params;
      }
      constructor(backend, module2, action, ...params) {
        super();
        const id = this.#id;
        const pkg = this.#pkg = (() => {
          const split = backend.split("/");
          split.pop();
          return split.join("/");
        })();
        this.#module = module2;
        this.#action = action;
        this.#params = params;
        this.#request = {
          id,
          pkg,
          module: module2,
          action,
          params
        };
      }
      #id = ++autoincrement;
      get id() {
        return this.#id;
      }
      #channel = `response-v2-${this.#id}`;
      get channel() {
        return this.#channel;
      }
      #executed = false;
      get executed() {
        return this.#executed;
      }
      #executing = false;
      get executing() {
        return this.#executing;
      }
      #error = false;
      get error() {
        return this.#error;
      }
      #timer;
      #attempts = 0;
      #promise = new _core.PendingPromise();
      #send = socket => {
        this.#attempts && this.trigger("retrying", this.#attempts);
        this.#attempts++;
        try {
          socket.emit("rpc-v2", this.#request);
        } catch (exc) {
          this.#executing = false;
          this.#executed = true;
          this.#error = true;
          this.#promise.reject(exc);
        }
      };
      async execute() {
        if (this.#executing || this.#executed) return this.#promise;
        this.#executing = true;
        const backend = await _backends.backends.get(this.#pkg);
        if (!backend) throw new Error(`Project "${this.#pkg}" does not have a backend configured`);
        try {
          const socket = await backend.socket;
          if (!socket) {
            const message = `Error getting socket on "${backend.pkg}" backend. `;
            this.#promise.reject(new Error(message));
            return;
          }
          const onresponse = response => {
            this.#executed = true;
            this.#executing = false;
            clearTimeout(this.#timer);
            socket.off(this.#channel, onresponse);
            const {
              error,
              message,
              source,
              processingTime
            } = response;
            error ? this.#promise.reject(new _executionError.ExecutionError(error.message, error.stack)) : this.#promise.resolve(message);
          };
          socket.on(this.#channel, onresponse);
          this.#send(socket);
        } catch (exc) {
          this.#promise.reject(exc);
          return;
        }
        return this.#promise;
      }
    }
    exports.default = _default;
  }
});
ims.set("./backend", {
  hash: 486330626,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Backend = void 0;
    var _io = require2("./io");
    var _socket = require2("./socket");
    class Backend2 {
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      #host;
      get host() {
        return this.#host;
      }
      #local;
      get local() {
        return this.#local;
      }
      #socket;
      #io = new _io.ServiceIOConfiguration();
      get io() {
        return this.#io;
      }
      constructor(pkg, host, local) {
        this.#pkg = pkg;
        this.#host = host;
        this.#local = local;
        this.#socket = new _socket.default(this);
      }
      get socket() {
        return this.#socket.get();
      }
    }
    exports.Backend = Backend2;
  }
});
ims.set("./backends", {
  hash: 1705909413,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.backends = void 0;
    var _backend = require2("./backend");
    const backends2 = new class {
      #hosts = /* @__PURE__ */new Map();
      register(pkg, host) {
        !this.#hosts.has(pkg) && this.#hosts.set(pkg, new _backend.Backend(pkg, host));
      }
      async get(pkg) {
        if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
        try {
          const {
            backend: config
          } = (await bimport(`${pkg}/config`)).default;
          if (!config) {
            console.log(`Backend configuration not set on package "${pkg}"`);
            this.#hosts.set(pkg, void 0);
            return;
          }
          const {
            host,
            local
          } = config;
          if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
          const backend = new _backend.Backend(pkg, host, local);
          this.#hosts.set(pkg, backend);
          return this.#hosts.get(pkg);
        } catch (exc) {
          console.log(`Error importing package "${pkg}" configuration: ${exc.message}`);
          this.#hosts.set(pkg, void 0);
        }
      }
      async execute(pkg, distribution, module2, action, ...params) {
        const a = new (require2("./action").default)(`${pkg}/${distribution}`, module2, action, ...params);
        return await a.execute();
      }
    }();
    exports.backends = backends2;
  }
});
ims.set("./io", {
  hash: 2941830475,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ServiceIOConfiguration = void 0;
    class ServiceIOConfiguration {
      querystring;
    }
    exports.ServiceIOConfiguration = ServiceIOConfiguration;
  }
});
ims.set("./socket/index", {
  hash: 1119353765,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _initiator = require2("./initiator");
    var __decorate = function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    class default_1 {
      #backend;
      #initiator;
      #socket;
      constructor(backend) {
        this.#backend = backend;
        this.#initiator = new _initiator.default(backend);
      }
      async get() {
        if (this.#socket) return this.#socket;
        const backend = this.#backend;
        const {
          pkg
        } = backend;
        pkg !== "@beyond-js/local" && (await this.#initiator.check());
        const {
          io
        } = await bimport("socket.io-client");
        let query = backend.io.querystring && (await backend.io.querystring());
        const {
          host
        } = this.#backend;
        return this.#socket = io(host, {
          transports: ["websocket"],
          "query": query
        });
      }
    }
    exports.default = default_1;
    __decorate([_core.SingleCall], default_1.prototype, "get", null);
  }
});
ims.set("./socket/initiator", {
  hash: 4260137755,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class _default {
      #backend;
      #local;
      constructor(backend) {
        this.#backend = backend;
      }
      #promise;
      #initialise = async () => {
        if (this.#promise) {
          await this.#promise;
          return;
        }
        this.#promise = new _core.PendingPromise();
        if (!this.#backend.local || this.#local) return;
        this.#local = (await bimport("@beyond-js/local/main")).local;
        this.#promise.resolve();
      };
      async check() {
        await this.#initialise();
        if (!this.#local) return;
        const {
          pkg,
          local
        } = this.#backend;
        const id = `${pkg}/${local}`;
        const launcher = this.#local.launchers.get(id);
        const status = await launcher.status;
        if (status === "running") return;
        await launcher.start();
        await new Promise(resolve => setTimeout(resolve, 2e3));
      }
    }
    exports.default = _default;
  }
});
__pkg.exports.descriptor = [{
  "im": "./action/bridge",
  "from": "ActionsBridge",
  "name": "ActionsBridge"
}, {
  "im": "./backend",
  "from": "Backend",
  "name": "Backend"
}, {
  "im": "./backends",
  "from": "backends",
  "name": "backends"
}];
var ActionsBridge, Backend, backends;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ActionsBridge") && (ActionsBridge = require2 ? require2("./action/bridge").ActionsBridge : value);
  (require2 || prop === "Backend") && (Backend = require2 ? require2("./backend").Backend : value);
  (require2 || prop === "backends") && (backends = require2 ? require2("./backends").backends : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50LjAuMS41LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vYnJpZGdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vZXhlY3V0aW9uLWVycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2JhY2tlbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2JhY2tlbmRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9pby50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50L19fc291cmNlcy9jbGllbnQvc29ja2V0L2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9zb2NrZXQvaW5pdGlhdG9yLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiQWN0aW9uc0JyaWRnZSIsIkJhY2tlbmQiLCJfX2JleW9uZF9wa2ciLCJiYWNrZW5kcyIsImhtciIsIm1vZHVsZSIsImNvbnN0cnVjdG9yIiwiZGlzdHJpYnV0aW9uIiwiYnVuZGxlIiwic3BlY2lmaWVyIiwicGtnIiwiZXhlY3V0ZSIsImFjdGlvbiIsInBhcmFtcyIsImEiLCJBY3Rpb24iLCJleHBvcnRzIiwiRXhlY3V0aW9uRXJyb3IiLCJtZXNzYWdlIiwic3RhY2siLCJhdXRvaW5jcmVtZW50IiwiRXZlbnRzIiwiYmFja2VuZCIsImlkIiwic3BsaXQiLCJwb3AiLCJqb2luIiwiY2hhbm5lbCIsImV4ZWN1dGVkIiwiZXhlY3V0aW5nIiwiZXJyb3IiLCJQZW5kaW5nUHJvbWlzZSIsInNvY2tldCIsInRyaWdnZXIiLCJlbWl0IiwiZXhjIiwicmVqZWN0IiwiZ2V0IiwiRXJyb3IiLCJvbnJlc3BvbnNlIiwicmVzcG9uc2UiLCJjbGVhclRpbWVvdXQiLCJvZmYiLCJzb3VyY2UiLCJwcm9jZXNzaW5nVGltZSIsInJlc29sdmUiLCJvbiIsImhvc3QiLCJsb2NhbCIsIlNlcnZpY2VJT0NvbmZpZ3VyYXRpb24iLCJpbyIsIlNvY2tldCIsIk1hcCIsInJlZ2lzdGVyIiwiaGFzIiwic2V0IiwiY29uZmlnIiwiYmltcG9ydCIsImRlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVxdWlyZSIsInF1ZXJ5c3RyaW5nIiwiSW5pdGlhdG9yIiwiY2hlY2siLCJxdWVyeSIsInRyYW5zcG9ydHMiLCJfX2RlY29yYXRlIiwiU2luZ2xlQ2FsbCIsImxhdW5jaGVyIiwibGF1bmNoZXJzIiwic3RhdHVzIiwic3RhcnQiLCJQcm9taXNlIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFHaUIsTUFDWEwsZUFBYTtNQUNOO01BQ0E7TUFDQTtNQUVUTSxZQUFZQyxjQUFzQkMsUUFBYztRQUM1QyxLQUFLLGdCQUFnQkQ7UUFDckIsS0FBSyxVQUFVQyxPQUFPQztRQUN0QixLQUFLLFdBQVcsR0FBR0QsT0FBT0gsT0FBT0ssT0FBTyxLQUFLO01BQ2pEO01BRUEsTUFBTUMsUUFBUUMsV0FBbUJDLFFBQWE7UUFDMUMsTUFBTUMsSUFB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