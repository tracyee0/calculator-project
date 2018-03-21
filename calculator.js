function Me()
{
    var identity=document.getElementById("yourName")
    var myIdentity= identity.value
    document.getElementById("showName").innerHTML=( "WELCOME!!! "+" " + myIdentity)
}


function add(num1,num2)
{
    var identity=document.getElementById("yourName")
    var myIdentity= identity.value

    var number1= document.getElementById("input1")
    var num1= number1.value

    var number2= document.getElementById("input2")
    var num2= number2.value
    var sum= parseFloat(num1) + parseFloat(num2) 
    
    document.getElementById("answer").innerHTML=("HEY " + myIdentity +"  "+ num1 + "+" + num2 + " = " + sum )

}

function subtract(num1,num2)
{
    var identity=document.getElementById("yourName")
    var myIdentity= identity.value

    var number1= document.getElementById("input1")
    var num1= number1.value

    var number2= document.getElementById("input2")
    var num2= number2.value
    var result= parseFloat(num1) - parseFloat(num2) 

    document.getElementById("answer").innerHTML=("HEY " + myIdentity +"  "+ num1 + "-" + num2 + " =" + result )


}
function multiply(num1,num2)
{
    var identity=document.getElementById("yourName")
    var myIdentity= identity.value

    var number1= document.getElementById("input1")
    var num1= number1.value

    var number2= document.getElementById("input2")
    var num2= number2.value
    var result= parseFloat(num1) * parseFloat(num2) 

   document.getElementById("answer").innerHTML=("HEY " + myIdentity +"  "+ num1 + "x" + num2 + " =" + result )
}
function divide(num1,num2)
{
    var identity=document.getElementById("yourName")
    var myIdentity= identity.value

    var number1= document.getElementById("input1")
    var num1= number1.value

    var number2= document.getElementById("input2")
    var num2= number2.value
    var result= parseFloat(num1) / parseFloat(num2) 
    
    document.getElementById("answer").innerHTML=("HEY " + myIdentity +"  "+ num1 + "/" + num2 + " =" + result )
}

