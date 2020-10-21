// Assignment code here

// stores user length choice
var userLength ="";
// stores user character choices
var userChoice = "";

//sets user choices to true and one false so there can be at least one type selected
var userChoiceType = {
  userNumbers = true,
  userUpper = true,
  userSpecial = true,
  userLower = false
}

// password generator function
function generatePassword() {
  var userLength = window.prompt("How long do you want your password to be? Choose a number bewtween 8 and 128");
  console.log(userLength);
  if (userLength < 8 || userLength > 128 || isNaN(userLength)) {
    window.alert("Wrong choice, please try again");
    generatePassword();
  } else {
    // ask user if they want to include one or all 4 choices in their password
    var userNumbers = window.confirm("Do you want numbers in your password?")
    if(userNumbers){
      userChoice = userChoice + characters.numbers;
    }

    var userUpper = window.confirm("Do you want upper case letters?");
    if(userUpper){
      userChoice = userChoice + characters.upperCase;
    }

    var userLower = window.confirm("Do you want lower case letters?");
    if(userLower){
      userChoice = userChoice + characters.lowerCase;
    }
    var userSpecial = window.confirm("Do you want special characters?");
    if(userSpecial){
      userChoice = userChoice + characters.special;
    }
  }
   





  

};

// randomize password function using characters stored in userChoice
function randomCharacters() {
  var value = Math.floor(Math.random() * userChoice.length);
  return value;
}

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

var characters = {
  numbers: "0123456789",
  upperCase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  special: "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}
