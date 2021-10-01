// Fruits is object


let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };




let order=(Fruit_name,call_production)=>{
    
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]}`)
        
    }, 2000);

    call_production();


}


let production=()=>{}

order(0,production)




