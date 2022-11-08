/* const arrayStrings = ["oi", "sumido", "tudo", "bem?", "Saudades"]
let fraseCompleta = ""

for (const iterator of arrayStrings){
    fraseCompleta = fraseCompleta + iterator + " "
    // fraseCompleta += iterator + " "
}

console.log(fraseCompleta) */

// ############ FUNÇÃO ###########
/* function somarValores(num1, num2){
    const soma = num1 + num2
    return soma
}

//  console.log(somarValores(2, 2)) 
const somatorioValores = somarValores(2, 12)
console.log(somatorioValores) */
/* function manipularArrays(array){
    for (const iterator of array){
        console.log(iterator)
    }
    // return array.lenght
    const tamanhoArray = array.lenght
    return tamanhoArray
}
// console.log(manipularArrays([true, !false, 'oi', 1]))
const arrayAnalisado = [true, !false, "oi", 1]
const resultadoArray = manipularArrays(arrayAnalisado)
console.log(resultadoArray) */


/* const somarValores = function (num1, num2){
    const soma = num1 + num2
    return soma
    }

const somarValores2 = (num1, num2)=>{
    const soma = num1 + num2
    return soma
}

console.log(somarValores(1,2))
console.log(somarValores2(3,2)) */


const calcularArea = (larg, comp) =>{
    const area = larg * comp
    return area
}


const calcularVolume = function(area, alt){
    const volume = area * alt
    return volume
}

let larg1 = 7, comp1= 15, alt1 = 2

const vArea = calcularArea(larg1, comp1)

console.log(vArea)

const vVolume = calcularVolume(vArea, alt1)

console.log(vVolume)
