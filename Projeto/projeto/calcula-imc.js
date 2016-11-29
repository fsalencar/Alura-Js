
// // Arquivo que calcula IMC do usuário
// var tdPeso1 = document.getElementById("peso-1");
// var tdAltura1 = document.getElementById("altura-1")
//
// var paciente1 = {
//                 "peso":tdPeso1.textContent,
//                 "altura":tdAltura1.textContent
//               };
//
// var tdPeso2 = document.getElementById("peso-2");
// var tdAltura2 = document.getElementById("altura-2")
//
// var paciente2 = {
//                 "peso":tdPeso2.textContent,
//                 "altura":tdAltura2.textContent
//               };
// var pacientes = [paciente1, paciente2];
//var primeiro = pacientes[0];
//var primeiro = pacientes[1];
var trsPacientes = document.getElementsByClassName("paciente");

var posicaoAtual = 0;
while (posicaoAtual <= trsPacientes.length - 1) {
  //Calcula IMC
  var pacienteTr = trsPacientes[posicaoAtual];

var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];


var paciente = {
                "nome":tdNome.textContent,
                "peso":tdPeso.textContent,
                "altura":tdAltura.textContent
                };

    var diferenteDeZero = (tdAltura.textContent != 0);
      if (diferenteDeZero) {
      var imc = paciente.peso / (paciente.altura * paciente.altura);
      var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];      
      tdImc.textContent = imc;
      console.log("Seu imc é de: "+ imc);
      } else {
      console.log("Altura deve ser maior que 0!");
      }
      posicaoAtual++;
}
