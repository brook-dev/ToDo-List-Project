              
// In js/taskManager.js, above the TaskManager class definition, create a new function, createTaskHtml. The function should accept the following parameters:
const createTaskHtml = (name,description,assignedTo,dueDate,status,id) => { 
  // using conditional(ternary operator for Mark As done status)
  const display = status == "TODO" ? "" : "d-none";   
  // using conditional(ternary) operator for status styling
  const color = status == "TODO" ? "btn-outline-primary" : "btn-success"
  const html = `<li class="list-group-item">
                <div class="task" data-task-id=${id}>
                  <div class="task-top">
                    <div>
                      <span class="task-title"><strong> Task Name: </strong>${name}</span>
                    </div>
                    <div>
                        <span class="btn btn-pill ${color} task-status">${status}</span>
                    </div>
                  </div>
                  <div class="task-desc">
                    <p><strong> Description: </strong>${description}</p>
                  </div>
                  <div>
                    <span class="task-assign"><strong> Assigned to: </strong>: ${assignedTo}</span>
                  </div>
                  <div>
                    <span class="task-date"><strong> Due to: </strong> ${dueDate}</span>
                  </div>
                  <div class="task-bottom">
                    <div>
                      <span class="${display} btn btn-outline-success done-button">Mark as done</span>
                    </div>
                    <div>
                      <span class="btn btn-outline-danger delete-button">DeleteTask</span>
                    </div>
                  </div>
                </div>
              </li>`
  return html;  }
 class TaskManager {
      constructor(currentId=0) {
          this.tasks = []
          this._currentId=currentId
      }
      addTask(name,description,assignedTo,dueDate,status="TODO") {
          this.tasks.push({
              id: this._currentId,
              name: name,
              description: description,
              assignedTo: assignedTo,
              dueDate: dueDate,
              status: status
          })
          this._currentId++;
      }
      render() {
          const tasksHtmlList = []
          this.tasks.forEach((e,i)=>{
              e.id=i
              const date = new Date(e.dueDate);
              const formattedDate = date.toDateString();
              const taskHtml = createTaskHtml(e.name,e.description,e.assignedTo,formattedDate,e.status,i);
              tasksHtmlList.push(taskHtml);
          })
          const tasksHtml = tasksHtmlList.join("\n");
          $('#tasks').html(tasksHtml)
      }
      getTaskById(taskId) {
          let foundTask;
          this.tasks.forEach(e=>{
              const task = e
              if (task.id==taskId){
                  foundTask = task
                  }
          })
          return foundTask
      }
      save() {
          const tasksJson = JSON.stringify(this.tasks)
          localStorage.setItem('tasks',tasksJson)
          localStorage.setItem('currentID',JSON.stringify(this._currentId))
      }
      load() {
          if (localStorage.getItem('tasks') !== null){
              const tasksJson = localStorage.getItem('tasks')
              this.tasks = JSON.parse(tasksJson)
          }
          if (localStorage.getItem("currentID") !== null){
              this._currentId = +localStorage.getItem('currentID')
          }
      }
    // create a deleteTask method on the TaskManager class. It should take one parameter, taskId, the id of the task we want deleted.
      deleteTask (taskId) {
          this.tasks.splice(taskId,1)
          this._currentId--
      }
  }
  
  module.exports = TaskManager

//TaskManager() = document.getElementsByClassName('display').innerHtml;

  
//   // task 5 task
// With Jorge
//  addTask(taskName, taskDescription, assignedTo, dueDateId, taskStatus="TODO") {
//   this.task.push({
//        id:this.currentId,
//        taskName: document.getElementById('taskName').innerHTML,
//        taskDescription: document.getElementById('taskDescription').innerHTML,
//        assignedTo: document.getElementById('assignedTo').innerHTML,
//        dueDateId: document.getElementById('dueDateId').innerHTML,
//        taskStatus: document.getElementById('taskStatus').innerHTML
//      })
//      this.currentId++;
//     }