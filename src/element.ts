const $ = (selector :string) => {
  const element =  document.querySelectorAll(selector)
  return element.length > 2 
    ? element
    : document.querySelector(selector)
}

const taskForm = <HTMLInputElement>$("#task-form")
const btnCreate = <HTMLInputElement>$("#btn-create");
const btnCancel = <HTMLInputElement>$("#btn-cancel")
const emptyTaskAlert = <HTMLInputElement>$('#empty-task-alert')
const taskFormContainer = <HTMLInputElement>$("#task-form-container")
const tasksContainer = <HTMLInputElement>$("#tasks-container")
const btnDeleteTask = <HTMLInputElement>$("#btn-delete-task")