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
                "altura":tdAltura.textContent,
                "pegaImc": function(){
                   if (this.altura != 0) {
                      var imc = this.peso / (this.altura * this.altura);
                      var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];      
                      tdImc.textContent = imc;
                      return imc;
                      } else {
                      console.log("Altura deve ser maior que 0!");
                      }
                }};

var imc = paciente.pegaImc();
      console.log("Seu imc é de: "+ imc);


      posicaoAtual++;
}