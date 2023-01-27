//const myname = "john";
//console.log(myname);
//myname = "alex";// this will show error as we are trying to chnage the reference


//const a=[];
//console.log(a);
//a.push("alex")
//console.log(a);//here it will create empty array than it will appoint refernce to alex

//const a="skype";// will show error as it can't be redecalred and can't refrenced
//let aa="john";
//console.log(aa);
//aa="alex";//let allow to redeclare
//console.log(aa);
//var aa="john";
//console.log(aa);
//var aa="alex";//let allow to redeclare and rerefrenced
//console.log(aa);

//var is global and const and let if functional scope



/*function add(num1 ,num2)
{
    var num3=5;
    return num1+num2;
}
console.log(num3);//error here var is as functional scope*/

/*{var num=5;}
console.log(num);//herer it act as global
//var act as global and functional

*/

//string interpolation
/*let a="garvita";
let b="rai";
connsole.log(a+" "+b);

let c=a+" "+b//wastage of memory
let c=`${a} ${b}`;
console.log(c);*/



//default params
/*
function add(a,b)
{
    return a+b;
}

let add = (a,b) =>{//arrow function
    return a+b;
}
console.log(add(1,2));
let add = (a,b) => a+b;
let add = (a,b) =>{//arrow function
   console.log(a);
   console.log(b);

    return a+b;
}
console.log(add(1));//output will be 1 undefined  NaN

let add = (a,b=2) =>{//arrow function
   console.log(a);
   console.log(b);

    return a+b;
}
console.log(add(1));now it will correct output


rest and spread operator in arrays nad object
let array =[5,10,15,20,25];
//spread operator
//spread-> ...
console.log(...array);//defloring
let array1=[100...array];[100,5, 10, 15, 20, 25]//taking out of continguos memory location

//Rest->...
let max=(a,b) =>Math.max(a,b);
let max=(a,b),c =>Math.max(a,(Math.max(b,c)));
let test=(...args) =>{
    let max=Number.MIN_VALUE;
    for( let number of numbers){
        max=Math.max(max,args);
    }
    return max;
}
console.log(test(1,2,3,4,5,6));


//for object
let object={
    name:"abc",
    age:21,
    city:"sds"
};
let object2=object
let object2={...object"};//clone of object
let object2={...object,name:"cde"};//overwrite name

let object={
    name:"abc",
    age:21,
    city={
        nanme:"sds",
        age:21
};
object2.city.name="john";//it will get updated
