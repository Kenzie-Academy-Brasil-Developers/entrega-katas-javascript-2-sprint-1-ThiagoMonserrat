// comece a criar a sua função add na linha abaixo
function add(x, y){
    let primeirovalor = x
    let segundovalor = y 
    let resultado = primeirovalor + segundovalor
    return resultado
  }
  



// descomente a linha seguinte para testar sua função
// console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');



// comece a criar a sua função multiply na linha abaixo
function multiply(valor1, valor2){
    let result = 0
    for(let i = 0; i < valor2; i++){
    result = add(valor1, result)
    }
    return result

} 


// descomente a linha seguinte para testar sua função
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(primeiro, segundo){
    let final = 1
    for(let i = 0; i < segundo; i++){
    final = multiply(primeiro, final)
    }
    return final
    
}
power(3, 4)


// descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo


// descomente a linha seguinte para testar sua função
// console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
