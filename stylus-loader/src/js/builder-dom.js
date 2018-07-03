const builder = (type) => {
    return document.createElement(type)
}

const makeMessage = (type, msg) => {
    const element = builder(type)
    element.textContent = msg
    return element
}

const makeItemList = (type, msg) => {
    const element = makeMessage(type, msg)
    element.setAttribute('font-size', '10px')
    return element
}

const makeImage = (src, width = 50, height = width) => {
    const element = builder('img')
    element.setAttribute('src', src)
    element.setAttribute('width', width)
    element.setAttribute('height', height)

    return element
}

const makeVideo = (src, width = 380, height = width, autoPlay = true, showControl = true) => {
    const element = builder('video')
    element.setAttribute('src', src)
    element.setAttribute('width', width)
    element.setAttribute('height', height)   
    element.setAttribute('controls', showControl)    
    element.setAttribute('autoplay', autoPlay) 

    return element
}

module.exports = {
    builder,
    makeMessage,
    makeImage,
    makeVideo,
    makeItemList
}