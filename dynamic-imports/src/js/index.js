import '../css/style.css'
import data from '../json/teachers.json'

import renderToDOM from './render-dom'
import generator from './builder-dom'

import React from 'react'
import {render} from 'react-dom'
import Teachers from './teachers'
import '../css/main.less'

const $loadModuleButton = document.getElementById('load-module-button')
$loadModuleButton.addEventListener('click', async () => {
    const { default: showAlert } = await import('./alert.js')
    //console.log(alert.default)
    showAlert("Carga Asincrona")
})
render(<Teachers data={data}/>, document.getElementById('container'))