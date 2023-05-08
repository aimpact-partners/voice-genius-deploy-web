System.register(["@beyond-js/kernel@0.1.9/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep)],
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

// .beyond/uimport/temp/@beyond-js/kernel/core.0.1.9.js
var core_0_1_9_exports = {};
__export(core_0_1_9_exports, {
  CancellationToken: () => CancellationToken,
  Events: () => Events,
  Languages: () => Languages,
  ListenerFunction: () => ListenerFunction,
  PendingPromise: () => PendingPromise,
  SingleCall: () => SingleCall,
  __beyond_pkg: () => __beyond_pkg,
  beyond: () => beyond,
  hmr: () => hmr,
  languages: () => languages
});
module.exports = __toCommonJS(core_0_1_9_exports);

// node_modules/@beyond-js/kernel/core/core.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.9/core"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./beyond", {
  hash: 959081709,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.beyond = exports.Beyond = void 0;
    var _languages = require2("./languages");
    class Beyond {
      get languages() {
        return _languages.languages;
      }
      async import(resource, version) {
        return await bimport(resource, version);
      }
    }
    exports.Beyond = Beyond;
    const beyond2 = new Beyond();
    exports.beyond = beyond2;
    globalThis.beyond = beyond2;
  }
});
ims.set("./languages/index", {
  hash: 2966511149,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.languages = exports.Languages = void 0;
    var _events = require2("../utils/events/events");
    class Languages2 extends _events.Events {
      #project;
      #specs;
      #storage = typeof localStorage === "object" ? localStorage : void 0;
      #supported;
      get supported() {
        return this.#supported;
      }
      get default() {
        return this.#specs?.default;
      }
      #current;
      get current() {
        return this.#current;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      #fetched = false;
      get fetched() {
        return this.#fetched;
      }
      constructor(project) {
        super();
        this.#project = project;
        bimport(`${project}/config`).then(({
          default: config
        }) => {
          this.#setup(config.languages);
          this.#fetched = true;
          this.#resolve();
        });
      }
      #configure(value) {
        if (this.#current === value) return true;
        if (typeof value !== "string" || value.length !== 2) {
          console.warn(`Configured language "${value}" is invalid`);
          return false;
        }
        if (value && !this.#supported.has(value)) {
          console.log(`Language "${value}" is not supported`);
          return false;
        }
        const previous = this.#current;
        this.#current = value;
        previous && this.trigger("change");
        return true;
      }
      set current(value) {
        if (!this.#configure(value)) return;
        this.#storage?.setItem("__beyond_language", value);
      }
      #setup(specs) {
        if (specs.default && typeof specs.default !== "string" || specs.default.length !== 2) {
          console.log(`Default language "${specs.default}" is invalid`);
          specs.default = void 0;
        }
        const def = specs.default ? specs.default : "en";
        specs.supported = specs.supported instanceof Array ? specs.supported : [def];
        !specs.supported.length && specs.supported.push(def);
        this.#supported = new Set(specs.supported);
        specs.default = specs.default ? specs.default : [...this.#supported][0];
        if (!this.#supported.has(specs.default)) {
          console.warn(`Default language "${specs.default}" is not supported by current application`);
          specs.default = [...this.#supported][0];
        }
        this.#specs = specs;
        const configured = this.#storage?.getItem("__beyond_language");
        if (configured && this.#configure(configured)) return;
        const device = typeof location === "object" ? navigator.language.split("-")[0] : void 0;
        if (device && this.#configure(device)) return;
        this.#configure(specs.default);
      }
    }
    exports.Languages = Languages2;
    const languages2 = new Languages2(globalThis.__app_package.specifier);
    exports.languages = languages2;
  }
});
ims.set("./utils/events/events", {
  hash: 3993267980,
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
    globalThis.Events = Events2;
  }
});
ims.set("./utils/events/types", {
  hash: 1632705009,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./utils/execution-control/cancellation-token/cancellation-token", {
  hash: 4200323006,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CancellationToken = void 0;
    class CancellationToken2 {
      #id = 0;
      get current() {
        return this.#id;
      }
      reset = () => ++this.#id;
      check = id => id === this.#id;
    }
    exports.CancellationToken = CancellationToken2;
  }
});
ims.set("./utils/execution-control/single-call/single-call", {
  hash: 783668127,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SingleCall = SingleCall2;
    function SingleCall2(target, propertyKey, descriptor) {
      const originalMethod = descriptor.value;
      let promises = /* @__PURE__ */new WeakMap();
      descriptor.value = function (...args) {
        if (promises.has(this)) return promises.get(this);
        const promise = originalMethod.apply(this, args);
        promises.set(this, promise);
        const clean = () => promises.delete(this);
        promise.then(clean).catch(clean);
        return promise;
      };
      return descriptor;
    }
  }
});
ims.set("./utils/pending-promise/pending-promise", {
  hash: 3255928960,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PendingPromise = void 0;
    class PendingPromise2 extends Promise {
      resolve;
      reject;
      constructor(executor) {
        if (executor instanceof Function) {
          super(executor);
          return;
        }
        let resolve = void 0;
        let reject = void 0;
        super((a, b) => {
          resolve = a;
          reject = b;
        });
        this.resolve = resolve;
        this.reject = reject;
      }
    }
    exports.PendingPromise = PendingPromise2;
    typeof globalThis.process !== "object" && (window.PendingPromise = PendingPromise2);
  }
});
__pkg.exports.descriptor = [{
  "im": "./beyond",
  "from": "beyond",
  "name": "beyond"
}, {
  "im": "./languages/index",
  "from": "Languages",
  "name": "Languages"
}, {
  "im": "./languages/index",
  "from": "languages",
  "name": "languages"
}, {
  "im": "./utils/events/events",
  "from": "Events",
  "name": "Events"
}, {
  "im": "./utils/events/types",
  "from": "ListenerFunction",
  "name": "ListenerFunction"
}, {
  "im": "./utils/execution-control/cancellation-token/cancellation-token",
  "from": "CancellationToken",
  "name": "CancellationToken"
}, {
  "im": "./utils/execution-control/single-call/single-call",
  "from": "SingleCall",
  "name": "SingleCall"
}, {
  "im": "./utils/pending-promise/pending-promise",
  "from": "PendingPromise",
  "name": "PendingPromise"
}];
var beyond, Languages, languages, Events, ListenerFunction, CancellationToken, SingleCall, PendingPromise;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "beyond") && (beyond = require2 ? require2("./beyond").beyond : value);
  (require2 || prop === "Languages") && (Languages = require2 ? require2("./languages/index").Languages : value);
  (require2 || prop === "languages") && (languages = require2 ? require2("./languages/index").languages : value);
  (require2 || prop === "Events") && (Events = require2 ? require2("./utils/events/events").Events : value);
  (require2 || prop === "ListenerFunction") && (ListenerFunction = require2 ? require2("./utils/events/types").ListenerFunction : value);
  (require2 || prop === "CancellationToken") && (CancellationToken = require2 ? require2("./utils/execution-control/cancellation-token/cancellation-token").CancellationToken : value);
  (require2 || prop === "SingleCall") && (SingleCall = require2 ? require2("./utils/execution-control/single-call/single-call").SingleCall : value);
  (require2 || prop === "PendingPromise") && (PendingPromise = require2 ? require2("./utils/pending-promise/pending-promise").PendingPromise : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL2NvcmUuMC4xLjkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvY29yZS9fX3NvdXJjZXMvY29yZS9iZXlvbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvY29yZS9fX3NvdXJjZXMvY29yZS9sYW5ndWFnZXMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvY29yZS9fX3NvdXJjZXMvY29yZS91dGlscy9ldmVudHMvZXZlbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2NvcmUvX19zb3VyY2VzL2NvcmUvdXRpbHMvZXZlbnRzL3R5cGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2NvcmUvX19zb3VyY2VzL2NvcmUvdXRpbHMvZXhlY3V0aW9uLWNvbnRyb2wvY2FuY2VsbGF0aW9uLXRva2VuL2NhbmNlbGxhdGlvbi10b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9jb3JlL19fc291cmNlcy9jb3JlL3V0aWxzL2V4ZWN1dGlvbi1jb250cm9sL3NpbmdsZS1jYWxsL3NpbmdsZS1jYWxsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2NvcmUvX19zb3VyY2VzL2NvcmUvdXRpbHMvcGVuZGluZy1wcm9taXNlL3BlbmRpbmctcHJvbWlzZS50cyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkNhbmNlbGxhdGlvblRva2VuIiwiRXZlbnRzIiwiTGFuZ3VhZ2VzIiwiTGlzdGVuZXJGdW5jdGlvbiIsIlBlbmRpbmdQcm9taXNlIiwiU2luZ2xlQ2FsbCIsIl9fYmV5b25kX3BrZyIsImJleW9uZCIsImhtciIsImxhbmd1YWdlcyIsIm1vZHVsZSIsIkJleW9uZCIsImltcG9ydCIsInJlc291cmNlIiwidmVyc2lvbiIsImJpbXBvcnQiLCJleHBvcnRzIiwiZ2xvYmFsVGhpcyIsImxvY2FsU3RvcmFnZSIsInN1cHBvcnRlZCIsImRlZmF1bHQiLCJjdXJyZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkeSIsImZldGNoZWQiLCJjb25zdHJ1Y3RvciIsInByb2plY3QiLCJ0aGVuIiwiY29uZmlnIiwidmFsdWUiLCJsZW5ndGgiLCJjb25zb2xlIiwid2FybiIsImhhcyIsImxvZyIsInByZXZpb3VzIiwidHJpZ2dlciIsInNldEl0ZW0iLCJzcGVjcyIsInVuZGVmaW5lZCIsImRlZiIsIkFycmF5IiwicHVzaCIsIlNldCIsImNvbmZpZ3VyZWQiLCJnZXRJdGVtIiwiZGV2aWNlIiwibG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsInNwbGl0IiwiX19hcHBfcGFja2FnZSIsInNwZWNpZmllciIsIk1hcCIsImRlc3Ryb3llZCIsIkVycm9yIiwiYmluZCIsImV2ZW50IiwibGlzdGVuZXIiLCJwcmlvcml0eSIsIm9uIiwidW5iaW5kIiwib2ZmIiwiaW5jbHVkZXMiLCJsIiwiZ2V0Iiwic2V0IiwiZm9yY2UiLCJkZWxldGUiLCJlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJpdGVtIiwicmVzdCIsIm5hbWUiLCJhcmdzIiwiYXJndW1lbnRzIiwic2hpZnQiLCJzb3J0IiwiYSIsImIiLCJhc3luYyIsInByb21pc2VzIiwiYWxsIiwiY2FsbCIsImNhdGNoIiwiZXhjIiwiZXJyb3IiLCJzdGFjayIsImRlc3Ryb3kiLCJjbGVhciIsIk9iamVjdCIsInJlc2V0IiwiY2hlY2siLCJpZCIsInRhcmdldCIsInByb3BlcnR5S2V5IiwiZGVzY3JpcHRvciIsIm9yaWdpbmFsTWV0aG9kIiwiV2Vha01hcCIsInByb21pc2UiLCJhcHBseSIsImNsZWFuIiwicmVqZWN0IiwiZXhlY3V0b3IiLCJGdW5jdGlvbiIsInByb2Nlc3MiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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U0FBUzlCLFlBQVlNLEdBQUc7WUFDcEJOLFNBQVNBLFNBQVMsR0FBR2lCLElBQUk7OztNQUdyQztNQUVBYyxVQUFPO1FBQ0gsS0FBSyxhQUFhO1FBQ2xCLEtBQUssV0FBV0MsT0FBSztNQUN6Qjs7SUFDSDNFO0lBRUtDLFdBQVloQixTQUFTQTs7Ozs7O0lDeEozQjs7SUFFQTJGO01BQ0E5RDtJQUNBOzs7Ozs7Ozs7Ozs7SUNKaUIsTUFDWDlCLG1CQUFpQjtNQUNuQixNQUFNO01BRU4sSUFBSXFCLFVBQU87UUFDUCxPQUFPLEtBQUs7TUFDaEI7TUFFQXdFLFFBQVEsTUFBTSxFQUFFLEtBQUs7TUFDckJDLFFBQVNDLE1BQWVBLE9BQU8sS0FBSzs7SUFDdkMvRTs7Ozs7Ozs7Ozs7O0lDVmdCLFNBQ1JYLFlBQVcyRixRQUFhQyxhQUFxQkMsWUFBOEI7TUFDaEYsTUFBTUMsaUJBQWlCRCxXQUFXcEU7TUFDbEMsSUFBSXFELFdBQVcsbUJBQUlpQixTQUFPO01BRTFCRixXQUFXcEUsUUFBUSxhQUFhOEMsTUFBUztRQUNyQyxJQUFJTyxTQUFTakQsSUFBSSxJQUFJLEdBQUcsT0FBT2lELFNBQVNqQixJQUFJLElBQUk7UUFFaEQsTUFBTW1DLFVBQVVGLGVBQWVHLE1BQU0sTUFBTTFCLElBQUk7UUFDL0NPLFNBQVNoQixJQUFJLE1BQU1rQyxPQUFPO1FBRTFCLE1BQU1FLFFBQVEsTUFBTXBCLFNBQVNkLE9BQU8sSUFBSTtRQUN4Q2dDLFFBQVF6RSxLQUFLMkUsS0FBSyxFQUFFakIsTUFBTWlCLEtBQUs7UUFDL0IsT0FBT0Y7TUFDWDtNQUNBLE9BQU9IO0lBQ1g7Ozs7Ozs7Ozs7OztJQ2hCaUIsTUFDWDlGLHdCQUEwQmtCLFFBQVU7TUFDdENDO01BQ0FpRjtNQUVBOUUsWUFBWStFLFVBQWtHO1FBRTFHLElBQUlBLG9CQUFvQkMsVUFBVTtVQUM5QixNQUFNRCxRQUFRO1VBQ2Q7O1FBR0osSUFBSWxGLFVBQVVpQjtRQUNkLElBQUlnRSxTQUFTaEU7UUFDYixNQUFNLENBQUN3QyxHQUFHQyxNQUFLO1VBQ1gxRCxVQUFVeUQ7VUFDVndCLFNBQVN2QjtRQUNiLENBQUM7UUFDRCxLQUFLMUQsVUFBVUE7UUFDZixLQUFLaUYsU0FBU0E7TUFDbEI7O0lBR0p4RjtJQUNBLE9BQWFDLFdBQVkwRixZQUFZLGFBQW1CQyxPQUFReEcsaUJBQWlCQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2RlbW8vb3V0In0=