/*
    Q2.
    let str = 'I love my India'
    output expected = 'India my love I'
    Write code for this.
*/

let str = 'I love my India';
let arr = str.split(' ');
let reversedArr = arr.reverse();
let reversedStr = reversedArr.join(' ');
console.log(reversedStr);