/*
    Q1.
    Create an array of states in india.
    Remove all the names starting with vowels from the list.Use array.filter.
*/

let indianStates = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

let vowels = ["a", "e", "i", "o", "u"];

let filteredStates = indianStates.filter(function (state) {
    let firstLetter = state[0].toLowerCase();
    return !vowels.includes(firstLetter);
});

console.log(filteredStates);