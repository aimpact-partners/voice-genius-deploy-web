System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.0.0/model", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, mediaDevice, __beyond_pkg, hmr;
  _export("mediaDevice", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive100Model) {
      dependency_1 = _beyondJsReactive100Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/react-18-widgets", "0.0.5"], ["socket.io-client", "4.6.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/voice-genius", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@1.0.0/main"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/kernel/core', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./desktop
      *************************/
      ims.set('./desktop', {
        hash: 3607733999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopMediaDevice = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _files = require("./files");
          var _input = require("./input");
          var _xhr = require("./xhr");
          class MediaDevice extends _model.ReactiveModel {
            static instance;
            #selector;
            PLATFORM = "DESKTOP";
            #stream;
            #constraints = {};
            #inputFile;
            #files;
            #promise;
            get isReady() {
              return true;
            }
            constructor() {
              super();
              this.#files = new _files.MediaFiles(this, {});
            }
            async getUserMedia(constraints) {
              if (JSON.stringify(this.#constraints) === JSON.stringify(constraints)) return this.#stream;
              this.#constraints = constraints;
              this.#stream = await navigator.mediaDevices.getUserMedia(constraints);
              return this.#stream;
            }
            async activateCamera(constraints, selector) {
              const stream = await this.getUserMedia(constraints);
              this.#stream = stream;
              selector.srcObject = stream;
              this.#selector = selector;
            }
            static getInstance() {
              if (!MediaDevice.instance) {
                MediaDevice.instance = new MediaDevice();
              }
              return MediaDevice.instance;
            }
            desactivateCamera() {
              if (!this.#stream) {
                return;
              }
              this.#stream.getTracks().forEach(track => {
                track.stop();
                this.#stream.removeTrack(track);
              });
              if (this.#selector) {
                this.#selector.srcObject = undefined;
                this.#selector = undefined;
              }
              this.#constraints = undefined;
              this.#stream = undefined;
            }
            /**
             *
             * @param options
             * @returns
             */
            async getPicture() {
              const stream = await this.getUserMedia({
                video: true,
                audio: false
              });
              const imageCapture = new globalThis.ImageCapture(stream.getVideoTracks()[0]);
              const blob = await imageCapture.takePhoto();
              this.clean();
              return blob;
            }
            clean() {
              this.#constraints = {};
              if (!this.#stream) {
                return;
              }
              this.#stream.getTracks().forEach(track => {
                track.stop();
                this.#stream.removeTrack(track);
              });
              if (this.#selector) {
                this.#selector.srcObject = undefined;
                this.#selector = undefined;
              }
              this.#stream = undefined;
            }
            async getVideoStream() {
              return await this.getUserMedia({
                video: true,
                audio: false
              });
            }
            takePicture(options) {}
            openGallery(selector, specs = {}) {}
            upload(url, specs = {}) {
              const form = new FormData();
            }
            setInputFile(input) {
              this.#inputFile = new _input.InputFile(input, this.#files);
              return this.#inputFile;
            }
            publish = async (url, params) => {
              try {
                const form = new FormData();
                const collection = this.#files;
                const name = collection.total > 1 ? `${params.name}[]` : params.name;
                console.log(1, collection.entries);
                collection.entries.forEach(item => form.append(name, item));
                for (let param in params) {
                  if (!params.hasOwnProperty(param)) continue;
                  form.append(param, params[param]);
                }
                const xhr = new _xhr.XHRLoader();
                const response = await xhr.upload(form, url);
                this.#files = new _files.MediaFiles(this, {});
                console.log(1, this.#files.entries);
                return response.json();
              } catch (error) {
                console.error(error);
              }
            };
          }
          const DesktopMediaDevice = MediaDevice.getInstance();
          exports.DesktopMediaDevice = DesktopMediaDevice;
        }
      });

      /******************************
      INTERNAL MODULE: ./file-manager
      ******************************/

      ims.set('./file-manager', {
        hash: 4123506600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getUrl = getUrl;
          var _core = require("@beyond-js/kernel/core");
          let promise;
          /**
           * REturns a valid url of the image loaded
           *
           * @platform mobile
           * @param data
           * @returns
           */
          function getUrl(data) {
            if (promise) return promise;
            promise = new _core.PendingPromise();
            const process = function processFile(entry) {
              entry.file(file => {
                const reader = new FileReader();
                reader.onloadend = a => {
                  promise.resolve(reader.result);
                  promise = undefined;
                };
                reader.readAsDataURL(file);
              });
            };
            globalThis.resolveLocalFileSystemURL(data, process);
            return promise;
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./files/index
      *****************************/

      ims.set('./files/index', {
        hash: 862986929,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MediaFiles = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          class MediaFiles extends _model.ReactiveModel {
            #loaded = 0;
            #specs;
            #type;
            regExp = /[^\w\d.]/g;
            #errors = [];
            #promise;
            get errors() {
              return this.#errors;
            }
            _total = 0;
            get total() {
              return this._total;
            }
            set total(value) {
              if (value === this._total) return;
              this._total = value;
            }
            _items = new Map();
            get items() {
              return this._items;
            }
            get entries() {
              return [...this._items.values()];
            }
            constructor(parent, specs) {
              super();
              this.#specs = specs;
              this.#type = specs.type ? specs.type : "any";
            }
            FILE_TYPE = Object.freeze({
              document: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain", "application/pdf"],
              image: ["image/png", "image/jpeg", "image/gif"],
              json: ["application/json"],
              zip: ["application/x-zip-compressed"],
              audio: ["audio/mpeg", "audio/ogg", "audio/wav", "audio/webm", "audio/aac", "audio/flac" // FLAC files
              ]
            });

            #onload = event => {
              if (event.target?.removeEventListener) {
                event.target.removeEventListener("load", this.#onload);
              }
              if (this.#specs.onload && typeof this.#specs.onload === "function") {
                this.#specs.onload(event);
              }
            };
            #onloadend = (event, file) => {
              this.#loaded = this.#loaded + 1;
              file.src = event.target.result;
              this.#processFile(file);
              if (event.target?.removeEventListener) {
                event.target.removeEventListener("onloadend", this.#onloadend);
              }
              this.triggerEvent("file.loaded");
              if (this.#loaded === this._items.size) this.triggerEvent("loadend");
              if (this.#specs.onloadend && typeof this.#specs.onloadend === "function") {
                this.#specs.onload(event);
              }
            };
            #processFile(file) {
              const name = file.name.replace(this.regExp, "");
              file = this._items.get(name);
              this._items.set(name, file);
            }
            #onerror = event => console.error(4, event);
            validate = file => {
              const isValid = !!this.FILE_TYPE[this.#type].find(item => item === file.type);
              if (!isValid) {
                this.#errors.push(file.name.replace(this.regExp, ""));
              }
              return isValid;
            };
            #readFile = async file => {
              if (this.#type !== "any") {
                const isValid = await this.validate(file);
                if (!isValid) {
                  this.triggerEvent("error");
                  return;
                }
              }
              const reader = new FileReader();
              reader.onload = event => this.#onload(event);
              reader.onloadend = event => this.#onloadend(event, file);
              reader.onerror = event => this.#onerror(event);
              reader.readAsDataURL(file);
            };
            #validateLoad = () => {
              if (this.#loaded === this._items.size) {}
            };
            clean = () => {
              this._items = new Map();
              this.#loaded = 0;
            };
            /**
             * Read Local files uploaded from an input file
             *
             * @param fileList
             */
            readLocal = async fileList => {
              const promises = [];
              for (let i = 0; i < fileList.length; ++i) {
                const file = fileList[i];
                this._items.set(file.name.replace(this.regExp, ""), file);
                promises.push(this.#readFile(file));
              }
              await Promise.all(promises);
            };
            getMobileUrl(data) {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              const process = entry => {
                entry.file(file => {
                  const reader = new FileReader();
                  reader.onloadend = e => {
                    const imgBlob = new Blob([reader.result], {
                      type: file.type
                    });
                    const name = file.name.replace(this.regExp, "");
                    file.blob = imgBlob;
                    this._items.set(name, file);
                    //returns a valid element to show as image
                    this.#promise.resolve(URL.createObjectURL(imgBlob));
                    this.#promise = undefined;
                  };
                  this._items.set(file.name.replace(this.regExp, ""), file);
                  reader.readAsArrayBuffer(file);
                });
              };
              // cordova file plugin
              globalThis.resolveLocalFileSystemURL(data, process);
              return this.#promise;
            }
          }
          exports.MediaFiles = MediaFiles;
        }
      });

      /**************************
      INTERNAL MODULE: ./i-camera
      **************************/

      ims.set('./i-camera', {
        hash: 1945745868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3083892194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.mediaDevice = void 0;
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          let media;
          function getMedia(clean = false) {
            if (clean) media = undefined;
            if (media) return media;
            const types = Object.freeze({
              MOBILE: 0,
              DESKTOP: 1
            });
            const deviceType = globalThis.cordova ? types.MOBILE : types.DESKTOP;
            const models = Object.freeze({
              1: _desktop.DesktopMediaDevice,
              0: _mobile.MobileMediaDevice
            });
            media = models[deviceType];
            return media;
          }
          const /*bundle*/mediaDevice = getMedia();
          exports.mediaDevice = mediaDevice;
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 3259162566,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputFile = void 0;
          var _model = require("@beyond-js/reactive/model");
          class InputFile extends _model.ReactiveModel {
            #input = document.createElement("input");
            #errors;
            #selector;
            #files;
            get files() {
              return this.#files;
            }
            constructor(selector, files, specs = {}) {
              super();
              this.#selector = selector;
              this.#files = files;
              this.#files.on("error", this.getErrors);
              this.#files.on("loadend", this.filesLoaded);
              this.setAttributes(specs);
              if (selector) this.create();
            }
            filesLoaded = () => this.triggerEvent("loadend");
            pictureLoaded = () => this.triggerEvent("pictureLoaded");
            pictureLoading = () => this.triggerEvent("pictureLoading");
            // getErrors = () => (this.#errors = this.files.errors);
            getErrors = () => console.log("error");
            openDialog = () => {
              this.#input.click();
            };
            setAttributes = specs => {
              if (!specs) specs = {};
              let attrs = {
                type: "file",
                style: "display:none",
                name: "input_upload",
                ...specs
              };
              for (let prop in attrs) {
                this.#input.setAttribute(prop, attrs[prop]);
              }
            };
            clean = async () => {
              return this.#files.clean();
              // await this.#mobileFiles.clean();
            };

            #onChangeInput = async event => {
              await this.clean();
              const target = event.currentTarget;
              this.#files.total = target.files.length;
              this.#files.readLocal(target.files);
            };
            create() {
              /**
               * Adds de click and change events into the input file
               */
              const addListeners = () => {
                if (!this.#selector) return;
                this.#selector.addEventListener("click", this.openDialog);
                this.#input.addEventListener("change", this.#onChangeInput);
              };
              this.#selector.after(this.#input);
              addListeners();
            }
          }
          exports.InputFile = InputFile;
        }
      });

      /****************************
      INTERNAL MODULE: ./interfaces
      ****************************/

      ims.set('./interfaces', {
        hash: 2938605133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************
      INTERNAL MODULE: ./mobile
      ************************/

      ims.set('./mobile', {
        hash: 801145895,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileMediaDevice = exports.MediaCameraDevice = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _files = require("./files");
          var _xhr = require("./xhr");
          class MediaCameraDevice extends _model.ReactiveModel {
            #source;
            #selector;
            PLATFORM = "MOBILE";
            static instance;
            #files;
            #DEFAULT_OPTIONS = {
              // Some common settings are 20, 50, and 100
              quality: 80,
              destinationType: globalThis.Camera?.DestinationType?.FILE_URI,
              // In this app, dynamically set the picture source, Camera or photo gallery
              sourceType: 1,
              encodingType: globalThis.Camera?.EncodingType.JPEG,
              mediaType: globalThis.Camera?.MediaType.PICTURE,
              allowEdit: false,
              correctOrientation: true
            };
            constructor() {
              super();
              this.#files = new _files.MediaFiles(this, {});
            }
            #promise;
            get isReady() {
              return !!globalThis.Camera;
            }
            get source() {
              return this.#source;
            }
            #sourceType = 0;
            get sourceType() {
              return this.#sourceType;
            }
            set sourceType(value) {
              if (this.#sourceType === value) return;
              this.#sourceType = value;
            }
            #mediaType = globalThis.Camera?.MediaType.PICTURE; // default
            get mediaType() {
              return this.#mediaType;
            }
            set mediaType(value) {
              if (this.#mediaType === value) return;
              this.#mediaType = value;
            }
            set source(value) {
              this.#source = value;
            }
            onSuccess = async function successCallback(data) {
              const response = await this.#files.getMobileUrl(data);
              this.#promise.resolve(response);
              this.#promise = undefined;
            };
            onFail = message => {
              console.error("Failed because: " + message);
              this.#promise.reject();
              this.#promise = undefined;
            };
            /**
             *
             * @param srcType number 1 = camera, 0 = photolibrary
             * @returns
             */
            setOptions = overwrites => {
              return {
                ...this.#DEFAULT_OPTIONS,
                ...overwrites
              };
            };
            getPicture = options => {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              navigator.camera?.getPicture(response => this.onSuccess(response), this.onFail, this.setOptions(options));
              return this.#promise;
            };
            openGallery(selector) {
              this.#selector = selector;
              return this.getPicture({
                sourceType: 0
              });
            }
            static getInstance() {
              if (!MediaCameraDevice.instance) {
                MediaCameraDevice.instance = new MediaCameraDevice();
              }
              return MediaCameraDevice.instance;
            }
            publish = async (url, params) => {
              try {
                const form = new FormData();
                const collection = this.#files;
                const name = collection.total > 1 ? `${params.name}[]` : params.name;
                collection.entries.forEach(item => {
                  form.append(name, item.blob, item.name);
                });
                for (let param in params) {
                  if (!params.hasOwnProperty(param)) continue;
                  form.append(param, params[param]);
                }
                const xhr = new _xhr.XHRLoader();
                const response = await xhr.upload(form, url);
                this.#files = new _files.MediaFiles(this, {});
                return response.json();
              } catch (error) {
                console.error(error);
              }
            };
          }
          exports.MediaCameraDevice = MediaCameraDevice;
          const MobileMediaDevice = MediaCameraDevice.getInstance();
          exports.MobileMediaDevice = MobileMediaDevice;
        }
      });

      /*********************
      INTERNAL MODULE: ./xhr
      *********************/

      ims.set('./xhr', {
        hash: 2022391131,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.XHRLoader = void 0;
          var _model = require("@beyond-js/reactive/model");
          class XHRLoader extends _model.ReactiveModel {
            promise;
            uploaded;
            progress;
            error;
            constructor() {
              super();
              this.promise = undefined;
              this.uploaded = false;
              this.progress = 0;
              this.error = false;
            }
            get uploading() {
              return !!this.promise;
            }
            get isUploaded() {
              return this.uploaded;
            }
            get uploadProgress() {
              return this.progress;
            }
            get hasError() {
              return this.error;
            }
            onProgress(event) {
              if (event.lengthComputable) {
                const percent = Math.round(event.loaded * 100 / event.total);
                this.progress = parseInt(percent.toString());
              }
              this.triggerEvent("change");
            }
            onCompleted(event) {
              this.uploaded = true;
              this.promise.resolve();
              this.triggerEvent("change");
              setTimeout(() => {
                this.promise = undefined;
                this.triggerEvent("change");
              }, 100);
            }
            onError(event) {
              console.error("Error uploading picture", event);
              this.error = true;
              this.promise.reject();
              this.triggerEvent("change");
            }
            onAbort() {
              this.promise.resolve(false);
              this.triggerEvent("change");
            }
            async upload(data, url) {
              try {
                const specs = {
                  method: "post",
                  body: data
                };
                return fetch(url, specs);
              } catch (e) {
                console.error("error", e);
              }
            }
            abort() {
              if (this.promise) {
                this.promise.reject();
                this.triggerEvent("change");
              }
            }
          }
          exports.XHRLoader = XHRLoader;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "mediaDevice",
        "name": "mediaDevice"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'mediaDevice') && _export("mediaDevice", mediaDevice = require ? require('./index').mediaDevice : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FDL0MsSUFBSSxDQUFDbkMsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDRyxPQUFPLENBQUM4RyxNQUFNLEVBQUU7Y0FDckIsSUFBSSxDQUFDekUsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM1QjtZQUVROEYsT0FBTztjQUNkLElBQUksQ0FBQ25JLE9BQU8sQ0FBQ1ksT0FBTyxDQUFDLEtBQUssQ0FBQztjQUMzQixJQUFJLENBQUN5QixZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzVCO1lBRU8sTUFBTS9ELE1BQU0sQ0FBQzRCLElBQWMsRUFBRTNCLEdBQVc7Y0FDOUMsSUFBSTtnQkFDSCxNQUFNRixLQUFLLEdBQUc7a0JBQ2IrSixNQUFNLEVBQUUsTUFBTTtrQkFDZEMsSUFBSSxFQUFFbkk7aUJBQ047Z0JBQ0QsT0FBT29JLEtBQUssQ0FBQy9KLEdBQUcsRUFBRUYsS0FBSyxDQUFDO2VBQ3hCLENBQUMsT0FBT2tGLENBQUMsRUFBRTtnQkFDWHJFLE9BQU8sQ0FBQ1csS0FBSyxDQUFDLE9BQU8sRUFBRTBELENBQUMsQ0FBQzs7WUFFM0I7WUFFT2dGLEtBQUs7Y0FDWCxJQUFJLElBQUksQ0FBQ3ZJLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxDQUFDQSxPQUFPLENBQUM4RyxNQUFNLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQ3pFLFlBQVksQ0FBQyxRQUFRLENBQUM7O1lBRTdCOztVQUNBdEMiLCJuYW1lcyI6WyJNZWRpYURldmljZSIsIlJlYWN0aXZlTW9kZWwiLCJpbnN0YW5jZSIsIlBMQVRGT1JNIiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwiTWVkaWFGaWxlcyIsImdldFVzZXJNZWRpYSIsImNvbnN0cmFpbnRzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImFjdGl2YXRlQ2FtZXJhIiwic2VsZWN0b3IiLCJzdHJlYW0iLCJzcmNPYmplY3QiLCJnZXRJbnN0YW5jZSIsImRlc2FjdGl2YXRlQ2FtZXJhIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwic3RvcCIsInJlbW92ZVRyYWNrIiwidW5kZWZpbmVkIiwiZ2V0UGljdHVyZSIsInZpZGVvIiwiYXVkaW8iLCJpbWFnZUNhcHR1cmUiLCJnbG9iYWxUaGlzIiwiSW1hZ2VDYXB0dXJlIiwiZ2V0VmlkZW9UcmFja3MiLCJibG9iIiwidGFrZVBob3RvIiwiY2xlYW4iLCJnZXRWaWRlb1N0cmVhbSIsInRha2VQaWN0dXJlIiwib3B0aW9ucyIsIm9wZW5HYWxsZXJ5Iiwic3BlY3MiLCJ1cGxvYWQiLCJ1cmwiLCJmb3JtIiwiRm9ybURhdGEiLCJzZXRJbnB1dEZpbGUiLCJpbnB1dCIsIklucHV0RmlsZSIsInB1Ymxpc2giLCJwYXJhbXMiLCJjb2xsZWN0aW9uIiwibmFtZSIsInRvdGFsIiwiY29uc29sZSIsImxvZyIsImVudHJpZXMiLCJpdGVtIiwiYXBwZW5kIiwicGFyYW0iLCJoYXNPd25Qcm9wZXJ0eSIsInhociIsIlhIUkxvYWRlciIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwiRGVza3RvcE1lZGlhRGV2aWNlIiwiZXhwb3J0cyIsInByb21pc2UiLCJnZXRVcmwiLCJkYXRhIiwiUGVuZGluZ1Byb21pc2UiLCJwcm9jZXNzIiwicHJvY2Vzc0ZpbGUiLCJlbnRyeSIsImZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYSIsInJlc29sdmUiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwicmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCIsInJlZ0V4cCIsImVycm9ycyIsIl90b3RhbCIsInZhbHVlIiwiX2l0ZW1zIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJwYXJlbnQiLCJ0eXBlIiwiRklMRV9UWVBFIiwiT2JqZWN0IiwiZnJlZXplIiwiZG9jdW1lbnQiLCJpbWFnZSIsInppcCIsImV2ZW50IiwidGFyZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9ubG9hZCIsInNyYyIsInRyaWdnZXJFdmVudCIsInNpemUiLCJyZXBsYWNlIiwiZ2V0Iiwic2V0IiwidmFsaWRhdGUiLCJpc1ZhbGlkIiwiZmluZCIsInB1c2giLCJvbmVycm9yIiwicmVhZExvY2FsIiwiZmlsZUxpc3QiLCJwcm9taXNlcyIsImkiLCJsZW5ndGgiLCJQcm9taXNlIiwiYWxsIiwiZ2V0TW9iaWxlVXJsIiwiZSIsImltZ0Jsb2IiLCJCbG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJtZWRpYSIsImdldE1lZGlhIiwidHlwZXMiLCJNT0JJTEUiLCJERVNLVE9QIiwiZGV2aWNlVHlwZSIsImNvcmRvdmEiLCJtb2RlbHMiLCJNb2JpbGVNZWRpYURldmljZSIsIm1lZGlhRGV2aWNlIiwiY3JlYXRlRWxlbWVudCIsImZpbGVzIiwib24iLCJnZXRFcnJvcnMiLCJmaWxlc0xvYWRlZCIsInNldEF0dHJpYnV0ZXMiLCJjcmVhdGUiLCJwaWN0dXJlTG9hZGVkIiwicGljdHVyZUxvYWRpbmciLCJvcGVuRGlhbG9nIiwiY2xpY2siLCJhdHRycyIsInN0eWxlIiwicHJvcCIsInNldEF0dHJpYnV0ZSIsImN1cnJlbnRUYXJnZXQiLCJhZGRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiYWZ0ZXIiLCJNZWRpYUNhbWVyYURldmljZSIsInF1YWxpdHkiLCJkZXN0aW5hdGlvblR5cGUiLCJDYW1lcmEiLCJEZXN0aW5hdGlvblR5cGUiLCJGSUxFX1VSSSIsInNvdXJjZVR5cGUiLCJlbmNvZGluZ1R5cGUiLCJFbmNvZGluZ1R5cGUiLCJKUEVHIiwibWVkaWFUeXBlIiwiTWVkaWFUeXBlIiwiUElDVFVSRSIsImFsbG93RWRpdCIsImNvcnJlY3RPcmllbnRhdGlvbiIsInNvdXJjZSIsIm9uU3VjY2VzcyIsInN1Y2Nlc3NDYWxsYmFjayIsIm9uRmFpbCIsIm1lc3NhZ2UiLCJyZWplY3QiLCJzZXRPcHRpb25zIiwib3ZlcndyaXRlcyIsImNhbWVyYSIsInVwbG9hZGVkIiwicHJvZ3Jlc3MiLCJ1cGxvYWRpbmciLCJpc1VwbG9hZGVkIiwidXBsb2FkUHJvZ3Jlc3MiLCJoYXNFcnJvciIsIm9uUHJvZ3Jlc3MiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsImxvYWRlZCIsInBhcnNlSW50IiwidG9TdHJpbmciLCJvbkNvbXBsZXRlZCIsInNldFRpbWVvdXQiLCJvbkVycm9yIiwib25BYm9ydCIsIm1ldGhvZCIsImJvZHkiLCJmZXRjaCIsImFib3J0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2Rlc2t0b3AudHMiLCJjb2RlL3RzL2ZpbGUtbWFuYWdlci50cyIsImNvZGUvdHMvZmlsZXMvaW5kZXgudHMiLCJjb2RlL3RzL2ktY2FtZXJhLnRzIiwiY29kZS90cy9pbmRleC50cyIsImNvZGUvdHMvaW5wdXQudHMiLCJjb2RlL3RzL2ludGVyZmFjZXMudHMiLCJjb2RlL3RzL21vYmlsZS50cyIsImNvZGUvdHMveGhyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==