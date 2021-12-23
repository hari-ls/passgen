// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function () {
  console.log(1);
  return;
};
// Initialise variables
var criteria = [],
  randomChar,
  charLength = 0,
  randomPassword = [],
  flag;

// Initiliase the characters set
var charSet = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
};

// Ask - desired length of password - must be between 8 to 128 characters
var getPasswordLength = function () {
  while (charLength < 8 || charLength > 128) {
    charLength = window.prompt(
      "Please enter the length of the password \n(must be between 8 to 128 characters)"
    );
  }
};

// Confirm - include lowercase characters
var includeLowerCase = function () {
  if (
    window.confirm(
      "Do you want to include lowercase characters? \n OK - to include \n Cancel - to exempt"
    )
  ) {
    criteria.push(charSet.lowerCase);
  }
};

// Confirm - include uppercase characters
var includeUpperCase = function () {
  if (
    window.confirm(
      "Do you also want to include uppercase characters? \n OK - to include \n Cancel - to exempt"
    )
  ) {
    criteria.push(charSet.upperCase);
  }
};

// Confirm - include numeric characters
var includeNumeric = function () {
  if (
    window.confirm(
      "Do you also want to include numeric characters? \n OK - to include \n Cancel - to exempt"
    )
  ) {
    criteria.push(charSet.numeric);
  }
};

// Confirm - include special characters
var includeSpecial = function () {
  if (
    window.confirm(
      "And finally do you want to include special characters? \n OK - to include \n Cancel - to exempt"
    )
  ) {
    criteria.push(charSet.special);
  }
};

// Validate - at least one charcter type must be included
var validateCriteria = function () {
  while (criteria.length < 1) {
    includeLowerCase(), includeUpperCase(), includeNumeric(), includeSpecial();
  }
};

// Select random chractor from string
var getRandomChar = function (str) {
  randomChar = str.charAt(Math.floor(Math.random() * str.length));
  return randomChar;
};

// Get user input and generate password
var generatePassword = function () {
  getPasswordLength();
  validateCriteria();
  // Generate password based on user selected length & criteria
  for (let i = 0; i < charLength; i++) {
    flag = criteria[Math.floor(Math.random() * criteria.length)];
    randomPassword.push(getRandomChar(flag));
  }
  // Join the array items to return the password
  return randomPassword.join("");
};
