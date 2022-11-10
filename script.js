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

  // lowercaseSet
  // uppercaseSet
  // numberSet
  // specialSet

  // if true add to criteria array
  // randomly generate number to decide which index
  // then enter corrresponing if statement
  // randomly generate number to decide which index for the specific element to include
  // keep growing password string

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

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Upon clicking Generate Pwd button, prompt user to input num of characters in pwd
// If user inputs outside range, give alert (>8 <129). If valid, prompt user to confirm special characters
// numeric char
// lower/upper
// if user selects no for everything, have to select one criteria
// output pwd on site
