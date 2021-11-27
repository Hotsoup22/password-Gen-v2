

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

function checkUppercaseBox() {
  const uppercaseBox = document.querySelector("#uppercaseBox")
  let isCheckedUppercaseBox = false;
  if (!uppercaseBox.checked === true) {
    isCheckedUppercaseBox =false; 
    return  consoleLogBoxCheck(isCheckedUppercaseBox);
  } else if(uppercaseBox.checked === true) {
    isCheckedUppercaseBox = true;
  return consoleLogBoxCheck(isCheckedUppercaseBox );
  }
}

function consoleLogBoxCheck(isChecked){
  return  console.log("uppercasebox: "+ `${isChecked}`)
}
//then it will check which boxes are checked 
//then password will apear in textBox