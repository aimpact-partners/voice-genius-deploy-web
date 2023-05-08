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

// .beyond/uimport/temp/@beyond-js/kernel/styles.0.1.9.js
var styles_0_1_9_exports = {};
__export(styles_0_1_9_exports, {
  DependenciesStyles: () => DependenciesStyles,
  V1Styles: () => V1Styles,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  styles: () => styles
});
module.exports = __toCommonJS(styles_0_1_9_exports);

// node_modules/@beyond-js/kernel/styles/styles.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.9/styles"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./dependencies-styles", {
  hash: 282408023,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DependenciesStyles = void 0;
    var _bundle = require2("@beyond-js/kernel/bundle");
    var _core = require2("@beyond-js/kernel/core");
    var _registry = require2("./registry");
    class DependenciesStyles2 extends _core.Events {
      #vspecifier;
      #elements;
      get elements() {
        return this.#elements;
      }
      constructor(vspecifier) {
        super();
        this.#vspecifier = vspecifier;
        const change = () => this.trigger("change");
        this.#elements = /* @__PURE__ */new Set();
        const recursive = vspecifier2 => {
          if (!vspecifier2) {
            console.trace("Bundle vspecifier not defined");
            return;
          }
          if (!_bundle.instances.has(vspecifier2)) {
            console.error(`Bundle id "${vspecifier2}" not found. Try refreshing the page.
If the problem still persist, delete the BeyondJS cache and try again.`);
            return;
          }
          const bundle = _bundle.instances.get(vspecifier2);
          if (vspecifier2 !== this.#vspecifier && bundle.type === "widget") return;
          const styles2 = _registry.styles.get(vspecifier2);
          if (styles2 && styles2.engine !== "legacy") {
            this.#elements.add(styles2);
            styles2.on("change", change);
          }
          const {
            dependencies
          } = bundle.package();
          dependencies.forEach(dependency => {
            const pkg = dependency.__beyond_pkg;
            if (!pkg) return;
            recursive(pkg.vspecifier);
          });
        };
        recursive(this.#vspecifier);
      }
    }
    exports.DependenciesStyles = DependenciesStyles2;
  }
});
ims.set("./legacy", {
  hash: 859564821,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default {
      get engine() {
        return "legacy";
      }
      #bundle;
      #value;
      get value() {
        return this.#value;
      }
      #appended = false;
      get appended() {
        return this.#appended;
      }
      constructor(bundle, value) {
        this.#bundle = bundle;
        const module2 = (() => {
          const module3 = bundle.split("/");
          module3.pop();
          return module3.join("/");
        })();
        const regexp = /#host\.([\w\d]*)#([^.]*\.[\w\d]*)/g;
        this.#value = value.replace(regexp, (match, host, resource) => {
          if (host === "module" || host === "library") {
            return `${module2}/${resource}`;
          } else if (host === "application") {
            return resource;
          }
          console.warn(`Invalid css host specification on bundle "${bundle}"`, match);
        });
      }
      appendToDOM(is) {
        if (this.#appended) {
          const previous = document.querySelectorAll(`:scope > [bundle="${this.#bundle}"]`)[0];
          previous && document.removeChild(previous);
        }
        const css = document.createElement("style");
        css.appendChild(document.createTextNode(this.#value));
        is && css.setAttribute("is", is);
        document.getElementsByTagName("head")[0].appendChild(css);
        this.#appended = true;
      }
    }
    exports.default = _default;
  }
});
ims.set("./registry", {
  hash: 2402124624,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.styles = void 0;
    var _legacy = require2("./legacy");
    var _v = require2("./v1");
    class Registry {
      #registry = /* @__PURE__ */new Map();
      register(vspecifier, value) {
        if (this.#registry.has(vspecifier)) return;
        const styles3 = value ? new _legacy.default(vspecifier, value) : new _v.V1Styles(vspecifier);
        this.#registry.set(vspecifier, styles3);
        return styles3;
      }
      has(vspecifier) {
        return this.#registry.has(vspecifier);
      }
      get(vspecifier) {
        return this.#registry.get(vspecifier);
      }
    }
    const styles2 = new Registry();
    exports.styles = styles2;
    globalThis.beyondLegacyStyles = styles2;
  }
});
ims.set("./v1", {
  hash: 1891964101,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.V1Styles = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _bundle = require2("@beyond-js/kernel/bundle");
    class V1Styles2 extends _core.Events {
      get engine() {
        return "v1";
      }
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #version = 0;
      get version() {
        return this.#version;
      }
      #resource;
      get resource() {
        return this.#resource;
      }
      get href() {
        const version = this.#version ? `?version=${this.#version}` : "";
        return `${this.#resource}${version}`;
      }
      constructor(resource) {
        super();
        this.#bundle = _bundle.instances.get(resource);
        this.#resource = (() => {
          if (typeof process === "object") {
            const split = resource.split("/");
            const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
            const subpath = split.join("/");
            return `##_!${pkg}!_##${subpath}.css`;
          }
          let {
            uri
          } = this.#bundle;
          const regexp = new RegExp("^https?://cdn.beyondjs.com", "i");
          if (regexp.test(uri)) {
            const {
              origin,
              pathname,
              searchParams
            } = new URL(uri);
            const version = searchParams.has("version") ? `&version=${searchParams.get("version")}` : "";
            return origin + pathname + "?css" + version;
          }
          uri = uri.slice(0, uri.length - 3);
          return `${uri}.css`;
        })();
      }
      change() {
        this.#version++;
        this.trigger("change");
      }
    }
    exports.V1Styles = V1Styles2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./dependencies-styles",
  "from": "DependenciesStyles",
  "name": "DependenciesStyles"
}, {
  "im": "./registry",
  "from": "styles",
  "name": "styles"
}, {
  "im": "./v1",
  "from": "V1Styles",
  "name": "V1Styles"
}];
var DependenciesStyles, styles, V1Styles;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "DependenciesStyles") && (DependenciesStyles = require2 ? require2("./dependencies-styles").DependenciesStyles : value);
  (require2 || prop === "styles") && (styles = require2 ? require2("./registry").styles : value);
  (require2 || prop === "V1Styles") && (V1Styles = require2 ? require2("./v1").V1Styles : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL3N0eWxlcy4wLjEuOS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMvX19zb3VyY2VzL3N0eWxlcy9kZXBlbmRlbmNpZXMtc3R5bGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3N0eWxlcy9fX3NvdXJjZXMvc3R5bGVzL2xlZ2FjeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMvX19zb3VyY2VzL3N0eWxlcy9yZWdpc3RyeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMvX19zb3VyY2VzL3N0eWxlcy92MS50cyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkRlcGVuZGVuY2llc1N0eWxlcyIsIlYxU3R5bGVzIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwic3R5bGVzIiwibW9kdWxlIiwiRXZlbnRzIiwiZWxlbWVudHMiLCJjb25zdHJ1Y3RvciIsInZzcGVjaWZpZXIiLCJjaGFuZ2UiLCJ0cmlnZ2VyIiwiU2V0IiwicmVjdXJzaXZlIiwiY29uc29sZSIsInRyYWNlIiwiYnVuZGxlcyIsImhhcyIsImVycm9yIiwiYnVuZGxlIiwiZ2V0IiwidHlwZSIsInJlZ2lzdHJ5IiwiZW5naW5lIiwiYWRkIiwib24iLCJkZXBlbmRlbmNpZXMiLCJwYWNrYWdlIiwiZm9yRWFjaCIsImRlcGVuZGVuY3kiLCJwa2ciLCJleHBvcnRzIiwidmFsdWUiLCJhcHBlbmRlZCIsInNwbGl0IiwicG9wIiwiam9pbiIsInJlZ2V4cCIsInJlcGxhY2UiLCJtYXRjaCIsImhvc3QiLCJyZXNvdXJjZSIsIndhcm4iLCJhcHBlbmRUb0RPTSIsImlzIiwicHJldmlvdXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmVDaGlsZCIsImNzcyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwic2V0QXR0cmlidXRlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJSZWdpc3RyeSIsIk1hcCIsInJlZ2lzdGVyIiwiTGVnYWN5U3R5bGVzIiwic2V0IiwiZ2xvYmFsVGhpcyIsImJleW9uZExlZ2FjeVN0eWxlcyIsInZlcnNpb24iLCJocmVmIiwicHJvY2VzcyIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInN1YnBhdGgiLCJ1cmkiLCJSZWdFeHAiLCJ0ZXN0Iiwib3JpZ2luIiwicGF0aG5hbWUiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJzbGljZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFDQTtJQUNBO0lBR2lCLE1BQ1hMLDRCQUEyQk0sYUFBTTtNQUMxQjtNQUNBO01BQ1QsSUFBSUMsV0FBUTtRQUNSLE9BQU8sS0FBSztNQUNoQjtNQUVBQyxZQUFZQyxZQUFrQjtRQUMxQixPQUFLO1FBQ0wsS0FBSyxjQUFjQTtRQUVuQixNQUFNQyxTQUFTLE1BQU0sS0FBS0MsUUFBUSxRQUFRO1FBRTFDLEtBQUssWUFBWSxtQkFBSUMsS0FBRztRQUN4QixNQUFNQyxZQUFhSixlQUFzQjtVQUNyQyxJQUFJLENBQUNBLGFBQVk7WUFDYkssUUFBUUMsTUFBTSwrQkFBK0I7WUFDN0M7O1VBR0osSUFBSSxDQUFDQyxrQkFBUUMsSUFBSVIsV0FBVSxHQUFHO1lBQzFCSyxRQUFRSSxNQUFNLGNBQWNUO3VFQUNnRDtZQUM1RTs7VUFFSixNQUFNVSxTQUFTSCxrQkFBUUksSUFBSVgsV0FBVTtVQUNyQyxJQUFJQSxnQkFBZSxLQUFLLGVBQWVVLE9BQU9FLFNBQVMsVUFBVTtVQUdqRSxNQUFNakIsVUFBbUJrQixpQkFBU0YsSUFBSVgsV0FBVTtV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