/**
 * Created by KS128 on 11/9/16.
 */

//var questions = [{
//    question: "What is 10*2?",
//    choices: ["10", "20", "30", "40"],
//    correctAnswer: 1
//}, {
//    question: "What is 5*4?",
//    choices: ["5", "10", "25", "20"],
//    correctAnswer: 3
//}, {
//    question: "What is 10 + 8?",
//    choices: ["12", "15", "18", "9"],
//    correctAnswer: 2
//}, {
//    question: "What is 15-6?",
//    choices: ["9", "11", "21", "16"],
//    correctAnswer: 0
//}, {
//    question: "What is 6/2?",
//    choices: ["2", "3", "5", "1"],
//    correctAnswer: 1
//}];

var questions = {
    "totalQuestions": 10,
    "testId": 54,
    "remainingTimeInSecond": 1800,
    "allQuestionsDetailList": [{
        "questionName": "What is GC?",
        "testAnswerId": 531,
        "forReview": false,
        "answersOption": [],
        "questionType": "SUBJECTIVE",
        "givenAnswers": []
    }, {
        "questionName": "Which interface does java.util.Hashtable implement?",
        "testAnswerId": 532,
        "forReview": false,
        "answersOption": ["List", "Set", "Collection", "Map"],
        "questionType": "SINGLE_CHOICE",
        "givenAnswers": []
    }, {
        "questionName": "How many bits are used to represent Unicode?",
        "testAnswerId": 533,
        "forReview": false,
        "answersOption": ["8 bits", "16 bits", "24 bits", "32 bits"],
        "questionType": "MULTIPLE_CHOICE",
        "givenAnswers": []
    }, {
        "questionName": "Which of the following annotation is used to avoid executing Junits ?",
        "testAnswerId": 534,
        "forReview": false,
        "answersOption": ["@explicit", "@ignore", "@avoid", "@NoTest"],
        "questionType": "SINGLE_CHOICE",
        "givenAnswers": []
    }, {
        "questionName": "Which of the following file is called deployment descriptor ?",
        "testAnswerId": 535,
        "forReview": false,
        "answersOption": ["application.xml", "project.xml", "web.xml", "build.xml"],
        "questionType": "MULTIPLE_CHOICE",
        "givenAnswers": []
    }, {
        "questionName": "What is java?",
        "testAnswerId": 536,
        "forReview": false,
        "answersOption": [],
        "questionType": "SUBJECTIVE",
        "givenAnswers": []
    }, {
        "questionName": "Which is a reserved word in the Java programming language?",
        "testAnswerId": 537,
        "forReview": false,
        "answersOption": ["native", "subclasses", "reference", "array", "methods"],
        "questionType": "SINGLE_CHOICE",
        "givenAnswers": []
    }, {
        "questionName": "What is the size of double type ?",
        "testAnswerId": 538,
        "forReview": false,
        "answersOption": [],
        "questionType": "SUBJECTIVE",
        "givenAnswers": []
    }, {
        "questionName": "Which is a valid keyword in java?",
        "testAnswerId": 539,
        "forReview": false,
        "answersOption": ["interface", "string", "Float", "unsigned"],
        "questionType": "SINGLE_CHOICE",
        "givenAnswers": []
    }, {
        "questionName": "Which of the following collection maintain its elements in Natural Sorted order ?",
        "testAnswerId": 540,
        "forReview": false,
        "answersOption": ["HashMap", "TreeMap", "TreeSet", "LinkedHashMap", "LinkedMap", "Vector"],
        "questionType": "MULTIPLE_CHOICE",
        "givenAnswers": []
    }]
}

var currentQuestion = 0;
var correctAnswers = 0;

function generateLi(){
    console.log(" " + questions.allQuestionsDetailList.length);
    var i;
    for(i= 0;i<questions.allQuestionsDetailList.length ;i++){
        $( '<li><a href="#"> '+ (i+1) +' </a></li>').insertBefore("li.nextButton");
    }
    $("li.prevButton").next().find('a').addClass('active');
}
$(document).ready(function () {


    generateLi();
    // Display the first question
    displayCurrentQuestion();


    /**********************************************/
    //$(".pagination li:not(.nextButton,.prevButton)").click(function (){
    //
    //    var aText = $(this).find('a').text();
    //    currentQuestion = parseInt(aText);
    //    currentQuestion--;
    //    var question = questions.allQuestionsDetailList[currentQuestion].questionName;
    //    var questionClass = $(document).find(".quizContainer .quizContainer-inner  .question");
    //
    //    var choiceList = $(document).find(".quizContainer  .quizContainer-inner  .choiceList");
    //    var numChoices = questions[currentQuestion].choices.length;
    //
    //    // Set the questionClass text to the current question
    //    $(questionClass).text(question);
    //
    //    // Remove all current <li> elements (if any)
    //    $(choiceList).find("li").remove();
    //
    //    var choice;
    //    for (i = 0; i < numChoices; i++) {
    //        choice = questions[currentQuestion].choices[i];
    //        $('<li><input type="radio" value=' + i + ' name="dynradio" /><p>' + choice + '</p></li>').appendTo(choiceList);
    //    }
    //    $(this).find("a").addClass('active').parent().siblings().find('a.active').removeClass('active');
    //});
    /**********************************************/


    //On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
            if (currentQuestion < questions.length-1) {
                currentQuestion++;
                $(".pagination").find("li a.active").removeClass('active').parent().next().find('a').addClass('active');
                displayCurrentQuestion();
            }
    });
    // On clicking prev, display the prev question
    $(this).find(".prevButton").on("click", function () {
            if (currentQuestion > 0) {
                currentQuestion--;
                $(".pagination").find("li a.active").removeClass('active').parent().prev().find('a').addClass('active');
                displayCurrentQuestion();
            }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    var question = questions.allQuestionsDetailList[currentQuestion].questionName;
    var questionType = questions.allQuestionsDetailList[currentQuestion].questionType;
    var questionClass = $(document).find(".quizContainer .quizContainer-inner  .question");
    var choiceList = $(document).find(".quizContainer  .quizContainer-inner  .choiceList");
    $(questionClass).text(question);

    //var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question

    //
    //// Remove all current <li> elements (if any)
    //$(choiceList).find("li").remove();
    //
    //var choice;
    //for (i = 0; i < numChoices; i++) {
    //    choice = questions[currentQuestion].choices[i];
    //    $('<li><input type="radio" value=' + i + ' name="dynradio" /><p>' + choice + '</p></li>').appendTo(choiceList);
    //}
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    //$(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    //$(document).find(".quizContainer > .result").show();
    //$(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    //$(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}