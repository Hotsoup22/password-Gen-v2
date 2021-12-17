export default function passwordScript(){
 console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")

const upperCaseIndex = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerCaseIndex = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const specialLettersIndex =  ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
const numberIndex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const passwordLength = document.querySelector("#passwordLength")
const passwordTextArea = document.querySelector("#passwordTextArea")

// when generate password btn is clicked 
const generatePasswordBtn = document.querySelector("#generatePasswordBtn")
generatePasswordBtn.addEventListener("click" || "onsubmit", generatePassword)

function generatePassword() { 
  
  console.clear();
  passwordTextArea.textContent= ""
  let password = [];
  let randomizerSelection = [];
  checkUppercaseBox(randomizerSelection);
  checkLowercaseBox(randomizerSelection);
  checkSpecialLetterBox(randomizerSelection);
  checkNumbersBox(randomizerSelection);
  randomizePassword(randomizerSelection, password)
  displayPassword(password);
  console.log("end of gen-pass function", "password: ",password);
}

//then it will check which boxes are checked. 
function checkUppercaseBox(randomizerSelection) {
  const uppercaseBox = document.querySelector("#uppercaseBox")
  let isCheckedUppercaseBox = false;
  if (!uppercaseBox.checked === true) {
    isCheckedUppercaseBox =false; 
    return  consoleLogBoxCheck(isCheckedUppercaseBox," :Uppercase");
  }
  // if true then push index to randomizerSelection index.
   if(uppercaseBox.checked === true) {
    isCheckedUppercaseBox = true;
    randomizerSelection.push(...upperCaseIndex)
    return consoleLogBoxCheck(isCheckedUppercaseBox, " :Uppercase" );
  }
}

function checkLowercaseBox(randomizerSelection){
  const lowercaseBox = document.querySelector("#lowercaseBox")
  let isCheckedLowercaseBox = false;
  if (!lowercaseBox.checked === true) {
    isCheckedLowercaseBox =false; 
     return consoleLogBoxCheck(isCheckedLowercaseBox, " :Lowercase");
  } if(lowercaseBox.checked === true) {
    isCheckedLowercaseBox = true;
    randomizerSelection.push(...lowerCaseIndex)
    return consoleLogBoxCheck(isCheckedLowercaseBox, " :Lowercase");
  }
}

function checkSpecialLetterBox (randomizerSelection){
  const specialLetterBox = document.querySelector("#specialLetterBox")
  let isCheckedSpecialLetterBox = false;
  if (!specialLetterBox.checked === true) {
    isCheckedSpecialLetterBox =false; 
      return consoleLogBoxCheck(isCheckedSpecialLetterBox, " :SpecialLetters");
  } if(specialLetterBox.checked === true) {
    isCheckedSpecialLetterBox = true;
    randomizerSelection.push(...specialLettersIndex)
    consoleLogBoxCheck(isCheckedSpecialLetterBox, " :SpecialLetters");
  }
}

function checkNumbersBox(randomizerSelection){
  const numbersBox = document.querySelector("#numbersBox")
  let isCheckedNumbersBox = false;
  if (!numbersBox.checked === true) {
    isCheckedNumbersBox =false; 
      return consoleLogBoxCheck(isCheckedNumbersBox, " :numbersBox");
  } if (numbersBox.checked === true) {
    isCheckedNumbersBox = true;
    randomizerSelection.push(...numberIndex)
    consoleLogBoxCheck(isCheckedNumbersBox, " :numbersBox");
  }
}



// then randomly pick from then randomizer selection Index 
function randomizePassword(randomizerSelection, password) {
  //but first check password length
  const passwordLengthNum = document.querySelector("#passwordLength").value
  console.log(passwordLengthNum ," :Characters. User desired Password Length")
  console.log(randomizerSelection ,"randomizerSelection")
  for (var i = 0; i < passwordLengthNum;  i++) {
  var index = Math.floor(Math.random() * randomizerSelection.length);
  var randomValue = randomizerSelection[index]
//  console.log("random Value: ", randomValue)
  password.push(randomValue)
  }
// return console.log("randomizePassword function: ",randomValue)
}

function consoleLogBoxCheck(isCheckedUppercaseBox, b){ 
   console.log(`${isCheckedUppercaseBox }`+b)
  };


//then password will apear in textBox
function displayPassword (password) {
  // console.log(password , "password in display function")
  passwordTextArea.textContent = password.join("") // takes away spaces and commas 
  // console.log("password: ",password)
}


}