var pigLatin = function(userInput) {

  var inputArray = userInput.split('');
  var inputLength = userInput.length;

  for (var i = 0; i < inputLength; i++) {
    if ( inputArray[0] === ("a")
      || inputArray[0] === ("e")
      || inputArray[0] === ("i")
      || inputArray[0] === ("o")
      || inputArray[0] === ("u")) {
      inputArray.push('ay');
      break;
    } else {
      var currentLetter = inputArray.splice(0, 1);
      console.log(currentLetter);
      inputArray.push(currentLetter);
    }
  }

  var pigString = inputArray.join('');

  return pigString;
};
