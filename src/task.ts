class Task {
  tasks : TaskInterface[];

  constructor(){
    this.tasks = JSON.parse(localStorage.getItem('task_data')!) || []
  }
  
  showTasks(){
    console.log('ini list tugas')
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

  clear(){
    (<HTMLInputElement>$("#title")).value = "";
    (<HTMLInputElement>$("#description")).value = "";
  }

}