"use strict";
var Task = /** @class */ (function () {
    function Task() {
        this.tasks = JSON.parse(localStorage.getItem('task_data')) || [];
    }
    Task.prototype.showTasks = function () {
        console.log('ini list tugas');
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
    Task.prototype.clear = function () {
        $("#title").value = "";
        $("#description").value = "";
    };
    return Task;
}());
