document.getElementById("btnexample").addEventListener("click",e=>{
    let enteredName= document.getElementById("txtname").value;
    let age= document.getElementById("txtage").value;
    
    let output="Hello"  +  enteredName +  "you are" +age+ "years old!";
    document.getElementById("result").innerHTML=output;
});


function validate(){
    let name=document.forms["frmexample"]["name"].value
    let email=document.forms["frmexample"]["email"].value
    let comments=document.forms["frmexample"]["comments"].value
    let error=false;
    let output="false";

    if(name.trim()==""){
        document.forms["frmexample"]["name"].style.backgrounColor="red";
        output += "please enter a name <br>";
        error= true;
    
    }
    if(email ==""){
        error = true;
        output +="Please enter an email address<br>";

    }
    if(comments){
        error= true
        output +="please write a comment <br>"
    }


    document.getElementById("result").innerHTML=output;
    return !error;

}

function validate()