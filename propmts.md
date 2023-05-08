var name = 'React';
var content = `Follow these guidelines as an experienced TypeScript/React programmer:

- Export React components using the "export" keyword, like "export function Component".
- Avoid placing logic inside the return statement. Instead, create separate components for different cases and conditionally render them outside the return statement.
- The useBinder hook binds a specified event to a given list of objects and automatically cleans up the event listeners when the component is unmounted. It accepts three arguments: an array of objects to bind the event to, a callback function to be executed when the event is fired, and an optional event string (default is 'change'). To use it, simply call useBinder in your functional component with the desired parameters.
- Avoid using default exports, inline CSS, and styled components.
- Use BEM style for CSS classes.
- Each React component should be defined in its own file with a name following the snake-case convention based on the component name.
- When requested to provide code, only provide the code in plain text format with the option to copy it, without further explanation.
- import react with the next sintax: “import \* as React from ‘react’;”
- import useBinder with the next syntax: “import {useBinder} from ‘@beyond-js/react-18-widgets/hooks’;”`;

var {Prompt} = await bimport('@aimpact/voice-genius/entities');
var item = new Prompt();
await item.save({name: name, content: content});

---

var name = 'Models';
var content = `Create the code example with the following characteristics, please only generate the code and ignore any description about it:

- Import the Item class of the corresponding module.
- Define the object “User” extending the ReactiveModel object.
- Use the @reactiveProps decorator to make properties reactive.
- Implement any additional methods or functionality specific to your model.
- Add the magic comment /_bundle_/ between the "export" and "class" keywords.
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

var {Prompt} = await bimport('@aimpact/voice-genius/entities');
var item = new Prompt();
await item.save({name: name, content: content});

---

var name = 'Item';
var content = `
Create the code example with the following characteristics, please only generate the code and ignore any description about it:

- Import the Collection class of the corresponding module.
- Define the object “MyCollection” extending the Collection object.
- Implement any additional methods or functionality specific to your model.
- Add the magic comment /_bundle_/ between the "export" and "class" keywords.
- Import the Item with the following line: "import { Collection } from "@beyond-js/reactive/entities";".

Here's a brief example of an item object:

import { Collection } from "@beyond-js/reactive/entities";
import { MyItem } from "./item";

interface IMyCollection {
items: MyItem[];
}
export /_bundle_/ class MyCollection extends Collection {
item = MyItem;
protected storeName = "myStore";
protected db = "myDB";
constructor() {
super();
this.init();
}
}
`;

var {Prompt} = await bimport('@aimpact/voice-genius/entities');
var item = new Prompt();
await item.save({name: name, content: content});

---

var name = 'Collection';
var content = `
Create the code example with the following characteristics, please only generate the code and ignore any description about it:

- Import the Collection class of the corresponding module.
- Define the object “MyCollection” extending the Collection object.
- Implement any additional methods or functionality specific to your model.
- Add the magic comment /_bundle_/ between the "export" and "class" keywords.
- Import the Item with the following line: "import { Collection } from "@beyond-js/reactive/entities";".

Here's a brief example of an item object:

    import { Collection } from "@beyond-js/reactive/entities";
    import { MyItem } from "./item";

    interface IMyCollection {
      items: MyItem[];
    }
    export /*bundle*/ class MyCollection extends Collection {
      item = MyItem;
      protected storeName = "myStore";
      protected db = "myDB";
      constructor() {
    	super();
    	this.init();
      }
    }

`;

var {Prompt} = await bimport('@aimpact/voice-genius/entities');
var item = new Prompt();
await item.save({name: name, content: content});

---

// Collection

var {Prompts} = await bimport('@aimpact/voice-genius/entities');
var collection = new Prompts();
await collection.load();
collection.items
