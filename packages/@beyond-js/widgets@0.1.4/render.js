System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.4"]]);
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

// .beyond/uimport/temp/@beyond-js/widgets/render.0.1.4.js
var render_0_1_4_exports = {};
__export(render_0_1_4_exports, {
  BeyondWidget: () => BeyondWidget,
  GlobalCSS: () => GlobalCSS,
  IBeyondWidgetController: () => IBeyondWidgetController,
  IWidgetSpecs: () => IWidgetSpecs,
  NodeWidget: () => NodeWidget,
  StylesManager: () => StylesManager,
  WidgetCSR: () => WidgetCSR,
  __beyond_pkg: () => __beyond_pkg,
  attributes: () => attributes,
  hmr: () => hmr,
  prerender: () => prerender,
  widgets: () => widgets
});
module.exports = __toCommonJS(render_0_1_4_exports);

// node_modules/@beyond-js/widgets/render/render.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.4/render"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./anchor", {
  hash: 1014568902,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    typeof process !== "object" && customElements.define("beyond-link", class extends HTMLElement {
      #routing;
      constructor() {
        super();
        bimport("@beyond-js/kernel/routing").then(({
          routing
        }) => this.#routing = routing);
      }
      connectedCallback() {
        this.addEventListener("click", () => {
          if (!this.hasAttribute("data-url")) return;
          const url = this.getAttribute("data-url");
          this.#routing?.pushState(url);
        });
      }
    });
  }
});
ims.set("./attributes", {
  hash: 1262494723,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.attributes = exports.Attributes = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Attributes extends _core.Events {
      #values = /* @__PURE__ */new Map();
      get values() {
        return this.#values;
      }
      add(name, value) {
        this.#values.set(name, value);
        this.trigger("add", name, value);
        this.trigger("change");
      }
      remove(name) {
        this.#values.delete(name);
        this.trigger("remove", name);
        this.trigger("change");
      }
    }
    exports.Attributes = Attributes;
    const attributes2 = new Attributes();
    exports.attributes = attributes2;
  }
});
ims.set("./instances/index", {
  hash: 2022060609,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.instances = void 0;
    var _node = require2("./node");
    const instances = new class extends Set {
      register(widget) {
        this.add(widget);
        const parent = (() => {
          let parent2 = widget;
          while (true) {
            const root = parent2.getRootNode();
            if (root === document) return;
            parent2 = root.host;
            if (this.has(parent2)) return parent2;
          }
        })();
        const node = new _node.NodeWidget(widget, parent);
        parent?.wnode.children.add(widget);
        this.add(widget);
        return node;
      }
    }();
    exports.instances = instances;
  }
});
ims.set("./instances/node", {
  hash: 3167083658,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NodeWidget = void 0;
    class NodeWidget2 {
      #widget;
      get widget() {
        return this.#widget;
      }
      #parent;
      get parent() {
        return this.#parent;
      }
      #children = /* @__PURE__ */new Set();
      get children() {
        return this.#children;
      }
      constructor(widget, parent) {
        this.#widget = widget;
        this.#parent = parent;
      }
    }
    exports.NodeWidget = NodeWidget2;
  }
});
ims.set("./prerendered/index", {
  hash: 483738484,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.prerender = void 0;
    const prerender2 = new class {
      #ssr = [];
      get ssr() {
        return this.#ssr;
      }
      find(element, attrs) {
        return this.#ssr.find(item => {
          if (item.element !== element) return false;
          const iattrs = new Map(item.attributes);
          return [...attrs].reduce((prev, [name, value]) => prev || iattrs.get(name) === value, true);
        });
      }
    }();
    exports.prerender = prerender2;
  }
});
ims.set("./widget/attributes", {
  hash: 1029410984,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetGlobalAttributes = void 0;
    var _attributes = require2("../attributes");
    class WidgetGlobalAttributes {
      #holder;
      get holder() {
        return this.#holder;
      }
      #set = (name, value) => {
        this.#holder.setAttribute(name, value);
      };
      #remove = name => {
        this.#holder.removeAttribute(name);
      };
      initialise(holder) {
        this.#holder = holder;
        _attributes.attributes.values.forEach((value, name) => this.#set(name, value));
        _attributes.attributes.on("add", this.#set);
        _attributes.attributes.on("remove", this.#remove);
      }
      destroy() {
        _attributes.attributes.off("add", this.#set);
        _attributes.attributes.off("remove", this.#remove);
      }
    }
    exports.WidgetGlobalAttributes = WidgetGlobalAttributes;
  }
});
ims.set("./widget/checksum", {
  hash: 1702419318,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    function _default(s) {
      let hash = 0,
        i,
        c;
      const length = s.length;
      if (length === 0) {
        return hash;
      }
      for (i = 0; i < length; i++) {
        c = s.charCodeAt(i);
        hash = (hash << 5) - hash + c;
        hash = hash & hash;
      }
      return hash.toString().replace("-", "n");
    }
    ;
  }
});
ims.set("./widget/csr", {
  hash: 1023760945,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetCSR = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class WidgetCSR2 extends _core.Events {
      #widget;
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #controller;
      get controller() {
        return this.#controller;
      }
      #error;
      get error() {
        return this.#error;
      }
      #loading = false;
      get loading() {
        return this.#loading;
      }
      #loaded = false;
      get loaded() {
        return this.#loaded;
      }
      #holders = /* @__PURE__ */new Set(["initialised", "loaded"]);
      initialise() {
        if (!this.#widget.specs.render.csr) return;
        if (!this.#holders.has("initialised")) throw new Error("Widget CSR already initialised");
        this.#holders.delete("initialised");
        this.#render();
      }
      constructor(widget) {
        super();
        const {
          specifier,
          specs
        } = this.#widget = widget;
        if (!specs.render.csr) return;
        bimport(specifier).then(bundle => {
          this.#bundle = bundle;
          this.#loading = false;
          this.#loaded = true;
          this.#holders.delete("loaded");
          this.#render();
        }).catch(exc => {
          console.error(`Error loading widget "${specifier}"`, exc.stack);
          this.#error = exc.message;
          this.#loading = false;
        });
      }
      #render = () => {
        if (this.#holders.size) return;
        const {
          Controller
        } = this.#bundle;
        if (!Controller || typeof Controller !== "function") {
          const message = `Widget "${this.#widget.localName}" does not export its Controller`;
          console.error(message);
          this.#error = message;
          return;
        }
        this.#controller = new Controller(this.#widget);
        this.#controller.initialise().then(() => this.trigger("controller.initialised")).catch(exc => console.log(exc instanceof Error ? exc.stack : exc));
      };
      disconnect() {
        this.#controller?.disconnect?.();
      }
      attributeChanged(name, old, value) {
        this.#controller?.attributeChanged(name, old, value);
      }
    }
    exports.WidgetCSR = WidgetCSR2;
  }
});
ims.set("./widget/index", {
  hash: 2251972216,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondWidget = void 0;
    var _instances = require2("../instances");
    var _sr = require2("./sr");
    var _csr = require2("./csr");
    var _ssr = require2("./ssr");
    var _attributes = require2("./attributes");
    var _styles = require2("./styles");
    const Element = typeof HTMLElement === "undefined" ? null : HTMLElement;
    class BeyondWidget2 extends Element {
      #specs;
      get specs() {
        return this.#specs;
      }
      get name() {
        return this.#specs.name;
      }
      get vspecifier() {
        return this.#specs.vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      get host() {
        return `${location.origin}/`;
      }
      get is() {
        return this.#specs.is;
      }
      get route() {
        return this.#specs.route;
      }
      get layout() {
        return this.#specs.layout;
      }
      #holder;
      get holder() {
        return this.#holder;
      }
      #sr;
      get sr() {
        return this.#sr;
      }
      #csr;
      get csr() {
        return this.#csr;
      }
      get controller() {
        return this.#csr.controller;
      }
      #ssr;
      get ssr() {
        return this.#ssr;
      }
      #attributes;
      #styles;
      get styles() {
        return this.#styles;
      }
      #wnode;
      get wnode() {
        return this.#wnode;
      }
      get wparent() {
        return this.#wnode.parent;
      }
      get wchildren() {
        return [...this.#wnode.children];
      }
      #oncontroller = () => {
        const event = new CustomEvent("controller.initialised", {
          bubbles: false,
          composed: false
        });
        this.dispatchEvent(event);
      };
      constructor(specs) {
        super();
        this.#specs = specs;
        this.attachShadow({
          mode: "open"
        });
        this.#specifier = (() => {
          const split = specs.vspecifier.split("/");
          const scope = split[0].startsWith("@") ? split.shift() : void 0;
          const [name] = split.shift().split("@");
          const subpath = split.join("/");
          return (scope ? `${scope}/${name}` : name) + (subpath ? `/${subpath}` : "");
        })();
        this.#attributes = new _attributes.WidgetGlobalAttributes();
        this.#sr = new _sr.WidgetSR(this);
        this.#ssr = new _ssr.WidgetSSR(this);
        this.#csr = new _csr.WidgetCSR(this);
        this.#csr?.on("controller.initialised", this.#oncontroller);
        this.#styles = new _styles.StylesManager(this);
      }
      connectedCallback() {
        this.#wnode = _instances.instances.register(this);
        this.#holder = document.createElement("span");
        this.#holder.style.display = "none";
        this.shadowRoot.append(this.#holder);
        this.#attributes.initialise(this.#holder);
        this.#ssr.initialise().catch(exc => console.error(exc.stack));
        this.#sr.initialise().catch(exc => console.error(exc.stack));
        this.#csr.initialise();
      }
      disconnectedCallback() {
        this.#csr.disconnect();
      }
      attributeChangedCallback(name, old, value) {
        this.#csr.attributeChanged(name, old, value);
      }
    }
    exports.BeyondWidget = BeyondWidget2;
  }
});
ims.set("./widget/renderer", {
  hash: 571206461,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Renderer = void 0;
    class Renderer {
      #widget;
      constructor(widget) {
        this.#widget = widget;
      }
      #ct = 0;
      async render(sr) {
        const ct = ++this.#ct;
        const {
          name,
          holder,
          styles
        } = this.#widget;
        if (sr.errors?.length) {
          console.error(`Error fetching static rendered widget "${name}":`, sr.errors);
          return;
        }
        if (holder.children.length) return;
        if (!sr.html) return "";
        const host = await this.#widget.host;
        holder.innerHTML = (() => sr.html.replace(/##_!(.*?)!_##/g, () => host))();
        const links = [];
        const resources = holder.querySelectorAll("link");
        resources.forEach(node => links.push(node.href));
        links.length && (await styles.initialise(links));
        resources.forEach(node => node.localName === "link" && node.addEventListener("load", styles.onloaded));
        await styles?.ready;
        if (this.#ct !== ct) return;
        holder.style.display = "";
      }
    }
    exports.Renderer = Renderer;
  }
});
ims.set("./widget/sr", {
  hash: 2731121275,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetSR = void 0;
    var _checksum = require2("./checksum");
    var _renderer = require2("./renderer");
    class WidgetSR {
      #widget;
      #renderer;
      #prerender;
      get prerender() {
        return this.#prerender;
      }
      constructor(widget) {
        this.#widget = widget;
        this.#renderer = new _renderer.Renderer(widget);
      }
      #initialised = false;
      async initialise() {
        if (this.#initialised) throw new Error("Widget SSR already initialised");
        this.#initialised = true;
        const {
          specs
        } = this.#widget;
        if (!specs.render.sr) return;
        const language = (() => {
          const {
            multilanguage
          } = specs.render;
          if (!multilanguage) return "";
          let language2 = localStorage.__beyond_language;
          language2 = language2 ? language2 : navigator.language;
          language2 = language2.slice(0, 2);
          return `${language2}:`;
        })();
        let resource;
        if (specs.is === "page") {
          let key = `${language}${specs.name}//${location.pathname}${location.search}`;
          resource = (0, _checksum.default)(key);
        } else if (specs.is === "layout") {
          resource = (0, _checksum.default)(`${language}${specs.name}`);
        } else {
          const compute = /* @__PURE__ */new Map();
          specs.attrs?.forEach(attr => {
            const value = this.#widget.getAttribute(attr);
            value && compute.set(attr, value);
          });
          let key = language;
          [...compute].sort((a, b) => a[0] < b[0] ? 1 : 0).forEach(([k, v]) => key += `${k}//${v}///`);
          resource = (0, _checksum.default)(key);
        }
        const host = await this.#widget.host;
        const url = `${host}__sr_widgets__/${specs.name}.${resource}.js`;
        try {
          const response = await fetch(url);
          if (response.status !== 200) {
            console.error(`Error fetching static rendered widget "${specs.name}". Status code: ${response.status}`);
            return;
          }
          const sr = await response.json();
          this.#prerender = sr;
          await this.#renderer.render(sr);
        } catch (exc) {
          console.error("Widget static content fetch error:", exc.message);
        }
      }
    }
    exports.WidgetSR = WidgetSR;
  }
});
ims.set("./widget/ssr", {
  hash: 2834037449,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetSSR = void 0;
    var _prerendered = require2("../prerendered");
    var _renderer = require2("./renderer");
    class WidgetSSR {
      #widget;
      #renderer;
      #prerender;
      get prerender() {
        return this.#prerender;
      }
      constructor(widget) {
        this.#widget = widget;
        this.#renderer = new _renderer.Renderer(widget);
      }
      #initialised = false;
      async initialise() {
        if (!this.#widget.specs.render.ssr) return;
        if (this.#initialised) throw new Error("Widget SSR already initialised");
        this.#initialised = true;
        const widget = this.#widget;
        const {
          specs
        } = widget;
        const attrs = new Map(specs.attrs ? specs.attrs.map(attr => [attr, widget.getAttribute(attr)]) : void 0);
        const found = _prerendered.prerender.find(specs.name, attrs);
        if (!found) {
          return await this.#load();
        }
        this.#prerender = found;
        await this.#renderer.render(found);
      }
      async #load() {
        const {
          specifier,
          name
        } = this.#widget;
        const host = await (async () => {
          const split = specifier.split("/");
          const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
          const {
            ssr: config
          } = (await bimport(`${pkg}/config`)).default;
          if (!config || !config.host) {
            console.error(`Project "${pkg}" does not support SSR (host not configured). Required by "${name}" widget.`);
            return;
          }
          return config.host;
        })();
        if (!host) return;
        const language = (() => {
          const {
            specs
          } = this.#widget;
          const {
            multilanguage
          } = specs.render;
          if (!multilanguage) return "";
          let language2 = localStorage.__beyond_language;
          language2 = language2 ? language2 : navigator.language;
          language2 = language2.slice(0, 2);
          return `&language=${language2}`;
        })();
        let attrs = (() => {
          const {
            specs
          } = this.#widget;
          if (!specs.attrs?.length) return "";
          let attrs2 = "&attrs=" + specs.attrs.join(",");
          specs.attrs.forEach(attr => {
            const value = this.#widget.getAttribute(attr);
            if (!value) return;
            attrs2 += `&attr.${attr}=${value}`;
          });
        })();
        const url = `${host}/widget?name=${name}${language}${attrs}`;
        try {
          const response = await fetch(url);
          if (response.status !== 200) {
            console.error(`Error fetching SSR of widget "${name}". Status code: ${response.status}`);
            return;
          }
          const sr = await response.json();
          this.#prerender = sr;
          await this.#renderer.render(sr);
        } catch (exc) {
          console.error(exc.stack);
        }
      }
    }
    exports.WidgetSSR = WidgetSSR;
  }
});
ims.set("./widget/styles/global", {
  hash: 1566285625,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GlobalCSS = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class GlobalCSS2 extends _core.Events {
      #widget;
      #version = 0;
      constructor(widget) {
        super();
        this.#widget = widget;
        const {
          host
        } = this.#widget;
        const version = this.#version !== 0 ? `?version=${this.#version}` : "";
        this.#link = `${host}global.css${version}`;
      }
      #link;
      get link() {
        return this.#link;
      }
      update() {
        this.#version++;
        this.trigger("change");
      }
    }
    exports.GlobalCSS = GlobalCSS2;
  }
});
ims.set("./widget/styles/index", {
  hash: 1538919774,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StylesManager = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _link = require2("./link");
    var _global = require2("./global");
    class StylesManager2 {
      #events = new _core.Events();
      on = (event, listener) => this.#events.on(event, listener);
      off = (event, listener) => this.#events.off(event, listener);
      #loaded = /* @__PURE__ */new Map();
      #globalcss;
      #version = 0;
      get version() {
        return this.#version;
      }
      #changed() {
        this.#version++;
        this.#resolved && this.#events.trigger("change");
      }
      get resources() {
        return /* @__PURE__ */new Set([...this.#loaded.keys()]);
      }
      get loaded() {
        this.#check();
        return this.#resolved;
      }
      #promise;
      #resolved = false;
      #resolve;
      get ready() {
        this.#check();
        return this.#promise;
      }
      onloaded = event => {
        const href = typeof event === "string" ? event : event.currentTarget.getAttribute("href");
        if (!this.#loaded.has(href)) {
          console.warn(`Stylesheet href="${href}" not registered`);
          return;
        }
        this.#loaded.set(href, true);
        this.#check();
        const changed = this.#purge();
        changed && this.#changed();
        return true;
      };
      #check() {
        if (this.#resolved) return true;
        const loaded = [...this.#loaded.values()].reduce((prev, loaded2) => prev && loaded2, true);
        loaded && this.#resolve();
        return this.#resolved = loaded;
      }
      #purge() {
        const versions = {
          last: /* @__PURE__ */new Map(),
          values: /* @__PURE__ */new Map(),
          lastLoaded: /* @__PURE__ */new Map()
        };
        [...this.#loaded.keys()].forEach(href => {
          const link = new _link.default(href);
          const prevLast = versions.last.get(link.resource);
          const last = prevLast && prevLast > link.version ? prevLast : link.version;
          versions.last.set(link.resource, last);
          if (this.#loaded.get(link.href)) {
            const prevLastLoaded = versions.lastLoaded.get(link.resource);
            const lastLoaded = prevLastLoaded && prevLastLoaded > link.version ? prevLastLoaded : link.version;
            versions.lastLoaded.set(link.resource, lastLoaded);
          }
          const values = versions.values.has(link.resource) ? versions.values.get(link.resource) : /* @__PURE__ */new Set();
          values.add(link.version);
          versions.values.set(link.resource, values);
        });
        const purge = [];
        [...this.#loaded.keys()].forEach(href => {
          const link = new _link.default(href);
          const lastLoaded = versions.lastLoaded.get(link.resource);
          link.version < lastLoaded && purge.push(link);
        });
        purge.forEach(link => this.#loaded.delete(link.href));
        return !!purge.length;
      }
      #last;
      #refresh = () => {
        if (!this.#last) return;
        const changed = this.#update(this.#last);
        changed && this.#changed();
      };
      #update(_links) {
        this.#last = _links;
        _links.unshift(this.#globalcss.link);
        const links = _links.map(link => new _link.default(link));
        let changed = false;
        links.forEach(link => {
          if (this.#loaded.has(link.href)) return;
          this.#loaded.set(link.href, false);
          changed = true;
        });
        return changed;
      }
      update(links) {
        const changed = this.#update(links);
        changed && this.#changed();
      }
      constructor(widget) {
        this.#globalcss = new _global.GlobalCSS(widget);
        this.#promise = new Promise(resolve => this.#resolve = resolve);
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      async initialise(links) {
        if (this.#initialised) throw new Error(`Widget styles already initialised`);
        this.#initialised = true;
        this.#update(links);
        this.#globalcss.on("change", this.#refresh);
      }
      destroy() {
        this.#globalcss.off("change", this.#refresh);
      }
    }
    exports.StylesManager = StylesManager2;
  }
});
ims.set("./widget/styles/link", {
  hash: 3219871066,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default {
      #href;
      get href() {
        return this.#href;
      }
      #resource;
      get resource() {
        return this.#resource;
      }
      #version;
      get version() {
        return this.#version;
      }
      constructor(href) {
        this.#href = href;
        const iv = href.split("?version=");
        this.#resource = iv[0];
        this.#version = iv[1] ? parseInt(iv[1]) : 0;
      }
    }
    exports.default = _default;
  }
});
ims.set("./widgets", {
  hash: 3986250608,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.widgets = void 0;
    var _widget = require2("./widget");
    var _instances = require2("./instances");
    var _attributes = require2("./attributes");
    require2("./anchor");
    class BeyondWidgets extends Map {
      #ssr = true;
      get ssr() {
        return this.#ssr;
      }
      constructor() {
        super();
      }
      setup(config) {
        this.#ssr = typeof config?.ssr === "boolean" ? config.ssr : true;
      }
      get instances() {
        return _instances.instances;
      }
      get attributes() {
        return _attributes.attributes;
      }
      register(specs) {
        specs.forEach(specs2 => {
          if (this.has(specs2.name)) return;
          specs2.render = specs2.render ? specs2.render : {
            csr: true,
            ssr: false,
            sr: false
          };
          const {
            name,
            render
          } = specs2;
          render.csr = typeof render.csr === "boolean" ? render.csr : true;
          this.set(name, specs2);
          if (typeof process === "object") return;
          customElements.define(name, class extends _widget.BeyondWidget {
            static get observedAttributes() {
              return specs2.attrs ? specs2.attrs : [];
            }
            constructor() {
              super(specs2);
            }
          });
        });
      }
    }
    const widgets2 = new BeyondWidgets();
    exports.widgets = widgets2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./attributes",
  "from": "attributes",
  "name": "attributes"
}, {
  "im": "./instances/node",
  "from": "NodeWidget",
  "name": "NodeWidget"
}, {
  "im": "./prerendered/index",
  "from": "prerender",
  "name": "prerender"
}, {
  "im": "./widget/csr",
  "from": "IBeyondWidgetController",
  "name": "IBeyondWidgetController"
}, {
  "im": "./widget/csr",
  "from": "WidgetCSR",
  "name": "WidgetCSR"
}, {
  "im": "./widget/index",
  "from": "IWidgetSpecs",
  "name": "IWidgetSpecs"
}, {
  "im": "./widget/index",
  "from": "BeyondWidget",
  "name": "BeyondWidget"
}, {
  "im": "./widget/styles/global",
  "from": "GlobalCSS",
  "name": "GlobalCSS"
}, {
  "im": "./widget/styles/index",
  "from": "StylesManager",
  "name": "StylesManager"
}, {
  "im": "./widgets",
  "from": "widgets",
  "name": "widgets"
}];
var attributes, NodeWidget, prerender, IBeyondWidgetController, WidgetCSR, IWidgetSpecs, BeyondWidget, GlobalCSS, StylesManager, widgets;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "attributes") && (attributes = require2 ? require2("./attributes").attributes : value);
  (require2 || prop === "NodeWidget") && (NodeWidget = require2 ? require2("./instances/node").NodeWidget : value);
  (require2 || prop === "prerender") && (prerender = require2 ? require2("./prerendered/index").prerender : value);
  (require2 || prop === "IBeyondWidgetController") && (IBeyondWidgetController = require2 ? require2("./widget/csr").IBeyondWidgetController : value);
  (require2 || prop === "WidgetCSR") && (WidgetCSR = require2 ? require2("./widget/csr").WidgetCSR : value);
  (require2 || prop === "IWidgetSpecs") && (IWidgetSpecs = require2 ? require2("./widget/index").IWidgetSpecs : value);
  (require2 || prop === "BeyondWidget") && (BeyondWidget = require2 ? require2("./widget/index").BeyondWidget : value);
  (require2 || prop === "GlobalCSS") && (GlobalCSS = require2 ? require2("./widget/styles/global").GlobalCSS : value);
  (require2 || prop === "StylesManager") && (StylesManager = require2 ? require2("./widget/styles/index").StylesManager : value);
  (require2 || prop === "widgets") && (widgets = require2 ? require2("./widgets").widgets : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIuMC4xLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL2FuY2hvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvYXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvaW5zdGFuY2VzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci9pbnN0YW5jZXMvbm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvcHJlcmVuZGVyZWQvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9hdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvY2hlY2tzdW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9jc3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3JlbmRlcmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9zc3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9zdHlsZXMvZ2xvYmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3R5bGVzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3R5bGVzL2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldHMudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJCZXlvbmRXaWRnZXQiLCJHbG9iYWxDU1MiLCJJQmV5b25kV2lkZ2V0Q29udHJvbGxlciIsIklXaWRnZXRTcGVjcyIsIk5vZGVXaWRnZXQiLCJTdHlsZXNNYW5hZ2VyIiwiV2lkZ2V0Q1NSIiwiX19iZXlvbmRfcGtnIiwiYXR0cmlidXRlcyIsImhtciIsInByZXJlbmRlciIsIndpZGdldHMiLCJtb2R1bGUiLCJwcm9jZXNzIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJIVE1MRWxlbWVudCIsImNvbnN0cnVjdG9yIiwiYmltcG9ydCIsInRoZW4iLCJyb3V0aW5nIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwiaGFzQXR0cmlidXRlIiwidXJsIiwiZ2V0QXR0cmlidXRlIiwicHVzaFN0YXRlIiwiQXR0cmlidXRlcyIsIkV2ZW50cyIsIk1hcCIsInZhbHVlcyIsImFkZCIsIm5hbWUiLCJ2YWx1ZSIsInNldCIsInRyaWdnZXIiLCJyZW1vdmUiLCJkZWxldGUiLCJleHBvcnRzIiwiaW5zdGFuY2VzIiwiU2V0IiwicmVnaXN0ZXIiLCJ3aWRnZXQiLCJwYXJlbnQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJkb2N1bWVudCIsImhvc3QiLCJoYXMiLCJub2RlIiwid25vZGUiLCJjaGlsZHJlbiIsInNzciIsImZpbmQiLCJlbGVtZW50IiwiYXR0cnMiLCJpdGVtIiwiaWF0dHJzIiwicmVkdWNlIiwicHJldiIsImdldCIsIldpZGdldEdsb2JhbEF0dHJpYnV0ZXMiLCJob2xkZXIiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbml0aWFsaXNlIiwiZm9yRWFjaCIsIm9uIiwiZGVzdHJveSIsIm9mZiIsInMiLCJoYXNoIiwiaSIsImMiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwiYnVuZGxlIiwiY29udHJvbGxlciIsImVycm9yIiwibG9hZGluZyIsImxvYWRlZCIsInNwZWNzIiwicmVuZGVyIiwiY3NyIiwiRXJyb3IiLCJzcGVjaWZpZXIiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJzdGFjayIsIm1lc3NhZ2UiLCJzaXplIiwiQ29udHJvbGxlciIsImxvY2FsTmFtZSIsImxvZyIsImRpc2Nvbm5lY3QiLCJhdHRyaWJ1dGVDaGFuZ2VkIiwib2xkIiwiRWxlbWVudCIsInZzcGVjaWZpZXIiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJzciIsInN0eWxlcyIsIndwYXJlbnQiLCJ3Y2hpbGRyZW4iLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImNvbXBvc2VkIiwiZGlzcGF0Y2hFdmVudCIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJzcGxpdCIsInNjb3BlIiwic3RhcnRzV2l0aCIsInNoaWZ0Iiwic3VicGF0aCIsImpvaW4iLCJXaWRnZXRTUiIsIldpZGdldFNTUiIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzaGFkb3dSb290IiwiYXBwZW5kIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJSZW5kZXJlciIsImN0IiwiZXJyb3JzIiwiaHRtbCIsImlubmVySFRNTCIsImxpbmtzIiwicmVzb3VyY2VzIiwicXVlcnlTZWxlY3RvckFsbCIsInB1c2giLCJocmVmIiwib25sb2FkZWQiLCJyZWFkeSIsImxhbmd1YWdlIiwibXVsdGlsYW5ndWFnZSIsImxvY2FsU3RvcmFnZSIsIl9fYmV5b25kX2xhbmd1YWdlIiwibmF2aWdhdG9yIiwic2xpY2UiLCJyZXNvdXJjZSIsImtleSIsInBhdGhuYW1lIiwic2VhcmNoIiwiY29tcHV0ZSIsImF0dHIiLCJzb3J0IiwiYSIsImIiLCJrIiwidiIsInJlc3BvbnNlIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIiwibWFwIiwiZm91bmQiLCJwa2ciLCJjb25maWciLCJkZWZhdWx0IiwidmVyc2lvbiIsImxpbmsiLCJ1cGRhdGUiLCJsaXN0ZW5lciIsImtleXMiLCJjdXJyZW50VGFyZ2V0Iiwid2FybiIsImNoYW5nZWQiLCJ2ZXJzaW9ucyIsImxhc3QiLCJsYXN0TG9hZGVkIiwiTGluayIsInByZXZMYXN0IiwicHJldkxhc3RMb2FkZWQiLCJwdXJnZSIsIl9saW5rcyIsInVuc2hpZnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImluaXRpYWxpc2VkIiwiaXYiLCJwYXJzZUludCIsInJlcXVpcmUiLCJCZXlvbmRXaWRnZXRzIiwic2V0dXAiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDS0EsT0FBT0MsWUFBWSxZQUFZQyxlQUFlQyxPQUFPLGVBQWUsY0FBY0MsWUFB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