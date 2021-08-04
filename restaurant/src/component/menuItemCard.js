import Element from './element';

class MenuItem {
	constructor(img, name, ingredients) {
		this.itemDiv = new Element('div', `${name}-div`, '.menu');

		this.img = new Element('img', 'item-img', `.${name}-div`);
		this.img.element.src = img;

		this.name = new Element('h4', 'item-name', `.${name}-div`);
		this.name.element.textContent = name;

		this.ingredients = new Element('p', 'item-ingredients', `.${name}-div`);
		this.ingredients.element.textContent = ingredients;
	}
}

export default MenuItem;
