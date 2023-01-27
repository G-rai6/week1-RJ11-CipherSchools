let promise = new Promise((fulfilled,nitFulfilled)={
 let num1 = 10;
 let num2 = 15;
 let sum = num1+num2;
 if(sum>24){
    fulfilled();
 } else{
    notfulfillled(new Error("promise not fulfilled"));
 }

});

promise.then(()=>{
    console.log("promise wal fulfilled")
}).catch(()=>{
    console.log("promise wal fulfilled")
});




function add(a,b){
    setTimeout(()=>
    {console.log(a+b);
    },5000);
    return a+b;
}


function add(a,b){
    let promise = new Promise((fulfilled,nitFulfilled)=>{
        setTimeout(()=>
        {console.log("inside settimeout");
        fulfilled(a+b);
        },5000);
        notfulfilled(new Error("promise not fulfilled"));

add(2,3).then(()=>{
    console.log("promise wal fulfilled")
}).catch(()=>{
    console.log("promise wal fulfilled")
});