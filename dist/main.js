"use strict";
var task = new Task();
btnCreate.addEventListener('click', function () {
    taskFormContainer.classList.add("fade");
    taskFormContainer.classList.toggle("hidden");
    emptyTaskAlert.classList.toggle("hidden");
    task.clear();
});
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var title = $('#title').value;
    var description = $('#description').value;
    var taskData = { title: title, description: description };
    task.createTask(taskData);
    emptyTaskAlert.classList.toggle("hidden");
});
window.onload = function () {
    task.showTasks();
};
