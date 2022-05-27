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

let animal1: Animal = new Animal("lion");

console.log(animal1);
console.log(animal1.getName());
console.log(typeof Animal);
