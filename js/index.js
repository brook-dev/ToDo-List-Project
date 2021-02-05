function listener(){
    const taskName = document.getElementById('taskName').value;
    console.log("Task Name:  "+taskName);

    const taskDescription = document.getElementById('taskDescription').value;
    console.log("Task Description:  "+taskDescription);
     
    const assignedTo = document.getElementById('assignedTo').value;
    console.log("Assigned To:  "+assignedTo);

    const dueDateId = document.getElementById("dueDateId").value;
    console.log("Due Date:  "+dueDateId);

    const taskStatus = document.getElementById("taskStatus").value;
    console.log("Task Status:  "+taskStatus);
}
