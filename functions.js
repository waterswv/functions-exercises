// TODO: add your solutions here!

// #1. Build your own Concatenation
// Return a new string that is the combination of two arguments passed into the function
function wordGenerator(wordOne, wordTwo){
    let newWord = wordOne + wordTwo;
    console.log(newWord);
    return newWord;
}

// #2. Repeat a phrase
// Display an argument phrase to the console n times
function pRepeater (phrase, theTimes){
    for(let i = 0; i < theTimes; i++){
            console.log(phrase);
        }
     }

// #3. Build your own power function
// Return number power without using built-in Math functions.

function powerUp (myNum, thePower){
    let myResult = myNum
    for(let i = 0; i < thePower; i++){
            myResult = myResult * myNum;
            console.log(myResult);

        } return myResult;
     }

// #4. Area of Cirlce
//Return the area of a circle given the radius

function circleArea (radius) {
    let area = 3.14 * (radius*radius);
    return area;
}

// #5. Pythagorean Theorem
// Return c given a & b
function pythagorean (a,b) {
  var cSqr = (a*a) + (b*b);
  var c = Math.sqrt(cSqr);
  return c;
}

// #6. Is X evenly divisible by Y
// Return a boolean value whether or not X can be divided by Y without any remainders.
function divisibleBy (x,y) {
    if (x % y == 0) {
        return true;
    }
    else {
       return false;
    }
}

// #7. Return the number of occurrences of vowels in a word. Vowels are a, e, i, o, u, and y
// Challenge: Can you alter the code to count uppercase and lowercase separately

function vowelCount(taco) {
  let vowel = [a,e,o,u,i,y];
}
