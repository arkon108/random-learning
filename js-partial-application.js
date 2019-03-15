// js-partial-application
// https://medium.freecodecamp.org/how-to-use-partial-application-to-improve-your-javascript-code-5af9ad877833

/*
 * Partial application is where an existing function is used to create a
 * new function with some of the arguments "pre-set" - the arguments have
 * been partially applied. 
 */

 // example function

 const makeWordList = (lastJoin, ...items) => {
  const commaSeparated = items.slice(0,-1).join(", ");
  const lastItem = items.pop();
  return `${commaSeparated} ${lastJoin} ${lastItem}`;
}

makeWordList("and", "red", "green", "blue");     // "red, green and blue"
makeWordList("with", "red", "green", "blue");    // "red, green with blue"
makeWordList("or", "red", "green", "blue");      // "red, green or blue"


/**
  * Utility function for creating partially applied function
 **/
const partial = (fn, firstArg) => {
  return (...lastArgs) => {
    return fn(firstArg, ...lastArgs);
  }
}

const makeAndWordList = partial(makeWordList, 'and');