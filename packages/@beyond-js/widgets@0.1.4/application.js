System.register(["@beyond-js/kernel@0.1.9/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.4"]]);
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

// .beyond/uimport/temp/@beyond-js/widgets/application.0.1.4.js
var application_0_1_4_exports = {};
__export(application_0_1_4_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(application_0_1_4_exports);

// node_modules/@beyond-js/widgets/application/application.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.4/application"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./startup", {
  hash: 3577862121,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function createLayout(config) {
      const {
        layout
      } = config;
      const element = document.createElement(layout ? layout : "beyond-layout-children");
      document.body.append(element);
    }
    function startup() {
      const promises = [];
      const {
        specifier
      } = globalThis.__app_package;
      promises.push(bimport(`${specifier}/config`));
      promises.push(bimport(`${specifier}/start`));
      promises.push(bimport("@beyond-js/kernel/core"));
      promises.push(bimport("@beyond-js/kernel/routing"));
      promises.push(bimport("@beyond-js/widgets/routing"));
      promises.push(bimport("@beyond-js/widgets/layout"));
      Promise.all(promises).then(([{
        default: config
      }]) => createLayout(config)).catch(exc => console.log(exc.stack));
    }
    (() => {
      if (!globalThis.__ssr_fetch) {
        startup();
        return;
      }
      window.__ssr_fetch.then(ssr => {
        if (!ssr.json || ssr.json.errors?.length) {
          console.error("Error getting ssr data:", ssr.json.errors);
          startup();
          return;
        }
        const promises = [];
        const {
          specifier
        } = globalThis.__app_package;
        promises.push(bimport(`${specifier}/config`));
        promises.push(bimport(`${specifier}/start`));
        promises.push(bimport("@beyond-js/widgets/render"));
        promises.push(bimport("@beyond-js/widgets/layout"));
        Promise.all(promises).then(([{
          default: config
        },, render, layout]) => {
          const specs = new Map(ssr.json.widgets.specs);
          render.widgets.register([...specs.values()]);
          const instances = ssr.json.widgets.instances;
          const prerender = render.prerender;
          instances.forEach(instance => prerender.ssr.push(instance));
          const lssr = layout.ssr;
          lssr.data(ssr.json.main, ssr.json.page);
          createLayout(config);
        }).catch(exc => console.log(exc.stack));
      });
    })();
  }
});
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {};
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9hcHBsaWNhdGlvbi4wLjEuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvYXBwbGljYXRpb24vX19zb3VyY2VzL2FwcGxpY2F0aW9uL3N0YXJ0dXAudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJjcmVhdGVMYXlvdXQiLCJjb25maWciLCJsYXlvdXQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZCIsInN0YXJ0dXAiLCJwcm9taXNlcyIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwicHVzaCIsImJpbXBvcnQiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImRlZmF1bHQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsIl9fc3NyX2ZldGNoIiwid2luZG93Iiwic3NyIiwianNvbiIsImVycm9ycyIsImxlbmd0aCIsImVycm9yIiwicmVuZGVyIiwic3BlY3MiLCJNYXAiLCJ3aWRnZXRzIiwicmVnaXN0ZXIiLCJ2YWx1ZXMiLCJpbnN0YW5jZXMiLCJwcmVyZW5kZXIiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJsc3NyIiwiZGF0YSIsIm1haW4iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDS0EsU0FBU0MsYUFBYUMsUUFBVztNQUM3QixNQUFNO1FBQUNDO01BQU0sSUFBSUQ7TUFDakIsTUFBTUUsVUFBVUMsU0FBU0MsY0FBY0gsU0FBU0EsU0FBUyx3QkFBd0I7TUFDakZFLFNBQVNFLEtBQUtDLE9BQU9KLE9BQU87SUFDaEM7SUFFQSxTQUFTSyxVQUFPO01BQ1osTUFBTUMsV0FBMkI7TUFFakMsTUFBTTtRQUFDQztNQUFTLElBQVVDLFdBQVlDO01BQ3RDSCxTQUFTSSxLQUFLQyxRQUFRLEdBQUdKLGtCQUFrQixDQUFDO01BQzVDRCxTQUFTSSxLQUFLQyxRQUFRLEdBQUdKLGlCQUFpQixDQUFDO01BRTNDRCxTQUFTSSxLQUFLQyxRQUFRLHdCQUF3QixDQUFDO01BQy9DTCxTQUFTSSxLQUFLQyxRQUFRLDJCQUEyQixDQUFDO01BQ2xETCxTQUFTSSxLQUFLQyxRQUFRLDRCQUE0QixDQUFDO01BQ25ETCxTQUFTSSxLQUFLQyxRQUFRLDJCQUEyQixDQUFDO01BRWxEQyxRQUFRQyxJQUFJUCxRQUFRLEVBQ2ZRLEtBQUssQ0FBQyxDQUFDO1FBQUNDLFNBQVNqQjtNQUFNLENBQUMsTUFBTUQsYUFBYUMsTUFBTSxDQUFDLEVBQ2xEa0IsTUFBTUMsT0FBT0MsUUFBUUMsSUFBSUYsSUFBSUcsS0FBSyxDQUFDO0lBQzVDO0lBRUEsQ0FBQyxNQUFLO01BQ0YsSUFBSSxDQUFPWixXQUFZYSxhQUFhO1FBQ2hDaEIsU0FBTztRQUNQOztNQU1FaUIsT0FBUUQsWUFBWVAsS0FBTVMsT0FBWTtRQUN4QyxJQUFJLENBQUNBLElBQUlDLFFBQVFELElBQUlDLEtBQUtDLFFBQVFDLFFBQVE7VUFDdENSLFFBQVFTLE1BQU0sMkJBQTJCSixJQUFJQyxLQUFLQyxNQUFNO1VBQ3hEcEIsU0FBTztVQUNQOztRQUdKLE1BQU1DLFdBQTJCO1FBRWpDLE1BQU07VUFBQ0M7UUFBUyxJQUFVQyxXQUFZQztRQUN0Q0gsU0FBU0ksS0FBS0MsUUFBUSxHQUFHSixrQkFBa0IsQ0FBQztRQUM1Q0QsU0FBU0ksS0FBS0MsUUFBUSxHQUFHSixpQkFBaUIsQ0FBQztRQUUzQ0QsU0FBU0ksS0FBS0MsUUFBUSwyQkFBMkIsQ0FBQztRQUNsREwsU0FBU0ksS0FBS0MsUUFBUSwyQkFBMkIsQ0FBQztRQUVsREMsUUFBUUMsSUFBSVAsUUFBUSxFQUFFUSxLQUFLLENBQUMsQ0FBQztVQUFDQyxTQUFTakI7UUFBTSxJQUFLOEIsUUFBUTdCLE1BQU0sTUFBSztVQUVqRSxNQUFNOEIsUUFBUSxJQUFJQyxJQUFJUCxJQUFJQyxLQUFLTyxRQUFRRixLQUFLO1VBQzVDRCxPQUFPRyxRQUFRQyxTQUFTLENBQUMsR0FBR0gsTUFBTUksUUFBUSxDQUFDO1VBRzNDLE1BQU1DLFlBQVlYLElBQUlDLEtBQUtPLFFBQVFHO1VBQ25DLE1BQU1DLFlBQXNCUCxPQUFPTztVQUNuQ0QsVUFBVUUsUUFBU0MsWUFBa0JGLFVBQVVaLElBQUliLEtBQUsyQixRQUFRLENBQUM7VUFHakUsTUFBTUMsT0FBaUJ2QyxPQUFPd0I7VUFDOUJlLEtBQUtDLEtBQUtoQixJQUFJQyxLQUFLZ0IsTUFBTWpCLElBQUlDLEtBQUtpQixJQUFJO1VBQ3RDNUMsYUFBYUMsTUFBTTtRQUN2QixDQUFDLEVBQUVrQixNQUFNQyxPQUFPQyxRQUFRQyxJQUFJRixJQUFJRyxLQUFLLENBQUM7TUFDMUMsQ0FBQztJQUNMLElBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9kZW1vL291dCJ9