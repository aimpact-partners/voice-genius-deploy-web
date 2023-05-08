System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, whisper, gpt4, gptTurbo, gptTurboPlus, ada, currie1, babbage, davinci2, davinci3, __beyond_pkg, hmr;
  _export({
    whisper: void 0,
    gpt4: void 0,
    gptTurbo: void 0,
    gptTurboPlus: void 0,
    ada: void 0,
    currie1: void 0,
    babbage: void 0,
    davinci2: void 0,
    davinci3: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
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
          "vspecifier": "@aimpact/voice-genius@1.0.0/engines"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4114716790,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.whisper = exports.gptTurboPlus = exports.gptTurbo = exports.gpt4 = exports.davinci3 = exports.davinci2 = exports.currie1 = exports.babbage = exports.ada = void 0;
          /*bundle*/
          const whisper = "whisper-1";
          exports.whisper = whisper;
          /*bundle*/
          const gpt4 = "gpt-4-0314";
          exports.gpt4 = gpt4;
          /*bundle*/
          const gptTurbo = "gpt-3.5-turbo";
          exports.gptTurbo = gptTurbo;
          /*bundle*/
          const gptTurboPlus = "gpt-3.5-turbo-0301";
          exports.gptTurboPlus = gptTurboPlus;
          /*bundle*/
          const ada = "text-ada-001";
          exports.ada = ada;
          /*bundle*/
          const currie1 = "text-curie-001";
          exports.currie1 = currie1;
          /*bundle*/
          const babbage = "text-babbage-001";
          exports.babbage = babbage;
          /*bundle*/
          const davinci2 = "text-davinci-002";
          exports.davinci2 = davinci2;
          /*bundle*/
          const davinci3 = "text-davinci-003";
          exports.davinci3 = davinci3;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "whisper",
        "name": "whisper"
      }, {
        "im": "./index",
        "from": "gpt4",
        "name": "gpt4"
      }, {
        "im": "./index",
        "from": "gptTurbo",
        "name": "gptTurbo"
      }, {
        "im": "./index",
        "from": "gptTurboPlus",
        "name": "gptTurboPlus"
      }, {
        "im": "./index",
        "from": "ada",
        "name": "ada"
      }, {
        "im": "./index",
        "from": "currie1",
        "name": "currie1"
      }, {
        "im": "./index",
        "from": "babbage",
        "name": "babbage"
      }, {
        "im": "./index",
        "from": "davinci2",
        "name": "davinci2"
      }, {
        "im": "./index",
        "from": "davinci3",
        "name": "davinci3"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'whisper') && _export("whisper", whisper = require ? require('./index').whisper : value);
        (require || prop === 'gpt4') && _export("gpt4", gpt4 = require ? require('./index').gpt4 : value);
        (require || prop === 'gptTurbo') && _export("gptTurbo", gptTurbo = require ? require('./index').gptTurbo : value);
        (require || prop === 'gptTurboPlus') && _export("gptTurboPlus", gptTurboPlus = require ? require('./index').gptTurboPlus : value);
        (require || prop === 'ada') && _export("ada", ada = require ? require('./index').ada : value);
        (require || prop === 'currie1') && _export("currie1", currie1 = require ? require('./index').currie1 : value);
        (require || prop === 'babbage') && _export("babbage", babbage = require ? require('./index').babbage : value);
        (require || prop === 'davinci2') && _export("davinci2", davinci2 = require ? require('./index').davinci2 : value);
        (require || prop === 'davinci3') && _export("davinci3", davinci3 = require ? require('./index').davinci3 : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU87VUFBVyxNQUFNQSxPQUFPLEdBQUcsV0FBVztVQUFDQztVQUV2QztVQUFXLE1BQU1DLElBQUksR0FBRyxZQUFZO1VBQUNEO1VBRXJDO1VBQVcsTUFBTUUsUUFBUSxHQUFHLGVBQWU7VUFBQ0Y7VUFDNUM7VUFBVyxNQUFNRyxZQUFZLEdBQUcsb0JBQW9CO1VBQUNIO1VBRXJEO1VBQVcsTUFBTUksR0FBRyxHQUFHLGNBQWM7VUFBQ0o7VUFDdEM7VUFBVyxNQUFNSyxPQUFPLEdBQUcsZ0JBQWdCO1VBQUNMO1VBQzVDO1VBQVcsTUFBTU0sT0FBTyxHQUFHLGtCQUFrQjtVQUFDTjtVQUM5QztVQUFXLE1BQU1PLFFBQVEsR0FBRyxrQkFBa0I7VUFBQ1A7VUFDL0M7VUFBVyxNQUFNUSxRQUFRLEdBQUcsa0JBQWtCO1VBQUNSIiwibmFtZXMiOlsid2hpc3BlciIsImV4cG9ydHMiLCJncHQ0IiwiZ3B0VHVyYm8iLCJncHRUdXJib1BsdXMiLCJhZGEiLCJjdXJyaWUxIiwiYmFiYmFnZSIsImRhdmluY2kyIiwiZGF2aW5jaTMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19