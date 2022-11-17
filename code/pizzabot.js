const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)

let orderName = prompt("Enter the name of the pizza you want to order today");
checkOrderName(orderName)

let orderQuantity = prompt(`How many of ${orderName} do you want?`)
let orderTotal = totalCost(orderQuantity);

alert(`Great, I'll get started on your ${orderName} rigth away, it will cost ${orderTotal} kr.`);

cookingTime(orderQuantity)

function checkOrderName(orderName) {
    if(orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
        return true
    }else{
       alert(`Sorry we dont serve ${orderName}.`);
    }
}

function totalCost(orderQuantity) {
    return orderQuantity * pizzaPrice
}

function cookingTime(orderQuantity) {
    if(orderQuantity > 0 && orderQuantity <= 2 ) {
        alert(`The ${orderQuantity} ${orderName} will take 10 minutes.`)
    }
    if(orderQuantity >= 3 && orderQuantity <= 5 ) {
       alert(`The ${orderQuantity} ${orderName} will take 15 minutes.`)
    }
    if(orderQuantity >= 6) {
        alert(`The ${orderQuantity} ${orderName} will take 20 minutes.`)
    }
}











