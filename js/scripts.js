var pigLatin = function(userInput) {

  var inputArray = userInput.split('');
  var inputLength = userInput.length;

  if (inputArray[0] === ("y")) {
    var letterY = inputArray.splice(0, 1);
    inputArray.push(letterY);
    inputArray.push("ay");
  } else {
    for (var i = 0; i < inputLength; i++) {
      if ( inputArray[0] === ("a")
        || inputArray[0] === ("e")
        || inputArray[0] === ("i")
        || inputArray[0] === ("o")
        || inputArray[0] === ("u")
        || inputArray[0] === ("y")) {
        inputArray.push('ay');
        break;
      } else if (inputArray[0] === ("q") && inputArray[1] === ("u")) {
        var currentLetterQ = inputArray.splice(0, 1);
        var currentLetterU = inputArray.splice(0, 1)
        inputArray.push(currentLetterQ);
        inputArray.push(currentLetterU);
      } else {
        var currentLetter = inputArray.splice(0, 1);
        inputArray.push(currentLetter);
      }
    }
  }


  var pigString = inputArray.join('');

  return pigString;
};
