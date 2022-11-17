const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const pizzaPrice = 80

//Put your Javscript code here:
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

const orderName = prompt ("Enter the name of the pizza you want to order today.");

checkOrderName(orderName)

const orderQuantity = prompt (`How many of ${orderName} do you want`);

const orderTotal = totalCost(orderQuantity);

cookingTime(orderQuantity)
  
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime} minutes.`);

function checkOrderName(orderName) {
    if(
        orderName === vegetarian || 
        orderName === hawaiian || 
        orderName === pepperoni)
        { return true;
    
    } else {
        alert(`${orderName} is not on the menu!`);
    }
}

function totalCost(orderQuantity) {
    return orderQuantity * pizzaPrice
}

function cookingTime(orderQuantity) {
    if (orderQuantity <= 2) {
        cookingTime = 10;
        } else if (orderQuantity >= 2 && orderQuantity <5) {
            cookingTime = 15;
            } else {
                cookingTime = 20;
            } 
}