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

// Initiliase the characters range
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()_+-={}|;:'<,>.?/";

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
    criteria.push(lowerCase);
  }
};

// Confirm - include uppercase characters
var includeUpperCase = function () {
  if (
    window.confirm(
      "Do you also want to include uppercase characters? \n OK - to include \n Cancel - to exempt"
    )
  ) {
    criteria.push(upperCase);
  }
};

// Confirm - include numeric characters
var includeNumeric = function () {
  if (
    window.confirm(
      "Do you also want to include numeric characters? \n OK - to include \n Cancel - to exempt"
    )
  ) {
    criteria.push(numeric);
  }
};

// Confirm - include special characters
var includeSpecial = function () {
  if (
    window.confirm(
      "And finally do you want to include special characters? \n OK - to include \n Cancel - to exempt"
    )
  ) {
    criteria.push(special);
  }
};

// Validate - at least one charcter type must be included
var validateCriteria = function () {
  while (criteria.length < 1) {
    includeLowerCase(), includeUpperCase(), includeNumeric(), includeSpecial();
  }
};

// Select random chractor from string
var getRandomChar = function (charSet) {
  randomChar = charSet.charAt(Math.floor(Math.random() * charSet.length));
  return randomChar;
};

// Get user input and generate password
var generatePassword = function () {
  getPasswordLength();
  validateCriteria();

  for (let i = 0; i < charLength; i++) {
    flag = criteria[Math.floor(Math.random() * criteria.length)];
    randomPassword.push(getRandomChar(flag));
  }

  return randomPassword.join("");
};
