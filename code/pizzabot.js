const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

function checkOrderName(x){


    if (x == "Vegetarian Pizza"){

        return true;

    }
    
    
    
    if (x == "Hawaiian Pizza"){

        return true;

    }
    
    
    
    if (x == "Pepperoni Pizza"){

        return true;

    }
    
    
    
    else {
        return false;


    }

}



const totalCost=(orderQuantity) => orderQuantity * pizzaPrice;

    

    

function cookingTime(orderQuantity){


    if(orderQuantity<=2){
    
    
        return 10;
    
    
    }

    else if(orderQuantity<=5){

        return 15;



    }
    
    
    
    
    else if(orderQuantity>=6){

        

        return 20;

    }


    




}






alert("Hey happy to serve you pizza On the menu we have "+ vegetarian +" "+ hawaiian +" and "+ pepperoni)




let orderName = prompt("Enter the name of the pizza you want to order today "+ vegetarian +" "+ hawaiian +" and "+ pepperoni+"",)

let order = checkOrderName(orderName);


if (order == true)  {



    
    let orderQuantity = Number(prompt("How many of "+ orderName +" do you want?",""));

    let price = totalCost(orderQuantity)

    let minutes = cookingTime(orderQuantity)

    
   

    alert("Great I get started on your "+ orderName +" right away. It will cost you : " + price +"kr"+" the pizza vill take" +minutes +"minutes")


}


else if (order===false){

    alert("error check your spelling")

}









  /*  if (orderName == "vegetarian"||"pepperoni"||"hawaiian"){

        
        let orderQuantity = Number(prompt("How many of "+ orderName +"do you want?",""));


        let orderTotal = orderQuantity * pizzaPrice;


        if(orderQuantity<=2){

            
            alert("Great I get started on your "+orderName+"right away. It will cost you : " +orderTotal +"kr"+" the pizza vill take 10 minutes")
            
            
            
        }
        
        
        else if(orderQuantity<=5){
            
            
            
           
            alert("Great I get started on your "+orderName+"right away. It will cost you : " +orderTotal +"kr"+" the pizza vill take 15 minutes")
            
            
        }
        
        else if(orderQuantity>=6){
            
            
            
            
            alert("Great I get started on your "+orderName+"right away. It will cost you : " +orderTotal +"kr"+ " the pizza vill take 20 minutes")
            
        }
        
        }
    
    
    
        else {

        alert("error")



}




*/
