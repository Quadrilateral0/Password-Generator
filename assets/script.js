// Define variables
var generateBtn = document.querySelector("#generate");
var characters = [];
var password = [];
var passwordLength = "";

//Initiate password generator function
function generatePassword() {

    // Add popups to define password parameters on click

    //Determine password length
    passwordLength = prompt("Please indicate a password length between 8 and 128.");
    if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
    } else {
         return alert("You entered invalidly.\nPlease enter a number of at least 8 but no more than 128.");
    }   

    //Determine inclusion of numbers in password
    var charNumber = confirm("Would you like to include numbers in your password?\nClick Cancel for no.");
    if (charNumber == true) {
        characters.push(0,1,2,3,4,5,6,7,8,9);
        console.log(characters);
        } else (console.log(characters));
    
     //Determine inclusion of lowercase letters in password
    var charLower = confirm("Would you like to include uppercase letters in your password?\nClick Cancel for no.");
    if (charLower == true) {
        characters.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
        console.log(characters);
    } else (console.log(characters));

    //Determine inclusion of uppercase letters in password
    var charUpper = confirm("Would you like to include uppercase letters in your password?\nClick Cancel for no.");
    if (charUpper == true) {
        characters.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
        console.log(characters);
    } else (console.log(characters));

    //Determine inclusion of special characters in password
    var charSymbol = confirm("Would you like to include special characters in your password?\nClick Cancel for no.");
    if (charSymbol == true) {
        characters.push("!","@","#","$","%","^","&","*","(",")");
        console.log(characters);
    } else (console.log(characters));

    //Will return an alert if there no character types are selected
    if (!charNumber && !charLower && !charUpper && !charSymbol) {
        return alert('Please select at least one password criteria.');
    }

//Random character generator
    for (var i = 0; i < passwordLength; i++) {
        password += characters[Math.floor(Math.random () * characters.length)];
    } return password;
}

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }