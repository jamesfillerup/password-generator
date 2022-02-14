// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password

}

//password data
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById("characterAmountNumber")
const includeLowercaseElement = document.getElementById("includeLowercaseElement")
const includeUppercaseElement = document.getElementById("includeUppercaseElement")
const includeNumbersElement = document.getElementById("includeNumbersElement")
const includeSymbolsElement = document.getElementById("includeSymbolsElement")
const form =document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58,64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeLowercase = includeLowercaseElement.checked
  const includeUppercase=includeUppercaseElement.checked
  const includeNumbers= includeNumbersElement.checked
  const includeSymbols=includeSymbolsElement.checked

  const password= generatePassword(characterAmount, includeUppercase,includeLowercase, includeNumbers, includeSymbols)

  passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase,includeLowercase, includeNumbers, includeSymbols){
  let charCodes= LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes=charCodes.concat(UPPER_CHAR_CODES)
    if (includeLowercase) charCodes=charCodes.concat(LOWER_CHAR_CODES)
    if (includeNumbers) charCodes=charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes=charCodes.concat(SYMBOL_CHAR_CODES)

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
      const characterCode = charCodes[Math.floor(Math.random()* charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join ("")
}

function arrayFromLowToHigh(low, high){
  const array =[]
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array

}
function syncCharacterAmount(e){
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}


// characterAmountNumber.addEventListener('input')






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

