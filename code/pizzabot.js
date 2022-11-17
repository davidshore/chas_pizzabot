const vegetarian = "Vegetarian"
const hawaiian = "Hawaiian"
const pepperoni = "Pepperoni"

const pizzaPrice = 80

//Put your Javscript code here:

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

const orderName = prompt(`Enter the name of the pizza you want to order today.`);

// `checkOrderName()` which should take the `orderName` variable as an argument and return `true` or `false` if the pizza is on the menu or not.

function checkOrderName(orderArgument) {
    if (orderName == vegetarian){
        alert(`you chose ${vegetarian}`)
    }
    else if (orderName == hawaiian){
        alert(`you chose ${hawaiian}`)
    }
    else if (orderName == pepperoni){
        alert(`you chose ${pepperoni}`)
    } else {
        alert('try again')
    } 
}

checkOrderName(orderName);

const orderQuantity = prompt(`How many of ${orderName} do you want?`);

//`cookingTime()` which takes `orderQuantity` and returns the number of minutes it will take to finish the order.

let cookTime = 0;
function cookingTime(cookingArgument) {
    
    if (orderQuantity <= 2) {
        cookTime = 10
    }
    else if (orderQuantity == 3 || orderQuantity == 4 || orderQuantity == 5 ) {
        cookTime = 15
    }
    else if (orderQuantity > 6){
        cookTime = 20
    }
}




// Calculate the total price of the order using the `orderQuantity` and `pizzaPrice` variables and store it in a variable called `orderTotal`. 
// `totalCost()` which takes `orderQuantity` as an argument and returns the total cost for the order.

function totalCost (quantityArgument) {
    const orderTotal = pizzaPrice * orderQuantity;
    alert(`Great, I'll get started on your ${orderName} Pizza right away, it will cost ${orderTotal} kr. Your order will take ${cookTime} minutes.` )
}

cookingTime(orderQuantity)
totalCost(orderQuantity)

