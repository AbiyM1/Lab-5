const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button



form.addEventListener("submit" , addNewTask);

// clearBtn.addEventListener('click', clearAllTasks);



filter.addEventListener('keyup', filterTasks);








// function addNewTask(e){

//     if taskInput.addEventListener.length
//     alert('Add new Task');
// }


// function clearAllTasks(f){

//     alert('Clear All Tasks');
// }



//  // Add New  Task Function definition 
//  function addNewTask(e) {

//     alert("Add New Task ....");

//     e.preventDefault(); //disable form submission
// }

// // Clear Task Function definition 
// function clearAllTasks() {

//     alert("Clear tasks ...."); 

// }
// // Filter tasks function definition 
// function filterTasks(e) {

//     console.log("Task Filter ...");

// }
 


// Add New  Task Function definition 
function addNewTask(e) {
    
    e.preventDefault(); //disable form submission

    if (taskInput.value === ''){
        // taskInput.value.style.border = "red";
    }




  // Create an li element when the user adds a task 
  const li = document.createElement('li');
  // Adding a class
  li.className = 'collection-item';
  // Create text node and append it 
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new element for the link 
  const link = document.createElement('a');
  // Add class and the x marker for a 
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);
  // Append to ul 
  taskList.appendChild(li);

}


// function clearTask(e){
//     if (taskInput.value === ''){
//         alert("add new task");

//     }




//   // Create an li element when the user adds a task 
//   const li = document.createElement('li');
//   // Adding a class
//   li.className = 'collection-item';
//   // Create text node and append it 
//   li.appendChild(document.createTextNode(taskInput.value));
//   // Create new element for the link 
//   const link = document.createElement('a');
//   // Add class and the x marker for a 
//   link.className = 'delete-item secondary-content';
//   link.innerHTML = '<i class="fa fa-remove"></i>';
//   // Append link to li
//   li.appendChild(link);
//   // Append to ul 
//   taskList.appendChild(li);





//   e.preventDefault(); //disable form submission





// }



function clearAllTasks(e){

    while (taskList.firstChild){
        taskList.removeChild (taskList.firstChild);
    }
}

document.getElementsByClassName("red").addEventListener(click, clearAllTasks());



document.querySelector('#signup').addEventListener('click', function() {
    console.log('Sign up button click');
  });
  
  document.querySelector('#account_links').addEventListener('click', function()  {
    console.log('Account links click');
  });
  
  document.querySelector('#header').addEventListener('click',function () {
    console.log('Header click');
  });
  





  