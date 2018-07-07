import '../css/style.css'
import data from '../json/teachers.json'

import renderToDOM from './render-dom'
import generator from './builder-dom'

import React from 'react'
import {render} from 'react-dom'
import Teachers from './teachers'
import '../css/main.less'

render(<Teachers data={data}/>, document.getElementById('container'))

// data.teachers.forEach(teacher => {
//     console.log(teacher)
//     const item = generator.makeItemList('li', teacher.name)
//     renderToDOM.render(item)    
// })
