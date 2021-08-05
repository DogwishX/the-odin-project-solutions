/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOcUI7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxlQUFlLFFBQVEsSUFBSTtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vIFBhZ2VzXG5jb25zdCBQYWdlcyA9IHtcblx0cGFnZXNMaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZScpLFxuXG5cdC8vIEhpZGUgb3RoZXIgcGFnZXNcblx0aGlkZVBhZ2VzKCkge1xuXHRcdHRoaXMucGFnZXNMaXN0LmZvckVhY2goKHBhZ2UpID0+IHBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuXHR9LFxuXHQvLyBEaXNwbGF5IFNlbGVjdGVkIFBhZ2Vcblx0ZGlzcGxheVBhZ2UoeyB0YXJnZXQgfSkge30sXG59O1xuXG4vLyBQcm9qZWN0IGNsYXNzXG5jbGFzcyBQcm9qZWN0IHtcblx0Ly8gQ3JlYXRlIFByb2plY3QgICAgICAgICAgLSBDcmVhdGVcblx0Y29uc3RydWN0b3IobmFtZSkge1xuXHRcdC8vIEFyciBvZiB0YXNrc1xuXHRcdHRoaXMudGFza0FyciA9IFtdO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cblx0Ly8gRGlzcGxheSBQcm9qZWN0ICAgICAgICAgLSBSZWFkXG5cdGRpc3BsYXlQcm9qZWN0KCkge31cblxuXHQvLyBEZWxldGUgUHJvamVjdCAgICAgICAgICAtIERlbGV0ZVxufVxuXG4vLyBUYXNrIGNsYXNzXG5jbGFzcyBUYXNrIGV4dGVuZHMgUHJvamVjdCB7XG5cdC8vIENyZWF0ZSBUYXNrICAgLSBDcmVhdGVcblx0Y29uc3RydWN0b3IobmFtZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cblx0Ly8gQWRkIHRhc2sgdG8gcHJvamVjdFxuXHQvLyBEZWxldGUgVGFzayAgIC0gRGVsZXRlXG5cdC8vIEVkaXQgVGFzayAgICAgLSBVcGRhdGVcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==