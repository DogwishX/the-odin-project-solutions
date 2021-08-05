import './style.css';

// Pages
const Pages = {
	pagesList: document.querySelectorAll('.page'),

	// Hide other pages
	hidePages() {
		this.pagesList.forEach((page) => page.classList.remove('active'));
	},
	// Display Selected Page
	displayPage({ target }) {},
};

// Project class
class Project {
	// Create Project          - Create
	constructor(name) {
		// Arr of tasks
		this.taskArr = [];
		this.name = name;
	}
	// Display Project         - Read
	displayProject() {}

	// Delete Project          - Delete
}

// Task class
class Task extends Project {
	// Create Task   - Create
	constructor(name) {
		this.name = name;
	}
	// Add task to project
	// Delete Task   - Delete
	// Edit Task     - Update
}
