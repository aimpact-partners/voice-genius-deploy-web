System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@bgroup/ui","0.0.34"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep)],
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

// .beyond/uimport/@bgroup/ui/hooks.0.0.34.js
var hooks_0_0_34_exports = {};
__export(hooks_0_0_34_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  useBinder: () => useBinder
});
module.exports = __toCommonJS(hooks_0_0_34_exports);

// node_modules/@bgroup/ui/hooks/hooks.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.34/hooks"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./use-binder", {
  hash: 4003813902,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useBinder = useBinder2;
    var React = require2("react");
    function useBinder2(objects, onBinder, event = "change") {
      React.useEffect(() => {
        objects.forEach(object => {
          if (!object) {
            throw new Error(`object is not valid in useBinder ${object}`);
          }
          object.bind(event, onBinder);
        });
        return () => objects.forEach(object => object.unbind(event, onBinder));
      }, []);
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./use-binder",
  "from": "useBinder",
  "name": "useBinder"
}];
var useBinder;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "useBinder") && (useBinder = require2 ? require2("./use-binder").useBinder : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmdyb3VwL3VpL2hvb2tzLjAuMC4zNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL2hvb2tzL19fc291cmNlcy9ob29rcy90cy91c2UtYmluZGVyLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwidXNlQmluZGVyIiwibW9kdWxlIiwib2JqZWN0cyIsIm9uQmluZGVyIiwiZXZlbnQiLCJSZWFjdCIsInVzZUVmZmVjdCIsImZvckVhY2giLCJvYmplY3QiLCJFcnJvciIsImJpbmQiLCJ1bmJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBU2tCLFNBQ1JELFdBQVVFLFNBQWdCQyxVQUFzQkMsUUFBZ0IsVUFBUTtNQUM5RUMsTUFBTUMsVUFBVSxNQUFpQjtRQUU3QkosUUFBUUssUUFBU0MsVUFBcUI7VUFDbEMsSUFBSSxDQUFDQSxRQUFRO1lBQ1QsTUFBTSxJQUFJQyxNQUFNLG9DQUFvQ0QsUUFBUTs7VUFFaEVBLE9BQU9FLEtBQUtOLE9BQU9ELFFBQVE7UUFDL0IsQ0FBQztRQUNELE9BQU8sTUFBWUQsUUFBUUssUUFBU0MsVUFBZ0JBLE9BQU9HLE9BQU9QLE9BQU9ELFFBQVEsQ0FBQztNQUN0RixHQUFHLEVBQUU7SUFDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3ZvaWNlLWdlbml1cy9wcm9qZWN0L291dCJ9