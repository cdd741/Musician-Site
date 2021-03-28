// create a empty element and returns a function that aquire a variable to fill the content
function newElement(tag, classNames) {
  // returns a function which aquire a string as innerText
  return (content = "") => {
    let element = document.createElement(tag);
    element.classList.add(...classNames);
    if (content) element.innerText = content;
    return element;
  };
}

// append children element (array of child elements) into parent element
function insertBlock(parent, children) {
  for (let i = 0; i < children.length; ++i) {
    parent.appendChild(children[i]);
  }
}
