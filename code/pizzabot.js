const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
let Greet= document.querySelector('.greet')
const pizzaPrice = 80
let ordrBTN = document.querySelector('.order-btn')
let OrderMain = document.querySelector('.order-main');
let odrdrSubmit = document.querySelector('.order-submit')
let orderInput = document.querySelector('.order-input')
let Output = document.querySelector('.output')
let orderFinish = document.querySelector('.order-finish')


//Put your Javscript code here:
document.querySelector('.order-1').innerHTML = vegetarian ;
document.querySelector('.order-2').innerHTML = hawaiian ;
document.querySelector('.order-3').innerHTML = pepperoni ;

ordrBTN.addEventListener('click',()=>{
    Greet.style.display = 'none';
    OrderMain.style.display = 'block';
   
    
})
odrdrSubmit.addEventListener('click',()=>{
    odrdrSubmit.innerHTML = 'Continue Order'
    let orderName = prompt('Enter the name of the pizza you want to order today.');
    if(orderName != null  ){
        let orderNumber = prompt(`How many of ${orderName} do you want?`)
        let TotalPrice = (pizzaPrice)*Number(orderNumber);
        Output.innerHTML += `<h3>${orderNumber} ${orderName} Pizza Price : ${TotalPrice} KR </h3>` 
       
    }
   
})
orderFinish.addEventListener('click',()=>{
    Greet.style.display = 'flex';
    OrderMain.style.display = 'none';
})



