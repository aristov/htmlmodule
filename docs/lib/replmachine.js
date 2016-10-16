import {
    input as htmlinput,
    output as htmloutput
} from './htmlmodule';

const VAR_NAME_EXPORTS = 'exports';

export class REPLMachine {
    constructor({
        value = '',
        input = htmlinput({ value }),
        output = htmloutput(),
    } = {}) {
        this.input = input({ value });
        this.output = output();
        this.loop();
    }
    get exports() {
        return {
            default : () => {
                throw Error('The default module is not exported');
            }
        };
    }
    loop() {
        this.input.oninput = this.oninput.bind(this);
        this.read(this.input.value);
    }
    read(source) {
        try {
            const evaluable = new Function(VAR_NAME_EXPORTS, 'return ' + source);
            this.eval(evaluable);
        }
        catch(error) {
            this.onerror(error);
        }
    }
    eval(evaluable) {
        try {
            const exports = this.exports;
            const result = evaluable(exports);
            this.print(result, exports);
        }
        catch(error) {
            this.onerror(error, evaluable);
        }
    }
    print(result) {
        this.output.value = result;
    }
    oninput() {
        this.read(this.input.value);
    }
    onerror(error, ...args) {
        this.input.invalid = true;
        this.print(error, ...args);
    }
}

Object.defineProperty(REPLMachine.prototype, 'input', { writable : true, value : null });
Object.defineProperty(REPLMachine.prototype, 'output', { writable : true, value : null });
