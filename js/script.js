window.addEventListener('input', () => {

  let numberA = parseInt(document.querySelector('#numberA').value);
  let numberB = parseInt(document.querySelector('#numberB').value);

  var spanSoma = document.querySelector('#soma');
  spanSoma.innerText = numberA + numberB;

  var spanMultiplica = document.querySelector('#multiplicacao');
  spanMultiplica.innerText = numberA * numberB;

  var spanQuadradoA = document.querySelector('#quadradoA');
  spanQuadradoA.innerText = Math.pow(numberA, 2);

  var spanQuadradoB = document.querySelector('#quadradoB');
  spanQuadradoB.innerText = Math.pow(numberB, 2);

  var subtracao1 = document.querySelector('#subtracaoA');
  subtracao1.innerText = numberA - numberB;

  var subtracao2 = document.querySelector('#subtracaoB');
  subtracao2.innerText = numberB - numberA;

  var divisao1 = document.querySelector('#divisaoA');
  numberB === 0 ? divisao1.innerText = 'Divisão por 0' : divisao1.innerText = (numberA / numberB).toFixed(1);

  var divisao2 = document.querySelector('#divisaoB');
  numberA === 0 ? divisao2.innerText = 'Divisão por 0' : divisao2.innerText = (numberB / numberA).toFixed(2);

  var divisorB = document.querySelector('#divisoresB');
  divisorB.innerText = dividerInt(numberB);

  var divisorA = document.querySelector('#divisoresA');
  divisorA.innerText = dividerInt(numberA);

  var fatorialA = document.querySelector('#fatorialA');
  fatorialA.innerText = fatorial(numberA);

  var fatorialB = document.querySelector('#fatorialB');
  fatorialB.innerText = fatorial(numberB);


  function dividerInt(number) {
    let aux = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        aux.push(i);
      }
    }
    return aux;
  }

  function fatorial(n) {
    var resultado = n;
    for (var i = 1; i < n; i++) {
      resultado *= i;
    }
    return resultado;
  }

});