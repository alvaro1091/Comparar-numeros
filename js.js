function Revisar(){
    var num1;
    var num2;
    var resultado;
     num1=document.getElementById("num1").value;
     num2=document.getElementById("num2").value;
    
    if(num1<num2){
        alert("EL numero "+num1+" es menor que "+num2)
        resultado=("EL numero "+num1+" es menor que "+num2)
    }
    if(num1>num2) {
        alert("EL numero "+num1+" es mayor que "+num2)
        resultado=("EL numero "+num1+" es mayor que "+num2)
    }
    if(num1==num2) {
        alert("EL numero "+num1+" es igual que "+num2)
        resultado=("EL numero "+num1+" es igual que "+num2)
    }
    document.getElementById("resul").value=resultado;
}
function Borrar(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("resul").value="";

}