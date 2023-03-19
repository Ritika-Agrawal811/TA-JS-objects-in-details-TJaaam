class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  eat() {
    alert("time to eat");
  }

  sleep() {
    alert("time to sleep");
  }

  walk() {
    alert("I can walk.");
  }
}

class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }

  createArt() {
    alert("time to create an art");
  }
}

class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }

  teach() {
    alert("time to teach");
  }
}

class Player extends Person {
  constructor(name, age, gender, sportsName) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }

  play() {
    alert("time to play");
  }
}

class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender, sportsName);
    this.teamName = teamName;
  }

  playCricket() {
    alert("time to play cricket");
  }
}
