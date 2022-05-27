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

let animal = new Animal("lion");

console.log(animal);
console.log(animal.getName());
console.log(typeof Animal);
