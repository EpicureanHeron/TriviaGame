//  Variable that will hold our setInterval that runs the stopwatch


// prevents the clock from being sped up unnecessarily

var counter = 0;

var questionNumber = 0;

newObject = "";

function startTimer() {

    //  TODO: Use setInterval to start the count here and set the clock to running.
    
    setInterval(count, 1000);
    
  
  }
  
function count() {
	
	counter = counter + 1
	
	console.log("hi! " + counter)
}

//Creates and returns objects that are questions
function createQuestionObj(objectName, questionString, guessArr) {
	
	questionNumber ++ 
	
	newObject = {
		 name: objectName,
		 number: questionNumber,
		 mainQuestion: questionString,
		 options: guessArr
	}
	
	return newObject

}
  
//startTimer()



var newQuestion = createQuestionObj("Testing", "How many poots does a pooter poot?", ["1: hey hey", "2: My My"])

var newQuestion2 = createQuestionObj("basterman!", "I Don't know!", ["this is an array", "Baddass", "monster"])
