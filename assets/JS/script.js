
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
    console.log("Index: "+i+ " Value is: "+ myArray[i]);
}

//will remove the last item
myArray.pop();

//will remove the first item and pushes the other to the left.
myArray.shift();
console.log("*******************************************");
for(let i=0;i<myArray.length;i++){
    console.log("Index: "+i+ " Value is: "+ myArray[i]);
}

//sorting the array
myArray.sort();
console.log("*******************************************");
for(let i=0;i<myArray.length;i++){
    console.log("Index: "+i+ " Value is: "+ myArray[i]);
}

//pushing new value to the end of the array 
myArray.push("Michael");
console.log("*******************************************");
console.log(myArray)

//Reversing : last will be the first and ....
myArray.reverse();
console.log(myArray);


//sorting againg 
myArray.sort();
console.log(myArray);

//creating objects in JS
let classRoom={
    capacity:25,
    grade:"Elementary",
    classLocation:['First Floor', "Right Row"]
}
let nrA;
let nrB;
let operation;
let result;

function pressedNumber(nr){
    console.log("coming nr is: "+ nr);
    if(nrA===undefined){
        nrA=nr;
        console.log("nr A is "+ nrA);
    }else{
        nrB=nr
        console.log("nr B is "+ nrB);
    }
    
}

function setOperation(op){
    operation=op;
}
function getResult(){
    if( operation!=undefined){
        switch(operation){
            case '+':result=nrA+nrB;break;
            case '-':result=nrA-nrB;break;
            case '*':result=nrA*nrB;break;
            case '/':result=nrA/nrB;break;
        }
        
    }
    console.log("Result is: "+result);
    nrA=undefined;
    nrB=undefined

    let tmp=document.getElementById("result-field");
    tmp.textContent=result;
    return result;
}


