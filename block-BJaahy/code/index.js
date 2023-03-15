// class Square

class Square {
  constructor(side) {
    this.width = side;
    this.height = side;
  }

  description() {
    alert(`The square is ${this.width} x ${this.height}`);
  }

  calcArea() {
    return this.width * this.height;
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }

  get area() {
    return this.width * this.height;
  }

  static isEqual(sq1, sq2) {
    if (sq1.area == sq2.area) return true;

    return false;
  }
}

let s1 = new Square(6);
let s2 = new Square(7);

console.log(s1);

console.log(s1.area);

s1.area = 64;

console.log(s1.width);

console.log(s1.area);

console.log(Square.isEqual(s1, s2));

// Class User

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set fullName(fullName) {
    if (fullName.length < 5)
      return alert("Full name should be more than 5 characters");

    let name = fullName.split(" ");

    this.firstName = name[0];
    this.lastName = name[1];
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  nameContains(str) {
    if (this.fullName.includes(str)) return true;

    return false;
  }
}

let user1 = new User("Arya", "Stark");
let user2 = new User("John", "Snow");

console.log(user1, user2);

user1.fullName = "Selena Gomez";

console.log(user1.firstName);
console.log(user1.lastName);

user2.fullName = "Joe";

console.log(user2.firstName);
console.log(user2.lastName);

console.log(user1.fullName);
console.log(user2.fullName);

let result = user1.nameContains("Sele");

console.log(result);
