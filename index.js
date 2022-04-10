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
        choices: ['MIT', 'APACH_2.0', 'GPL_3.0', 'BSD_3', 'None'],
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
    let readMeElem = `
<img src='https://img.shields.io/badge/license-${answers.license}-blue.svg'>
 
<h1> ${answers.title} </h1>

<p> ${answers.description} </p>

<h2> Table of Contents </h2>

<details open="open">
<summary>Contents</summary>
<ol>
<li><a href="#installation">Installation</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#contributors">Contributors</a></li>
<li><a href="#tests">Tests</a></li>
<li><a href="#questions">Questions</a></li>
</details>

<h3 id='installation'>Installation</h3>
<p>${answers.installation}</p>

<h3 id='usage'>Usage</h3>
<p>${answers.usage}</p>

<h3 id='contributors'>Contributors</h3>
<p>${answers.contributors}</p>

<h3 id='tests'>Tests</h3>
<p>${answers.tests}</p>

<h3 id='questions'>Questions</h3>
<p> | Contact me | </p>
<p> Github: ${answers.username} </p>
<p> Email: ${answers.email} </p>

    `


    fs.writeFile('newREADME.md', readMeElem, err=> console.log(err))
})
.catch(err=> console.log(err))