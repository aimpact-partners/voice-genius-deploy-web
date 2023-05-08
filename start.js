System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@0.1.4/render", "@beyond-js/reactive@1.0.0/database", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets014Render) {
      dependency_2 = _beyondJsWidgets014Render;
    }, function (_beyondJsReactive100Database) {
      dependency_3 = _beyondJsReactive100Database;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@beyond-js/reactive/database', dependency_3], ['@beyond-js/kernel/routing', dependency_4]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "completions-page",
        "vspecifier": "@aimpact/voice-genius@1.0.0/completions",
        "is": "page",
        "route": "/completions"
      }, {
        "name": "vg-detail-idea",
        "vspecifier": "@aimpact/voice-genius@1.0.0/ideas/detail",
        "is": "page",
        "route": "/ideas/detail/${id}"
      }, {
        "name": "vg-ideas-page",
        "vspecifier": "@aimpact/voice-genius@1.0.0/home",
        "is": "page",
        "route": "/ideas"
      }, {
        "name": "voice-genius",
        "vspecifier": "@aimpact/voice-genius@1.0.0/layout/main",
        "is": "layout"
      }, {
        "name": "test-page",
        "vspecifier": "@aimpact/voice-genius@1.0.0/test",
        "is": "page",
        "route": "/test"
      }]);
      bundles = [];
      /*******************************************
      MODULE: @aimpact/voice-genius/model/register
      *******************************************/
      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/voice-genius@1.0.0/model/register"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.0.0"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@bgroup/ui", "0.0.34"], ["@types/marked", "4.3.0"], ["dayjs", "1.11.7"], ["dexie", "3.2.3"], ["dompurify", "3.0.2"], ["marked", "4.3.0"], ["openai", "3.2.1"], ["prism-react-renderer", "1.3.5"], ["react-markdown", "8.0.7"], ["socket.io-client", "4.6.1"], ["@aimpact/voice-genius", "1.0.0"], ["@aimpact/voice-genius", "1.0.0"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /***********************
        INTERNAL MODULE: ./start
        ***********************/

        ims.set('./start', {
          hash: 98276207,
          creator: function (require, exports) {
            "use strict";

            var _database = require("@beyond-js/reactive/database");
            (async () => {
              _database.DBManager.config("voicegenius@5", {
                // users: "userId, username, email, passwordHash, createdAt, updatedAt",
                // summaries: "summaryId, transcriptId, subjectId, bulletPoints, createdAt, updatedAt",
                // aiConversations: "conversationId, userId, transcriptionId, subjectId, summaryId, createdAt, updatedAt",
                // aiMessages: "messageId, conversationId, senderType, messageText, createdAt",
                chats: "++id, title, category, tags, conversation, context",
                topics: "&id, userId, &name, description, createdAt, updatedAt",
                subjects: "++id, topicId, name, description, source, data, audioLabs, createdAt, updatedAt",
                prompts: "++id, &name, content, createdAt, updatedAt"
              });
            })();
          }
        });
        return {
          dependencies: ['@beyond-js/reactive/database']
        };
      }]);

      /****************************************
      MODULE: @aimpact/voice-genius/routing-app
      ****************************************/

      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/voice-genius@1.0.0/routing-app"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.0.0"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@bgroup/ui", "0.0.34"], ["@types/marked", "4.3.0"], ["dayjs", "1.11.7"], ["dexie", "3.2.3"], ["dompurify", "3.0.2"], ["marked", "4.3.0"], ["openai", "3.2.1"], ["prism-react-renderer", "1.3.5"], ["react-markdown", "8.0.7"], ["socket.io-client", "4.6.1"], ["@aimpact/voice-genius", "1.0.0"], ["@aimpact/voice-genius", "1.0.0"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /******************************************
        INTERNAL MODULE: ./controller/handlers/home
        ******************************************/

        ims.set('./controller/handlers/home', {
          hash: 3151646676,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.homeHandler = homeHandler;
            function homeHandler(pathname) {
              if (pathname === "/") return {
                pathname: "/ideas"
              };
              return {
                pathname
              };
            }
          }
        });

        /**********************************
        INTERNAL MODULE: ./controller/index
        **********************************/

        ims.set('./controller/index', {
          hash: 1669375899,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.Router = void 0;
            var _home = require("./handlers/home");
            var _pipeline = require("./pipeline");
            class Router {
              #isDefault;
              get isDefault() {
                return this.#pathname === "/";
              }
              #pathname;
              get pathname() {
                return this.#pathname;
              }
              #data;
              get data() {
                return this.#data;
              }
              #pipeline;
              constructor() {
                this.#pipeline = new _pipeline.PipeLine([_home.homeHandler]);
              }
              load = async pathname => {
                return await this.#pipeline.validate(pathname);
              };
            }
            exports.Router = Router;
          }
        });

        /*************************************
        INTERNAL MODULE: ./controller/pipeline
        *************************************/

        ims.set('./controller/pipeline', {
          hash: 1398479999,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PipeLine = void 0;
            class PipeLine {
              #pathname;
              get pathname() {
                return this.#parent?.pathname;
              }
              #data;
              get data() {
                return this.#parent?.data;
              }
              #parent;
              #handlers = [];
              constructor(handlers) {
                this.#parent = parent;
                this.#handlers = handlers;
              }
              validate = async path => {
                for (let handler of this.#handlers) {
                  if (handler === undefined) continue;
                  let response = await handler(path);
                  if (response && typeof response === "object") {
                    return response;
                    break;
                  }
                }
                return {
                  pathname: path
                };
              };
            }
            exports.PipeLine = PipeLine;
          }
        });

        /*************************
        INTERNAL MODULE: ./routing
        *************************/

        ims.set('./routing', {
          hash: 794505981,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            var _controller = require("./controller");
            const router = new _controller.Router();
            _routing.routing.redirect = async function redirect(uri) {
              // const control: RoutingAppController = new RoutingAppController(uri.pathname, data);
              const response = await router.load(uri.pathname);
              return response.pathname;
            };
            _routing.routing.missing = async pathname => {
              let error404 = false;
              if (error404) return;
              error404 = true;
              return "error-404";
            };
          }
        });
        return {
          dependencies: ['@beyond-js/kernel/routing']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});