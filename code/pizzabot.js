const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
let orderName = ""
let orderQuantity = 0
let orderTotal = 0
let cookingTime = 0

const pizzaPrice = 80

//Put your Javscript code here:

const message = (`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni} `);
alert(message); 

orderName = prompt("Enter the name of the pizza you want to order today.");
const message2 = "Your order is: " + orderName;
alert(orderName);

orderQuantity = prompt(`How many of ${orderName} do you want? `);
const message3 = "I want " + orderQuantity;
alert(orderQuantity);


orderTotal = orderQuantity * pizzaPrice;

if (orderName === vegetarian || 
    orderName === hawaiian || 
    orderName === pepperoni)
    {
   
    if (orderQuantity <= 2) {
    cookingTime = 10;
   } 
   else if(orderQuantity >= 2 && orderQuantity <= 5){
    cookingTime = 15;
   }
   else {
    cookingTime = 20;
   }
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime} minutes.`);
}
else {
    alert(orderName + " is not on the menu!")
}



function checkOrderName(orderName) {
    if(orderName === vegetarian || 
        orderName === hawaiian || 
        orderName === pepperoni) {
            return true;}
            else {
                return false;
            }
}

function totalCost(orderQuantity) {
    return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
    if (orderQuantity <= 2) {
        cookingTime = 10;
    }
    else if(orderQuantity >= 2 && orderQuantity <= 5){
        cookingTime = 15;
    }
    else {
        cookingTime = 20;
    }
} 
