const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
const greeting = alert(`"Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)
const orderName = prompt("Enter the name of the pizza you want to order today.");

function checkOrderName(orderName) {
    if (orderName == vegetarian || orderName == hawaiian || orderName == pepperoni) {
        return true;
    } else {
        alert(`${orderName} is not a valid option`);
        return false;
    }
}

function totalCost (orderQuantity) {
    const orderTotal = orderQuantity * pizzaPrice;
    return orderTotal;
}

function cookingTime(orderQuantity){
    if (orderQuantity <= 2){
        return alert(`Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(orderQuantity)} kr. The pizzas will take 10 minutes.`)
        } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        return alert(`Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(orderQuantity)} kr. The pizzas will take 15 minutes.`)}
        else if (orderQuantity >= 6) {
        return alert(`Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(orderQuantity)} kr. The pizzas will take 20 minutes.`)}
        }

if (checkOrderName(orderName)) {
    const orderQuantity = prompt(`How many of ${orderName} do you want?`);
    cookingTime(orderQuantity);
}