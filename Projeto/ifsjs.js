//Script js da página testedeifs.html


var salarioMensal = prompt("Digite seu salário mensal: ");

if (salarioMensal > 0 && salarioMensal < 1000) {
  var aumentoSalarial = salarioMensal * 0.05;
  console.log("Seu salário atualizado é: " + aumentoSalarial);
  console.log("salarioMensal > 0 && salarioMensal < 1000");
}else if (salarioMensal < 2000) {
  var aumentoSalarial = salarioMensal* 0.10;
  console.log("Seu salário atualizado é: " + aumentoSalarial);
  console.log("salarioMensal < 2000");
} else {
  var aumentoSalarial = salarioMensal* 0.20;
  console.log("Seu salário atualizado é: " + aumentoSalarial);
  console.log("salario não se encaixa nas condições anteriores");
}
