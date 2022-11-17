const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

let orderName = prompt("Enter the name of the pizza you want to order today.");

if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {


    let orderQuantity = prompt(`How many of ${orderName} do you want?`);

    let orderTotal = orderQuantity * pizzaPrice;
    let pizzaTime = null

    if (orderQuantity <= 2) {
        pizzaTime = "The pizzas will take 10 minutes."
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        pizzaTime = "The pizzas will take 15 minutes."
    } else {
        pizzaTime = "The pizzas will take 20 minutes."
    }

    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. ${pizzaTime}`);
} else {
    alert(`Sorry we dont serve ${orderName}!`)
}


function checkOrderName(orderName) {
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
        return true;
    } else {
        return false
    }
}

function totalCost(orderQuantity) {
    return orderTotal = orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
    let pizzaTime = null

    if (orderQuantity <= 2) {
        pizzaTime = "The pizzas will take 10 minutes."
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        pizzaTime = "The pizzas will take 15 minutes."
    } else {
        pizzaTime = "The pizzas will take 20 minutes."
    }
}