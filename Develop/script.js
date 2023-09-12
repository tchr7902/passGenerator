var chars = [];
var includeUpper;
var includeLower;
var includeNumbers;
var includeSpecial;
var passLength;

function generatePassword() {
  // Initialize an empty password
  var password = '';

  // Password length
  passLength = prompt("Welcome! How many characters would you like your password to be?");
  passLength = parseInt(passLength);

  if (passLength >= 8 && passLength <= 128) {
    
    // Uppercase
    includeUpper = prompt("Would you like to include uppercase letters? Y/N");
    if (includeUpper.toUpperCase() === "Y") {
      chars.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    // Lowercase
    includeLower = prompt("Would you like to include lowercase letters? Y/N");
    if (includeLower.toUpperCase() === "Y") {
      chars.push("abcdefghijklmnopqrstuvwxyz");
    }

    // Numbers
    includeNumbers = prompt("Would you like to include numbers? Y/N");
    if (includeNumbers.toUpperCase() === "Y") {
      chars.push("0123456789");
    }

    // Special characters
    includeSpecial = prompt("Would you like to include special characters? Y/N");
    if (includeSpecial.toUpperCase() === "Y") {
      chars.push("!@#$%^&*()-_+=<>?");
    }

    // Concatenate all selected character sets
    var selectedChars = chars.join("");

    // Generate the password
    for (let i = 0; i < passLength; i++) {
      const randomIndex = Math.floor(Math.random() * selectedChars.length);
      password += selectedChars.charAt(randomIndex);
    }

    return password;
  } else {
    alert("Password length must be between 8 and 128 characters!");
    return generatePassword(); // Restart the process if the length is invalid
  }
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
