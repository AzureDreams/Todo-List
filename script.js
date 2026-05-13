let allTasks = [];
function addTask (){
  let userInput = document.querySelector("#new_task");
  let taskText = userInput.value;
if(taskText === "")return;
allTasks.push(taskText);
let listItem = document.createElement("li");
listItem.innerText = taskText;

let taskList = document.querySelector("#user_task");
taskList.appendChild(listItem);
userInput.value ="";
}

