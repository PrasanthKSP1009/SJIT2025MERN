// Contional Statement
/*
1. Normal if
2. if...else...
3. nested if...
4. else if ladder
5. swtich

if(5>10){
    console.log(true);
}
else{
    console.log(false);
}
*/
// Looping Statement
/*
1. while
2. do...while
3. for(;;)
4. forin
5. forof
6. forEach
*/
/*
//forin loop
array = [10,20,30,"abc",true,"hello",[10,20,30]]
object1 = {
    "firstname":"St. Joseph",
    "lastname" :"Instute of Technology",
    "depts":["CSE","IT","AD","ECE"],
    "training": "MERN"
}

for (i in object1){
    console.log(i);
}*/


//forof loop
/*
array = [10,20,30,"abc",true,"hello",[10,20,30]]
object1 = {
    "firstname":"St. Joseph",
    "lastname" :"Instute of Technology",
    "depts":["CSE","IT","AD","ECE"],
    "training": "MERN"
}

for({key,value} of Object.entries(object1)){
    console.log(key,value);
}
*/

//forEach loop

//array = [10,20,30,"abc",true,"hello",[10,20,30]]
object1 = {
    "firstname":"St. Joseph",
    "lastname" :"Instute of Technology",
    "depts":["CSE","IT","AD","ECE"],
    "training": "MERN"
}

Object.entries(object1).forEach((key,ele)=>{
    console.log(key,ele);
})
