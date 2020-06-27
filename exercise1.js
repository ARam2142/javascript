//Complete the following problems: 

// Problem 1:
/* Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. 
Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.*/

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

//your code...


//converts temperature from celcius to fahrenheit
function convertToF(fahrenheit) {
    var fTemp = fahrenheit;
    var conToCels = Math.round((fTemp - 32) * 5/9);
    console.log(conToCels);
 
 }
 
 //converts temperature from fahrenheit to celsius
 function convertToC(celsius) {
     //variable cTemp holds celsius
     var cTemp = celsius;
     var conToFahr = Math.round(cTemp * 5/9 +32);
     console.log(conToFahr);
 }
 
 convertToF(70);
 convertToC(27);


/************************************************************* */
// Problem 2:
/* Write a JavaScript function to determine if someone is old enough to vote. 
Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"*/

//your code...

//must be at least 18 years old to vote

//Input: "01/01/1985"
//Output: boolean true/false whether this person is 18 years at least or older

// 17 == '17' => true
//17 === '17' => false
'01/01/2018'
function isOldEnoughToVote(dob) {
    //COnvert dob string to date object
    var birthDate = new Date(dob);
    var today = new Date();

    //if year is 16 years ago or less return false
    var birthYear = birthDate.getFullYear();
    var currentYear = today.getFullYear();
    if(currentYear - birthYear < 17) {
        return false;
    }
    //if it is more than 18 reutrn true
    if(currentYear - birthYear > 17) {
        return true;
    }//Because of return statements if we make it here in code we know the number MUST be 17
    //If year is exctly 17 --special case
    //compare to see if the current month is greaterthan birth month if so then van vote, if not if above then cant vote if same
    var birthMonth = birthDate.getMonth();
    var currentMonth = today.getMonth();
    if(birthMonth < currentMonth) {
        return true;
    }
    if(birthMonth > currentMonth) {
        return false;
    }

    //If we have made it here in our code we know dob in this year and this month, compare days
    var birthDay= birthDate.getDate();
    var currentDay = today.getDate();
    if(birthDay > currentDay) {
        return false;
    }
   return true;
}
 function betterIs18(dob) {
    var birthdate = moment(dob);
    var wouldBe18On = moment().subtract(18, 'years');
    return birthdate.isBefore(wouldBe18On);
 }





/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...







/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...





/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...






/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.


//your code...




/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...


/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...



// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".

/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
const operations = [];
function doMath() {};


