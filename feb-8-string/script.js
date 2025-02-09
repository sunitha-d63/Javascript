// Concatenate two strings, "Hello" and "World", with a space between them. 
let str1="Hello"
let str2="World"
let result=str1.concat(" "+str2)
console.log(result);

// Find the length of the string "JavaScript"
let str3="JavaScript"
console.log(str3.length);

//  Extract the word "World" from the string "Hello, World!"
let str4="Hello, World!"
let sub=str4.substr(7,5)
console.log(sub);

// Convert the string "javascript" to uppercase.
let string="javascript"
console.log(string.toUpperCase());
console.log(string.toLowerCase());

// Check if the string "I love coding" contains the substring "love"
let str5="I love coding" 
let Result=str5.includes("love")
console.log(Result);

// Replace "World" with "JavaScript" in the string "Hello, World!".
let str6= "Hello, World!"
let newstr=str6.replace("World", "JavaScript")
console.log(newstr);

//  Trim the leading and trailing whitespace from the string " Hello, World! ".
let str7=" Hello, World! "
console.log(str7.trim());

// Split the string "apple,banana,cherry" into an array of fruits.
let str8="apple,banana,cherry"
console.log(str8.split(","));

// Repeat the string "Ha!" three times.
let str9="Ha!"
console.log(str9.repeat(3));

// Check if the first character of the string "JavaScript" is "J".
let str10="JavaScript"
let Results=str10.includes("J")
console.log(Results);


