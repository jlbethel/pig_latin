var pigLatin = function(userInput) {

  var inputArray = userInput.split('');
  if (inputArray[0] === ("a" || "e" || "i" || "o" || "u")) {
    inputArray.push('ay');
  } else {
    var firstLetter = inputArray.splice(0,1);
    inputArray.push(firstLetter);
    inputArray.push('ay');
  }
  var pigString = inputArray.join('');

  return pigString;
};
