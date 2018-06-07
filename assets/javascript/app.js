//  Variable that will hold our setInterval that runs the stopwatch


// prevents the clock from being sped up unnecessarily
//updated each time a quesiton is created
var questionNumber = 0;
//timer
var timerValue = 30
//variablse to be used after the answer is submitted
var correctGuesses;

var incorrectGuesses;

//starts the timer which calls the count function 
function startTimer() {
	//probably should set this to a variable so that I can refer back to it and reset it ? 
    setInterval(count, 1000); 
  }
  
function count() {
	//counts down and updates the screen
	timerValue = timerValue-1
	$(".timer").html(timerValue)
}

//Creates and returns objects that are questions
function createQuestionObj(questionString, guessArr, correctGuessIndex) {	
	newObject = {
		 //questionNumber is a global variable
		 number: questionNumber,
		 //Main question 
		 mainQuestion: questionString,
		 //options for the quesiton
		 options: guessArr,
		 //sets the value for correct guess based of a passed in value, correctGuessIndex which refers back to the guessArr
		 correctGuess: guessArr[correctGuessIndex]
	}
	//updates the question number
	questionNumber ++ 
	//returns the new object
	return newObject
}
 //takes a question (which needs to be an object) as a parameter and writes it to the page
function updatePage(question) {
	//displays question
	$(".question").html(question.mainQuestion)
	//displays all options
	for (i = 0; i < question.options.length; i ++) {		
		var classToUpdate = ".option" + i	
		var optionNumber = i + 1
		$(classToUpdate).html(optionNumber + ": " + question.options[i])	
	}
} 
//basically this is how you can create a quesiton object
var newQuestion = createQuestionObj("How many poots does a pooter poot?", ["hey hey", "My My"], 0)

var newQuestion2 = createQuestionObj("I Don't know!", ["this is an array", "Baddass", "monster"], 1)

startTimer()

updatePage(newQuestion2)
