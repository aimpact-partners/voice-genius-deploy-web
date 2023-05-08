System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.0.0/entities"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, Prompts, Prompt, __beyond_pkg, hmr;
  _export({
    Prompts: void 0,
    Prompt: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive100Entities) {
      dependency_1 = _beyondJsReactive100Entities;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.0.0"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@bgroup/ui", "0.0.34"], ["@types/marked", "4.3.0"], ["dayjs", "1.11.7"], ["dexie", "3.2.3"], ["dompurify", "3.0.2"], ["marked", "4.3.0"], ["openai", "3.2.1"], ["prism-react-renderer", "1.3.5"], ["react-markdown", "8.0.7"], ["socket.io-client", "4.6.1"], ["@aimpact/voice-genius", "1.0.0"], ["@aimpact/voice-genius", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/voice-genius@1.0.0/entities"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1]]);
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./prompts/collection
      ************************************/
      ims.set('./prompts/collection', {
        hash: 2844033712,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Prompts = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          /*bundle*/
          class Prompts extends _entities.Collection {
            item = _item.Prompt;
            storeName = "prompts";
            db = "voicegenius";
            constructor() {
              super();
              // this.provider = new PromptProvider();
              this.init();
            }
          }
          exports.Prompts = Prompts;
        }
      });

      /******************************
      INTERNAL MODULE: ./prompts/item
      ******************************/

      ims.set('./prompts/item', {
        hash: 4283283841,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Prompt = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          /*bundle */
          class Prompt extends _entities.Item {
            properties = ["promptId", "name", "content"];
            storeName = "prompts";
            db = "voicegenius";
            constructor({
              id = undefined
            } = {}) {
              super();
              // this.provider = new PromptProvider();
              this.init({
                id
              });
            }
          }
          exports.Prompt = Prompt;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./prompts/collection",
        "from": "Prompts",
        "name": "Prompts"
      }, {
        "im": "./prompts/item",
        "from": "Prompt",
        "name": "Prompt"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Prompts') && _export("Prompts", Prompts = require ? require('./prompts/collection').Prompts : value);
        (require || prop === 'Prompt') && _export("Prompt", Prompt = require ? require('./prompts/item').Prompt : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFLTztVQUFVLE1BQU9BLE9BQVEsU0FBUUMsb0JBQVU7WUFDaERDLElBQUksR0FBR0MsWUFBTTtZQUNIQyxTQUFTLEdBQUcsU0FBUztZQUNyQkMsRUFBRSxHQUFHLGFBQWE7WUFDNUJDO2NBQ0UsS0FBSyxFQUFFO2NBQ1A7Y0FDQSxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNiOztVQUNEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmRDtVQU9PO1VBQVcsTUFBT0wsTUFBTyxTQUFRTSxjQUFhO1lBQzFDQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztZQUU1Q04sU0FBUyxHQUFHLFNBQVM7WUFDckJDLEVBQUUsR0FBRyxhQUFhO1lBRTVCQyxZQUFZO2NBQUVLLEVBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUcsRUFBRTtjQUNsQyxLQUFLLEVBQUU7Y0FFUDtjQUNBLElBQUksQ0FBQ0wsSUFBSSxDQUFDO2dCQUFFSTtjQUFFLENBQUUsQ0FBQztZQUNsQjs7VUFDQUgiLCJuYW1lcyI6WyJQcm9tcHRzIiwiQ29sbGVjdGlvbiIsIml0ZW0iLCJQcm9tcHQiLCJzdG9yZU5hbWUiLCJkYiIsImNvbnN0cnVjdG9yIiwiaW5pdCIsImV4cG9ydHMiLCJJdGVtIiwicHJvcGVydGllcyIsImlkIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJwcm9tcHRzL2NvbGxlY3Rpb24udHMiLCJwcm9tcHRzL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==