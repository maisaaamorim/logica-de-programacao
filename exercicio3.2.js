let operacao = prompt("Digitar uma operaçao, 1-soma, 2-subtraçao, 3-multiplicar, 4-divisão")

if ((operacao >= 1) && (operacao <= 4)) {

let num1 = Number(prompt("Digite o primeiro valor da operação: "))
let num2 = Number(prompt("Digite o segundo o valor da operação: "))

let resp = 1

while(resp == 1){
    alert(`O valor digitado foi: ${num1,num2}`)

let soma = (v1,v2) => v1 + v2
let subtracao = (v1,v2) => v1 - v2
let multiplicacao = (v1,v2) => v1 * v2
let divisao = (v1,v2) => v1 / v2

switch (operacao) {
    case '1':
        alert(`O total é: ${soma(num1,num2)}`)
        break;

        case '2':
            alert(`O total é: ${subtracao(num1,num2)}`)
            break;

            case '3':
        alert(`O total é: ${multiplicacao(num1,num2)}`)
        break;

        case '4':
        alert(`O total é: ${divisao(num1,num2) }`)
        break;
        
        
}

    
    resp =Number(prompt("Deseje continuar"))
    
    }
}
