//John 3:16
// Create array to hold all tasks
let allTasks = [];

// Target user input and list
const userInput = document.querySelector("#new-task");
const taskList = document.querySelector("#task-list");
const addBtn = document.querySelector("#add-btn");

// Add task when button is clicked
addBtn.addEventListener("click", addTask);

function addTask (){
  const taskText = userInput.value.trim();
  if (taskText === "")return; // Prevent user form adding empty task
  allTasks.push(taskText);

  //Create list item
  const listItem = document.createElement("li");
 
  //Create span for task test so we can style later
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  
  //Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️"; // create icon
  deleteBtn.classList.add("delete-btn"); // create class for the button to style later

  deleteBtn.addEventListener("click", ()=>{
    listItem.remove();
    allTasks = allTasks.filter(task => task !== taskText);
  });

  //Append elements so we can see them visually
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);

  //Clear input after each task entered
  userInput.value = "";
}
