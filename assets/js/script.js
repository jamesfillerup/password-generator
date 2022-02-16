
//password data
var characterAmountRange = document.getElementById('characterAmountRange')
var characterAmountNumber = document.getElementById("characterAmountNumber")

const password = document.getElementById('password')

var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58,64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)


var form = document.getElementById('passwordGeneratorForm')


form.addEventListener('submit', e => {
  e.preventDefault()
  
    characterAmount = characterAmountNumber.value

    var includeLowercase = document.getElementById("includeLowercase").checked
    var includeUppercase= document.getElementById("includeUppercase").checked
    var includeNumbers= document.getElementById("includeNumbers").checked
    var includeSymbols= document.getElementById("includeSymbols").checked

  const password= generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)

console.log(password)

  password.innerText = password

  document.getElementById("password").textContent = password;
})

function generatePassword(characterAmount, includeUppercase,includeLowercase, includeNumbers, includeSymbols){
  let charCodes= LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes=charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeLowercase) charCodes=charCodes.concat(LOWERCASE_CHAR_CODES)
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
  console.log(array)
  return array

}
function syncCharacterAmount(e){
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}


characterAmountNumber.addEventListener('input', e => {
  e.preventDefault()
})




