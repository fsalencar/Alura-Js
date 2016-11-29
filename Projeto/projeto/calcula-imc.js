<<<<<<< HEAD
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
=======
	// Arquivo que calcula IMC do usuário
	var pesoText = document.getElementById("peso-2");
	var alturaText = document.getElementById("altura-2");

	var paciente = {"peso" : pesoText.textContent,
					"altura": alturaText.textContent	
					};


	//Calcula IMC
	var diferenteDeZero = (paciente.altura != 0);
	if (diferenteDeZero) {
	var imc = paciente.peso / (paciente.altura * paciente.altura);
	var imcText = document.getElementById("imc-2");
	imcText.textContent = imc;

	console.log("Seu imc é de: "+imc);
	} else {
	console.log("Altura deve ser maior que 0!");
}
>>>>>>> a0c0ae56575bf7d42002f990d8cea009af341bca
