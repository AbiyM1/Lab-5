// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 

const filter = document.querySelector('#filter'); //the task filter text field

const sortAscending = document.querySelector("#ascending")

const sortDescending = document.querySelector("#descending")



//DB variable 
let DB;

// Add Event Listener [on Load]
document.addEventListener('DOMContentLoaded', () => {
    
    let TasksDB = indexedDB.open('tasks', 1);

    // if there's an error
    TasksDB.onerror = function () {
        console.log('There was an error creating the Database');
    }
    // if everything is fine, assign the result to the instance
    TasksDB.onsuccess = function () {

        console.log('Database Ready');

        // save the result
        DB = TasksDB.result;

        // display the Task List 
        displayTaskList();
    }


    // This method runs once (great for creating the schema)
    TasksDB.onupgradeneeded = function (e) {
        // the event will be the database
        console.log("Upgraded successfully")
        let DB = e.target.result;

        // create an object store, 
        // keypath is going to be the Indexes
        let objectStore = DB.createObjectStore('tasks', {
            keyPath: 'id',
            autoIncrement: true
        });

        // createindex: 1) field name 2) keypath 3) options
        objectStore.createIndex('taskName', 'taskName', {
            unique: false
        });


        
        console.log('Database ready and fields created!');
    }

    form.addEventListener('submit', addNewTask)

    function addNewTask(e) {
        e.preventDefault();
        // create a new object with the form info
        if (taskInput.value === '') {
            taskInput.style.borderColor = "red";

            return;
        }
        
        let newTask = {
            taskname: taskInput.value,
        }
        // Insert the object into the database 
        let transaction = DB.transaction(['tasks'], 'readwrite');
        let objectStore = transaction.objectStore('tasks');

        let request = objectStore.add(newTask);
        // on success
        request.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('New Task added');
            displayTaskList();
        }
        transaction.onerror = () => {
            console.log('There was an error, try again!');
        }
    }




    // function displayTaskList() {
    //     // clear the previous task list
    //     while (taskList.firstChild) {
    //         taskList.removeChild(taskList.firstChild);
    //     }

    //     // create the object store
    //     let objectStore = DB.transaction('tasks').objectStore('tasks');

    //     objectStore.openCursor().onsuccess = function (e) {
    //         // assign the current cursor
    //         let cursor = e.target.result;

    //         if (cursor) {
                
    //             li.setAttribute('data-task-id', cursor.value.id);
    //             // Create text node and append it 
    //             li.appendChild(document.createTextNode(cursor.value.taskname));
    //             cursor.continue();
    //         }
    //     }
    // }













    clearBtn.addEventListener('click', clearAllTasks);
    //clear tasks 
    function clearAllTasks() {
        //Create the transaction and object store
        let transaction = DB.transaction("tasks", "readwrite");
        let tasks = transaction.objectStore("tasks");

        // clear the the table
        tasks.clear();
        //repaint the UI
        displayTaskList();

        console.log("Tasks Cleared !!!");
    }






    // Remove task event [event delegation]
    taskList.addEventListener('click', removeTask);

    function removeTask(e) {
        let taskID = Number(e.target.parentElement.parentElement.getAttribute('data-task-id'))
        let transaction = DB.transaction(['tasks'], 'readwrite');
        let objectStore = DB.transaction('tasks', 'readwrite').objectStore('tasks')

        if (e.target.parentElement.classList.contains('delete-item')) {
            if (confirm('Are You Sure about that ?')) {
                e.target.parentElement.parentElement.remove()
                objectStore.delete(taskID);

                transaction.oncomplete = () => {
                    e.target.parentElement.parentElement.remove();
                }
            }
        }
    }

    clearBtn.addEventListener('click', () => {
        if (confirm('Are You Sure?')) {
            indexedDB.deleteDatabase('tasks')
            while (taskList.firstChild) {
                taskList.removeChild(taskList.firstChild)
            }

            window.location.reload()
        }
    })
    reloadIcon.addEventListener('click', () => {
        location.reload()
    })

    filter.addEventListener('keyup', (e) => {
        
        const searchInput = e.target.value.toLowerCase();
        const listItems = taskList.getElementsByTagName('li');
        Array.from(listItems).forEach((listItem) => {
            const listItemTextContext = listItem.textContent;
            if (listItemTextContext.toLowerCase().indexOf(searchInput) != -1) {
                listItem.style.display = 'block';
            } else listItem.style.display = 'none';
        })
    })


    

});