
const upperCaseIndex = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerCaseIndex = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const specialLettersIndex = ["$","^","?",":",",","(",")","{","}","[","]","~","-","_",".","@","%","+","\",","!","#",",","'"]
const numberIndex = ["1234567890"]
let password = [];


const numbersBox = document.querySelector("#numbersBox")
const passwordLength = document.querySelector("#passwordLength")
//can it fit in a function? scope problems?
const passwordTextArea = document.querySelector("#passwordTextArea")



// when generate password btn is clicked 
const generatePasswordBtn = document.querySelector("#generatePasswordBtn")
generatePasswordBtn.addEventListener("click", generatePassword)

function generatePassword() { 
  console.clear();
  passwordTextArea.textContent= ""
  password = [];
  checkUppercaseBox();
  checkLowercaseBox();
  checkSpecialLetterBox();
  DisplayPassword();

 
  console.log("end of gen-pass function", "password: ",password);
}

function randomizePassword(myArray){
  var rand = Math.floor(Math.random()*myArray.length);
  var randomValue = myArray[rand]
  //add to  array call passowrd
  password.push(randomValue)
 return console.log("randomizePassword function: ",randomValue)
}

//then it will check which boxes are checked 
function checkUppercaseBox() {
  const uppercaseBox = document.querySelector("#uppercaseBox")
  let isCheckedUppercaseBox = false;
  if (!uppercaseBox.checked === true) {
    isCheckedUppercaseBox =false; 
    return  consoleLogBoxCheck(isCheckedUppercaseBox," :Uppercase");
  } else if(uppercaseBox.checked === true) {
    isCheckedUppercaseBox = true;
  return randomizePassword(upperCaseIndex) , consoleLogBoxCheck(isCheckedUppercaseBox, " :Uppercase" );
  }
}
function checkLowercaseBox() {
  const lowercaseBox = document.querySelector("#lowercaseBox")
  let isCheckedLowercaseBox = false;
  if (!lowercaseBox.checked === true) {
    isCheckedLowercaseBox =false; 
      consoleLogBoxCheck(isCheckedLowercaseBox, " :Lowercase");
  } else if(lowercaseBox.checked === true) {
    isCheckedLowercaseBox = true;
   randomizePassword(lowerCaseIndex) 
    consoleLogBoxCheck(isCheckedLowercaseBox, " :Lowercase");
  }
}
function checkSpecialLetterBox() {
  const specialLetterBox = document.querySelector("#specialLetterBox")
  let isCheckedSpecialLetterBox = false;
  if (!specialLetterBox.checked === true) {
    isCheckedSpecialLetterBox =false; 
      consoleLogBoxCheck(isCheckedSpecialLetterBox, " :SpecialLetters");
  } else if(specialLetterBox.checked === true) {
    isCheckedSpecialLetterBox = true;
   randomizePassword(specialLettersIndex) 
    consoleLogBoxCheck(isCheckedSpecialLetterBox, " :SpecialLetters");
  }
}

function consoleLogBoxCheck (isCheckedUppercaseBox, b){
 
   console.log(`${isCheckedUppercaseBox }`+b)
   
}
//then password will apear in textBox
function DisplayPassword(){
  passwordTextArea.textContent = password
  console.log("password: ",password)
}
//then display values user chose 