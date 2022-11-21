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
        Output.innerHTML += `<h3>${orderNumber} ${orderName} Pizza <br> 
        <h4>Great, I'll get started on your ${orderName} Pizza right away, it will cost  ${TotalPrice} kr Price </h4>
         </h3>` 
    }
   
})
orderFinish.addEventListener('click',()=>{
    let back =document.querySelector('.comeback') ;
    back.style.display = 'block';
     back.innerHTML = ` <h2 class = "bye">We hope you come again </h2> <br>
    <button  id="bye" class="order-finish" type="submit" >OK <br> <br>
    Close And Back To Order
    </button>`
    OrderMain.style.display = 'none';
    document.querySelector('#bye').addEventListener('click',()=>{
        Greet.style.display = 'flex';
        back.style.display = 'none';
   })
    
})




