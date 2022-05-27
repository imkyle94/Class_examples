class Animal {
  name: string;
  type: string;

  constructor(name: string) {
    this.name = name;
    this.type = "animal";
  }

  getName() {
    return this.name;
  }
}

class Lion extends Animal {
  constructor(name: string) {
    super(name);
    this.type = "lion";
  }
}

let animal = new Animal("lion");
let lion = new Lion("king");

console.log(animal);
console.log(animal.getName());
console.log(typeof Animal);

console.log(lion);
console.log(lion.getName());
console.log(typeof Lion);
