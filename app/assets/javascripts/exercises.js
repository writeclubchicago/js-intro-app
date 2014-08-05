// // Exercise #1:

// Recreate the guess a number between 1 and 100. Use the prompt box to help you with this.

// For example:
// var guess = prompt("Guess a number");

// Here it is:
// do {
//   var guess = prompt ("Guess a number between 1 and 100.");
//     if (guess > 33) {
//       console.log("Too high");
//     } else if (guess< 33) {
//       console.log("Too low");
//     } else if (guess == 33) {
//       console.log("You got it!")
//     }
// } while (guess != 33);

// for(var i=0; i < 10; i++){
  
  
  
// var x = 33;


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

// Hint: Use a for loop!

// Here it is!
// for(var i = 10; i > 0; i--) {
//    console.log(i);
// }
// console.log ("BLASTOFF!");

//for(start a new variable called i and set it to 0;   run this loop as long as i is less than 10  ;  increase i by 1 each time the loop runs (the first time it increases by 1 is after the first loop))


// Exercise #3:

// 

// Write some code that prints all the numbers in the 'numbers' array to the console.
// Hint: Use a for loop!

// Here it is!
// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// for(var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
 

// Exercise #4:
// HEre it is:
// var sum = 0
// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// for(var i = 0; i < numbers.length; i++){
// var sum = sum + numbers[i]
// } 
// var avg =(sum)/numbers.length

// console.log("The average of the numbers is:");
// console.log(avg);


// Write some code that finds the average of all the numbers in the 'numbers' array.
// Hint: Use a for loop!

// Exercise #5:

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)
// HEre it is:
// function average(array){
// var sum = 0
// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// for(var i = 0; i < array.length; i++){
// var sum = sum + array[i]
// } 
// var avg =(sum)/array.length
// }
// return sum/array.length
// }
// console.log(average(numbers));

// Exercise #6:

// Create an object that represents a particular book.
var book = {
  title: "Hunger Games",
  author: "Mary Liz",
  published: 2000
};
console.log(book);


// Exercise #7:

// Create a constructor that allows you to create many different book objects.
function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
}

var book = new book("Hunger Games", "Myself", "2013")


