const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

const menu = [vegetarian, hawaiian, pepperoni]

alert("Hey! Happy to serve your pizza. On our menu we have " + menu[0] + " , " + menu[1] + " and " + menu[2]);
const orderName = prompt("Enter the name of the pizza you want to order today.");
const orderNameTrueFalse = checkOrderName(orderName);

let orderQuantity;
if (orderNameTrueFalse) {
    orderQuantity = prompt("How many of " + orderName + " do you want?");
    const totalPrice = totalCost(orderQuantity);
    const totalWaitTime = cookingTime(orderQuantity);

    alert("Great, I'll get started on your " + orderName + " right away, it will cost " + totalPrice + "kr. The pizzas will take " + totalWaitTime + " minutes.")
} else (
    alert("Invalid pizza name! On our menu we have " + menu[0] + " , " + menu[1] + " and " + menu[2])
)

function cookingTime(orderQuantity) {
    if (orderQuantity <= 2) {
        return 10;
    } else if (orderQuantity >= 6) {
        return 20;
    } else {
        return 15;
    }
}

function totalCost(orderQuantity) {
    return orderQuantity * pizzaPrice;
}


function checkOrderName(orderName) {
    let pizzaCount = 0;
    menu.forEach(pizza => {
        if (orderName === pizza) {
            pizzaCount = 1;
        } else {
            return;
        }
    })
    if (pizzaCount === 0) {
        return false;
    } else {
        return true;
    }
}
