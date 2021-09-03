interface TaskInterface {
  title : string;
  description : string;
}

const task = new Task()

btnCreate.addEventListener('click', () => {
    taskFormContainer.classList.add("fade")
    taskFormContainer.classList.toggle("hidden")

    emptyTaskAlert.classList.toggle("hidden")

    task.clear()
})

taskForm.addEventListener('submit', e => {
  e.preventDefault()

  const title = ( <HTMLLIElement>$('#title')).value
  const description = (<HTMLLIElement>$('#description')).value

  const taskData:TaskInterface = {title, description}

  task.createTask(taskData)

  emptyTaskAlert.classList.toggle("hidden")
})

window.onload = () => {
  task.showTasks()
}