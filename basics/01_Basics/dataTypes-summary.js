// primitive dataTypes

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3
const isLoggedIn = false

const OutsideTemp = null

let UserEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);




// refernce types (Non Primitive dataTypes)

// Arrays, Objects, Functions

const heros = ["ironman", "hulk", "spiderman"];
let myObj = {
    name : "rohit",
    age : 25,
}

const myfunction =  function(){
// console.log("hello world")

}

// console.log(typeof OutsideTemp);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (primitve) , Heap  (non- primitve)

let myYoutubename = 'rohitaswaldotcom'

let anothername = myYoutubename

anothername = 'rohitaurcode'

console.log(myYoutubename);

console.log(anothername);

let user1 ={
    email : "user@google.com",
    upiId : "ybl@bl"
}

let user2 = user1 

user2.email = "rohi@gmail.com"



console.log(user1.email);
console.log(user2.email);



