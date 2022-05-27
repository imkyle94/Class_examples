var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.type = "animal";
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
var animal = new Animal("lion");
console.log(animal);
console.log(animal.getName());
console.log(typeof Animal);
