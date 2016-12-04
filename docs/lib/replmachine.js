import { htmldom } from './htmlmodule'

const VARS = ['exports', 'window', 'document', 'location']

export class REPLMachine {
    /**
     * Initialize new REPL machine
     * @param {String} value Initial input value
     * @param {HTMLInputElement|{value}} input may be any object with the `value` property
     * @param {HTMLOutputElement|{value}} output may be any object with the `value` property
     * @param {Array} vars
     */
    constructor({
        value = '',
        input = htmldom('input', { value }),
        output = htmldom('output'),
        vars = VARS
    } = {}) {
        this.input = input
        this.output = output
        this.vars = vars
    }

    /**
     * Start a single REPL-loop
     * Passes input value to the `read` step
     */
    loop() {
        this.read(this.input.value)
    }

    /**
     * Read the source value and try to make the `evaluable` function from it
     * Passes result to the `eval` step
     * @param {String} source of `evaluable` function
     * @returns {*}
     */
    read(source) {
        try {
            const evaluable = new Function(...this.vars, source)
            this.eval(evaluable)
            return evaluable
        }
        catch(error) {
            this.onerror(error)
            return error
        }
    }

    /**
     * Try to evaluate the `evaluable` function
     * with an `exports` object as the function argument
     * @param {Function} evaluable Combined from an input value source
     * @returns {*}
     */
    eval(evaluable) {
        try {
            const exports = this.constructor.exports
            const value = evaluable(exports) || exports.default
            this.print(value)
            return value
        }
        catch(error) {
            this.onerror(error)
            return error
        }
    }

    /**
     * Try to print the evaluation result
     * @param {*} value
     * @returns {*}
     */
    print(value) {
        try {
            this.output.value = value
            return value
        }
        catch(error) {
            this.output.value = error
            return error
        }
    }

    /**
     * Error handler prints an occured error
     * @param {Error} error
     */
    onerror(error) {
        this.print(error)
    }

    /**
     * Get the `exports` object passed to an evaluable function
     * @returns {{default: (function())}}
     */
    static get exports() {
        return {
            default : () => {
                throw Error('The default module is not exported')
            }
        }
    }
}

Object.defineProperty(REPLMachine.prototype, 'input', { writable : true, value : null })
Object.defineProperty(REPLMachine.prototype, 'output', { writable : true, value : null })
