System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@bgroup/ui@0.0.34/toast", "@bgroup/ui@0.0.34/icons", "prism-react-renderer@1.3.5"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, CodeBox, __beyond_pkg, hmr;
  _export("CodeBox", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_bgroupUi0034Toast) {
      dependency_3 = _bgroupUi0034Toast;
    }, function (_bgroupUi0034Icons) {
      dependency_4 = _bgroupUi0034Icons;
    }, function (_prismReactRenderer2) {
      dependency_5 = _prismReactRenderer2;
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
          "vspecifier": "@aimpact/voice-genius@1.0.0/code"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@bgroup/ui/toast', dependency_3], ['@bgroup/ui/icons', dependency_4], ['prism-react-renderer', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/voice-genius@1.0.0/code');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2744821091,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CodeBox = CodeBox;
          var React = require("react");
          var _toast = require("@bgroup/ui/toast");
          var _icons = require("@bgroup/ui/icons");
          var _prismReactRenderer = require("prism-react-renderer");
          /*bundle*/
          function CodeBox({
            children
          }) {
            function copy() {
              navigator.clipboard.writeText(children);
              _toast.toast.success('Copied implementation');
            }
            return React.createElement("div", {
              className: "copyable-content"
            }, React.createElement("div", {
              className: "code"
            }, React.createElement(_prismReactRenderer.default, {
              ..._prismReactRenderer.defaultProps,
              code: children,
              language: "jsx"
            }, ({
              className,
              style,
              tokens,
              getLineProps,
              getTokenProps
            }) => React.createElement("code", {
              className: className,
              style: style
            }, tokens.map((line, i) => React.createElement("div", {
              ...getLineProps({
                line,
                key: i
              })
            }, line.map((token, key) => React.createElement("span", {
              ...getTokenProps({
                token,
                key
              })
            }))))))), React.createElement(_icons.BeyondIconButton, {
              icon: "copy",
              onClick: copy,
              className: "copy-button"
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "CodeBox",
        "name": "CodeBox"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CodeBox') && _export("CodeBox", CodeBox = require ? require('./index').CodeBox : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUNBO1VBRU87VUFBVSxTQUFVQSxPQUFPLENBQUM7WUFBRUM7VUFBUSxDQUFFO1lBRTlDLFNBQVNDLElBQUk7Y0FDWkMsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0osUUFBUSxDQUFDO2NBQ3ZDSyxZQUFLLENBQUNDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztZQUN2QztZQUVBLE9BQ0NDO2NBQUtDLFNBQVMsRUFBQztZQUFrQixHQUNoQ0Q7Y0FBS0MsU0FBUyxFQUFDO1lBQU0sR0FDcEJELG9CQUFDRSwyQkFBUztjQUFBLEdBQUtDLGdDQUFZO2NBQUVDLElBQUksRUFBRVgsUUFBUTtjQUFFWSxRQUFRLEVBQUM7WUFBSyxHQUN6RCxDQUFDO2NBQUVKLFNBQVM7Y0FBRUssS0FBSztjQUFFQyxNQUFNO2NBQUVDLFlBQVk7Y0FBRUM7WUFBYSxDQUFFLEtBQzFEVDtjQUFNQyxTQUFTLEVBQUVBLFNBQVM7Y0FBRUssS0FBSyxFQUFFQTtZQUFLLEdBQ3RDQyxNQUFNLENBQUNHLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEVBQUVDLENBQUMsS0FDbkJaO2NBQUEsR0FBU1EsWUFBWSxDQUFDO2dCQUFFRyxJQUFJO2dCQUFFRSxHQUFHLEVBQUVEO2NBQUMsQ0FBRTtZQUFDLEdBQ3JDRCxJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDSSxLQUFLLEVBQUVELEdBQUcsS0FDcEJiO2NBQUEsR0FBVVMsYUFBYSxDQUFDO2dCQUFFSyxLQUFLO2dCQUFFRDtjQUFHLENBQUU7WUFBQyxFQUN2QyxDQUFDLENBRUgsQ0FBQyxDQUVILENBQ1UsQ0FDUCxFQUNOYixvQkFBQ2UsdUJBQWdCO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRXZCLElBQUk7Y0FBRU8sU0FBUyxFQUFDO1lBQWEsRUFBRSxDQUNqRTtVQUVSIiwibmFtZXMiOlsiQ29kZUJveCIsImNoaWxkcmVuIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiSGlnaGxpZ2h0IiwiZGVmYXVsdFByb3BzIiwiY29kZSIsImxhbmd1YWdlIiwic3R5bGUiLCJ0b2tlbnMiLCJnZXRMaW5lUHJvcHMiLCJnZXRUb2tlblByb3BzIiwibWFwIiwibGluZSIsImkiLCJrZXkiLCJ0b2tlbiIsIkJleW9uZEljb25CdXR0b24iLCJpY29uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=