function soma() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let soma = n1 + n2;
  document.getElementById("resultado").innerHTML = soma;
}

function subtracao() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let subtracao = n1 - n2;
  document.getElementById("resultado").innerHTML = subtracao;
}

function multiplicacao() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let multiplicacao = n1 * n2;
  document.getElementById("resultado").innerHTML = multiplicacao;
}

function divisao() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let divisao = n1 / n2;
  document.getElementById("resultado").innerHTML = divisao;
}