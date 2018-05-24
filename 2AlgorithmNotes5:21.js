//Task: write an algorithm that reads two values, determines the largest
// value and prints the largest value with an identifying messages. 

// =====================
// Start of my Algorithm 
// =====================
 
//  Step 1: (input) 
// - we need to enter two values 
// - we can call the valueOne and valueTwo.

// step 2: (process) 
// - write varable called MaxNumber.
// - store the values in a variable so we can use it later in our code. 

// - compare the valueOne and valueTwo to each other.
// 	- If valueOne this graet or lest than valueTwo then valueOne is the new MaxNumber.
// - else valuetwo is the new MaxNumber

// //var MaxNumber; it is a bucket and your create a storage for 
// //anything you want to to put in it your creating a max number. so if we 
// //do value one is greater than value two then when we are making a comparison 
// //the and value one is still greated so then vauletwo would be less than value 3 becuase its making it 
// // the next number as we go through the next set of code we
// // increase the greater varable 

//  step 3: (output) 
//  - Log out to the screen this is the MaxNumber

// ========= 
// end 
// ======


function largestValue(valueOne, valueTwo) {
	var MaxNumber;

	if (ValueOne > valueTwo) {
		MaxNumber = valueOne; 
	} else {
		MaxNumber = valueTwo; 
	}
   console.log('here is the largest number' + MaxNumber);
} 
largestvalue(43,40)







