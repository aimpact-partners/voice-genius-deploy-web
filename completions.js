System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.5/page", "react@18.2.0", "@aimpact/voice-genius@1.0.0/prompts", "@aimpact/voice-genius@1.0.0/entities", "@aimpact/voice-genius@1.0.0/model", "@beyond-js/react-18-widgets@0.0.5/hooks", "@aimpact/voice-genius@1.0.0/code"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_react) {
      dependency_4 = _react;
    }, function (_aimpactVoiceGenius100Prompts) {
      dependency_5 = _aimpactVoiceGenius100Prompts;
    }, function (_aimpactVoiceGenius100Entities) {
      dependency_6 = _aimpactVoiceGenius100Entities;
    }, function (_aimpactVoiceGenius100Model) {
      dependency_7 = _aimpactVoiceGenius100Model;
    }, function (_beyondJsReact18Widgets005Hooks) {
      dependency_8 = _beyondJsReact18Widgets005Hooks;
    }, function (_aimpactVoiceGenius100Code) {
      dependency_9 = _aimpactVoiceGenius100Code;
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
          "vspecifier": "@aimpact/voice-genius@1.0.0/completions"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@aimpact/voice-genius/prompts', dependency_5], ['@aimpact/voice-genius/entities', dependency_6], ['@aimpact/voice-genius/model', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/voice-genius/code', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "completions-page",
        "vspecifier": "@aimpact/voice-genius@1.0.0/completions",
        "is": "page",
        "route": "/completions"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/voice-genius@1.0.0/completions');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3303386583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1849054209,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _entities = require("@aimpact/voice-genius/entities");
          var _model = require("@aimpact/voice-genius/model");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _code = require("@aimpact/voice-genius/code");
          const model = new _model.AIModel();
          const collection = new _entities.Prompts();
          collection.load();
          /*bundle*/
          function View() {
            const [text, setText] = React.useState('');
            const [processing, setProcessing] = React.useState(false);
            const [completions, setCompletions] = React.useState('');
            const [selectedButton, setSelectedButton] = React.useState(null);
            const [myPrompts, setMyPrompts] = React.useState(collection.items);
            const change = () => setMyPrompts;
            (0, _hooks.useBinder)([collection], change);
            const handleButtonSelection = id => setSelectedButton(id);
            const handleInputChange = event => setText(event.target.value);
            const promptsI = myPrompts; //[...prompts.values()];
            const handleSubmit = async event => {
              event.preventDefault();
              if (!selectedButton || !text || processing) {
                return;
              }
              setProcessing(true);
              const content = promptsI.find(button => {
                console.log(8, button.promptId, selectedButton);
                return button.promptId === selectedButton;
              }).content;
              const result = await model.completions(content, text);
              console.log("result", result);
              setCompletions(result);
              setProcessing(false);
            };
            const entries = promptsI.map(button => React.createElement("button", {
              key: button.promptId,
              onClick: () => handleButtonSelection(button.promptId),
              className: button.promptId === selectedButton ? 'selected' : ''
            }, button.name));
            return React.createElement("div", {
              className: "main"
            }, React.createElement("div", {
              className: "buttons"
            }, entries), React.createElement("form", {
              className: "form-container",
              onSubmit: handleSubmit
            }, React.createElement("textarea", {
              value: text,
              onChange: handleInputChange,
              disabled: processing
            }), React.createElement("button", {
              type: "submit",
              disabled: !selectedButton || !text || processing
            }, processing ? "Processing..." : "Submit")), completions && React.createElement("div", {
              className: "code-section"
            }, React.createElement(_code.CodeBox, {
              language: "ts"
            }, completions), React.createElement("hr", null), React.createElement("button", {
              onClick: () => navigator.clipboard.writeText(completions)
            }, "Copy Code")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S2dDLFNBQVMsRUFBQztZQUFNLEdBQ3BCaEM7Y0FBS2dDLFNBQVMsRUFBQztZQUFTLEdBQUVKLE9BQU8sQ0FBTyxFQUN4QzVCO2NBQU1nQyxTQUFTLEVBQUMsZ0JBQWdCO2NBQUNFLFFBQVEsRUFBRWY7WUFBWSxHQUN0RG5CO2NBQVVpQixLQUFLLEVBQUVuQixJQUFJO2NBQUVxQyxRQUFRLEVBQUVyQixpQkFBaUI7Y0FBRXNCLFFBQVEsRUFBRWxDO1lBQVUsRUFBSSxFQUM1RUY7Y0FBUXFDLElBQUksRUFBQyxRQUFRO2NBQUNELFFBQVEsRUFBRSxDQUFDOUIsY0FBYyxJQUFJLENBQUNSLElBQUksSUFBSUk7WUFBVSxHQUNwRUEsVUFBVSxHQUFHLGVBQWUsR0FBRyxRQUFRLENBQ2hDLENBQ0gsRUFDTkUsV0FBVyxJQUNYSjtjQUFLZ0MsU0FBUyxFQUFDO1lBQWMsR0FDNUJoQyxvQkFBQ3NDLGFBQU87Y0FBQ0MsUUFBUSxFQUFDO1lBQUksR0FBRW5DLFdBQVcsQ0FBVyxFQUM5Q0osK0JBQU0sRUFDTkE7Y0FBUStCLE9BQU8sRUFBRSxNQUFNUyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDdEMsV0FBVztZQUFDLGVBQW9CLENBRXRGLENBQ0k7VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJtb2RlbCIsIkFJTW9kZWwiLCJjb2xsZWN0aW9uIiwiUHJvbXB0cyIsImxvYWQiLCJ0ZXh0Iiwic2V0VGV4dCIsIlJlYWN0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImNvbXBsZXRpb25zIiwic2V0Q29tcGxldGlvbnMiLCJzZWxlY3RlZEJ1dHRvbiIsInNldFNlbGVjdGVkQnV0dG9uIiwibXlQcm9tcHRzIiwic2V0TXlQcm9tcHRzIiwiaXRlbXMiLCJjaGFuZ2UiLCJoYW5kbGVCdXR0b25TZWxlY3Rpb24iLCJpZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb21wdHNJIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb250ZW50IiwiZmluZCIsImJ1dHRvbiIsImNvbnNvbGUiLCJsb2ciLCJwcm9tcHRJZCIsInJlc3VsdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwibmFtZSIsIm9uU3VibWl0Iiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsInR5cGUiLCJDb2RlQm94IiwibGFuZ3VhZ2UiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19