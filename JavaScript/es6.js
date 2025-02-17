// 1. variables - refer declarationsAndDatatypes.js to see variables

// 2. arrow Function
/*
function testFunction(){
    console.log("Test Function");
}
testFunction()

var arrowFunction = () => {
    console.log("Arrow Function");
}

arrowFunction()

var testArrowFunction = () => {
    console.log("This is test arrow function");
}
testArrowFunction()
*/
/*
//3. Scoping
var a = 10
console.log(a);//10
//Scoping starts
{
    a = 20;
    console.log(a);//20
    const b = 30;
    console.log(b);//30
    let c = 40;
    console.log(c);//40
    var e = 50;
    console.log(e);//50
    a = 30;
    console.log(a);//30
}
console.log(a);//30
console.log(e);//50
//console.log(c);//ReferenceError
//console.log(b); // Reference Error
*/
//4. ternary operator
/*
a = 11
console.log((a%2)?"Odd":"Even");
*/
/*
//5. Spread Operator(...)
stud1year = ["user1","user2","user3"]
stud2year = ["user4","user5","user6"]
stud3year = ["user7","user8","user9"]
stud4year = ["user10","user11","user12"]
studDB = [...stud1year,...stud2year,...stud3year,...stud4year]
console.log(studDB);
alumniDB = stud4year
console.log(alumniDB);
*/
/*
// 6. Rest Operator(...)

function studentDB(...studDataBase){
    console.log(studDataBase);
}
studentDB(studDB)
*/

/*
// 7.Destructing Operator
var array = [10,20,30,40,50,60]
var [a,b,c,d,e,f] = array
console.log(a,b,c,d,e,f);
*/

// 8. Hoisting

/*
//1. variable Hoisting
console.log(a);
const a = 10;
console.log(a);
*/

//2. Functional Hoisting
/*
funHoisting()

function funHoisting(){
    console.log("Checking Functional Hoisting");
}
// Arrow Function
// funHoisting = () =>{
//     console.log("Checking Functional Hoisting");
// }
*/

// 9. class and Objects

class ClassEg{
    classFun=()=>{
        console.log("Hello Function from class");
        return 1;
    }
}

// obj = new 
console.log(new ClassEg().classFun());