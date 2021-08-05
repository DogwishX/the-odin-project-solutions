class Element {
	constructor(tag, [...classes], parentNode, text = '') {
		this.element = document.createElement(tag);
		classes.forEach((cssClass) => this.element.classList.add(cssClass));
		this.element.textContent = text;
		this._appendTo(parentNode);
	}

	_appendTo(parentNode) {
		this.parentNode = document.querySelector(parentNode);
		this.parentNode.appendChild(this.element);
	}
}

export default Element;
