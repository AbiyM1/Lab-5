// Add to LocalStorage function declaration 
function addToDatabase(newTask)
{
    let listofTasks;
    if(localStorage.getItem('tasks') == null){
        listofTasks = [];
    }
    else
    {
        listofTasks = JSON.parse(localStorage.getItem('tasks'));
    }

    listofTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(listofTasks));
}


// Load task from local storage function declaration 
function loadfromDB()
{
    let listofTasks;
    
    if(localStorage.getItem('tasks') == null)
    {
        listofTasks = [];
    }
    else
    {
        listofTasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return listofTasks;    //return array 
}


function clearAllTasksFromDB() {
    localStorage.clear()
}

function removeFromDB(taskItem) {
    let listOfTasks;

    if (localStorage.getItem('tasks') == null) {
        listOfTasks = []
    } 
    else {
        listOfTasks = JSON.parse(localStorage.getItem('tasks'))
    }

    listOfTasks.forEach(function (task, index) {
        if (taskItem.textContent === task)
        listOfTasks.splice(index, 1)
    })

    localStorage.setItem('tasks', JSON.stringify(listOfTasks))
}


