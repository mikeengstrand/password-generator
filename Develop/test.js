// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var characterType;
var characterSelect;
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var uperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specChar = "!@#$%&"





// this function requests the user to select the length of the password. if the length is under 8 characters, over 128 characters or is not a number, then a prompt is create and the function restarts
function checkLength(){
  passwordLength = prompt("Please select the length of your password (between 8 and 128 characters).");
  console.log(passwordLength)

  if (isNaN(passwordLength)){
    alert("You selected an invalid option, please select a character length between 8 and 128");
    checkLength();
  }
  else if (( passwordLength <= 7 || passwordLength >= 129 )){
    alert("You selected an invalid option, please select a character length between 8 and 128");
    checkLength();
  }
  else {
    if ( passwordLength >= 8 || passwordLength <= 128 ){
    console.log(passwordLength)
  }}
  return passwordLength;

  
}



// this is to allow the user to chose the charaters included in the password
function characterChoice(){
characterType = window.prompt("Please enter your selection for charachter types: A. Lowercase alphabet,  B. Lowercase and upercase alphabet C. Lowercase and upercase alphanumeric, D.Lowercase and upercase alphanumeric and special characters. If you make an invalid selection it will defualt to most secure choice D."
);
console.log(characterType)
// if the user chose A Lowercase alphabet
if (characterType === "a" || characterType === "A"){
  characterSelect = lowerCase;
}// if the user chose B. Lowercase and upercase alphabet
else if (characterType === "b" || characterType === "B"){
  characterSelect += lowerCase + uperCase;
}// if the user chose C. Lowercase and upercase alphanumeric
else if (characterType === "c" || characterType === "C"){
  characterSelect += lowerCase + uperCase + numbers;
}// if the user chose D.Lowercase and upercase alphanumeric and special characters
else if (characterType === "d" || characterType === "D"){
  characterSelect += lowerCase + uperCase + numbers + specChar;
}// if the user chose nothing we defualt to choice D 
else{
  characterSelect += lowerCase + uperCase + numbers + specChar;
}
alert("Your password is being generated.")
return characterType
}

// creating a randomized passowrd using the selections of the user
function generatePassword() {
checkLength();
characterChoice();

  var length = passwordLength;
  var charset = characterSelect;

  finalPW = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      finalPW += charset.charAt(Math.floor(Math.random() * n));
      console.log(finalPW)
  }
  return finalPW;
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
