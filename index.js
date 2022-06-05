
var input = document.getElementById("input");
var output = document.getElementById("output");
const btnCod = document.getElementById("btnCod");
const btnDeCod = document.getElementById("btnDeCod");
const clear = document.getElementById("clear");



document.getElementById("input").focus();




btnCod.addEventListener ("click", function () {
    
    
    let cod1 = input.value;
    let cod = cod1.toLowerCase()
    
    
  
    
    cod = cod.replaceAll("e","enter");
    cod = cod.replaceAll("i","imes");
    cod = cod.replaceAll("o","ober");
    cod = cod.replaceAll("u","ufat");
    cod = cod.replaceAll("a","ai");
    

    input.value = cod;
    
    document.getElementById("input").focus();
    
});

btnDeCod.addEventListener ("click", function () {
    let cod1 = input.value;
    let cod = cod1.toLowerCase()
  
    cod = cod.replaceAll("ai", "a");
    cod = cod.replaceAll("enter", "e");
    cod = cod.replaceAll("imes", "i");
    cod = cod.replaceAll("ober", "o");
    cod = cod.replaceAll("ufat", "u");

  
    input.value = cod;
    
    document.getElementById("input").focus();
});
clear.addEventListener("click",function(){
    input.value = "";
    document.getElementById("input").focus();
})

const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});
