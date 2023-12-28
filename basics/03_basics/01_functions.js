function sayMyName(){
    console.log("R")
    console.log("o")
    console.log("h")
    console.log("i")
    console.log("t")
}
// sayMyName()

// function addTwoNum(num1, num2){  //defination of function where (num1, num2) are parameters
//     console.log(num1 + num2);
// }

function addTwoNum(num1, num2){  //defination of function where (num1, num2) are parameters
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNum(3, 4) // function call where (3,4) are arguments
// console.log("result: " , result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Rohit"))
// console.log(loginUserMessage("Rohit"))


function calculateCartPrice(...num1){ // spread or rest(...) operator
    return num1

}
// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Rohit",
    price: 139
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);

}
handleObject(user)
