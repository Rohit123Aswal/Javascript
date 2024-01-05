const myNums = [1, 2, 3 ]

const mytotal = myNums.reduce( (acc, currVal)=> acc+currVal,0)

console.log(mytotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "jMobileDev",
        price: 5999
    },
    {
        itemName: "Data Science",
        price: 12999
    }
]
const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(pricetopay);