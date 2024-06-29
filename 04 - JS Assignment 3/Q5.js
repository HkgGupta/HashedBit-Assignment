/*
    Q5.
    Write a function to replace wrong word with correct word in any sentance.
    Like this - correctfn(string, wrong, correct)
    Use string.replace in function.
*/


function correctfn(string, wrong, correct) {
    let correctedString = string.replace(wrong, correct);
    return correctedString;
}

let string = 'I love India';
let wrong = 'India';
let correct = 'My India';
let result = correctfn(string, wrong, correct);
console.log(result);