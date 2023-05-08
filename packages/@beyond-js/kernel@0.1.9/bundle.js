System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
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

// .beyond/uimport/temp/@beyond-js/kernel/bundle.0.1.9.js
var bundle_0_1_9_exports = {};
__export(bundle_0_1_9_exports, {
  Bundle: () => Bundle,
  Events: () => Events,
  IBundleSpecs: () => IBundleSpecs,
  IExportsDescriptor: () => IExportsDescriptor,
  IMCreators: () => IMCreators,
  IMSpecs: () => IMSpecs,
  ListenerFunction: () => ListenerFunction,
  Module: () => Module,
  Package: () => Package,
  bimport: () => bimport,
  brequire: () => brequire,
  instances: () => instances
});
module.exports = __toCommonJS(bundle_0_1_9_exports);

// node_modules/@beyond-js/kernel/bundle/bundle.browser.mjs
var __pkg = {
  exports: {}
};
var ims = /* @__PURE__ */new Map();
ims.set("./base/index", {
  hash: 1936310117,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondPackage = void 0;
    exports.resolve = resolve;
    function resolve(source, id) {
      if (!id.startsWith(".")) throw new Error(`Module id must be a relative resource "${id}"`);
      const split = {};
      split.source = source.split("/");
      split.source.pop();
      split.target = (id.startsWith("./") ? id.slice(2) : id).split("../");
      while (split.target[0] === "" && split.target.length > 1) {
        split.target.shift();
        split.source.pop();
      }
      return split.source.join("/") + "/" + split.target.join("/");
    }
    class BeyondPackage {
      #ims;
      #cached = /* @__PURE__ */new Map();
      #exports;
      constructor(exports2) {
        this.#exports = exports2;
      }
      initialise(ims2) {
        this.#ims = ims2;
        this.#exports.process((id, source) => this.require(id, source), {});
      }
      require(id, source) {
        id = source ? resolve(source, id) : id;
        const module2 = (() => {
          if (this.#ims.has(id)) return id;
          return id.endsWith("/") ? `${id}index` : `${id}/index`;
        })();
        if (this.#cached.has(module2)) return this.#cached.get(module2);
        if (!this.#ims.has(module2)) throw new Error(`Internal module "${id}" not found`);
        const fn = this.#ims.get(module2).creator;
        const require3 = required => this.require(required, module2);
        const exports2 = {};
        fn(require3, exports2);
        this.#cached.set(module2, exports2);
        return exports2;
      }
    }
    exports.BeyondPackage = BeyondPackage;
  }
});
ims.set("./bimport/bimport", {
  hash: 1563705995,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bimport = bimport2;
    require2("./brequire");
    function bimport2(resource, version) {
      if (bimport2.mode === "amd") {
        return new Promise((resolve, reject) => {
          if (typeof resource !== "string") throw "Invalid module parameter";
          resource = resource.endsWith(".js") ? resource.slice(0, resource.length - 3) : resource;
          const error = new Error(`Error loading or processing module "${resource}"`);
          amd_require([resource], returned => resolve(returned), exc => {
            console.error(`Error loading resource "${resource}".`);
            console.log(exc.stack);
            reject(error);
          });
        });
      } else if (bimport2.mode === "sjs") {
        return globalThis.System.import(resource + (version ? `?version=${version}` : ""));
      } else {
        return import(resource + (version ? `?version=${version}` : ""));
      }
    }
    bimport2.mode = (() => {
      if (typeof amd_require === "function") return "amd";
      const {
        System
      } = globalThis;
      if (typeof System === "object" && typeof System.import === "function") return "sjs";
      return "esm";
    })();
    const appDependencies = (() => {
      const dependencies = globalThis.__app_package?.dependencies;
      return new Map(dependencies);
    })();
    bimport2.resolve = (specifier, dependencies) => {
      if (/^https?:\/\//.test(specifier)) return specifier;
      const split = specifier.split("/");
      const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
      const version = (() => {
        if (dependencies.has(pkg)) return dependencies.get(pkg);
        if (appDependencies.has(pkg)) return appDependencies.get(pkg);
      })();
      if (!version) return specifier;
      const subpath = split.join("/");
      return `${pkg}@${version}` + (subpath ? `/${subpath}` : "");
    };
  }
});
ims.set("./bimport/brequire", {
  hash: 596501557,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.brequire = brequire2;
    var _instances = require2("../package/instances");
    function brequire2(specifier) {
      const split = specifier.split("/");
      const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
      const subpath = split.join("/");
      const found = [..._instances.default].find(([vspecifier]) => {
        if (!vspecifier.startsWith(`${pkg}@`)) return;
        const split2 = vspecifier.slice(pkg.length).split("/");
        split2.shift();
        return subpath === split2.join("/");
      });
      if (!found) return;
      !found[1].initialised && found[1].initialise();
      return found[1].exports.values;
    }
  }
});
ims.set("./bimport/index", {
  hash: 478135557,
  creator: function (require2, exports) {
    "use strict";

    var _bimport = require2("./bimport");
    var _brequire = require2("./brequire");
    globalThis.bimport === void 0 && (globalThis.bimport = _bimport.bimport);
    globalThis.brequire === void 0 && (globalThis.brequire = _brequire.brequire);
  }
});
ims.set("./bimport/requirejs", {
  hash: 2243979856,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./bundle", {
  hash: 2786310194,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Bundle = void 0;
    var _package = require2("./package");
    var _instances = require2("./instances");
    var _module = require2("./module");
    require2("./bimport");
    class Bundle2 extends Map {
      #type;
      get type() {
        return this.#type;
      }
      #name;
      get name() {
        return this.#name;
      }
      #vspecifier;
      get vspecifier() {
        return this.#vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      #module;
      get module() {
        return this.#module;
      }
      #uri;
      get uri() {
        return this.#uri;
      }
      constructor(specs, uri) {
        super();
        if (typeof specs !== "object") throw new Error("Bundle creation specification is not defined");
        const name = this.#name = specs.name ? specs.name : specs.type;
        if (!name) throw new Error("Invalid bundle creation specification");
        this.#module = new _module.Module(specs.module);
        this.#uri = uri;
        this.#type = specs.type;
        const {
          multibundle,
          vspecifier,
          specifier
        } = this.#module;
        this.#vspecifier = multibundle ? `${vspecifier}.${name}` : vspecifier;
        this.#specifier = multibundle ? `${specifier}.${name}` : specifier;
        _instances.instances.register(this);
      }
      package(language) {
        if (language && language.length !== 2) throw new Error(`Language "${language}" is invalid`);
        language = !language ? "" : language;
        if (this.has(language)) return this.get(language);
        const pkg = new _package.Package(this, language);
        this.set(language, pkg);
        return pkg;
      }
    }
    exports.Bundle = Bundle2;
  }
});
ims.set("./events/index", {
  hash: 1779469688,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Events = void 0;
    class Events2 {
      #specs;
      #listeners = /* @__PURE__ */new Map();
      #destroyed = false;
      get destroyed() {
        return this.#destroyed;
      }
      constructor(specs) {
        specs = specs ? specs : {};
        if (specs.supported && !(specs.supported instanceof Array)) throw new Error("Invalid parameters");
        this.#specs = specs;
        if (specs.bind) {
          specs.bind.bind = (event, listener, priority) => this.on(event, listener, priority);
          specs.bind.unbind = (event, listener) => this.off(event, listener);
        }
      }
      on(event, listener, priority) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        if (this.#specs.supported && !this.#specs.supported.includes(event)) {
          throw new Error(`Event "${event}" is not defined`);
        }
        if (typeof listener !== "function") {
          throw new Error("Listener is not a function");
        }
        this.off(event, listener);
        const l = this.#listeners.has(event) ? this.#listeners.get(event) : [];
        this.#listeners.set(event, l);
        l.push({
          listener,
          priority: priority ? priority : 0
        });
        return this;
      }
      bind = (event, listener, priority) => this.on(event, listener, priority);
      off(event, listener, force) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        if (!event) {
          throw new Error(`Event name not specified`);
        }
        if (this.#specs.supported && !this.#specs.supported.includes(event)) {
          throw new Error(`Event "${event}" is not defined`);
        }
        if (!listener) {
          if (!force) throw new Error("Listener function not set");
          this.#listeners.delete(event);
          return this;
        }
        if (!this.#listeners.has(event)) {
          return this;
        }
        const e = this.#listeners.get(event);
        const filtered = e.filter(item => item.listener !== listener);
        this.#listeners.set(event, filtered);
        return this;
      }
      unbind = (event, listener, force) => this.off(event, listener, force);
      trigger(event, ...rest) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        event = typeof event === "string" ? {
          "name": event
        } : event;
        if (typeof event !== "object") throw new Error("Invalid parameters");
        if (typeof event.name !== "string") throw new Error("Invalid event name");
        if (this.#specs.supported && !this.#specs.supported.includes(event.name)) {
          throw new Error(`Event "${event.name}" is not defined`);
        }
        let args = [...arguments];
        args.shift();
        if (!this.#listeners.has(event.name)) return;
        let l = this.#listeners.get(event.name);
        l.sort((a, b) => b.priority - a.priority);
        if (event.async) {
          const trigger = async function () {
            const promises = [];
            for (let listener of l) {
              promises.push(listener.listener(...args));
            }
            await Promise.all(promises);
          };
          return trigger.call(this, ...args).catch(exc => console.error(exc.stack));
        } else {
          for (let listener of l) {
            listener.listener(...args);
          }
        }
      }
      destroy() {
        this.#destroyed = true;
        this.#listeners.clear();
      }
    }
    exports.Events = Events2;
  }
});
ims.set("./events/types", {
  hash: 1632705009,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./instances", {
  hash: 1214802090,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.instances = void 0;
    const instances2 = new class extends Map {
      register(bundle) {
        this.set(bundle.vspecifier, bundle);
      }
    }();
    exports.instances = instances2;
  }
});
ims.set("./module/index", {
  hash: 2402746124,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Module = void 0;
    class Module2 {
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      #vspecifier;
      get vspecifier() {
        return this.#vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      #version;
      get version() {
        return this.#version;
      }
      #subpath;
      get subpath() {
        return this.#subpath;
      }
      #multibundle;
      get multibundle() {
        return this.#multibundle;
      }
      constructor(specs) {
        this.#vspecifier = specs.vspecifier;
        this.#multibundle = specs.multibundle;
        const split = specs.vspecifier.split("/");
        const scope = split[0].startsWith("@") ? split.shift() : void 0;
        const [name, version] = split.shift().split("@");
        this.#subpath = split.join("/");
        this.#pkg = scope ? `${scope}/${name}` : name;
        this.#version = version;
        this.#specifier = this.#pkg + (this.#subpath ? `/${this.#subpath}` : "");
      }
      async execute(action, params) {
        const {
          backends
        } = await beyond.import("@beyond-js/backend/client");
        return await backends.execute(this.#pkg, "legacy", this.#subpath, action, params);
      }
    }
    exports.Module = Module2;
  }
});
ims.set("./package/dependencies", {
  hash: 3724344928,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default extends Map {
      #pkg;
      constructor(pkg) {
        super();
        this.#pkg = pkg;
      }
      update(deps) {
        this.clear();
        deps?.forEach(([specifier, dependency]) => {
          if (!dependency) {
            throw new Error(`Dependency "${specifier}" not found on package "${this.#pkg.vspecifier}"`);
          }
          const {
            __beyond_transversal: transversal
          } = dependency;
          dependency = transversal ? transversal.bundles.get(specifier) : dependency;
          this.set(specifier, dependency);
        });
      }
    }
    exports.default = _default;
  }
});
ims.set("./package/exports", {
  hash: 3682924180,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _trace = require2("./ims/require/trace");
    class _default {
      #require;
      #values = {};
      get values() {
        return this.#values;
      }
      descriptor;
      process;
      constructor(require3) {
        this.#require = require3;
        this.#values.hmr = {
          on: (event, listener) => require3.pkg.hmr.on(event, listener),
          off: (event, listener) => require3.pkg.hmr.off(event, listener)
        };
        this.#values.__beyond_pkg = this.#require.pkg;
      }
      set(key, value) {
        this.#values[key] = value;
      }
      update() {
        const require3 = id => {
          const trace = new _trace.Trace();
          trace.register("exports.update", id);
          return this.#require.solve(id, trace);
        };
        this.process?.({
          require: require3
        });
        const reserved = ["__beyond_pkg", "hmr"];
        Object.keys(this.#values).forEach(p => !reserved.includes(p) && delete this.#values[p]);
        this.descriptor?.forEach(({
          im,
          from,
          name
        }) => {
          const trace = new _trace.Trace();
          this.#values[name] = this.#require.solve(im, trace)[from];
        });
      }
    }
    exports.default = _default;
  }
});
ims.set("./package/ims/exports", {
  hash: 3697874831,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.IMExports = void 0;
    class IMExports {
      constructor(im, bexports) {
        return new Proxy(this, {
          set: (self, name, value) => {
            self[name] = value;
            const prop = bexports.descriptor?.find(({
              im: id,
              from
            }) => {
              return im.id === id && name === from;
            });
            prop && bexports.set(prop.name, value);
            prop && bexports.process?.({
              prop: prop.name,
              value
            });
            return true;
          }
        });
      }
    }
    exports.IMExports = IMExports;
  }
});
ims.set("./package/ims/im", {
  hash: 2241059934,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.InternalModule = void 0;
    var _trace = require2("./require/trace");
    var _exports = require2("./exports");
    class InternalModule {
      #pkg;
      get package() {
        return this.#pkg;
      }
      #id;
      get id() {
        return this.#id;
      }
      #hash;
      get hash() {
        return this.#hash;
      }
      #require;
      #exports;
      #creator;
      #creating = false;
      #created = false;
      get created() {
        return this.#created;
      }
      #create = trace => {
        if (this.#created) throw new Error(`Internal module "${this.#id}" already created`);
        if (this.#creating) throw new Error(`Cyclical import found on internal module "${this.#id}"`);
        this.#creating = true;
        const require3 = id => this.#require.solve(id, trace, this);
        Object.keys(this.#exports).forEach(key => delete this.#exports[key]);
        this.#creator(require3, this.#exports);
        this.#created = true;
        this.#creating = false;
      };
      require(trace, source) {
        if (!this.#created) {
          source && trace.register(source.id, this.#id);
          this.#create(trace);
          trace.pop();
        }
        return this.#exports;
      }
      initialise() {
        if (this.#created) return;
        const trace = new _trace.Trace();
        trace.register("initialisation", this.#id);
        this.#create(trace);
      }
      update(creator, hash) {
        this.#created = false;
        this.#creator = creator;
        this.#hash = hash;
      }
      constructor(pkg, id, hash, creator, require3) {
        this.#pkg = pkg;
        this.#id = id;
        this.#hash = hash;
        this.#creator = creator;
        this.#require = require3;
        this.#exports = new _exports.IMExports(this, pkg.exports);
      }
    }
    exports.InternalModule = InternalModule;
  }
});
ims.set("./package/ims/index", {
  hash: 993201032,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.InternalModules = void 0;
    var _im = require2("./im");
    class InternalModules {
      #pkg;
      #ims = /* @__PURE__ */new Map();
      #require;
      constructor(pkg) {
        this.#pkg = pkg;
      }
      set _require(value) {
        this.#require = value;
      }
      #register = (id, hash, creator) => {
        if (this.#ims.has(id)) throw new Error(`IM "${id}" already registered`);
        const im = new _im.InternalModule(this.#pkg, id, hash, creator, this.#require);
        this.#ims.set(im.id, im);
      };
      register(ims2) {
        ims2.forEach(({
          creator,
          hash
        }, id) => this.#register(id, hash, creator));
      }
      require(id, trace, source) {
        const module2 = (() => {
          if (this.#ims.has(id)) return id;
          return id.endsWith("/") ? `${id}index` : `${id}/index`;
        })();
        if (!this.#ims.has(module2)) {
          throw new Error(`Internal module "${id}" not found`);
        }
        const im = this.#ims.get(module2);
        return im.require(trace, source);
      }
      initialise() {
        this.#ims.forEach(im => im.initialise());
      }
      update(ims2) {
        ims2.forEach(({
          creator,
          hash
        }, id) => {
          if (!this.#ims.has(id)) {
            this.#register(id, hash, creator);
            return;
          }
          const im = this.#ims.get(id);
          if (im.hash === hash) return;
          im.update(creator, hash);
          this.#pkg.hmr.trigger(`${id}:change`);
        });
      }
    }
    exports.InternalModules = InternalModules;
  }
});
ims.set("./package/ims/require/index", {
  hash: 12273943,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Require = void 0;
    var _base = require2("../../../base");
    class Require {
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      constructor(pkg) {
        this.#pkg = pkg;
      }
      solve(specifier, trace, im) {
        if (specifier.startsWith(".")) {
          specifier = im ? (0, _base.resolve)(im.id, specifier) : specifier;
          return this.#pkg.ims.require(specifier, trace, im);
        }
        if (specifier === "beyond_context") {
          const {
            bundle
          } = this.#pkg;
          return {
            module: bundle.module,
            bundle,
            pkg: this.#pkg
          };
        }
        if (specifier === "@beyond-js/kernel/bundle") {
          const {
            Bundle: Bundle2
          } = require2("../../../bundle");
          const {
            instances: instances2
          } = require2("../../../instances");
          return {
            Bundle: Bundle2,
            instances: instances2
          };
        }
        const {
          dependencies
        } = this.#pkg;
        if (dependencies.has(specifier)) {
          const {
            __beyond_pkg: pkg
          } = dependencies.get(specifier);
          typeof pkg === "object" && !pkg.initialised && pkg.initialise();
          return dependencies.get(specifier);
        }
        const keys = JSON.stringify([...dependencies.keys()]);
        throw new Error(`Bundle "${specifier}" is not registered as a dependency: ${keys}`);
      }
    }
    exports.Require = Require;
  }
});
ims.set("./package/ims/require/trace", {
  hash: 1932027471,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Trace = void 0;
    class Trace extends Array {
      has = id => this.find(rt => rt.id === id);
      register(source, id) {
        if (this.has(id)) {
          let traced = "";
          this.forEach(({
            id: id2,
            source: source2
          }) => {
            const s = ["initialisation", "exports.update"].includes(source2) ? "Cycle initiates with source" : `then "${source2}" requires`;
            traced += `	${s} "${id2}"
`;
          });
          traced += `	that finally requires "${id}" again.
`;
          throw new Error(`Recursive module load found.
Internal module "${source}" is requiring another internal module that was previously required: "${id}"
Trace of required modules:
${traced}`);
        }
        this.push({
          id,
          source
        });
      }
    }
    exports.Trace = Trace;
  }
});
ims.set("./package/index", {
  hash: 458850112,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Package = void 0;
    var _ims = require2("./ims");
    var _require = require2("./ims/require");
    var _exports = require2("./exports");
    var _dependencies = require2("./dependencies");
    var _instances = require2("./instances");
    var _events = require2("../events");
    class Package2 {
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #language;
      get language() {
        return this.#language;
      }
      #vspecifier;
      get vspecifier() {
        return this.#vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      #require;
      #ims;
      get ims() {
        return this.#ims;
      }
      #exports;
      get exports() {
        return this.#exports;
      }
      #dependencies = new _dependencies.default(this);
      get dependencies() {
        return this.#dependencies;
      }
      #hmr = new _events.Events();
      get hmr() {
        return this.#hmr;
      }
      constructor(bundle, language) {
        this.#bundle = bundle;
        this.#language = language ? language : "";
        this.#vspecifier = language ? `${bundle.vspecifier}.${language}` : bundle.vspecifier;
        this.#specifier = language ? `${bundle.specifier}.${language}` : bundle.specifier;
        this.#ims = new _ims.InternalModules(this);
        this.#require = new _require.Require(this);
        this.#ims._require = this.#require;
        this.#exports = new _exports.default(this.#require);
        _instances.default.register(this);
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      initialise(ims2) {
        if (this.#initialised) throw new Error("Package already initialised");
        this.#initialised = true;
        ims2 && this.#ims.register(ims2);
        this.exports.update();
        this.#ims.initialise();
      }
      update(ims2) {
        this.#ims.update(ims2);
        this.exports.update();
        this.#ims.initialise();
        this.#hmr.trigger("change");
      }
    }
    exports.Package = Package2;
  }
});
ims.set("./package/instances", {
  hash: 2745122839,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = new class extends Map {
      register(pkg) {
        this.set(pkg.vspecifier, pkg);
      }
    }();
    exports.default = _default;
  }
});
__pkg.exports.descriptor = [{
  "im": "./bimport/bimport",
  "from": "bimport",
  "name": "bimport"
}, {
  "im": "./bimport/brequire",
  "from": "brequire",
  "name": "brequire"
}, {
  "im": "./bundle",
  "from": "IBundleSpecs",
  "name": "IBundleSpecs"
}, {
  "im": "./bundle",
  "from": "Bundle",
  "name": "Bundle"
}, {
  "im": "./events/index",
  "from": "Events",
  "name": "Events"
}, {
  "im": "./events/types",
  "from": "ListenerFunction",
  "name": "ListenerFunction"
}, {
  "im": "./instances",
  "from": "instances",
  "name": "instances"
}, {
  "im": "./module/index",
  "from": "Module",
  "name": "Module"
}, {
  "im": "./package/exports",
  "from": "IExportsDescriptor",
  "name": "IExportsDescriptor"
}, {
  "im": "./package/ims/im",
  "from": "IMSpecs",
  "name": "IMSpecs"
}, {
  "im": "./package/ims/index",
  "from": "IMCreators",
  "name": "IMCreators"
}, {
  "im": "./package/index",
  "from": "Package",
  "name": "Package"
}];
var bimport, brequire, IBundleSpecs, Bundle, Events, ListenerFunction, instances, Module, IExportsDescriptor, IMSpecs, IMCreators, Package;
__pkg.exports.process = function (require2) {
  bimport = require2("./bimport/bimport").bimport;
  brequire = require2("./bimport/brequire").brequire;
  IBundleSpecs = require2("./bundle").IBundleSpecs;
  Bundle = require2("./bundle").Bundle;
  Events = require2("./events/index").Events;
  ListenerFunction = require2("./events/types").ListenerFunction;
  instances = require2("./instances").instances;
  Module = require2("./module/index").Module;
  IExportsDescriptor = require2("./package/exports").IExportsDescriptor;
  IMSpecs = require2("./package/ims/im").IMSpecs;
  IMCreators = require2("./package/ims/index").IMCreators;
  Package = require2("./package/index").Package;
};
var __bp = {};
ims.get("./base/index").creator(() => 0, __bp);
__pkg = new __bp.BeyondPackage(__pkg.exports);
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS4wLjEuOS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9iYXNlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL2JpbXBvcnQvYmltcG9ydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9iaW1wb3J0L2JyZXF1aXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL2JpbXBvcnQvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvYmltcG9ydC9yZXF1aXJlanMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvYnVuZGxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL2V2ZW50cy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9ldmVudHMvdHlwZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvaW5zdGFuY2VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL21vZHVsZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9wYWNrYWdlL2RlcGVuZGVuY2llcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9wYWNrYWdlL2V4cG9ydHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvZXhwb3J0cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9wYWNrYWdlL2ltcy9pbS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9wYWNrYWdlL2ltcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9wYWNrYWdlL2ltcy9yZXF1aXJlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW1zL3JlcXVpcmUvdHJhY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9wYWNrYWdlL2luc3RhbmNlcy50cyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkJ1bmRsZSIsIkV2ZW50cyIsIklCdW5kbGVTcGVjcyIsIklFeHBvcnRzRGVzY3JpcHRvciIsIklNQ3JlYXRvcnMiLCJJTVNwZWNzIiwiTGlzdGVuZXJGdW5jdGlvbiIsIk1vZHVsZSIsIlBhY2thZ2UiLCJiaW1wb3J0IiwiYnJlcXVpcmUiLCJpbnN0YW5jZXMiLCJtb2R1bGUiLCJyZXNvbHZlIiwic291cmNlIiwiaWQiLCJzdGFydHNXaXRoIiwiRXJyb3IiLCJzcGxpdCIsInBvcCIsInRhcmdldCIsInNsaWNlIiwibGVuZ3RoIiwic2hpZnQiLCJqb2luIiwiQmV5b25kUGFja2FnZSIsIk1hcCIsImNvbnN0cnVjdG9yIiwiZXhwb3J0cyIsImluaXRpYWxpc2UiLCJpbXMiLCJwcm9jZXNzIiwicmVxdWlyZSIsImhhcyIsImVuZHNXaXRoIiwiZ2V0IiwiZm4iLCJjcmVhdG9yIiwicmVxdWlyZWQiLCJzZXQiLCJyZXNvdXJjZSIsInZlcnNpb24iLCJtb2RlIiwiUHJvbWlzZSIsInJlamVjdCIsImVycm9yIiwiYW1kX3JlcXVpcmUiLCJyZXR1cm5lZCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsImdsb2JhbFRoaXMiLCJTeXN0ZW0iLCJpbXBvcnQiLCJhcHBEZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmNpZXMiLCJfX2FwcF9wYWNrYWdlIiwic3BlY2lmaWVyIiwidGVzdCIsInBrZyIsInN1YnBhdGgiLCJmb3VuZCIsImZpbmQiLCJ2c3BlY2lmaWVyIiwiaW5pdGlhbGlzZWQiLCJ2YWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZSIsInR5cGUiLCJuYW1lIiwidXJpIiwic3BlY3MiLCJtdWx0aWJ1bmRsZSIsInJlZ2lzdGVyIiwicGFja2FnZSIsImxhbmd1YWdlIiwiZGVzdHJveWVkIiwic3VwcG9ydGVkIiwiQXJyYXkiLCJiaW5kIiwiZXZlbnQiLCJsaXN0ZW5lciIsInByaW9yaXR5Iiwib24iLCJ1bmJpbmQiLCJvZmYiLCJpbmNsdWRlcyIsImwiLCJwdXNoIiwiZm9yY2UiLCJkZWxldGUiLCJlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJpdGVtIiwidHJpZ2dlciIsInJlc3QiLCJhcmdzIiwiYXJndW1lbnRzIiwic29ydCIsImEiLCJiIiwiYXN5bmMiLCJwcm9taXNlcyIsImFsbCIsImNhbGwiLCJjYXRjaCIsImRlc3Ryb3kiLCJjbGVhciIsImJ1bmRsZSIsInNjb3BlIiwiZXhlY3V0ZSIsImFjdGlvbiIsInBhcmFtcyIsImJhY2tlbmRzIiwiYmV5b25kIiwidXBkYXRlIiwiZGVwcyIsImZvckVhY2giLCJkZXBlbmRlbmN5IiwiX19iZXlvbmRfdHJhbnN2ZXJzYWwiLCJ0cmFuc3ZlcnNhbCIsImJ1bmRsZXMiLCJkZXNjcmlwdG9yIiwiaG1yIiwiX19iZXlvbmRfcGtnIiwia2V5IiwidHJhY2UiLCJUcmFjZSIsInNvbHZlIiwicmVzZXJ2ZWQiLCJrZXlzIiwicCIsImltIiwiZnJvbSIsIklNRXhwb3J0cyIsImJleHBvcnRzIiwiUHJveHkiLCJzZWxmIiwicHJvcCIsIkludGVybmFsTW9kdWxlIiwiaGFzaCIsImNyZWF0ZWQiLCJJbnRlcm5hbE1vZHVsZXMiLCJfcmVxdWlyZSIsIlJlcXVpcmUiLCJKU09OIiwic3RyaW5naWZ5IiwicnQiLCJ0cmFjZWQiLCJzIiwiRGVwZW5kZW5jaWVzIiwiRXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNTTSxTQUFVQyxRQUFRQyxRQUFnQkMsSUFBVTtNQUM5QyxJQUFJLENBQUNBLEdBQUdDLFdBQVcsR0FBRyxHQUFHLE1BQU0sSUFBSUMsTUFBTSwwQ0FBMENGLEtBQUs7TUFPeEYsTUFBTUcsUUFBZTtNQUNyQkEsTUFBTUosU0FBU0EsT0FBT0ksTUFBTSxHQUFHO01BQy9CQSxNQUFNSixPQUFPSyxLQUFHO01BQ2hCRCxNQUFNRSxVQUFVTCxHQUFHQyxXQUFXLElBQUksSUFBSUQsR0FBR00sTUFBTSxDQUFDLElBQUlOLElBQUlHLE1BQU0sS0FBSztNQUNuRSxPQUFPQSxNQUFNRSxPQUFPLE9BQU8sTUFBTUYsTUFBTUUsT0FBT0UsU0FBUyxHQUFHO1FBQ3RESixNQUFNRSxPQUFPRyxPQUFLO1FBQ2xCTCxNQUFNSixPQUFPSyxLQUFHOztNQUdwQixPQUFPRCxNQUFNSixPQUFPVSxLQUFLLEdBQUcsSUFBSSxNQUFNTixNQUFNRSxPQUFPSSxLQUFLLEdBQUc7SUFDL0Q7SUFLTSxNQUFPQyxjQUFhO01BQ3RCO01BQ1MsVUFBNEMsbUJBQUlDLEtBQUc7TUFFNUQ7TUFFQUMsWUFBWUMsVUFBWTtRQUNwQixLQUFLLFdBQVdBO01BQ3BCO01BRUFDLFdBQVdDLE1BQTBCO1FBQ2pDLEtBQUssT0FBT0E7UUFDWixLQUFLLFNBQVNDLFFBQVEsQ0FBQ2hCLElBQVlELFdBQXlCLEtBQUtrQixRQUFRakIsSUFBSUQsTUFBTSxHQUFHLEVBQUU7TUFDNUY7TUFTQWtCLFFBQVFqQixJQUFZRCxRQUFlO1FBQy9CQyxLQUFLRCxTQUFTRCxRQUFRQyxRQUFRQyxFQUFFLElBQUlBO1FBRXBDLE1BQU1ILFdBQVUsTUFBSztVQUNqQixJQUFJLEtBQUssS0FBS3FCLElBQUlsQixFQUFFLEdBQUcsT0FBT0E7VUFDOUIsT0FBT0EsR0FBR21CLFNBQVMsR0FBRyxJQUFJLEdBQUduQixZQUFZLEdBQUdBO1FBQ2hELElBQUM7UUFFRCxJQUFJLEtBQUssUUFBUWtCLElBQUlyQixPQUFNLEdBQUcsT0FBTyxLQUFLLFFBQVF1QixJQUFJdkIsT0FBTTtRQUM1RCxJQUFJLENBQUMsS0FBSyxLQUFLcUIsSUFBSXJCLE9BQU0sR0FBRyxNQUFNLElBQUlLLE1BQU0sb0JBQW9CRixlQUFlO1FBRS9FLE1BQU1xQixLQUFLLEtBQUssS0FBS0QsSUFBSXZCLE9BQU0sRUFBRXlCO1FBQ2pDLE1BQU1MLFdBQVdNLFlBQXFCLEtBQUtOLFFBQVFNLFVBQVUxQixPQUFNO1FBQ25FLE1BQU1nQixXQUFVO1FBQ2hCUSxHQUFHSixVQUFTSixRQUFPO1FBRW5CLEtBQUssUUFBUVcsSUFBSTNCLFNBQVFnQixRQUFPO1FBQ2hDLE9BQU9BO01BQ1g7O0lBQ0hBOzs7Ozs7Ozs7Ozs7SUN6RURJO0lBY2lCLFNBQVV2QixTQUFRK0IsVUFBa0JDLFNBQWdCO01BQ2pFLElBQUloQyxTQUFRaUMsU0FBUyxPQUFPO1FBQ3hCLE9BQU8sSUFBSUMsUUFBYSxDQUFDOUIsU0FBUytCLFdBQVU7VUFDeEMsSUFBSSxPQUFPSixhQUFhLFVBQVUsTUFBTTtVQUN4Q0EsV0FBV0EsU0FBU04sU0FBUyxLQUFLLElBQUlNLFNBQVNuQixNQUFNLEdBQUdtQixTQUFTbEIsU0FBUyxDQUFDLElBQUlrQjtVQUUvRSxNQUFNSyxRQUFRLElBQUk1QixNQUFNLHVDQUF1Q3VCLFdBQVc7VUFDMUVNLFlBQVksQ0FBQ04sUUFBUSxHQUNoQk8sWUFBa0JsQyxRQUFRa0MsUUFBUSxHQUNsQ0MsT0FBYztZQUNYQyxRQUFRSixNQUFNLDJCQUEyQkwsWUFBWTtZQUNyRFMsUUFBUUMsSUFBSUYsSUFBSUcsS0FBSztZQUNyQlAsT0FBT0MsS0FBSztVQUNoQixDQUFDO1FBRVQsQ0FBQztpQkFDTXBDLFNBQVFpQyxTQUFTLE9BQU87UUFDL0IsT0FBYVUsV0FBWUMsT0FBT0MsT0FBT2QsWUFBWUMsVUFBVSxZQUFZQSxZQUFZLEdBQUc7YUFDckY7UUFDSCxPQUFPLE9BQU9ELFlBQVlDLFVBQVUsWUFBWUEsWUFBWTs7SUFFcEU7SUFFQWhDLFNBQVFpQyxRQUFRLE1BQUs7TUFDakIsSUFBSSxPQUFPSSxnQkFBZ0IsWUFBWSxPQUFPO01BQzlDLE1BQU07UUFBQ087TUFBTSxJQUFVRDtNQUN2QixJQUFJLE9BQU9DLFdBQVcsWUFBWSxPQUFPQSxPQUFPQyxXQUFXLFlBQVksT0FBTztNQUM5RSxPQUFPO0lBQ1gsSUFBQztJQUVELE1BQU1DLG1CQUFtQixNQUFLO01BQzFCLE1BQU1DLGVBQXFCSixXQUFZSyxlQUFlRDtNQUN0RCxPQUFPLElBQUk5QixJQUFJOEIsWUFBWTtJQUMvQixJQUFDO0lBRUQvQyxTQUFRSSxVQUFXLENBQUM2QyxXQUFtQkYsaUJBQTZCO01BQ2hFLElBQUksZUFBZUcsS0FBS0QsU0FBUyxHQUFHLE9BQU9BO01BRTNDLE1BQU14QyxRQUFRd0MsVUFBVXhDLE1BQU0sR0FBRztNQUNqQyxNQUFNMEMsTUFBTTFDLE1BQU0sR0FBR0YsV0FBVyxHQUFHLElBQUksR0FBR0UsTUFBTUssT0FBSyxJQUFNTCxNQUFNSyxPQUFLLEtBQU9MLE1BQU1LLE9BQUs7TUFFeEYsTUFBTWtCLFdBQVcsTUFBSztRQUNsQixJQUFJZSxhQUFhdkIsSUFBSTJCLEdBQUcsR0FBRyxPQUFPSixhQUFhckIsSUFBSXlCLEdBQUc7UUFDdEQsSUFBSUwsZ0JBQWdCdEIsSUFBSTJCLEdBQUcsR0FBRyxPQUFPTCxnQkFBZ0JwQixJQUFJeUIsR0FBRztNQUNoRSxJQUFDO01BQ0QsSUFBSSxDQUFDbkIsU0FBUyxPQUFPaUI7TUFFckIsTUFBTUcsVUFBVTNDLE1BQU1NLEtBQUssR0FBRztNQUM5QixPQUFPLEdBQUdvQyxPQUFPbkIsYUFBYW9CLFVBQVUsSUFBSUEsWUFBWTtJQUM1RDs7Ozs7Ozs7Ozs7O0lDL0RBO0lBZWlCLFNBQVVuRCxVQUFTZ0QsV0FBaUI7TUFDakQsTUFBTXhDLFFBQVF3QyxVQUFVeEMsTUFBTSxHQUFHO01BQ2pDLE1BQU0wQyxNQUFNMUMsTUFBTSxHQUFHRixXQUFXLEdBQUcsSUFBSSxHQUFHRSxNQUFNSyxPQUFLLElBQU1MLE1BQU1LLE9BQUssS0FBT0wsTUFBTUssT0FBSztNQUN4RixNQUFNc0MsVUFBVTNDLE1BQU1NLEtBQUssR0FBRztNQUU5QixNQUFNc0MsUUFBUSxDQUFDLEdBQUduRCxrQkFBUyxFQUFFb0QsS0FBSyxDQUFDLENBQUNDLFVBQVUsTUFBSztRQUMvQyxJQUFJLENBQUNBLFdBQVdoRCxXQUFXLEdBQUc0QyxNQUFNLEdBQUc7UUFDdkMsTUFBTTFDLFNBQVE4QyxXQUFXM0MsTUFBTXVDLElBQUl0QyxNQUFNLEVBQUVKLE1BQU0sR0FBRztRQUNwREEsT0FBTUssT0FBSztRQUNYLE9BQU9zQyxZQUFZM0MsT0FBTU0sS0FBSyxHQUFHO01BQ3JDLENBQUM7TUFDRCxJQUFJLENBQUNzQyxPQUFPO01BRVosQ0FBQ0EsTUFBTSxHQUFHRyxlQUFlSCxNQUFNLEdBQUdqQyxZQUFVO01BQzVDLE9BQU9pQyxNQUFNLEdBQUdsQyxRQUFRc0M7SUFDNUI7Ozs7Ozs7O0lDOUJBO0lBQ0E7SUFLTWQsV0FBWTNDLFlBQVksV0FBaUIyQyxXQUFZM0MsVUFBVUE7SUFDL0QyQyxXQUFZMUMsYUFBYSxXQUFpQjBDLFdBQVkxQyxXQUFXQTs7Ozs7O0lDUHZFOztJQUVBeUQ7TUFDQUM7SUFDQTs7Ozs7Ozs7Ozs7O0lDSkE7SUFDQTtJQUNBO0lBQ0FwQztJQVNpQixNQUNYaEMsZ0JBQWUwQixJQUFvQjtNQUM1QjtNQUNULElBQUkyQyxPQUFJO1FBQ0osT0FBTyxLQUFLO01BQ2hCO01BRVM7TUFDVCxJQUFJQyxPQUFJO1FBQ0osT0FBTyxLQUFLO01BQ2hCO01BRVM7TUFDVCxJQUFJTixhQUFVO1FBQ1YsT0FBTyxLQUFLO01BQ2hCO01BRVM7TUFDVCxJQUFJTixZQUFTO1FBQ1QsT0FBTyxLQUFLO01BQ2hCO01BRVM7TUFDVCxJQUFJOUMsU0FBTTtRQUNOLE9BQU8sS0FBSztNQUNoQjtNQUVTO01BQ1QsSUFBSTJELE1BQUc7UUFDSCxPQUFPLEtBQUs7TUFDaEI7TUFFQTVDLFlBQVk2QyxPQUFxQkQsS0FBWTtRQUN6QyxPQUFLO1FBRUwsSUFBSSxPQUFPQyxVQUFVLFVBQVUsTUFBTSxJQUFJdkQsTUFBTSw4Q0FBOEM7UUFFN0YsTUFBTXFELE9BQU8sS0FBSyxRQUFRRSxNQUFNRixPQUFPRSxNQUFNRixPQUFPRSxNQUFNSDtRQUMxRCxJQUFJLENBQUNDLE1BQU0sTUFBTSxJQUFJckQsTUFBTSx1Q0FBdUM7UUFFbEUsS0FBSyxVQUFVLElBQUlWLGVBQU9pRSxNQUFNNUQsTUFBTTtRQUN0QyxLQUFLLE9BQU8yRDtRQUNaLEtBQUssUUFBUUMsTUFBTUg7UUFFbkIsTUFBTTtVQUFDSTtVQUFhVDtVQUFZTjtRQUFTLElBQUksS0FBSztRQUNsRCxLQUFLLGNBQWNlLGNBQWMsR0FBR1QsY0FBY00sU0FBU047UUFDM0QsS0FBSyxhQUFhUyxjQUFjLEdBQUdmLGFBQWFZLFNBQVNaO1FBRXpEL0MscUJBQVUrRCxTQUFTLElBQUk7TUFDM0I7TUFFQUMsUUFBUUMsVUFBaUI7UUFDckIsSUFBSUEsWUFBWUEsU0FBU3RELFdBQVcsR0FBRyxNQUFNLElBQUlMLE1BQU0sYUFBYTJELHNCQUFzQjtRQUMxRkEsV0FBVyxDQUFDQSxXQUFXLEtBQUtBO1FBRTVCLElBQUksS0FBSzNDLElBQUkyQyxRQUFRLEdBQUcsT0FBTyxLQUFLekMsSUFBSXlDLFFBQVE7UUFFaEQsTUFBTWhCLE1BQU0sSUFBSXBELGlCQUFRLE1BQU1vRSxRQUFRO1FBQ3RDLEtBQUtyQyxJQUFJcUMsVUFBVWhCLEdBQUc7UUFDdEIsT0FBT0E7TUFDWDs7SUFDSGhDOzs7Ozs7Ozs7Ozs7SUN2RWdCLE1BQ1gzQixRQUFNO01BQ1I7TUFDQSxhQUEyQyxtQkFBSXlCLEtBQUc7TUFDbEQsYUFBYTtNQUNiLElBQUltRCxZQUFTO1FBQ1QsT0FBTyxLQUFLO01BQ2hCO01BRUFsRCxZQUFZNkMsT0FBbUI7UUFDM0JBLFFBQVFBLFFBQVFBLFFBQVE7UUFFeEIsSUFBSUEsTUFBTU0sYUFBYSxFQUFFTixNQUFNTSxxQkFBcUJDLFFBQVEsTUFBTSxJQUFJOUQsTUFBTSxvQkFBb0I7UUFDaEcsS0FBSyxTQUFTdUQ7UUFFZCxJQUFJQSxNQUFNUSxNQUFNO1VBQ1pSLE1BQU1RLEtBQUtBLE9BQU8sQ0FBQ0MsT0FBZUMsVUFBNEJDLGFBQ2xELEtBQUtDLEdBQUdILE9BQU9DLFVBQVVDLFFBQVE7VUFDN0NYLE1BQU1RLEtBQUtLLFNBQVMsQ0FBQ0osT0FBT0MsYUFBYSxLQUFLSSxJQUFJTCxPQUFPQyxRQUFROztNQUV6RTtNQVVBRSxHQUFHSCxPQUFlQyxVQUE0QkMsVUFBaUI7UUFDM0QsSUFBSSxLQUFLLFlBQVk7VUFDakIsTUFBTSxJQUFJbEUsTUFBTSw0QkFBNEI7O1FBRWhELElBQUksS0FBSyxPQUFPNkQsYUFBYSxDQUFDLEtBQUssT0FBT0EsVUFBVVMsU0FBU04sS0FBSyxHQUFHO1VBQ2pFLE1BQU0sSUFBSWhFLE1BQU0sVUFBVWdFLHVCQUF1Qjs7UUFFckQsSUFBSSxPQUFPQyxhQUFhLFlBQVk7VUFDaEMsTUFBTSxJQUFJakUsTUFBTSw0QkFBNEI7O1FBR2hELEtBQUtxRSxJQUFJTCxPQUFPQyxRQUFRO1FBRXhCLE1BQU1NLElBQXFCLEtBQUssV0FBV3ZELElBQUlnRCxLQUFLLElBQUksS0FBSyxXQUFXOUMsSUFBSThDLEtBQUssSUFBSTtRQUNyRixLQUFLLFdBQVcxQyxJQUFJMEMsT0FBT08sQ0FBQztRQUM1QkEsRUFBRUMsS0FBSztVQUFDUDtVQUFvQkMsVUFBVUEsV0FBV0EsV0FBVztRQUFDLENBQUM7UUFFOUQsT0FBTztNQUNYO01BRUFILE9BQU8sQ0FBQ0MsT0FBZUMsVUFBNEJDLGFBQy9DLEtBQUtDLEdBQUdILE9BQU9DLFVBQVVDLFFBQVE7TUFVckNHLElBQUlMLE9BQWVDLFVBQTRCUSxPQUFjO1FBQ3pELElBQUksS0FBSyxZQUFZO1VBQ2pCLE1BQU0sSUFBSXpFLE1BQU0sNEJBQTRCOztRQUVoRCxJQUFJLENBQUNnRSxPQUFPO1VBQ1IsTUFBTSxJQUFJaEUsTUFBTSwwQkFBMEI7O1FBRTlDLElBQUksS0FBSyxPQUFPNkQsYUFBYSxDQUFDLEtBQUssT0FBT0EsVUFBVVMsU0FBU04sS0FBSyxHQUFHO1VBQ2pFLE1BQU0sSUFBSWhFLE1BQU0sVUFBVWdFLHVCQUF1Qjs7UUFHckQsSUFBSSxDQUFDQyxVQUFVO1VBQ1gsSUFBSSxDQUFDUSxPQUFPLE1BQU0sSUFBSXpFLE1BQU0sMkJBQTJCO1VBQ3ZELEtBQUssV0FBVzBFLE9BQU9WLEtBQUs7VUFDNUIsT0FBTzs7UUFHWCxJQUFJLENBQUMsS0FBSyxXQUFXaEQsSUFBSWdELEtBQUssR0FBRztVQUM3QixPQUFPOztRQUdYLE1BQU1XLElBQUksS0FBSyxXQUFXekQsSUFBSThDLEtBQUs7UUFDbkMsTUFBTVksV0FBNEJELEVBQUVFLE9BQU9DLFFBQVFBLEtBQUtiLGFBQWFBLFFBQVE7UUFDN0UsS0FBSyxXQUFXM0MsSUFBSTBDLE9BQU9ZLFFBQVE7UUFFbkMsT0FBTztNQUNYO01BRUFSLFNBQVMsQ0FBQ0osT0FBZUMsVUFBNEJRLFVBQ2pELEtBQUtKLElBQUlMLE9BQU9DLFVBQVVRLEtBQUs7TUFTbkNNLFFBQVFmLFVBQW1CZ0IsTUFBUztRQUNoQyxJQUFJLEtBQUssWUFBWTtVQUNqQixNQUFNLElBQUloRixNQUFNLDRCQUE0Qjs7UUFHaERnRSxRQUFRLE9BQU9BLFVBQVUsV0FBVztVQUFDLFFBQVFBO1FBQUssSUFBSUE7UUFDdEQsSUFBSSxPQUFPQSxVQUFVLFVBQVUsTUFBTSxJQUFJaEUsTUFBTSxvQkFBb0I7UUFDbkUsSUFBSSxPQUFPZ0UsTUFBTVgsU0FBUyxVQUFVLE1BQU0sSUFBSXJELE1BQU0sb0JBQW9CO1FBRXhFLElBQUksS0FBSyxPQUFPNkQsYUFBYSxDQUFDLEtBQUssT0FBT0EsVUFBVVMsU0FBU04sTUFBTVgsSUFBSSxHQUFHO1VBQ3RFLE1BQU0sSUFBSXJELE1BQU0sVUFBVWdFLE1BQU1YLHNCQUFzQjs7UUFHMUQsSUFBSTRCLE9BQU8sQ0FBQyxHQUFHQyxTQUFTO1FBQ3hCRCxLQUFLM0UsT0FBSztRQUVWLElBQUksQ0FBQyxLQUFLLFdBQVdVLElBQUlnRCxNQUFNWCxJQUFJLEdBQUc7UUFFdEMsSUFBSWtCLElBQUksS0FBSyxXQUFXckQsSUFBSThDLE1BQU1YLElBQUk7UUFHdENrQixFQUFFWSxLQUFLLENBQUNDLEdBQUdDLE1BQU1BLEVBQUVuQixXQUFXa0IsRUFBRWxCLFFBQVE7UUFFeEMsSUFBSUYsTUFBTXNCLE9BQU87VUFFYixNQUFNUCxVQUFVLGtCQUFLO1lBRWpCLE1BQU1RLFdBQVc7WUFDakIsU0FBU3RCLFlBQVlNLEdBQUc7Y0FDcEJnQixTQUFTZixLQUFLUCxTQUFTQSxTQUFTLEdBQUdnQixJQUFJLENBQUM7O1lBRzVDLE1BQU12RCxRQUFROEQsSUFBSUQsUUFBUTtVQUU5QjtVQUVBLE9BQU9SLFFBQVFVLEtBQUssTUFBTSxHQUFHUixJQUFJLEVBQUVTLE1BQU8zRCxPQUFlQyxRQUFRSixNQUFNRyxJQUFJRyxLQUFLLENBQUM7ZUFFOUU7VUFDSCxTQUFTK0IsWUFBWU0sR0FBRztZQUNwQk4sU0FBU0EsU0FBUyxHQUFHZ0IsSUFBSTs7O01BR3JDO01BRUFVLFVBQU87UUFDSCxLQUFLLGFBQWE7UUFDbEIsS0FBSyxXQUFXQyxPQUFLO01BQ3pCOztJQUNIakY7Ozs7OztJQ3RKRDs7SUFFQXVDO01BQ0FDO0lBQ0E7Ozs7Ozs7Ozs7OztJQ0ZrQixNQUFNekQsYUFBWSxJQUFJLGNBQWNlLElBQUc7TUFDckRnRCxTQUFTb0MsUUFBYztRQUNuQixLQUFLdkUsSUFBSXVFLE9BQU85QyxZQUFZOEMsTUFBTTtNQUN0QztPQUNIO0lBQUFsRjs7Ozs7Ozs7Ozs7O0lDRWdCLE1BQ1hyQixRQUFNO01BQ0M7TUFDVCxJQUFJcUQsTUFBRztRQUNILE9BQU8sS0FBSztNQUNoQjtNQUVTO01BQ1QsSUFBSUksYUFBVTtRQUNWLE9BQU8sS0FBSztNQUNoQjtNQUVTO01BQ1QsSUFBSU4sWUFBUztRQUNULE9BQU8sS0FBSztNQUNoQjtNQUVTO01BQ1QsSUFBSWpCLFVBQU87UUFDUCxPQUFPLEtBQUs7TUFDaEI7TUFFUztNQUNULElBQUlvQixVQUFPO1FBQ1AsT0FBTyxLQUFLO01BQ2hCO01BRVM7TUFDVCxJQUFJWSxjQUFXO1FBQ1gsT0FBTyxLQUFLO01BQ2hCO01BRUE5QyxZQUFZNkMsT0FBbUI7UUFDM0IsS0FBSyxjQUFjQSxNQUFNUjtRQUN6QixLQUFLLGVBQWVRLE1BQU1DO1FBRTFCLE1BQU12RCxRQUFRc0QsTUFBTVIsV0FBVzlDLE1BQU0sR0FBRztRQUN4QyxNQUFNNkYsUUFBUTdGLE1BQU0sR0FBR0YsV0FBVyxHQUFHLElBQUlFLE1BQU1LLE9BQUssR0FBSztRQUN6RCxNQUFNLENBQUMrQyxNQUFNN0IsT0FBTyxJQUFJdkIsTUFBTUssT0FBSyxDQUFHTCxNQUFNLEdBQUc7UUFFL0MsS0FBSyxXQUFXQSxNQUFNTSxLQUFLLEdBQUc7UUFDOUIsS0FBSyxPQUFPdUYsUUFBUSxHQUFHQSxTQUFTekMsU0FBU0E7UUFDekMsS0FBSyxXQUFXN0I7UUFDaEIsS0FBSyxhQUFhLEtBQUssUUFBUSxLQUFLLFdBQVcsSUFBSSxLQUFLLGFBQWE7TUFDekU7TUFTQSxNQUFNdUUsUUFBUUMsUUFBZ0JDLFFBQTJCO1FBQ3JELE1BQU07VUFBQ0M7UUFBUSxJQUFJLE1BQU1DLE9BQU85RCxPQUFPLDJCQUEyQjtRQUNsRSxPQUFPLE1BQU02RCxTQUFTSCxRQUFRLEtBQUssTUFBTSxVQUFVLEtBQUssVUFBVUMsUUFBUUMsTUFBTTtNQUNwRjs7SUFDSHRGOzs7Ozs7Ozs7Ozs7SUMvRGEsdUJBQWVGLElBQWdCO01BQ3pDO01BRUFDLFlBQVlpQyxLQUFZO1FBQ3BCLE9BQUs7UUFDTCxLQUFLLE9BQU9BO01BQ2hCO01BRUF5RCxPQUFPQyxNQUFzQjtRQUN6QixLQUFLVCxPQUFLO1FBRVZTLE1BQU1DLFFBQVEsQ0FBQyxDQUFDN0QsV0FBVzhELFVBQVUsTUFBSztVQUN0QyxJQUFJLENBQUNBLFlBQVk7WUFDYixNQUFNLElBQUl2RyxNQUFNLGVBQWV5QyxvQ0FBb0MsS0FBSyxLQUFLTSxhQUFhOztVQUc5RixNQUFNO1lBQUN5RCxzQkFBc0JDO1VBQVcsSUFBSUY7VUFDNUNBLGFBQWFFLGNBQWNBLFlBQVlDLFFBQVF4RixJQUFJdUIsU0FBUyxJQUFJOEQ7VUFDaEUsS0FBS2pGLElBQUltQixXQUFXOEQsVUFBVTtRQUNsQyxDQUFDO01BQ0w7O0lBQ0g1Rjs7Ozs7Ozs7Ozs7O0lDdEJEO0lBWWM7TUFDVjtNQUNBLFVBQStCO01BQy9CLElBQUlzQyxTQUFNO1FBQ04sT0FBTyxLQUFLO01BQ2hCO01BTUEwRDtNQU1BN0Y7TUFFQUosWUFBWUssVUFBZ0I7UUFDeEIsS0FBSyxXQUFXQTtRQUNoQixLQUFLLFFBQVE2RixNQUFNO1VBQ2Z6QyxJQUFJLENBQUNILE9BQWVDLGFBQWtCbEQsU0FBUTRCLElBQUlpRSxJQUFJekMsR0FBR0gsT0FBT0MsUUFBUTtVQUN4RUksS0FBSyxDQUFDTCxPQUFlQyxhQUFrQmxELFNBQVE0QixJQUFJaUUsSUFBSXZDLElBQUlMLE9BQU9DLFFBQVE7O1FBRzlFLEtBQUssUUFBUTRDLGVBQWUsS0FBSyxTQUFTbEU7TUFDOUM7TUFJQXJCLElBQUl3RixLQUFhM0QsT0FBYTtRQUMxQixLQUFLLFFBQVEyRCxPQUFPM0Q7TUFDeEI7TUFFQWlELFNBQU07UUFDRixNQUFNckYsV0FBV2pCLE1BQWM7VUFDM0IsTUFBTWlILFFBQVEsSUFBSUMsY0FBSztVQUN2QkQsTUFBTXRELFNBQVMsa0JBQWtCM0QsRUFBRTtVQUNuQyxPQUFPLEtBQUssU0FBU21ILE1BQU1uSCxJQUFJaUgsS0FBSztRQUN4QztRQUVBLEtBQUtqRyxVQUFVO1VBQUNDO1FBQU8sQ0FBQztRQUd4QixNQUFNbUcsV0FBVyxDQUFDLGdCQUFnQixLQUFLO1FBQ3ZDaEUsT0FBT2lFLEtBQUssS0FBSyxPQUFPLEVBQUViLFFBQVFjLEtBQUssQ0FBQ0YsU0FBUzVDLFNBQVM4QyxDQUFDLEtBQUssT0FBTyxLQUFLLFFBQVFBLEVBQUU7UUFFdEYsS0FBS1QsWUFBWUwsUUFBUSxDQUFDO1VBQUNlO1VBQUlDO1VBQU1qRTtRQUFJLE1BQUs7VUFDMUMsTUFBTTBELFFBQVEsSUFBSUMsY0FBSztVQUN2QixLQUFLLFFBQVEzRCxRQUFRLEtBQUssU0FBUzRELE1BQU1JLElBQUlOLEtBQUssRUFBRU87UUFDeEQsQ0FBQztNQUNMOztJQUNIM0c7Ozs7Ozs7Ozs7OztJQy9ESyxNQUFPNEcsVUFBUztNQUNsQjdHLFlBQVkyRyxJQUFvQkcsVUFBd0I7UUFDcEQsT0FBTyxJQUFJQyxNQUFNLE1BQU07VUFDbkJuRyxLQUFLLENBQUNvRyxNQUFZckUsTUFBY0YsVUFBYztZQUVwQ3VFLEtBQU1yRSxRQUFRRjtZQUdwQixNQUFNd0UsT0FBT0gsU0FBU2IsWUFBWTdELEtBQUssQ0FBQztjQUFDdUUsSUFBSXZIO2NBQUl3SDtZQUFJLE1BQUs7Y0FDdEQsT0FBT0QsR0FBR3ZILE9BQU9BLE1BQU11RCxTQUFTaUU7WUFDcEMsQ0FBQztZQUNESyxRQUFRSCxTQUFTbEcsSUFBSXFHLEtBQUt0RSxNQUFNRixLQUFLO1lBQ3JDd0UsUUFBUUgsU0FBUzFHLFVBQVU7Y0FBQzZHLE1BQU1BLEtBQUt0RTtjQUFNRjtZQUFLLENBQUM7WUFFbkQsT0FBTztVQUNYO1NBQ0g7TUFDTDs7SUFDSHhDOzs7Ozs7Ozs7Ozs7SUNuQkQ7SUFDQTtJQVNNLE1BQU9pSCxlQUFjO01BQ2Q7TUFFVCxJQUFJbEUsVUFBTztRQUNQLE9BQU8sS0FBSztNQUNoQjtNQUVTO01BQ1QsSUFBSTVELEtBQUU7UUFDRixPQUFPLEtBQUs7TUFDaEI7TUFFQTtNQUNBLElBQUkrSCxPQUFJO1FBQ0osT0FBTyxLQUFLO01BQ2hCO01BRVM7TUFFQTtNQUVUO01BQ0EsWUFBWTtNQUNaLFdBQVc7TUFDWCxJQUFJQyxVQUFPO1FBQ1AsT0FBTyxLQUFLO01BQ2hCO01BRUEsVUFBV2YsU0FBZ0I7UUFDdkIsSUFBSSxLQUFLLFVBQVUsTUFBTSxJQUFJL0csTUFBTSxvQkFBb0IsS0FBSyxzQkFBc0I7UUFDbEYsSUFBSSxLQUFLLFdBQVcsTUFBTSxJQUFJQSxNQUFNLDZDQUE2QyxLQUFLLE1BQU07UUFDNUYsS0FBSyxZQUFZO1FBRWpCLE1BQU1lLFdBQVdqQixNQUFlLEtBQUssU0FBU21ILE1BQU1uSCxJQUFJaUgsT0FBTyxJQUFJO1FBRW5FN0QsT0FBT2lFLEtBQUssS0FBSyxRQUFRLEVBQUViLFFBQVFRLE9BQU8sT0FBYSxLQUFLLFNBQVVBLElBQUk7UUFDMUUsS0FBSyxTQUFTL0YsVUFBUyxLQUFLLFFBQVE7UUFDcEMsS0FBSyxXQUFXO1FBQ2hCLEtBQUssWUFBWTtNQUNyQjtNQUVBQSxRQUFRZ0csT0FBY2xILFFBQXNCO1FBQ3hDLElBQUksQ0FBQyxLQUFLLFVBQVU7VUFDaEJBLFVBQVVrSCxNQUFNdEQsU0FBUzVELE9BQU9DLElBQUksS0FBSyxHQUFHO1VBQzVDLEtBQUssUUFBUWlILEtBQUs7VUFDbEJBLE1BQU03RyxLQUFHOztRQUViLE9BQU8sS0FBSztNQUNoQjtNQUVBVSxhQUFVO1FBQ04sSUFBSSxLQUFLLFVBQVU7UUFFbkIsTUFBTW1HLFFBQVEsSUFBSUMsY0FBSztRQUN2QkQsTUFBTXRELFNBQVMsa0JBQWtCLEtBQUssR0FBRztRQUN6QyxLQUFLLFFBQVFzRCxLQUFLO01BQ3RCO01BRUFYLE9BQU9oRixTQUE0QnlHLE1BQVk7UUFDM0MsS0FBSyxXQUFXO1FBQ2hCLEtBQUssV0FBV3pHO1FBQ2hCLEtBQUssUUFBUXlHO01BQ2pCO01BRUFuSCxZQUFZaUMsS0FBYzdDLElBQVkrSCxNQUFjekcsU0FBNEJMLFVBQWdCO1FBQzVGLEtBQUssT0FBTzRCO1FBQ1osS0FBSyxNQUFNN0M7UUFDWCxLQUFLLFFBQVErSDtRQUNiLEtBQUssV0FBV3pHO1FBQ2hCLEtBQUssV0FBV0w7UUFDaEIsS0FBSyxXQUFXLElBQUl3RyxtQkFBVSxNQUFNNUUsSUFBSWhDLE9BQU87TUFDbkQ7O0lBQ0hBOzs7Ozs7Ozs7Ozs7SUNoRkQ7SUFLTSxNQUFPb0gsZ0JBQWU7TUFDZjtNQUNBLE9BQW9DLG1CQUFJdEgsS0FBRztNQUNwRDtNQUVBQyxZQUFZaUMsS0FBWTtRQUNwQixLQUFLLE9BQU9BO01BQ2hCO01BRUEsSUFBSXFGLFNBQVM3RSxPQUFjO1FBQ3ZCLEtBQUssV0FBV0E7TUFDcEI7TUFFQSxZQUFZLENBQUNyRCxJQUFZK0gsTUFBY3pHLFlBQThCO1FBQ2pFLElBQUksS0FBSyxLQUFLSixJQUFJbEIsRUFBRSxHQUFHLE1BQU0sSUFBSUUsTUFBTSxPQUFPRix3QkFBd0I7UUFFdEUsTUFBTXVILEtBQUssSUFBSU8sbUJBQWUsS0FBSyxNQUFNOUgsSUFBSStILE1BQU16RyxTQUFTLEtBQUssUUFBUTtRQUN6RSxLQUFLLEtBQUtFLElBQUkrRixHQUFHdkgsSUFBSXVILEVBQUU7TUFDM0I7TUFFQTVELFNBQVM1QyxNQUFlO1FBQ3BCQSxLQUFJeUYsUUFBUSxDQUFDO1VBQUNsRjtVQUFTeUc7UUFBSSxHQUFHL0gsT0FBTyxLQUFLLFVBQVVBLElBQUkrSCxNQUFNekcsT0FBTyxDQUFDO01BQzFFO01BRUFMLFFBQVFqQixJQUFZaUgsT0FBY2xILFFBQXNCO1FBQ3BELE1BQU1GLFdBQVUsTUFBSztVQUNqQixJQUFJLEtBQUssS0FBS3FCLElBQUlsQixFQUFFLEdBQUcsT0FBT0E7VUFDOUIsT0FBT0EsR0FBR21CLFNBQVMsR0FBRyxJQUFJLEdBQUduQixZQUFZLEdBQUdBO1FBQ2hELElBQUM7UUFFRCxJQUFJLENBQUMsS0FBSyxLQUFLa0IsSUFBSXJCLE9BQU0sR0FBRztVQUN4QixNQUFNLElBQUlLLE1BQU0sb0JBQW9CRixlQUFlOztRQUd2RCxNQUFNdUgsS0FBSyxLQUFLLEtBQUtuRyxJQUFJdkIsT0FBTTtRQUMvQixPQUFPMEgsR0FBR3RHLFFBQVFnRyxPQUFPbEgsTUFBTTtNQUNuQztNQUVBZSxhQUFVO1FBQ04sS0FBSyxLQUFLMEYsUUFBUWUsTUFBTUEsR0FBR3pHLFlBQVk7TUFDM0M7TUFFQXdGLE9BQU92RixNQUFlO1FBQ2xCQSxLQUFJeUYsUUFBUSxDQUFDO1VBQUNsRjtVQUFTeUc7UUFBSSxHQUFHL0gsT0FBTTtVQUNoQyxJQUFJLENBQUMsS0FBSyxLQUFLa0IsSUFBSWxCLEVBQUUsR0FBRztZQUNwQixLQUFLLFVBQVVBLElBQUkrSCxNQUFNekcsT0FBTztZQUNoQzs7VUFHSixNQUFNaUcsS0FBSyxLQUFLLEtBQUtuRyxJQUFJcEIsRUFBRTtVQUMzQixJQUFJdUgsR0FBR1EsU0FBU0EsTUFBTTtVQUN0QlIsR0FBR2pCLE9BQU9oRixTQUFTeUcsSUFBSTtVQUN2QixLQUFLLEtBQUtqQixJQUFJN0IsUUFBUSxHQUFHakYsV0FBVztRQUN4QyxDQUFDO01BQ0w7O0lBQ0hhOzs7Ozs7Ozs7Ozs7SUM3REQ7SUFFTSxNQUFPc0gsUUFBTztNQUNQO01BQ1QsSUFBSXRGLE1BQUc7UUFDSCxPQUFPLEtBQUs7TUFDaEI7TUFFQWpDLFlBQVlpQyxLQUFZO1FBQ3BCLEtBQUssT0FBT0E7TUFDaEI7TUFVQXNFLE1BQU14RSxXQUFtQnNFLE9BQWNNLElBQW1CO1FBQ3RELElBQUk1RSxVQUFVMUMsV0FBVyxHQUFHLEdBQUc7VUFFM0IwQyxZQUFZNEUsTUFBSyxrQkFBUUEsR0FBR3ZILElBQUkyQyxTQUFTLElBQUlBO1VBQzdDLE9BQU8sS0FBSyxLQUFLNUIsSUFBSUUsUUFBUTBCLFdBQVdzRSxPQUFPTSxFQUFFOztRQU9yRCxJQUFJNUUsY0FBYyxrQkFBa0I7VUFDaEMsTUFBTTtZQUFDb0Q7VUFBTSxJQUFJLEtBQUs7VUFDdEIsT0FBTztZQUFDbEcsUUFBUWtHLE9BQU9sRztZQUFRa0c7WUFBUWxELEtBQUssS0FBSztVQUFJOztRQUl6RCxJQUFJRixjQUFjLDRCQUE0QjtVQUMxQyxNQUFNO1lBQUMxRDtVQUFNLElBQUlnQyxTQUFRLGlCQUFpQjtVQUMxQyxNQUFNO1lBQUNyQjtVQUFTLElBQUlxQixTQUFRLG9CQUFvQjtVQUNoRCxPQUFPO1lBQUNoQztZQUFRVztVQUFTOztRQUc3QixNQUFNO1VBQUM2QztRQUFZLElBQUksS0FBSztRQUM1QixJQUFJQSxhQUFhdkIsSUFBSXlCLFNBQVMsR0FBRztVQUs3QixNQUFNO1lBQUNvRSxjQUFjbEU7VUFBRyxJQUFJSixhQUFhckIsSUFBSXVCLFNBQVM7VUFDdEQsT0FBT0UsUUFBUSxZQUFZLENBQUNBLElBQUlLLGVBQWVMLElBQUkvQixZQUFVO1VBQzdELE9BQU8yQixhQUFhckIsSUFBSXVCLFNBQVM7O1FBR3JDLE1BQU0wRSxPQUFPZSxLQUFLQyxVQUFVLENBQUMsR0FBRzVGLGFBQWE0RSxNQUFNLENBQUM7UUFDcEQsTUFBTSxJQUFJbkgsTUFBTSxXQUFXeUMsaURBQWlEMEUsTUFBTTtNQUN0Rjs7SUFDSHhHOzs7Ozs7Ozs7Ozs7SUNyREssTUFBT3FHLGNBQWNsRCxNQUFtQjtNQUMxQzlDLE1BQU9sQixNQUFlLEtBQUtnRCxLQUFLc0YsTUFBTUEsR0FBR3RJLE9BQU9BLEVBQUU7TUFFbEQyRCxTQUFTNUQsUUFBZ0JDLElBQVU7UUFFL0IsSUFBSSxLQUFLa0IsSUFBSWxCLEVBQUUsR0FBRztVQUNkLElBQUl1SSxTQUFTO1VBQ2IsS0FBSy9CLFFBQVEsQ0FBQztZQUFDeEc7WUFBSUQ7VUFBTSxNQUFLO1lBQzFCLE1BQU15SSxJQUFJLENBQUMsa0JBQWtCLGdCQUFnQixFQUFFaEUsU0FBU3pFLE9BQU0sSUFDMUQsZ0NBQ0UsU0FBU0E7WUFDZndJLFVBQVUsSUFBS0MsTUFBTXhJOztVQUN6QixDQUFDO1VBQ0R1SSxVQUFVLDJCQUE0QnZJOztVQUV0QyxNQUFNLElBQUlFLE1BQU07bUJBQ1FILCtFQUErRUM7O0VBQ3BFdUksUUFBUTs7UUFHL0MsS0FBSzdELEtBQUs7VUFBQzFFO1VBQUlEO1FBQU0sQ0FBQztNQUMxQjs7SUFDSGM7Ozs7Ozs7Ozs7OztJQzVCRDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFFaUIsTUFDWHBCLFNBQU87TUFDQTtNQUNULElBQUlzRyxTQUFNO1FBQ04sT0FBTyxLQUFLO01BQ2hCO01BRVM7TUFDVCxJQUFJbEMsV0FBUTtRQUNSLE9BQU8sS0FBSztNQUNoQjtNQUVTO01BQ1QsSUFBSVosYUFBVTtRQUNWLE9BQU8sS0FBSztNQUNoQjtNQUVTO01BQ1QsSUFBSU4sWUFBUztRQUNULE9BQU8sS0FBSztNQUNoQjtNQUVTO01BRUE7TUFDVCxJQUFJNUIsTUFBRztRQUNILE9BQU8sS0FBSztNQUNoQjtNQUVTO01BQ1QsSUFBSUYsVUFBTztRQUNQLE9BQU8sS0FBSztNQUNoQjtNQUdTLGdCQUFnQixJQUFJNEgsc0JBQWEsSUFBSTtNQUM5QyxJQUFJaEcsZUFBWTtRQUNaLE9BQU8sS0FBSztNQUNoQjtNQUVTLE9BQU8sSUFBSXZELGdCQUFNO01BQzFCLElBQUk0SCxNQUFHO1FBQ0gsT0FBTyxLQUFLO01BQ2hCO01BRUFsRyxZQUFZbUYsUUFBZ0JsQyxVQUFnQjtRQUN4QyxLQUFLLFVBQVVrQztRQUNmLEtBQUssWUFBWWxDLFdBQVdBLFdBQVc7UUFFdkMsS0FBSyxjQUFjQSxXQUFXLEdBQUdrQyxPQUFPOUMsY0FBY1ksYUFBYWtDLE9BQU85QztRQUMxRSxLQUFLLGFBQWFZLFdBQVcsR0FBR2tDLE9BQU9wRCxhQUFha0IsYUFBYWtDLE9BQU9wRDtRQUV4RSxLQUFLLE9BQU8sSUFBSXNGLHFCQUFnQixJQUFJO1FBQ3BDLEtBQUssV0FBVyxJQUFJRSxpQkFBUSxJQUFJO1FBQ2hDLEtBQUssS0FBS0QsV0FBVyxLQUFLO1FBQzFCLEtBQUssV0FBVyxJQUFJUSxpQkFBUSxLQUFLLFFBQVE7UUFFekM5SSxtQkFBVStELFNBQVMsSUFBSTtNQUMzQjtNQUVBLGVBQWU7TUFDZixJQUFJVCxjQUFXO1FBQ1gsT0FBTyxLQUFLO01BQ2hCO01BRUFwQyxXQUFXQyxNQUFnQjtRQUN2QixJQUFJLEtBQUssY0FBYyxNQUFNLElBQUliLE1BQU0sNkJBQTZCO1FBQ3BFLEtBQUssZUFBZTtRQUNwQmEsUUFBTyxLQUFLLEtBQUs0QyxTQUFTNUMsSUFBRztRQUM3QixLQUFLRixRQUFReUYsUUFBTTtRQUNuQixLQUFLLEtBQUt4RixZQUFVO01BQ3hCO01BRUF3RixPQUFPdkYsTUFBZTtRQUNsQixLQUFLLEtBQUt1RixPQUFPdkYsSUFBRztRQUNwQixLQUFLRixRQUFReUYsUUFBTTtRQUNuQixLQUFLLEtBQUt4RixZQUFVO1FBQ3BCLEtBQUssS0FBS21FLFFBQVEsUUFBUTtNQUM5Qjs7SUFDSHBFOzs7Ozs7Ozs7Ozs7bUJDckZjLElBQUksY0FBY0YsSUFBRztNQUNoQ2dELFNBQVNkLEtBQVk7UUFDakIsS0FBS3JCLElBQUlxQixJQUFJSSxZQUFZSixHQUFHO01BQ2hDO09BQ0g7SUFBQWhDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvZGVtby9vdXQifQ==