//If else & else if statement

//Task # 01
// function checkCharacterType(character) {
//   var ascii = character.charCodeAt(0);

//   if (ascii >= 48 && ascii <= 57) {
//     console.log(character + " is a number.");
//   } else if (ascii >= 65 && ascii <= 90) {
//     console.log(character + " is an uppercase letter.");
//   } else if (ascii >= 97 && ascii <= 122) {
//     console.log(character + " is a lowercase letter.");
//   } else {
//     console.log(character + " is not a number or a letter.");
//   }
// }
// var input = prompt("Enter a character:");
// checkCharacterType(input);

//Task # 02
// function compareIntegers(a, b) {
//   if (a > b) {
//     console.log(a + " is larger than " + b + ".");
//   } else if (a < b) {
//     console.log(b + " is larger than " + a + ".");
//   } else {
//     console.log("Both integers are equal.");
//   }
// }
// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));
// compareIntegers(num1, num2);

//Task # 03
//function checkNumber(num) {
//   if (num > 0) {
//     console.log("The number is positive.");
//   } else if (num < 0) {
//     console.log("The number is negative.");
//   } else {
//     console.log("The number is zero.");
//   }
// }
// var input = parseFloat(prompt("Enter a number:"));
// checkNumber(input);

//Task # 04
// function isVowel(character) {
//   var lowercaseChar = character.toLowerCase();

//   if (
//     lowercaseChar === "a" ||lowercaseChar === "e" ||lowercaseChar === "i" || lowercaseChar === "o" ||
//     lowercaseChar === "u"
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// var input = prompt("Enter a character:");
// var result = isVowel(input);
// console.log("Is the character a vowel? " + result);

//Task # 05
// var correctPassword = "mySecretPassword";

// function validatePassword(userPassword) {
//   if (!userPassword) {
//     console.log("Please enter your password.");
//   } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
//   } else {
//     console.log("Incorrect password.");
//   }
// }

// var userPassword = prompt("Enter your password:");
// validatePassword(userPassword);

//Task # 06
// var hour = +prompt("Enter an hour");
// if (hour < 18) {
//   alert("Good day");
// } else {
//   alert("Good evening");
// }

//Task # 07
// var timeInput = prompt("Enter time in 24-hour clock format (e.g., 1900):");
// var time = parseInt(timeInput);

// var hour = Math.floor(time / 100);
// var minute = time % 100;

// var period;

// if (hour >= 0 && hour <= 11) {
//   period = "AM";
//   if (hour === 0) {
//     hour = 12;
//   }
// } else if (hour >= 12 && hour <= 23) {
//   period = "PM";
//   if (hour > 12) {
//     hour -= 12;
//   }
// } else {
//   console.log("Invalid time input.");
//   return;
// }

// console.log("The time in 12-hour clock format is: " + hour + ":" + (minute < 10 ? "0" + minute : minute) + " " + period);


//Task # 08






