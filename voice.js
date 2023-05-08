System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/voice-genius@1.0.0/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, VoiceLab, Voice, __beyond_pkg, hmr;
  _export({
    VoiceLab: void 0,
    Voice: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_aimpactVoiceGenius100Config) {
      dependency_2 = _aimpactVoiceGenius100Config;
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
          "vspecifier": "@aimpact/voice-genius@1.0.0/voice"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@aimpact/voice-genius/config', dependency_2]]);
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./transcriber
      *****************************/
      ims.set('./transcriber', {
        hash: 2720069528,
        creator: function (require, exports) {
          // export /*bundle*/
          // class AudioTranscriber {
          //   recognition;
          //   constructor() {
          //     this.recognition = new SpeechRecognition();
          //     this.recognition.lang = "en-US";
          //     this.recognition.interimResults = false;
          //     this.recognition.maxAlternatives = 1;
          //   }
          //   transcribe(audioBlob: Blob): Promise<string> {
          //     return new Promise((resolve, reject) => {
          //       const reader = new FileReader();
          //       reader.readAsDataURL(audioBlob);
          //       reader.onloadend = () => {
          //         console.log("yeah");
          //         const audioUrl = reader.result as string;
          //         const audio = new Audio(audioUrl);
          //         audio.oncanplay = () => {
          //           this.recognition.onresult = (event: SpeechRecognitionEvent) => {
          //             const result = event.results[0][0].transcript;
          //             resolve(result);
          //           };
          //           this.recognition.onerror = (event: Event) => {
          //             reject(event);
          //           };
          //           this.recognition.start();
          //           audio.play();
          //         };
          //       };
          //     });
          //   }
          // }
          "use strict";
        }
      });

      /***************************
      INTERNAL MODULE: ./voice-lab
      ***************************/

      ims.set('./voice-lab', {
        hash: 1391869356,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VoiceLab = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _config = require("@aimpact/voice-genius/config");
          /*bundle*/
          class VoiceLab extends _core.Events {
            #apiKey = _config.default.params.elevenlabs.key;
            #voiceId = _config.default.params.elevenlabs.id;
            #url = `https://api.elevenlabs.io/v1/text-to-speech/${this.#voiceId}/stream`;
            #headers = {
              "Content-Type": "application/json",
              "xi-api-key": this.#apiKey
            };
            #audio;
            get audio() {
              return this.#audio;
            }
            speak() {
              if (!this.#audio) {
                console.warn("PLAY: no hay audio");
                return;
              }
              this.#audio.play();
            }
            pause() {
              if (!this.#audio) return;
              this.#audio.pause();
            }
            #blob;
            get blob() {
              return this.#blob;
            }
            init(blob) {
              this.#blob = blob;
              const url = URL.createObjectURL(blob);
              this.#audio = new Audio(url);
              this.speak();
            }
            async call(text) {
              if (!text) {
                console.warn("No hay texto para interpretar");
                return;
              }
              console.warn("call API");
              return;
              await fetch(this.#url, {
                method: "POST",
                headers: this.#headers,
                body: JSON.stringify({
                  text,
                  voice_id: this.#voiceId,
                  voice_settings: {
                    stability: 0,
                    similarity_boost: 0
                  }
                })
              }).then(response => response.blob()).then(blob => {
                // this.#blob = blob;
                this.init(blob);
              });
            }
          }
          exports.VoiceLab = VoiceLab;
        }
      });

      /***********************
      INTERNAL MODULE: ./voice
      ***********************/

      ims.set('./voice', {
        hash: 3391720372,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Voice = void 0;
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
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
            speak(text) {
              speechSynthesis.cancel();
              text = text ?? this.#text;
              const utterance = new SpeechSynthesisUtterance(text);
              utterance.lang = "en";
              utterance.onstart = () => {
                this.#speaking = true;
                this.trigger("change");
              };
              utterance.onpause = () => this.trigger("change");
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
        "im": "./voice-lab",
        "from": "VoiceLab",
        "name": "VoiceLab"
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
        (require || prop === 'VoiceLab') && _export("VoiceLab", VoiceLab = require ? require('./voice-lab').VoiceLab : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TixPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ3hCLENBQUM7Y0FFRE4sZUFBZSxDQUFDL0IsS0FBSyxDQUFDaUMsU0FBUyxDQUFDO1lBQ2xDO1lBRUE3QixLQUFLO2NBQ0gyQixlQUFlLENBQUMzQixLQUFLLEVBQUU7WUFDekI7WUFFQXdDLE1BQU07Y0FDSmIsZUFBZSxDQUFDYSxNQUFNLEVBQUU7WUFDMUI7WUFFQUMsSUFBSTtjQUNGZCxlQUFlLENBQUNDLE1BQU0sRUFBRTtZQUMxQjs7VUFDRFAiLCJuYW1lcyI6WyJWb2ljZUxhYiIsIkV2ZW50cyIsImNvbmZpZyIsInBhcmFtcyIsImVsZXZlbmxhYnMiLCJrZXkiLCJpZCIsImF1ZGlvIiwic3BlYWsiLCJjb25zb2xlIiwid2FybiIsInBsYXkiLCJwYXVzZSIsImJsb2IiLCJpbml0IiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQXVkaW8iLCJjYWxsIiwidGV4dCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwidm9pY2VfaWQiLCJ2b2ljZV9zZXR0aW5ncyIsInN0YWJpbGl0eSIsInNpbWlsYXJpdHlfYm9vc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJleHBvcnRzIiwiVm9pY2UiLCJzcGVha2luZyIsInZhbHVlIiwiY3VycmVudFdvcmQiLCJwYXVzZWQiLCJzcGVlY2hTeW50aGVzaXMiLCJjYW5jZWwiLCJ1dHRlcmFuY2UiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJsYW5nIiwib25zdGFydCIsInRyaWdnZXIiLCJvbnBhdXNlIiwib25yZXN1bWUiLCJvbmJvdW5kYXJ5IiwiZXZlbnQiLCJjaGFySW5kZXgiLCJvbmVuZCIsInJlc3VtZSIsInN0b3AiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRyYW5zY3JpYmVyLnRzIiwidm9pY2UtbGFiLnRzIiwidm9pY2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19