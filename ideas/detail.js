System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.5/page", "@beyond-js/kernel@0.1.9/core", "@aimpact/voice-genius@1.0.0/models", "@beyond-js/reactive@1.0.0/model", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/voice-genius@1.0.0/model", "@aimpact/voice-genius@1.0.0/voice", "react@18.2.0", "marked@4.3.0", "dompurify@3.0.2", "dayjs@1.11.7", "@aimpact/voice-genius@1.0.0/components/icons", "@bgroup/ui@0.0.34/spinner", "@bgroup/ui@0.0.34/icons", "@bgroup/ui@0.0.34/toast", "@bgroup/ui@0.0.34/form", "@beyond-js/react-18-widgets@0.0.5/hooks", "react@18.2.0/jsx-runtime"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets005Page) {
      dependency_3 = _beyondJsReact18Widgets005Page;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_aimpactVoiceGenius100Models) {
      dependency_5 = _aimpactVoiceGenius100Models;
    }, function (_beyondJsReactive100Model) {
      dependency_6 = _beyondJsReactive100Model;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_7 = _aimpactMediaManager100Uploader;
    }, function (_aimpactVoiceGenius100Model) {
      dependency_8 = _aimpactVoiceGenius100Model;
    }, function (_aimpactVoiceGenius100Voice) {
      dependency_9 = _aimpactVoiceGenius100Voice;
    }, function (_react) {
      dependency_10 = _react;
    }, function (_marked2) {
      dependency_11 = _marked2;
    }, function (_dompurify) {
      dependency_12 = _dompurify;
    }, function (_dayjs2) {
      dependency_13 = _dayjs2;
    }, function (_aimpactVoiceGenius100ComponentsIcons) {
      dependency_14 = _aimpactVoiceGenius100ComponentsIcons;
    }, function (_bgroupUi0034Spinner) {
      dependency_15 = _bgroupUi0034Spinner;
    }, function (_bgroupUi0034Icons) {
      dependency_16 = _bgroupUi0034Icons;
    }, function (_bgroupUi0034Toast) {
      dependency_17 = _bgroupUi0034Toast;
    }, function (_bgroupUi0034Form) {
      dependency_18 = _bgroupUi0034Form;
    }, function (_beyondJsReact18Widgets005Hooks) {
      dependency_19 = _beyondJsReact18Widgets005Hooks;
    }, function (_react1820JsxRuntime) {
      dependency_20 = _react1820JsxRuntime;
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
          "vspecifier": "@aimpact/voice-genius@1.0.0/ideas/detail"
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@aimpact/voice-genius/models', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/media-manager/uploader', dependency_7], ['@aimpact/voice-genius/model', dependency_8], ['@aimpact/voice-genius/voice', dependency_9], ['react', dependency_10], ['marked', dependency_11], ['dompurify', dependency_12], ['dayjs', dependency_13], ['@aimpact/voice-genius/components/icons', dependency_14], ['@bgroup/ui/spinner', dependency_15], ['@bgroup/ui/icons', dependency_16], ['@bgroup/ui/toast', dependency_17], ['@bgroup/ui/form', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['react/jsx-runtime', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "vg-detail-idea",
        "vspecifier": "@aimpact/voice-genius@1.0.0/ideas/detail",
        "is": "page",
        "route": "/ideas/detail/${id}"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/voice-genius@1.0.0/ideas/detail');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3638876128,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore(language) {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load(this.uri.vars.get("id"));
            }
            hide() {
              this.#store.clean();
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/audio
      *****************************/

      ims.set('./store/audio', {
        hash: 4197762094,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioManager = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _time = require("./time");
          var _models = require("@aimpact/voice-genius/models");
          class AudioManager {
            #context;
            #promise;
            #element;
            #source;
            #reader;
            #duration;
            #id;
            #model;
            get id() {
              return this.#id;
            }
            async generateId(audioBuffer) {
              const audioData = audioBuffer.getChannelData(0);
              const hashBuffer = await crypto.subtle.digest("SHA-256", audioData.buffer);
              const hashArray = Array.from(new Uint8Array(hashBuffer));
              const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
              return hashHex;
            }
            load = source => {
              if (this.#promise) return this.#promise;
              const promise = new _core.PendingPromise();
              this.#promise = promise;
              this.#context = new AudioContext();
              this.#element = new Audio(source);
              const reader = new FileReader();
              this.#source = source;
              this.#reader = source;
              reader.addEventListener("load", async () => {
                this.#context.decodeAudioData(reader.result, buffer => {
                  this.generateId(source);
                  const duration = buffer.duration;
                  this.#duration = duration;
                  const item = new _models.Subject();
                  item.set({
                    id: this.#id,
                    source: this.#source,
                    type: "audio",
                    duration
                  });
                  promise.resolve(duration);
                });
              });
              reader.readAsArrayBuffer(source);
              return promise;
            };
            get duration() {
              return (0, _time.timeFormat)(this.#duration);
            }
          }
          exports.AudioManager = AudioManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 2148081569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _models = require("@aimpact/voice-genius/models");
          var _model2 = require("@aimpact/voice-genius/model");
          var _voice = require("@aimpact/voice-genius/voice");
          class StoreManager extends _model.ReactiveModel {
            recordings = [];
            #idea;
            get idea() {
              return this.#idea;
            }
            #audio;
            get audio() {
              return this.#audio;
            }
            #transcriber;
            get transcriber() {
              return this.#transcriber;
            }
            #completions;
            constructor() {
              super();
              this.#transcriber = new _models.Transcriber();
              this.#completions = new _model2.AIModel();
            }
            #currentAction = "transcribe";
            get currentAction() {
              return this.#currentAction;
            }
            set currentAction(value) {
              if (value === this.#currentAction) return;
              this.#currentAction = value;
              this.triggerEvent();
            }
            #currentData;
            get currentData() {
              if (!this.currentAction) return;
              if (!this.idea) return;
              return this.idea.actions.get(this.#currentAction);
            }
            clean() {
              this.#idea = undefined;
              this.fetching = false;
              this.ready = false;
              this.triggerEvent();
            }
            async load(id) {
              this.fetching = true;
              this.triggerEvent();
              const idea = new _models.Subject(id);
              await idea.load();
              this.#idea = idea;
              this.fetching = false;
              this.ready = true;
              this.triggerEvent();
            }
            async edit(props) {
              try {
                this.#idea.set(props);
                this.#idea.save();
              } catch {}
            }
            async getTranscription() {
              try {
                this.processing = true;
                this.triggerEvent();
                const response = await this.#transcriber.transcribe(this.idea.source);
                this.idea.actions.set("transcribe", response);
                await this.idea.save();
                this.processing = false;
                this.triggerEvent();
              } catch (e) {
                console.log(e);
              }
            }
            async executeAction(action) {
              this.#currentAction = action;
              this.triggerEvent();
              if (this.idea.actions.has(action)) {
                console.log("exists", this.currentAction, this.currentData);
                this.triggerEvent();
                return;
              }
              if (action !== "transcribe") {
                if (!this.idea.actions.has("transcribe")) {
                  await this.getTranscription();
                }
                return this.completion(action);
              }
              return this.getTranscription();
            }
            async completion(action) {
              try {
                if (this.#idea.actions.has(action)) {
                  this.#currentData = this.#idea.actions.get(action);
                  this.triggerEvent();
                  return;
                }
                this.processing = true;
                this.trigger("change");
                const prompts = {
                  format: "Can you rewrite the following text so that it looks the same as the original, but better formatted?",
                  bullets: `Please synthesize the following text so that it can be used for further analysis and allows for quick visualization of the content. Include the main points and use the following elements as appropriate:

				Use bold, italics, underlining, or other formatting to highlight the main points and important sub-points.
				Use bullet points, tables, graphs, or diagrams to present the information clearly and visually.
				Include a clear and concise introduction that summarizes the topic and objectives of the text.
				Include a conclusion that summarizes the main ideas and provides an overview of the text.
				Ensure that the synthesis is coherent, easy to understand, and provides a clear visualization of the content of the original text, making it useful for further analysis.
				`,
                  inspirational: `Please write a text that will be used to be recorded by a broadcaster. An audio will be then created (no background music, just the audio). It must be a seller's speech.
				Start with an inspirational message, then explain the product, and finish with an emotional message that includes a call to action.
				`
                };
                const transctiption = this.idea.actions.get("transcribe");
                const data = await this.#completions.chat(prompts[action], transctiption.text);
                this.processing = false;
                this.idea.actions.set(action, {
                  text: data
                });
                await this.idea.save();
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
            }
            #voice;
            async stop() {
              this.#voice.stop();
            }
            async reproduce(type) {
              const data = this.idea.actions.get(this.#currentAction);
              if (!data) return;
              if (type === "lab") {
                const action = this.idea.actions.get(this.#currentAction);
                this.#voice = new _voice.VoiceLab();
                action.audioLab ? await this.#voice.init(this.currentData.audioLab) : await this.#voice.call(this.currentData.text);
                if (!action.audioLab) {
                  this.idea.actions.set(this.#currentAction, {
                    text: action.text,
                    audioLab: this.#voice.blob
                  });
                  await this.idea.save();
                }
                window.voice = this.#voice;
                this.#voice.speak();
                return;
              }
              this.#voice = new _voice.Voice();
              this.#voice.speak(this.currentData.text);
              // window.voice = this.#voice;
            }
          }

          exports.StoreManager = StoreManager;
        }
      });

      /****************************
      INTERNAL MODULE: ./store/time
      ****************************/

      ims.set('./store/time', {
        hash: 2373484433,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.timeFormat = timeFormat;
          function timeFormat(time) {
            const hours = Math.floor(time / 3600);
            const minutes = Math.floor(time % 3600 / 60);
            const seconds = Math.floor(time % 60);
            let timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            if (hours > 0) {
              timeString = `${hours.toString().padStart(2, "0")}:${timeString}`;
            }
            return timeString;
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/content/data-container
      **********************************************/

      ims.set('./views/content/data-container', {
        hash: 435543099,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DataContainer = DataContainer;
          var React = require("react");
          var _data = require("./data");
          var _voiceActions = require("./voice-actions");
          function DataContainer() {
            return React.createElement(React.Fragment, null, React.createElement(_data.default, null), React.createElement(_voiceActions.VoiceActions, null));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/content/data
      ************************************/

      ims.set('./views/content/data', {
        hash: 1257502018,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Data;
          var _context = require("../context");
          var React = require("react");
          var _marked = require("marked");
          var DOMPurify = require("dompurify");
          function Data() {
            const {
              store: {
                currentAction,
                currentData,
                fetching,
                processing
              }
            } = (0, _context.useIdeaContext)();
            if (typeof currentData.text !== "string") {
              return null;
            }
            const content = DOMPurify.sanitize(_marked.marked.parse(currentData.text));
            return React.createElement("div", {
              className: "content-data"
            }, React.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: content
              }
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/content/index
      *************************************/

      ims.set('./views/content/index', {
        hash: 2009713577,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Content = Content;
          var React = require("react");
          var _context = require("../context");
          var _dayjs = require("dayjs");
          var _icons = require("@aimpact/voice-genius/components/icons");
          function Content() {
            const {
              store: {
                idea,
                currentAction
              },
              store
            } = (0, _context.useIdeaContext)();
            const [editable, setEditable] = React.useState(false);
            const formattedDate = _dayjs.default.unix(idea.createdAt).format("ddd, MMM D, YYYY . h:mm A");
            const actions = [["transcribe", "Transcription", "transcription"], ["bullets", "Bullets point", "bulletPoints"], ["format", "Improved Trascription", "formatText"], ["inspirational", "Inspirational", "inspirational"]];
            const onClick = ({
              currentTarget
            }) => {
              store.executeAction(currentTarget.dataset.action);
            };
            const buttons = actions.map(([action, label, icon]) => {
              const cls = `btn beyond-button btn-primary${currentAction === action ? " btn-active" : ""}`;
              return React.createElement(_icons.AppButton, {
                onClick: onClick,
                key: action,
                "data-action": action,
                className: cls,
                icon: icon
              }, label);
            });
            return React.createElement("div", {
              className: "page__content"
            }, React.createElement("div", {
              className: "actions"
            }, React.createElement("div", null, " fecha: ", formattedDate)), React.createElement("div", {
              className: "btn__actions"
            }, buttons));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/content/sections
      ****************************************/

      ims.set('./views/content/sections', {
        hash: 980341163,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sections = Sections;
          var React = require("react");
          var _spinner = require("@bgroup/ui/spinner");
          var _context = require("../context");
          var _dataContainer = require("./data-container");
          function Sections() {
            const {
              store: {
                currentAction,
                currentData,
                fetching,
                processing
              }
            } = (0, _context.useIdeaContext)();
            if (!currentAction) return;
            const titles = {
              transcribe: "Transcription",
              bullets: "Bullets point",
              format: "Improved Trascription"
            };
            return React.createElement("section", {
              className: "action-content"
            }, React.createElement("h3", null, titles[currentAction]), fetching || processing ? React.createElement(_spinner.BeyondSpinner, {
              active: true
            }) : React.createElement(React.Fragment, null, currentData ? React.createElement(_dataContainer.DataContainer, null) : null, " "));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/content/voice-actions
      *********************************************/

      ims.set('./views/content/voice-actions', {
        hash: 2813657873,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VoiceActions = VoiceActions;
          var React = require("react");
          var _context = require("../context");
          var _icons = require("@aimpact/voice-genius/components/icons");
          var _icons2 = require("@bgroup/ui/icons");
          var _toast = require("@bgroup/ui/toast");
          function VoiceActions() {
            const {
              store
            } = (0, _context.useIdeaContext)();
            const [processing, setProcessing] = React.useState(false);
            const onClick = async event => {
              setProcessing(true);
              const {
                listen,
                action
              } = event.currentTarget.dataset;
              await store.reproduce(listen, action);
              setProcessing(false);
            };
            const onPause = async event => {
              setProcessing(true);
              const {
                listen,
                action
              } = event.currentTarget.dataset;
              await store.pause(listen, action);
              setProcessing(false);
            };
            const {
              store: {
                currentData,
                currentAction
              }
            } = (0, _context.useIdeaContext)();
            const copy = () => {
              navigator.clipboard.writeText(currentData.text);
              _toast.toast.success("Copied");
            };
            return React.createElement("div", {
              className: "btn-actions audio__actions"
            }, React.createElement(_icons.AppButton, {
              className: "btn beyond-button btn-primar",
              onClick: onClick,
              "data-listen": "api",
              "data-action": currentAction
            }, "Reproduce"), React.createElement(_icons.AppButton, {
              className: "btn beyond-button btn-primar",
              onClick: onClick,
              "data-listen": "lab",
              "data-action": currentAction
            }, "Hyper Real reproduction"), React.createElement(_icons2.BeyondIconButton, {
              icon: "copy",
              onClick: copy
            }), React.createElement(_toast.Toasts, {
              position: {
                bottom: "2rem",
                right: "2rem"
              }
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 313650794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useIdeaContext = exports.IdeaContext = void 0;
          var React = require("react");
          const initialValue = {};
          const IdeaContext = React.createContext(initialValue);
          exports.IdeaContext = IdeaContext;
          const useIdeaContext = () => React.useContext(IdeaContext);
          exports.useIdeaContext = useIdeaContext;
        }
      });

      /********************************
      INTERNAL MODULE: ./views/error404
      ********************************/

      ims.set('./views/error404', {
        hash: 2411046036,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Error404 = Error404;
          var React = require("react");
          // audio_player.tsx

          function Error404() {
            return React.createElement("div", {
              className: "not-found-section"
            }, " We coudn't found your idea!");
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/header/form-name
      ****************************************/

      ims.set('./views/header/form-name', {
        hash: 3487344786,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormEditName = FormEditName;
          var React = require("react");
          var _form = require("@bgroup/ui/form");
          var _context = require("../context");
          function FormEditName({
            setEditable,
            currentValue
          }) {
            const {
              store
            } = (0, _context.useIdeaContext)();
            const [fetching, setFetching] = React.useState(false);
            const [value, setValue] = React.useState(currentValue);
            const onSubmit = event => {
              setFetching(true);
              event.preventDefault();
              store.edit({
                name: event.currentTarget.querySelector('input[name="name"]').value
              });
              setFetching(false);
              setEditable(false);
            };
            const disabled = {};
            const onChange = ({
              currentTarget: {
                value
              }
            }) => setValue(value);
            if (fetching) disabled["disabled"] = true;
            const cls = `form-edit${fetching ? " is-fetching" : ""}`;
            return React.createElement(_form.BeyondForm, {
              onSubmit: onSubmit,
              className: cls
            }, React.createElement(_form.BeyondInput, {
              name: "name",
              value: value,
              onChange: onChange
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/header/header
      *************************************/

      ims.set('./views/header/header', {
        hash: 2158250312,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          var _icons = require("@bgroup/ui/icons");
          var _context = require("../context");
          var _formName = require("./form-name");
          function Header() {
            const {
              store: {
                idea
              }
            } = (0, _context.useIdeaContext)();
            const [editable, setEditable] = React.useState(false);
            const ref = React.useRef(null);
            const onEdit = () => {
              setEditable(!editable);
            };
            return React.createElement("header", {
              className: "header__page"
            }, editable ? React.createElement(_formName.FormEditName, {
              currentValue: idea.name,
              setEditable: setEditable
            }) : React.createElement("h1", {
              ref: ref,
              className: "editable"
            }, idea.name), React.createElement(_icons.BeyondIconButton, {
              icon: "edit",
              onClick: onEdit
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2059450287,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _error = require("./error404");
          var _main = require("./main");
          function View({
            store
          }) {
            const [fetching, setFetching] = React.useState(false);
            const [processing, setProcessing] = React.useState(store.processing);
            const [currentAction, setCurrentAction] = React.useState(store.currentAction);
            const [currentData, setCurrentData] = React.useState(store.currentData);
            const [loaded, setLoaded] = React.useState(store.idea?.loaded);
            (0, _hooks.useBinder)([store], () => setFetching(store.fetching));
            (0, _hooks.useBinder)([store], () => {
              setCurrentAction(store.currentAction);
              setProcessing(store.processing);
              setLoaded(store.idea?.loaded);
              setCurrentData(store.currentData);
            });
            if (store.fetching) return "cargando...";
            const {
              idea
            } = store;
            if (!idea) return null;
            if (!idea.loaded) return "cargando";
            const Control = idea.landed ? _main.Main : _error.Error404;
            return React.createElement(_context.IdeaContext.Provider, {
              value: {
                store,
                fetching,
                processing,
                currentAction,
                currentData
              }
            }, React.createElement(Control, null));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/main
      ****************************/

      ims.set('./views/main', {
        hash: 1834168946,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Main = Main;
          var React = require("react");
          var _context = require("./context");
          var _header = require("./header/header");
          var _content = require("./content");
          var _sections = require("./content/sections");
          var _player = require("./player");
          // audio_player.tsx

          function Main() {
            const {
              processing
            } = (0, _context.useIdeaContext)();
            const cls = `main-sreen ${processing ? " is-fetching" : ""}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement(_header.Header, null), React.createElement(_content.Content, null), React.createElement(_sections.Sections, null), React.createElement(_player.AudioPlayer, null));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/player
      ******************************/

      ims.set('./views/player', {
        hash: 2378736702,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var React = require("react");
          var _context = require("./context");
          // audio_player.tsx

          function AudioPlayer() {
            const {
              store
            } = (0, _context.useIdeaContext)();
            const src = URL.createObjectURL(store.idea.source);
            return React.createElement("div", {
              className: "audio-player"
            }, React.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, React.createElement("source", {
              src: src,
              type: "audio/mp3"
            }), "Your browser does not support the audio element."));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUM1RCxPQUNDd0M7Y0FBS1MsU0FBUyxFQUFFaUI7WUFBRyxHQUNsQjFCLG9CQUFDbUUsY0FBTSxPQUFHLEVBQ1ZuRSxvQkFBQ1ksZ0JBQU8sT0FBRyxFQUNYWixvQkFBQzZCLGtCQUFRLE9BQUcsRUFDWjdCLG9CQUFDK0UsbUJBQVcsT0FBRyxDQUNWO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBO1VBQ0E7VUFGQTs7VUFJTSxTQUFVQSxXQUFXO1lBQzFCLE1BQU07Y0FBRTVFO1lBQUssQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDbEMsTUFBTTZFLEdBQUcsR0FBR0MsR0FBRyxDQUFDQyxlQUFlLENBQUMvRSxLQUFLLENBQUM3RCxJQUFJLENBQUNuQixNQUFNLENBQUM7WUFDbEQsT0FDQzZFO2NBQUtTLFNBQVMsRUFBQztZQUFjLEdBQzVCVDtjQUFPbUYsUUFBUTtjQUFDQyxPQUFPLEVBQUM7WUFBVSxHQUNqQ3BGO2NBQVFnRixHQUFHLEVBQUVBLEdBQUc7Y0FBRS9JLElBQUksRUFBQztZQUFXLEVBQUcscURBRTlCLENBQ0g7VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJsYW5ndWFnZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiQXVkaW9NYW5hZ2VyIiwiaWQiLCJnZW5lcmF0ZUlkIiwiYXVkaW9CdWZmZXIiLCJhdWRpb0RhdGEiLCJnZXRDaGFubmVsRGF0YSIsImhhc2hCdWZmZXIiLCJjcnlwdG8iLCJzdWJ0bGUiLCJkaWdlc3QiLCJidWZmZXIiLCJoYXNoQXJyYXkiLCJBcnJheSIsImZyb20iLCJVaW50OEFycmF5IiwiaGFzaEhleCIsIm1hcCIsImIiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsInNvdXJjZSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIkF1ZGlvQ29udGV4dCIsIkF1ZGlvIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWNvZGVBdWRpb0RhdGEiLCJyZXN1bHQiLCJkdXJhdGlvbiIsIml0ZW0iLCJTdWJqZWN0Iiwic2V0IiwidHlwZSIsInJlc29sdmUiLCJyZWFkQXNBcnJheUJ1ZmZlciIsIlJlYWN0aXZlTW9kZWwiLCJyZWNvcmRpbmdzIiwiaWRlYSIsImF1ZGlvIiwidHJhbnNjcmliZXIiLCJjb25zdHJ1Y3RvciIsIlRyYW5zY3JpYmVyIiwiQUlNb2RlbCIsImN1cnJlbnRBY3Rpb24iLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsImN1cnJlbnREYXRhIiwiYWN0aW9ucyIsInVuZGVmaW5lZCIsImZldGNoaW5nIiwicmVhZHkiLCJlZGl0IiwicHJvcHMiLCJzYXZlIiwiZ2V0VHJhbnNjcmlwdGlvbiIsInByb2Nlc3NpbmciLCJyZXNwb25zZSIsInRyYW5zY3JpYmUiLCJlIiwiY29uc29sZSIsImxvZyIsImV4ZWN1dGVBY3Rpb24iLCJhY3Rpb24iLCJoYXMiLCJjb21wbGV0aW9uIiwidHJpZ2dlciIsInByb21wdHMiLCJmb3JtYXQiLCJidWxsZXRzIiwiaW5zcGlyYXRpb25hbCIsInRyYW5zY3RpcHRpb24iLCJkYXRhIiwiY2hhdCIsInRleHQiLCJlcnJvciIsInN0b3AiLCJyZXByb2R1Y2UiLCJWb2ljZUxhYiIsImF1ZGlvTGFiIiwiaW5pdCIsImNhbGwiLCJibG9iIiwid2luZG93Iiwidm9pY2UiLCJzcGVhayIsIlZvaWNlIiwidGltZUZvcm1hdCIsInRpbWUiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidGltZVN0cmluZyIsIkRhdGFDb250YWluZXIiLCJSZWFjdCIsIkRhdGEiLCJWb2ljZUFjdGlvbnMiLCJzdG9yZSIsImNvbnRlbnQiLCJET01QdXJpZnkiLCJzYW5pdGl6ZSIsIm1hcmtlZCIsInBhcnNlIiwiY2xhc3NOYW1lIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJDb250ZW50IiwiZWRpdGFibGUiLCJzZXRFZGl0YWJsZSIsInVzZVN0YXRlIiwiZm9ybWF0dGVkRGF0ZSIsImRheWpzIiwidW5peCIsImNyZWF0ZWRBdCIsIm9uQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImJ1dHRvbnMiLCJsYWJlbCIsImljb24iLCJjbHMiLCJBcHBCdXR0b24iLCJrZXkiLCJTZWN0aW9ucyIsInRpdGxlcyIsIkJleW9uZFNwaW5uZXIiLCJhY3RpdmUiLCJzZXRQcm9jZXNzaW5nIiwiZXZlbnQiLCJsaXN0ZW4iLCJvblBhdXNlIiwicGF1c2UiLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiQmV5b25kSWNvbkJ1dHRvbiIsIlRvYXN0cyIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJpbml0aWFsVmFsdWUiLCJJZGVhQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VJZGVhQ29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvcjQwNCIsIkZvcm1FZGl0TmFtZSIsImN1cnJlbnRWYWx1ZSIsInNldEZldGNoaW5nIiwic2V0VmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwiQmV5b25kRm9ybSIsIkJleW9uZElucHV0IiwiSGVhZGVyIiwicmVmIiwidXNlUmVmIiwib25FZGl0Iiwic2V0Q3VycmVudEFjdGlvbiIsInNldEN1cnJlbnREYXRhIiwibG9hZGVkIiwic2V0TG9hZGVkIiwiQ29udHJvbCIsImxhbmRlZCIsIk1haW4iLCJQcm92aWRlciIsIkF1ZGlvUGxheWVyIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY29udHJvbHMiLCJwcmVsb2FkIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy9zdG9yZS9hdWRpby50cyIsIndpZGdldC90cy9zdG9yZS9pbmRleC50cyIsIndpZGdldC90cy9zdG9yZS90aW1lLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2NvbnRlbnQvZGF0YS1jb250YWluZXIudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NvbnRlbnQvZGF0YS50c3giLCJ3aWRnZXQvdHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvY29udGVudC9zZWN0aW9ucy50c3giLCJ3aWRnZXQvdHMvdmlld3MvY29udGVudC92b2ljZS1hY3Rpb25zLnRzeCIsIndpZGdldC90cy92aWV3cy9jb250ZXh0LnRzeCIsIndpZGdldC90cy92aWV3cy9lcnJvcjQwNC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaGVhZGVyL2Zvcm0tbmFtZS50c3giLCJ3aWRnZXQvdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL21haW4udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3BsYXllci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=