const msg = "Nada aqui...";

function insert(num) {
  var numero = document.getElementById('resultado').innerHTML;
  var lastChar = numero.slice(-1);
  var operators = ['+', '-', '*', '/'];

  // Verifica se há a mensagem na textArea, se tiver, o campo é limpo antes de prosseguir
  if (numero == msg) numero = "";
  
  //Verifica se o último caractere já é um operador e se o novo caractere também é um operador
  if (operators.includes(lastChar) && operators.includes(num)) {
      alert("Não spame os operadores, por gentileza! = ⓛ ω ⓛ = ");
      return; //Se ambos forem operadores, não faça nada
  }

  document.getElementById('resultado').innerHTML = numero + num;
}
function clean(){
    document.getElementById('resultado').innerHTML = ""
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
      document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
      document.getElementById('resultado').innerHTML = msg;
    }
}