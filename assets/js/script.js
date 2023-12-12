const form = document.getElementById('form');

//vai executar a função event quando o envio do formulário (submit) ocorrer
form.addEventListener('submit', function (event) {
    
    // Impede o comportamento padrão do formulário, que é recarregar a página após enviar o formulário
    event.preventDefault();

    //PEGANDO VALOR DO INPUT

    /* document.getElementById('weight') -> retorna o elemento HTML 
    com o id weight */
    /* .value -> é usado para obter o valor atual do campo de input */
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value

    const bmi = (weight / (height * height)).toFixed(2)

    const value = document.getElementById('value')
    let description = ''

    //Adicionando a classe Attention
    value.classList.add('attention')

    /*.classList -> lista de classes ASSOCIADAS ao elemento.
    Esta propriedade fornece métodos para adicionar, remover e
    verificar classes de um elemento
    */
    document.getElementById('infos').classList.remove('hidden')

    if (bmi < 18.5){
        description = 'Cuidado! Você está abaixo do peso!'
    } else if (bmi >= 18.5 && bmi <= 25){
        description = 'Você está no peso ideal!'
        value.classList.remove('attention')
        value.classList.add('normal')
    } else if (bmi > 25 && bmi <= 30){
        description = 'Cuidado! Você está com sobrepeso!'
    } else if (bmi > 30 && bmi <= 35){
        description = 'Cuidado! Você está com obesidade moderada!'
    } else if (bmi > 35 && bmi <= 40){
        description = 'Cuidado! Você está com obesidade severa!'
    } else{
        description = 'Cuidado! Você está com obesidade mórbida!'
    }

    //replace() -> para trocar o ponto pela vírgula
    value.textContent = bmi.replace('.',',')

    //.textContent -> para mmudar o conteudo do texto
    document.getElementById('description').textContent =  description;

});