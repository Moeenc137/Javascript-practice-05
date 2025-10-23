//strings

//normal strings:

let str = "my name is khan";

console.log("string element:", str[3]);
console.log("string length:", str.length);

//template literals:

let object = {
  name: "rick sanchez",
  iq: 9949,
  place: "americano",
};

let spclString = `my name is ${object.name} and my iq is ${object.iq} 
and i live in ${object.place}`;

console.log(spclString);

// the main difference of this type of strings is that you dont
//have to place additioinal comas in it and just integrate the
//object data init

// and this $ sign and {} inside a string is called string interpolation

//escape statments:

console.log("optical\nglasses"); //shifts text to next line
console.log("optical\tglasses"); //make a tab space between text

//string methods:

let methString = "      My name is khan   ";
let strcon = " and i am not a terrorist";

methString = methString.toUpperCase(); //self-explainatory

console.log(methString);

methString = methString.toLowerCase(); //self-explainatory

console.log(methString);

methString = methString.trim(); // removes white-spaces

console.log(methString);

console.log(methString.slice(3, 6)); // slice a part of data from a string

console.log(methString.concat(strcon)); // combines 2 strings

console.log(methString.replace("khan", "muhammad")); // replaces an item from string

// console.log(methString.replaceAll("n", "m")); // replaces all items from string

console.log(methString.charAt(12)); // finds charecter by number from a string

//practice: user enter full name, then give them a username with
//@ in front and the name height at the end.

let fullname = prompt("enter full name to get username:");

console.log("@", fullname, fullname.length);
