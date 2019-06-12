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

let filmes = [
    {titulo:"i origins",idade:18},
    {titulo:"submarine",idade:14},
    {titulo:"her",idade:16}
]

let userIdade = prompt("digite sua idade: ")

for(let i=0;i<filmes.length;i++){
    if(userIdade>filmes[i].idade){
        alert(`voce podera assistir ${filmes[i].titulo}`)
    }else{
     
    }
}


 