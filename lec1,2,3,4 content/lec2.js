/*array functon
1.map():give new array basis of old array having some operation over it

let array=[1,2,3,4,5];
let newarray=[];
for(let i=0;i<array.length;i++)
{
    newarray[i]=array[i]*array[i];
}
console.log(newarray);
let array=[1,2,3,4,5];
let newarray=array.map(formap);
function formap(e)
{
    return e*e;
}
console.log(newarray);
//in js,a function is also a js object
let newarray=array.map((e,index) =>e*e)//function within functon

2.forEach():for loop only

let a=[1,2,3,4,5];
a.forEach((e,index)=>{
    e*=e;
    console.log(e)});
1,2,3,4,5

it doesnot retun array where as in map it return array


3.filter():
let a=[12,43,123,65,3,7];
a.filtr((e) =>
   retunr e>=30
    return 
);
console.log(a);43,123,65


4.find():
let a=[1,2,3,4,5];
let b=a.find((value) =>{
    return value>20;
});
console.log(b);

5.sort()
let a[12,23,45,3,21];
console.log(a.sort());//return new array
in case of string and char so arange in lexicography
let aa=a.sort((el1,el2) =>
{
    el1=Number(el1);
    el2=Number(el2);
    return el1-el2;
});
console.log(sortedArray);//comparative functon


//object destructing
let object1={
    name:"alex",
    age="21",
    address :{
        street:"ed",
        city;"eds",
        passportnum:42424
    }
};
console.log(object1,adress,passpotnum);
let{name:myname,age}=object1;cantnot redeclare
console.log(myname,age);


Array matching:
if(a1==a2)//same refernce or same length

object matching:
let obj1={name:"BX",age:21};
let obj2={name:"BX"};
functon arerqual{obj1,obj2}{
    if(obj1==obj2){
        return true;
    }
    if(Object.keys(obj1).length!=Object.keys(obj2).length)
return false;}

for( let key of Objects.keys(ob1))
{
    if(type obj2[key]==="underdefined"){
        return false;
    }
    if(obj2[key] !== obj1[key])
    retunr false;
}}
return false;
}
console.log(areEqual(obj1,obj2));

MAP and SET:


let map=new Map();
map.set(1,"shantanu");
map.set(2,"alex");
console.log(map);
map.values();

let set =new Set();
set.add(1);
set.add(-1);
console.log(set);



class
class Animal{
    nooflegs;
    color;
    family;
    sound;
    constructor(nooflegs,
    color,
    family,
    sound){nooflegs=nooflegs;
  
    color=color;
    family=family;
    sound=sound;

    }
}
let animal=new Animal(2,"red","cow","bow");
console.log(animal);













