// Assignment code here

// variables used throughout code
var confirmNumbers;
var confirmSymbols;
var confirmUppercase;
var confirmLowercase;
var choices;

symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
numbers = "1234567890";
alphaLower = "abcdefghijklmnopqrstuvwxyz";
alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword () {

  var passwordLengthPrompt = window.prompt("Please choose the length of your password, Length must be between 8 and 128 characters.");
  passwordLengthPrompt = parseInt(passwordLengthPrompt);


  if (passwordLengthPrompt === null || passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
    window.alert("Please provide a valid answer! Choose a number between 8 and 128.");
    return generatePassword ()
  } else {
    confirmNumbers = confirm("Will your password include numbers?");
    confirmSymbols = confirm("Will your password include symbols?");
    confirmUppercase = confirm("Will your password include uppercase letters?");
    confirmLowercase = confirm("Will your password include lowercase letters?");
  };

  if(!confirmSymbols && !confirmNumbers && !confirmUppercase && !confirmLowercase) {
    choices = alert("you must choose one option")
  }
  // four options selected
  else if (confirmSymbols && confirmNumbers && confirmUppercase && confirmLowercase) {
    choices = symbols.concat(numbers, alphaLower, alphaUpper);
  }
  // three options selected
  else if (confirmSymbols && confirmNumbers && confirmUppercase) {
    choices = symbols.concat(numbers, alphaUpper);
  }

  else if (confirmSymbols && confirmNumbers && confirmLowercase) {
    choices = sumbols.concat(numbers, alphaLower)
  }

  else if (confirmSymbols && confirmLowercase && confirmUppercase) {
    choices = symbols.concat(alphaLower, alphaUpper);
  }

  else if (confirmNumbers && confirmLowercase && confirmUppercase) {
    choices = numbers.concat(alphaLower, alphaUpper);
  }
  // two options selected
  else if (confirmSymbols && confirmNumbers) {
    choices = symbols.concat(numbers);
  }

  else if (confirmSymbols && confirmUppercase) {
    choices = symbols.concat(alphaUpper);
  }

  else if (confirmSymbols && confirmLowercase) {
    choices = symbols.concat(alphaLower);
  }

  else if (confirmNumbers && confirmUppercase) {
    choices = numbers.concat(alphaUpper);
  }

  else if (confirmNumbers && confirmLowercase) {
    choices = numbers.concat(alphaLower);
  }

  else if (confirmUppercase && confirmLowercase) {
    choices = alphaUpper.concat(alphaLower);
  }
  // one option selected
  else if (confirmSymbols) {
    choices = symbols;
  }

  else if (confirmNumbers) {
    choices = numbers;
  }

  else if (confirmUppercase) {
    choices = alphaUpper;
  }

  else if (confirmLowercase) {
    choices = alphaLower;
  };

  var password = [];

  for (var i = 0; i <passwordLengthPrompt; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  var password = password.join("")
  return password;
};

// Get references to the #genereate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
};

// Add event listender to generate button
generateBtn.addEventListener("click", writePassword)