System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/voice-genius@1.0.0/voice", "@beyond-js/reactive@1.0.0/model", "@beyond-js/reactive@1.0.0/entities", "@aimpact/voice-genius@1.0.0/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, prompts, Recorder, Subjects, Subject, Transcriber, Voice, __beyond_pkg, hmr;
  _export({
    prompts: void 0,
    Recorder: void 0,
    Subjects: void 0,
    Subject: void 0,
    Transcriber: void 0,
    Voice: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_aimpactVoiceGenius100Voice) {
      dependency_2 = _aimpactVoiceGenius100Voice;
    }, function (_beyondJsReactive100Model) {
      dependency_3 = _beyondJsReactive100Model;
    }, function (_beyondJsReactive100Entities) {
      dependency_4 = _beyondJsReactive100Entities;
    }, function (_aimpactVoiceGenius100Config) {
      dependency_5 = _aimpactVoiceGenius100Config;
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
          "vspecifier": "@aimpact/voice-genius@1.0.0/models"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@aimpact/voice-genius/voice', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@beyond-js/reactive/entities', dependency_4], ['@aimpact/voice-genius/config', dependency_5]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./ai-model
      **************************/
      ims.set('./ai-model', {
        hash: 1222040942,
        creator: function (require, exports) {
          // export /*bundle */ class AIModel {
          // 	async query(prompt, content) {
          // 		if (!content) throw new Error("The content of the question cannot be undefined");
          // 		// Set up the message array with the user input as the only message
          // 		messages.push({ role: "user", content });A
          // 		this.trigger("change");
          // 		try {
          // 			// Make the API call to generate a response
          // 			const response = await fetch("https://api.openai.com/v1/chat/completions", {
          // 				method: "POST",
          // 				headers: {
          // 					"Content-Type": "application/json",
          // 					Authorization: "Bearer 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",
          // 				},
          // 				body: JSON.stringify({
          // 					model: "gpt-3.5-turbo",
          // 					messages: messages,
          // 				}),
          // 			});
          // 			// Extract the response message from the API response object
          // 			const data = await response.json();
          // 			const responseMessage = data.choices[0].message?.content;
          // 			messages.push({
          // 				role: "assistant",
          // 				content: responseMessage,
          // 			});
          // 			this.#voice.text = responseMessage;
          // 			this.#voice.speak();
          // 			this.trigger("change");
          // 		} catch (error) {
          // 			console.log(error);
          // 			this.trigger("change");
          // 		}
          // 	}
          // }
          "use strict";
        }
      });

      /*************************
      INTERNAL MODULE: ./prompts
      *************************/

      ims.set('./prompts', {
        hash: 4171115496,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.prompts = void 0;
          /*bundle*/
          const prompts = '[Eres un analizador de mensajes que convierte un {texto} en un código de programación json.\n' + 'El {texto} es un mensaje que está enviando un usuario a otro usuario llamado Max. El {texto} puede incluir también tareas que debe realizar Nicolás (su asistente virtual).\n' + 'Tu trabajo es identificar a quién va dirigido el mensaje (Max, Nicolás o a ambos), y crear un código de programación json que se utilizará para invocar una API. No debes preocuparte por la API, sólo por la generación del json.\n' + 'El json debe tener sólo tres propiedades, "max", "nicolas" y "error", todas las propiedades son de tipo string.\n' + '\n' + '. La propiedad "nicolas" puede ser nula, o contener sólo el detalle de la tarea que el usuario le ha solicitado a Nicolás.\n' + '. La propiedad "max" puede ser nula, o contener sólo el mensaje que el usuario le está enviando a Max.\n' + '\n' + 'En primera instancia, la conversación está dirigida a Max, pero el usuario podría solicitarle a Nicolás una tarea en la misma conversación. Por lo tanto, si Nicolás no es mencionado, el mensaje es completamente dirigido a Max.\n' + '\n' + 'Concéntrate en todo el texto, ya que el usuario puede solicitarle a Nicolás una tarea en cualquier momento de la conversación simplemente mencionando su nombre.\n' + 'Quiero sólo el json, ningún otro tipo de contenido incluyendo el pre-text y post-text, ya que tu respuesta debe poder ser parseada (JSON.parse(response)) de manera directa.]';
          exports.prompts = prompts;
        }
      });

      /********************************
      INTERNAL MODULE: ./recorder/index
      ********************************/

      ims.set('./recorder/index', {
        hash: 2535026087,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _transcriber = require("../transcriber");
          var _core = require("@beyond-js/kernel/core");
          var _voice = require("@aimpact/voice-genius/voice");
          /*bundle */
          class Recorder extends _core.Events {
            #mediaRecorder;
            #chunks = [];
            get transcribing() {
              return false;
              // return !!this.#transcriber?.transcribing;
            }

            #transcriber;
            get transcriber() {
              return this.#transcriber;
            }
            #voice;
            get voice() {
              return this.#voice;
            }
            #recording = false;
            get recording() {
              return this.#recording;
            }
            #audioTranscriber;
            constructor() {
              super();
              this.#transcriber = new _transcriber.Transcriber();
              this.#transcriber.on("change", () => this.trigger("change"));
              this.#voice = new _voice.Voice();
              this.#voice.on("change", () => this.trigger("change"));
            }
            #error;
            get error() {
              return this.#error;
            }
            get valid() {
              return !this.#error;
            }
            #promise;
            #initialised = false;
            async generateId(buffer) {
              // const audioData = audioBuffer.getChannelData(0);
              const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
              const hashArray = Array.from(new Uint8Array(hashBuffer));
              const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
              return hashHex;
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
            #initPromise;
            #audio;
            get audio() {
              return this.#audio;
            }
            async initialise() {
              if (this.#initPromise) return await this.#initPromise;
              this.#initPromise = new _core.PendingPromise();
              navigator.mediaDevices.getUserMedia({
                audio: true
              }).then(stream => {
                this.#mediaRecorder = new MediaRecorder(stream);
                this.#mediaRecorder.addEventListener("dataavailable", event => {
                  this.#chunks.push(event.data);
                });
                /*
                         item.set({
                    id,
                    name: `Recording ${number}`,
                    source: audio,
                    createdAt: dayjs().unix(),
                    type: "recording",
                  });
                        await item.save();
                  const toSave = ++number;
                  localStorage.setItem("recording.number", toSave.toString());
                  // routing.pushState(`/ideas/detail/${item.id}`);
                  //this.#voice.text = this.#transcriber.text;
                  // this.#voice.speak();
                        //this.#transcriber.transcribe(audio, prompt).finally(() => this.trigger("change"));
                  this.trigger("change");*/
                // await this.#transcriber.transcribe(audio, prompt);
                // const arrayBuffer = await this.blobToArrayBuffer(audio);
                // this.trigger("change");
              }).catch(error => {
                this.#error = error.message;
                this.#initPromise.reject();
              }).finally(() => {
                this.#initialised = true;
                this.#initPromise.resolve();
              });
              return this.#initPromise;
            }
            async getAudioDuration(url) {
              return new Promise((resolve, reject) => {
                const audio = new Audio();
                audio.addEventListener("loadedmetadata", () => {
                  resolve(audio.duration);
                });
                audio.addEventListener("error", () => {
                  reject(new Error("Failed to load audio metadata."));
                });
                audio.src = url;
              });
            }
            #recordingPromise;
            record() {
              // if (this.#recording || this.transcribing) {
              if (this.#recordingPromise) return this.#recordingPromise;
              this.#recordingPromise = new _core.PendingPromise();
              if (this.#recording) {
                throw new Error("Wait for recorder to be stopped and transcription ready");
              }
              this.#recording = true;
              this.trigger("change");
              this.initialise().then(async () => {
                const audio = await this.#mediaRecorder?.start();
                this.#recordingPromise.resolve(audio);
              }).catch(error => console.error(error));
              return this.#recordingPromise;
            }
            #stopPromise;
            stop() {
              if (!this.#mediaRecorder) {
                console.warn("this.#mediaRecorder no initialize");
                return;
              }
              if (this.#stopPromise) return this.#stopPromise;
              this.#stopPromise = new _core.PendingPromise();
              if (!this.#recording) throw new Error("Recorder is not currently recording");
              const stop = () => {
                this.#chunks = [];
                this.#recording = false;
                this.#mediaRecorder.addEventListener("stop", async () => {
                  const audio = new Blob(this.#chunks, {
                    type: "audio/webm"
                  });
                  const audioUrl = URL.createObjectURL(audio);
                  const audioDuration = await this.getAudioDuration(audioUrl);
                  this.#audio = audio;
                  this.#stopPromise.resolve(audio);
                });
                this.#mediaRecorder?.stop();
                this.trigger("change");
              };
              this.#initialised ? stop() : this.initialise().then(stop);
              return this.#stopPromise;
            }
          }
          exports.Recorder = Recorder;
        }
      });

      /*********************************
      INTERNAL MODULE: ./recorder/mobile
      *********************************/

      ims.set('./recorder/mobile', {
        hash: 1463430528,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileRecorder = void 0;
          var _model = require("@beyond-js/reactive/model");
          class MobileRecorder extends _model.ReactiveModel {}
          exports.MobileRecorder = MobileRecorder;
        }
      });

      /*************************************
      INTERNAL MODULE: ./subjects/collection
      *************************************/

      ims.set('./subjects/collection', {
        hash: 1164106089,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Subjects = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          /*bundle */
          class Subjects extends _entities.Collection {
            item = _item.Subject;
            storeName = "subjects";
            db = "voicegenius";
            constructor() {
              super();
              this.init();
            }
          }
          exports.Subjects = Subjects;
        }
      });

      /*******************************
      INTERNAL MODULE: ./subjects/item
      *******************************/

      ims.set('./subjects/item', {
        hash: 3780592726,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Subject = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _time = require("./time");
          /*bundle */
          class Subject extends _entities.Item {
            properties = ["id", "source", "name", "data", "duration", "description", "audioLabs", "createdAt"];
            storeName = "subjects";
            db = "voicegenius";
            #actions = new Map();
            get actions() {
              return this.#actions;
            }
            get data() {
              return this.#actions;
            }
            set data(value) {
              if (Object.prototype.toString.call(value) !== "[object Map]") {
                console.log("invalid value", value);
                return;
              }
              this.#actions = value;
              this.triggerEvent();
            }
            get time() {
              return (0, _time.timeFormat)(this.duration);
            }
            constructor(id = undefined) {
              super();
              this.init({
                id
              });
            }
            async load() {
              await super.load(...arguments);
              //@ts-ignore
              this.#actions = new Map(JSON.parse(this.data));
            }
          }
          exports.Subject = Subject;
        }
      });

      /*******************************
      INTERNAL MODULE: ./subjects/time
      *******************************/

      ims.set('./subjects/time', {
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

      /*****************************
      INTERNAL MODULE: ./transcriber
      *****************************/

      ims.set('./transcriber', {
        hash: 1702959650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Transcriber = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _config = require("@aimpact/voice-genius/config");
          /*bundle*/
          class Transcriber extends _core.Events {
            #url = "https://api.openai.com/v1/audio/transcriptions";
            #headers = {
              Authorization: `Bearer ${_config.default.params.openia.key}`
            };
            #transcribing = false;
            get transcribing() {
              return this.#transcribing;
            }
            #text;
            get text() {
              return this.#text;
            }
            #error;
            get error() {
              return this.#error;
            }
            #prompts = {
              original: "Please, transcribe the following text in English",
              format: "Please, transcribe the following text in English, improving the structure and format"
            };
            prepare(audio, prompt = undefined) {
              const formData = new FormData();
              formData.append("file", audio, "audio.mp3");
              formData.append("model", "whisper-1");
              formData.append("language", "en");
              formData.append("prompt", prompt);
              formData.append("temperature", " 0.2");
              formData.append("response_format", "json");
              return formData;
            }
            /**
             *
             * @param audio "Invalid file format. Supported formats: ['m4a', 'mp3', 'webm', 'mp4', 'mpga', 'wav', 'mpeg']
             * @param prompt
             * @returns
             */
            async getTranscript(audio, prompt) {
              if (!audio.size) return;
              // var newBlob = audio.slice(0, audio.size, "audio/m4a");
              this.#transcribing = true;
              this.trigger("change");
              try {
                const response = await fetch(this.#url, {
                  method: "POST",
                  body: this.prepare(audio, prompt),
                  headers: this.#headers
                });
                const data = await response.json();
                if (!data.text) return;
                this.#text = data.text;
                return data;
              } catch (error) {
                console.error(error);
                this.#error = error.message;
              } finally {
                this.#transcribing = false;
                this.trigger("change");
              }
            }
            transcribe(audio) {
              return this.getTranscript(audio, this.#prompts.original);
            }
            format(audio) {
              return this.getTranscript(audio, this.#prompts.format);
            }
          }
          exports.Transcriber = Transcriber;
        }
      });

      /***********************
      INTERNAL MODULE: ./voice
      ***********************/

      ims.set('./voice', {
        hash: 4266800422,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Voice = void 0;
          var _core = require("@beyond-js/kernel/core");
          /*bundle */
          class Voice extends _core.Events {
            #speaking = false;
            get speaking() {
              return this.#speaking;
            }
            #text;
            get text() {
              return this.#text;
            }
            set text(value) {
              this.#text = value;
            }
            #currentWord = -1;
            get currentWord() {
              return this.#currentWord;
            }
            get paused() {
              return speechSynthesis.paused;
            }
            speak() {
              speechSynthesis.cancel();
              const text = this.#text;
              const utterance = new SpeechSynthesisUtterance(text);
              utterance.lang = "es";
              utterance.onstart = () => {
                this.#speaking = true;
                this.trigger("change");
              };
              utterance.onpause = () => {
                this.trigger("change");
              };
              utterance.onresume = () => this.trigger("change");
              utterance.onboundary = event => {
                this.#currentWord = event.charIndex === 0 ? 0 : event.charIndex + 1;
                this.trigger("change");
              };
              utterance.onend = () => {
                this.#speaking = false;
                this.#currentWord = -1;
                this.trigger("change");
              };
              speechSynthesis.speak(utterance);
            }
            pause() {
              speechSynthesis.pause();
            }
            resume() {
              speechSynthesis.resume();
            }
            stop() {
              speechSynthesis.cancel();
            }
          }
          exports.Voice = Voice;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./prompts",
        "from": "prompts",
        "name": "prompts"
      }, {
        "im": "./recorder/index",
        "from": "Recorder",
        "name": "Recorder"
      }, {
        "im": "./subjects/collection",
        "from": "Subjects",
        "name": "Subjects"
      }, {
        "im": "./subjects/item",
        "from": "Subject",
        "name": "Subject"
      }, {
        "im": "./transcriber",
        "from": "Transcriber",
        "name": "Transcriber"
      }, {
        "im": "./voice",
        "from": "Voice",
        "name": "Voice"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'prompts') && _export("prompts", prompts = require ? require('./prompts').prompts : value);
        (require || prop === 'Recorder') && _export("Recorder", Recorder = require ? require('./recorder/index').Recorder : value);
        (require || prop === 'Subjects') && _export("Subjects", Subjects = require ? require('./subjects/collection').Subjects : value);
        (require || prop === 'Subject') && _export("Subject", Subject = require ? require('./subjects/item').Subject : value);
        (require || prop === 'Transcriber') && _export("Transcriber", Transcriber = require ? require('./transcriber').Transcriber : value);
        (require || prop === 'Voice') && _export("Voice", Voice = require ? require('./voice').Voice : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQyxRQUFRLENBQUM7Y0FFakRpSSxTQUFTLENBQUNNLFVBQVUsR0FBR3pGLEtBQUssSUFBRztnQkFDOUIsSUFBSSxDQUFDLFlBQVksR0FBR0EsS0FBSyxDQUFDMEYsU0FBUyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcxRixLQUFLLENBQUMwRixTQUFTLEdBQUcsQ0FBQztnQkFDbkUsSUFBSSxDQUFDeEksT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN2QixDQUFDO2NBRURpSSxTQUFTLENBQUNRLEtBQUssR0FBRyxNQUFLO2dCQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUs7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUN6SSxPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ3ZCLENBQUM7Y0FFRDhILGVBQWUsQ0FBQ0MsS0FBSyxDQUFDRSxTQUFTLENBQUM7WUFDakM7WUFFQVMsS0FBSztjQUNKWixlQUFlLENBQUNZLEtBQUssRUFBRTtZQUN4QjtZQUVBQyxNQUFNO2NBQ0xiLGVBQWUsQ0FBQ2EsTUFBTSxFQUFFO1lBQ3pCO1lBRUEvRSxJQUFJO2NBQ0hrRSxlQUFlLENBQUNFLE1BQU0sRUFBRTtZQUN6Qjs7VUFDQTFJIiwibmFtZXMiOlsicHJvbXB0cyIsImV4cG9ydHMiLCJSZWNvcmRlciIsIkV2ZW50cyIsInRyYW5zY3JpYmluZyIsInRyYW5zY3JpYmVyIiwidm9pY2UiLCJyZWNvcmRpbmciLCJjb25zdHJ1Y3RvciIsIlRyYW5zY3JpYmVyIiwib24iLCJ0cmlnZ2VyIiwiVm9pY2UiLCJlcnJvciIsInZhbGlkIiwiZ2VuZXJhdGVJZCIsImJ1ZmZlciIsImhhc2hCdWZmZXIiLCJjcnlwdG8iLCJzdWJ0bGUiLCJkaWdlc3QiLCJoYXNoQXJyYXkiLCJBcnJheSIsImZyb20iLCJVaW50OEFycmF5IiwiaGFzaEhleCIsIm1hcCIsImIiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsImJsb2JUb0FycmF5QnVmZmVyIiwiYmxvYiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJhcnJheUJ1ZmZlciIsInRhcmdldCIsInJlc3VsdCIsIkFycmF5QnVmZmVyIiwiRXJyb3IiLCJvbmVycm9yIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJhdWRpbyIsImluaXRpYWxpc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJzdHJlYW0iLCJNZWRpYVJlY29yZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHVzaCIsImRhdGEiLCJjYXRjaCIsIm1lc3NhZ2UiLCJmaW5hbGx5IiwiZ2V0QXVkaW9EdXJhdGlvbiIsInVybCIsIkF1ZGlvIiwiZHVyYXRpb24iLCJzcmMiLCJyZWNvcmQiLCJzdGFydCIsImNvbnNvbGUiLCJzdG9wIiwid2FybiIsIkJsb2IiLCJ0eXBlIiwiYXVkaW9VcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhdWRpb0R1cmF0aW9uIiwiTW9iaWxlUmVjb3JkZXIiLCJSZWFjdGl2ZU1vZGVsIiwiU3ViamVjdHMiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIlN1YmplY3QiLCJzdG9yZU5hbWUiLCJkYiIsImluaXQiLCJJdGVtIiwicHJvcGVydGllcyIsIk1hcCIsImFjdGlvbnMiLCJ2YWx1ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJsb2ciLCJ0cmlnZ2VyRXZlbnQiLCJ0aW1lIiwiaWQiLCJ1bmRlZmluZWQiLCJsb2FkIiwiYXJndW1lbnRzIiwiSlNPTiIsInBhcnNlIiwidGltZUZvcm1hdCIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJ0aW1lU3RyaW5nIiwiQXV0aG9yaXphdGlvbiIsImNvbmZpZyIsInBhcmFtcyIsIm9wZW5pYSIsImtleSIsInRleHQiLCJvcmlnaW5hbCIsImZvcm1hdCIsInByZXBhcmUiLCJwcm9tcHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZ2V0VHJhbnNjcmlwdCIsInNpemUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJqc29uIiwidHJhbnNjcmliZSIsInNwZWFraW5nIiwiY3VycmVudFdvcmQiLCJwYXVzZWQiLCJzcGVlY2hTeW50aGVzaXMiLCJzcGVhayIsImNhbmNlbCIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsImxhbmciLCJvbnN0YXJ0Iiwib25wYXVzZSIsIm9ucmVzdW1lIiwib25ib3VuZGFyeSIsImNoYXJJbmRleCIsIm9uZW5kIiwicGF1c2UiLCJyZXN1bWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImFpLW1vZGVsLnRzIiwicHJvbXB0cy50cyIsInJlY29yZGVyL2luZGV4LnRzIiwicmVjb3JkZXIvbW9iaWxlLnRzIiwic3ViamVjdHMvY29sbGVjdGlvbi50cyIsInN1YmplY3RzL2l0ZW0udHMiLCJzdWJqZWN0cy90aW1lLnRzIiwidHJhbnNjcmliZXIudHMiLCJ2b2ljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=