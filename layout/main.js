System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.5/base", "react@18.2.0", "dayjs@1.11.7"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets005Base) {
      dependency_3 = _beyondJsReact18Widgets005Base;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_dayjs2) {
      dependency_5 = _dayjs2;
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
          "vspecifier": "@aimpact/voice-genius@1.0.0/layout/main"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['react', dependency_4], ['dayjs', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "voice-genius",
        "vspecifier": "@aimpact/voice-genius@1.0.0/layout/main",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/voice-genius@1.0.0/layout/main');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2328700451,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _views.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/footer
      ******************************/

      ims.set('./views/footer', {
        hash: 3418619799,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Footer = Footer;
          var React = require("react");
          var _dayjs = require("dayjs");
          function Footer() {
            return React.createElement("footer", {
              id: "layout__footer"
            }, React.createElement("div", {
              className: "footer__container"
            }, "\u00A9copytight AImpact ", (0, _dayjs.default)().format("YYYY")), " ");
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2033196490,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = Layout;
          var React = require("react");
          var _footer = require("./footer");
          function Layout() {
            return React.createElement("div", {
              id: "main-layout"
            }, React.createElement("main", {
              className: "main-container"
            }, React.createElement("beyond-layout-children", null)), React.createElement(_footer.Footer, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUVPO1VBQVUsTUFDWEEsVUFBVyxTQUFRQywyQkFBcUI7WUFDMUMsSUFBSUMsTUFBTTtjQUNOLE9BQU9DLGFBQU07WUFDakI7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JEO1VBQ0E7VUFDTSxTQUFVQyxNQUFNO1lBQ3JCLE9BQ0NDO2NBQVFDLEVBQUUsRUFBQztZQUFnQixHQUMxQkQ7Y0FBS0UsU0FBUyxFQUFDO1lBQW1CLCtCQUFxQixrQkFBSyxHQUFFLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBTyxFQUFDLEdBQUcsQ0FDaEY7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQTtVQUNBO1VBVU0sU0FBVU4sTUFBTTtZQUNyQixPQUNDRztjQUFLQyxFQUFFLEVBQUM7WUFBYSxHQUNwQkQ7Y0FBTUUsU0FBUyxFQUFDO1lBQWdCLEdBQy9CRixtREFBMEIsQ0FDcEIsRUFDUEEsb0JBQUNELGNBQU0sT0FBRyxDQUNMO1VBRVIiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsIkZvb3RlciIsIlJlYWN0IiwiaWQiLCJjbGFzc05hbWUiLCJmb3JtYXQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy92aWV3cy9mb290ZXIudHN4IiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdfQ==