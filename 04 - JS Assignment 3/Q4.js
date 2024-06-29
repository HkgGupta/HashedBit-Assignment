/*
    Q4.
    Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
*/

let string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quidem cumque reprehenderit ipsam eveniet, omnis tenetur odit aspernatur, quia velit minus, rerum consectetur sed.";

let vowelCount = 0;
let consonantCount = 0;

string = string.toLowerCase();

for (let i = 0; i < string.length; i++) {
    if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
        vowelCount++;
    } else {
        consonantCount++;
    }
}

console.log(`Vowels: ${vowelCount}`);
console.log(`Consonants: ${consonantCount}`);

