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

// let DATA = "secret  information";
// class user {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   viewData() {
//     console.log("data = ", DATA);
//   }
// }

// class admin extends user{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA = "some new value";
//     }
// }

// let student1 = new user("rohit", "rohit@data.com");
// let student2 = new user("rahul", "rahul@data.com");

// let teacher1 = new user("Dean", "dean@gmail.com");

// let admin1 = new admin("admin", "admin@gmail.com");

// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(() => {
//   console.log("hello");
// }, 5000);

// console.log("four");
// console.log("five");

// function sum(a, b) {
//   console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// calculator(1, 2, (a, b) => {
//   console.log(a + b);
// });

//nesting

// function getData(dataId, getNExtData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNExtData) {
//       getNExtData();
//     }
//   }, 2000);
// }

// // callback hell or pyramid of doom
// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data1");
// asyncFunc1().then((res) => {
//   console.log("fetching data2");
//   asyncFunc2().then((res) => {});
// });

// console.log("fetching data2");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log(res);
// });

// const URL = "https://cat-fact.herokuapp.com/facts"
// const factPara = document.querySelector("#fact");
// const button =document.querySelector("#button");

// const getFacts = async () => {
//     console.log("getting data....")
//     let response = await fetch(URL);
//     console.log(response.status);
//     let data = await response.json();
//     factPara.innerText = data[2].text;
// }
// button.addEventListener("click", getFacts);

// const str = "hre krishna hare krishna krishna krishna hare hare";

// const obj = {};

// for (let x of str) {
//   if (obj[x]) {
//     obj[x] += 1;
//   } else obj[x] = 1;
// }
// console.log(obj);

const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
