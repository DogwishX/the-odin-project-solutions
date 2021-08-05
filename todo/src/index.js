import './style.css';
import Element from './component/element';

const DOMCache = {
	burger: document.querySelector('.burger'),

	addListeners() {
		this.burger.addEventListener('click', showMenu);
	},

	showMenu() {},
};

const pages = {
	pagesList: ['Inbox', 'Today'],

	hidePages() {
		this.pagesList.forEach((page) => page.classList.remove('active'));
	},

	createPages() {
		this.pagesList.forEach((page) => {
			const container = new Element('div', ['page', page], 'main', page);
		});
	},

	displayPage({ target }) {},
};

pages.createPages();
class Project {
	constructor(name) {
		this.taskArr = [];
		this.name = name;
	}
	displayProject() {}
	deleteProject() {}
}

class Task extends Project {
	constructor(name) {
		this.name = name;
	}
	addTask() {}
	deleteTask() {}
	editTask() {}
}
