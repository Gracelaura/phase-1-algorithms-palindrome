function isPalindrome(word) {
  // Write your algorithm here
  let regularexpression = /[\W_]/g
        let lowerstring = word.toLowerCase().replace(regularexpression, ``);
        let reverandsplit = lowerstring.split(``).reverse().join(``);
        return lowerstring === reverandsplit;

}

/* 
  Add your pseudocode here
  Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
  Step 2. Use the chaining methods with built-in functions split, reverse and join'
  Step 3.Check if reverseStr is strictly equals to lowRegStr and return a Boolean
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
