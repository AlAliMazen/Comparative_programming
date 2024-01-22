
let age=18.7;
let anyName="Mazen Al Ali";
let isLegal=true;

let float=(34/2%3)+8-10*2;
let Auto={
    Brand:"BMW",
    Year:1995,
    Color:"Blue"
};

let temperaturs=[2,5.2,19];
//printing values
console.log("My name is : "+anyName+" and I am "+age);
console.log("Access production year of object: "+Auto['Year']);
console.log("hi from Js "+(age-8));

if(Auto.Year<=1990){
    console.log("Auto was manufactured in "+Auto.Year)
}else{
    console.log("Auto is not older than 1990");
}

let myArray=["Mazen", "Fares", "Ali", "Essam"];
for(let i=0;i<myArray.length;i++){
    console.log("Index: "+i+ "Value is: "+ myArray[i]);
}