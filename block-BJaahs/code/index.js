// without Objects

// Question 1
let title1 = "What is national bird of India?";
let options1 = ["pigeon", "parrot", "peacock", "dove"];
let correctAnswerIndex1 = 2;

function isAnswerCorrect1(index) {
  if (index == correctAnswerIndex1) {
    return true;
  }

  return false;
}

function getCorrectAnswer1() {
  return options1[correctAnswerIndex1];
}

// Question 2
let title2 = "What is national animal of India?";
let options2 = ["fox", "tiger", "elephant", "deer"];
let correctAnswerIndex2 = 1;

function isAnswerCorrect2(index) {
  if (index == correctAnswerIndex2) {
    return true;
  }

  return false;
}

function getCorrectAnswer2() {
  return options2[correctAnswerIndex2];
}

// Organize using object

let question1 = {
  title: "What is national bird of India?",
  options: ["pigeon", "parrot", "peacock", "dove"],
  correctAnswerIndex: 2,
  isAnswerCorrect: function (index) {
    if (index == question1.correctAnswerIndex) {
      return true;
    }

    return false;
  },
  getCorrectAnswer: function () {
    return question1.options[question1.correctAnswerIndex];
  },
};

let question2 = {
  title: "What is national animal of India?",
  options: ["fox", "tiger", "elephant", "deer"],
  correctAnswerIndex: 1,
  isAnswerCorrect: function (index) {
    if (index == question2.correctAnswerIndex) {
      return true;
    }

    return false;
  },
  getCorrectAnswer: function () {
    return question2.options[question2.correctAnswerIndex];
  },
};

// Use a function to create object

function createObject(title, options, correctAnswerIndex) {
  let question = {};

  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;

  question.isAnswerCorrect = function (index) {
    if (index == question.correctAnswerIndex) {
      return true;
    }

    return false;
  };

  question.getCorrectAnswer = function () {
    return question.options[question.correctAnswerIndex];
  };

  return question;
}

let birdQuestion = createObject(
  "What is national bird of India?",
  ["pigeon", "parrot", "peacock", "dove"],
  2
);

let animalQuestion = createObject(
  "What is national animal of India?",
  ["fox", "tiger", "elephant", "deer"],
  1
);

// Convert the function to use `this` keyword

function createObject(title, options, correctAnswerIndex) {
  let question = {};

  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;

  question.isAnswerCorrect = function (index) {
    if (index == this.correctAnswerIndex) {
      return true;
    }

    return false;
  };

  question.getCorrectAnswer = function () {
    return this.options[this.correctAnswerIndex];
  };

  return question;
}

// test

const testData = createObject(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);

const testData2 = createObject(
  "Where is the capital of India",
  ["Lucknow", "Mumbai", "Kolkata", "Delhi"],
  3
);

testData.correctAnswerIndex(3);
testData.getCorrectAnswer();

testData2.correctAnswerIndex(3);
testData2.getCorrectAnswer();
