import '../css/style.css'
import data from '../json/teachers.json'

import renderToDOM from './render-dom'
import generator from './builder-dom'

data.teachers.forEach(teacher => {
    console.log(teacher)
    const item = generator.makeItemList('li', teacher.name)
    renderToDOM.render(item)    
})
