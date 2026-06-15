//John 3:16
// Create array to hold all tasks
let allTasks = [];

// Target user input and list
const userInput = document.querySelector("#new-task");
const taskList = document.querySelector("#task-list");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click",addTask);

function addTask (){
  //Create list item
  const listItem = document.createElement("li");
  listItem.textContent = userInput.value;
  allTasks.push(listItem);
 taskList.appendChild(listItem);

  
}
  
  //Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️"; // create icon
  deleteBtn.classList.add("delete-btn"); // create class for the button to style later

  deleteBtn.addEventListener("click", ()=>{
    listItem.remove();
    allTasks = allTasks.filter(task => task !== taskText);
  });

  //Append elements so we can see them visually

  

  //Clear input after each task entered
  userInput.value = "";

