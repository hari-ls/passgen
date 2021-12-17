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

var lowerCase,
  upperCase,
  numeric,
  special,
  criteria = [],
  randomChar,
  charLength = 0,
  randomPassword = [],
  flag,
  character;
// initiliase the character range
lowerCase = "abcdefghijklmnopqrstuvwxyz";
upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numeric = "0123456789";
special = "!@#$%^&*()_+-={}|;:'<,>.?/";

// generate random number
var getRandomChar = function (charSet) {
  randomChar = charSet.charAt(Math.floor(Math.random() * charSet.length));
  console.log(randomChar);
  return randomChar;
};

// get password length
var getPasswordLength = function () {
  while (charLength < 8 || charLength > 128) {
    charLength = window.prompt(
      "Please enter the length of the password \n(must be between 8 to 128 characters)"
    );
  }
};
// confirm lowercase
var includeLowerCase = function () {
  if (
    window.confirm(
      "Do you want to include lowercase characters? \n OK - to include \n Cancel - to exempt"
    )
  ) {
    criteria.push(lowerCase);
  }
};
// confirm uppercase
var includeUpperCase = function () {
  if (
    window.confirm(
      "Do you also want to include uppercase characters? \n OK - to include \n Cancel - to exempt"
    )
  ) {
    criteria.push(upperCase);
  }
};
// confirm numeric
var includeNumeric = function () {
  if (
    window.confirm(
      "Do you also want to include numeric characters? \n OK - to include \n Cancel - to exempt"
    )
  ) {
    criteria.push(numeric);
  }
};
// confirm special
var includeSpecial = function () {
  if (
    window.confirm(
      "And finally do you want to include special characters? \n OK - to include \n Cancel - to exempt"
    )
  ) {
    criteria.push(special);
  }
};
// validate criteria
var validateCriteria = function () {
  while (criteria.length < 1) {
    includeLowerCase(), includeUpperCase(), includeNumeric(), includeSpecial();
  }
};
// generate password
var generatePassword = function () {
  getPasswordLength();
  console.log(charLength);
  validateCriteria();
  for (let i = 0; i < charLength; i++) {
    flag = criteria[Math.floor(Math.random() * criteria.length)];
    // character = getRandomChar(flag);
    randomPassword.push(getRandomChar(flag));
    console.log(flag);
  }
  return randomPassword.join("");
};
// console.log(range);
// console.log(range.length);
// console.log(randomNum);
// getPasswordLength();
// includeLowerCase(), includeUpperCase(), includeNumeric(), includeSpecial();
console.log(typeof charLength);
console.log(charLength < 8 && charLength > 128);
// getPasswordLength();
// validateCriteria();
console.log(criteria);
console.log(randomPassword);
