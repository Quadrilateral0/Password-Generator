// Define variables
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var passwordLength = 8;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Copy password from the #password input
function copyPassword() {
    var copyText = document.getElementById("#password");
    copyText.select();
    document.execCommand("copy");  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy button
copyBtn.addEventListener("click", copyPassword);

// Add popups to define password parameters on click
document.getElementById("generate").addEventListener("click", function() {
    var passwordLength = prompt;
    if (confirm("Would you like to include numbers in your password?\nClick Cancel for no.") == true) {
        characters.push(0,1,2,3,4,5,6,7,8,9);
        console.log(characters);
    } else (console.log(characters));
    if (confirm("Would you like to include uppercase letters in your password?\nClick Cancel for no.") == true) {
       characters.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
       console.log(characters);
    } else (console.log(characters));
    if (confirm("Would you like to include special characters in your password?\nClick Cancel for no.") == true) {
        characters.push("!","@","#","$","%","^","&","*","(",")");
        console.log(characters);
    } else (console.log(characters));
    if (prompt("How many total characters would you like in your password?\nClicking Cancel will apply default setting of 8 characters.", "8") == true) {
        passwordLength = i;
        console.log(passwordLength);
    } else if (passwordLength>128 && passwordLength<8) {
        alert("You entered invalidly. Please enter a number greater than 8 and less than 128.");
    } else (passwordLength == null); {
        passwordLength = 8;
    }   console.log(passwordLength); 
});


