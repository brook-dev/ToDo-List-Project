const taskManager = new TaskManager()
taskManager.load()
taskManager.render()
const validFormFieldInput = () => {
    const newTaskNameInput = document.querySelector('#task-name')   ;
    const name = newTaskNameInput.value;
    const newDescriptionInput = document.querySelector('#description');
    const description = newDescriptionInput.value;
    const newAssignedToInput = document.querySelector('#assigned-to');
    const assignedTo = newAssignedToInput.value;
    const newDueDateInput = document.querySelector('#due-date');
    const dueDate = newDueDateInput.value;
    if (name===""){
        $('#name-alert').show()
        setTimeout(()=>{$('#name-alert').hide()},2000)
        return false;
    }
    if (description==="") {
        $('#descrip-alert').show()
        setTimeout(()=>{$('#descrip-alert').hide()},2000)
        return false;
    }
    if (assignedTo===""){
        $('#assigned-alert').show()
        setTimeout(()=>{$('#assigned-alert').hide()},2000)
        return false;
    }
    if (dueDate === ""){
        $('#due-alert').show()
        setTimeout(()=>{$('#due-alert').hide()},2000)
        return false;
    }
    taskManager.addTask(name,description,assignedTo,dueDate)
    taskManager.save()
    taskManager.render()
    newTaskNameInput.value = ""
    newDescriptionInput.value = ""
    newAssignedToInput.value = ""
    newDueDateInput.value = ""
}
const tasksList = document.querySelector('#tasks');
tasksList.addEventListener('click',(event) => {
        const parentTask = event.target.parentElement.parentElement.parentElement
        const taskId = parentTask.dataset.taskId
        const task = taskManager.getTaskById(taskId)
    if (event.target.classList.contains('done-button')){
        task.status = "DONE"
        taskManager.save()
        taskManager.render()
        return false;
    }
    if (event.target.classList.contains('delete-button')){
        taskManager.deleteTask(taskId)
        taskManager.save()
        taskManager.render()
        return false;
    }
})
//     //  In index.js, add an event listener to the New Task form, listening to the submit event. If there is already an event listener used for validation, use that one.
// const sub = document.getElementById('submitButton');

//  sub.addEventListener('click', listener);

 // Create a taskHtml variable with the result of calling the createTaskHtml function, making sure to pass a value for each parameter.
// const taskHtml = createTaskHtml('finalProject', 'the should meet to review on task 5,6 and 7', 'Group', '2/9/2021', 'review');

//TaskManager.addTask(taskName, taskDescription, assignedTo, dueDateId, taskStatus);
//TaskManager.render(); // ****** I didnt see the tasks are added on the lists @ this stage!
//  console.log(tasksList);

// console.log(createHtml);
// task 7:step 2====> Add an Event Listener to the Task List, listening for the 'click' event.