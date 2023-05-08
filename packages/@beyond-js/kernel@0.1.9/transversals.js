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

// .beyond/uimport/temp/@beyond-js/kernel/transversals.0.1.9.js
var transversals_0_1_9_exports = {};
__export(transversals_0_1_9_exports, {
  Transversal: () => Transversal,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(transversals_0_1_9_exports);

// node_modules/@beyond-js/kernel/transversals/transversals.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.9/transversals"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./dependencies", {
  hash: 916907578,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default extends Map {
      update(deps) {
        this.clear();
        deps?.forEach(([specifier, dependency]) => this.set(specifier, dependency));
      }
    }
    exports.default = _default;
  }
});
ims.set("./transversal", {
  hash: 2292377186,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Transversal = void 0;
    var _bundle = require2("@beyond-js/kernel/bundle");
    var _dependencies = require2("./dependencies");
    class Transversal2 {
      #name;
      get name() {
        return this.#name;
      }
      #language;
      get language() {
        return this.#language;
      }
      #bundles = /* @__PURE__ */new Map();
      get bundles() {
        return this.#bundles;
      }
      #dependencies = new _dependencies.default();
      get dependencies() {
        return this.#dependencies;
      }
      constructor(name, language) {
        this.#name = name;
        this.#language = language;
      }
      #initialised = false;
      initialise(bundles) {
        if (this.#initialised) throw new Error(`Transversal "${this.#name}" already initialised`);
        this.#initialised = true;
        const packages = /* @__PURE__ */new Map();
        bundles.forEach(([specs, creator]) => {
          const pkg = new _bundle.Bundle(specs).package(this.#language);
          const ims2 = /* @__PURE__ */new Map();
          const exports2 = {};
          const response = creator(ims2, exports2);
          const {
            dependencies
          } = response ? response : {
            dependencies: void 0
          };
          pkg.exports.descriptor = exports2.descriptor;
          packages.set(pkg.specifier, {
            pkg,
            dependencies,
            ims: ims2
          });
        });
        packages.forEach(({
          pkg,
          dependencies,
          ims: ims2
        }) => {
          const register = (() => {
            const register2 = [];
            dependencies?.forEach(specifier => {
              if (this.#dependencies.has(specifier)) {
                register2.push([specifier, this.#dependencies.get(specifier)]);
                return;
              }
              if (!packages.has(specifier)) {
                const data = `
	Dependencies: ${JSON.stringify([...this.#dependencies.keys()])}. 
	Bundles: ${JSON.stringify([...packages.keys()])}`;
                throw new Error(`Dependency "${specifier}" not found on "${this.#name}" transversal. ${data}`);
              }
              const {
                pkg: pkg2
              } = packages.get(specifier);
              register2.push([specifier, pkg2.exports.values]);
            });
            return register2;
          })();
          packages.forEach(({
            pkg: pkg2
          }) => this.#bundles.set(pkg2.specifier, pkg2.exports.values));
          register && pkg.dependencies.update(register);
          pkg.ims.register(ims2);
        });
        packages.forEach(({
          pkg
        }) => !pkg.initialised && pkg.initialise());
      }
    }
    exports.Transversal = Transversal2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./transversal",
  "from": "Transversal",
  "name": "Transversal"
}];
var Transversal;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Transversal") && (Transversal = require2 ? require2("./transversal").Transversal : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL3RyYW5zdmVyc2Fscy4wLjEuOS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC90cmFuc3ZlcnNhbHMvX19zb3VyY2VzL3RyYW5zdmVyc2Fscy9kZXBlbmRlbmNpZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvdHJhbnN2ZXJzYWxzL19fc291cmNlcy90cmFuc3ZlcnNhbHMvdHJhbnN2ZXJzYWwudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJUcmFuc3ZlcnNhbCIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsIk1hcCIsInVwZGF0ZSIsImRlcHMiLCJjbGVhciIsImZvckVhY2giLCJzcGVjaWZpZXIiLCJkZXBlbmRlbmN5Iiwic2V0IiwiZXhwb3J0cyIsIm5hbWUiLCJsYW5ndWFnZSIsImJ1bmRsZXMiLCJEZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmNpZXMiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxpc2UiLCJFcnJvciIsInBhY2thZ2VzIiwic3BlY3MiLCJjcmVhdG9yIiwicGtnIiwiQnVuZGxlIiwicGFja2FnZSIsImltcyIsInJlc3BvbnNlIiwiZGVzY3JpcHRvciIsInJlZ2lzdGVyIiwiaGFzIiwicHVzaCIsImdldCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwia2V5cyIsInZhbHVlcyIsImluaXRpYWxpc2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FjLHVCQUFlQyxJQUFnQjtNQUN6Q0MsT0FBT0MsTUFBc0I7UUFDekIsS0FBS0MsT0FBSztRQUNWRCxNQUFNRSxRQUFRLENBQUMsQ0FBQ0MsV0FBV0MsVUFBVSxNQUFNLEtB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