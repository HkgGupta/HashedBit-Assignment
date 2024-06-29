/*
    Q8.
    Write a function to find repeated sum of digits until there is only a single digit in the number.
    Example - 456 - 4+5+6 = 15 - 1+5 = 6.
*/

let number = 456;

let sum = 0;

while (number > 9) {
    while (number > 0) {
        let digit = number % 10;
        sum += digit;
        number = Math.floor(number / 10);
    }
    console.log(sum);
    number = sum;
    sum = 0;
}