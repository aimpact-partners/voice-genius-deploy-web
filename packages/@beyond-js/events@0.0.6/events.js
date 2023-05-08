System.register(["@beyond-js/kernel@0.1.9/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.6"]]);
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

// .beyond/uimport/@beyond-js/events/events.0.0.6.js
var events_0_0_6_exports = {};
__export(events_0_0_6_exports, {
  Events: () => Events,
  ListenerFunction: () => ListenerFunction,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(events_0_0_6_exports);

// node_modules/@beyond-js/events/events/events.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/events@0.0.4/events"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./events", {
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
          name: event
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
ims.set("./types", {
  hash: 1632705009,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
__pkg.exports.descriptor = [{
  "im": "./events",
  "from": "Events",
  "name": "Events"
}, {
  "im": "./types",
  "from": "ListenerFunction",
  "name": "ListenerFunction"
}];
var Events, ListenerFunction;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Events") && (Events = require2 ? require2("./events").Events : value);
  (require2 || prop === "ListenerFunction") && (ListenerFunction = require2 ? require2("./types").ListenerFunction : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2V2ZW50cy9ldmVudHMuMC4wLjYuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9ldmVudHMvZXZlbnRzL19fc291cmNlcy9ldmVudHMvZXZlbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvZXZlbnRzL2V2ZW50cy9fX3NvdXJjZXMvZXZlbnRzL3R5cGVzLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiRXZlbnRzIiwiTGlzdGVuZXJGdW5jdGlvbiIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsIk1hcCIsImRlc3Ryb3llZCIsImNvbnN0cnVjdG9yIiwic3BlY3MiLCJzdXBwb3J0ZWQiLCJBcnJheSIsIkVycm9yIiwiYmluZCIsImV2ZW50IiwibGlzdGVuZXIiLCJwcmlvcml0eSIsIm9uIiwidW5iaW5kIiwib2ZmIiwiaW5jbHVkZXMiLCJsIiwiaGFzIiwiZ2V0Iiwic2V0IiwicHVzaCIsImZvcmNlIiwiZGVsZXRlIiwiZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaXRlbSIsInRyaWdnZXIiLCJyZXN0IiwibmFtZSIsImFyZ3MiLCJhcmd1bWVudHMiLCJzaGlmdCIsInNvcnQiLCJhIiwiYiIsImFzeW5jIiwicHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwiY2FsbCIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJkZXN0cm95IiwiY2xlYXIiLCJleHBvcnRzIiwiZ2xvYmFsVGhpcyIsIk9iamVjdCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0VpQixNQUNYSixRQUFNO01BQ1I7TUFDQSxhQUEyQyxtQkFBSUssS0FBRztNQUNsRCxh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