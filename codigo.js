const readlineSync = require('readline-sync');
const Data_Dia = 10
const Lista_de_Eventos = ["Evento1", "Evento2", "Evento3", "Evento4", "Evento5"]//Realmente não tive criatividade nenhuma para nomes, então fiz isso
const Lista_de_Palestrantes = ["Palestrante1", "Palestrante2", "Palestrante3", "Palestrante4", "Palestrantante5"]
const Lista_de_Participantes = ["Participante1", "Participante2", "Participante3", "Participante4", "Participante5"]


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//TENTEI FAZER O CODIGO DESSA FORMA, MAS NÃO CONSEGUIA FAZER ELE COMPARAR AS DATAS DE MODO CORRETO
//const Data_Atual = new Date()
// var Data = new Date( readlineSync.question(console.log(`Data atual: ${Data_Atual.toLocaleDateString("pt-br")}`),console.log("Informe a data do evento"),console.log("Dia/Mes/Ano")))
// if(Data.toDateString("pt-br") <= Data_Atual.toDateString("pt-br")){
//     console.log("Data invalida.")
//     console.log("Informe data posterior a atual.")
// }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


var Data = readlineSync.questionInt('Qual o dia do evento ? ',); //Fiz dessa forma por conta do motivo visto na parte de cima
  if (Data > Data_Dia) {
    console.log('Data aceita.');
  } else {
    console.log('Data invalida.');
    console.log(`Informe uma data posterior ao dia ${Data_Dia}.`)
    return
  } 
var Idade = readlineSync.questionInt(console.log("Informe a sua idade:"))
if(Idade < 18){
        console.log("Idade invalida")
        console.log("Idade minima 18 anos.")
        return
}
var Nome = readlineSync.question(console.log("Informe seu nome:"))
if (Lista_de_Participantes, Lista_de_Palestrantes <= 100){
    console.log("Não foi possivel cadastrar")
    console.log("A lista alcançou o limte")
}
else{
    console.log(`Lista de Palestrantes:\n ${Lista_de_Palestrantes}\n`)
    console.log(`Lista de participantes:\n ${Lista_de_Participantes}\n`)
    console.log(`Lista de eventos:\n ${Lista_de_Eventos}\n`)
}
Escolha = readlineSync.question('Deseja continuar o cadastro? ', {
    trueValue: ['Sim', 'Y', 'S', 'Claro'],
    falseValue: ['Não', 'N', 'no']
  });
  if (Escolha === true) {
    console.log('Cadastro realizado com sucesso!');
  } 
  else if (Escolha === false) {
    console.log('Cadastro cancelado.');
  }


