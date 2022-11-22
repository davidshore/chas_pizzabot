const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80
let pizzaOnTheMenu = false;
let orderName;



function checkOrderName(theOrderName) {
if(theOrderName == vegetarian || theOrderName == hawaiian || theOrderName == pepperoni) {
    return true;
}else{
   return false;
}
}


function totalCost(theOrderQuantity) {
    return pizzaPrice * theOrderQuantity;
}



function getCookingTime(theOrderQuantity) {
if(theOrderQuantity <=2){
    return 10;
} else if (theOrderQuantity <= 5){
    return 15;
} else {
    return 20;
}
}


alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);



while (pizzaOnTheMenu == false) {
    orderName = prompt("Enter the name of the pizza you want to order today.")
    pizzaOnTheMenu = checkOrderName(orderName);
}


const orderQuantity = prompt(`How many of ${orderName} do you want?`);

const orderTotal = totalCost(orderQuantity);

const cookingTime = getCookingTime(orderQuantity);


alert (`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime} minutes.`);