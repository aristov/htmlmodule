import { input as htmlinput, output as htmloutput } from './htmlmodule';

const VAR_NAME_EXPORTS = 'exports';

export class REPLMachine {
    constructor({
        value = '',
        input = htmlinput({ value }),
        output = htmloutput(),
    } = {}) {
        this.input = input;
        this.output = output;
    }
    get exports() {
        return {
            default : () => {
                throw Error('The default module is not exported');
            }
        };
    }
    loop() {
        this.read(this.input.value);
    }
    read(source) {
        try {
            const evaluable = new Function(VAR_NAME_EXPORTS, 'return ' + source);
            this.eval(evaluable);
            return evaluable;
        }
        catch(error) {
            this.onerror(error);
            return error;
        }
    }
    eval(evaluable) {
        try {
            const exports = this.exports;
            const value = evaluable(exports);
            this.print(value);
            return value;
        }
        catch(error) {
            this.onerror(error);
            return error;
        }
    }
    print(value) {
        try {
            this.output.value = value;
            return true;
        }
        catch(error) {
            this.output.value = error;
            return false;
        }
    }
    onerror(error) {
        this.print(error);
    }
}

const proto = REPLMachine.prototype;
proto.input = null;
proto.output = null;
