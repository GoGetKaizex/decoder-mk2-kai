// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // another alphabet const
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz"

  function substitution(input, alphabet, encode = true) {
    //create output var
    let output = ''
    // error handling, following guidelines
    if(!alphabet) return false 
    if(!(alphabet.length == 26)) return false 
    // for let in loop. index = letter in alk
    for(let letter in alphabet){
      // start a counter var
      let count = 0
      //loop it
      for(let i = 0; i < 26; i++){
        if(alphabet[letter] == alphabet[i]) count++
      }
      //if the count variable returns >1 return it false
      if(count > 1) return false 
    }
    if(encode){
      //encoding. make it lowercase
      let caseInput = input.toLowerCase()
      // for let in loop. letter = letter within case-corrected input
      for(let letter in caseInput){
        // check if the alphabet does not include the case corrected input.
        if(!alphabet.includes(caseInput[letter])) output += caseInput[letter]
        else{
          //new variable for the stored index
          const indexedAlphabet = standardAlphabet.indexOf(caseInput[letter])
          output += alphabet[indexedAlphabet]
        }
      }
      return output      
    }
    else {
      let before = input.toLowerCase()
      for(let letter in before){
        if(!alphabet.includes(before[letter])) output += before[letter]
        else{
          const alphaIndex = alphabet.indexOf(before[letter])
          output += standardAlphabet[alphaIndex]
        }
      }
      return output
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
