/* console.log("Ok.")

*/

// Ex: 01

/* const valorUsuario1 = prompt("Informe um número.");
const valorUsuario2 = prompt("Informe outro número.");

 const valor1Transformado = Number(valorUsuario1);
 const valor2Transformado = Number(valorUsuario2);

if (valor1Transformado > valor2Transformado)
{
    let nome = "Guss";
    console.log("Primeira valor > segundo valor");
    console.log(nome);
}

console.log(nome); */
//Ex: 03

/*const valorUsuario1 = prompt("Informe um número");
const valorUsuario2 = prompt("Informe outro número");

if (valorUsuario1 === valorUsuario2){
    console.log("Os valores informados são iguais.")
}
else{
    console.log("Os valores informados são diferentes.")
}
*/

//Exercicio 3
/* 
const valorUsuario1 = prompt("Informe um número.");
const valorUsuario2 = prompt("Informe outro número.");

const valor1Transformado = Number(valorUsuario1);
const valor2Transformado = Number(valorUsuario2);

if(valor1Transformado===valor2Transformado){
    console.log("Os valores são iguais.")
}else if (valor1Transformado>valor2Transformado){
    console.log("O valor 1 é maiorn que o valor 2.")
}else{
    console.log("O valor 2:", valor2Transformado ,"é maior que o valor 1: ", valor1Transformado)
} */
// Ex:04

/* const pokemonUsuario = prompt ("Escolha seu pokemom favorito.")

switch (pokemonUsuario.toLocaleLowerCase()){
    case 'bulbassauro':
    console.log("planta e veneno.")    
    break;

    case 'lula':
    console.log("Roubar.")    
    break;
    
    case 'charmander':
    
    console.log("Fogo.")    
    break;
    case 'bulbassauro':

    default:
        console.log("Não encontramos o pokemom informado.")
        break;
} */

// Ex: 5

/* const idade = 15;
const ensinoMedioCompleto = true;
const segundaMatricula = false;

if (idade >= 18 && ensinoMedioCompleto && !segundaMatricula){
    console.log("voce está apto a se matricular");
}else {
    console.log("se fudeu");
}  */
// Ex: 06

let soma = 0;
let valorInformadoDoUsuario = prompt("Informe um valor.");

while(valorInformadoDoUsuario !== '0'){
    soma = soma + Number (valorInformadoDoUsuario);
    valorInformadoDoUsuario = prompt("Iforme um valor. Digite 0 para finalizar.");
}

console.log(soma);