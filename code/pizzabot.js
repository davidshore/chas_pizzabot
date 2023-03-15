const vegetarian = "Vegetarian Pizza"
const hawaian = "Hawaian Pizza"
const pepperoni = "Pepperoni Pizza"
let orderName = ""
let orderQuantity = 0
const message2 = `Get out of here!`
const pizzaPrice = 80

//Put your Javscript code here:

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaian} and ${pepperoni} `);




orderName = prompt("Enter the name of the pizza you want to order today.");


if (checkOrderName(orderName)) {
    orderQuantity = prompt(`How many of ${orderName}  do you want.`);
    const message = `Great, I'll get started on your ${orderName} right away, it will take ${cookingTime(orderQuantity)} minutes and cost ${totalCost(orderQuantity)} kr`
    alert(message)
}

else {
    alert(message2);
}

function checkOrderName(orderName) {
    if (orderName === vegetarian || orderName === hawaian || orderName === pepperoni) {
        return true;
    }
    else {
        return false;
    }
}

function totalCost(orderQuantity) {
        return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
    if (orderQuantity <= 3) {
        return 10
    } else if (orderQuantity <= 5) {
        return 15
    } else if (orderQuantity >= 6) {
        return 20
    }


}