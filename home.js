System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.5/page", "@beyond-js/kernel@0.1.9/core", "@aimpact/voice-genius@1.0.0/models", "dayjs@1.11.7", "@beyond-js/reactive@1.0.0/model", "@aimpact/media-manager@1.0.0/uploader", "@bgroup/ui@0.0.34/toast", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "@bgroup/ui@0.0.34/form", "@bgroup/ui@0.0.34/icons", "@beyond-js/react-18-widgets@0.0.5/hooks", "@aimpact/media-manager@1.0.0/main", "@bgroup/ui@0.0.34/image", "@bgroup/ui@0.0.34/spinner"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
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
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_beyondJsReactive100Model) {
      dependency_7 = _beyondJsReactive100Model;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_8 = _aimpactMediaManager100Uploader;
    }, function (_bgroupUi0034Toast) {
      dependency_9 = _bgroupUi0034Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_react) {
      dependency_11 = _react;
    }, function (_bgroupUi0034Form) {
      dependency_12 = _bgroupUi0034Form;
    }, function (_bgroupUi0034Icons) {
      dependency_13 = _bgroupUi0034Icons;
    }, function (_beyondJsReact18Widgets005Hooks) {
      dependency_14 = _beyondJsReact18Widgets005Hooks;
    }, function (_aimpactMediaManager100Main) {
      dependency_15 = _aimpactMediaManager100Main;
    }, function (_bgroupUi0034Image) {
      dependency_16 = _bgroupUi0034Image;
    }, function (_bgroupUi0034Spinner) {
      dependency_17 = _bgroupUi0034Spinner;
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
          "vspecifier": "@aimpact/voice-genius@1.0.0/home"
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@aimpact/voice-genius/models', dependency_5], ['dayjs', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/media-manager/uploader', dependency_8], ['@bgroup/ui/toast', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['react', dependency_11], ['@bgroup/ui/form', dependency_12], ['@bgroup/ui/icons', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/media-manager/main', dependency_15], ['@bgroup/ui/image', dependency_16], ['@bgroup/ui/spinner', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "vg-ideas-page",
        "vspecifier": "@aimpact/voice-genius@1.0.0/home",
        "is": "page",
        "route": "/ideas"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/voice-genius@1.0.0/home');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3930753885,
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
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./icons
      ***********************/

      ims.set('./icons', {
        hash: 340168020,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ICONS = void 0;
          const ICONS = {
            mic: {
              icon: '<g id="mic"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>',
              viewBox: "0 0 24 24"
            },
            stop: {
              icon: '<g id="stop"><path d="M6 6h12v12H6z"></path></g>',
              viewBox: "0 0 24 24"
            }
          };
          exports.ICONS = ICONS;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/audio
      *****************************/

      ims.set('./store/audio', {
        hash: 3976050224,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioManager = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _time = require("./time");
          var _models = require("@aimpact/voice-genius/models");
          var _dayjs = require("dayjs");
          var _model = require("@beyond-js/reactive/model");
          class AudioManager extends _model.ReactiveModel {
            #context;
            #promise;
            #element;
            #source;
            #reader;
            #duration;
            #error;
            get error() {
              return this.#error;
            }
            #id;
            #model;
            get id() {
              return this.#id;
            }
            async generateId(audioBuffer) {
              const timestamp = new Date().getTime();
              this.#id = `audio.${audioBuffer.duration}.${timestamp}`;
              return this.#id;
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
              reader.addEventListener("load", async result => {
                this.#context.decodeAudioData(reader.result, async buffer => {
                  this.generateId(buffer);
                  const duration = buffer.duration;
                  this.#duration = duration;
                  const item = new _models.Subject();
                  let number = parseInt(localStorage.getItem("recording.number")) ?? 1;
                  const minutes = Math.floor(duration % 3600 / 60);
                  if (minutes > 3.5) {
                    promise.resolve({
                      error: "Recording is too long"
                    });
                    return;
                  }
                  const properties = {
                    id: this.#id,
                    name: source.name ?? `Recording ${number}`,
                    createdAt: (0, _dayjs.default)().unix(),
                    source: source,
                    duration: (0, _time.timeFormat)(duration)
                  };
                  console.log("-------", properties);
                  item.set(properties);
                  await item.save();
                  this.triggerEvent();
                  promise.resolve(item);
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
        hash: 1756786032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _models = require("@aimpact/voice-genius/models");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _audio = require("./audio");
          var _toast = require("@bgroup/ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _dayjs = require("dayjs");
          class StoreManager extends _model.ReactiveModel {
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #uploader;
            get uploader() {
              return this.#uploader;
            }
            #fetching;
            set isFetching(value) {
              this.#fetching = value;
              this.triggerEvent();
            }
            get isFetching() {
              return this.#uploader.fetching || super.fetching;
            }
            #collection;
            get recordings() {
              return this.#collection.items;
            }
            #error;
            get error() {
              return this.#error;
            }
            constructor() {
              super();
              this.#recorder = new _models.Recorder();
              this.#collection = new _models.Subjects();
              this.#collection.bind("change", this.triggerEvent);
              this.init();
              window.store = this;
            }
            clean() {
              this.#error = undefined;
              this.trigger("change");
            }
            async init() {
              await this.#collection.load();
              this.ready = true;
              this.#uploader = new _uploader.Uploader({
                type: "audio",
                name: "record",
                params: {},
                url: "#"
              });
              this.#uploader.on("change", () => {
                this.isFetching = this.uploader.fetching || this.uploader.files.fetching;
                this.triggerEvent();
              });
              this.#uploader.bind("file.loaded", this.process);
              this.#uploader.bind("loadend", this.loadend);
              this.#uploader.on("error", () => {
                console.log(0.2, "error", this.#uploader.isValid);
              });
            }
            process() {
              // console.log(10, "in process");
            }
            loadend = async () => {
              try {
                this.isFetching = true;
                const audio = new _audio.AudioManager();
                const item = await audio.load(this.#uploader.files.entries[0]);
                if (item.error) {
                  _toast.toast.error(item.error);
                }
                _routing.routing.pushState(`/ideas/detail/${item.id}`);
              } catch (e) {
                console.log(e);
              } finally {
                this.isFetching = false;
              }
            };
            create(selector) {
              if (globalThis.cordova) {
                // in cordova we use the native actions with cordova plugins
                return;
              }
              this.#uploader.create(selector);
            }
            blobToArrayBuffer(blob) {
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = e => {
                  const arrayBuffer = e.target?.result;
                  if (arrayBuffer instanceof ArrayBuffer) {
                    resolve(arrayBuffer);
                  } else {
                    reject(new Error("Failed to convert Blob to ArrayBuffer"));
                  }
                };
                reader.onerror = e => {
                  reject(e);
                };
                reader.readAsArrayBuffer(blob);
              });
            }
            async saveRecording(recording) {
              this.fetching = true;
              const generateId = async buffer => {
                // const audioData = audioBuffer.getChannelData(0);
                const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
                return hashHex;
              };
              const arrayBuffer = await this.blobToArrayBuffer(recording);
              const id = await generateId(arrayBuffer);
              return this.saveAudio(recording, id);
            }
            async saveAudio(audio, id = undefined) {
              this.fetching = true;
              const number = localStorage.getItem("recording.number") ? parseInt(localStorage.getItem("recording.number")) : 0;
              id = id ?? `recording.${performance.now()}`;
              const newBlob = audio.slice(0, audio.size, "audio/m4a");
              const properties = {
                id,
                name: audio.name ?? `Recording ${number}`,
                createdAt: (0, _dayjs.default)().unix(),
                source: newBlob
              };
              return this.saveItem(properties);
              localStorage.setItem("recording.number", `${number + 1}`);
            }
            async saveItem(properties) {
              try {
                const item = new _models.Subject();
                await item.set(properties);
                await item.save();
                this.fetching = false;
                return item;
              } catch (e) {
                console.error("error saving", e);
              }
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

      /*************************************
      INTERNAL MODULE: ./views/actions/index
      *************************************/

      ims.set('./views/actions/index', {
        hash: 266768372,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Actions = Actions;
          var React = require("react");
          var _recordingButton = require("./recording-button");
          var _uploadSection = require("./upload-section");
          function Actions() {
            return React.createElement("div", {
              className: "actions"
            }, React.createElement(_recordingButton.RecordingButton, null), React.createElement(_uploadSection.UploaderForm, null));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/actions/pulse-record
      ********************************************/

      ims.set('./views/actions/pulse-record', {
        hash: 3087880394,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PulseRecord = PulseRecord;
          var React = require("react");
          var _context = require("../context");
          var _useRecorder = require("./use-recorder");
          function PulseRecord() {
            const ref = React.useRef(null);
            const {
              store: {
                recorder
              },
              fetching
            } = (0, _context.useMainContext)();
            const attrs = {
              ref
            };
            const [action] = (0, _useRecorder.useRecorder)(ref);
            if (!fetching) {
              attrs.onClick = action;
            }
            return React.createElement("div", {
              className: "record__section"
            }, React.createElement("h3", null, "Record your idea"), React.createElement("div", {
              className: "pulse__btn",
              ...attrs
            }, React.createElement("div", {
              className: "box"
            }, React.createElement("div", {
              className: "object"
            }, React.createElement("div", {
              className: "outline"
            }), React.createElement("div", {
              className: "outline",
              id: "delayed"
            }), React.createElement("div", {
              className: "button"
            }), React.createElement("div", {
              className: "button",
              id: "circlein"
            }, React.createElement("svg", {
              className: "mic-icon",
              version: "1.1",
              x: "0px",
              y: "0px",
              viewBox: "0 0 1000 1000",
              style: {
                fill: "#1E2D70"
              }
            }, React.createElement("g", null, React.createElement("path", {
              d: "M500,683.8c84.6,0,153.1-68.6,153.1-153.1V163.1C653.1,78.6,584.6,10,500,10c-84.6,0-153.1,68.6-153.1,153.1v367.5C346.9,615.2,415.4,683.8,500,683.8z M714.4,438.8v91.9C714.4,649,618.4,745,500,745c-118.4,0-214.4-96-214.4-214.4v-91.9h-61.3v91.9c0,141.9,107.2,258.7,245,273.9v124.2H346.9V990h306.3v-61.3H530.6V804.5c137.8-15.2,245-132.1,245-273.9v-91.9H714.4z"
            }))))))));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/actions/recording-button
      ************************************************/

      ims.set('./views/actions/recording-button', {
        hash: 3621818821,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = RecordingButton;
          var React = require("react");
          var _form = require("@bgroup/ui/form");
          var _icons = require("../../icons");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _useUploader = require("../hooks/use-uploader");
          function RecordingButton() {
            const {
              store: {
                recorder
              }
            } = (0, _context.useMainContext)();
            const [recording, setRecording] = React.useState(false);
            const [transcription, setTranscription] = React.useState("");
            (0, _hooks.useBinder)([recorder], () => setTranscription(recorder.transcriber?.text));
            const text = !recording ? "Generate a new recording" : "Recording...";
            const icon = !recording ? _icons.ICONS.mic : _icons.ICONS.stop;
            const ref = React.useRef(null);
            const onStart = event => {
              event.preventDefault();
              recorder.record();
              setRecording(!recording);
            };
            const stop = event => {
              event.preventDefault();
              recorder.stop();
              setRecording(!recording);
            };
            const onClick = recording ? stop : onStart;
            const onload = uploader => {};
            (0, _useUploader.useUploader)(ref, onload);
            return React.createElement(React.Fragment, null, React.createElement(_form.BeyondButton, {
              className: "empty-list__record-button btn btn-primary",
              onClick: onClick,
              icon: icon
            }, text));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/actions/upload-section
      **********************************************/

      ims.set('./views/actions/upload-section', {
        hash: 1571377503,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UploadButton = UploadButton;
          var React = require("react");
          var _icons = require("@bgroup/ui/icons");
          var _context = require("../context");
          var _routing = require("@beyond-js/kernel/routing");
          var _dayjs = require("dayjs");
          function UploadButton() {
            const {
              store
            } = (0, _context.useMainContext)();
            const [error, setError] = React.useState();
            const [images, setImages] = React.useState([]);
            React.useEffect(() => {
              store.create(btn.current);
            }, []);
            const btn = React.useRef(null);
            const box = React.useRef(null);
            const attrs = {};
            if (globalThis.cordova) {
              attrs.onClick = async event => {
                event.preventDefault();
                const acceptedMimeTypes = ["audio/*"];
                const audio = await globalThis.chooser.getFile(acceptedMimeTypes);
                const blob = new Blob([audio.data], {
                  type: audio.mediaType
                });
                const item = await store.saveItem({
                  id: `record.${(0, _dayjs.default)().unix()}`,
                  name: audio.name,
                  source: blob,
                  size: blob.size,
                  createAt: (0, _dayjs.default)().unix()
                });
                _routing.routing.pushState(`/ideas/detail/${item.id}`);
              };
            }
            return React.createElement("button", {
              ref: btn,
              ...attrs,
              className: "empty-list__record-button btn btn-secondary secondary beyond-button has-icon"
            }, "Import Audio", React.createElement(_icons.BeyondIcon, {
              icon: "upload"
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/actions/use-recorder
      ********************************************/

      ims.set('./views/actions/use-recorder', {
        hash: 2903838170,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRecorder = useRecorder;
          var React = require("react");
          var _context = require("../context");
          var _routing = require("@beyond-js/kernel/routing");
          var _dayjs = require("dayjs");
          function useRecorder(ref) {
            const {
              store: {
                recorder
              },
              store,
              fetching
            } = (0, _context.useMainContext)();
            const [recording, setRecording] = React.useState(false);
            const mobileActions = event => {
              globalThis.navigator.device.capture.captureAudio(async mediaFile => {
                const file = mediaFile[0];
                // resolve the Promise with the captured media files when the capture is successful
                try {
                  // Fetch the file from the localURL
                  const response = await fetch(file.localURL);
                  // Check if the response is successful
                  if (!response.ok) {
                    throw new Error(`Failed to fetch the audio file: ${response.statusText}`);
                  }
                  // Convert the response to an ArrayBuffer
                  const arrayBuffer = await response.arrayBuffer();
                  // Set the MIME type using the type property of the MediaFile object
                  const mimeType = file.type;
                  // Create a new Blob with the correct MIME type
                  const blob = new Blob([arrayBuffer], {
                    type: mimeType
                  });
                  // Log the generated Blob
                  console.log("Generated Blob:", blob);
                  const properties = {
                    id: `record.${(0, _dayjs.default)().unix()}`,
                    name: file.name,
                    size: blob.size,
                    createdAt: (0, _dayjs.default)().unix(),
                    source: blob
                  };
                  const item = await store.saveItem(properties);
                  _routing.routing.pushState(`/ideas/detail/${item.id}`);
                  // You can now use the blob for further processing or sending to an API
                  return blob;
                } catch (error) {
                  console.error("Error fetching file and creating Blob:", error);
                }
              }, error => {
                // reject the Promise with the capture error when the capture fails
                console.error(error);
              }, {
                limit: 1
              } // set the options for the capture method
              );
            };

            if (globalThis.cordova) {
              return [mobileActions];
            }
            const onStart = async event => {
              event.preventDefault();
              ref.current.classList.toggle("is-recording");
              recorder.record();
              setRecording(!recording);
            };
            const stop = async event => {
              event.preventDefault();
              ref.current.classList.toggle("is-recording");
              const audio = await recorder.stop();
              const item = await store.saveAudio(audio);
              _routing.routing.pushState(`/ideas/detail/${item.id}`);
              setRecording(!recording);
            };
            const action = recording ? stop : onStart;
            return [action];
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3257037210,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMainContext = exports.MainContext = void 0;
          var React = require("react");
          const initialValue = {};
          const MainContext = React.createContext(initialValue);
          exports.MainContext = MainContext;
          const useMainContext = () => React.useContext(MainContext);
          exports.useMainContext = useMainContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/empty/index
      ***********************************/

      ims.set('./views/empty/index', {
        hash: 485999111,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyScreen = EmptyScreen;
          var React = require("react");
          function EmptyScreen() {
            return React.createElement("div", {
              className: "empty-list"
            }, React.createElement("p", null, "No recordings found."));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/header/index
      ************************************/

      ims.set('./views/header/index', {
        hash: 372916324,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          var _image = require("@bgroup/ui/image");
          var _context = require("../context");
          var _icons = require("@bgroup/ui/icons");
          function Header() {
            const {
              setShowList,
              showList,
              fetching
            } = (0, _context.useMainContext)();
            const toggleRecords = event => {
              event.preventDefault();
              setShowList(!showList);
            };
            return React.createElement("header", {
              className: "page-header"
            }, React.createElement("figure", {
              className: "logo__container"
            }, React.createElement(_image.BeyondImage, {
              src: "assets/icon-color.png",
              className: "header-logo"
            }), React.createElement("span", null, "Voice Genius")), showList ? React.createElement(_icons.BeyondIconButton, {
              icon: "close",
              disabled: fetching,
              onClick: toggleRecords
            }) : React.createElement(_icons.BeyondIconButton, {
              icon: "menu",
              disabled: fetching,
              onClick: toggleRecords
            }));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/hooks/use-uploader
      ******************************************/

      ims.set('./views/hooks/use-uploader', {
        hash: 1109772169,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploader = useUploader;
          var _main = require("@aimpact/media-manager/main");
          var React = require("react");
          function useUploader(ref, onLoad) {
            const [uploader, setUploader] = React.useState(null);
            React.useEffect(() => {
              if (globalThis.phonegap || globalThis.ionic || globalThis.cordova) return;
              const uploader = _main.mediaDevice.setInputFile(ref.current);
              setUploader(uploader);
              const onload = () => onLoad(uploader);
              uploader.on("loadend", onload);
              return () => {
                uploader.off("loadend", onload);
              };
            }, []);
            return uploader;
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3401619620,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("./list");
          var _spinner = require("@bgroup/ui/spinner");
          var _toast = require("@bgroup/ui/toast");
          var _context = require("./context");
          var _main = require("./main");
          var _header = require("./header");
          // import { Menu } from "@aimpact/voice-genius/menu.code";
          const {
            useState,
            useEffect
          } = React;
          /*bundle*/
          function View({
            store
          }) {
            const [recordings, setRecordings] = useState(store.recordings);
            const [fetching, setFetching] = useState(store.fetching);
            const [showList, setShowList] = useState(false);
            const [error, setError] = useState(null);
            const ref = React.useRef(null);
            (0, _hooks.useBinder)([store, store.uploader], () => {
              setRecordings(store.recordings);
              setError(store.error);
            });
            React.useEffect(() => {
              const onChange = () => {
                if (store.isFetching || store.uploader.fetching) {
                  ref.current.classList.add("is-fetching");
                } else {
                  ref.current.classList.remove("is-fetching");
                }
                setFetching(store.isFetching || store.uploader.fetching);
              };
              store.on("change", onChange);
              return () => store.off("change", onChange);
            }, []);
            const onRecordClick = event => {
              event.preventDefault();
            };
            if (!store.ready) return React.createElement(_spinner.BeyondSpinner, null);
            const cls = `main-screen${fetching ? " is-fetching" : ""}`;
            return React.createElement(React.Fragment, null, React.createElement(_context.MainContext.Provider, {
              value: {
                onRecordClick,
                store,
                recordings,
                showList,
                setShowList,
                fetching,
                ready: store.ready
              }
            }, React.createElement(_header.Header, null), React.createElement("div", {
              className: cls,
              ref: ref
            }, React.createElement(_main.MainSection, null), React.createElement(_list.List, {
              recordings: recordings,
              onRecordClick: onRecordClick
            }))), React.createElement(_toast.Toasts, {
              position: {
                bottom: "2rem",
                right: "2rem"
              }
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 3434359962,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var React = require("react");
          function EmptyList() {
            return React.createElement("div", null, React.createElement("h3", null, "No items loaded"), React.createElement("span", {
              className: "small"
            }, "Capture your ideas today to unlock amazing possibilities tomorrow! "));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 2931158448,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          var _item = require("./item");
          var _context = require("../context");
          var _empty = require("./empty");
          function List({
            recordings,
            onRecordClick
          }) {
            const {
              showList
            } = (0, _context.useMainContext)();
            const ref = React.useRef(null);
            React.useEffect(() => {
              const {
                classList
              } = ref.current;
              if (showList) classList.add("show");else {
                classList.contains("show") && classList.remove("show");
              }
            }, [showList]);
            let output = React.createElement(_empty.EmptyList, null);
            if (recordings.length) {
              output = recordings.map(recording => React.createElement(_item.Item, {
                key: recording.id,
                recording: recording
              }));
            }
            const cls = `recordings-list${!recordings.length ? " empty--list" : ""}`;
            return React.createElement("div", {
              className: cls,
              ref: ref
            }, output);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/list/item
      *********************************/

      ims.set('./views/list/item', {
        hash: 3221141285,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _dayjs = require("dayjs");
          var _icons = require("@bgroup/ui/icons");
          function Item({
            recording
          }) {
            const onClick = itemId => {
              _routing.routing.pushState(`/ideas/detail/${recording.id}`);
            };
            const formattedDate = (0, _dayjs.default)().format("ddd, MMM D, YYYY . h:mm A");
            return React.createElement("div", {
              className: "list__item",
              onClick: onClick
            }, React.createElement("figure", null, React.createElement(_icons.BeyondIcon, {
              icon: "clip"
            })), React.createElement("section", null, React.createElement("h4", {
              className: "list__item-title"
            }, recording.name), React.createElement("div", {
              className: "recording__date"
            }, formattedDate), React.createElement("div", {
              className: "list__item-duration"
            }, recording.duration)));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/main
      ****************************/

      ims.set('./views/main', {
        hash: 1291310397,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MainSection = MainSection;
          var React = require("react");
          var _pulseRecord = require("./actions/pulse-record");
          var _uploadSection = require("./actions/upload-section");
          function MainSection() {
            return React.createElement("div", {
              className: "main-section"
            }, React.createElement(_pulseRecord.PulseRecord, null), React.createElement(_uploadSection.UploadButton, null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjhGLE1BQU0sQ0FDRjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQTtVQUNBO1VBQ0E7VUFDQTtVQUNNLFNBQVVFLElBQUksQ0FBQztZQUFFbEk7VUFBUyxDQUFFO1lBQ2pDLE1BQU1zQyxPQUFPLEdBQUc4RixNQUFNLElBQUc7Y0FDeEJ0SixnQkFBTyxDQUFDQyxTQUFTLENBQUMsaUJBQWlCaUIsU0FBUyxDQUFDdkYsRUFBRSxFQUFFLENBQUM7WUFDbkQsQ0FBQztZQUNELE1BQU00TixhQUFhLEdBQUcsa0JBQUssR0FBRSxDQUFDQyxNQUFNLENBQUMsMkJBQTJCLENBQUM7WUFFakUsT0FDQ3pHO2NBQUtDLFNBQVMsRUFBQyxZQUFZO2NBQUNRLE9BQU8sRUFBRUE7WUFBTyxHQUMzQ1Qsb0NBQ0NBLG9CQUFDMEMsaUJBQVU7Y0FBQ3BLLElBQUksRUFBQztZQUFNLEVBQWMsQ0FDN0IsRUFDVDBILHFDQUNDQTtjQUFJQyxTQUFTLEVBQUM7WUFBa0IsR0FBRTlCLFNBQVMsQ0FBQ3pELElBQUksQ0FBTSxFQUN0RHNGO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUFFdUcsYUFBYSxDQUFPLEVBQ3REeEc7Y0FBS0MsU0FBUyxFQUFDO1lBQXFCLEdBQUU5QixTQUFTLENBQUNqRixRQUFRLENBQU8sQ0FDdEQsQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQTtVQUNBO1VBQ0E7VUFDTSxTQUFVeU0sV0FBVztZQUMxQixPQUNDM0Y7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsR0FDNUJELG9CQUFDSSx3QkFBVyxPQUFHLEVBQ2ZKLG9CQUFDMkIsMkJBQVksT0FBRyxDQUNYO1VBRVIiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibGFuZ3VhZ2UiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIklDT05TIiwibWljIiwiaWNvbiIsInZpZXdCb3giLCJzdG9wIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImVycm9yIiwiaWQiLCJnZW5lcmF0ZUlkIiwiYXVkaW9CdWZmZXIiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiZ2V0VGltZSIsImR1cmF0aW9uIiwibG9hZCIsInNvdXJjZSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIkF1ZGlvQ29udGV4dCIsIkF1ZGlvIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bHQiLCJkZWNvZGVBdWRpb0RhdGEiLCJidWZmZXIiLCJpdGVtIiwiU3ViamVjdCIsIm51bWJlciIsInBhcnNlSW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJyZXNvbHZlIiwicHJvcGVydGllcyIsIm5hbWUiLCJjcmVhdGVkQXQiLCJ1bml4IiwiY29uc29sZSIsImxvZyIsInNldCIsInNhdmUiLCJ0cmlnZ2VyRXZlbnQiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInJlY29yZGVyIiwidXBsb2FkZXIiLCJpc0ZldGNoaW5nIiwidmFsdWUiLCJmZXRjaGluZyIsInJlY29yZGluZ3MiLCJpdGVtcyIsImNvbnN0cnVjdG9yIiwiUmVjb3JkZXIiLCJTdWJqZWN0cyIsImJpbmQiLCJpbml0Iiwid2luZG93Iiwic3RvcmUiLCJjbGVhbiIsInVuZGVmaW5lZCIsInRyaWdnZXIiLCJyZWFkeSIsIlVwbG9hZGVyIiwidHlwZSIsInBhcmFtcyIsInVybCIsIm9uIiwiZmlsZXMiLCJwcm9jZXNzIiwibG9hZGVuZCIsImlzVmFsaWQiLCJhdWRpbyIsImVudHJpZXMiLCJ0b2FzdCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY3JlYXRlIiwic2VsZWN0b3IiLCJnbG9iYWxUaGlzIiwiY29yZG92YSIsImJsb2JUb0FycmF5QnVmZmVyIiwiYmxvYiIsIlByb21pc2UiLCJyZWplY3QiLCJvbmxvYWQiLCJhcnJheUJ1ZmZlciIsInRhcmdldCIsIkFycmF5QnVmZmVyIiwiRXJyb3IiLCJvbmVycm9yIiwic2F2ZVJlY29yZGluZyIsInJlY29yZGluZyIsImhhc2hCdWZmZXIiLCJjcnlwdG8iLCJzdWJ0bGUiLCJkaWdlc3QiLCJoYXNoQXJyYXkiLCJBcnJheSIsImZyb20iLCJVaW50OEFycmF5IiwiaGFzaEhleCIsIm1hcCIsImIiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsInNhdmVBdWRpbyIsInBlcmZvcm1hbmNlIiwibm93IiwibmV3QmxvYiIsInNsaWNlIiwic2l6ZSIsInNhdmVJdGVtIiwic2V0SXRlbSIsInRpbWVGb3JtYXQiLCJ0aW1lIiwiaG91cnMiLCJzZWNvbmRzIiwidGltZVN0cmluZyIsIkFjdGlvbnMiLCJSZWFjdCIsImNsYXNzTmFtZSIsIlJlY29yZGluZ0J1dHRvbiIsIlVwbG9hZGVyRm9ybSIsIlB1bHNlUmVjb3JkIiwicmVmIiwidXNlUmVmIiwiYXR0cnMiLCJhY3Rpb24iLCJvbkNsaWNrIiwidmVyc2lvbiIsIngiLCJ5Iiwic3R5bGUiLCJmaWxsIiwiZCIsInNldFJlY29yZGluZyIsInVzZVN0YXRlIiwidHJhbnNjcmlwdGlvbiIsInNldFRyYW5zY3JpcHRpb24iLCJ0cmFuc2NyaWJlciIsInRleHQiLCJvblN0YXJ0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlY29yZCIsIkJleW9uZEJ1dHRvbiIsIlVwbG9hZEJ1dHRvbiIsInNldEVycm9yIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwidXNlRWZmZWN0IiwiYnRuIiwiY3VycmVudCIsImJveCIsImFjY2VwdGVkTWltZVR5cGVzIiwiY2hvb3NlciIsImdldEZpbGUiLCJCbG9iIiwiZGF0YSIsIm1lZGlhVHlwZSIsImNyZWF0ZUF0IiwiQmV5b25kSWNvbiIsInVzZVJlY29yZGVyIiwibW9iaWxlQWN0aW9ucyIsIm5hdmlnYXRvciIsImRldmljZSIsImNhcHR1cmUiLCJjYXB0dXJlQXVkaW8iLCJtZWRpYUZpbGUiLCJmaWxlIiwicmVzcG9uc2UiLCJmZXRjaCIsImxvY2FsVVJMIiwib2siLCJzdGF0dXNUZXh0IiwibWltZVR5cGUiLCJsaW1pdCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImluaXRpYWxWYWx1ZSIsIk1haW5Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1haW5Db250ZXh0IiwidXNlQ29udGV4dCIsIkVtcHR5U2NyZWVuIiwiSGVhZGVyIiwic2V0U2hvd0xpc3QiLCJzaG93TGlzdCIsInRvZ2dsZVJlY29yZHMiLCJCZXlvbmRJbWFnZSIsInNyYyIsIkJleW9uZEljb25CdXR0b24iLCJkaXNhYmxlZCIsInVzZVVwbG9hZGVyIiwib25Mb2FkIiwic2V0VXBsb2FkZXIiLCJwaG9uZWdhcCIsImlvbmljIiwibWVkaWFEZXZpY2UiLCJzZXRJbnB1dEZpbGUiLCJvZmYiLCJzZXRSZWNvcmRpbmdzIiwic2V0RmV0Y2hpbmciLCJvbkNoYW5nZSIsImFkZCIsInJlbW92ZSIsIm9uUmVjb3JkQ2xpY2siLCJCZXlvbmRTcGlubmVyIiwiY2xzIiwiUHJvdmlkZXIiLCJNYWluU2VjdGlvbiIsIkxpc3QiLCJUb2FzdHMiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiRW1wdHlMaXN0IiwiY29udGFpbnMiLCJvdXRwdXQiLCJsZW5ndGgiLCJJdGVtIiwia2V5IiwiaXRlbUlkIiwiZm9ybWF0dGVkRGF0ZSIsImZvcm1hdCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL2ljb25zLnRzIiwidHMvc3RvcmUvYXVkaW8udHMiLCJ0cy9zdG9yZS9pbmRleC50cyIsInRzL3N0b3JlL3RpbWUudHMiLCJ0cy92aWV3cy9hY3Rpb25zL2luZGV4LnRzeCIsInRzL3ZpZXdzL2FjdGlvbnMvcHVsc2UtcmVjb3JkLnRzeCIsInRzL3ZpZXdzL2FjdGlvbnMvcmVjb3JkaW5nLWJ1dHRvbi50c3giLCJ0cy92aWV3cy9hY3Rpb25zL3VwbG9hZC1zZWN0aW9uLnRzeCIsInRzL3ZpZXdzL2FjdGlvbnMvdXNlLXJlY29yZGVyLnRzeCIsInRzL3ZpZXdzL2NvbnRleHQudHN4IiwidHMvdmlld3MvZW1wdHkvaW5kZXgudHN4IiwidHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2hvb2tzL3VzZS11cGxvYWRlci50c3giLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsInRzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwidHMvdmlld3MvbGlzdC9pdGVtLnRzeCIsInRzL3ZpZXdzL21haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19