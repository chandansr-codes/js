const name = "hitesh"
const repocount = 50;

//console.log(name + repocount +"value"); //old way of writing

//console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('chandan-sr-sharma')

//use o find index of the string
//console.log(gameName[0]);
//console.log(gameName.__proto__)

//used to find length of the string
//console.log(gameName.length)

//used to change cases
//console.log(gameName.toUpperCase())
//console.log(gameName.toLowerCase())

//use to find the position of characters using index and letters
//console.log(gameName.charAt(2))
//console.log(gameName.indexOf('d'))

//used to find range using substring but we can not write negative range
const newString = gameName.substring(0,4);
//console.log(newString);

//Also used to find range using slice but negative value can be written as a range which will give the output in reverse
const anotherString = gameName.slice(-8,4)
//console.log(anotherString);


//trim => used to remove unwanted spaces
//trimstart() => used to remove blank space from the start
const newStringone = "  rajput  "
//console.log(newStringone)
//console.log(newStringone.trim());

//replace
const url = "https:://rajput.com/chandan%20kumar"
//console.log(url.replace('%20', '-'))

//include=>used to check whether it is present or not
//console.log(url.includes('chandan'))

//split =>used to split the phrase
//console.log(gameName.split('-'))


let text1= "hello"
let text2= "world"
//concat => used to join two strings
let text3= text1.concat(" ", text2)
//console.log(text3)

let text = "5"
//padstart() & padend() => it is used to pad(or repeat) the numbers at the starting or end
let padded = text.padStart(4,"6")
//console.log(padded)






