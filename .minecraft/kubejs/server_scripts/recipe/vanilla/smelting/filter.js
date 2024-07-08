// priority: 1000

const Filters = {
    generic: function(type, output) {
        return {type: type, output: output};
    },
    smelting: function(output) {
        return this.generic("minecraft:smelting", output);
    }
};