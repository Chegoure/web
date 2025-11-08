export default (tagName, parent, options) => {
    const element = document.createElement(tagName)
    parent.append(element)

    if(options.hasOwnProperty('class')){
        element.classList.add(options.class)
    }

    if(options.hasOwnProperty('content')){
        element.innerHTML = options.content
    }

    if(options.hasOwnProperty('src')){
        element.src = options.src
    }

    return element
}