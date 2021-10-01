

async function order(){
    try{
        await abcd;
    }
    catch(error){
        console.log("abcd doesn't exist",error)
    }
    finally{
        console.log("runs code anyways")
    }
}
order()