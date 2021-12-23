
    var num1 = document.getElementById("number1");
    var num2 = document.getElementById("number2");
    var sign = document.getElementById("operator");
    var result = document.getElementById("op");


function calculate(){
    //console.log(num1.value);
    if(num1.value ===""){
        alert("enter num2 value")
        result.innerHTML = "Number not entered"
    }else if(num2.value ===""){
        alert("enter num2 value");
        result.innerHTML = "Number not entered";
    }
    else{
    if(sign.value == "+"){
        result.value =parseInt( num1.value) + parseInt(num2.value);
    }
    else if(sign.value == "-") {
     result.value=parseInt( num1.value) - parseInt(num2.value);
       console.log( result.value);
    }
    else if(sign.value == "*"){
      result.value=parseInt( num1.value) *parseInt( num2.value);
    }
     else if(sign.value == "%"){
        result.value= parseInt(num1.value )% parseInt(num2.value);
    }
    else{
        result.value =parseInt( num1.value) /parseInt( num2.value);
    
    }
}
}