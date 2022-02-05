const { somar, subtrair, dividir, multiplicar } = require('./calculadora')
const inquirer = require('inquirer')

inquirer.prompt([
    {
        type: 'list',
        name: 'calculo',
        message: 'Qual operação deseja fazer ?',
        choices: [
            'Somar','Subtrair', 'Dividir','Multiplicar'
        ]
    },
    {
        type: 'number',
        name: 'n1',
        message: 'Digite o primeiro valor: '
    },
    {
        type: 'number',
        name: 'n2',
        message: 'Digite o segundo valor: '
    }
]).then((answers) => {
    let n1 = answers.n1 
    let n2 = answers.n2
    switch(answers.calculo) {
        case 'Somar':
            somar(n1,n2)
            break
        case 'Subtrair':
            subtrair(n1,n2)
            break
        case 'Dividir':
            dividir(n1,n2)
            break
        case 'Multiplicar': 
            multiplicar(n1,n2)
            break
        default:
            break
    }   
}).catch((err) => console.log(err))