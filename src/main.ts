interface TaskInterface {
  title : string;
  description : string;
  isDone : boolean
}

const task = new Task()

btnCreate.addEventListener('click', () => {    
    taskFormContainer.classList.toggle("hidden")

    tasksContainer.classList.add('hidden')  
    emptyTaskAlert.classList.add('hidden')

    task.clear()
})

taskForm.addEventListener('submit', e => {
  e.preventDefault()

  const title = ( <HTMLInputElement>$('#title')).value
  const description = (<HTMLInputElement>$('#description')).value
  const isDone: boolean = false

  const taskData:TaskInterface = {title, description, isDone}

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