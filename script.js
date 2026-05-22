//John 3:16
// Create array to hold all tasks
let allTasks = [];
// target user input
let userInput = document.querySelector("#new_task");
//  add task when called
function addTask (){
  //store users input
  let taskText = userInput.value;
  // If statement to prevent users from entering empty values
if(taskText === "")return;
//Push the task into the array 
allTasks.push(taskText);
//Create list item
let listItem = document.createElement("li");
// Create a span to customize element later
let taskSpan = document.createElement("span");
taskSpan.innerText =taskText;

//Create delete button 
let deleteBtn =document.createElement("button");
deleteBtn.innerText= "🗑️";
deleteBtn.classList.add("delete-btn");
deleteBtn.onclick = function(){
  listItem.remove();
  allTasks = allTasks.filter(task => task !== taskText);
}

// Assing the text value to the list item
listItem.appendChild(taskSpan);
listItem.appendChild(deleteBtn);
// Target the unordered list
let taskList = document.querySelector("#user_task");
// Make the task/li visbile on the docuemnt
taskList.appendChild(listItem);


// Clear the searchbox so user can enter more tasks afterwards
userInput.value ="";
}

 