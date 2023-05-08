System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","scheduler@0.23.0","react-dom@18.2.0","react-dom@18.2.0/client","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.4/render","@beyond-js/kernel@0.1.9/styles","@beyond-js/widgets@0.1.4/controller"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"],["@beyond-js/widgets","0.1.4"],["@beyond-js/react-18-widgets","0.0.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep), dep => dependencies.set('react-dom@18.2.0/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/controller', dep)],
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

// .beyond/uimport/temp/@beyond-js/react-18-widgets/base.0.0.5.js
var base_0_0_5_exports = {};
__export(base_0_0_5_exports, {
  ReactWidgetController: () => ReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(base_0_0_5_exports);

// node_modules/@beyond-js/react-18-widgets/base/base.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("react-dom@18.2.0/client"), 0);
var dependency_3 = __toESM(require("@beyond-js/widgets@0.1.4/controller"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@0.0.4/base"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["react-dom/client", dependency_2], ["@beyond-js/widgets/controller", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./controller", {
  hash: 2510685826,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactWidgetController = void 0;
    var React = require2("react");
    var _client = require2("react-dom/client");
    var _controller = require2("@beyond-js/widgets/controller");
    var _widget = require2("./widget");
    var _wrapper = require2("./wrapper");
    class ReactWidgetController2 extends _controller.WidgetClientController {
      #wrapper;
      #root;
      #mounted = false;
      get mounted() {
        return this.#mounted;
      }
      get Widget() {
        return null;
      }
      mount(props) {
        if (this.#mounted) return;
        this.#mounted = true;
        if (!this.Widget) {
          return {
            errors: [`Widget "${this.element}" does not export a Widget class`]
          };
        }
        props = Object.assign({
          widget: this.widget,
          attributes: this.attributes,
          component: this.widget,
          store: this.store
        }, props ? props : {});
        const holder = this.widget.holder;
        const hydrate = !!holder.children.length;
        try {
          const wrapper = this.#wrapper = new _wrapper.Wrapper(this);
          const {
            styles,
            widget
          } = this;
          const {
            holder: holder2
          } = widget;
          const p = {
            wrapper,
            props,
            styles,
            holder: holder2,
            hydrate
          };
          const element = React.createElement(_widget.default, p);
          if (hydrate) {
            this.#root = (0, _client.hydrateRoot)(holder2, element);
          } else {
            const root = this.#root = (0, _client.createRoot)(holder2);
            root.render(element);
          }
        } catch (exc) {
          console.log(`Error rendering widget "${this.widget.localName}":`);
          console.log(exc.stack);
        }
      }
      unmount() {
        if (!this.#mounted) return;
        this.#mounted = false;
        this.#root.unmount();
      }
      refresh() {
        this.#wrapper.changed();
      }
    }
    exports.ReactWidgetController = ReactWidgetController2;
  }
});
ims.set("./styles", {
  hash: 3645751033,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");
    function _default({
      styles
    }) {
      const rs = React.useState(0);
      React.useEffect(() => {
        const refresh = () => rs[1](prev => prev + 1);
        styles.on("change", refresh);
        return () => styles.off("change", refresh) && void 0;
      }, []);
      const head = [...styles.resources].map(url => {
        const loaded = () => styles.onloaded(url);
        return React.createElement("link", {
          key: url,
          href: url,
          rel: "stylesheet",
          onLoad: loaded,
          onError: loaded
        });
      });
      return React.createElement(React.Fragment, null, head);
    }
  }
});
ims.set("./widget", {
  hash: 90867181,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");
    var _styles = require2("./styles");
    function _default({
      wrapper,
      props,
      styles,
      holder,
      hydrate
    }) {
      const elements = [];
      elements.push(React.createElement(_styles.default, {
        key: "styles",
        styles,
        widget: props.widget
      }));
      const rs = React.useState(0);
      const refresh = () => rs[1](rs[0] + 1);
      wrapper.changed = refresh;
      const loaded = (() => {
        !styles.loaded && styles.ready.then(refresh);
        holder.style.display = "";
        return styles.loaded;
      })();
      const {
        Widget
      } = wrapper;
      const widget = React.createElement(Widget, {
        key: "widget",
        ...props
      });
      (hydrate || loaded) && elements.push(widget);
      return React.createElement(React.Fragment, null, elements);
    }
  }
});
ims.set("./wrapper", {
  hash: 4175409966,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Wrapper = void 0;
    class Wrapper {
      #Widget;
      get Widget() {
        return this.#Widget.Widget;
      }
      changed = () => void 0;
      constructor(Widget) {
        this.#Widget = Widget;
      }
    }
    exports.Wrapper = Wrapper;
  }
});
__pkg.exports.descriptor = [{
  "im": "./controller",
  "from": "ReactWidgetController",
  "name": "ReactWidgetController"
}];
var ReactWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactWidgetController") && (ReactWidgetController = require2 ? require2("./controller").ReactWidgetController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9iYXNlLjAuMC41LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL2NvbnRyb2xsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC0xOC13aWRnZXRzL2Jhc2UvX19zb3VyY2VzL2Jhc2Uvc3R5bGVzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS93aWRnZXQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL3dyYXBwZXIudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyIiwibW91bnRlZCIsIldpZGdldCIsIm1vdW50IiwicHJvcHMiLCJlcnJvcnMiLCJlbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwid2lkZ2V0IiwiYXR0cmlidXRlcyIsImNvbXBvbmVudCIsInN0b3JlIiwiaG9sZGVyIiwiaHlkcmF0ZSIsImNoaWxkcmVuIiwibGVuZ3RoIiwid3JhcHBlciIsIldyYXBwZXIiLCJzdHlsZXMiLCJwIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwicm9vdCIsInJlbmRlciIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbE5hbWUiLCJzdGFjayIsInVubW91bnQiLCJyZWZyZXNoIiwiY2hhbmdlZCIsImV4cG9ydHMiLCJycyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicHJldiIsIm9uIiwib2ZmIiwiaGVhZCIsInJlc291cmNlcyIsIm1hcCIsInVybCIsImxvYWRlZCIsIm9ubG9hZGVkIiwia2V5IiwiaHJlZiIsInJlbCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJlbGVtZW50cyIsInB1c2giLCJTdHlsZXMiLCJyZWFkeSIsInRoZW4iLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBRWlCLE1BQ0ZILCtCQUE4QkksbUNBQXNCO01BQy9EO01BQ0E7TUFFQSxXQUFXO01BQ1gsSUFBSUMsVUFBTztRQUNQLE9BQU8sS0FBSztNQUNoQjtNQUdBLElBQUlDLFNBQU07UUFDTixPQUFPO01BQ1g7TUFFQUMsTUFBTUMsT0FBMkI7UUFDN0IsSUFBSSxLQUFLLFVBQVU7UUFDbkIsS0FBSyxXQUFXO1FBRWhCLElBQUksQ0FBQyxLQUFLRixRQUFRO1VBQ2QsT0FBTztZQUFDRyxRQUFRLENBQUMsV0FBVyxLQUFLQyx5Q0FBeUM7VUFBQzs7UUFHL0VGLFFBQVFHLE9BQU9DLE9BQU87VUFDbEJDLFFBQVEsS0FBS0E7VUFDYkMsWUFBWSxLQUFLQTtVQUNqQkMsV0FBVyxLQUFLRjtVQUNoQkcsT0FBTyxLQUFLQTtXQUNiUixRQUFRQSxRQUFRLEVBQUU7UUFFckIsTUFBTVMsU0FBZ0MsS0FBS0osT0FBUUk7UUFDbkQsTUFBTUMsVUFBVSxDQUFDLENBQUNELE9BQU9FLFNBQVNDO1FBR2xDLElBQUk7VUFDQSxNQUFNQyxVQUFVLEtBQUssV0FBVyxJQUFJQyxpQkFBUSxJQUFJO1VBQ2hELE1BQU07WUFBQ0M7WUFBUVY7VUFBTSxJQUFJO1VBQ3pCLE1BQU07WUFBQ0k7VUFBTSxJQUFVSjtVQUN2QixNQUFNVyxJQUFJO1lBQUNIO1lBQVNiO1lBQU9lO1lBQVFOO1lBQVFDO1VBQU87VUFDbEQsTUFBTVIsVUFBVWUsTUFBTUMs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