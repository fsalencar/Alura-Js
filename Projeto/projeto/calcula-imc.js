
// Arquivo que calcula IMC do usuário
var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2")

var paciente = {
                "peso":tdPeso.textContent,
                "altura":tdAltura.textContent
              };

var pacientes = [paciente]
//Calcula IMC
var diferenteDeZero = (tdAltura.textContent != 0);
if (diferenteDeZero) {
var imc = paciente.peso / (paciente.altura * paciente.altura);
var tdImc = document.getElementById("imc-2");
tdImc.textContent = imc;
console.log("Seu imc é de: "+imc);
} else {
console.log("Altura deve ser maior que 0!");
}
