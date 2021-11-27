
const upperCaseIndex = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerCaseIndex = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const specialLettersIndex = ["$^?:,(){}[]~-_.@%+\'!#"]
const numberIndex = ["1234567890"]
let password = [];
const lowercaseBox = document.querySelector("#lowercaseBox")
const specialLetterBox = document.querySelector("#specialLetterBox")
const numbersBox = document.querySelector("#numbersBox")
const passwordLength = document.querySelector("#passwordLength")




// when generate password btn is clicked 
const generatePasswordBtn = document.querySelector("#generatePasswordBtn")
generatePasswordBtn.addEventListener("click", generatePassword)

function generatePassword() { 
  checkUppercaseBox();

 
  console.log("end of gen-pass function");
}

function randomizePassword(myArray){
  var rand = Math.floor(Math.random()*myArray.length);
  var rValue = myArray[rand]
 return console.log(rValue)
}

//then it will check which boxes are checked 
function checkUppercaseBox() {
  const uppercaseBox = document.querySelector("#uppercaseBox")
  let isCheckedUppercaseBox = false;
  if (!uppercaseBox.checked === true) {
    isCheckedUppercaseBox =false; 
    return  consoleLogBoxCheck(isCheckedUppercaseBox);
  } else if(uppercaseBox.checked === true) {
    isCheckedUppercaseBox = true;
  return randomizePassword(upperCaseIndex) , consoleLogBoxCheck(isCheckedUppercaseBox );
  }
}

function consoleLogBoxCheck (isChecked){

  return console.log("UpperCase value: ",`${isChecked}`)
}
//then password will apear in textBox

//then display values user chose 