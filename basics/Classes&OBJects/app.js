// const employee = {
//   calctax1: function () {
//     console.log("tax rate is 10% ");
//   },
// };

// const karanarjun ={
//     salary: 50000,
//     calctax(){
//         console.log("tax rate is 20% ");
//     }
// };
// karanarjun.__proto__ = employee

// class Toyotacar {
//     constructor(brand, mileage){
//         console.log("creating new object");
// this.brand = brand;
// this.mileage = mileage;
//     }
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }

// }

// let fortuner = new Toyotacar("fortuner", 10); // cosntructor invoked
// console.log(fortuner);
// let lexus = new Toyotacar("lexus",20);
// console.log(lexus);

// class Person{
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }

//     work(){
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("Solve problems, build something");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("treat");
//     }
// }

// let rohitobj = new Engineer();

let DATA = "secret  information";
class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("data = ", DATA);
  }
}

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "some new value";
    }
}

let student1 = new user("rohit", "rohit@data.com");
let student2 = new user("rahul", "rahul@data.com");


let teacher1 = new user("Dean", "dean@gmail.com");

let admin1 = new admin("admin", "admin@gmail.com");