const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        message: 'project title?',
        type: 'input',
        name: 'title'
    },
    {
        message: 'project description?',
        type: 'input',
        name: 'description'
    },
    {
        message: 'installation instructions?',
        type: 'input',
        name: 'installation'
    },
    {
        message: 'usage instructions?',
        type: 'input',
        name: 'usage'
    },
    {
        message: 'project license?',
        type: 'list',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'license'
    },
    {
        message: 'contributors?',
        type: 'input',
        name: 'contributors'
    },
    {
        message: 'tests?',
        type: 'input',
        name: 'tests'
    },
    {
        message: 'github username?',
        type: 'input',
        name: 'username'
    },
    {
        message: 'email?',
        type: 'input',
        name: 'email'
    },
]



inquirer.prompt(questions)
.then(answers => {
    console.log(answers)
    
})
.catch(err=> console.log(err))