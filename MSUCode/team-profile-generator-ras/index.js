//require npm
const inquirer = require('inquirer')
const fs = require('fs')

//link employees
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//link html
const HTMLtemplate = require('./src/HTMLtemplate');

//team array
const fullTeam = [];


//manager questions


