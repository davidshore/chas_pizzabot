/* const result = prompt("vad är din favorit färg?");
//alert(result);

//const message =" Din favorit färg är:" + result;

const message = `Din favorit färg är: ${result}`;

alert(message); */

/* //object
const person1 = {name:"Elliot", dish:"pizza", price:99};
const person2 = {name:"Aria", dish:"pasta", price:80};
const person3 = {name:"Sophie", dish:"nudlar", price:70};

//arrey
const customers = [person1,person2,person3];

//Beräkna totala beloppet

let totalPrice = 0; */

/* for(let i =0; i < customers.length; i++){
    //totalPrice = totalPrice + customers[i].price;
    totalPrice += customers[i].price;



} */

/* //alert(totalPrice);

function calculateTotalPrice(theCustomers){
    for(let i =0; i < customers.length; i++){
    //totalPrice = totalPrice + customers[i].price;
    totalPrice += customers[i].price;

}
return totalPrice;
}

const totalPrice = calculateTotalPrice(customers);

alert(totalPrice);



// Gör alert av vad alla har ätit */


const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Peperoni Pizza";

const pizzaPrice = 80;

const message = "Hey, Happy to serve your pizza. On our menu we have Vegetarian Pizza, Hawaiian Pizza and Pepperoni Pizza";
alert(message);


let orderName = prompt("Please enter the name of the pizza you want to order today.");

const orderQuantity = prompt(`How many ${orderName} pizzas do you want?`);


let orderTotal = pizzaPrice * orderQuantity;

 alert(`Great, I'll get started on your ${orderName}. it will cost you ${orderTotal} kr`);
    
//functions

const pizzaOk = checkOrderName();
function checkOrderName(orderName){
    
    if( orderName === vegetarian || orderName === hawaiian || orderName === pepperoni){
        return true;
    }else{
        return false;
    }
}

function totalCost(orderQuantity) {
    return orderTotal;
}
let total = totalCost();



function cookingTime() {

    if ( orderQuantity >=0 && orderQuantity <=2 ) {
        alert("The pizzas will take 10 minutes.")
    }

    else if (orderQuantity >=3 && orderQuantity <=5 ){
       alert("The pizzas will take 15 minutes.")
    }

    else{ (orderQuantity >=6)
        alert("The pizzas will take 20 minutes.")
    } 
    
}
const cooking = cookingTime();


   




