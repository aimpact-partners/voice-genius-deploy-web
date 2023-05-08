System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/routing","@beyond-js/kernel@0.1.9/styles","@bgroup/ui@0.0.34/icons","@bgroup/ui@0.0.34/spinner"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@bgroup/ui","0.0.34"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@bgroup/ui@0.0.34/icons', dep), dep => dependencies.set('@bgroup/ui@0.0.34/spinner', dep)],
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

// .beyond/uimport/@bgroup/ui/form.0.0.34.js
var form_0_0_34_exports = {};
__export(form_0_0_34_exports, {
  BeyondButton: () => BeyondButton,
  BeyondCheckbox: () => BeyondCheckbox,
  BeyondForm: () => BeyondForm,
  BeyondInput: () => BeyondInput,
  BeyondRadio: () => BeyondRadio,
  BeyondSwitch: () => BeyondSwitch,
  BeyondTextarea: () => BeyondTextarea,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(form_0_0_34_exports);

// node_modules/@bgroup/ui/form/form.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.9/routing"), 0);
var dependency_3 = __toESM(require("@bgroup/ui@0.0.34/icons"), 0);
var dependency_4 = __toESM(require("@bgroup/ui@0.0.34/spinner"), 0);
var dependency_5 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.34/form"
  },
  "type": "code",
  "name": "form"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/routing", dependency_2], ["@bgroup/ui/icons", dependency_3], ["@bgroup/ui/spinner", dependency_4], ["@beyond-js/kernel/styles", dependency_5]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.34/form");
var ims = /* @__PURE__ */new Map();
ims.set("./button", {
  hash: 2952778037,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondButton = BeyondButton2;
    var _react = require2("react");
    var _routing = require2("@beyond-js/kernel/routing");
    var _icons = require2("@bgroup/ui/icons");
    var _spinner = require2("@bgroup/ui/spinner");
    ;
    function BeyondButton2(props) {
      const {
        className,
        onClick,
        data,
        label,
        children,
        icon,
        loading,
        colorSpinner
      } = props;
      const onClickButton = event => {
        if (onClick && typeof onClick === "function") {
          onClick(event);
          return;
        }
        if (props.navigate) _routing.routing.pushState(`${props.navigate}`);
      };
      props.title ? props["data-tippy-content"] = props.title : null;
      const properties = {
        ...props,
        type: !!props.type ? props.type : "button"
      };
      if (data) {
        let properties2 = Object.keys(data);
        properties2.map(entry => props[`data-${entry}`] = data[entry]);
      }
      let cls = className ? `${className} beyond-button` : "beyond-button";
      cls += icon ? " has-icon" : "";
      delete properties.label;
      delete properties.icon;
      delete properties.children;
      delete properties.className;
      delete properties.loading;
      delete properties.colorSpinner;
      return _react.default.createElement("button", {
        className: cls,
        ...properties,
        onClick: onClickButton
      }, icon && _react.default.createElement(_icons.BeyondIcon, {
        icon
      }), label, loading ? _react.default.createElement(_spinner.BeyondSpinner, {
        color: colorSpinner ?? "var(--primary)"
      }) : children);
    }
  }
});
ims.set("./checkbox", {
  hash: 1973127589,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondCheckbox = void 0;
    var React = require2("react");
    ;
    const BeyondCheckbox2 = (0, React.forwardRef)((props, ref) => {
      const {
        checked,
        name,
        disabled,
        className,
        onChange,
        label
      } = props;
      const [state, setState] = (0, React.useState)({
        checked: !!checked
      });
      const handleChange = event => {
        setState({
          checked: !checked
        });
        onChange && onChange(event);
      };
      let cls = `beyond-checkbox ${className ? className : ""}`;
      cls += disabled ? " disabled" : "";
      const properties = Object.assign({}, props);
      delete properties.className;
      delete properties.checked;
      delete properties.name;
      delete properties.onChange;
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: cls
      }, React.createElement("input", {
        style: {
          display: "none"
        },
        ref,
        type: "checkbox",
        className: "inp-cbx",
        id: name,
        name,
        checked: checked ?? state.checked,
        onChange: handleChange,
        ...properties
      }), React.createElement("label", {
        className: "cbx",
        htmlFor: name
      }, React.createElement("span", null, React.createElement("svg", {
        width: "12px",
        height: "9px",
        viewBox: "0 0 12 9"
      }, React.createElement("polyline", {
        points: "1 5 4 8 11 1"
      }))), React.createElement("span", null, label))));
    });
    exports.BeyondCheckbox = BeyondCheckbox2;
  }
});
ims.set("./form", {
  hash: 212622146,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondForm = BeyondForm2;
    var _react = require2("react");
    function BeyondForm2(props) {
      const onSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        props.onSubmit(event);
      };
      const properties = Object.assign({}, props);
      delete properties.onSubmit;
      return _react.default.createElement("form", {
        onSubmit,
        ...properties
      }, props.children);
    }
    ;
  }
});
ims.set("./input", {
  hash: 1841520349,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondInput = BeyondInput2;
    var React = require2("react");
    var _icons = require2("@bgroup/ui/icons");
    var _spinner = require2("@bgroup/ui/spinner");
    ;
    function BeyondInput2(props) {
      const input = (0, React.useRef)(null);
      const [state, setState] = (0, React.useState)({
        value: props.value ?? "",
        errorMessage: props.errorMessage ? props.errorMessage : "Formato incorrecto",
        lengthMessage: "Cantidad m\xE1xima: ",
        emptyMessage: "Este campo es requerido",
        type: props.type ?? "text"
      });
      const handleChange = event => {
        if (!!props.onChange && typeof props.onChange === "function") props.onChange(event);
        setState({
          ...state,
          _hasError: false,
          value: event.target.value
        });
      };
      const getError = hasError => {
        if (!state._hasError && !hasError) return;
        let errorMessage = state.emptyMessage;
        if (hasError || input.current.value !== "") errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
        if (props.max && parseFloat(input.current.value) > parseInt(props.max)) {
          errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
        }
        return React.createElement("span", {
          className: "beyond-element-input-error"
        }, errorMessage);
      };
      const changeType = event => {
        event.stopPropagation();
        const target = event.currentTarget;
        setState({
          ...state,
          type: target.dataset.type
        });
      };
      const error = getError(props.hasError);
      let properties = {
        ...props
      };
      let cls = props.className ? `${props.className} beyond-element-input` : "beyond-element-input";
      cls += props.icon || props.loading || props.password || props.required ? " has-icon" : "";
      cls += props.disabled ? " disabled" : "";
      cls += props.hasError ? " error" : "";
      delete properties.className;
      delete properties.hasError;
      delete properties.errorMessage;
      delete properties.children;
      delete properties.icon;
      delete properties.label;
      delete properties.password;
      delete properties.loading;
      delete properties.colorSpinner;
      return React.createElement("div", {
        className: cls
      }, React.createElement(React.Fragment, null, props.icon && React.createElement(_icons.BeyondIcon, {
        icon: props.icon
      }), React.createElement("input", {
        ref: input,
        ...properties,
        name: props.name,
        onChange: handleChange,
        type: state.type,
        value: typeof props.value !== "undefined" ? props.value : state.value,
        placeholder: props.placeholder ?? " ",
        id: props.id ?? props.name
      }), props.children, error, props.label && React.createElement("label", {
        htmlFor: props.id ?? props.name
      }, props.label), props.loading && React.createElement(_spinner.BeyondSpinner, {
        color: props.colorSpinner ?? "var(--primary)"
      }), props.password && (state.type === "password" ? React.createElement(_icons.BeyondIconButton, {
        onClick: changeType,
        "data-type": "text",
        className: "eye",
        icon: "eye"
      }) : React.createElement(_icons.BeyondIconButton, {
        onClick: changeType,
        className: "eye",
        "data-type": "password",
        icon: "eye-slash"
      })), props.required && React.createElement("span", {
        className: "beyond-input__required-label"
      }, "(*)")));
    }
  }
});
ims.set("./radio", {
  hash: 3215233530,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondRadio = BeyondRadio2;
    var _react = require2("react");
    function BeyondRadio2(props) {
      const input = (0, _react.useRef)();
      const onClick = event => {
        input.current.checked = true;
        if (!!props.onChange) props.onChange(event);
      };
      const properties = {
        ...props
      };
      delete properties.onChange;
      const cls = `beyond-element-radio ${properties.className ? properties.className : ""}`;
      return _react.default.createElement("div", {
        className: cls
      }, _react.default.createElement("input", {
        ref: input,
        ...properties,
        type: "radio",
        onChange: onClick
      }), properties.label && _react.default.createElement("label", {
        htmlFor: properties.id
      }, properties.label));
    }
    ;
  }
});
ims.set("./switch", {
  hash: 430157124,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondSwitch = void 0;
    var React = require2("react");
    ;
    const BeyondSwitch2 = (0, React.forwardRef)((props, ref) => {
      const {
        value,
        checked,
        required,
        name,
        disabled,
        className,
        onChange,
        onClick
      } = props;
      const [state, setState] = (0, React.useState)({
        checked: !!checked
      });
      const handleChange = event => {
        setState({
          checked: !checked
        });
        onChange && onChange(event);
      };
      const handleClick = event => {
        onClick && onClick(event);
      };
      let cls = `beyond-element-switch ${className ? className : ""}`;
      cls += disabled ? " disabled" : "";
      const properties = Object.assign({}, props);
      delete properties.className;
      delete properties.disabled;
      delete properties.checked;
      delete properties.name;
      delete properties.required;
      delete properties.onChange;
      delete properties.onClick;
      delete properties.value;
      return React.createElement("div", {
        className: cls,
        onClick: handleClick,
        ...properties
      }, React.createElement("label", {
        className: "switch"
      }, React.createElement("input", {
        ref,
        type: "checkbox",
        required,
        name,
        value,
        checked: checked ?? state.checked,
        disabled,
        onChange: handleChange,
        placeholder: name
      }), React.createElement("span", {
        className: "slider"
      })));
    });
    exports.BeyondSwitch = BeyondSwitch2;
  }
});
ims.set("./textarea", {
  hash: 2311693849,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondTextarea = BeyondTextarea2;
    var React = require2("react");
    ;
    function BeyondTextarea2(props) {
      const input = props.ref ?? (0, React.useRef)();
      const [state, setState] = (0, React.useState)({
        value: props.value ?? "",
        errorMessage: props.errorMessage ? props.errorMessage : "Formato incorrecto",
        lengthMessage: "Cantidad m\xE1xima: ",
        emptyMessage: "Este campo es requerido"
      });
      const handleChange = event => {
        if (!!props.onChange && typeof props.onChange === "function") props.onChange(event);
        setState({
          ...state,
          _hasError: false,
          value: event.target.value
        });
      };
      const getError = hasError => {
        if (!state._hasError && !hasError) return;
        let errorMessage = state.emptyMessage;
        if (hasError || input.value !== "") errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
        if (props.max && parseFloat(input.value) > parseInt(props.max)) {
          errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
        }
        return React.createElement("span", {
          className: "beyond-element-input-error"
        }, errorMessage);
      };
      const error = getError(props.hasError);
      let properties = {
        ...props
      };
      let cls = props.className ? `${props.className} beyond-element-textarea` : "beyond-element-textarea";
      cls += props.disabled ? " disabled" : "";
      cls += props.hasError ? " error" : "";
      delete properties.className;
      delete properties.hasError;
      delete properties.errorMessage;
      delete properties.children;
      delete properties.label;
      return React.createElement("div", {
        className: cls
      }, React.createElement(React.Fragment, null, React.createElement("textarea", {
        ref: input,
        ...properties,
        name: props.name,
        onChange: handleChange,
        value: typeof props.value !== "undefined" ? props.value : state.value,
        placeholder: props.placeholder ?? " "
      }), props.children, error, props.label && React.createElement("label", {
        htmlFor: props.id
      }, props.label), props.required && React.createElement("span", {
        className: "beyond-input__required-label"
      }, "(*)")));
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./button",
  "from": "BeyondButton",
  "name": "BeyondButton"
}, {
  "im": "./checkbox",
  "from": "BeyondCheckbox",
  "name": "BeyondCheckbox"
}, {
  "im": "./form",
  "from": "BeyondForm",
  "name": "BeyondForm"
}, {
  "im": "./input",
  "from": "BeyondInput",
  "name": "BeyondInput"
}, {
  "im": "./radio",
  "from": "BeyondRadio",
  "name": "BeyondRadio"
}, {
  "im": "./switch",
  "from": "BeyondSwitch",
  "name": "BeyondSwitch"
}, {
  "im": "./textarea",
  "from": "BeyondTextarea",
  "name": "BeyondTextarea"
}];
var BeyondButton, BeyondCheckbox, BeyondForm, BeyondInput, BeyondRadio, BeyondSwitch, BeyondTextarea;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "BeyondButton") && (BeyondButton = require2 ? require2("./button").BeyondButton : value);
  (require2 || prop === "BeyondCheckbox") && (BeyondCheckbox = require2 ? require2("./checkbox").BeyondCheckbox : value);
  (require2 || prop === "BeyondForm") && (BeyondForm = require2 ? require2("./form").BeyondForm : value);
  (require2 || prop === "BeyondInput") && (BeyondInput = require2 ? require2("./input").BeyondInput : value);
  (require2 || prop === "BeyondRadio") && (BeyondRadio = require2 ? require2("./radio").BeyondRadio : value);
  (require2 || prop === "BeyondSwitch") && (BeyondSwitch = require2 ? require2("./switch").BeyondSwitch : value);
  (require2 || prop === "BeyondTextarea") && (BeyondTextarea = require2 ? require2("./textarea").BeyondTextarea : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmdyb3VwL3VpL2Zvcm0uMC4wLjM0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvZm9ybS9fX3NvdXJjZXMvZm9ybS9jb2RlL3RzL2J1dHRvbi50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJncm91cC91aS9mb3JtL19fc291cmNlcy9mb3JtL2NvZGUvdHMvY2hlY2tib3gudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvZm9ybS9fX3NvdXJjZXMvZm9ybS9jb2RlL3RzL2Zvcm0udHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvZm9ybS9fX3NvdXJjZXMvZm9ybS9jb2RlL3RzL2lucHV0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL2Zvcm0vX19zb3VyY2VzL2Zvcm0vY29kZS90cy9yYWRpby50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJncm91cC91aS9mb3JtL19fc291cmNlcy9mb3JtL2NvZGUvdHMvc3dpdGNoLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL2Zvcm0vX19zb3VyY2VzL2Zvcm0vY29kZS90cy90ZXh0YXJlYS50c3giXSwibmFtZXMiOlsiX19leHBvcnQiLCJCZXlvbmRCdXR0b24iLCJCZXlvbmRDaGVja2JveCIsIkJleW9uZEZvcm0iLCJCZXlvbmRJbnB1dCIsIkJleW9uZFJhZGlvIiwiQmV5b25kU3dpdGNoIiwiQmV5b25kVGV4dGFyZWEiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJwcm9wcyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJjaGlsZHJlbiIsImljb24iLCJsb2FkaW5nIiwiY29sb3JTcGlubmVyIiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwibmF2aWdhdGUiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwidHlwZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJlbnRyeSIsImNscyIsIlJlYWN0IiwiQmV5b25kSWNvbiIsIkJleW9uZFNwaW5uZXIiLCJjb2xvciIsInJlZiIsImNoZWNrZWQiLCJuYW1lIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJhc3NpZ24iLCJzdHlsZSIsImRpc3BsYXkiLCJpZCIsImh0bWxGb3IiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJwb2ludHMiLCJleHBvcnRzIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImlucHV0IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsZW5ndGhNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiX2hhc0Vycm9yIiwidGFyZ2V0IiwiZ2V0RXJyb3IiLCJoYXNFcnJvciIsImN1cnJlbnQiLCJtYXgiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJjaGFuZ2VUeXBlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlcnJvciIsInBhc3N3b3JkIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsIkJleW9uZEljb25CdXR0b24iLCJoYW5kbGVDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFDQTtJQUNBO0lBQ0E7SUFVQztJQUVnQixTQUNQVCxjQUFhVSxPQUFZO01BQ2xDLE1BQU07UUFBRUM7UUFBV0M7UUFBU0M7UUFBTUM7UUFBT0M7UUFBVUM7UUFBTUM7UUFBU0M7TUFBWSxJQUFLUjtNQUVuRixNQUFNUyxnQkFBaUJDLFNBQThDO1FBQ3BFLElBQUlSLFdBQVcsT0FBT0EsWUFBWSxZQUFZO1VBQzdDQSxRQUFRUSxLQUFLO1VBQ2I7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aEQ5QixNQUFNOEIsU0FBU3BCLEtBQUs7UUFDdEJzQixTQUFTO1VBQ1AsR0FBR0Q7VUFDSHFCLFdBQVc7VUFDWEosT0FBT3RDLE1BQU0yQyxPQUFPTDtTQUNyQjtNQUNIO01BRUEsTUFBTU0sV0FDSkMsWUFDaUM7UUFDakMsSUFBSSxDQUFDeEIsTUFBTXFCLGFBQWEsQ0FBQ0csVUFBVTtRQUVuQyxJQUFJTixlQUF1QmxCLE1BQU1vQjtRQUVqQyxJQUFJSSxZQUFZUixNQUFNQyxVQUFVLElBQzlCQyxlQUFlakQsTUFBTWlELGVBQ2pCakQsTUFBTWlELGVBQ05sQixNQUFNa0I7UUFFWixJQUFJakQsTUFBTXlELE9BQU9DLFdBQVdYLE1BQU1DLEtBQUssSUFBSVcsU0FBUzNELE1BQU15RCxHQUFHLEdBQUc7VUFDOURSLGVBQWVqRCxNQUFNa0QsZ0JBQ2pCbEQsTUFBTWtELGdCQUNObkIsTUFBTW1CLGdCQUFnQixTQUFTbEQsTUFBTXlEOztRQUczQyxPQUFPbkM7VUFBTXJCLFdBQVU7UUFBNEIsR0FBRWdELFlBQVk7TUFDbkU7TUFFQSxNQUFNYyxRQUF1Q1QsU0FBU3RELE1BQU11RCxRQUFRO01BQ3BFLElBQUl4QyxhQUFvQjtRQUFFLEdBQUdmO01BQUs7TUFDbEMsSUFBSXFCLE1BQWNyQixNQUFNQyxZQUNwQixHQUFHRCxNQUFNQyxzQ0FDVDtNQUNKb0IsT0FBT3JCLE1BQU02QixXQUFXLGNBQWM7TUFDdENSLE9BQU9yQixNQUFNdUQsV0FBVyxXQUFXO01BRW5DLE9BQU94QyxXQUFXZDtNQUNsQixPQUFPYyxXQUFXd0M7TUFDbEIsT0FBT3hDLFdBQVdrQztNQUNsQixPQUFPbEMsV0FBV1Y7TUFDbEIsT0FBT1UsV0FBV1g7TUFFbEIsT0FDRWtCO1FBQUtyQixXQUFXb0I7TUFBRyxHQUNqQkMsMENBQ0VBO1FBQ0VJLEtBQUtxQjtRQUFLLEdBQ05oQztRQUNKYSxNQUFNNUIsTUFBTTRCO1FBQ1pFLFVBQVVHO1FBQ1ZlLE9BQU8sT0FBT2hELE1BQU1nRCxVQUFVLGNBQWNoRCxNQUFNZ0QsUUFBUWpCLE1BQU1pQjtRQUNoRWtCLGFBQWFsRSxNQUFNa0UsZUFBZTtNQUFHLElBRXRDbEUsTUFBTUssVUFDTjBELE9BQ0EvRCxNQUFNSSxTQUFTa0I7UUFBT2dCLFNBQVN0QyxNQUFNcUM7TUFBRSxHQUFHckMsTUFBTUksS0FBSyxHQUNyREosTUFBTWlFLFlBQ0wzQztRQUFNckIsV0FBVTtNQUE4QixTQUMvQyxDQUNBO0lBR1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii92b2ljZS1nZW5pdXMvcHJvamVjdC9vdXQifQ==