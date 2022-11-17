const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
let cookingTime = 0
const pizzaPrice = 80

//Put your Javscript code here:
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

const orderName = prompt ("Enter the name of the pizza you want to order today.");

const orderQuantity = prompt (`How many of ${orderName} do you want`);

const orderTotal = orderQuantity * pizzaPrice;

if(
    orderName === vegetarian || 
    orderName === hawaiian || 
    orderName === pepperoni)
    {

} else {
    alert(`${orderName} is not on the menu!`)
}



if (orderQuantity <= 2) {
cookingTime = 10;
} else if (orderQuantity >= 2 && orderQuantity <5) {
    cookingTime = 15;
    } else {
        cookingTime = 20;
    }


alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime} minutes.`);
