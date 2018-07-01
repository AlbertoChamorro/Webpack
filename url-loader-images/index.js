import './style.css'

import {greeting, delay} from './helper';
const user = require('./user');

document.write(greeting)
delay();
console.log(user.getName());

console.log("babel es2015")