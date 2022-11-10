// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var numCharacters = 0;
  while (numCharacters < 8 || numCharacters > 128){
    numCharacters = window.prompt("Enter the number of characters you would like your password to contain (at least 8, no more than 128): ");
    if (numCharacters < 8) {
      window.alert("Password length must be at least 8 characters.");
    } else if (numCharacters > 128) {
      window.alert("Password length must be no more than 128 characters.");
    }
  }
  
  var lowercaseChar = false;
  var uppercaseChar = false;
  var numeric = false; 
  var specialChar = false;

  while (!(lowercaseChar||uppercaseChar||numeric||specialChar)) {
    lowercaseChar = window.confirm("Click OK to confirm including lowercase characters.");
    uppercaseChar = window.confirm("Click OK to confirm including uppercase characters.");
    numeric = window.confirm("Click OK to confirm including numbers.");
    specialChar = window.confirm("Click OK to confirm including special characters.");

    if (!specialChar && !lowercaseChar && !uppercaseChar) {
      window.alert("You must select at least one character type.");
    }
  }

  // Create criteriaSelected array that holds which criteria user has selected to include
  var criteriaSelected = [];
  if (lowercaseChar) {
    criteriaSelected.push("lower");
  } 
  if (uppercaseChar) {
    criteriaSelected.push("upper")
  }
  if (numeric) {
    criteriaSelected.push("numeric");
  }
  if (specialChar) {
    criteriaSelected.push("special");
  }
  console.log(criteriaSelected);

  var password = "";
  lowercaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  uppercaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  numberSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  specialSet = [
    '[', '`', '!', '@',  '#', '$', '%',
    '^', '&', '*', '(',  ')', '_', '+',
    '-', '=', '[', ']',  '{', '}', ';',
    "'", ':', '"', '\\', '|', ',', '.',
    '<', '>', '/', '?',  '~', ']', '/'
  ];
  for (var i = 0; i < numCharacters; i++) {
      criteriaIdx = Math.floor(Math.random() * criteriaSelected.length);
      if (criteriaSelected[criteriaIdx] === "lower") {
        // generate new rand # b/w 0-25
        setIdx = Math.floor(Math.random() * lowercaseSet.length);
        password = password.concat(lowercaseSet[setIdx]);
      } else if (criteriaSelected[criteriaIdx] === "upper") {
        setIdx = Math.floor(Math.random() * uppercaseSet.length);
        password = password.concat(uppercaseSet[setIdx]);
      } else if (criteriaSelected[criteriaIdx] === "numeric") {
        setIdx = Math.floor(Math.random() * numberSet.length);
        password = password.concat(numberSet[setIdx]);
      } else {
        setIdx = Math.floor(Math.random() * specialSet.length);
        password = password.concat(specialSet[setIdx]);
      }
  }
  console.log(password);
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
