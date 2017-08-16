var panel = $("#question-area");
// Question set
var questions = [{
  question: "What was the name of the first single the Jackson 5 released with Motown records?",
  answers: ["The love you save " , "I want you back ", "ABC", "I'll be there"],
  correctAnswer:"I want you back"
}, {
  question: "Which of these is NOT a song on the Thriller album?",
  answers: ["P.Y.T", "The girl is Mine ", "Billie Jean ", "Don't stop til you get enough"],
  correctAnswer: "Don't stop til you get enough"
}, {
  question: "What city and state was Micheal Jackson born in?",
  answers: ["Detroit, Michigan", "Chicago Illinois", "Los Angeles, California", "Gary, Indiana"],
  correctAnswer: "Gary, Indiana"
}, {
  question: "Which member of the Jackson 5 left the group?",
  answers: ["Michael", "Tito", "Jermaine", "Jackie"],
  correctAnswer: "Jermaine"
}, {
  question: "Michael Jackson was badly burned while filming a commercial for which popular soft drink?",
  answers: ["Coca-Cola", "Pepsi", "Sprite", "7-up"],
  correctAnswer: "Pepsi"
}, {
  question: "After leaving Motown the Jackson 5 became knowns as the?",
  answers: ["Jackson Brothers", "The Jacksons", "The Jackson 4", "Jackson Family"],
  correctAnswer: "The Jacksons"
}, {
  question: " What is the name of Michael Jackson's first solo album?",
  answers: ["Thriller", "Off the Wall", "Got to be there", "Bad"],
  correctAnswer: "Off the Wall"
}, {
  question: "Which famous entertainer is Michael Jackson's sibling",
  answers: ["Freddy Jackson", "Janet Jackson", "Samuel L. Jackson", "Jesse Jackson"],
  correctAnswer: "Janet Jackson"
  }, {
  question: " What is the name of name of Michael Jackson famous estate?",
  answers: ["Peter Pan", "NeverLand", "Lost Boys", "Magic Land"],
  correctAnswer: "NeverLand"

}];
// Variable that will hold the setInterval
var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 130,
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var k = 0; k < questions[i].answers.length; k++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[k] + "''>" + questions[i].answers[k]);
      }
    }
    panel.append("<button id='done'>Done</button>");
  },
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() === questions[8].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};
// CLICK EVENTS
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});