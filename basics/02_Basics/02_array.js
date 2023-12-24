const marvel_heros = ["thor", "IronMan", "SpiderMan"]
const dc_heros = ["SuperMan" , "Batman" , "Flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Rohit"))

console.log(Array.from("Rohit"))

console.log(Array.from({name: "Rohit"})) // interesting

let score1 = 200;
let score2 = 400;
let score3 = 800;

console.log(Array.of(score1, score2, score3));