System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"]]);
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

// .beyond/uimport/temp/@beyond-js/kernel/routing.0.1.9.js
var routing_0_1_9_exports = {};
__export(routing_0_1_9_exports, {
  URI: () => URI,
  routing: () => routing
});
module.exports = __toCommonJS(routing_0_1_9_exports);

// node_modules/@beyond-js/kernel/routing/routing.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.9/routing"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./history/history", {
  hash: 1835933971,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondHistory = void 0;
    var _position = require2("./position");
    var _records = require2("./records");
    class BeyondHistory {
      #position;
      get position() {
        return this.#position;
      }
      #records;
      get records() {
        return this.#records;
      }
      get valid() {
        return this.#records.valid;
      }
      get current() {
        return this.valid ? this.#records.current.uri : void 0;
      }
      #initial = history.length;
      get initial() {
        return this.#initial;
      }
      #processBrowserURI(uri) {
        if (uri === void 0) return;
        const {
          routing: routing2
        } = require2("../routing");
        const RoutingModeEnum = require2("../routing").RoutingMode;
        return routing2.mode === RoutingModeEnum.Hash ? `#${uri.substr(1)}` : uri;
      }
      #push(uri) {
        this.#records.reset();
        this.#records.push(uri);
        this.#position.save(this.#records.length);
      }
      replaceState(state, title, uri) {
        state = state ? state : {};
        if (typeof state !== "object") throw new Error("Invalid state parameter");
        this.#records.updateCurrentURI(uri);
        const position = this.#position.value;
        history.replaceState(state, title, this.#processBrowserURI(uri));
        this.#position.save(position);
      }
      pushState(uri, state) {
        if (uri === `${location.pathname}${location.search}${location.hash}`) return;
        state = state ? state : {};
        if (typeof state !== "object") throw new Error("Invalid state parameter");
        history.pushState(state, null, this.#processBrowserURI(uri));
        this.#push(uri);
      }
      back() {
        const previous = this.#records.previous?.position;
        const current = this.#records.current?.position;
        if (!previous) return;
        history.go(previous - current);
      }
      forward() {
        const following = this.#records.following?.position;
        const current = this.#records.current?.position;
        if (!following) return;
        history.go(following - current);
      }
      constructor(routing2, Mode) {
        this.#position = new _position.HistoryPosition();
        this.#records = new _records.HistoryRecords(this.#position);
        if (this.#position.value === void 0) {
          let uri = routing2.mode === Mode.Hash ? location.hash.slice(1) : `${location.pathname}${location.search}${location.hash}`;
          this.#push(uri);
        }
      }
    }
    exports.BeyondHistory = BeyondHistory;
  }
});
ims.set("./history/position", {
  hash: 3613484025,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HistoryPosition = void 0;
    class HistoryPosition {
      check() {
        if (this.value) return true;
        console.error("History state is not defined. This happen when state is changed outside the beyond defined navigation flows.");
        return false;
      }
      get value() {
        return history.state?.__beyond_navigation_position;
      }
      save(position) {
        const state = history.state ? history.state : {};
        state.__beyond_navigation_position = position;
        history.replaceState(state, null);
      }
    }
    exports.HistoryPosition = HistoryPosition;
  }
});
ims.set("./history/records", {
  hash: 3466552890,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HistoryRecords = void 0;
    class HistoryRecords {
      #position;
      #valid = true;
      get valid() {
        return this.#valid;
      }
      #entries = [];
      get entries() {
        return this.#entries.slice();
      }
      get length() {
        return this.#entries.length;
      }
      get current() {
        return this.#entries[this.#position.value - 1];
      }
      get previous() {
        const previous = this.#position.value - 2;
        if (previous < 0) return;
        return this.#entries[previous];
      }
      get following() {
        const following = this.#position.value;
        if (following >= this.#entries.length) return;
        return this.#entries[following];
      }
      constructor(position) {
        this.#position = position;
        let parsed;
        try {
          const stored = sessionStorage.getItem("__beyond_navigation_records");
          if (!stored && position.value !== void 0) {
            this.#valid = false;
            return;
          }
          parsed = stored ? JSON.parse(stored) : [];
        } catch (exc) {
          this.#valid = false;
          console.error("Error loading beyond navigation state", exc instanceof Error ? exc.stack : exc);
          this.#entries = [];
        }
        if (!(parsed instanceof Array)) {
          const warning = "The beyond navigation data, stored in session store is invalid.";
          console.warn(warning, parsed);
        }
        this.#entries = parsed;
      }
      #sanitizeURI(uri) {
        if (uri === void 0) return;
        return uri.startsWith("/") ? uri : `/${uri}`;
      }
      get(index) {
        return this.#entries[index];
      }
      push(uri) {
        uri = this.#sanitizeURI(uri);
        this.#entries.push({
          uri,
          position: history.length
        });
        this.save();
      }
      reset() {
        const position = this.#position.value;
        if (position) return;
        this.#entries = this.#entries.filter(entry => entry.position < history.length);
      }
      updateCurrentURI(uri) {
        if (!this.#valid) return;
        const position = this.#position.value;
        uri = this.#sanitizeURI(uri);
        this.#entries[position - 1] = {
          uri,
          position: history.length
        };
        this.save();
      }
      save() {
        if (!this.#valid) return;
        sessionStorage.setItem("__beyond_navigation_records", JSON.stringify(this.#entries));
      }
    }
    exports.HistoryRecords = HistoryRecords;
  }
});
ims.set("./routing", {
  hash: 2780317025,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.routing = exports.RoutingMode = exports.Routing = void 0;
    var _uri2 = require2("./uri/uri");
    var _core = require2("@beyond-js/kernel/core");
    var _history = require2("./history/history");
    var RoutingMode;
    exports.RoutingMode = RoutingMode;
    (function (RoutingMode2) {
      RoutingMode2[RoutingMode2["Hash"] = 0] = "Hash";
      RoutingMode2[RoutingMode2["Pathname"] = 1] = "Pathname";
    })(RoutingMode || (exports.RoutingMode = RoutingMode = {}));
    const serverside = typeof process === "object";
    class Routing extends _core.Events {
      #mode;
      get mode() {
        return this.#mode;
      }
      #history;
      get history() {
        return this.#history;
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      #uri;
      get uri() {
        return this.#uri;
      }
      missing;
      redirect;
      #resolveConfigured;
      #configured = new Promise(resolve => this.#resolveConfigured = resolve);
      constructor() {
        super();
        const {
          specifier
        } = globalThis.__app_package;
        !serverside && bimport(`${specifier}/config`).then(({
          default: config
        }) => {
          let configured = config.routing?.mode;
          let routingMode = configured === "hash" ? RoutingMode.Hash : RoutingMode.Pathname;
          location.protocol === "file:" && (routingMode = RoutingMode.Hash);
          ![0, 1].includes(routingMode) && (routingMode = location.protocol === "file:" ? RoutingMode.Hash : RoutingMode.Pathname);
          this.#mode = routingMode;
          this.#history = new _history.BeyondHistory(this, RoutingMode);
          this.#resolveConfigured();
        });
      }
      #redirect = async uri => {
        if (typeof this.redirect !== "function") return;
        const redirected = await this.redirect(uri);
        if (!redirected) return;
        if (typeof redirected !== "string") {
          console.error(`Invalid route value set by custom routing function`, redirected);
          return;
        }
        if (uri.pathname === redirected) return;
        this.pushState(redirected);
        return true;
      };
      pushState(uri, state) {
        this.#configured.then(() => {
          this.#history.pushState(uri, state);
          this.update().catch(exc => console.error(exc.stack));
        });
      }
      replaceState(state, title, uri) {
        this.#configured.then(() => {
          this.#history.replaceState(state, title, uri);
          this.update().catch(exc => console.error(exc.stack));
        });
      }
      #cancellationToken = new _core.CancellationToken();
      update = async () => {
        const cancellationTokenId = this.#cancellationToken.reset();
        const {
          hash,
          pathname,
          search
        } = location;
        const _uri = this.#mode === RoutingMode.Hash ? `/${hash.slice(1)}` : pathname + search + hash;
        if (this.#uri?.uri === _uri) return;
        const uri = this.#uri = new _uri2.URI(_uri);
        const redirected = await this.#redirect(uri);
        if (!this.#cancellationToken.check(cancellationTokenId)) return;
        if (redirected) return;
        this.#history && uri.uri !== this.#history.current && console.error(`History current "${this.#history.current}" is not equal to actual uri "${uri.uri}"`);
        this.#initialised ? this.trigger("change") : this.#resolve();
        this.#initialised = true;
      };
      #started = false;
      setup() {
        this.#started = true;
        !serverside && this.update().catch(exc => console.error(exc.stack));
      }
      back() {
        this.#history.back();
      }
      forward() {
        this.#history.forward();
      }
    }
    exports.Routing = Routing;
    const routing2 = new Routing();
    exports.routing = routing2;
    globalThis.routing = routing2;
    !serverside && (beyond.navigate = (uri, state) => routing2.pushState(uri, state));
    !serverside && (beyond.pushState = (uri, state) => routing2.pushState(uri, state));
    !serverside && (beyond.back = () => routing2.back());
    !serverside && (beyond.forward = () => routing2.forward());
    !serverside && window.addEventListener("popstate", () => routing2.update().catch(exc => console.error(exc.stack)));
  }
});
ims.set("./uri/querystring", {
  hash: 187911159,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.QueryString = void 0;
    class QueryString extends Map {
      constructor(search) {
        super();
        if (search.trim() === "") return;
        search = search.slice(0, 1) === "?" ? search.slice(1) : search;
        const split = search.split("&");
        for (let i = 0; i < split.length; ++i) {
          const param = split[i].split("=", 2);
          const value = param[1] ? decodeURIComponent(param[1].replace(/\+/g, " ")) : void 0;
          this.set(param[0], value);
        }
      }
    }
    exports.QueryString = QueryString;
  }
});
ims.set("./uri/uri", {
  hash: 748332499,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.URI = void 0;
    var _querystring = require2("./querystring");
    class URI2 {
      #uri;
      get uri() {
        return this.#uri;
      }
      #pathname;
      get pathname() {
        return this.#pathname;
      }
      #search;
      get search() {
        return this.#search;
      }
      #qs;
      get qs() {
        return this.#qs;
      }
      #hash;
      get hash() {
        return this.#hash;
      }
      constructor(uri) {
        this.#uri = uri;
        const [u, hash] = uri.split("#");
        const [pathname, search] = u.split("?");
        this.#pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
        this.#search = search ? search : "";
        this.#qs = new _querystring.QueryString(this.#search);
        this.#hash = hash;
      }
    }
    exports.URI = URI2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./routing",
  "from": "routing",
  "name": "routing"
}, {
  "im": "./uri/uri",
  "from": "URI",
  "name": "URI"
}];
var routing, URI;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "routing") && (routing = require2 ? require2("./routing").routing : value);
  (require2 || prop === "URI") && (URI = require2 ? require2("./uri/uri").URI : value);
};
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL3JvdXRpbmcuMC4xLjkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9oaXN0b3J5L2hpc3RvcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9oaXN0b3J5L3Bvc2l0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvaGlzdG9yeS9yZWNvcmRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcm91dGluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL3VyaS9xdWVyeXN0cmluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL3VyaS91cmkudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJVUkkiLCJyb3V0aW5nIiwibW9kdWxlIiwiQmV5b25kSGlzdG9yeSIsInBvc2l0aW9uIiwicmVjb3JkcyIsInZhbGlkIiwiY3VycmVudCIsInVyaSIsImhpc3RvcnkiLCJsZW5ndGgiLCJpbml0aWFsIiwicmVxdWlyZSIsIlJvdXRpbmdNb2RlRW51bSIsIlJvdXRpbmdNb2RlIiwibW9kZSIsIkhhc2giLCJzdWJzdHIiLCJyZXNldCIsInB1c2giLCJzYXZlIiwicmVwbGFjZVN0YXRlIiwic3RhdGUiLCJ0aXRsZSIsIkVycm9yIiwidXBkYXRlQ3VycmVudFVSSSIsInZhbHVlIiwicHVzaFN0YXRlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsImhhc2giLCJiYWNrIiwicHJldmlvdXMiLCJnbyIsImZvcndhcmQiLCJmb2xsb3dpbmciLCJjb25zdHJ1Y3RvciIsIk1vZGUiLCJIaXN0b3J5UG9zaXRpb24iLCJIaXN0b3J5UmVjb3JkcyIsInNsaWNlIiwiZXhwb3J0cyIsImNoZWNrIiwiY29uc29sZSIsImVycm9yIiwiX19iZXlvbmRfbmF2aWdhdGlvbl9wb3NpdGlvbiIsImVudHJpZXMiLCJwYXJzZWQiLCJzdG9yZWQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJleGMiLCJzdGFjayIsIkFycmF5Iiwid2FybmluZyIsIndhcm4iLCJzdGFydHNXaXRoIiwiZ2V0IiwiaW5kZXgiLCJmaWx0ZXIiLCJlbnRyeSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZXJ2ZXJzaWRlIiwicHJvY2VzcyIsIlJvdXRpbmciLCJFdmVudHMiLCJpbml0aWFsaXNlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVhZHkiLCJtaXNzaW5nIiwicmVkaXJlY3QiLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsImJpbXBvcnQiLCJ0aGVuIiwiZGVmYXVsdCIsImNvbmZpZyIsImNvbmZpZ3VyZWQiLCJyb3V0aW5nTW9kZSIsIlBhdGhuYW1lIiwicHJvdG9jb2wiLCJpbmNsdWRlcyIsInJlZGlyZWN0ZWQiLCJ1cGRhdGUiLCJjYXRjaCIsIkNhbmNlbGxhdGlvblRva2VuIiwiY2FuY2VsbGF0aW9uVG9rZW5JZCIsIl91cmkiLCJ0cmlnZ2VyIiwic2V0dXAiLCJiZXlvbmQiLCJuYXZpZ2F0ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJRdWVyeVN0cmluZyIsIk1hcCIsInRyaW0iLCJzcGxpdCIsImkiLCJwYXJhbSIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJ1bmRlZmluZWQiLCJzZXQiLCJxcyIsInUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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