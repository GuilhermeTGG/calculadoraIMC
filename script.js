
const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && peso !== "" && altura !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC <= 18.5) { 
            classificacao = 'Você está abaixo de peso.';
        }else if(valorIMC <= 25) {
            classificacao = 'Você está com o peso ideal.';
        }else if(valorIMC <= 30) {
            classificacao = 'Você está levemente acima do peso';
        }else if(valorIMC <= 35) {
            classificacao = 'Você possui obesidade Grau I';
        }else if(valorIMC <= 40) {
            classificacao = 'Você possui obesidade Grau II'
        }else {
            classificacao = 'Você possui obesidade Grau III, cuidado!!'
        }

        resultado.textContent = `${nome} o seu IMC é '${valorIMC}'.\n ${classificacao}. `

    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc);