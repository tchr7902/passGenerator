const chars = [];
var includeUpper;
var includeLower;
var includeNumbers;
var includeSpecial;

function generatePassword() {
  // password length
  password.length = prompt("Welcome! How many characters would you like your password to be?");
  if (password.length >= 7 && password.length <= 129) {
  } else if (password.length < "8" && password.length > "128") {
    alert("Password length must be between 8 and 128 characters!");
    return;
  } else {
     return;
  }

  // uppercase
  includeUpper = prompt("Would you like to include uppercase letters? Y/N");
  if (includeUpper == "Y") {
    chars.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    } else if (includeUpper == "N") {
      } else {
        alert("Invalid Input!")
        return;
  }

  // lowercase
  includeLower = prompt("Would you like to include lowercase letters? Y/N");
  if (includeLower == "Y") {
    chars.push("abcdefghijklmnopqrstuvwxyz")
    } else if (includeLower == "N") {
      } else {
        alert("Invalid Input!")
        return;
  }

  // numbers
  includeNumbers = prompt("Would you like to include numbers? Y/N");
  if (includeNumbers == "Y") {
    chars.push("1234567890")
    } else if (includeNumbers == "N") {
      } else {
        alert("Invalid Input!")
        return;
  }

  // special
  includeSpecial = prompt("Would you like to include lowercase special characters? Y/N");
  if (includeSpecial == "Y") {
    chars.push("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
    } else if (includeSpecial == "N") {
      } else {
        alert("Invalid Input!")
        return;
  }

  // making password
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
