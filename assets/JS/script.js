
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


//container are just to store different types of data, we use 3 key word, let, const and var 
/*
* simply calling the varibale by its name to print it out.
*/

let fruits = ['apple', 'orange', 'banana'];
let myHtml = '<ol>';

for (let i = 0; i < fruits.length; i++) {
  myHtml = myHtml + '<li>' + fruits[i] + '</li>';
}
myHtml += '</ol>';

console.log(myHtml);


console.log("******************** Detecting data types using typeof operator as operator and as a function ******************");
console.log(typeof "this is a string ");
console.log(typeof 123);
console.log(typeof 3.4);
console.log(typeof true);
console.log(typeof([1,3,5,6,7]));
console.log({Model:"BMW",Year:2001, horsePower:320 });

let nr_tst=parseFloat(window.prompt("Enter numbers to get result: "));
console.log("Result is: "+ nr_tst);
console.log("number to binnary: "+ (Math.abs(51247).toString(2)));

let nr_a=1.02564;
let nr_b=1.03;
let res=((nr_a*10+nr_b*10)/10);
console.log("End Result is: "+res);

//creating an object 
let human={
    fullname:"",
    sex:"",
    dateOfBirth:""
}


let petNames = {
    dog: 'Fido',
    cat: 'Max',
    fish: 'Bubbles',
    python: 'Mr. Slithers',
  }
  console.log("######################## ");
  for (let i in petNames){
    console.log(petNames[i], 'is a', i);
  }
console.log("##############################");
let company = {
    name: 'Apple, Inc',
    founded: 1976,
    financials: {
      incomeStatement: {
        years: [2020, 2019, 2018],
        revenue: [125, 120, 115],
        costs: [100, 100, 100],
        profit: [25, 20, 15]
      },
      balanceSheet: {
        years: [2020, 2019, 2018],
        assets: [200, 190, 180],
        liabilties: [100, 95, 90],
        equity: [100, 95, 90]
      },
      cashFlow: {
        years: [2020, 2019, 2018],
        operating: [75, 65, 55],
        investing: [22, 20, 18],
        financing: [-94, -80, -75]    
      }
    },
    competitors: ['Microsoft', 'Amazon', 'Samsung']
  }
  
  console.log(company.name);
  console.log(company.competitors);
  console.log(company.competitors[0]);
  console.log(company.financials.incomeStatement.years);
  console.log(company.financials.incomeStatement.revenue[0]);
  console.log(Object.entries(company.financials));

  let htmlDivBg=document.getElementById("dynamic-background");
  let index=0;
  setInterval(function(){
    let htmlElementDiv=document.getElementById('dynamic-background');
    index++;
    switch(index){
        case 5:htmlElementDiv.style.backgroundColor  = 'yellow';
                      
        break;
        case 10:htmlElementDiv.style.backgroundColor = 'orange';break;
        case 15:htmlElementDiv.style.backgroundColor = 'blue';break;
        case 20:htmlElementDiv.style.backgroundColor = 'red';break;
    }
    htmlElementDiv.style.transition='background-color 2s ease-in-out' 
    if(index>20){
        index=0;
    }
  },500)
   

console.log("++++++++++++++++++++++++++++++");
let today = 1597673635658;
let date=new Date(today);
let day=date.getDay();
let month=date.getMonth();
let year=date.getFullYear();
console.log(day);
console.log(month);
console.log(year);
