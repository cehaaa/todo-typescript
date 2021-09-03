"use strict";
var $ = function (selector) {
    var element = document.querySelectorAll(selector);
    return element.length > 2
        ? element
        : document.querySelector(selector);
};
var btnCreate = $("#btn-create");
var taskFormContainer = $("#task-form-container");
var taskForm = $("#task-form");
var emptyTaskAlert = $('#empty-task-alert');
