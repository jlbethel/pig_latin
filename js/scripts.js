var pigLatin = function(userInput) {

  var inputPhrase = userInput.split(' ');
  var inputPhraseLength = inputPhrase.length;
  var pigPhrase = [];
  for (var index = 0; index < inputPhraseLength; index++) {
    var inputArray = inputPhrase[index].split('');
    var inputLength = inputArray.length;

    if (inputArray[0] === ("y")) {
      var letterY = inputArray.splice(0, 1);
      inputArray = inputArray.concat(letterY, "ay");
    } else {
      for (var i = 0; i < inputLength; i++) {
        if (inputArray[0].match(/([aeiouy])/g)) {
          inputArray.push('ay');
          break;
        } else if (inputArray[0] === ("q") && inputArray[1] === ("u")) {
          var currentLetters = inputArray.splice(0, 2);
          inputArray = inputArray.concat(currentLetters);
        } else {
          var currentLetter = inputArray.splice(0, 1);
          inputArray.push(currentLetter);
        }
      }
    }
    var pigString = inputArray.join('');
    pigPhrase.push(pigString);
  }

  var outputPhrase = pigPhrase.join(' ');


  return outputPhrase;
};
