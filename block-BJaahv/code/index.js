// Using function to create object

function createUser(name, id, noOfProjects) {
  let user = {};

  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;

  user.getProjects = function () {
    return user.noOfProjects;
  };

  user.changeName = function (newName) {
    let oldName = user.name;
    user.name = newName;

    return oldName;
  };

  user.incrementProject = function (value = 1) {
    user.noOfProjects += value;

    return user.noOfProjects;
  };

  user.decrementProject = function (value = 1) {
    user.noOfProjects -= value;

    return user.noOfProjects;
  };
}

let user1 = createUser("Arya", "E1", 45);
let user2 = createUser("John", "E2", 39);

// prototypal pattern

let userMethods = {
  changeName: function (newName) {
    let oldName = this.name;
    this.name = newName;

    return oldName;
  },

  incrementProject: function (value = 1) {
    this.noOfProjects += value;

    return this.noOfProjects;
  },

  decrementProject: function (value = 1) {
    this.noOfProjects -= value;

    return this.noOfProjects;
  },

  getProjects: function () {
    return this.noOfProjects;
  },
};

function createUser(name, id, noOfProjects) {
  let user = Object.create(userMethods);

  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
}

let user3 = createUser("Rebecca", "E3", 25);
let user4 = createUser("Harley", "E4", 11);

//  Pseudoclassical Way

function createUser(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

createUser.prototype = {
  changeName: function (newName) {
    let oldName = this.name;
    this.name = newName;

    return oldName;
  },

  incrementProject: function (value = 1) {
    this.noOfProjects += value;

    return this.noOfProjects;
  },

  decrementProject: function (value = 1) {
    this.noOfProjects -= value;

    return this.noOfProjects;
  },

  getProjects: function () {
    return this.noOfProjects;
  },
};

let user5 = new createUser("Will", "E5", 35);
let user6 = new createUser("Sharla", "E6", 8);

// class

class User {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }

  changeName(newName) {
    let oldName = this.name;
    this.name = newName;

    return oldName;
  }

  incrementProject(increment = 1) {
    this.noOfProjects += increment;

    return this.noOfProjects;
  }

  decrementProject(increment = 1) {
    this.noOfProjects -= increment;

    return this.noOfProjects;
  }

  getProjects() {
    return this.noOfProjects;
  }
}

let user7 = new User("Will", "E5", 35);
let user8 = new User("Sharla", "E6", 8);
