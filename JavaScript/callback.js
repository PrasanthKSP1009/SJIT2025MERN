function SJITCollege(message,abc){
    console.log(message);
    abc()
}
function callbackSJIT(){
    console.log("Welcome back to SJIT");
}
SJITCollege("Welcome to SJIT",callbackSJIT)