System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.0.0/model", "@aimpact/media-manager@1.0.0/main", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Uploader, __beyond_pkg, hmr;
  _export("Uploader", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive100Model) {
      dependency_1 = _beyondJsReactive100Model;
    }, function (_aimpactMediaManager100Main) {
      dependency_2 = _aimpactMediaManager100Main;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
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
          "vspecifier": "@aimpact/media-manager@1.0.0/uploader"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/media-manager/main', dependency_2], ['@beyond-js/kernel/core', dependency_3]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./draggable
      ***************************/
      ims.set('./draggable', {
        hash: 1644373945,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableUploader = void 0;
          class DraggableUploader {
            #parent;
            #files;
            constructor(parent) {
              this.#parent = parent;
              this.#files = parent.files;
            }
            onDrop = event => {
              event.preventDefault();
              const {
                dataTransfer
              } = event;
              if (!dataTransfer.items.length) {
                return;
              }
              const files = [];
              for (let i = 0; i < dataTransfer.items.length; ++i) {
                const file = dataTransfer.items[i].getAsFile();
                if (file) {
                  files.push(file);
                }
              }
              this.#files.readLocal(files);
            };
            /**
             * This event runs only when are files on the draggable area.
             * @param event
             */
            onDragOver = event => {
              event.preventDefault();
            };
            /**
             * Add the drag & drop events to the control
             * @param {HTMLInputElement} selector
             */
            add(selector) {
              selector.ondrop = this.onDrop;
              selector.ondragover = this.onDragOver;
            }
          }
          exports.DraggableUploader = DraggableUploader;
        }
      });

      /****************************
      INTERNAL MODULE: ./files/base
      ****************************/

      ims.set('./files/base', {
        hash: 778530298,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseFile = void 0;
          var _model = require("@beyond-js/reactive/model");
          class BaseFile extends _model.ReactiveModel {
            #loaded = 0;
            #specs;
            #type;
            regExp = /[^\w\d.]/g;
            #errors = [];
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
              audio: ["audio/mpeg", "audio/ogg", "audio/wav", "audio/webm", "audio/aac", "audio/flac", "audio/x-m4a" // mp4 files, older version
              ]
            });

            #onload = event => {
              event.target.removeEventListener("load", this.#onload);
              if (this.#specs.onload && typeof this.#specs.onload === "function") {
                this.#specs.onload(event);
              }
            };
            #onloadend = (event, file) => {
              this.#loaded = this.#loaded + 1;
              const name = file.name.replace(this.regExp, "");
              file = this._items.get(name);
              file.src = event.target.result;
              this._items.set(name, file);
              event.target.removeEventListener("onloadend", this.#onloadend);
              this.triggerEvent("file.loaded");
              if (this.#loaded === this._items.size) this.triggerEvent("loadend");
              if (this.#specs.onloadend && typeof this.#specs.onloadend === "function") {
                this.#specs.onload(event);
              }
            };
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
             *
             * @param fileList
             */
            readLocal = async fileList => {
              this.fetching = true;
              this.triggerEvent(); //@todo trigger remove
              const promises = [];
              for (let i = 0; i < fileList.length; ++i) {
                const file = fileList[i];
                this._items.set(file.name.replace(this.regExp, ""), file);
                promises.push(this.#readFile(file));
              }
              await Promise.all(promises);
              this.fetching = false;
              this.triggerEvent(); //@todo trigger remove
            };
          }

          exports.BaseFile = BaseFile;
        }
      });

      /*****************************
      INTERNAL MODULE: ./files/index
      *****************************/

      ims.set('./files/index', {
        hash: 3938796760,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FilesUploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _mobile = require("./mobile");
          var _web = require("./web");
          class FilesUploader extends _model.ReactiveModel {
            static #instance;
            static getInstance(parent, specs) {
              if (this.#instance) return this.#instance;
              if (globalThis.phonegap) return new _mobile.MobileFilesUploader(parent);
              return new _web.WebFilesUploader(parent, specs);
            }
          }
          exports.FilesUploader = FilesUploader;
        }
      });

      /******************************
      INTERNAL MODULE: ./files/mobile
      ******************************/

      ims.set('./files/mobile', {
        hash: 4087492771,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileFilesUploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          class MobileFilesUploader extends _model.ReactiveModel {
            _loaded = 0;
            files = new Map();
            base64;
            _specs;
            _errors = [];
            constructor(specs) {
              super();
              this._specs = specs;
            }
            clean = () => {
              this.files = new Map();
              this._loaded = 0;
            };
            getFiles = async data => {
              this.clean();
              this.base64 = data.url;
              this.triggerEvent("loading");
              /**
               * todo: @julio check
               */
              const [dir, filename] = data.name.split("com.jidadesarrollos.bovino/cache/");
              this.files.set(filename, data.url);
              this.triggerEvent("loadend");
            };
            get entries() {
              return this.files;
            }
            get total() {
              return this.files.size;
            }
          }
          exports.MobileFilesUploader = MobileFilesUploader;
        }
      });

      /***************************
      INTERNAL MODULE: ./files/web
      ***************************/

      ims.set('./files/web', {
        hash: 2642627635,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WebFilesUploader = void 0;
          var _base = require("./base");
          class WebFilesUploader extends _base.BaseFile {}
          exports.WebFilesUploader = WebFilesUploader;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3343810427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Uploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _draggable = require("./draggable");
          var _files = require("./files");
          var _xhr = require("./xhr");
          var _main = require("@aimpact/media-manager/main");
          /*bundle*/
          class Uploader extends _model.ReactiveModel {
            #files;
            get files() {
              return this.#files;
            }
            #fileInput = document.createElement("input");
            #selector;
            #attrs;
            #draggable;
            #control;
            #specs;
            #errors;
            get errors() {
              return this.#errors;
            }
            constructor(specs = {}) {
              super();
              if (!specs.input) specs.input = {};
              /**
               * Manager of the files
               * @type {UploadFiles}
               */
              this.#files = _files.FilesUploader.getInstance(this, specs);
              this.#draggable = new _draggable.DraggableUploader(this);
              this.#files.on("change", () => {
                this.triggerEvent("change");
              });
              this.files.on("error", this.getErrors);
              this.files.on("loadend", this.filesLoaded);
              const params = {
                ...specs.input
              };
              this.#specs = specs;
              this.setAttributes(params);
            }
            setAttributes = specs => {
              if (!specs) specs = {};
              let attrs = {
                type: "file",
                style: "display:none",
                name: "input_upload",
                ...specs
              };
              for (let prop in attrs) {
                this.#fileInput.setAttribute(prop, attrs[prop]);
              }
              this.#attrs = attrs;
            };
            // };
            openDialog = () => {
              this.#fileInput.click();
            };
            filesLoaded = () => this.triggerEvent("loadend");
            pictureLoaded = () => this.triggerEvent("pictureLoaded");
            pictureLoading = () => this.triggerEvent("pictureLoading");
            getErrors = () => this.#errors = this.files.errors;
            clean = async () => {
              await this.files.clean();
              // await this.#mobileFiles.clean();
            };

            create = (selector, draggableSelector) => {
              if (_main.mediaDevice.type === "MOBILE") {
                selector.addEventListener("click", _main.mediaDevice.openGallery);
              }
              this.#selector = selector;
              /**
               * Adds de click and change events into the input file
               */
              const addListeners = () => {
                if (!selector) return;
                selector.addEventListener("click", this.openDialog);
                this.#fileInput.addEventListener("change", this.#onChangeInput);
              };
              selector.after(this.#fileInput);
              addListeners();
              if (draggableSelector) this.#draggable.add(draggableSelector);
            };
            #onChangeInput = async event => {
              this.clean();
              this.fetching = true;
              this.triggerEvent(); // todo: fetching property need to fires this event
              const target = event.currentTarget;
              this.#files.total = target.files.length;
              this.#files.readLocal(target.files);
              this.fetching = false;
              this.triggerEvent(); // todo: fetching property need to fires this event
            };

            publish = async (additionalParams = {}) => {
              const form = new FormData();
              //const collection = isCamera ? mobileFiles : files;
              const collection = this.#files;
              const specs = this.#specs;
              const name = collection.total > 1 ? `${specs.name}` : specs.name;
              collection.entries.forEach(item => form.append(name, item));
              const xhr = new _xhr.XHRLoader();
              const params = Object.assign(specs.params ? specs.params : {}, additionalParams);
              for (let param in params) {
                if (!params.hasOwnProperty(param)) continue;
                form.append(param, specs.params[param]);
              }
              const response = await xhr.upload(form, specs.url);
              return response.json();
            };
          }
          exports.Uploader = Uploader;
        }
      });

      /************************
      INTERNAL MODULE: ./resize
      ************************/

      ims.set('./resize', {
        hash: 1913477879,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.resizePicture = void 0;
          const resizePicture = (uri, specs) => new Promise(resolve => {
            specs = specs ? specs : {};
            const maxWidth = specs.maxWidth ? specs.maxWidth : 800;
            const maxHeight = specs.maxHeight ? specs.maxHeight : maxWidth / (4 / 3);
            const quality = specs.quality ? specs.quality : 0.8;
            const img = new Image();
            img.src = uri;
            img.onload = function () {
              let width = img.width;
              let height = img.height;
              let orientation;
              if (width < height) {
                orientation = "portrait";
                if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
                }
              } else {
                orientation = "landscape";
                if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
                }
              }
              const canvas = document.createElement("canvas");
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0, width, height);
              let image = canvas.toDataURL("image/jpeg", quality);
              if (!specs.rotate) {
                resolve({
                  src: image,
                  width: width,
                  height: height,
                  orientation: orientation
                });
              }
              const rotateCanvas = document.createElement("canvas");
              let ctxRotate = rotateCanvas.getContext("2d");
              rotateCanvas.height = width;
              rotateCanvas.width = height;
              const imgRotate = new Image();
              imgRotate.onload = () => {
                ctxRotate.translate(rotateCanvas.width / 2, rotateCanvas.height / 2);
                ctxRotate.rotate(Math.PI / 2);
                ctxRotate.drawImage(imgRotate, -imgRotate.width / 2, -imgRotate.height / 2);
                ctxRotate.rotate(-Math.PI / 2);
                ctxRotate.translate(-imgRotate.width / 2, -imgRotate.height / 2);
                const imageRotated = rotateCanvas.toDataURL("image/jpg", 1);
                resolve({
                  src: imageRotated,
                  width: width,
                  height: height,
                  orientation: orientation,
                  aja: true
                });
              };
              imgRotate.src = image;
            };
          });
          exports.resizePicture = resizePicture;
        }
      });

      /*********************
      INTERNAL MODULE: ./xhr
      *********************/

      ims.set('./xhr', {
        hash: 2644132082,
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
        "from": "Uploader",
        "name": "Uploader"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Uploader') && _export("Uploader", Uploader = require ? require('./index').Uploader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFDLHlCQUF5QixFQUFFbEQsS0FBSyxDQUFDO2NBQy9DLElBQUksQ0FBQ2tELEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQzhGLE9BQU8sQ0FBQ2tCLE1BQU0sRUFBRTtjQUNyQixJQUFJLENBQUNwSCxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzdCO1lBRVFxSCxPQUFPO2NBQ2IsSUFBSSxDQUFDbkIsT0FBTyxDQUFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQztjQUMzQixJQUFJLENBQUMzRSxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzdCO1lBRU8sTUFBTXdFLE1BQU0sQ0FBQzFDLElBQWMsRUFBRUMsR0FBVztjQUM3QyxJQUFJO2dCQUNGLE1BQU1sRCxLQUFLLEdBQUc7a0JBQ1p5SSxNQUFNLEVBQUUsTUFBTTtrQkFDZEMsSUFBSSxFQUFFekY7aUJBQ1A7Z0JBQ0QsT0FBTzBGLEtBQUssQ0FBQ3pGLEdBQUcsRUFBRWxELEtBQUssQ0FBQztlQUN6QixDQUFDLE9BQU80SSxDQUFDLEVBQUU7Z0JBQ1Z0SCxPQUFPLENBQUNDLEtBQUssQ0FBQyxPQUFPLEVBQUVxSCxDQUFDLENBQUM7O1lBRTdCO1lBRU9DLEtBQUs7Y0FDVixJQUFJLElBQUksQ0FBQ3hCLE9BQU8sRUFBRTtnQkFDaEIsSUFBSSxDQUFDQSxPQUFPLENBQUNrQixNQUFNLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQ3BILFlBQVksQ0FBQyxRQUFRLENBQUM7O1lBRS9COztVQUNEL0IiLCJuYW1lcyI6WyJEcmFnZ2FibGVVcGxvYWRlciIsImNvbnN0cnVjdG9yIiwicGFyZW50IiwiZmlsZXMiLCJvbkRyb3AiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YVRyYW5zZmVyIiwiaXRlbXMiLCJsZW5ndGgiLCJpIiwiZmlsZSIsImdldEFzRmlsZSIsInB1c2giLCJyZWFkTG9jYWwiLCJvbkRyYWdPdmVyIiwiYWRkIiwic2VsZWN0b3IiLCJvbmRyb3AiLCJvbmRyYWdvdmVyIiwiZXhwb3J0cyIsIkJhc2VGaWxlIiwiUmVhY3RpdmVNb2RlbCIsInJlZ0V4cCIsImVycm9ycyIsIl90b3RhbCIsInRvdGFsIiwidmFsdWUiLCJfaXRlbXMiLCJNYXAiLCJlbnRyaWVzIiwidmFsdWVzIiwic3BlY3MiLCJ0eXBlIiwiRklMRV9UWVBFIiwiT2JqZWN0IiwiZnJlZXplIiwiZG9jdW1lbnQiLCJpbWFnZSIsImpzb24iLCJ6aXAiLCJhdWRpbyIsInRhcmdldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbmxvYWQiLCJuYW1lIiwicmVwbGFjZSIsImdldCIsInNyYyIsInJlc3VsdCIsInNldCIsInRyaWdnZXJFdmVudCIsInNpemUiLCJvbmxvYWRlbmQiLCJjb25zb2xlIiwiZXJyb3IiLCJ2YWxpZGF0ZSIsImlzVmFsaWQiLCJmaW5kIiwiaXRlbSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmVycm9yIiwicmVhZEFzRGF0YVVSTCIsImNsZWFuIiwiZmlsZUxpc3QiLCJmZXRjaGluZyIsInByb21pc2VzIiwiUHJvbWlzZSIsImFsbCIsIkZpbGVzVXBsb2FkZXIiLCJnZXRJbnN0YW5jZSIsImdsb2JhbFRoaXMiLCJwaG9uZWdhcCIsIk1vYmlsZUZpbGVzVXBsb2FkZXIiLCJXZWJGaWxlc1VwbG9hZGVyIiwiX2xvYWRlZCIsImJhc2U2NCIsIl9zcGVjcyIsIl9lcnJvcnMiLCJnZXRGaWxlcyIsImRhdGEiLCJ1cmwiLCJkaXIiLCJmaWxlbmFtZSIsInNwbGl0IiwiVXBsb2FkZXIiLCJjcmVhdGVFbGVtZW50IiwiaW5wdXQiLCJvbiIsImdldEVycm9ycyIsImZpbGVzTG9hZGVkIiwicGFyYW1zIiwic2V0QXR0cmlidXRlcyIsImF0dHJzIiwic3R5bGUiLCJwcm9wIiwic2V0QXR0cmlidXRlIiwib3BlbkRpYWxvZyIsImNsaWNrIiwicGljdHVyZUxvYWRlZCIsInBpY3R1cmVMb2FkaW5nIiwiY3JlYXRlIiwiZHJhZ2dhYmxlU2VsZWN0b3IiLCJtZWRpYURldmljZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuR2FsbGVyeSIsImFkZExpc3RlbmVycyIsImFmdGVyIiwiY3VycmVudFRhcmdldCIsInB1Ymxpc2giLCJhZGRpdGlvbmFsUGFyYW1zIiwiZm9ybSIsIkZvcm1EYXRhIiwiY29sbGVjdGlvbiIsImZvckVhY2giLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJhc3NpZ24iLCJwYXJhbSIsImhhc093blByb3BlcnR5IiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJyZXNpemVQaWN0dXJlIiwidXJpIiwicmVzb2x2ZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicXVhbGl0eSIsImltZyIsIkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJvcmllbnRhdGlvbiIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJyb3RhdGUiLCJyb3RhdGVDYW52YXMiLCJjdHhSb3RhdGUiLCJpbWdSb3RhdGUiLCJ0cmFuc2xhdGUiLCJNYXRoIiwiUEkiLCJpbWFnZVJvdGF0ZWQiLCJhamEiLCJwcm9taXNlIiwidXBsb2FkZWQiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsInVwbG9hZGluZyIsImlzVXBsb2FkZWQiLCJ1cGxvYWRQcm9ncmVzcyIsImhhc0Vycm9yIiwib25Qcm9ncmVzcyIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50Iiwicm91bmQiLCJsb2FkZWQiLCJwYXJzZUludCIsInRvU3RyaW5nIiwib25Db21wbGV0ZWQiLCJzZXRUaW1lb3V0Iiwib25FcnJvciIsInJlamVjdCIsIm9uQWJvcnQiLCJtZXRob2QiLCJib2R5IiwiZmV0Y2giLCJlIiwiYWJvcnQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRyYWdnYWJsZS50cyIsImZpbGVzL2Jhc2UudHMiLCJmaWxlcy9pbmRleC50cyIsImZpbGVzL21vYmlsZS50cyIsImZpbGVzL3dlYi50cyIsImluZGV4LnRzIiwicmVzaXplLnRzIiwieGhyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=