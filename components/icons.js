System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@bgroup/ui@0.0.34/icons", "@bgroup/ui@0.0.34/form"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, AppIcon, AppIconButton, AppButton, __beyond_pkg, hmr;
  _export({
    AppIcon: void 0,
    AppIconButton: void 0,
    AppButton: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_bgroupUi0034Icons) {
      dependency_2 = _bgroupUi0034Icons;
    }, function (_bgroupUi0034Form) {
      dependency_3 = _bgroupUi0034Form;
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
          "vspecifier": "@aimpact/voice-genius@1.0.0/components/icons"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@bgroup/ui/icons', dependency_2], ['@bgroup/ui/form', dependency_3]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./icons
      ***********************/
      ims.set('./icons', {
        hash: 1860238233,
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
            },
            bulletPoints: {
              icon: '<g id="bullet-points"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"></path></g>',
              viewBox: "0 0 24 24"
            },
            formatText: '<g id="format-quote"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></g>',
            transcription: '<g id="title"><path d="M5 4v3h5.5v12h3V7H19V4z"></path></g>',
            inspirational: '<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>'
          };
          exports.ICONS = ICONS;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4008685979,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppButton = AppButton;
          exports.AppIcon = AppIcon;
          exports.AppIconButton = AppIconButton;
          var React = require("react");
          var _icons = require("@bgroup/ui/icons");
          var _form = require("@bgroup/ui/form");
          var _icons2 = require("./icons");
          /*bundle*/
          function AppIcon({
            icon
          }) {
            icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
            return React.createElement(_icons.BeyondIcon, {
              icon: icon
            });
          }
          /*bundle*/
          function AppIconButton({
            icon
          }) {
            icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
            return React.createElement(_icons.BeyondIconButton, {
              icon: icon
            });
          }
          /*bundle */
          function AppButton(props) {
            const attrs = {
              ...props
            };
            delete attrs.children;
            if (props.icon) {
              let {
                icon
              } = props;
              icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
              attrs.icon = icon;
            }
            return React.createElement(_form.BeyondButton, {
              ...attrs
            }, props.children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "AppIcon",
        "name": "AppIcon"
      }, {
        "im": "./index",
        "from": "AppIconButton",
        "name": "AppIconButton"
      }, {
        "im": "./index",
        "from": "AppButton",
        "name": "AppButton"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AppIcon') && _export("AppIcon", AppIcon = require ? require('./index').AppIcon : value);
        (require || prop === 'AppIconButton') && _export("AppIconButton", AppIconButton = require ? require('./index').AppIconButton : value);
        (require || prop === 'AppButton') && _export("AppButton", AppButton = require ? require('./index').AppButton : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU8sTUFBTUEsS0FBSyxHQUFHO1lBQ3BCQyxHQUFHLEVBQUU7Y0FDSkMsSUFBSSxFQUFFLG1PQUFtTztjQUN6T0MsT0FBTyxFQUFFO2FBQ1Q7WUFDREMsSUFBSSxFQUFFO2NBQ0xGLElBQUksRUFBRSxrREFBa0Q7Y0FDeERDLE9BQU8sRUFBRTthQUNUO1lBQ0RFLFlBQVksRUFBRTtjQUNiSCxJQUFJLEVBQUUsNlRBQTZUO2NBQ25VQyxPQUFPLEVBQUU7YUFDVDtZQUNERyxVQUFVLEVBQUUscUZBQXFGO1lBQ2pHQyxhQUFhLEVBQUUsNkRBQTZEO1lBQzVFQyxhQUFhLEVBQ1o7V0FDRDtVQUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCRjtVQUNBO1VBQ0E7VUFDQTtVQUNPO1VBQVUsU0FBVUMsT0FBTyxDQUFDO1lBQUVSO1VBQUksQ0FBRTtZQUMxQ0EsSUFBSSxHQUFHRixhQUFLLENBQUNXLGNBQWMsQ0FBQ1QsSUFBSSxDQUFDLEdBQUdGLGFBQUssQ0FBQ0UsSUFBSSxDQUFDLEdBQUdBLElBQUk7WUFFdEQsT0FBT1Usb0JBQUNDLGlCQUFVO2NBQUNYLElBQUksRUFBRUE7WUFBSSxFQUFJO1VBQ2xDO1VBRU87VUFBVSxTQUFVWSxhQUFhLENBQUM7WUFBRVo7VUFBSSxDQUFFO1lBQ2hEQSxJQUFJLEdBQUdGLGFBQUssQ0FBQ1csY0FBYyxDQUFDVCxJQUFJLENBQUMsR0FBR0YsYUFBSyxDQUFDRSxJQUFJLENBQUMsR0FBR0EsSUFBSTtZQUV0RCxPQUFPVSxvQkFBQ0csdUJBQWdCO2NBQUNiLElBQUksRUFBRUE7WUFBSSxFQUFJO1VBQ3hDO1VBRU87VUFBVyxTQUFVYyxTQUFTLENBQUNDLEtBQUs7WUFDMUMsTUFBTUMsS0FBSyxHQUFHO2NBQUUsR0FBR0Q7WUFBSyxDQUFFO1lBQzFCLE9BQU9DLEtBQUssQ0FBQ0MsUUFBUTtZQUNyQixJQUFJRixLQUFLLENBQUNmLElBQUksRUFBRTtjQUNmLElBQUk7Z0JBQUVBO2NBQUksQ0FBRSxHQUFHZSxLQUFLO2NBQ3BCZixJQUFJLEdBQUdGLGFBQUssQ0FBQ1csY0FBYyxDQUFDVCxJQUFJLENBQUMsR0FBR0YsYUFBSyxDQUFDRSxJQUFJLENBQUMsR0FBR0EsSUFBSTtjQUN0RGdCLEtBQUssQ0FBQ2hCLElBQUksR0FBR0EsSUFBSTs7WUFHbEIsT0FBT1Usb0JBQUNRLGtCQUFZO2NBQUEsR0FBS0Y7WUFBSyxHQUFHRCxLQUFLLENBQUNFLFFBQVEsQ0FBZ0I7VUFDaEUiLCJuYW1lcyI6WyJJQ09OUyIsIm1pYyIsImljb24iLCJ2aWV3Qm94Iiwic3RvcCIsImJ1bGxldFBvaW50cyIsImZvcm1hdFRleHQiLCJ0cmFuc2NyaXB0aW9uIiwiaW5zcGlyYXRpb25hbCIsImV4cG9ydHMiLCJBcHBJY29uIiwiaGFzT3duUHJvcGVydHkiLCJSZWFjdCIsIkJleW9uZEljb24iLCJBcHBJY29uQnV0dG9uIiwiQmV5b25kSWNvbkJ1dHRvbiIsIkFwcEJ1dHRvbiIsInByb3BzIiwiYXR0cnMiLCJjaGlsZHJlbiIsIkJleW9uZEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9pY29ucy50cyIsImNvZGUvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=