System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/events@0.0.6/events"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.6"],["@beyond-js/reactive","1.0.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/events@0.0.6/events', dep)],
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

// .beyond/uimport/@beyond-js/reactive/model.1.0.0.js
var model_1_0_0_exports = {};
__export(model_1_0_0_exports, {
  ReactiveModel: () => ReactiveModel,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  reactiveProps: () => reactiveProps
});
module.exports = __toCommonJS(model_1_0_0_exports);

// node_modules/@beyond-js/reactive/model/model.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/events@0.0.6/events"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@1.0.0/model"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/events/events", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 2937763577,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactiveModel = void 0;
    var _events = require2("@beyond-js/events/events");
    class ReactiveModel2 extends _events.Events {
      schema;
      fetching;
      fetched = false;
      processing = false;
      ready = false;
      processed = false;
      localdb = false;
      properties;
      loaded = false;
      constructor() {
        super();
        this.reactiveProps(["fetching", "fetched", "processing", "processed", "loaded", "ready"]);
      }
      reactiveProps(props) {
        for (const propKey of props) {
          const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
          const initialValue = descriptor ? descriptor.value : void 0;
          this.defineReactiveProp(propKey, initialValue);
        }
      }
      defineReactiveProp(propKey, initialValue) {
        const privatePropKey = `__${String(propKey)}`;
        Object.defineProperty(this, propKey, {
          get() {
            if (!this.hasOwnProperty(privatePropKey)) {
              this[privatePropKey] = initialValue;
            }
            return this[privatePropKey];
          },
          set(newVal) {
            if (newVal === this[privatePropKey]) return;
            this[privatePropKey] = newVal;
            this.triggerEvent();
          },
          enumerable: true,
          configurable: true
        });
      }
      triggerEvent = (event = "change") => this.trigger(event);
      set(property, value = void 0) {
        let props = {};
        let updated = false;
        for (const prop in props) {
          if (!Object.prototype.hasOwnProperty.call(this, prop)) continue;
          if (this[prop] === props[prop]) continue;
          this[prop] = props[prop];
          updated = true;
        }
        if (updated) this.triggerEvent();
      }
      getProperties() {
        const props = {};
        const properties = this.properties || this.skeleton;
        properties.forEach(property => {
          props[property] = this[property];
        });
        return props;
      }
    }
    exports.ReactiveModel = ReactiveModel2;
  }
});
ims.set("./property", {
  hash: 3124326805,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.defineReactiveProp = defineReactiveProp;
    exports.reactiveProps = reactiveProps2;
    function _defineReactiveProp(target, propKey, initialValue) {
      const privatePropKey = `__${String(propKey)}`;
      Object.defineProperty(target, propKey, {
        get() {
          if (!target.hasOwnProperty(privatePropKey)) {
            target[privatePropKey] = initialValue;
          }
          return target[privatePropKey];
        },
        set(newVal) {
          if (newVal === target[privatePropKey]) return;
          target[privatePropKey] = newVal;
          target.triggerEvent();
        },
        enumerable: true,
        configurable: true
      });
    }
    function reactiveProps2(props) {
      return function (target) {
        const targetProto = "prototype" in target ? target.prototype : target;
        for (const propKey of props) {
          const descriptor = Object.getOwnPropertyDescriptor(targetProto, propKey);
          const initialValue = descriptor ? descriptor.value : void 0;
          defineReactiveProp(targetProto, propKey, initialValue);
        }
      };
    }
    function defineReactiveProp(target, propKey, initialValue) {
      const privatePropKey = `__${String(propKey)}`;
      Object.defineProperty(target, propKey, {
        get() {
          if (!target.hasOwnProperty(privatePropKey)) {
            target[privatePropKey] = initialValue;
          }
          return target[privatePropKey];
        },
        set(newVal) {
          target.setReactiveProp(propKey, newVal);
        },
        enumerable: true,
        configurable: true
      });
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "ReactiveModel",
  "name": "ReactiveModel"
}, {
  "im": "./property",
  "from": "reactiveProps",
  "name": "reactiveProps"
}];
var ReactiveModel, reactiveProps;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactiveModel") && (ReactiveModel = require2 ? require2("./index").ReactiveModel : value);
  (require2 || prop === "reactiveProps") && (reactiveProps = require2 ? require2("./property").reactiveProps : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL21vZGVsLjEuMC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwvX19zb3VyY2VzL21vZGVsL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwvX19zb3VyY2VzL21vZGVsL3Byb3BlcnR5LnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiUmVhY3RpdmVNb2RlbCIsIl9fYmV5b25kX3BrZyIsImhtciIsInJlYWN0aXZlUHJvcHMiLCJtb2R1bGUiLCJFdmVudHMiLCJzY2hlbWEiLCJmZXRjaGluZyIsImZldGNoZWQiLCJwcm9jZXNzaW5nIiwicmVhZHkiLCJwcm9jZXNzZWQiLCJsb2NhbGRiIiwicHJvcGVydGllcyIsImxvYWRlZCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwcm9wS2V5IiwiZGVzY3JpcHRvciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImluaXRpYWxWYWx1ZSIsInZhbHVlIiwidW5kZWZpbmVkIiwiZGVmaW5lUmVhY3RpdmVQcm9wIiwicHJpdmF0ZVByb3BLZXkiLCJTdHJpbmciLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImhhc093blByb3BlcnR5Iiwic2V0IiwibmV3VmFsIiwidHJpZ2dlckV2ZW50IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImV2ZW50IiwidHJpZ2dlciIsInByb3BlcnR5IiwidXBkYXRlZCIsInByb3AiLCJwcm90b3R5cGUiLCJjYWxsIiwiZ2V0UHJvcGVydGllcyIsInNrZWxldG9uIiwiZm9yRWFjaCIsImV4cG9ydHMiLCJfZGVmaW5lUmVhY3RpdmVQcm9wIiwidGFyZ2V0IiwidGFyZ2V0UHJvdG8iLCJzZXRSZWFjdGl2ZVByb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBOEJpQixNQUFnQkosdUJBQXlCSyxlQUFNO01BQ3BEQztNQUdWQztNQUNBQyxVQUFtQjtNQUNuQkMsYUFBc0I7TUFDdEJDLFFBQWlCO01BQ2pCQyxZQUFxQjtNQUNYQyxVQUFVO01BQ1ZDO01BQ1ZDLFNBQWtCO01BRWxCQztRQUNFLE9BQUs7UUFDTCxLQUFLWixjQUFzQixDQUFDLFlBQVksV0FBVyxjQUFjLGFBQWEsVUFBVSxPQUFPLENBQUM7TUFDbEc7TUFFVUEsY0FBaUJhLE9BQXFCO1FBQzlDLFdBQVdDLFdBQVdELE9BQU87VUFDM0IsTUFBTUUsYUFBYUMsT0FBT0MseUJBQXlCLE1BQU1ILE9BQU87VUFDaEUsTUFBTUksZUFBZUgsYUFBYUEsV0FBV0ksUUFBUUM7VUFFckQsS0FBS0MsbUJBQW1CUCxTQUFTSSxZQUFZOztNQUVqRDtNQUVVRyxtQkFBc0JQLFNBQWtCSSxjQUF3QjtRQUN4RSxNQUFNSSxpQkFBaUIsS0FBS0MsT0FBT1QsT0FBTztRQUUxQ0UsT0FBT1EsZUFBZSxNQUFNVixTQUFTO1VBQ25DVyxNQUFHO1lBQ0QsSUFBSSxDQUFDLEtBQUtDLGVBQWVKLGNBQWMsR0FBRztjQUN4QyxLQUFLQSxrQkFBa0JKOztZQUV6QixPQUFPLEtBQUtJO1VBQ2Q7VUFDQUssSUFBSUMsUUFBa0I7WUFDcEIsSUFBSUEsV0FBVyxLQUFLTixpQkFBaUI7WUFFckMsS0FBS0Esa0JBQWtCTTtZQUN2QixLQUFLQyxjQUFZO1VBQ25CO1VBQ0FDLFlBQVk7VUFDWkMsY0FBYztTQUNmO01BQ0g7TUFTQUYsZUFBZSxDQUFDRyxRQUFnQixhQUFtQixLQUFLQyxRQUFRRCxLQUFLO01BUXJFTCxJQUFJTyxVQUEyQ2YsUUFBeUJDLFFBQVM7UUFDL0UsSUFBSVAsUUFBeUM7UUFDN0MsSUFBSXNCLFVBQVU7UUFFZCxXQUFXQyxRQUFRdkIsT0FBTztVQUN4QixJQUFJLENBQUNHLE9BQU9xQixVQUFVWCxlQUFlWSxLQUFLLE1BQU1GLElBQUksR0FBRztVQUN2RCxJQUFJLEtBQUtBLFVBQVV2QixNQUFNdUIsT0FBTztVQUNoQyxLQUFLQSxRQUFRdkIsTUFBTXVCO1VBQ25CRCxVQUFVOztRQUdaLElBQUlBLFNBQVMsS0FBS04sY0FBWTtNQUNoQztNQUVBVSxnQkFBYTtRQUNYLE1BQU0xQixRQUE2QjtRQUNuQyxNQUFNSCxhQUFhLEtBQUtBLGNBQWMsS0FBSzhCO1FBRTNDOUIsV0FBVytCLFFBQVFQLFlBQVc7VUFDNUJyQixNQUFNcUIsWUFBWSxLQUFLQTtRQUN6QixDQUFDO1FBQ0QsT0FBT3JCO01BQ1Q7O0lBQ0Q2Qjs7Ozs7Ozs7Ozs7OztJQ25IRCxTQUFTQyxvQkFBdUJDLFFBQTBCOUIsU0FBa0JJLGNBQXdCO01BQ25HLE1BQU1JLGlCQUFpQixLQUFLQyxPQUFPVCxPQUFPO01BRTFDRSxPQUFPUSxlQUFlb0IsUUFBUTlCLFNBQVM7UUFDdENXLE1BQUc7VUFDRixJQUFJLENBQUNtQixPQUFPbEIsZUFBZUosY0FBYyxHQUFHO1lBQzNDc0IsT0FBT3RCLGtCQUFrQko7O1VBRTFCLE9BQU8wQixPQUFPdEI7UUFDZjtRQUNBSyxJQUFJQyxRQUFrQjtVQUNyQixJQUFJQSxXQUFXZ0IsT0FBT3RCLGlCQUFpQjtVQUN2Q3NCLE9BQU90QixrQkFBa0JNO1VBQ3pCZ0IsT0FBT2YsY0FBWTtRQUNwQjtRQUNBQyxZQUFZO1FBQ1pDLGNBQWM7T0FDZDtJQUNGO0lBQ2tCLFNBQVUvQixlQUMzQmEsT0FBcUI7TUFFckIsT0FBTyxVQUFVK0IsUUFBb0Y7UUFDcEcsTUFBTUMsY0FBYyxlQUFlRCxTQUFTQSxPQUFPUCxZQUFZTztRQUUvRCxXQUFXOUIsV0FBV0QsT0FBTztVQUM1QixNQUFNRSxhQUFhQyxPQUFPQyx5QkFBeUI0QixhQUFhL0IsT0FBTztVQUN2RSxNQUFNSSxlQUFlSCxhQUFhQSxXQUFXSSxRQUFRQztVQUVyREMsbUJBQW1Cd0IsYUFBYS9CLFNBQVNJLFlBQVk7O01BRXZEO0lBQ0Q7SUFFTSxTQUFVRyxtQkFBc0J1QixRQUEwQjlCLFNBQWtCSSxjQUF3QjtNQUN6RyxNQUFNSSxpQkFBaUIsS0FBS0MsT0FBT1QsT0FBTztNQUUxQ0UsT0FBT1EsZUFBZW9CLFFBQVE5QixTQUFTO1FBQ3RDVyxNQUFHO1VBQ0YsSUFBSSxDQUFDbUIsT0FBT2xCLGVBQWVKLGNBQWMsR0FBRztZQUMzQ3NCLE9BQU90QixrQkFBa0JKOztVQUUxQixPQUFPMEIsT0FBT3RCO1FBQ2Y7UUFDQUssSUFBSUMsUUFBa0I7VUFDckJnQixPQUFPRSxnQkFBZ0JoQyxTQUFTYyxNQUFNO1FBQ3ZDO1FBQ0FFLFlBQVk7UUFDWkMsY0FBYztPQUNkO0lBQ0YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii92b2ljZS1nZW5pdXMvcHJvamVjdC9vdXQifQ==