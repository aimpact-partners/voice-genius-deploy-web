System.register(["@beyond-js/kernel@0.1.9/bundle","dexie@3.2.3","@beyond-js/events@0.0.6/events","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["dexie","3.2.3"],["@beyond-js/events","0.0.6"],["@beyond-js/reactive","1.0.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('dexie@3.2.3', dep), dep => dependencies.set('@beyond-js/events@0.0.6/events', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep)],
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

// .beyond/uimport/@beyond-js/reactive/database.1.0.0.js
var database_1_0_0_exports = {};
__export(database_1_0_0_exports, {
  DBManager: () => DBManager,
  DatabaseManager: () => DatabaseManager,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(database_1_0_0_exports);

// node_modules/@beyond-js/reactive/database/database.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("dexie@3.2.3"), 0);
var dependency_2 = __toESM(require("@beyond-js/events@0.0.6/events"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@1.0.0/database"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["dexie", dependency_1], ["@beyond-js/events/events", dependency_2], ["@beyond-js/kernel/core", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./database", {
  hash: 333450144,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Database = void 0;
    var _dexie = require2("dexie");
    var _events = require2("@beyond-js/events/events");
    var _core = require2("@beyond-js/kernel/core");
    class Database extends _events.Events {
      #version = 1;
      #db;
      get db() {
        return this.#db;
      }
      #promise;
      #currentVersion;
      static #instance;
      #ready;
      #name;
      get ready() {
        return this.#ready;
      }
      constructor(name, version) {
        super();
        this.#name = name;
        this.#version = version;
        this.create();
        this.#promise = new _core.PendingPromise();
        globalThis.db = this.#db;
      }
      async create() {
        this.#db = new _dexie.default(this.#name);
        this.#currentVersion = this.#db.version(this.#version);
      }
      #onReady = () => {
        this.#ready = true;
        this.#promise.resolve();
        this.#promise = void 0;
      };
      #onError = error => {
        this.#promise.resolve();
        this.#promise = void 0;
        throw new Error(error);
      };
      #nextVersion() {
        this.#version++;
        return this.#version;
      }
      register = async data => {
        Object.keys(data).forEach(store => {
          const items = data[store].split(",");
          const filter = new Set(items);
          filter.add("offline");
          data[store] = Array.from(filter).join(",");
        });
        this.#currentVersion.stores(data);
        try {
          await this.#db.open();
          return this.#db;
        } catch (e) {
          console.error("error registering", e);
        }
      };
    }
    exports.Database = Database;
  }
});
ims.set("./index", {
  hash: 1175347211,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DatabaseManager = exports.DBManager = void 0;
    var _dexie = require2("dexie");
    var _events = require2("@beyond-js/events/events");
    var _core = require2("@beyond-js/kernel/core");
    var _database = require2("./database");
    class DatabaseManager2 extends _events.Events {
      #promise;
      #ready;
      get ready() {
        return this.#ready;
      }
      #db;
      get db() {
        return this.#db;
      }
      #databases = /* @__PURE__ */new Map();
      constructor() {
        super();
        const db = new _dexie.default("ReactiveDatabase");
        this.#db = db;
        db.version(1).stores({
          schemas: "name, table, fields"
        });
        db.open().then(this.#onFinished).catch(this.#onError);
      }
      #onFinished = () => {
        this.trigger("loaded.reactive.database");
        if (this.#promise) this.#promise.resolve();
      };
      #onError = err => {
        this.trigger("error");
        console.error(err);
      };
      load() {
        if (this.ready) return this.ready;
        if (this.#promise) return this.#promise;
        this.#promise = new _core.PendingPromise();
        const onFinished = () => {
          this.#ready = true;
          this.#promise.resolve();
          this.#promise = void 0;
        };
        this.on("finished", onFinished);
        this.on("error", () => {
          this.#promise.reject();
          this.#promise = void 0;
        });
      }
      async open(identifier) {
        let [name, version = 1] = identifier.split("@");
        if (!this.#databases.has(name)) {
          const schema = new _database.Database(name, version);
          this.#databases.set(name, schema);
          return schema;
        }
        return this.#databases.get(name);
      }
      get = name => this.open(name);
      async config(name, stores) {
        const schema = await this.open(name);
        return schema.register(stores);
      }
    }
    exports.DatabaseManager = DatabaseManager2;
    const DBManager2 = new DatabaseManager2();
    exports.DBManager = DBManager2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "DatabaseManager",
  "name": "DatabaseManager"
}, {
  "im": "./index",
  "from": "DBManager",
  "name": "DBManager"
}];
var DatabaseManager, DBManager;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "DatabaseManager") && (DatabaseManager = require2 ? require2("./index").DatabaseManager : value);
  (require2 || prop === "DBManager") && (DBManager = require2 ? require2("./index").DBManager : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL2RhdGFiYXNlLjEuMC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvZGF0YWJhc2UvX19zb3VyY2VzL2RhdGFiYXNlL2RhdGFiYXNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvZGF0YWJhc2UvX19zb3VyY2VzL2RhdGFiYXNlL2luZGV4LnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiREJNYW5hZ2VyIiwiRGF0YWJhc2VNYW5hZ2VyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiRGF0YWJhc2UiLCJFdmVudHMiLCJkYiIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJuYW1lIiwidmVyc2lvbiIsImNyZWF0ZSIsIlBlbmRpbmdQcm9taXNlIiwiZ2xvYmFsVGhpcyIsIkRleGllIiwicmVzb2x2ZSIsInVuZGVmaW5lZCIsImVycm9yIiwiRXJyb3IiLCJyZWdpc3RlciIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInN0b3JlIiwiaXRlbXMiLCJzcGxpdCIsImZpbHRlciIsIlNldCIsImFkZCIsIkFycmF5IiwiZnJvbSIsImpvaW4iLCJzdG9yZXMiLCJvcGVuIiwiZSIsImNvbnNvbGUiLCJleHBvcnRzIiwiTWFwIiwic2NoZW1hcyIsInRoZW4iLCJjYXRjaCIsInRyaWdnZXIiLCJlcnIiLCJsb2FkIiwib25GaW5pc2hlZCIsIm9uIiwicmVqZWN0IiwiaWRlbnRpZmllciIsImhhcyIsInNjaGVtYSIsInNldCIsImdldCIsImNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtJQUNBO0lBQ0E7SUFF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LE1BQU1DLFVBQVUsQ0FBQyxJQUFJc0MsV0FBV3RCLE1BQU0sR0FBRztRQUU5QyxJQUFJLENBQUMsS0FBSyxXQUFXdUIsSUFBSXhDLElBQUksR0FBRztVQUMvQixNQUFNeUMsU0FBUyxJQUFJOUMsbUJBQVNLLE1BQU1DLE9BQU87VUFDekMsS0FBSyxXQUFXeUMsSUFBSTFDLE1BQU15QyxNQUFNO1VBQ2hDLE9BQU9BOztRQUdSLE9BQU8sS0FBSyxXQUFXRSxJQUFJM0MsSUFBSTtNQUNoQztNQUVBMkMsTUFBTTNDLFFBQVEsS0FBS3lCLEtBQUt6QixJQUFJO01BRTVCLE1BQU00QyxPQUFPNUMsTUFBTXdCLFFBQU07UUFDeEIsTUFBTWlCLFNBQVMsTUFBTSxLQUFLaEIsS0FBS3pCLElBQUk7UUFDbkMsT0FBT3lDLE9BQU8vQixTQUFTYyxNQUFNO01BQzlCOztJQUNBSTtJQUNtQixNQUFNdEMsYUFBWSxJQUFJQyxrQkFBZTtJQUFHcUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii92b2ljZS1nZW5pdXMvcHJvamVjdC9vdXQifQ==