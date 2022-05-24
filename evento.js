//Criação de sistema de cadastro de eventos
var hoje = new Date();
const data = ['Data permitida', 'data não permitida',]
console.log('Data: '+hoje)

if (data.length < hoje) {
console.log('Data permitida');
}
for (let index = 0; index < hoje.length; index++) {
    const dataatual = hoje[index];
    if (pecaatual.length > 23/05/2022) {
        console.log(dataatual + ':Data invalida')
    } else
    console.log(dataatual + ': Data permitida')
    }

var idade= 18;
console.log('Idade: '+ idade)
if (idade >= 18) {
    console.log('Idade permitida')
} else
    console.log('Idade não permitida')

const participantes = 98;
if (participantes < 100) {
    console.log('Numero de participantes:'+' '+participantes)
    console.log(' Cadastro efetuado')
} else
    console.log('Excesso de participantes')