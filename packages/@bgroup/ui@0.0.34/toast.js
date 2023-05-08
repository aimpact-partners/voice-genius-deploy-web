System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles","react@18.2.0","@bgroup/ui@0.0.34/hooks","@bgroup/ui@0.0.34/reactive-model","@beyond-js/kernel@0.1.9/routing","@bgroup/ui@0.0.34/icons"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@bgroup/ui","0.0.34"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@bgroup/ui@0.0.34/hooks', dep), dep => dependencies.set('@bgroup/ui@0.0.34/reactive-model', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@bgroup/ui@0.0.34/icons', dep)],
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

// .beyond/uimport/@bgroup/ui/toast.0.0.34.js
var toast_0_0_34_exports = {};
__export(toast_0_0_34_exports, {
  IToast: () => IToast,
  Toast: () => Toast,
  ToastTypes: () => ToastTypes,
  Toasts: () => Toasts,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  toast: () => toast
});
module.exports = __toCommonJS(toast_0_0_34_exports);

// node_modules/@bgroup/ui/toast/toast.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var dependency_2 = __toESM(require("react@18.2.0"), 0);
var dependency_3 = __toESM(require("@bgroup/ui@0.0.34/hooks"), 0);
var dependency_4 = __toESM(require("@bgroup/ui@0.0.34/reactive-model"), 0);
var dependency_5 = __toESM(require("@bgroup/ui@0.0.34/icons"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.34/toast"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2], ["@bgroup/ui/hooks", dependency_3], ["@bgroup/ui/reactive-model", dependency_4], ["@bgroup/ui/icons", dependency_5]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.34/toast");
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 3366825821,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Toasts = Toasts2;
    var _react = require2("react");
    var _hooks = require2("@bgroup/ui/hooks");
    var _model = require2("./model");
    var _toast = require2("./toast");
    function Toasts2({
      position = {
        bottom: "1rem",
        right: "1rem"
      },
      className,
      ...props
    }) {
      const [items, setItems] = _react.default.useState([]);
      (0, _hooks.useBinder)([_model.toast], () => setItems(_model.toast.current), "current-toasts-changed");
      const elements = items.map(item => _react.default.createElement(_toast.Toast, {
        key: item.id,
        ...item
      }));
      return _react.default.createElement("div", {
        style: position,
        className: `essential__toasts ${className}`,
        ...props
      }, elements);
    }
  }
});
ims.set("./model", {
  hash: 3981715842,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.toast = void 0;
    var _reactiveModel = require2("@bgroup/ui/reactive-model");
    class Toast2 extends _reactiveModel.ReactiveModel {
      #current;
      get current() {
        return this.#current;
      }
      set current(newValue) {
        this.#current = newValue;
        this.triggerEvent("current-toasts-changed");
      }
      constructor() {
        super();
        this.#current = [];
      }
      #generateUniqueId() {
        return crypto.getRandomValues(new Uint8Array(16)).toString();
      }
      #add(type, message, duration) {
        const newToast = {
          id: this.#generateUniqueId(),
          message,
          type,
          duration
        };
        this.#current = [...this.#current, newToast];
        this.triggerEvent("current-toasts-changed");
        return newToast.id;
      }
      remove(toastId) {
        this.#current = this.#current.filter(toast3 => toast3.id !== toastId);
        this.triggerEvent("current-toasts-changed");
      }
      success(message, duration) {
        return this.#add("success", message, duration);
      }
      error(message, duration) {
        return this.#add("error", message, duration);
      }
      warning(message, duration) {
        return this.#add("warning", message, duration);
      }
      info(message, duration) {
        return this.#add("info", message, duration);
      }
      loading(message, duration) {
        return this.#add("loading", message, duration);
      }
    }
    const toast2 = new Toast2();
    exports.toast = toast2;
  }
});
ims.set("./toast", {
  hash: 1589754565,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Toast = Toast2;
    var _react = require2("react");
    var _model = require2("./model");
    var _icons = require2("@bgroup/ui/icons");
    const DEFAULT_DURATION = 3e3;
    const ANIMATION_MARGIN = 300;
    function Toast2({
      type,
      message,
      duration,
      id
    }) {
      const toastRef = _react.default.useRef(null);
      _react.default.useEffect(() => {
        if (toastRef.current) {
          toastRef.current.classList.add("enter");
        }
        return () => {
          if (toastRef.current) toastRef.current.classList.remove("enter");
        };
      }, [toastRef.current]);
      _react.default.useEffect(() => {
        duration = duration ?? DEFAULT_DURATION;
        setTimeout(() => {
          toastRef.current.classList.remove("enter");
          toastRef.current.classList.add("exit");
        }, duration);
        const timeout = setTimeout(() => {
          _model.toast.current = _model.toast.current.filter(item => item.id !== id);
        }, duration + ANIMATION_MARGIN);
        return () => clearTimeout(timeout);
      }, [duration, id]);
      const icons = {
        error: "closeCircle",
        success: "tickCircle",
        info: "infoCircle",
        loading: "refreshCircle",
        warning: "infoCircle"
      };
      return _react.default.createElement("article", {
        ref: toastRef,
        className: `toast ${type}`
      }, _react.default.createElement(_icons.BeyondIcon, {
        icon: icons[type],
        className: "icon"
      }), _react.default.createElement("p", {
        className: "message"
      }, message));
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "Toasts",
  "name": "Toasts"
}, {
  "im": "./model",
  "from": "ToastTypes",
  "name": "ToastTypes"
}, {
  "im": "./model",
  "from": "IToast",
  "name": "IToast"
}, {
  "im": "./model",
  "from": "toast",
  "name": "toast"
}, {
  "im": "./toast",
  "from": "Toast",
  "name": "Toast"
}];
var Toasts, ToastTypes, IToast, toast, Toast;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Toasts") && (Toasts = require2 ? require2("./index").Toasts : value);
  (require2 || prop === "ToastTypes") && (ToastTypes = require2 ? require2("./model").ToastTypes : value);
  (require2 || prop === "IToast") && (IToast = require2 ? require2("./model").IToast : value);
  (require2 || prop === "toast") && (toast = require2 ? require2("./model").toast : value);
  (require2 || prop === "Toast") && (Toast = require2 ? require2("./toast").Toast : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmdyb3VwL3VpL3RvYXN0LjAuMC4zNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL3RvYXN0L19fc291cmNlcy90b2FzdC9jb2RlL3RzL2luZGV4LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL3RvYXN0L19fc291cmNlcy90b2FzdC9jb2RlL3RzL21vZGVsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvdG9hc3QvX19zb3VyY2VzL3RvYXN0L2NvZGUvdHMvdG9hc3QudHN4Il0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiSVRvYXN0IiwiVG9hc3QiLCJUb2FzdFR5cGVzIiwiVG9hc3RzIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwidG9hc3QiLCJtb2R1bGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnQiLCJlbGVtZW50cyIsIm1hcCIsIml0ZW0iLCJrZXkiLCJpZCIsInN0eWxlIiwiUmVhY3RpdmVNb2RlbCIsIm5ld1ZhbHVlIiwidHJpZ2dlckV2ZW50IiwiY29uc3RydWN0b3IiLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50OEFycmF5IiwidG9TdHJpbmciLCJ0eXBlIiwibWVzc2FnZSIsImR1cmF0aW9uIiwibmV3VG9hc3QiLCJyZW1vdmUiLCJ0b2FzdElkIiwiZmlsdGVyIiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsImluZm8iLCJsb2FkaW5nIiwiZXhwb3J0cyIsIkRFRkFVTFRfRFVSQVRJT04iLCJBTklNQVRJT05fTUFSR0lOIiwidG9hc3RSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwidGltZW91dCIsImNsZWFyVGltZW91dCIsImljb25zIiwicmVmIiwiQmV5b25kSWNvbiIsImlj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QUcsQ0FBQ1csU0FBUzlCLE9BQU8sQ0FBQztNQUVyQkYsZUFBTWtDLFVBQVUsTUFBSztRQUNwQmYsV0FBV0EsWUFBWVc7UUFFdkJPLFdBQVcsTUFBSztVQUNmTCxTQUFTOUIsUUFBUWlDLFVBQVVkLE9BQU8sT0FBTztVQUN6Q1csU0FBUzlCLFFBQVFpQyxVQUFVQyxJQUFJLE1BQU07UUFDdEMsR0FBR2pCLFFBQVE7UUFFWCxNQUFNbUIsVUFBVUQsV0FBVyxNQUFLO1VBQy9COUMsYUFBTVcsVUFBVVgsYUFBTVcsUUFBUXFCLE9BQVFsQixRQUFpQkEsS0FBS0UsT0FBT0EsRUFBRTtRQUN0RSxHQUFHWSxXQUFXWSxnQkFBZ0I7UUFFOUIsT0FBTyxNQUFNUSxhQUFhRCxPQUFPO01BQ2xDLEdBQUcsQ0FBQ25CLFVBQVVaLEVBQUUsQ0FBQztNQUNqQixNQUFNaUMsUUFBUTtRQUNiZixPQUFPO1FBQ1BELFNBQVM7UUFDVEcsTUFBTTtRQUNOQyxTQUFTO1FBQ1RGLFNBQVM7O01BRVYsT0FDQzFCO1FBQVN5QyxLQUFLVDtRQUFVcEMsV0FBVyxTQUFTcUI7TUFBTSxHQUNqRGpCLDZCQUFDMEMsbUJBQVU7UUFBQ0MsTUFBTUgsTUFBTXZCO1FBQU9yQixXQUFVO01BQU0sSUFDL0NJO1FBQUdKLFdBQVU7TUFBUyxHQUFFc0IsT0FBTyxDQUFLO0lBR3ZDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvdm9pY2UtZ2VuaXVzL3Byb2plY3Qvb3V0In0=