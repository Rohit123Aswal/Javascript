// Singleton

// object literal

const mySym = Symbol("key1")

const jsUser = {
    name: "Rohit",
    [mySym]: "mykey1",
    Age: 25,
    location: "Uttarakhand",
    email: "rohitaswal@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySym])

jsUser.email = "rohit@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "rohit@chatgpt.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());