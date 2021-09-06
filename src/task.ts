class Task {
  tasks : TaskInterface[];

  constructor(){
    this.tasks = JSON.parse(localStorage.getItem('task_data')!) || []
  }

  checkEmptyTask(){

    if(this.tasks.length){
      emptyTaskAlert.classList.add('hidden')
      tasksContainer.classList.remove('hidden')
    } else {
      emptyTaskAlert.classList.remove('hidden')      
    }
  }

  generateTemplate(){
    let template = ""
    this.tasks.forEach((task,i) => {

      template += `
        <div class="text-gray-500 cursor-pointer py-2 flex space-x-2 justify-between">
          <div class="flex space-x-2">
            <div>${i + 1}.</div>
            ${ task.isDone ? `<div class="line-through">${task.title}</div>` : `<div>${task.title}</div>` }
          </div>
          <div class="flex space-x-2">
            <button onclick="task.doneTask(${i})" class="hover:bg-green-500 hover:bg-opacity-20 flex justify-center items-center w-8 p-1 duration-200 ease-in-out rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-5 text-green-500 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
            <button onclick="task.deleteTask(${i})" class="hover:bg-red-500 hover:bg-opacity-20 flex justify-center items-center w-8 p-1 duration-200 ease-in-out rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-5 text-red-500 hover:text-red-600 duration-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      `       
    })
    return template
  }
  
  showTasks(){

    this.checkEmptyTask()

    const taskList = this.generateTemplate()        
    tasksContainer.innerHTML = taskList
  }

  createTask(task: TaskInterface){
    this.tasks.push(task)
    this.save()
    this.clear()    
  }

  save(){
    localStorage.setItem('task_data', JSON.stringify(this.tasks))
    this.showTasks()
  }

  doneTask(id :number){
    const task = this.tasks[id]
    let mock = {
      title : task.title,
      description : task.description,
      isDone : true
    }
    this.tasks.splice(id, 1, mock)
    this.save()
    this.clear()
  }  

  deleteTask(id:number) {
    this.tasks.splice(id, 1);
    this.save()
  }

  clear(){
    (<HTMLInputElement>$("#title")).value = "";
    (<HTMLInputElement>$("#description")).value = "";
  }

}