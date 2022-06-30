let operacao = prompt("Digite uma oeração, 1-soma, 2-subtraçaõ, 3-multiplicação e 4-divisaõ")

// operacao está entre 1, 2, 3 e 4
// operacao = 5

//(operacao == 1) && (operacao ==4)
// VERDADE && VERDADE
// VERDADE

if ((operacao >= 1) && (operacao <= 4)) {

    let num1 = Number(prompt("Digite o primeiro valor da operação:"))
    let num2 = Number(prompt("Digite o segundo valor da oprração:"))


    if (operacao == 1) {
        alert(`A quantidade de dias é: ${num1 + num2}`)
    } else {

        if (operacao == 2) {
            alert(`A quandidade de dias é: ${num1 - num2}`)
        } else {

            if (operacacao == 3) {
                alert(`A quandidade de dias é: ${num1 * num2}`)
            } else {

                if (operacao == 4) {
                    alert(`A quandidade de dias é: ${num1 / num2}`)
                }

            }
        }
    }

} else {
    alert("Digite um valor entre 1 e 4!!!")
}