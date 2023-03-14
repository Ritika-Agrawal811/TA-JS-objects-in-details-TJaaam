// Prototypal pattern

function createObject(title, options, correctAnswerIndex) {
  let question = Object.create(questionMethods);

  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
}

let questionMethods = {
  isAnswerCorrect: function (index) {
    if (index == this.correctAnswerIndex) {
      return true;
    }

    return false;
  },

  getCorrectAnswer: function () {
    return this.options[correctAnswerIndex];
  },
};

// Pseudoclassical Pattern

function createObject(title, options, correctAnswerIndex) {
  this.title = title;
  this.options = options;
  this.correctAnswerIndex = correctAnswerIndex;
}

createObject.prototype = {
  isAnswerCorrect: function (index) {
    if (index == this.correctAnswerIndex) {
      return true;
    }

    return false;
  },

  getCorrectAnswer: function () {
    return this.options[correctAnswerIndex];
  },
};

let firstQuestion = new createObject(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
let secondQuestion = new createObject(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);

// Using class

class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }

  isAnswerCorrect(answer) {
    if (answer == this.correctAnswerIndex) {
      return true;
    }

    return false;
  }

  getCorrectAnswer() {
    return this.options[correctAnswerIndex];
  }
}

let thirdQuestion = new Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
let fourthQuestion = new Question(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);
