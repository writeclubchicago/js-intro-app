// // Exercise #1:

// Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this.
// For example:

// var correctNum = Math.floor((Math.random() * 100) + 1);
// console.log(correctNum);
// var guess;
// var tries = 0

// while (tries < 10  && guess !== correctNum) {
// 	    guess = parseInt(prompt("Guess Again"));
// 			tries++;
// 			    if (guess === correctNum) {
// 			  alert("Correct!");
// 			} else if (guess < correctNum) {
// 			  alert("Higher!");
// 			} else if (guess > correctNum) {
// 			  alert("Lower!");
// 			} 
//   }
    





// // Exercise #2:

// Do the NASA countdown through the console. That is, the console should say:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLASTOFF!

// for(var i = 0; i < 11; i++) {
//    console.log(i);
// }
// console.log("Blastoff!!")
// Hint: Use a for loop!

// // Exercise #3:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// for(var i = 0; i < numbers.length; i++) {
//    console.log(numbers[i]);
// }



// Write some code that prints all the numbers in the 'numbers' array to the console.

// Hint: Use a for loop!

// // Exercise #4:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// var x = 0

// for(var i = 0; i < numbers.length; i++) {
//    x += numbers[i];
// }

// console.log(x/numbers.length)

// Write code that finds the average of all the numbers in the 'numbers' array.
// Hint: Use a for loop!

// // Exercise #5:

// Implement FizzBuzz in JavaScript.

// for (var i = 1; i <= 100; i++) {
//     var string = '';
 
//     if (i % 3 === 0) {
//         string += 'Fizz';
//     }
 
//     if (i % 5 === 0) {
//         string += 'Buzz';
//     }
 
    
//     if (string == '') {
//         string += i;
//     }
 
//     console.log(string);
// }

// // Exercise #6:

// Create a function that accepts two numbers as parameters and returns their sum.

// // Exercise #7:

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #4, but wrap that code in a function and demonstrate its usage.)

// function averageArray(numOne, numTwo, numThree, numFour) {
// 	return ((numOne + numTwo + numThree + numFour)/averageArray.length);
// }

// console.log(averageArray(5, 10, 15, 20));

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// var x = 0

// for(var i = 0; i < numbers.length; i++) {
//    x += numbers[i];
// }

// console.log(x/numbers.length)


// // Exercise #8:

// Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.


// var book = {

//   title: "The Eye of the World",
//   author: "Robert Jordan",
//   isbn: "21ENB8ZZ",
//   pages: "789",
//   year: "1989",
//   bookInfo: function () {
//     return this.title + ", " + this.author + ", " + this.year + ", " + this.pages + " pages, " + this.isbn;
//   }

// }

// console.log(book.bookInfo())


// // Exercise #9:

// Add a function to the above book object that console.logs out all the above information 





