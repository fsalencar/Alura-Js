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