// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to generate password
function generatePassword() {
  // Keep asking user for number of characters in password until valid input (requires valid number to exit while loop)
  var numCharacters = 0;
  while (numCharacters < 8 || numCharacters > 128 || isNaN(numCharacters)) {
    numCharacters = window.prompt("Enter the number of characters you would like your password to contain (at least 8, no more than 128): ");
    console.log(numCharacters);
    console.log(isNaN(numCharacters));

    // If user selects "Cancel" button, return "" as password
    if (numCharacters == null) {   
      return "";
    // If user provides invalid input (letters, special char) or hits "OK" without input
    } else if (isNaN(numCharacters) || numCharacters === "") {
      window.alert("Invalid input. Please enter a number.");
    // If user provides a number, check if it falls outside specified range 
    } else {
      if (numCharacters < 8) { 
        window.alert("Password length must be at least 8 characters.");
      } else if (numCharacters > 128) {
        window.alert("Password length must be at most 128 characters.");
      }
    }
  }

  var lowercaseChar = false;
  var uppercaseChar = false;
  var numeric = false;
  var specialChar = false;

  // Keep asking user to select character type until they have chosen at least one type
  while (!(lowercaseChar || uppercaseChar || numeric || specialChar)) {
    // Inform user that they must select at least one criteria
    window.alert("You must select at least one of the following character types: \n-Lowercase characters \n-Uppercase characters \n-Numbers \n-Special characters");
    // Confirm each criteria
    lowercaseChar = window.confirm("Click OK to confirm including lowercase characters.");
    uppercaseChar = window.confirm("Click OK to confirm including uppercase characters.");
    numeric = window.confirm("Click OK to confirm including numbers.");
    specialChar = window.confirm("Click OK to confirm including special characters.");
  }

  // Create "criteriaSelected" array that holds strings representing which criteria the user has selected to include
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

  // Arrays holding all possible values for lowercase, uppercase, numeric, and special characters
  var lowercaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialSet = [
    '[', ']', '!', '@', '#', '$', '%',
    '^', '&', '*', '(', ')', '_', '+',
    '-', '=', '{', '}', ';', "'", ':',
    '"', '\\', '|', ',', '.', '<', '>',
    '/', '?', '~', '`'
  ];

  var password = "";
  // Using for-loop to repeatedly generate random character and append to password 
  for (var i = 0; i < numCharacters; i++) {
    // Generate random index to determine what character type in "criteriaSelected" will be added to password in this iteration
    var criteriaIdx = Math.floor(Math.random() * criteriaSelected.length);
    if (criteriaSelected[criteriaIdx] === "lower") {
      var charType = lowercaseSet;
    } else if (criteriaSelected[criteriaIdx] === "upper") {
      var charType = uppercaseSet;
    } else if (criteriaSelected[criteriaIdx] === "numeric") {
      var charType = numberSet;
    } else {
      var charType = specialSet;
    }

    // Generate random index to determine which character within the corresponding character type array will be added
    var setIdx = Math.floor(Math.random() * charType.length);
    password = password.concat(charType[setIdx]);
  }
  console.log(password + " length: " + password.length);
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
