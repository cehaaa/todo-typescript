"use strict";
var $ = function (selector) {
    var element = document.querySelectorAll(selector);
    return element.length > 2
        ? element
        : document.querySelector(selector);
};
var taskForm = $("#task-form");
var btnCreate = $("#btn-create");
var btnCancel = $("#btn-cancel");
var emptyTaskAlert = $('#empty-task-alert');
var taskFormContainer = $("#task-form-container");
var tasksContainer = $("#tasks-container");
var btnDeleteTask = $("#btn-delete-task");
