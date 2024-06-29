/*
    Q10.
    Write a function to reverse a string.
    Input - Hello
    Outpur - olleH
*/

let string = "Hello";

let charArray = string.split('');

let revArray = charArray.reverse();

let output = revArray.join('');

console.log(output);