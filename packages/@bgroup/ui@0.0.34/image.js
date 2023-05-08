System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/routing","@beyond-js/kernel@0.1.9/styles","@bgroup/ui@0.0.34/icons"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@bgroup/ui","0.0.34"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@bgroup/ui@0.0.34/icons', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@bgroup/ui/image.0.0.34.js
var image_0_0_34_exports = {};
__export(image_0_0_34_exports, {
  BeyondImage: () => BeyondImage,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(image_0_0_34_exports);

// node_modules/@bgroup/ui/image/image.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@bgroup/ui@0.0.34/icons"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.34/image"
  },
  "type": "code",
  "name": "image"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@bgroup/ui/icons", dependency_2], ["@beyond-js/kernel/styles", dependency_3]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.34/image");
var ims = /* @__PURE__ */new Map();
ims.set("./image", {
  hash: 3927941655,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondImage = BeyondImage2;
    var _react = require2("react");
    var _icons = require2("@bgroup/ui/icons");
    ;
    function BeyondImage2(props) {
      const initialState = {
        size: "200x200",
        loaded: false
      };
      const {
        className,
        onClick,
        children,
        src,
        alt,
        onError
      } = props;
      const [image, setImage] = (0, _react.useState)();
      const [state, setState] = (0, _react.useState)(initialState);
      const onLoad = () => setState({
        ...state,
        error: false,
        htmlLoaded: true
      });
      const loadImage = (url, size) => {
        let finalSrc = url;
        const newImage = new Image();
        newImage.onload = () => setState({
          ...state,
          loaded: true,
          error: false
        });
        newImage.onerror = () => setState({
          ...state,
          error: true,
          loaded: false
        });
        newImage.src = finalSrc;
        setImage(newImage);
        setState({
          ...state,
          url,
          size,
          src: finalSrc,
          loaded: true
        });
      };
      (0, _react.useEffect)(() => {
        const currentSrc = src;
        if (state.url !== currentSrc) {
          let size = props.size ?? state.size;
          loadImage(currentSrc, size);
        }
        return () => setImage({
          ...state,
          onload: void 0,
          onerror: void 0
        });
      }, [src]);
      const {
        error,
        loaded,
        htmlLoaded
      } = state;
      let output;
      const onClickError = event => {
        event.stopPropagation();
        if (onError && typeof onError === "function") onError(event);
      };
      let cls = `beyond-element-image ${className ? ` ${className}` : ""}`;
      if (!loaded && !htmlLoaded) cls += " beyond-element-image-preload";
      if (error) cls += " beyond-element-image-error";
      const Error2 = _react.default.createElement("div", {
        key: "error",
        "data-src": src,
        className: "content-error"
      }, onError && _react.default.createElement(_icons.BeyondIconButton, {
        onClick: onClickError,
        icon: "refresh"
      }));
      const Loaded = _react.default.createElement("img", {
        src,
        onLoad,
        loading: props.loading ?? "eager",
        alt
      });
      if (error) output = Error2;
      if (loaded) output = Loaded;
      const properties = {
        ...props,
        className: cls,
        onClick
      };
      delete properties.src;
      delete properties.alt;
      delete properties.onError;
      delete properties.children;
      delete properties.size;
      delete properties.loading;
      delete properties.error;
      return _react.default.createElement("figure", {
        "data-src": src,
        ...properties
      }, output, children);
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./image",
  "from": "BeyondImage",
  "name": "BeyondImage"
}];
var BeyondImage;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "BeyondImage") && (BeyondImage = require2 ? require2("./image").BeyondImage : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmdyb3VwL3VpL2ltYWdlLjAuMC4zNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL2ltYWdlL19fc291cmNlcy9pbWFnZS9jb2RlL3RzL2ltYWdlLnRzeCJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkJleW9uZEltYWdlIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJzaXplIiwibG9hZGVkIiwiY2xhc3NOYW1lIiwib25DbGljayIsImNoaWxkcmVuIiwic3JjIiwiYWx0Iiwib25FcnJvciIsImltYWdlIiwic2V0SW1hZ2UiLCJzdGF0ZSIsInNldFN0YXRlIiwib25Mb2FkIiwiZXJyb3IiLCJodG1sTG9hZGVkIiwibG9hZEltYWdlIiwidXJsIiwiZmluYWxTcmMiLCJuZXdJbWFnZSIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsImN1cnJlbnRTcmMiLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJvbkNsaWNrRXJyb3IiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNscyIsIkVycm9yIiwiUmVhY3QiLCJrZXkiLCJCZXlvbmRJY29uQnV0dG9uIiwiaWNvbiIsIkxvYWRlZCIsImxvYWRpbmciLCJwcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFPQTtJQVFDO0lBS2dCLFNBQ1JILGFBQVlJLE9BQVk7TUFZL0IsTUFBTUMsZUFBNkI7UUFBRUMsTUFBTTtRQUFXQyxRQUFRO01BQUs7TUFDbkUsTUFBTTtRQUFFQztRQUFXQztRQUFTQztRQUFVQztRQUFLQztRQUFLQztNQUFPLElBQUtUO01BQzVELE1BQU0sQ0FBQ1UsT0FBT0MsUUFBUSxLQUFJLHFCQUFRO01BQ2xDLE1BQU0sQ0FBQ0MsT0FBT0MsUUFBUSxLQUFJLG9CQUF1QlosWUFBWTtNQUM3RCxNQUFNYSxTQUFxQixNQUN6QkQsU0FBUztRQUFFLEdBQUdEO1FBQU9HLE9BQU87UUFBT0MsWUFBWTtNQUFJLENBQUU7TUFDdkQsTUFBTUMsWUFBWSxDQUFDQyxLQUFhaEIsU0FBc0I7UUFDcEQsSUFBSWlCLFdBQW1CRDtRQUV2QixNQUFNRSxXQUE2QixJQUFJQyxPQUFLO1FBQzVDRCxTQUFTRSxTQUFTLE1BQ2hCVCxTQUFTO1VBQUUsR0FBR0Q7VUFBT1QsUUFBUTtVQUFNWSxPQUFPO1FBQUssQ0FBRTtRQUNuREssU0FBU0csVUFBVSxNQUNqQlYsU0FBUztVQUFFLEdBQUdEO1VBQU9HLE9BQU87VUFBTVosUUFBUTtRQUFLLENBQUU7UUFDbkRpQixTQUFTYixNQUFNWTtRQUNmUixTQUFTUyxRQUFRO1FBQ2pCUCxTQUFTO1VBQUUsR0FBR0Q7VUFBT007VUFBVWhCO1VBQVlLLEtBQUtZO1VBQVVoQixRQUFRO1FBQUksQ0FBRTtNQUMxRTtNQUNBLHNCQUFVLE1BQUs7UUFDYixNQUFNcUIsYUFBcUJqQjtRQUMzQixJQUFJSyxNQUFNTSxRQUFRTSxZQUFZO1VBQzVCLElBQUl0QixPQUFlRixNQUFNRSxRQUFRVSxNQUFNVjtVQUN2Q2UsVUFBVU8sWUFBWXRCLElBQUk7O1FBRzVCLE9BQU8sTUFDTFMsU0FBUztVQUFFLEdBQUdDO1VBQU9VLFFBQVFHO1VBQVdGLFNBQVNFO1FBQVMsQ0FBRTtNQUVoRSxHQUFHLENBQUNsQixHQUFHLENBQUM7TUFFUixNQUFNO1FBQUVRO1FBQU9aO1FBQVFhO01BQVUsSUFBS0o7TUFDdEMsSUFBSWM7TUFDSixNQUFNQyxlQUFnQkMsU0FBK0M7UUFDbkVBLE1BQU1DLGlCQUFlO1FBQ3JCLElBQUlwQixXQUFXLE9BQU9BLFlBQVksWUFBWUEsUUFBUW1CLEtBQUs7TUFDN0Q7TUFFQSxJQUFJRSxNQUFjLHdCQUF3QjFCLFlBQVksSUFBSUEsY0FBYztNQUN4RSxJQUFJLENBQUNELFVBQVUsQ0FBQ2EsWUFBWWMsT0FBTztNQUNuQyxJQUFJZixPQUFPZSxPQUFPO01BQ2xCLE1BQU1DLFNBQ0pDO1FBQUtDLEtBQUk7UUFBTyxZQUFXMUI7UUFBS0gsV0FBVTtNQUFlLEdBQ3RESyxXQUFXdUIsNkJBQUNFLHlCQUFnQjtRQUFDN0IsU0FBU3NCO1FBQWNRLE1BQUs7TUFBUyxFQUFHO01BRzFFLE1BQU1DLFNBQ0pKO1FBQ0V6QjtRQUNBTztRQUNBdUIsU0FBU3JDLE1BQU1xQyxXQUFXO1FBQzFCN0I7TUFBUTtNQUdaLElBQUlPLE9BQU9XLFNBQVNLO01BQ3BCLElBQUk1QixRQUFRdUIsU0FBU1U7TUFFckIsTUFBTUUsYUFBb0I7UUFBRSxHQUFHdEM7UUFBT0ksV0FBVzBCO1FBQUt6QjtNQUFPO01BQzdELE9BQU9pQyxXQUFXL0I7TUFDbEIsT0FBTytCLFdBQVc5QjtNQUNsQixPQUFPOEIsV0FBVzdCO01BQ2xCLE9BQU82QixXQUFXaEM7TUFDbEIsT0FBT2dDLFdBQVdwQztNQUNsQixPQUFPb0MsV0FBV0Q7TUFDbEIsT0FBT0MsV0FBV3ZCO01BRWxCLE9BQ0VpQjtRQUFBLFlBQWtCekI7UUFBRyxHQUFNK0I7TUFBVSxHQUNsQ1osUUFDQXBCLFFBQVE7SUFHZiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3ZvaWNlLWdlbml1cy9wcm9qZWN0L291dCJ9