System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@bgroup/ui","0.0.34"]]);
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

// .beyond/uimport/@bgroup/ui/reactive-model.0.0.34.js
var reactive_model_0_0_34_exports = {};
__export(reactive_model_0_0_34_exports, {
  ReactiveModel: () => ReactiveModel,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(reactive_model_0_0_34_exports);

// node_modules/@bgroup/ui/reactive-model/reactive-model.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.34/reactive-model"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./reactive-model", {
  hash: 3765919911,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactiveModel = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class ReactiveModel2 extends _core.Events {
      _ready;
      get ready() {
        return this._ready;
      }
      _fetching;
      get fetching() {
        return this._fetching;
      }
      set fetching(value) {
        if (value === this._fetching) return;
        this._fetching = value;
        this.triggerEvent();
      }
      _fetched;
      get fetched() {
        return this._fetched;
      }
      _processing;
      get processing() {
        return this._processing;
      }
      _processed;
      get processed() {
        return this._processed;
      }
      _loaded;
      get loaded() {
        return this._loaded;
      }
      triggerEvent = (event = "change") => this.trigger(event);
      _set(property, value) {
        let props = {};
        if (property && value !== "undefined") props[property] = value;else props = property;
        let updated = false;
        for (const prop in props) {
          const key = `_${prop}`;
          if (!this.hasOwnProperty(key)) continue;
          if (this[key] === props[prop]) continue;
          this[key] = props[prop];
          updated = true;
        }
        if (updated) this.triggerEvent();
      }
      getProperties() {
        const props = {};
        Object.keys(this).forEach(property => props[property.replace("_", "")] = this[property]);
        return props;
      }
    }
    exports.ReactiveModel = ReactiveModel2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./reactive-model",
  "from": "ReactiveModel",
  "name": "ReactiveModel"
}];
var ReactiveModel;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactiveModel") && (ReactiveModel = require2 ? require2("./reactive-model").ReactiveModel : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmdyb3VwL3VpL3JlYWN0aXZlLW1vZGVsLjAuMC4zNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL3JlYWN0aXZlLW1vZGVsL19fc291cmNlcy9yZWFjdGl2ZS1tb2RlbC9yZWFjdGl2ZS1tb2RlbC50cyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIlJlYWN0aXZlTW9kZWwiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJFdmVudHMiLCJfcmVhZHkiLCJyZWFkeSIsIl9mZXRjaGluZyIsImZldGNoaW5nIiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJfZmV0Y2hlZCIsImZldGNoZWQiLCJfcHJvY2Vzc2luZyIsInByb2Nlc3NpbmciLCJfcHJvY2Vzc2VkIiwicHJvY2Vzc2VkIiwiX2xvYWRlZCIsImxvYWRlZCIsImV2ZW50IiwidHJpZ2dlciIsIl9zZXQiLCJwcm9wZXJ0eSIsInByb3BzIiwidXBkYXRlZCIsInByb3AiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInJlcGxhY2UiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtJQUVpQixNQUNYSCx1QkFBc0JJLGFBQU07TUFFOUJDO01BQ0EsSUFBSUMsUUFBSztRQUNMLE9BQU8sS0FBS0Q7TUFDaEI7TUFFQUU7TUFDQSxJQUFJQyxXQUFRO1FBQ1IsT0FBTyxLQUFLRDtNQUNoQjtNQUVBLElBQUlDLFNBQVNDLE9BQWM7UUFDdkIsSUFBSUEsVUFBVSxLQUFLRixXQUFXO1FBQzlCLEtBQUtBLFlBQVlFO1FBQ2pCLEtBQUtDLGNBQVk7TUFDckI7TUFFQUM7TUFDQSxJQUFJQyxVQUFPO1FBQ1AsT0FBTyxLQUFLRDtNQUNoQjtNQUVBRTtNQUNBLElBQUlDLGFBQVU7UUFDVixPQUFPLEtBQUtEO01BQ2hCO01BRUFFO01BQ0EsSUFBSUMsWUFBUztRQUNULE9BQU8sS0FBS0Q7TUFDaEI7TUFFQUU7TUFDQSxJQUFJQyxTQUFNO1FBQ04sT0FBTyxLQUFLRDtNQUNoQjtNQUVBUCxlQUFlLENBQUNTLFFBQWdCLGFBQW1CLEtBQUtDLFFBQVFELEtBQUs7TUFPckVFLEtBQUtDLFVBQWViLE9BQVU7UUFDMUIsSUFBSWMsUUFBYztRQUNsQixJQUFJRCxZQUFZYixVQUFVLGFBQWFjLE1BQU1ELFlBQVliLFdBQVljLFFBQVFEO1FBQzdFLElBQUlFLFVBQW1CO1FBR3ZCLFdBQVdDLFFBQVFGLE9BQU87VUFDdEIsTUFBTUcsTUFBYyxJQUFJRDtVQUN4QixJQUFJLENBQUMsS0FBS0UsZUFBZUQsR0FBRyxHQUFHO1VBRS9CLElBQUksS0FBS0EsU0FBU0gsTUFBTUUsT0FBTztVQUMvQixLQUFLQyxPQUFPSCxNQUFNRTtVQUNsQkQsVUFBVTs7UUFHZCxJQUFJQSxTQUFTLEtBQUtkLGNBQVk7TUFDbEM7TUFFQWtCLGdCQUFhO1FBQ1QsTUFBTUwsUUFBUTtRQUNkTSxPQUFPQyxLQUFLLElBQUksRUFBRUMsUUFBUVQsWUFBWUMsTUFBTUQsU0FBU1UsUUFBUSxLQUFLLEVBQUUsS0FBSyxLQUFLVixTQUFTO1FBQ3ZGLE9BQU9DO01BQ1g7O0lBRUhVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvdm9pY2UtZ2VuaXVzL3Byb2plY3Qvb3V0In0=