//function declaration
function greet(){
    console.log("Hello");
}
greet();

//function expression
let greet1=function(){
console.log("Hi!!");
}
greet1();
//shortcut of arrow function
const addition1=(x,y)=>x+y;

let result=addition(3,4);
console.log("The addition is:",result);


Array.forEach(mark =>{
    console.log(mark);

});

let marks1=[45,67,84];
let updatedMarks=marks1.map(mark =>mark+5);
console.log(updatedMarks);

let marks2=[45,67,89,89];
let updatedMarks=marks2.map(mark =>mark+5);
console.log(updatedMarks);

//filter
//all matching values
let marks2=[45,67,89,55,66];
let updatedMarks=marks2.filter(mark =>mark+5);
console.log(passed);
//find
//first matching value

let marks2=[45,67,89,55,66];


