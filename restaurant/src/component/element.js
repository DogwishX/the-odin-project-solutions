class Element {
	constructor(tag, cssSelector, parentNode, text = '') {
		this.element = document.createElement(tag);
		this.element.classList.add(cssSelector);
		this.element.textContent = text;
		this._appendTo(parentNode);
	}

	_appendTo(parentNode) {
		this.parentNode = document.querySelector(parentNode);
		this.parentNode.appendChild(this.element);
	}
}

export default Element;
