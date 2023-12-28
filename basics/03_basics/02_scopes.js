// var c = 300
let a = 300
if (true){
    let a =10
    const b = 20
    var c = 30
    // console.log("Inner: ",a)
}


// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const usename = "rohit"

    function two(){
        const website = "youtube"
       console.log(usename)
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const usename = "Rohit"
    if (usename=== "Rohit") {
        const website = " Youtube"
        // console.log(usename + website)
        
    }
    // console.log(website);
}
// console,log(username);

// ++++++++++++++Interesting ++++++++++++++
console.log(addOne(5))
function addOne(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
