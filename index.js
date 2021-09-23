var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;


var userName = readlineSync.question(chalk.yellow.bold("What is your name? "));

console.log("Welcome To India Quiz 2021 " + userName + " ");
console.log(chalk.green.bold("Please select the correct option number and hit Enter button"));


function quizGame(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green.bold("Right!"));
    score = score + 1;
    console.log(score);
  } else {
    console.log(chalk.red.bold("Wrong!"));
    score = score;
    console.log(score);
  }

}

// Array of questions //

var questions = [{
  question: "What is Capital of India?\n 1)Mumbai\n 2)Karnataka\n 3)Delhi\n",
  answer: "3"
}, {
  question: "Which animal is the national animal of India?\n 1)Lion\n 2)Tiger\n 3)Elephant\n",
  answer: "2"
}, {
  question: "How many colours are there on the Indian Flag?\n 1)3\n 2)4\n 3)5\n",
  answer: "1"
}, {
  question: "Which festival is celebrated in India as the festival of colours?\n 1)Holi\n 2)Dasara\n 3)Deepavali\n ",
  answer: "1"
}, {
  question: "How many States are there in India?\n 1)29\n 2)28\n 3)27\n ",
  answer: "2"
}, {
  question: "Who is the father of the nation (India)?\n 1)Ramnath Kovind\n 2)Mahatma Gandhi\n 3)Narendra Modi\n ",
  answer: "2"
}, {
  question: "Which is the National animal of India?\n 1)Elephant\n 2)Lion\n 3)Tiger\n",
  answer: "3"
}, {
  question: "Which is the hottest place in India?\n 1)Delhi\n 2)Karnataka\n 3)Rajasthan\n",
  answer: "3"
}, {
  question: "National flower of India?\n 1)Sunflower\n 2)Cherry blossom\n 3)Lotus\n",
  answer: "3"
}, {
  question: "What is the National Currency of India?\n 1)Rupee\n 2)Euro\n 3)Dollar\n",
  answer: "1"
}];

// Loop //

for (var i = 0; i < questions.length; i++) {
  var activeQuestion = questions[i];
  quizGame(activeQuestion.question, activeQuestion.answer)
}

console.log(chalk.black.bgYellow
("Thank you for playing the Quiz! Your score: " + score + "  "));