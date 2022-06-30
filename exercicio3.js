let operacao = prompt("Digitar uma operaçao, 1-soma, 2-subtraçao, 3-multiplicar, 4-divisão")


// Operação está entre 1, 2, 3 e 4
// Operacao = 1

// == igualdade
// && E
// || Ou

// > Maior
// < Menor
// >= Maior e Igualdade
// <= Menor e Igualdade

// (operacao > 1) && (operacao < 4)
//    VERDADE     &&     VERDADE
//               VERDADE

if ((operacao >= 1) && (operacao <= 4)) {

    let num1 = Number(prompt("Digite o primeiro valor da operação: "))
    let num2 = Number(prompt("Digite o segundo o valor da operação: "))
    
    /*if (operacao == 1) {
        alert(`resultado ${num1 + num2}`)
    } else {


        if (operacao == 2) {
            alert(`resultado ${num1 - num2}`)
        } else {


            if (operacao == 3) {
                alert(`resultado ${num1 * num2}`)
            } else {

                if (operacao == 4) {
                    alert(`resultado ${num1 / num2}`)
                }

            }
        }
    }*/
    

    


       switch (operacao) {
            case '1':
                alert(`O total é: ${nu1 + num2}`)
                break;

                case '2':
                    alert(`O total é: ${nu1 - num2}`)
                    break;

                    case '3':
                alert(`O total é: ${nu1 * num2}`)
                break;

                case '4':
                alert(`O total é: ${nu1 / num2}`)
                break;

            default:
                alert(`Digite um valor entre 1 e 4!`)
                break;

        }
        

}else {
    alert(`Digite um valor entre 1 e 4!`)
}