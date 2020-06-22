/** 1
 * Write function isPalindrome that checks if a string (case insensitive) is a palindrome.
 * Dad == true
 * Mum == true
 * Dean == false
 */
const isPalindrome = (word) => {
    let slicedString = word.split(""); // splitting the letters into an array
    let reverstedString = slicedString.reverse() // reversing the array of letters
    let joinedString =reverstedString.join(""); // joining the array of reversed letters
    console.log(joinedString); // logging the reversed word
    if (word === joinedString) { // original word is equal to the new word
        console.log('this word is a palimdrome')
    } else {
        console.log("this word is not a palimdrome")
    };
};
isPalindrome("dad");
isPalindrome("mum");
isPalindrome("dean");