import './style.css';

const WEBPAGE = (() => {
	class Element {
		constructor(tag, cssSelector) {
			this.element = document.createElement(tag);
			this.element.classList.add(cssSelector);
		}
		appendTo(parentNode) {
			this.parentNode = document.querySelector(parentNode);
			this.parentNode.appendChild(this.element);
		}
	}

	let header = new Element('div', '#header');
	header.appendTo('#content');
	console.log(header.parentNode);
})();
