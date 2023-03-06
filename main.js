(function(){
 })()

function sum(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let caixa = document.getElementById("resultado");
    
    let result = n1+n2;

    alert(result);
    caixa.innerHTML = "<h1>the sum result is "+result+"</h1>";
}
function sumClass(){
    let number = document.getElementsByClassName("number")
    let caixa = document.getElementById("resultado");
    
    let result = parseInt(number[0].value)+parseInt(number[1].value);
    alert(result);
    caixa.innerHTML = "<h1>the sum result is "+result+"</h1>";
}
function sumtag(){
    let numbers = document.getElementsByTagName("input")
    let caixa = document.getElementById("resultado");
    
    let result = parseInt(numbers[4].value)+parseInt(numbers[5].value);
    alert(result);
    caixa.innerHTML = "<h1>the sum result is "+result+"</h1>";
}

