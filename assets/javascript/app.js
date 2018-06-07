//  Variable that will hold our setInterval that runs the stopwatch


// prevents the clock from being sped up unnecessarily

var counter = 0;


function startTimer() {

    //  TODO: Use setInterval to start the count here and set the clock to running.
    
    setInterval(count, 1000);
    
  
  }
  
function count() {
	
	counter = counter + 1
	
	console.log("hi! " + counter)
}
  
startTimer()


