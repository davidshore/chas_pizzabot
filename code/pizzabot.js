const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

// Greeting, including pizza-variables.
alert(
    "Hey! Happy to serve your pizza. On our menu we have " +
        vegetarian +
        ", " +
        hawaiian +
        " and " +
        pepperoni
);

// Save orderName
const orderName = takeOrder();

// Ask how many
const orderQuantity = prompt("How many of " + orderName + " do you want?");

// calculate price
const orderTotal = totalCost(pizzaPrice, orderQuantity);
const time = cookingTime(orderQuantity);

alert(
    "Great, I'll get started on your " +
        orderName +
        " right away, it will cost " +
        orderTotal +
        " kr. The pizzas will take " +
        time +
        " minutes."
);

//functions

function takeOrder() {
    // asking the user what they want till they get it right.
    while (true) {
        const tempName = prompt(
            "Enter the name of the pizza you want to order today."
        );
        if (checkOrderName(tempName)) {
            // return name if it is on the menu.
            // break the loop.
            return tempName;
        } else alert("That pizza is not on the menu.");
    }
}

// returns true or false if name is on the menu.
function checkOrderName(name) {
    if (name == vegetarian || name == hawaiian || name == pepperoni) {
        return true;
    } else return false;
}

//Calculate cooking time based on how many pizzas.
function cookingTime(qnt) {
    if (qnt < 3) {
        return 10;
    } else if (qnt > 2 && qnt < 6) {
        return 15;
    } else return 20;
}

//Calculate total cost based on pizza price and how many pizzas.
function totalCost(price, qnt) {
    return price * qnt;
}
