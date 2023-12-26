// const tinderUser = new Object() //Singleton Object
const tinderUser = {} //non Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gami.com",
    fullname: {
        username: {
            firstname: "rohit",
            lastname: "aswal"
        }

    }

}
// console.log(regularUser.fullname.username.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3  = Object.assign(obj1, obj2)
// const obj3 = {   obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2 , obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)



const users = [
    {
        id: 1,
        email: "r@gmail.com"
    }, 
    {
        id: 2,
        email: "s@gmail.com"
    }, 
    {
        id: 3,
        email: "t@gmail.com"
    }, 
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)); //important
// console.log(Object.values(tinderUser)); //important
// console.log(Object.entries(tinderUser)); //important

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); 





const course = {
    coursename: "js in hindi",
    courseInstructor: "Hitesh",
    price: "999"
}

const {courseInstructor: instructor} = course

console.log(instructor);


