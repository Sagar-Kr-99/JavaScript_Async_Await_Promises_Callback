// Fruits is object


let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };




let order=(Fruit_name,call_production)=>{
    
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
        call_production();
        
    }, 2000);

  


}


let production=()=>{
    setTimeout(() => {
        console.log("Production has started")

        setTimeout(() => {

            console.log("Food has benn chopped")
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added `)
                setTimeout(() => {
                    console.log("Machine has been started")

                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} is selected`)
                        
                    }, 2000);
                    setTimeout(() => {
                        
                        console.log(`${stocks.toppings[0]} was added as toppings`)
                        setTimeout(()=>{
                            console.log("Serve Icecream")
                        },2000)
                    }, 3000);
                    
                }, 1000);

            },1000)
        }, 2000);
        
    });
}

order(0,production)




