document.getElementById("add").addEventListener("click", ()=>{
var num= document.getElementById("number1").value
var num1=document.getElementById("number2").value


sum=(+num)+(+num1);

var result=document.getElementById("result");
result.innerText=sum;

});

document.getElementById("subtract").addEventListener("click", ()=>{
    var num2= document.getElementById("number1").value
    var num3=document.getElementById("number2").value
    
    
    sum=(+num2)-(+num3);
    
    var result=document.getElementById("result");
    result.innerText=sum;
    
    });


var initial= document.getElementById("division")
initial.onclick=()=>{
    var num4= document.getElementById("number1").value
    var num5=document.getElementById("number2").value
    
    
    div=(+num4)/(+num5);
    
    var result=document.getElementById("result");
    result.innerText=div;
    
}

    
/*var initial1= document.getElementById("Multiply")
initial1.onclick=()=>{
    var num5= document.getElementById("number1").value
    var num6=document.getElementById("number2").value
    
    
    mul=(+num5)*(+num6);
    
    var result=document.getElementById("result");
    result.innerText=mul;
    
}*/


var initial1= document.getElementById("division")
initial1.onclick=()=>{
    var num6= document.getElementById("number1").value
    var num7=document.getElementById("number2").value
    
    
    div=(+num6)/(+num7);
    
    var result=document.getElementById("result");
    result.innerText=div;
    
}
