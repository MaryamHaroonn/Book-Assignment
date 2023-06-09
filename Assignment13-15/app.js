//Arrays

//Task # 01
//var studentNames = [];

//Task # 02
// var studentNames = {
//   names: []
// };

//Task # 03
// var strings = ["apple", "peach", "mango", "banana"];

//Task # 04
// var numbers = [1, 2, 3, 4, 5];

//Task # 05
// var booleanArray = [true, false];

//Task # 06
//var mixedArray = ["potato", 8, true, "carrot", false, 3.14];

//Task # 07
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h3> Qualification:</h3>");

// document.write("<ol>");
// for (let i = 0; i < qualifications.length; i++) {
//   document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ol>");

//Task # 08
// var studentNames = ["Michael", "John", "Tonny"];
// var scores = [400, 360, 450];
// for (var i = 0; i < studentNames.length; i++) {
//   let percentage = (scores[i] / 500) * 100;
//   document.write("Score of "+ studentNames[i] + "is" + scores[i] + "Percentage: " + percentage + "%" + \n );
//   document.write("Score of "+ studentNames[i] + "is" + scores[i] + "Percentage: " + percentage + "%" + \n);
//   document.write("Score of "+ studentNames[i] + "is" + scores[i] + "Percentage: " + percentage + "%" + \n);
  
// }

//Task # 09
// var colors = ["Red", "Green", "Blue", "Yellow", "Orange"];
// console.log("Initial Array: " + colors);

// a. Ask the user for a color to add to the beginning
// var colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(colorToAddBeginning);

// Display the updated array
//console.log("Array after adding color to the beginning: " + colors);

// b. Ask the user for a color to add to the end
// var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
// colors.push(colorToAddEnd);

// Display the updated array
//console.log("Array after adding color to the end: " + colors);

// c. Add two more colors to the beginning
//colors.unshift("Blue", "Pink");

// Display the updated array
//console.log("Array after adding two colors to the beginning: " + colors);

// d. Delete the first color in the array
//colors.shift();

// Display the updated array
//console.log("Array after deleting the first color: " + colors);

// e. Delete the last color in the array
//colors.pop();

// Display the updated array
//console.log("Array after deleting the last color: " + colors);

// f. Ask the user for the index and color to add at that index
// var indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
// var colorToAdd = prompt("Enter the color to add at the specified index:");
// colors.splice(indexToAdd, 0, colorToAdd);

// Display the updated array
//console.log("Array after adding color at the specified index: " + colors);

// g. Ask the user for the index and number of colors to delete
// var indexToDelete = parseInt(prompt("Enter the index from where you want to delete color(s):"));
// var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
// colors.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array
//console.log("Array after deleting color(s) at the specified index: " + colors);

//Task # 15

// var phoneManufacturers = ["Apple", "Vivo","Samsung" "Motorola", "Nokia", "Infinix", "Haier"];
// var dropdownHTML = "<select>";
// for (let i = 0; i < phoneManufacturers.length; i++) {
//   dropdownHTML += "<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>";
// }
// dropdownHTML += "</select>";
//document.write(dropdownHTML);












