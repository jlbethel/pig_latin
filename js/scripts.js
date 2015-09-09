var pigLatin = function(userInput) {
  var inputArray = userInput.split('');
  var firstLetter = inputArray.splice(0,1);
  inputArray.push(firstLetter);
  var pigString = inputArray.join('');

  return pigString;
};
