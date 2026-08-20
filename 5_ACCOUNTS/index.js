// modulos externos
const inquerer = require('inquirer').default
const chalk = require('chalk')

// modulos internos 
const fs = require('fs')
const { type } = require('os')

console.log("Iniciando com Account")

operation()

function operation() {

    inquerer
    .prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer',
        choices: [
            'Criar Conta',
            'Consultar Saindo',
            'Depositar',
            'Sacar',
            'Sair'
        ],
    },
])
 .then()
 .catch((err) => console.log(err))
}