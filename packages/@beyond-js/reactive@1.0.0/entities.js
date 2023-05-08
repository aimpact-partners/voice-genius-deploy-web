System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/events@0.0.6/events","@beyond-js/reactive@1.0.0/model","@beyond-js/kernel@0.1.9/core","dexie@3.2.3","@beyond-js/reactive@1.0.0/database"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.6"],["@beyond-js/reactive","1.0.0"],["dexie","3.2.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/events@0.0.6/events', dep), dep => dependencies.set('@beyond-js/reactive@1.0.0/model', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('dexie@3.2.3', dep), dep => dependencies.set('@beyond-js/reactive@1.0.0/database', dep)],
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

// .beyond/uimport/@beyond-js/reactive/entities.1.0.0.js
var entities_1_0_0_exports = {};
__export(entities_1_0_0_exports, {
  Collection: () => Collection,
  CollectionLocalProvider: () => CollectionLocalProvider,
  FactoryRecords: () => FactoryRecords,
  IProvider: () => IProvider,
  Item: () => Item,
  LocalProvider: () => LocalProvider,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(entities_1_0_0_exports);

// node_modules/@beyond-js/reactive/entities/entities.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/reactive@1.0.0/model"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_3 = __toESM(require("dexie@3.2.3"), 0);
var dependency_4 = __toESM(require("@beyond-js/reactive@1.0.0/database"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@1.0.0/entities"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/reactive/model", dependency_1], ["@beyond-js/kernel/core", dependency_2], ["dexie", dependency_3], ["@beyond-js/reactive/database", dependency_4]]);
var ims = /* @__PURE__ */new Map();
ims.set("./collection/index", {
  hash: 551772162,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Collection = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _localProvider = require2("./local-provider");
    var _publish = require2("./publish");
    var _load = require2("./load");
    class Collection2 extends _model.ReactiveModel {
      #items = [];
      get items() {
        return this.#items;
      }
      counters = {};
      #total = 0;
      get total() {
        return this.#total;
      }
      provider;
      next;
      #localProvider;
      get localProvider() {
        return this.#localProvider;
      }
      #saveManager;
      #loadManager;
      #provider;
      #initSpecs = {};
      constructor() {
        super();
        this.reactiveProps(["item", "next", "provider"]);
      }
      setItems(values) {
        this.#items = values;
      }
      async init(specs = {}) {
        this.#initSpecs = specs;
        const getProperty = property => this[property];
        const setProperty = (property, value) => this[property] = value;
        const bridge = {
          get: getProperty,
          set: setProperty
        };
        this.#localProvider = new _localProvider.CollectionLocalProvider(this, bridge);
        this.#localProvider.on("items.changed", this.#listenItems);
        this.localProvider.init();
        this.#saveManager = new _publish.CollectionSaveManager(this, bridge);
        this.#loadManager = new _load.CollectionLoadManager(this, bridge);
      }
      #listenItems = () => {
        this.#items = this.#localProvider.items;
        this.trigger("change");
      };
      setOffline = value => this.localProvider.setOffline(value);
    }
    exports.Collection = Collection2;
  }
});
ims.set("./collection/load", {
  hash: 2796623905,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CollectionLoadManager = void 0;
    class CollectionLoadManager {
      #parent;
      get parent() {
        return this.#parent;
      }
      #localProvider;
      #provider;
      #getProperty;
      #parentBridge;
      #localdb;
      constructor(parent, parentBridge) {
        this.#parent = parent;
        this.#parentBridge = parentBridge;
        this.init();
      }
      init = async () => {
        this.#parent.load = this.load;
        this.#localdb = this.#parentBridge.get("localdb");
        this.#localProvider = this.#parentBridge.get("localProvider");
        this.#provider = this.#parentBridge.get("provider");
        this.#parent.load = this.load;
      };
      load = async (params = {}) => {
        try {
          this.parent.fetching = true;
          let {
            limit = 30,
            start = 1,
            update
          } = params;
          const {
            next
          } = this.parent;
          start = start ?? (update === true && next ? next : 0);
          if (await this.#parentBridge.get("localProvider")) {
            const localData = await this.#localProvider.load(params);
            if (localData) this.#parentBridge.get("setItems")(this.processEntries(localData));
          }
          if (this.#localProvider && !this.#localProvider.isOnline) {
            return;
          }
          if (!this.#provider) return;
          const remoteData = await this.#provider.list(params);
          const {
            status,
            data,
            error
          } = remoteData;
          if (!status) throw error ?? "ERROR_LIST_QUERY";
          const items = this.processEntries(data.entries);
          let itemsValue = params.update === true ? this.parent.items.concat(items) : items;
          const properties = {
            items: itemsValue,
            next: data.next,
            loaded: true,
            fetching: false,
            total: data.total ?? 0
          };
          this.parent.set(properties);
          this.parent.triggerEvent();
          return items;
        } catch (exc) {
          console.error("ERROR LOAD", exc);
          this.#parent.set({
            loaded: false,
            fetchig: true
          });
          this.parent.triggerEvent();
          return {
            status: false,
            error: {
              message: exc
            }
          };
        }
      };
      processEntries = entries => {
        return entries.map(record => {
          const item = new this.parent.item();
          item.set(record, true);
          return item;
        });
      };
      remoteLoad = async params => {
        const response = await this.#provider.load(params);
        if (!response.status) throw "ERROR_DATA_QUERY";
        return response.data;
      };
    }
    exports.CollectionLoadManager = CollectionLoadManager;
  }
});
ims.set("./collection/local-provider", {
  hash: 1775293477,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CollectionLocalProvider = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _dexie = require2("dexie");
    var _database = require2("@beyond-js/reactive/database");
    class CollectionLocalProvider2 extends _model.ReactiveModel {
      #isOnline = globalThis.navigator.onLine;
      #store;
      get store() {
        return this.#store;
      }
      #offline;
      #database;
      #storeName;
      #databaseName;
      #items = [];
      get items() {
        return this.#items;
      }
      #exists = false;
      #found = false;
      #db;
      get isOnline() {
        return this.#isOnline && !this.#offline && !localStorage.getItem("reactive.offline");
      }
      #parent;
      constructor(parent, bridge) {
        super();
        const {
          db,
          storeName
        } = parent;
        this.#parent = parent;
        if (!db || !storeName) throw new Error("database and store are required");
        this.#databaseName = db;
        this.#storeName = storeName;
        globalThis.addEventListener("online", this.handleConnection);
        globalThis.addEventListener("offline", this.handleConnection);
      }
      setOffline(value) {
        this.#offline = value;
        this.triggerEvent();
      }
      init = async () => {
        try {
          const database = await _database.DBManager.get(this.#databaseName);
          this.#database = database;
          this.#store = database.db[this.#storeName];
        } catch (e) {
          console.error(e);
        }
      };
      handleConnection = () => {
        this.triggerEvent();
      };
      #isUnpublished(data) {}
      #promiseLoad;
      #params;
      async load(params) {
        if (JSON.stringify(this.#params) === JSON.stringify(params)) {
          if (this.#promiseLoad) return this.#promiseLoad;
          return;
        }
        const conditions = Object.keys(params);
        const controls = ["and", "or"];
        conditions.forEach(condition => {
          if (controls.includes(condition)) {
            this.#processControl(condition, params[condition]);
          }
        });
        try {
          const live = (0, _dexie.liveQuery)(() => this.#store.toArray());
          live.subscribe({
            next: items => {
              if (this.#promiseLoad) {
                this.#promiseLoad.resolve(items);
                this.#promiseLoad = null;
              }
              this.#items = items;
              this.trigger("items.changed");
            },
            error: err => {
              console.error(err);
            }
          });
        } catch (error) {
          console.error("Error al cargar los elementos del store:", error);
          return [];
        }
      }
      save(data) {
        if (!this.isOnline) data = data.forEach(item => ({
          ...item,
          offline: true
        }));
        return this.#store.bulkPut(data);
      }
      #processControl(control, conditions) {
        this.#store[control];
      }
    }
    exports.CollectionLocalProvider = CollectionLocalProvider2;
  }
});
ims.set("./collection/publish", {
  hash: 94292090,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CollectionSaveManager = void 0;
    class CollectionSaveManager {
      #parent;
      #bridge;
      #localProvider;
      #provider;
      #localdb;
      constructor(parent, bridge) {
        this.#parent = parent;
        this.#bridge = bridge;
        this.init();
      }
      init() {
        this.#parent.save = this.save;
        this.#parent.sync = this.sync;
        this.#parent.publish = this.publish;
        this.#localdb = this.#bridge.get("localdb");
        if (this.#localdb) {
          this.#localProvider = this.#bridge.get("localProvider");
        } else {
          console.warn("la colleccion no usa indexeddb");
        }
        this.#provider = this.#bridge.get("provider");
      }
      save = async (data = []) => {
        if (!this.#localdb) return true;
        await this.#localProvider.save(data);
      };
      publish = async (data = []) => {
        try {
          await this.save(data);
          const response = await this.#provider.bulkSave(data);
          if (!response.status) {
            console.error("error...", response);
          }
        } catch (e) {
          console.error(e.message);
        }
      };
      sync = async () => {
        const data = this.#parent.localProvider.store.where("offline").equals(true).toArray();
        const response = await this.#provider.bulkSave(data);
        if (!response.status) {
          console.error("error...", response);
        }
        return data;
      };
    }
    exports.CollectionSaveManager = CollectionSaveManager;
  }
});
ims.set("./interfaces/provider", {
  hash: 1824239074,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./item/index", {
  hash: 2257772171,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Item = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _localProvider = require2("./local-provider");
    var _save = require2("./save");
    var _load = require2("./load");
    var _core = require2("@beyond-js/kernel/core");
    class Item2 extends _model.ReactiveModel {
      #info = /* @__PURE__ */new Map();
      #localData = /* @__PURE__ */new Map();
      localdb = true;
      provider;
      storeName;
      db;
      #ignoredFields = [];
      #skeleton = [];
      localProvider;
      unique = [];
      get isUnpublished() {
        return this.localProvider.isUnpublished(this.getProperties());
      }
      #saveManager;
      get skeleton() {
        return this.#skeleton;
      }
      __get(property) {
        return this[property];
      }
      get store() {
        return this.localProvider.store;
      }
      get isOnline() {
        return this.localProvider.isOnline && !localStorage.getItem("reactive.offline");
      }
      #found;
      get found() {
        return this.#found;
      }
      set found(v) {
        if (v !== this.#found) return;
        this.#found = v;
        this.triggerEvent();
      }
      get landed() {
        return this.localProvider?.landed;
      }
      #loadManager;
      #objectReady = false;
      #ready = false;
      #promiseReady;
      constructor() {
        super();
        this.on("object.loaded", this.checkReady);
      }
      async init({
        id
      }) {
        try {
          const getProperty = property => this.__get(property);
          this.localProvider = new _localProvider.LocalProvider(this, getProperty);
          this.#saveManager = new _save.ItemSaveManager(this, getProperty);
          this.#loadManager = new _load.ItemLoadManager(this, getProperty);
          if (!id) {
            this.trigger("object.loaded");
            id = "new";
          }
          await this.localProvider.init(id);
          if (this.#skeleton && this.#skeleton.length > 0) {
            this.properties = this.#skeleton;
          }
          this.#ready = true;
          this.trigger("object.loaded");
        } catch (e) {
          console.error("error initializing", e);
        }
      }
      checkReady = () => {
        if (this.#ready) {
          return this.#ready;
        }
        if (this.#promiseReady) return this.#promiseReady;
        this.#promiseReady = new _core.PendingPromise();
        if (this.objectReady) this.#promiseReady.resolve(this.#objectReady);
        const onReady = () => {
          this.#objectReady = true;
          this.#promiseReady.resolve(this.#objectReady);
          this.#promiseReady = void 0;
        };
        this.on("object.loaded", onReady);
        return this.#promiseReady;
      };
      setOffline = value => this.localProvider.setOffline(value);
      addLocalProvider(db, table) {
        if (this.localProvider) return;
      }
      set(data, init = false) {
        if (init) {
          this.#localData = new Map(Object.entries(data));
        }
        this.properties.forEach(property => {
          if (data.hasOwnProperty(property)) {
            this[property] = data[property];
          }
        });
      }
      getValues() {
        const values = {};
        this.skeleton.forEach(field => {
          if (this.hasOwnProperty(field)) values[field] = this[field];
        });
        return values;
      }
    }
    exports.Item = Item2;
  }
});
ims.set("./item/load", {
  hash: 167503692,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ItemLoadManager = void 0;
    class ItemLoadManager {
      #parent;
      #localProvider;
      #provider;
      #getProperty;
      constructor(parent, getProperty) {
        this.#parent = parent;
        this.#getProperty = getProperty;
        this.init();
      }
      init = async () => {
        this.#parent.load = this.load;
        this.#localProvider = this.#getProperty("localProvider");
        this.#provider = this.#getProperty("provider");
      };
      load = async id => {
        try {
          await this.#getProperty("checkReady")();
          const parent = this.#parent;
          parent.fetching = true;
          if (!id) id = parent.id;
          if (await this.#getProperty("localdb")) {
            const localData = await this.#localProvider.load(id);
            if (localData) this.#parent.set(localData);
          }
          if (this.#localProvider && !this.#localProvider.isOnline) return;
          if (!this.#provider) return;
          const remoteData = await this.remoteLoad({
            id
          });
          if (!remoteData) {
            this.#parent.found = false;
          }
          if (remoteData) {
            let same = true;
            Object.keys(remoteData).forEach(key => {
              let original = this.#localProvider.registry.values;
              if (original[key] !== remoteData[key]) same = false;
            });
            if (!same) await this.#localProvider.save(remoteData);
          }
        } catch (exc) {
          console.log("ERROR LOAD", exc.message);
        } finally {
          this.#parent.fetching = false;
        }
      };
      remoteLoad = async params => {
        const response = await this.#provider.load(params);
        if (!response.status) throw "ERROR_DATA_QUERY";
        return response.data;
      };
    }
    exports.ItemLoadManager = ItemLoadManager;
  }
});
ims.set("./item/local-provider", {
  hash: 2486931139,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LocalProvider = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _database = require2("@beyond-js/reactive/database");
    var _factory = require2("../registry/factory");
    class LocalProvider2 extends _model.ReactiveModel {
      #isOnline = globalThis.navigator.onLine;
      #store;
      get store() {
        return this.#store;
      }
      #offline;
      #database;
      #storeName;
      #databaseName;
      #originalData;
      #exists = false;
      get landed() {
        return this.#registry?.landed;
      }
      get originalData() {
        return this.#originalData;
      }
      #db;
      get isOnline() {
        return this.#isOnline && !this.#offline && !localStorage.getItem("reactive.offline");
      }
      #parent;
      #getProperty;
      #records;
      #registry;
      get registry() {
        return this.#registry;
      }
      constructor(parent, getProperty) {
        super();
        this.#getProperty = getProperty;
        const {
          db,
          storeName
        } = parent;
        this.__id = Math.floor(Math.random() * (1e5 - 1e3 + 1)) + 1e3;
        this.#parent = parent;
        if (!db || !storeName) throw new Error("database and store are required");
        this.#databaseName = db;
        this.#storeName = storeName;
        this.#records = _factory.FactoryRecords.get(db);
        globalThis.addEventListener("online", this.handleConnection);
        globalThis.addEventListener("offline", this.handleConnection);
      }
      setOffline(value) {
        this.#offline = value;
        this.triggerEvent();
      }
      init = async id => {
        try {
          const database = await _database.DBManager.get(this.#databaseName);
          this.#database = database;
          this.#store = database.db[this.#storeName];
          return this.load({
            id
          });
        } catch (e) {
          console.error(e);
        }
      };
      handleConnection = () => {
        this.triggerEvent();
      };
      isUnpublished(data) {
        const properties = Object.keys(data);
        if (!this.#originalData) return true;
        return properties.some(prop => this.#originalData[prop] !== data[prop]);
      }
      async load({
        id = void 0
      } = {}) {
        id = id ?? this.#parent.id;
        try {
          if (!id) throw new Error("id is required");
          await this.#getRegistry(id);
          this.#parent.loaded = true;
          this.#parent.set(this.#registry.values);
        } catch (e) {
          console.error(e);
        }
      }
      #getRegistry = async id => {
        const registry = await this.#records.load(this.#storeName, id);
        this.#parent.set(registry.values);
        this.#registry = registry;
        registry.on("change", this.#listenRegistry);
        return registry;
      };
      #listenRegistry = async () => {
        if (!this.#registry) return;
        this.#parent.set(this.#registry.values);
        this.trigger("change");
      };
      async save(data, backend = false) {
        try {
          if (!this.isUnpublished) return;
          if (!this.isOnline) data.offline = true;
          if (!this.#registry) {
            await this.#getRegistry("new");
          }
          const duplicated = await this.validateUniqueFields(data);
          if (duplicated.length) {
            return {
              error: "duplicated",
              fields: duplicated
            };
          }
          await this.#registry.update(data, backend);
          this.#parent.set(this.#registry.values);
          return this;
        } catch (e) {
          console.error("error saving", e.message);
        }
      }
      async #update(data) {
        try {
          if (!this.isUnpublished) return;
          await this.#store.update(data.id, data);
        } catch (e) {}
      }
      async validateUniqueFields(data) {
        if (!this.#getProperty("unique").length) return [];
        const checkPromises = this.#getProperty("unique").map(field => this.#store.where(field).equals(data[field]).count().then(count => {
          if (count) {
            return field;
          }
          return null;
        }));
        const duplicateFields = (await Promise.all(checkPromises)).filter(field => field !== null);
        return duplicateFields;
      }
    }
    exports.LocalProvider = LocalProvider2;
  }
});
ims.set("./item/save", {
  hash: 3248162123,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ItemSaveManager = void 0;
    class ItemSaveManager {
      #parent;
      #getProperty;
      constructor(parent, getProperty) {
        this.#parent = parent;
        this.#getProperty = getProperty;
        this.init();
      }
      init() {
        this.#parent.save = this.save;
        this.#parent.sync = this.sync;
      }
      save = async (data = void 0) => {
        try {
          await this.#getProperty("checkReady")();
          if (data) {
            this.#parent.set(data);
          }
          if (!this.#parent.isUnpublished) {
            return;
          }
          const properties = this.#parent.getProperties();
          if (this.#parent.localProvider) {
            await this.#parent.localProvider.save(properties);
          }
          return this.#publish(properties);
        } catch (e) {
          console.error("error saving", e);
        }
      };
      publish = this.save;
      sync = () => {
        const provider = this.#getProperty("localProvider");
        if (!provider.registry.values.offline) {
          console.warn("registry already synced");
          return;
        }
        this.#publish(provider.registry.values);
      };
      #publish = async properties => {
        if (!this.#parent.provider || !this.#parent.isOnline) return;
        const response = await this.#parent.provider.publish(properties);
        if (this.#parent.localProvider) {
          this.#parent.localProvider.save(response.data, true);
          this.#parent.localProvider.triggerEvent();
        }
      };
    }
    exports.ItemSaveManager = ItemSaveManager;
  }
});
ims.set("./registry/factory", {
  hash: 13007940,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.FactoryRecords = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _index = require2("./index");
    var _core = require2("@beyond-js/kernel/core");
    var _database = require2("@beyond-js/reactive/database");
    class FactoryRecords2 extends _model.ReactiveModel {
      #stores = /* @__PURE__ */new Map();
      #database;
      #dbName;
      constructor(dbName) {
        super();
        this.#dbName = dbName;
        this.init();
      }
      #promiseReady;
      async init() {
        if (this.ready) return true;
        if (this.#promiseReady) return this.#promiseReady;
        this.#promiseReady = new _core.PendingPromise();
        this.#database = await _database.DBManager.get(this.#dbName);
        this.#promiseReady.resolve();
        this.#promiseReady = void 0;
        this.ready = true;
      }
      async load(storeName, id) {
        const store = this.#database.db[storeName];
        if (!store) throw new Error(`Store ${storeName} does not exists`);
        if (!this.#stores.has(storeName)) this.#stores.set(storeName, /* @__PURE__ */new Map());
        if (this.#stores.has(storeName) && this.#stores.get(storeName).has(id)) {
          const registry2 = this.#stores.get(storeName).get(id);
          return registry2.get();
        }
        const registry = new _index.Registry(store, {
          id
        });
        await registry.get();
        this.#stores.get(storeName).set(registry.instanceId, registry);
        return registry;
      }
      static #dbs = /* @__PURE__ */new Map();
      static get(dbName) {
        if (this.#dbs.has(dbName)) return this.#dbs.get(dbName);
        const db = new FactoryRecords2(dbName);
        this.#dbs.set(dbName, db);
        return db;
      }
    }
    exports.FactoryRecords = FactoryRecords2;
  }
});
ims.set("./registry/index", {
  hash: 3001050097,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Registry = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _model = require2("@beyond-js/reactive/model");
    class Registry extends _model.ReactiveModel {
      #values = {};
      get values() {
        return this.#values;
      }
      #id;
      local = false;
      #store;
      #isNew;
      #instanceId;
      #keyId;
      #landed;
      get landed() {
        return this.#landed;
      }
      get instanceId() {
        return this.#instanceId;
      }
      constructor(store, data) {
        super();
        const {
          id
        } = data;
        this.#store = store;
        this.#instanceId = Registry.generateUUID();
        this.#id = id === "new" ? void 0 : id;
        this.#isNew = id === "new";
        this.#keyId = this.isNew ? "#instanceId" : "#id";
        if (this.#id) this.#values.id = id;
      }
      #promise;
      async get() {
        if (this.#promise) {
          return this.#promise;
        }
        this.#promise = new _core.PendingPromise();
        if (this.#isNew) {
          this.#promise.resolve(this);
          this.#promise = void 0;
        } else {
          this.#store.get(this.#id).then(item => {
            if (!item) {
              this.#promise.resolve(false);
              this.#landed = false;
              this.#setValues({
                id: this.#id
              });
              this.#promise = void 0;
              return;
            }
            this.#landed = true;
            this.#setValues(item);
            this.#promise.resolve(this);
            this.#promise = void 0;
          });
        }
        return this.#promise;
      }
      #setValues = async (data, backend = false) => {
        const props = Object.keys(data);
        let updated = false;
        if (backend) {
          this.#isNew = false;
          this.#instanceId = void 0;
          delete this.#values.instanceId;
        }
        if (!data.id) {
          data.id = this.#id;
        }
        this.local = this.local;
        if (this.#isNew) {
          this.#values.instanceId = this.#instanceId;
        }
        props.forEach(property => {
          if (data[property] === this.#values[property]) return;
          this.#values[property] = data[property];
          updated = true;
        });
        return updated;
      };
      static generateUUID() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0,
            v = c === "x" ? r : r & 3 | 8;
          return v.toString(16);
        });
      }
      update = async (data, backend) => {
        const updated = this.#setValues(data, backend);
        if (updated) {
          await this.#store.put(this.#values);
          this.trigger("change");
        }
      };
    }
    exports.Registry = Registry;
  }
});
__pkg.exports.descriptor = [{
  "im": "./collection/index",
  "from": "Collection",
  "name": "Collection"
}, {
  "im": "./collection/local-provider",
  "from": "CollectionLocalProvider",
  "name": "CollectionLocalProvider"
}, {
  "im": "./interfaces/provider",
  "from": "IProvider",
  "name": "IProvider"
}, {
  "im": "./item/index",
  "from": "Item",
  "name": "Item"
}, {
  "im": "./item/local-provider",
  "from": "LocalProvider",
  "name": "LocalProvider"
}, {
  "im": "./registry/factory",
  "from": "FactoryRecords",
  "name": "FactoryRecords"
}];
var Collection, CollectionLocalProvider, IProvider, Item, LocalProvider, FactoryRecords;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Collection") && (Collection = require2 ? require2("./collection/index").Collection : value);
  (require2 || prop === "CollectionLocalProvider") && (CollectionLocalProvider = require2 ? require2("./collection/local-provider").CollectionLocalProvider : value);
  (require2 || prop === "IProvider") && (IProvider = require2 ? require2("./interfaces/provider").IProvider : value);
  (require2 || prop === "Item") && (Item = require2 ? require2("./item/index").Item : value);
  (require2 || prop === "LocalProvider") && (LocalProvider = require2 ? require2("./item/local-provider").LocalProvider : value);
  (require2 || prop === "FactoryRecords") && (FactoryRecords = require2 ? require2("./registry/factory").FactoryRecords : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzLjEuMC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvZW50aXRpZXMvX19zb3VyY2VzL2VudGl0aWVzL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvY29sbGVjdGlvbi9sb2FkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvZW50aXRpZXMvX19zb3VyY2VzL2VudGl0aWVzL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvZW50aXRpZXMvX19zb3VyY2VzL2VudGl0aWVzL2ludGVyZmFjZXMvcHJvdmlkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvaXRlbS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL19fc291cmNlcy9lbnRpdGllcy9pdGVtL2xvYWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL19fc291cmNlcy9lbnRpdGllcy9pdGVtL3NhdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL19fc291cmNlcy9lbnRpdGllcy9yZWdpc3RyeS9pbmRleC50cyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkNvbGxlY3Rpb24iLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkZhY3RvcnlSZWNvcmRzIiwiSVByb3ZpZGVyIiwiSXRlbSIsIkxvY2FsUHJvdmlkZXIiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJjb3VudGVycyIsInRvdGFsIiwicHJvdmlkZXIiLCJuZXh0IiwibG9jYWxQcm92aWRlciIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsInNldEl0ZW1zIiwidmFsdWVzIiwiaW5pdCIsInNwZWNzIiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwidmFsdWUiLCJicmlkZ2UiLCJnZXQiLCJzZXQiLCJvbiIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwiZXhwb3J0cyIsInBhcmVudCIsInBhcmVudEJyaWRnZSIsImxvYWQiLCJwYXJhbXMiLCJmZXRjaGluZyIsImxpbWl0Iiwic3RhcnQiLCJ1cGRhdGUiLCJsb2NhbERhdGEiLCJwcm9jZXNzRW50cmllcyIsImlzT25saW5lIiwicmVtb3RlRGF0YSIsImxpc3QiLCJzdGF0dXMiLCJkYXRhIiwiZXJyb3IiLCJlbnRyaWVzIiwiaXRlbXNWYWx1ZSIsImNvbmNhdCIsInByb3BlcnRpZXMiLCJsb2FkZWQiLCJ0cmlnZ2VyRXZlbnQiLCJleGMiLCJjb25zb2xlIiwiZmV0Y2hpZyIsIm1lc3NhZ2UiLCJtYXAiLCJyZWNvcmQiLCJpdGVtIiwicmVtb3RlTG9hZCIsInJlc3BvbnNlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsIm9uTGluZSIsInN0b3JlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRiIiwic3RvcmVOYW1lIiwiRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsImRhdGFiYXNlIiwiREJNYW5hZ2VyIiwiZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25kaXRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImNvbnRyb2xzIiwiZm9yRWFjaCIsImNvbmRpdGlvbiIsImluY2x1ZGVzIiwibGl2ZSIsInRvQXJyYXkiLCJzdWJzY3JpYmUiLCJyZXNvbHZlIiwiZXJyIiwic2F2ZSIsIm9mZmxpbmUiLCJidWxrUHV0IiwiY29udHJvbCIsInN5bmMiLCJwdWJsaXNoIiwid2FybiIsImJ1bGtTYXZlIiwid2hlcmUiLCJlcXVhbHMiLCJNYXAiLCJsb2NhbGRiIiwidW5pcXVlIiwiaXNVbnB1Ymxpc2hlZCIsImdldFByb3BlcnRpZXMiLCJza2VsZXRvbiIsIl9fZ2V0IiwiZm91bmQiLCJ2IiwibGFuZGVkIiwiY2hlY2tSZWFkeSIsImlkIiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwibGVuZ3RoIiwiUGVuZGluZ1Byb21pc2UiLCJvYmplY3RSZWFkeSIsIm9uUmVhZHkiLCJ1bmRlZmluZWQiLCJhZGRMb2NhbFByb3ZpZGVyIiwidGFibGUiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFZhbHVlcyIsImZpZWxkIiwic2FtZSIsImtleSIsIm9yaWdpbmFsIiwicmVnaXN0cnkiLCJsb2ciLCJvcmlnaW5hbERhdGEiLCJfX2lkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic29tZSIsInByb3AiLCJiYWNrZW5kIiwiZHVwbGljYXRlZCIsInZhbGlkYXRlVW5pcXVlRmllbGRzIiwiZmllbGRzIiwiY2hlY2tQcm9taXNlcyIsImNvdW50IiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsIlByb21pc2UiLCJhbGwiLCJmaWx0ZXIiLCJkYk5hbWUiLCJyZWFkeSIsImhhcyIsIlJlZ2lzdHJ5IiwiaW5zdGFuY2VJZCIsImxvY2FsIiwiZ2VuZXJhdGVVVUlEIiwiaXNOZXciLCJwcm9wcyIsInVwZGF0ZWQiLCJyZXBsYWNlIiwiYyIsInIiLCJ0b1N0cmluZyIsInB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFFQTtJQUNBO0lBQ0E7SUFnQmtCLE1BQWdCUixvQkFBbUJTLHFCQUEwQjtNQUM3RSxTQUFvQztNQUVwQyxJQUFJQyxRQUFLO1FBQ1AsT0FBTyxLQUFLO01BQ2Q7TUFFQUMsV0FBZ0I7TUFJaEIsU0FBaUI7TUFDakIsSUFBSUMsUUFBSztRQUNQLE9BQU8sS0FBSztNQUNkO01BQ0FDO01BQ0FDO01BRUE7TUFDQSxJQUFJQyxnQkFBYTtRQUNmLE9BQU8sS0FBSztNQUNkO01BRUE7TUFDQTtNQUNBO01BQ0EsYUFBcUI7TUFFckJDO1FBQ0UsT0FBSztRQUNMLEtBQUtDLGNBQTJCLENBQUMsUUFBUSxRQUFRLFVBQVUsQ0FBQztNQUM5RDtNQUVVQyxTQUFTQyxRQUFNO1FBQ3ZCLEtBQUssU0FBU0E7TUFDaEI7TUFDVSxNQUFNQyxLQUFLQyxRQUFnQixJQUFFO1FBQ3JDLEtBQUssYUFBYUE7UUFDbEIsTUFBTUMsY0FBY0MsWUFBWSxLQUFLQTtRQUNyQyxNQUFNQyxjQUFjLENBQUNELFVBQVVFLFVBQVcsS0FBS0YsWUFBWUU7UUFDM0QsTUFBTUMsU0FBUztVQUFFQyxLQUFLTDtVQUFhTSxLQUFLSjtRQUFXO1FBQ25ELEtBQUssaUJBQWlCLElBQUl2Qix1Q0FBd0IsTUFBTXlCLE1BQU07UUFDOUQsS0FBSyxlQUFlRyxHQUFHLGlCQUFpQixLQUFLLFlBQVk7UUFDekQsS0FBS2QsY0FBY0ssTUFBSTtRQUN2QixLQUFLLGVBQWUsSUFBSVUsK0JBQXNCLE1B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