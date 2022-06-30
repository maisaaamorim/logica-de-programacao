let numero = prompt("Digite um número paea saber se é par ou impar:")

if((numero % 2) == 0){
    alert(`O número ${numero} é par`)
}else{
    alert(`O número ${numero} é impar`)
}

// IF TERNÁRIO
//                               |   contição   | ? ação true :ação false|
//alert(`O número ${numero} é ${((numero % 2)==0) ?  'par'  :  'impar'}`)
