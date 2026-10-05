function saludo() {
    let nombre1= document.getElementById("nombres").value;
    let apellido1=document.getElementById("apellidos").value;
    document.getElementById("mensaje").textContent = "Hola, " + nombre1 + " " + apellido1 + " Buenas Tardes"; 
}
function calculo_nota(){
    let nombre2 = document.getElementById("nombres").value;
    let apellido2 = document.getElementById("apellidos").value;

    let teoria=parseFloat(document.getElementById("nota_teorica").value);
    let practica=parseFloat(document.getElementById("nota_practica").value);
    let suma=teoria+practica;

    document.getElementById("nota_sumada").innerHTML = "El promedio de " + nombre2 + " " + apellido2 + " es " + suma;
}