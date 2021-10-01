// Fruits is object

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };


 let is_shop_open=true;


let toppings_choice=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(
                console.log("Which topping would you love? ")
            )
            
        },3000)

    })
}

async function kitchen(){
    console.log("A")
    console.log("B")
    console.log("C")
    await toppings_choice();
    console.log("D")
    console.log("E")
}
kitchen()
console.log("cleaning dishes")
console.log("cleaning the tables")
console.log("taking others order")