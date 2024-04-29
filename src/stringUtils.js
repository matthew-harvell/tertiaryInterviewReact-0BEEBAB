class StringUtils {
  manipulateString = (input) => {
    /*
        You are given a string consisting of alphanumeric characters in the English alphabet.  Namely, the string will constist of the characters [A-Za-z0-9] (A through Z capitalized and lowercase as well as the digits from 0 to 9).
        After a lot of discussion the product team has decided that every string needs to be stored in a format that has the character 
        (converted to lowercase) followed by the number of times it shows up in the string enclosed in curly brackets.  
        If the character is a number then it remains unchanged excepting that it has the number of occurances following (in brackets as shown in the examples.)
        Some examples:
        input string is "AbcdeAAaar3d5" would need to be returned as the string "a{5}b{1}c{1}d{2}e{1}r{1}3{1}5{1}".
        input string is "abstuuuv" would be returned as "a{1}b{1}s{1}t{1}u{3}v{1}".
        input string is "123aaabbb" would be returned as "1{1}2{1}3{1}a{3}b{3}".
        Try to keep in mind that every native variable in JavaScript is immutable.  Keep memory allocations as low as possible.
    */
    throw new Error('Not implemented');
  }
}

module.exports = StringUtils;
