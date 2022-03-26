// Hajime!

// a-z
  var lowercase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

// A-Z
  var uppercase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

// 0-9
  var number = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

// !@#$%^&*(){}[]=<>/,.
// function getSpecial() {
  var special = '!@#$%^&*(){}[]+=<>/,.`~?_-';
  // Returns length of special var
  // return special[Math.floor(Math.random() * special.length)];
// }


// Used for testing
// ---------------------------
// console.log(getLower());
// console.log(getUpper());
// console.log(getNumber());
// console.log(getSpecial());

// ----------------------------------------------------------------------------------------

// GENERATE PASSWORD
function generatePassword() {
  // New Password will go into these strings
  var newPassword = " ";

  var lengthPass = prompt("How many characters would you like? Choose a number 8-128:");

  // Reload if a number is less than 8 or more than 128; Setting up the length
  if(lengthPass < 8 || lengthPass > 128) {
    alert("Please enter a number between 8 and 128")
      // Returns an empty string or the passwordText goes undefined
      return '';
  }

  // Clicking 'Ok' == true; Clicking 'Cancel' == false;
  var lowerPass = confirm("Lowercase letters?");
  var upperPass = confirm("Uppercase letters?");
  var numberPass = confirm("Numbers?")
  var specialPass = confirm("Special characters, too?");

  // Jung Sensei mentioned we'd use the += at some point in this HW and I now see why
  if (lowerPass) {
    newPassword += lowercase;
    // If every if works as inteded, "Working" will be logged to the console
    console.log("Working")
  }
  // Note: you don't need == true, as stating the variable is in and of itself equating to 'true'
  if (upperPass) {
    newPassword += uppercase;
  }

  if (numberPass) {
    newPassword += number;
  }

  if (specialPass) {
    newPassword += special;
  }


  var characterStr = " ";

  for (i = 0; i < lengthPass; i++) {
    // var randomLowercase = Math.floor(Math.random() * getLower());
    newPassword = newPassword += lowercase; // randomLowercase, randomLowercase +1
    console.log("Yes");
  }

  for (i = 0; i < lengthPass; i++) {
    // var randomUppercase = Math.floor(Math.random() * getUpper());
    newPassword = newPassword += uppercase;
    console.log("Yes");
  }

  for (i = 0; i < lengthPass; i++) {
    // var randomNumber = Math.floor(Math.random() * getNumber());
    newPassword = newPassword += number;
    console.log("Yes");
  }

  for (i = 0; i < lengthPass; i++) {
    // var randomSpecial = Math.floor(Math.random() * getSpecial());
    newPassword = newPassword += special;
    console.log("Yes");
  }

  // Return works
  // HOWEVER... it returns the functions entirely into the textarea**
  // return "Password";
  return newPassword;
}


// ---------------------------------------------------------------------------------------- 

// Assignment Code
// Targets the generatePassword button via id
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Calling generatePassword and storing in variable password
  // Starter code has no generatePassword, meaning it must be created <--- The assignment
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Generates password (while the HTML displays it)
  passwordText.value = password;

} 

// Add event listener to generate button
// Running an EventListener to that generateBtn which was declared under Assignment Code
// When button is clicked, it will call the writePassword function
generateBtn.addEventListener("click", writePassword);




// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// "It clicked!" moment: You are creating an EventListener which is CALLING the FUNCTION writePassword. The writePassword is connected with the id "password" in the HTML textarea, or the box WHERE the random password will be GENERATED.
// ANOTHER "It clicked!" moment: Clicking the generateBtn button (#generate) causes the function to be called, and thus the generatePassword only needs to be called in a function. No IF's needed at the start, James.

// note: When adding any new code, console.log() it in order to see that it works. Build up this habit 
