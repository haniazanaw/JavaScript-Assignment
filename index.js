//convert the first letter
let text = "the child walked to the market";
let capitalized = text.charAt(0).toUpperCase() + text.slice(1);
console.log(capitalized);


// 2. Add a character at the third index
let tex1 = "school";
let char = "X";
let modifiedtex1 = tex1.slice(0, 3) + char + tex1.slice(3);
console.log(modifiedtex1);



// 3. Count occurrences of "hello"
let text1 = "hello world, hello JavaScript!";
let count = (text1.match(/hello/g) || []).length;
console.log(count);


// 4. Get the last three characters
let country = "Kenya";
let lastThree = country.slice(-3);
console.log(lastThree);

// 5. Log the first three characters
let fiction = "alemenor";
let firstThree = fiction.slice(0, 3);
console.log(firstThree);

// 6. Sort characters in ascending order
let text3 = "school";
let sortedStr = text3.split('').sort().join('');
console.log(sortedStr);

// 7. Remove all spaces
let sentence = "I was born in Ethiopia";
let noSpaces = sentence.replace(/\s/g, "");
console.log(noSpaces);

// 8. Find the index of 't' in "greeting"
let greet = "greeting";
let indexOfT = greet.indexOf("t");
console.log(indexOfT);



// 9. Delete the first two characters
let text4 = "AkiraChix";
let withoutFirstTwo = text4.slice(2);
console.log(withoutFirstTwo);

// 10. Delete the last two characters
let text5 = "AkiraChix";
let withoutLastTwo = text5.slice(0, -2);
console.log(withoutLastTwo);
