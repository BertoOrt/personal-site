function palindrome(word) {
  var newWord = word.split('').reverse().join('');
  return word === newWord ? true : false
}

console.log(palindrome('racecar'));
console.log(palindrome('apple'));
