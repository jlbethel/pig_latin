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
    } else if ( inputArray[0] === ("q") && inputArray[1] === ("u")){
      var currentLetterq = inputArray.splice(0, 1);
      var currentLetteru = inputArray.splice(0, 1)
      inputArray.push(currentLetterq);
      inputArray.push(currentLetteru);
    } else {
      var currentLetter = inputArray.splice(0, 1);
      inputArray.push(currentLetter);
    }
  }

  var pigString = inputArray.join('');

  return pigString;
};
