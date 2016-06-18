if(!'name' in Function.prototype) {
    Object.defineProperty(Function.prototype, 'name', {
        get : function() {
            return this.toString().match(/^function (\w+)/)[1];
        }
    });
}
