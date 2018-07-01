import '../css/style.css'

import {greeting, delay} from '../js/helper';
const user = require('../js/user');

document.write(greeting)
delay();
console.log(user.getName());

console.log("babel es2015")