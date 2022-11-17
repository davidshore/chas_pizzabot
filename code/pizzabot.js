const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

alert(
    `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

const orderName = prompt(
    "Enter the name of the pizza you want to order today."
);

if (checkOrderName(orderName)) {
    const orderQuantity = prompt(`How many of ${orderName} do you want?`);

    alert(
        `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(
            orderQuantity
        )} kr. The pizzas will take ${cookingTime(orderQuantity)} minutes.`
    );
} else {
    alert(`Sorry we don't serve ${orderName} here`);
}

function checkOrderName(name) {
    if (name == vegetarian || name == hawaiian || name == pepperoni) {
        return true;
    } else {
        return false;
    }
}

function totalCost(quantity) {
    return quantity * pizzaPrice;
}

function cookingTime(quantity) {
    if (quantity <= 2) {
        return 10;
    } else if (quantity <= 5) {
        return 15;
    } else {
        return 20;
    }
}
