// Create array to hold all tasks
let allTasks = [];
// Create Variable to target user input
let userInput = document.querySelector("#new_task");
// Create function to add task when called
function addTask (){
  //Declare vairbale to store users input
  let taskText = userInput.value;
  // If statemant to prevent users from entering empty values
if(taskText === "")return;
//Push the task into the array 
allTasks.push(taskText);
//Create list item
let listItem = document.createElement("li");
// Assing the text value to the list item
listItem.innerText = taskText;
// Target the unordered list
let taskList = document.querySelector("#user_task");
// Make the task/li visbile on the docuemnt
taskList.appendChild(listItem);
// Clear the searchbox so user can enter more tasks afterwards
userInput.value ="";
}

