export function write(text) {
  const htmlElement = this;
  return (() => {
    const textNode = document.createTextNode(text);
    htmlElement.appendChild(textNode);
    return htmlElement;
  })();
}

export function create(type, attributes) {
  const htmlElement = this;
  return (() => {
    const childElement = document.createElement(type);
    if (attributes) {
      Object.entries(attributes).forEach(([name, value]) => {
        if (name.startsWith("on") && typeof value === "function") {
          childElement.addEventListener(name.slice(2), value);
        } else {
          childElement.setAttribute(name, value);
        }
      });
    }
    htmlElement.appendChild(childElement);
    childElement.focus();
    return childElement;
  })();
}

export function clear() {
  const htmlElement = this;
  return (() => {
    htmlElement.innerHTML = "";
    return htmlElement;
  })();
}
