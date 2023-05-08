System.register(["@beyond-js/backend@0.1.5/client", "@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ActionsBridge, ims, AIModel, __beyond_pkg, hmr;
  _export("AIModel", void 0);
  return {
    setters: [function (_beyondJsBackend015Client) {
      dependency_0 = _beyondJsBackend015Client;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.0.0"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@bgroup/ui", "0.0.34"], ["@types/marked", "4.3.0"], ["dayjs", "1.11.7"], ["dexie", "3.2.3"], ["dompurify", "3.0.2"], ["marked", "4.3.0"], ["openai", "3.2.1"], ["prism-react-renderer", "1.3.5"], ["react-markdown", "8.0.7"], ["socket.io-client", "4.6.1"], ["@aimpact/voice-genius", "1.0.0"], ["@aimpact/voice-genius", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/voice-genius@1.0.0/model"
        },
        "type": "bridge"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/backend/client', dependency_0]]);
      ({
        ActionsBridge
      } = brequire('@beyond-js/backend/client'));
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1920603067,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AIModel = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class AIModel extends ActionsBridge {
            async completions(prompt, messages) {
              return await this.execute("index//AIModel//completions", ...arguments);
            }
            async chat(prompt, messages) {
              return await this.execute("index//AIModel//chat", ...arguments);
            }
            constructor() {
              super("backend", _beyond_context.bundle);
            }
          }
          exports.AIModel = AIModel;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "AIModel",
        "name": "AIModel"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AIModel') && _export("AIModel", AIModel = require ? require('./index').AIModel : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRU8sWUFBWTtVQUFVLE1BQU9BLE9BQVEsU0FBUUMsYUFBYTtZQUM3RCxNQUFNQyxXQUFXLENBQUNDLE1BQWMsRUFBRUMsUUFBZ0I7Y0FDOUMsT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLDZCQUE2QixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUMxRTtZQUNBLE1BQU1DLElBQUksQ0FBQ0osTUFBYyxFQUFFQyxRQUFnQjtjQUN2QyxPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ25FO1lBQ0FFO2NBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRUMsc0JBQU0sQ0FBQztZQUM1Qjs7VUFDSEMiLCJuYW1lcyI6WyJBSU1vZGVsIiwiQWN0aW9uc0JyaWRnZSIsImNvbXBsZXRpb25zIiwicHJvbXB0IiwibWVzc2FnZXMiLCJleGVjdXRlIiwiYXJndW1lbnRzIiwiY2hhdCIsImNvbnN0cnVjdG9yIiwiYnVuZGxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=