// Assignment code here

// character choices
var characters = {
  numbers: "0123456789",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  special: "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}
// stores user length choice
var userLength;

// stores user character choices
var userChoice = "";

// password generator function
function generatePassword() {
  userLength = window.prompt("How long do you want your password to be? Choose a number bewtween 8 and 128");
  console.log(userLength);
  if (userLength < 8 || userLength > 128 || isNaN(userLength)) {
    window.alert("Wrong choice, please try again");
    return ;
  }
  // ask user if they want to include one or all 4 choices in their password
  var userNumbers = window.confirm("Do you want numbers in your password? Click OK ");
  if (userNumbers) {
    userChoice = userChoice + characters.numbers;
  }
  var userUpper = window.confirm("Do you want upper case letters? Click OK");
  if (userUpper) {
    userChoice = userChoice + characters.upperCase;
  }

  var userLower = window.confirm("Do you want lower case letters? Click OK");
  if (userLower) {
    userChoice = userChoice + characters.lowerCase;
  }
  var userSpecial = window.confirm("Do you want special characters? Click OK");
  if (userSpecial) {
    userChoice = userChoice + characters.special;
  }
  console.log(userChoice);

  // where random password will be stored
  var random = "";

  // randomize password function using characters stored in userChoice
  for (var i = 0; i < userLength; i++) {
    random = random + userChoice.charAt(Math.floor(Math.random() * userChoice.length));
  }
  return (random)
};






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
