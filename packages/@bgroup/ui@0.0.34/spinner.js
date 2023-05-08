System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@bgroup/ui","0.0.34"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep)],
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

// .beyond/uimport/@bgroup/ui/spinner.0.0.34.js
var spinner_0_0_34_exports = {};
__export(spinner_0_0_34_exports, {
  BeyondSpinner: () => BeyondSpinner,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(spinner_0_0_34_exports);

// node_modules/@bgroup/ui/spinner/spinner.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.34/spinner"
  },
  "type": "code",
  "name": "spinner"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/styles", dependency_2]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.34/spinner");
var ims = /* @__PURE__ */new Map();
ims.set("./spiner", {
  hash: 2921182323,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondSpinner = void 0;
    var _react = require2("react");
    const BeyondSpinner2 = (0, _react.forwardRef)((props, ref) => {
      const {
        color,
        className,
        primary,
        secondary,
        size
      } = props;
      let stroke;
      if (primary) stroke = "var(--primary)";else if (secondary) stroke = "var(--secondary)";else if (color) stroke = color;else stroke = "var(--primary)";
      const cls = className ? `${className} beyond-element-spinner` : "beyond-element-spinner";
      const style = {
        style: {}
      };
      if (size) {
        style.style.height = size;
        style.style.width = size;
      }
      ;
      return _react.default.createElement("div", {
        className: cls,
        ref,
        ...style
      }, _react.default.createElement("svg", {
        viewBox: "0 0 100 100"
      }, _react.default.createElement("circle", {
        cx: "50",
        cy: "50",
        r: "20",
        style: {
          stroke
        }
      })));
    });
    exports.BeyondSpinner = BeyondSpinner2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./spiner",
  "from": "BeyondSpinner",
  "name": "BeyondSpinner"
}];
var BeyondSpinner;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "BeyondSpinner") && (BeyondSpinner = require2 ? require2("./spiner").BeyondSpinner : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmdyb3VwL3VpL3NwaW5uZXIuMC4wLjM0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvc3Bpbm5lci9fX3NvdXJjZXMvc3Bpbm5lci9jb2RlL3RzL3NwaW5lci50c3giXSwibmFtZXMiOlsiX19leHBvcnQiLCJCZXlvbmRTcGlubmVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwicHJvcHMiLCJyZWYiLCJjb2xvciIsImNsYXNzTmFtZSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJzaXplIiwic3Ryb2tlIiwiY2xzIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsIlJlYWN0Iiwidmlld0JveCIsImN4IiwiY3kiLCJyIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFjRSxNQUFNSCxrQkFFRixzQkFDRixDQUFDSSxPQUFtQkMsUUFBK0M7TUFDakUsTUFBTTtRQUFFQztRQUFPQztRQUFXQztRQUFTQztRQUFXQztNQUFJLElBQUtOO01BQ3ZELElBQUlPO01BQ0osSUFBSUgsU0FBU0csU0FBUywwQkFDYkYsV0FBV0UsU0FBUyw0QkFDcEJMLE9BQU9LLFNBQVNMLFdBQ3BCSyxTQUFTO01BRWQsTUFBTUMsTUFBY0wsWUFDaEIsR0FBR0EscUNBQ0g7TUFDSixNQUFNTSxRQUFhO1FBQUVBLE9BQU87TUFBRTtNQUM5QixJQUFJSCxNQUFNO1FBQ1JHLE1BQU1BLE1BQU1DLFNBQVNKO1FBQ3JCRyxNQUFNQSxNQUFNRSxRQUFRTDs7TUFDckI7TUFDRCxPQUNFTTtRQUFLVCxXQUFXSztRQUFLUDtRQUFRLEdBQU1RO01BQUssR0FDdENHO1FBQUtDLFNBQVE7TUFBYSxHQUN4QkQ7UUFBUUUsSUFBRztRQUFLQyxJQUFHO1FBQUtDLEdBQUU7UUFBS1AsT0FBTztVQUFFRjtRQUFNO01BQUUsRUFBSSxDQUNoRDtJQUdaLENBQUM7SUFDRFUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii92b2ljZS1nZW5pdXMvcHJvamVjdC9vdXQifQ==