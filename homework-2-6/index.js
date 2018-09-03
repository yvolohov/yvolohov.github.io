class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }
}

let s = new Student('Vasily', 30);
console.log(s);
