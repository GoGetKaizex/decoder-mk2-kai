// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
//if I need to shift everything one over, the best place to start would be a //variable for indexing that contains the entire alphabet. From that alphabet the //encoded results should loop through, finding pushing the letter that //matches //the desired encoded result by number. 
//
// update!! right idea, wrong implementation. Unicode makes the process much easier, removing the need for an alphabet array. Have the function call the unicode character if possible. Potentially rewrite. 
//
  function caesar(input, shift, encode = true) {
    // error handling stuff. If it doesnt fit the constraints -e.g- no shift, shift 0, shift >25<-25 return false
    if (!shift || shift === 0 || shift > 25 || shift < -25){
      return false
    };
     //decoding, if encoding isn't true what do we do. we reverse the encoding process. 
    if (encode === false) shift = -shift;
//change it all to lower case
    const lowerCaseInput = input.toLowerCase();
//create the var that contains the alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
//create an empty array to contain the encoded message
    let encodedMessage = []
    //loop the input to index it
    for (let i = 0; i < lowerCaseInput.length; i++){
      //loop the alphabet
      for (let j = 0; j < alphabet.length; j++){
        //if the input index is equal to the alphabe index, push with the added shift
        if(lowerCaseInput[i] === alphabet[j]){
          encodedMessage.push(alphabet[j+shift]) 
          // check if the shift is more than 25, if so -26 from the current result to loop around the alphabet a-z
          if (j+shift > 25){
            encodedMessage.push(alphabet[j+shift-26])
          }   
//if the result is less than 0, loop in the opposite direction z-a
          if(j+shift < 0){
            encodedMessage.push(alphabet[j+shift+26])
          }              
        }        
      }
      //check if the alphabet does not include includes the current input index
      if (!alphabet.includes(lowerCaseInput[i])){
        //push the currently held index to encoded message.
        encodedMessage.push(lowerCaseInput[i])
      }
      //return it with -''-
    } return encodedMessage.join('')
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
