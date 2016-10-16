import { REPLMachine } from './REPLMachine';
import { main, div } from './htmlmodule';
import { codebox, markupbox } from './codemirror';

// const replmachine = new REPLMachine;

export class HTMLREPLMachine extends REPLMachine {

}

export const repl = () =>
    main({
        className : 'replmachine',
        children : [
            div({
                className : 'panel',
                children : codebox().element
            }),
            div({
                className : 'panel',
                children : markupbox().element
            })
        ]
    });
