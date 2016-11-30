
var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){

event.preventDefault();

  var pacienteNovo = "<tr class='paciente'>"+
                      "<td class='info-nome'>Rafael</td>"+
                      "<td class='info-peso'>110</td>"+
                      "<td class='info-altura'>1.60</td>"+
                      "<td class='info-imc'></td>"+
                      "</tr>"

  //document.getElementsByTagName("table")[0];
  //document.querySelectorAll("table") array
  var tabela = document.querySelector("table");
  tabela.innerHTML = tabela.innerHTML + pacienteNovo;


})
