System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.4/render","@beyond-js/kernel@0.1.9/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep)],
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

// .beyond/uimport/temp/@beyond-js/widgets/routing.0.1.4.js
var routing_0_1_4_exports = {};
__export(routing_0_1_4_exports, {
  Layout: () => Layout,
  PageInstance: () => PageInstance,
  PageURI: () => PageURI,
  Route: () => Route,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  manager: () => manager
});
module.exports = __toCommonJS(routing_0_1_4_exports);

// node_modules/@beyond-js/widgets/routing/routing.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.4/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.4/routing"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/routing", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./layouts/index", {
  hash: 2940970575,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default extends Map {
      register(layout) {
        this.set(layout.id, layout);
      }
    }
    exports.default = _default;
  }
});
ims.set("./layouts/layout", {
  hash: 2602064878,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Layout = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Layout2 extends _core.Events {
      get is() {
        return "layout";
      }
      #layouts;
      #element;
      get element() {
        return this.#element;
      }
      get id() {
        return this.#element;
      }
      #active;
      get active() {
        return this.#active;
      }
      #parent;
      #children = /* @__PURE__ */new Map();
      get children() {
        return this.#children;
      }
      constructor(layouts, element, parent) {
        super();
        this.#layouts = layouts;
        this.#element = element ? element : "main";
        this.#parent = parent;
      }
      select(page, descending) {
        if (descending.length && descending[0].name === this.#element) {
          console.log(`Invalid layout configuration. Layout element "${this.#element}" is already created`);
          return;
        }
        const child = (() => {
          if (!descending.length) return page;
          const {
            name: element
          } = descending[0];
          const found = [...this.#children.values()].find(child2 => child2.element === element);
          if (found) return found;
          const layout = new Layout2(this.#layouts, element, this);
          this.#layouts.register(layout);
          return layout;
        })();
        this.#children.set(child.id, child);
        const changed = this.#active !== child;
        this.#active = child;
        descending.shift();
        child.is === "layout" && child.select(page, descending);
        changed && this.trigger("change");
      }
    }
    exports.Layout = Layout2;
  }
});
ims.set("./manager", {
  hash: 1504779151,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.manager = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _routing = require2("@beyond-js/kernel/routing");
    var _layout = require2("./layouts/layout");
    var _pages = require2("./pages");
    var _layouts = require2("./layouts");
    var _route = require2("./route");
    const manager2 = typeof process === "object" ? void 0 : new class Manager {
      #instances = {
        layouts: new _layouts.default(),
        pages: new _pages.default()
      };
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      constructor() {
        const set = () => this.set(_routing.routing.uri).catch(exc => console.log(exc.stack));
        const {
          specifier
        } = globalThis.__app_package;
        Promise.all([bimport(`${specifier}/config`), bimport(`${specifier}/start`)]).then(([{
          default: config
        }]) => {
          this.#main = new _layout.Layout(this.#instances.layouts, config.layout);
          _routing.routing.on("change", set);
          _routing.routing.initialised ? set() : _routing.routing.ready.then(set);
        });
      }
      get layouts() {
        return this.#instances.layouts;
      }
      get pages() {
        return this.#instances.pages;
      }
      #main;
      get main() {
        return this.#main;
      }
      #ct = new _core.CancellationToken();
      async set(uri) {
        const cid = this.#ct.reset();
        const route = new _route.Route(uri.pathname);
        await route.process();
        if (!this.#ct.check(cid)) return;
        const done = () => {
          !this.#initialised && this.#resolve();
          this.#initialised = true;
        };
        const {
          page: element
        } = route;
        if (!element) {
          console.error(`Pathname "${uri.pathname}" does not have a page widget associated to it`);
          return done();
        }
        const page = this.#instances.pages.register(uri, route);
        const {
          error,
          value: descending
        } = page.parents;
        if (error) {
          console.error(`Page on "${uri.uri}" cannot be shown: ${error}`);
          return done();
        }
        this.#main.select(page, descending);
        return done();
      }
    }();
    exports.manager = manager2;
  }
});
ims.set("./pages/index", {
  hash: 635174642,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _instance = require2("./instance");
    class _default extends Map {
      instance(id) {
        return [...this.values()].find(instance => instance.id === id);
      }
      register(uri, route) {
        const {
          pathname
        } = uri;
        let instance = this.has(pathname) ? this.get(pathname) : void 0;
        instance = instance ? instance : new _instance.PageInstance(uri, route);
        this.set(pathname, instance);
        return instance;
      }
    }
    exports.default = _default;
  }
});
ims.set("./pages/instance", {
  hash: 2192565275,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageInstance = void 0;
    var _render = require2("@beyond-js/widgets/render");
    let id = 0;
    class PageInstance2 {
      #uri;
      get uri() {
        return this.#uri;
      }
      #route;
      get route() {
        return this.#route;
      }
      get element() {
        return this.#route.page;
      }
      get is() {
        return "page";
      }
      #id;
      get id() {
        return `${this.element}:${this.#id}`;
      }
      get parents() {
        const value = [];
        let {
          layout
        } = _render.widgets.get(this.element);
        while (layout) {
          const found = [..._render.widgets.values()].find(({
            name
          }) => name === layout);
          if (!found) {
            const error = `Layout "${layout}" not found`;
            return {
              error
            };
          }
          value.unshift(found);
          layout = found.layout;
        }
        return {
          value
        };
      }
      constructor(uri, route) {
        this.#uri = uri;
        this.#route = route;
        this.#id = ++id;
      }
    }
    exports.PageInstance = PageInstance2;
  }
});
ims.set("./route", {
  hash: 408835594,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Route = void 0;
    var _render = require2("@beyond-js/widgets/render");
    var _routing = require2("@beyond-js/kernel/routing");
    class Route2 {
      #pathname;
      get pathname() {
        return this.#pathname;
      }
      #page;
      get page() {
        return this.#page;
      }
      #vars;
      get vars() {
        return this.#vars;
      }
      constructor(pathname) {
        this.#pathname = pathname;
      }
      async process() {
        const pathname = this.#pathname.split("/");
        const registered = /* @__PURE__ */new Map();
        _render.widgets.forEach(({
          is,
          name,
          route
        }) => is === "page" && registered.set(name, route.split("/")));
        const target = [...registered].filter(([, route]) => route.length === pathname.length);
        this.#vars = /* @__PURE__ */new Map();
        const found = target.find(([, route]) => {
          this.#vars.clear();
          for (let i = 0; i < pathname.length; i++) {
            const dir = route[i];
            if (dir.startsWith("${") && dir.endsWith("}")) {
              const vname = dir.slice(2, dir.length - 1);
              this.#vars.set(vname, pathname[i]);
              continue;
            }
            if (dir !== pathname[i]) return false;
          }
          return true;
        });
        this.#page = found ? found[0] : await _routing.routing.missing?.(this.#pathname);
      }
    }
    exports.Route = Route2;
  }
});
ims.set("./uri", {
  hash: 615392904,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageURI = void 0;
    var _manager = require2("./manager");
    class PageURI2 {
      #uri;
      #route;
      get uri() {
        return this.#uri;
      }
      get pathname() {
        return this.#uri.pathname;
      }
      get search() {
        return this.#uri.search;
      }
      get qs() {
        return this.#uri.qs;
      }
      get hash() {
        return this.#uri.hash;
      }
      get vars() {
        return this.#route.vars;
      }
      constructor({
        widget,
        uri,
        route
      }) {
        if (widget) {
          const child = widget.getAttribute("data-child-id");
          const page = _manager.manager.pages.instance(child);
          if (!page) {
            throw new Error(`Element "${widget.localName}" is not a page, or page not found`);
          }
          ({
            uri,
            route
          } = page);
        }
        this.#uri = uri;
        this.#route = route;
      }
    }
    exports.PageURI = PageURI2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./layouts/layout",
  "from": "Layout",
  "name": "Layout"
}, {
  "im": "./manager",
  "from": "manager",
  "name": "manager"
}, {
  "im": "./pages/instance",
  "from": "PageInstance",
  "name": "PageInstance"
}, {
  "im": "./route",
  "from": "Route",
  "name": "Route"
}, {
  "im": "./uri",
  "from": "PageURI",
  "name": "PageURI"
}];
var Layout, manager, PageInstance, Route, PageURI;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Layout") && (Layout = require2 ? require2("./layouts/layout").Layout : value);
  (require2 || prop === "manager") && (manager = require2 ? require2("./manager").manager : value);
  (require2 || prop === "PageInstance") && (PageInstance = require2 ? require2("./pages/instance").PageInstance : value);
  (require2 || prop === "Route") && (Route = require2 ? require2("./route").Route : value);
  (require2 || prop === "PageURI") && (PageURI = require2 ? require2("./uri").PageURI : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nLjAuMS40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2xheW91dHMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvbGF5b3V0cy9sYXlvdXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy9pbnN0YW5jZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9yb3V0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy91cmkudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJMYXlvdXQiLCJQYWdlSW5zdGFuY2UiLCJQYWdlVVJJIiwiUm91dGUiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtYW5hZ2VyIiwibW9kdWxlIiwiTWFwIiwicmVnaXN0ZXIiLCJsYXlvdXQiLCJzZXQiLCJpZCIsImV4cG9ydHMiLCJFdmVudHMiLCJpcyIsImVsZW1lbnQiLCJhY3RpdmUiLCJjaGlsZHJlbiIsImNvbnN0cnVjdG9yIiwibGF5b3V0cyIsInBhcmVudCIsInNlbGVjdCIsInBhZ2UiLCJkZXNjZW5kaW5nIiwibGVuZ3RoIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZCIsImZvdW5kIiwidmFsdWVzIiwiZmluZCIsImNoYW5nZWQiLCJzaGlmdCIsInRyaWdnZXIiLCJwcm9jZXNzIiwiTWFuYWdlciIsIkxheW91dHMiLCJwYWdlcyIsIlBhZ2VzIiwiaW5pdGlhbGlzZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWR5Iiwicm91dGluZyIsInVyaSIsImNhdGNoIiwiZXhjIiwic3RhY2siLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsImFsbCIsImJpbXBvcnQiLCJ0aGVuIiwiZGVmYXVsdCIsImNvbmZpZyIsIm9uIiwibWFpbiIsIkNhbmNlbGxhdGlvblRva2VuIiwiY2lkIiwicmVzZXQiLCJyb3V0ZSIsInBhdGhuYW1lIiwiY2hlY2siLCJkb25lIiwiZXJyb3IiLCJ2YWx1ZSIsInBhcmVudHMiLCJpbnN0YW5jZSIsImhhcyIsImdldCIsInVuZGVmaW5lZCIsIndpZGdldHMiLCJ1bnNoaWZ0IiwidmFycyIsInNwbGl0IiwicmVnaXN0ZXJlZCIsImZvckVhY2giLCJ0YXJnZXQiLCJmaWx0ZXIiLCJjbGVhciIsImkiLCJkaXIiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJ2bmFtZSIsInNsaWNlIiwibWlzc2luZyIsInNlYXJjaCIsInFzIiwiaGFzaCIsIndpZGdldCIsImdldEF0dHJpYnV0ZSIsIkVycm9yIiwibG9jYWxOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0tjLHVCQUFlQyxJQUFtQjtNQUM1Q0MsU0FBU0MsUUFBYztRQUNuQixLQUFLQyxJQUFJRCxPQUFPRSxJQUFJRixNQUFNO01BQzlCOztJQUNIRzs7Ozs7Ozs7Ozs7O0lDUEQ7SUFLaUIsTUFDWGIsZ0JBQWVj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