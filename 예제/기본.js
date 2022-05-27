class Animal {
  constructor(name) {
    this.name = name;
    this.type = "animal";
  }

  getName() {
    return this.name;
  }
}

let animal = new Animal("lion");

console.log(animal);
console.log(animal.getName());
console.log(typeof Animal);
