let animalMethods = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },

  changeLocation: function (newLocation) {
    this.location = newLocation;
  },

  summary: function () {
    return returns`I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};

let dogMethods = {
  bark: function () {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName: function (newName) {
    this.name = newName;
  },

  changeColor: function (newColor) {
    this.color = newColor;
  },

  summary: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

Object.setPrototypeOf(dogMethods, animalMethods);

let catMethods = {
  meow: function () {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName: function (newName) {
    this.name = newName;
  },

  changeColorOfEyes: function (newColor) {
    this.colorOfEyes = newColor;
  },

  summary: function () {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};

Object.setPrototypeOf(catMethods, animalMethods);

function createAnimal(location, numberOfLegs) {
  let animal = Object.create(animalMethods);

  animal.location = location;
  animal.numberOfLegs = numberOfLegs;
}

function createDog(name, color, location, numberOfLegs) {
  let dog = Object.create(dogMethods);

  dog.name = name;
  dog.color = color;
  dog.location = location;
  dog.numberOfLegs = numberOfLegs;
}

function createCat(name, colorOfEyes, location, numberOfLegs) {
  let cat = Object.create(catMethods);

  cat.name = name;
  cat.colorOfEyes = colorOfEyes;
  cat.location = location;
  cat.numberOfLegs = numberOfLegs;
}
