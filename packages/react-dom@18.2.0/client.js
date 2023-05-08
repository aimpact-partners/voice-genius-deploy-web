System.register(["react@18.2.0","scheduler@0.23.0","react-dom@18.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep)],
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
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";

    var m = require("react-dom@18.2.0");
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function (c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function (c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// .beyond/uimport/temp/react-dom/client.18.2.0.js
var client_18_2_0_exports = {};
__export(client_18_2_0_exports, {
  default: () => client_18_2_0_default
});
module.exports = __toCommonJS(client_18_2_0_exports);
__reExport(client_18_2_0_exports, __toESM(require_client()), module.exports);
var import_client = __toESM(require_client());
var client_18_2_0_default = import_client.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2xpZW50LmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3RlbXAvcmVhY3QtZG9tL2NsaWVudC4xOC4yLjAuanMiXSwibmFtZXMiOlsibSIsInJlcXVpcmUiLCJleHBvcnRzIiwiY3JlYXRlUm9vdCIsImh5ZHJhdGVSb290IiwiaSIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiYyIsIm8iLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJoIiwiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX19yZUV4cG9ydCIsIl9fdG9FU00iLCJjbGllbnRfMThfMl8wX2RlZmF1bHQiLCJpbXBvcnRfY2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtFQUFBO0lBQUE7O0lBRUEsSUFBSUEsSUFBSUMsUUFBUTtJQUNoQixJQUFJLE9BQXVDO01BQ3pDQyxRQUFRQyxhQUFhSCxFQUFFRztNQUN2QkQsUUFBUUUsY0FBY0osRUFBRUk7SUFDMUIsT0FBTztNQUNEQyxJQUFJTCxFQUFFTTtNQUNWSixRQUFRQyxhQUFhLFVBQVNJLEdBQUdDLEdBQUc7UUFDbENILEVBQUVJLHdCQUF3QjtRQUMxQixJQUFJO1VBQ0YsT0FBT1QsRUFBRUcsV0FBV0ksR0FBR0MsQ0FBQztRQUMxQixVQUFFO1VBQ0FILEVBQUVJLHdCQUF3QjtRQUM1QjtNQUNGO01BQ0FQLFFBQVFFLGNBQWMsVUFBU0csR0FBR0csR0FBR0YsR0FBRztRQUN0Q0gsRUFBRUksd0JBQXdCO1FBQzFCLElBQUk7VUFDRixPQUFPVCxFQUFFSSxZQUFZRyxHQUFHRyxHQUFHRixDQUFDO1FBQzlCLFVBQUU7VUFDQUgsRUFBRUksd0JBQXdCO1FBQzVCO01BQ0Y7SUFDRjtJQWpCTTtFQUFBO0FBQUE7OztBQ1BOO0FBQUFFO0VBQUFDO0FBQUE7QUFBQUM7QUFBQUMsa0NBQWNDLDJCQUFkRjtBQUVBLG9CQUFxQkU7QUFDckIsSUFBT0Msd0JBQVFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvZGVtby9vdXQifQ==