//John 3:16
// Create array to hold all tasks
let allTasks = [];

// Target user input and list
const userInput = document.querySelector("#new-task");
const taskList = document.querySelector("#task-list");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click",addTask); // add event listener to listen for click and perform function

function addTask (){

  if (userInput.value.trim() === "") return; // dont accept empty strings
  //Create list item
  const listItem = document.createElement("li");
    listItem.textContent = userInput.value; // pull whatever user typed 
    taskList.append(listItem); // append or show the list item on the page
    allTasks.push(userInput.value); //pushes the task into 
    
   //Create delete button
  const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️"; // create icon
     deleteBtn.classList.add("delete-btn"); // create class for the button to style later
     listItem.appendChild(deleteBtn) // append puts the button on dom so we can see it visually


     
      userInput.value = "";  //Clear input after each task entered
      deleteBtn.addEventListener("click", ()=>{
    listItem.remove();
   allTasks = allTasks.filter(item => item !== listItem);
    
  });

  



  
}
  
 

 

 

  

  

 
  

