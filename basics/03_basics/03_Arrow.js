const user = {
    username: "Rohit",
    price: 999,

    WelcomeMessage: function () {
        console.log(`${this.username}, Welcome to Website`);
        console.log(this); // "this" tells current context
    }
}
user.WelcomeMessage()
user.username = "sam"
user.WelcomeMessage()

// console.log(this);

// function coffee( ){
//     let username = "rohit"
//     console.log(this.username);
// }
// coffee()

// const coffee = ( ) => {
//         let username = "rohit"
//         console.log(this);
//     }
//     coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username:"rohit"})


console.log(addTwo(3,4))

const myArray = [1, 2, 3, 4, 5]