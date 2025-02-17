/*
function SJITCollege(message,abc){
    console.log(message);
    abc()
}
function callbackSJIT(){
    console.log("Welcome back to SJIT");
}
SJITCollege("Welcome to SJIT",callbackSJIT)
*/

function formSubmission(cbFun){
    if(cbFun())
        console.log("Form Submitted Successfully")
    else{
        console.log("Form Submission Unsuccessful");
    }
}
function formValidation(){
    console.log("Form Validation Successful");
    return true
}
formSubmission(formValidation)