System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, JCall, __beyond_pkg, hmr;
  _export("JCall", void 0);
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
          "vspecifier": "@aimpact/voice-genius@1.0.0/utils"
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
        hash: 2342283644,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.JCall = JCall;
          /*bundle*/
          function JCall() {
            this.checkToken = headers => {
              if (typeof window === 'undefined') return headers;
              let session = window.localStorage.getItem('session');
              if (!session) return headers;
              const sessionObject = JSON.parse(session);
              headers.append('Authorization', `Bearer ${sessionObject.accessToken}`);
              return headers;
            };
            this.execute = async (url, method = 'get', params = {}, headersSpecs = {}) => {
              try {
                const keys = Object.keys(headersSpecs);
                let headers = new Headers();
                keys.forEach(key => headers.append(key, headersSpecs[key]));
                const specs = {
                  method,
                  headers,
                  mode: 'cors'
                };
                const emptyParams = Object.entries(params).length === 0 && params.constructor === Object;
                if (method === 'post' && !emptyParams) specs.body = JSON.stringify(params);else if (!emptyParams && method === 'get') {
                  const parameters = Object.keys(params);
                  if (parameters.length) {
                    url += "?";
                    parameters.forEach(key => {
                      if ([NaN, undefined, ''].includes(params[key])) return;
                      url += `&${key}=${params[key]}`;
                    });
                  }
                }
                const response = await fetch(url, specs);
                return response.json();
              } catch (e) {
                console.error("error jcall", e);
              }
            };
            this.get = (url, params, headers) => this.execute(url, 'get', params, headers);
            this.post = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'post', params, headers);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "JCall",
        "name": "JCall"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'JCall') && _export("JCall", JCall = require ? require('./index').JCall : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFDbkIsS0FBSyxJQUFJLENBQUNVLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLE1BQU0sRUFBRUUsTUFBTSxFQUFFYixPQUFPLENBQUM7VUFDcEQiLCJuYW1lcyI6WyJKQ2FsbCIsImNoZWNrVG9rZW4iLCJoZWFkZXJzIiwid2luZG93Iiwic2Vzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiYXBwZW5kIiwiYWNjZXNzVG9rZW4iLCJleGVjdXRlIiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwiaGVhZGVyc1NwZWNzIiwia2V5cyIsIk9iamVjdCIsIkhlYWRlcnMiLCJmb3JFYWNoIiwia2V5Iiwic3BlY3MiLCJtb2RlIiwiZW1wdHlQYXJhbXMiLCJlbnRyaWVzIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJib2R5Iiwic3RyaW5naWZ5IiwicGFyYW1ldGVycyIsIk5hTiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJlIiwiY29uc29sZSIsImVycm9yIiwiZ2V0IiwicG9zdCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=