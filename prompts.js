System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, analyzer, prompts, item, model, __beyond_pkg, hmr;
  _export({
    analyzer: void 0,
    prompts: void 0,
    item: void 0,
    model: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
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
          "vspecifier": "@aimpact/voice-genius@1.0.0/prompts"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./analyzer
      **************************/
      ims.set('./analyzer', {
        hash: 34538071,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.analyzer = void 0;
          /*bundle*/
          const analyzer = "Eres un analizador de mensajes que convierte un {texto} en un código de programación json.\n" + "El {texto} es un mensaje que está enviando un usuario a otro usuario llamado Max. El {texto} puede incluir también tareas que debe realizar Nicolás (su asistente virtual).\n" + "Tu trabajo es identificar a quién va dirigido el mensaje (Max, Nicolás o a ambos), y crear un código de programación json que se utilizará para invocar una API. No debes preocuparte por la API, sólo por la generación del json.\n" + 'El json debe tener sólo tres propiedades, "max", "nicolas" y "error", todas las propiedades son de tipo string.\n' + "\n" + '. La propiedad "nicolas" puede ser nula, o contener sólo el detalle de la tarea que el usuario le ha solicitado a Nicolás.\n' + '. La propiedad "max" puede ser nula, o contener sólo el mensaje que el usuario le está enviando a Max.\n' + "\n" + "En primera instancia, la conversación está dirigida a Max, pero el usuario podría solicitarle a Nicolás una tarea en la misma conversación. Por lo tanto, si Nicolás no es mencionado, el mensaje es completamente dirigido a Max.\n" + "\n" + "Concéntrate en todo el texto, ya que el usuario puede solicitarle a Nicolás una tarea en cualquier momento de la conversación simplemente mencionando su nombre.\n" + "Quiero sólo el json, ningún otro tipo de contenido incluyendo el pre-text y post-text, ya que tu respuesta debe poder ser parseada (JSON.parse(response)) de manera directa.";
          exports.analyzer = analyzer;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2741050789,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.prompts = void 0;
          var _model = require("./model");
          var _item = require("./item");
          var _analyzer = require("./analyzer");
          const _prompts = new Map();
          _prompts.set('models', {
            id: 'models',
            name: 'Models',
            content: _model.model
          });
          _prompts.set('item', {
            id: 'item',
            name: 'Item',
            content: _item.item
          });
          _prompts.set('styles', {
            id: 'styles',
            name: 'Styles',
            content: 'This is the styles context'
          });
          _prompts.set('analyzer', {
            id: 'analyzer',
            name: 'Analyzer',
            content: _analyzer.analyzer
          });
          /*bundle*/
          const prompts = _prompts;
          exports.prompts = prompts;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 3393319048,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.item = void 0;
          /*bundle*/
          const item = `
Create the  code example with the following characteristics, please only generate the code and ignore any description about it:

- Import the Item class of the corresponding module.
- Define the object “User” extending  the ReactiveModel object.
- Use the @reactiveProps decorator to make properties reactive.
- Implement any additional methods or functionality specific to your model.
- Add the magic comment /*bundle*/ between the "export" and "class" keywords.
- Import the Item with the following line: "import { Item } from "@beyond-js/reactive/entities";".
- The properties of the object are: “id, name, lastname, username, password”.

Here's a brief example of an item object:

    import { Item } from "@beyond-js/reactive/entities";
    import { MyModelProvider } from "my-provider";

    interface IMyModelProps {
        name?: string;
        password: string;
        lastnames: string;
    }

    export /*bundle */ class MyModel extends Item<IMyModelProps> {
        protected properties = ["id", "name", "lastname"];

        protected storeName = "mymodel";
        protected db = "test";

        constructor({ id = undefined } = {}) {
            super(id);
            this.provider = new MyModelProvider();
            this.init({ id });
        }
    }
`;
          exports.item = item;
        }
      });

      /***********************
      INTERNAL MODULE: ./model
      ***********************/

      ims.set('./model', {
        hash: 3233712984,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.model = void 0;
          /*bundle*/
          const model = `
    You are a programmer with extensive experience in software architecture and typescript/react. Create the best code possible.
    To create a model object that extends from the ReactiveModel, follow these steps:
    
    - Import the ReactiveModel class from the corresponding module.
    - Define a new class that extends the ReactiveModel class, specifying the type of the properties as a generic parameter.
    - In the new class, define the properties and their initial values. Use the @reactiveProps decorator to make the properties reactive.
    - Implement any additional methods or functionality specific to your model.
    - add the /*bundle*/ magic comment between the “export” and “class” keywords
    - import the ReactiveModel with the next line: “import {ReactiveModel} from ‘@beyond-js/reactive/model’;”
    just generate the ts code
    Here is a brief example:
    
    import {ReactiveModel} from ‘@beyond-js/reactive/model’;
    
    interface MyModelProps {
      name: string;
      age: number;
      active: boolean;
    }
    
    Export /*bundle*/ class MyModel extends ReactiveModel<MyModelProps> {
      @reactiveProps<MyModelProps>(["name", "age", "active"])
      name: string = "";
      age: number = 0;
      active: boolean = false;
    
      // Add any additional methods or functionality specific to your model here
    }
`;
          exports.model = model;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./analyzer",
        "from": "analyzer",
        "name": "analyzer"
      }, {
        "im": "./index",
        "from": "prompts",
        "name": "prompts"
      }, {
        "im": "./item",
        "from": "item",
        "name": "item"
      }, {
        "im": "./model",
        "from": "model",
        "name": "model"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'analyzer') && _export("analyzer", analyzer = require ? require('./analyzer').analyzer : value);
        (require || prop === 'prompts') && _export("prompts", prompts = require ? require('./index').prompts : value);
        (require || prop === 'item') && _export("item", item = require ? require('./item').item : value);
        (require || prop === 'model') && _export("model", model = require ? require('./model').model : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPO1VBQ1AsTUFBTUEsUUFBUSxHQUNaLDhGQUE4RixHQUM5RiwrS0FBK0ssR0FDL0ssc09BQXNPLEdBQ3RPLG1IQUFtSCxHQUNuSCxJQUFJLEdBQ0osOEhBQThILEdBQzlILDBHQUEwRyxHQUMxRyxJQUFJLEdBQ0osc09BQXNPLEdBQ3RPLElBQUksR0FDSixvS0FBb0ssR0FDcEssOEtBQThLO1VBQUNDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JqTDtVQUNBO1VBQ0E7VUFFQSxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1VBQzFCRCxRQUFRLENBQUNFLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFBQ0MsRUFBRSxFQUFFLFFBQVE7WUFBRUMsSUFBSSxFQUFFLFFBQVE7WUFBRUMsT0FBTyxFQUFFQztVQUFLLENBQUMsQ0FBQztVQUN0RU4sUUFBUSxDQUFDRSxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQUNDLEVBQUUsRUFBRSxNQUFNO1lBQUVDLElBQUksRUFBRSxNQUFNO1lBQUVDLE9BQU8sRUFBRUU7VUFBSSxDQUFDLENBQUM7VUFDL0RQLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUFDQyxFQUFFLEVBQUUsUUFBUTtZQUFFQyxJQUFJLEVBQUUsUUFBUTtZQUFFQyxPQUFPLEVBQUU7VUFBNEIsQ0FBQyxDQUFDO1VBQzdGTCxRQUFRLENBQUNFLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFBQ0MsRUFBRSxFQUFFLFVBQVU7WUFBRUMsSUFBSSxFQUFFLFVBQVU7WUFBRUMsT0FBTyxFQUFFUDtVQUFRLENBQUMsQ0FBQztVQUV4RTtVQUFXLE1BQU1VLE9BQU8sR0FBR1IsUUFBUTtVQUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWcEM7VUFDUCxNQUFNUSxJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQ1o7VUFBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNLO1VBQ1AsTUFBTU8sS0FBSyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTZCYjtVQUFDUCIsIm5hbWVzIjpbImFuYWx5emVyIiwiZXhwb3J0cyIsIl9wcm9tcHRzIiwiTWFwIiwic2V0IiwiaWQiLCJuYW1lIiwiY29udGVudCIsIm1vZGVsIiwiaXRlbSIsInByb21wdHMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImFuYWx5emVyLnRzIiwiaW5kZXgudHMiLCJpdGVtLnRzIiwibW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=