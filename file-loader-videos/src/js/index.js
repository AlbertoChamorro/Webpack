import '../css/style.css'

import {greeting, delay} from '../js/helper'

import renderToDOM from './render-dom'
import generator from './builder-dom'

import imgSrc from '../images/frontend.png'

import videoSrc from '../videos/what_its_spoiler.mp4'

const paragraph = generator.makeMessage('p', 'Generator Builder paragraph')
renderToDOM.render(paragraph)

const image = generator.makeImage(imgSrc)
renderToDOM.render(image)

const video = generator.makeVideo(videoSrc)
renderToDOM.render(video)

delay();