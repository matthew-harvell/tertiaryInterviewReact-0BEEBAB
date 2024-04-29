class StringUtils {
  manipulateString = (input) => {
    /*
        Given a string in the English alphabet utilizing only upper case and lower case letters (i.e., A-Z and a-z only),
        create a new string which consists of the opposite case (lower to upper and vice versa)
        which is also reversed in character order from the original.  E.g., "ABCD" would become "dcba". If the character is NOT
        a letter character, remove it from the result.   For reference and if it helps, the character values of the upper case 
        number are 65 - 90 and the lower case letters are 32 above the corresponding upper case. Try to keep in mind that all
        primitive values (such as string, number, boolean...) are immutable in JavaScript - try to keep
        the amount of memory allocations as low as possible.  
    */
        if(typeof input !== 'string') throw new TypeError('Input must be convertible to string');
        const alphaOnlyInput = [...input.matchAll(/[A-Za-z]/g)].map(m=>m[0].toUpperCase() === m[0]?m[0].toLowerCase():m[0].toUpperCase());
        for (let i = 0,e = alphaOnlyInput.length-1; i < Math.floor(alphaOnlyInput.length/2); e--, i++ ){
          let temp = alphaOnlyInput[i];
          alphaOnlyInput[i] = alphaOnlyInput[e];
          alphaOnlyInput[e] = temp;
        }
        return alphaOnlyInput.join('');
  };
}

module.exports = StringUtils;
