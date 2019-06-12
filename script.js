// let idade = 105;

// idade += 3;
// // idade = idade + 1

// console.log(idade)


// ---------------------------------------------------------------------------------


// let nome = 'kaya'
// let idade = '19'
// let signo = 'aquario'

// alert(`meu nome é ${nome}, tenho ${idade} anos e meu signo é de ${signo}!!`)


// -----------------------------------------------------------------------------------


// let nome2 = prompt("Digite seu nome:")

// alert(`seu nome é ${nome2}`)


// ------------------------------construir escada------------------------------------------


// let degraus = prompt("insira o numero de degraus desejado: ")
// let simbolo = prompt("escolha o simbolo desejado entre #, * e $")
// let j = simbolo

// for(let i=0;i<degraus;i++){
//         console.log(simbolo)
//         simbolo += j
// }


// -----------------filmes-------------------------------------------------------------

// let filmes = [
//     {titulo:"i origins",idade:18},
//     {titulo:"submarine",idade:14},
//     {titulo:"her",idade:16}
// ]

// let userIdade = prompt("digite sua idade: ")

// for(let i=0;i<filmes.length;i++){
//     if(userIdade>filmes[i].idade){
//         alert(`voce podera assistir ${filmes[i].titulo}`)
//     }else{
     
//     }
// }


// -------------------funçao calc--------------------------------------------

// function soma(a,b){
//     let soma = a+b
//     alert(`sua soma é ${soma}`)
// }

// function subt(a,b){
//     let subt = a-b
//     alert(`sua subtraçao é ${subt}`)
// }

// function mult(a,b){
//     let mult = a*b
//     alert(`sua multiplicaçao é ${mult}`)
// }

// function div(a,b){
//     let div = a/b
//     alert(`sua soma é ${div}`)
// }

// let num1 = Number(prompt("digite o primeiro numero"))
// let num2 = Number(prompt("digite o segundo numero"))
// let calc = Number(prompt("digite 1 para efetuar a soma entre os valores, 2 para a subtraçao, 3 para a multiplicaçao e 4 para divisao"))

// if(calc == 1){
//     soma(num1, num2)
// }

// if(calc == 2){
//     subt(num1, num2)
// }

// if(calc == 3){
//     mult(num1, num2)
// }

// if(calc == 4){
//     div(num1, num2)
// }


// -------------------------------arrow function------------------

calculadora = (a,b) =>{
    console.log(a+b)
}

let fazerconta = function(a,b){
    console.log(a+b)
}
