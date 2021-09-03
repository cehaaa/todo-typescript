"use strict";
var task = new Task();
btnCreate.addEventListener('click', function () {
    taskFormContainer.classList.add("fade");
    taskFormContainer.classList.toggle("hidden");
    tasksContainer.classList.add('hidden');
    emptyTaskAlert.classList.add('hidden');
    task.clear();
});
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var title = $('#title').value;
    var description = $('#description').value;
    var taskData = { title: title, description: description };
    task.createTask(taskData);
    taskFormContainer.classList.toggle("hidden");
});
btnCancel.addEventListener('click', function () {
    taskFormContainer.classList.toggle("hidden");
    tasksContainer.classList.toggle('hidden');
    task.checkEmptyTask();
});
window.onload = function () {
    task.showTasks();
};
