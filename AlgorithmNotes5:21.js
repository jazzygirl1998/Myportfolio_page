//Write an algorithm to determine a student’s final grade and indicate
//weather it is passing or failing 
// The final grade is calculated as the average of four marks



// ====================
// start me algorithm
// ====================

// step 1: [input]
// - we will input 4 number grades.

// step 2: [process]
// - we will take the 4 quiz grades and add them.
// - lets store the sum of sll the quix grades and store it in a variable.
// -log out the sum to the screen to mskr sure we have the correct sum. 
// - now divide the sum of all quiz grades by 4. 
// - store in a variable

// step 3: [output]
// - below 65% is failing and let the student know that they suck.
// - above 65% is passing and let the student know they they did good this time.

// ====================
// End of my algorithm
// ====================

// ===================
// start my function with the algorithm note
// ==============================

// ==================
// step 1:input
// ===================
// function is a block of coe that does something a piece of code that wants to run.

// function findaverage(gradeOne,gradeTwo,gradeThree, gradeFour){
// } 
// camo way? is when you captitalize the second 
// words entered like for our grade numbers above 


// ========================
// step 2: process
// =======================
 var sumOfAllGrades=gradeOne + gradeTwo + gradeThree + gradeFour;
 ...console.log ('this is the sum of all grades'+ sumOfAllGrades); 

 var averagegrade = sumOfAllGrades /4;
 ...console.log ('this is your grade average' + averagegrade);


//========================
// step #3: output
// =======================
if (averagegrade< 65){
	console.log('let the student know that they suck.');
}else if (averagegrade > 65) {
	console.log('let the student know they they did good this time.');
}

findaverage( 83, 65, 54, 40);


