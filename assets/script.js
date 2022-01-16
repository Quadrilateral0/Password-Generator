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



