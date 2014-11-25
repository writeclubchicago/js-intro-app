// // Exercise #1:

// // Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this.
// // For example:
// // var guess = prompt("Guess a number");

// var guessingGame = function(guesses) {
//   var guessesLeft = guesses;
//   var answer = Math.floor((Math.random() * 100) + 1);
//   for (guessesLeft; guessesLeft > 0; guessesLeft--) {
//     var guess = prompt("Guess a number!");
//     guess = parseInt(guess);
//     if (guess === answer) {
//       console.log("CORRECT! CONGRATULATIONS!");
//       return;
//     } else if (guess > answer) {
//       console.log("Too high!");
//     } else {
//       console.log("Too low!");
//     }
//   }
// }

// guessingGame(10);

// Do the NASA countdown through the console. That is, the console should say:

// // Exercise #2:

// // Do the NASA countdown through the console. That is, the console should say:

// // 10
// // 9
// // 8
// // 7
// // 6
// // 5
// // 4
// // 3
// // 2
// // 1
// // BLASTOFF!

// // Hint: Use a for loop!

// var countdown = function(startNum) {
//   for (var i = startNum; i >= 0; i--) {
//     if (i > 0) {
//       console.log(i); 
//     } else {
//       console.log("BLASTOFF!");
//     }
//   }
// }

// countdown(10);

// // Exercise #2:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// // Write some code that prints all the numbers in the 'numbers' array to the console.

// // Hint: Use a for loop!

// var loop = function(array) {
//   for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

// loop(numbers);

// // Exercise #3:

// // Write code that finds the average of all the numbers in the 'numbers' array.
// // Hint: Use a for loop!

// var averageLoop = function(array) {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   var average = sum / array.length;
//   console.log(average);
// }

// averageLoop(numbers);

// // Exercise #4:

// Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

// // Exercise #5:

// // Implement FizzBuzz in JavaScript.

// var fizzBuzz = function(limit) {
//   for (var i = 1; i <= limit; i++) {
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(100)

// Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
// For example:
// var guess = prompt("Guess a number");

// // Exercise #6:

// // Create a function that accepts two numbers as parameters and returns their sum.

// var addition = function(number1, number2) {
//   var sum = number1 + number2;
//   console.log(sum);
// }

// addition(42, 57);

// // Exercise #7:

// // Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #4, but wrap that code in a function and demonstrate its usage.)

// var numbers = [1, 2, 3];

// var averageLoop = function(array) {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   var average = sum / array.length;
//   console.log(average);
// }

// averageLoop(numbers);

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)

// // Exercise #8:

// // Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.

// var book = {

//   title: "Infinite Jest",
//   author: "David Foster Wallace",
//   isbn: "0-316-92004-5",
//   publicationYear: 1996,
//   catalogInfo: function() {
//     console.log(this.title + " was written by " + this.author + " in " + this.publicationYear + " and has an isbn of " + this.isbn + ".");
//   }

// }

// console.log(book.title);
// console.log(book.author);

// // Exercise #9:

// // Add a function to the above book object that console.logs out all the above information 

// book.catalogInfo();

// // Extra exercises can be found here: http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html 


