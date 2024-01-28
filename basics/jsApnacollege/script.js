// let divs = document.querySelectorAll(".box");
// let indx = 1;
// for (div of divs) {
//   div.innerText = `new unique vale ${indx}`;
//   indx++;
// }

// let div = document.querySelector("div");
// console.log(div);

// let name = div.getAttribute("name")
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// div.style.fontSize = "23px";

// let p = document.querySelector("p")
// p.after(newBtn)

// let newHeading = document.createElement("h1");
// newHeading.innerHTML  = "<i>Hi, I am new!</>";

// document.querySelector("body").prepend(newHeading);

// let newBtn = document.createElement("button")
// newBtn.innerText = "clickMe";

// newBtn.style.color = "white"
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn);

//ans2

// let para = document.querySelector("p");

// let btn1 = document.querySelector("#btn1");

// // btn1.onclick = () =>{
// //     console.log("btn1 was clicked");
// //     let a = 25;
// //     a++;
// //     console.log(a);
// // };

// btn1.addEventListener("click", (evt) => {
//   console.log("button1 was clicked- handler 1");
// });

// btn1.addEventListener("click", () => {
//   console.log("button1 was clicked-handler 2");
// });

// const handler3 = ()=>{
//   console.log("button1 was clicked-handler 3");
// };
// btn1.addEventListener("click", () => {
//   console.log("button1 was clicked-handler 4");
// });

// btn1.removeEventListener("click",)

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are inside div");
// }

// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let CurrentMode = "light"; //dark
// modeBtn.addEventListener("click", () => {
//   if (CurrentMode === "light") {

//     CurrentMode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   } else {
//     CurrentMode = "light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }
//   console.log(CurrentMode);
// });
