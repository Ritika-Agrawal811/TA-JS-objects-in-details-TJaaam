class Quiz {
  constructor(root, activeIndex, score, allQuestions = []) {
    this.root = root;
    this.allQuestions = allQuestions;
    this.activeIndex = activeIndex;
    this.score = score;
  }

  addQuestion(question) {
    this.allQuestions.push(question);
  }

  handleClick(currentQuestion) {
    let answer = event.target.getAttribute("value");

    if (answer != null && answer == currentQuestion.getCorrectAnswer()) {
      event.target.classList.add("correct");
    }
  }

  createUI() {
    let currentQuestion = this.allQuestions[this.activeIndex];
    let questionContainer = this.root.querySelector(".question-container");
    questionContainer.append(currentQuestion.createQuestionUI());

    let quesOptions = questionContainer.querySelector("form");

    quesOptions.addEventListener(
      "click",
      this.handleClick.bind(this, currentQuestion)
    );
  }
}

class Question {
  constructor(title, options, correctAnswer) {
    this.title = title;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }

  isCorrect(answer) {
    return answer == this.correctAnswer;
  }
  getCorrectAnswer() {
    return this.correctAnswer;
  }

  createQuestionUI() {
    let question = document.createElement("div");
    let quesOptions = document.createElement("form");

    question.classList.add("quiz-question");
    question.innerHTML = `<p>${this.title}</p>`;

    quesOptions.innerHTML = `
    <label><input type="radio" name="question"/ value="${this.options[0]}"> ${this.options[0]}</label>
    <label><input type="radio" name="question"/ value="${this.options[1]}"> ${this.options[1]}</label>
    <label><input type="radio" name="question"/ value="${this.options[2]}"> ${this.options[2]}</label>
    <label><input type="radio" name="question"/ value="${this.options[3]}"> ${this.options[3]}</label>
    `;

    question.append(quesOptions);

    return question;
  }
}

let root = document.querySelector(".root");

let questionList = new Quiz(root, 0, 0);

let question1 = new Question(
  "What is national bird of India?",
  ["pigeon", "parrot", "peacock", "sparrow"],
  "peacock"
);

questionList.addQuestion(question1);
questionList.createUI();
