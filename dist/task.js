"use strict";
var Task = /** @class */ (function () {
    function Task() {
        this.tasks = JSON.parse(localStorage.getItem('task_data')) || [];
    }
    Task.prototype.checkEmptyTask = function () {
        if (this.tasks.length) {
            emptyTaskAlert.classList.add('hidden');
            tasksContainer.classList.remove('hidden');
        }
        else {
            emptyTaskAlert.classList.remove('hidden');
        }
    };
    Task.prototype.generateTemplate = function () {
        var template = "";
        this.tasks.forEach(function (task, i) {
            template += "\n        <div class=\"text-gray-500 cursor-pointer py-2 flex space-x-2 justify-between\">\n          <div class=\"flex space-x-2\">\n            <div>" + (i + 1) + ".</div>\n            <div>" + task.title + "</div>\n          </div>\n          <div>\n            <button onclick=\"task.doneTask('" + task.title + "', '" + task.description + "' ,'" + task.isDone + "' ," + i + ")\">\n              <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                fill=\"none\"\n                viewBox=\"0 0 24 24\"\n                stroke=\"currentColor\"\n                class=\"w-5 text-green-500 hover:text-green-600 duration-200 mr-3\"\n              >\n                <path\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  stroke-width=\"2\"\n                  d=\"M5 13l4 4L19 7\"\n                />\n              </svg>\n            </button>\n            <button onclick=\"task.deleteTask(" + i + ")\">\n              <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                fill=\"none\"\n                viewBox=\"0 0 24 24\"\n                stroke=\"currentColor\"\n                class=\"w-5 text-red-500 hover:text-red-600 duration-200\"\n              >\n                <path\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  stroke-width=\"2\"\n                  d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\"\n                />\n              </svg>\n            </button>\n          </div>\n        </div>\n      ";
        });
        return template;
    };
    Task.prototype.showTasks = function () {
        this.checkEmptyTask();
        var taskList = this.generateTemplate();
        tasksContainer.innerHTML = taskList;
    };
    Task.prototype.createTask = function (task) {
        this.tasks.push(task);
        this.save();
        this.clear();
    };
    Task.prototype.save = function () {
        localStorage.setItem('task_data', JSON.stringify(this.tasks));
        this.showTasks();
    };
    Task.prototype.doneTask = function (title, description, isDone, i) {
        var mock = {
            title: title,
            description: description,
            isDone: true
        };
        console.log(mock, typeof i);
        this.tasks.splice(i, 1, mock);
    };
    Task.prototype.deleteTask = function (id) {
        this.tasks.splice(id, 1);
        this.save();
    };
    Task.prototype.clear = function () {
        $("#title").value = "";
        $("#description").value = "";
    };
    return Task;
}());
