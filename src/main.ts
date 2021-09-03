interface TaskInterface {
  title : string;
  description : string;
}

const task = new Task()

btnCreate.addEventListener('click', () => {
    taskFormContainer.classList.add("fade")
    taskFormContainer.classList.toggle("hidden")

    tasksContainer.classList.add('hidden')  
    emptyTaskAlert.classList.add('hidden')

    task.clear()
})

taskForm.addEventListener('submit', e => {
  e.preventDefault()

  const title = ( <HTMLLIElement>$('#title')).value
  const description = (<HTMLLIElement>$('#description')).value

  const taskData:TaskInterface = {title, description}

  task.createTask(taskData)

  taskFormContainer.classList.toggle("hidden")
})
  
btnCancel.addEventListener('click', () => {
  taskFormContainer.classList.toggle("hidden")
  tasksContainer.classList.toggle('hidden')

  task.checkEmptyTask()
})

window.onload = () => {
  task.showTasks()
}