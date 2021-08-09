import './style.css';
import Element from './component/element';

const DOMCache = {
	pages: document.querySelectorAll('.page'),
	burgerBtn: document.querySelector('.burger'),
	homeBtn: document.querySelector('.home'),
	menu: document.querySelector('.task-pages'),
	newProjectTabBtn: document.querySelector('.add-project'),
	newProjectFormBtn: document.querySelector('.add-project-btn'),
	newProjectFormInput: document.querySelector('#project-name'),

	addListeners() {
		this.homeBtn.addEventListener('click', pages.displayHome);
		this.burgerBtn.addEventListener('click', this.toggleMenu.bind(this), false);
		this.newProjectTabBtn.addEventListener(
			'click',
			this.showNewProjectForm.bind(this)
		);
		this.pages.forEach((page) =>
			page.addEventListener('click', this.hideMenu.bind(this))
		);
		this.updateTabListeners();
	},

	updateTabListeners() {
		this.tabs = document.querySelectorAll('.tab');
		this.tabs.forEach((tab) => {
			tab.addEventListener('click', this.handleTabClick.bind(this));
		});
	},

	toggleMenu() {
		this.menu.classList.toggle('active');
	},

	hideMenu() {
		this.menu.classList.remove('active');
	},

	toggleActiveComponent(name) {
		const component = document.querySelector(name);
		component.classList.toggle('active');
	},

	handleTabClick(event) {
		pages.displayPage(event);
		this.hideMenu();
	},

	showNewProjectForm() {
		this.toggleActiveComponent('.new-project-form');
		this.toggleActiveComponent('.overlay');
		this.newProjectFormBtn.addEventListener('click', () => {
			const projectName = DOMCache.newProjectFormInput.value;
			const project = new Project(projectName);
			project.createProject(projectName);
		});
	},
};

const pages = {
	pagesList: ['Inbox', 'Today'],

	addPage(pageName) {
		this.pagesList.push(pageName);
		this.updatePages();
	},

	resetPages() {
		const pagesArr = document.querySelectorAll('.page');
		console.log(pagesArr);
		pagesArr.forEach((page) => page.remove());
	},

	updatePages() {
		this.resetPages();
		this.pagesList.forEach((page) => {
			const container = new Element('div', ['page', page], '.pages', page);
		});
	},

	displayPage({ target }) {
		pages.hidePages();
		const affectedPage = document.querySelector(`.${target.textContent}`);
		console.log(affectedPage);
		affectedPage.classList.add('active');
	},

	displayHome() {
		pages.hidePages();
		document.querySelector('.Today').classList.add('active');
	},

	hidePages() {
		this.pagesList.forEach((page) => {
			const pageDOM = document.querySelector(`.${page}`);
			pageDOM.classList.remove('active');
		});
	},
};

pages.addPage('Projects');

class Project {
	constructor(name) {
		this.taskArr = [];
		this.name = name;
	}
	createProject(projectName) {
		pages.addPage(projectName);

		new Element(
			'div',
			[`${projectName}-tab`, 'tab'],
			'.projects-tab',
			projectName
		);
		DOMCache.toggleActiveComponent('.new-project-form');
		DOMCache.toggleActiveComponent('.overlay');
		DOMCache.updateTabListeners();
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

// Run page
DOMCache.addListeners();
pages.updatePages();
