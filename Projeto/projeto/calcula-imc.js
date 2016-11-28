// Arquivo que calcula IMC do usuário
var peso=20;
var altura=1.80;

//Calcula IMC
var diferenteDeZero = (altura != 0);
if (diferenteDeZero) {
var imc = peso / (altura * altura);
console.log("Seu imc é de: "+imc);
} else {
console.log("Altura deve ser maior que 0!");
}
