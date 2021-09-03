const $ = (selector :string) => {
  const element =  document.querySelectorAll(selector)
  return element.length > 2 
    ? element
    : document.querySelector(selector)
}

const btnCreate = <HTMLInputElement>$("#btn-create");
const taskFormContainer = <HTMLInputElement>$("#task-form-container")
const taskForm = <HTMLInputElement>$("#task-form")
const emptyTaskAlert = <HTMLInputElement>$('#empty-task-alert')