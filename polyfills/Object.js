//export const values = Object => {
    //console.log('fuck');
    if(!Object.values) Object.values = function(object) {
        return Object.keys(object).map(function(key) {
            return object[key];
        });
    };
//};
