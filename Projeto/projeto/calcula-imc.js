// Arquivo que calcula IMC do usuário
var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2")

var peso = tdPeso.textContent;
var altura= tdAltura.textContent;

//Calcula IMC
var diferenteDeZero = (altura != 0);
if (diferenteDeZero) {
var imc = peso / (altura * altura);
vat tdImc = document.getElementById("imc-2");
tdImc.textContent = imc;
console.log("Seu imc é de: "+imc);
} else {
console.log("Altura deve ser maior que 0!");
}
