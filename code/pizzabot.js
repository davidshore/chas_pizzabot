const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

let orderName = prompt('Enter the name of the pizza you want to order today. (as "X Pizza")');

function checkOrderName(name) {
    if (name == vegetarian || name == hawaiian || name == pepperoni) {
        return true;
    } else {
        return false;
    }
}

let orderValidation = checkOrderName(orderName);

while (!orderValidation) {
    orderName = prompt(`Please enter the name of a pizza on the menu: ${vegetarian}, ${hawaiian} or ${pepperoni}`);
    orderValidation = checkOrderName(orderName);
}

let orderQuantity = Number(prompt(`How many of ${orderName} do you want?`));

while (orderQuantity < 1 || isNaN(orderQuantity)) {
    orderQuantity = prompt(`Please enter 1 or more!`);
}

function totalCost(quantity){
    return quantity * pizzaPrice;
}

const orderTotal = totalCost(orderQuantity);

function calcCookingTime() {
    if (orderQuantity <= 2) {
        return 10;
    } else if (orderQuantity <= 5) {
        return 15;
    } else {
        return 20;
    };    
}

let cookingTime = calcCookingTime(orderQuantity);

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime} minutes.`)