let taskName = document.getElementById('taskName');
let taskDescription = document.getElementById('taskDescription');
let assignedTo = document.getElementById('assignedTo');
let dueDateId = document.getElementById('dueDateId');
let taskStatusId = document.getElementById('taskStatusId');
let submitButton = document.getElementById('submitButton');



taskName.addEventListener('taskName', (e) => {
    e.preventDefault();
    if (!textField.value) {
        console.log('Task Name:   ' + taskName);
    }
})

taskDescription.addEventListener('taskDescription', (e) => {
    e.preventDefault();
    if (!textField.value) {
        console.log('Task Description:   ' + taskDescription);
    }
})
assignedTo.addEventListener('assignedTo', (e) => {
    e.preventDefault();
    if (!textField.value) {
        console.log('Assigned To:   ' + assignedTo);
    }
})

dueDateId.addEventListener('dueDateId', (e) => {
    e.preventDefault();
    if (!textField.value) {
        console.log('Due Date:   ' + dueDateId);
    }
})
taskStatusId.addEventListener('taskStatusId', (e) => {
    e.preventDefault();
    if (!textField.value) {
        console.log('Task Status:   ' + taskStatusId);
    }
})
