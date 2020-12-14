/**
 * A recursive function that returns the members of a provided array argument,
 * as HTML tags and indents later array members as child elements to earlier
 * array members.
 *
 * @example
 *   let test = [1, 2, 3];
 *   console.log(recur(test));
 *   // outputs
 *   // <1>
 *   //  <2>
 *   //    <3>
 *   //    </3>
 *   //  </2>
 *   // </1>
 *
 * @param {Array} arr - The array whose elements are to be nested as HTML tags
 * @param {number} [n=0] - Optional array index, useful during the recursion
 *   and should be ignored on first function call
 * @param {string} [str='\n'] - Optional current return string. Useful during the
 *   recursion to keep track of opening indents that have taken place. Should be
 *   ignored on first function call.
 * @return {string} - A string with the elements of the array argument as nested
 *   HTML tags.
 */
let recur = (arr, n = 0, str = '\n') => {
  // variables to assist in creating the right amount of indentation
  let indentN = n * 2;
  let indentS = '';

  // populates indentS with the exact amount of spaces (indents)
  while (indentN) {
    indentS += ' ';
    indentN--;
  }

  // create the opening HTML tag with the current member of the array
  // and prefix it with the previously gotten indentation.
  // also append a new line.
  // the newly created tag is appended to the return string
  str += `${indentS}<${arr[n]}>\n`; 

  // where the recursion take place.
  // the reverse of the n >= arr.length - 1 base case was used.
  // execution will enter this if block, only when there are still
  // untreated members of the array argument
  if (n < arr.length - 1) {    
    // note that the return string is being reassigned else
    // if it was being appended, the final output of recursion 
    // will have many unneccessarily repeating opening tags
    str = recur(arr, n + 1, str);  
  }

  // close the HTML tags with indentation peculiar to each instant of 
  // the function call and append new line to enter the next line
  str += `${indentS}</${arr[n]}>\n`;

  // return the finally formed string
  return str;
};

// the test array that used to tests the above recur function
let test = [1, 2, 3, 4, 5, 6];

// test recur function
console.log(recur(test));