const addButton = document.querySelector('.add-todo');
const inputs = document.querySelector('.todo-inputs');
const todoContainers = document.querySelector('.todo-containers');
const mondayInput = document.querySelector('#monday-input');
const mondayContainer = document.querySelector('#monday-container');
const makeImportant = document.querySelector('.make-important');
let i = 0;



addButton.addEventListener('click', function(e){
    createToDo();
});

createToDo = () => {
    
    if(mondayInput.value === ''){
        i++;
        addButton.innerText = 'Please enter something!';
        mondayInput.value = '';
        setInterval(function(){
            addButton.innerText = 'Add todo';
        }, 3000);
    }
 
    else{
        if(addButton.innerText === 'Add todo'){
        let todo = document.createElement('li');
        i++;
        let todoRemove = document.createElement('button');
        let todoDiv = document.createElement('div');
        let removeDiv = document.createElement('div');
        todoDiv.classList.add('todo-div');
        todo.innerText = `! ${mondayInput.value}.`;
        todo.classList.add('todos-li');
        todoDiv.append(todo);
        removeDiv.classList.add('remove-div');
        //remove button
        todoRemove.innerText = 'Remove';
        todoRemove.classList.add('remove-button');
        removeDiv.append(todoRemove);
        todoDiv.append(removeDiv);
        mondayContainer.append(todoDiv);
        mondayInput.value = '';

        todoRemove.addEventListener('click', function(e){
            todoRemove.remove();
            removeLi(todo);
            todoDiv.remove();
        });

        makeImportant.addEventListener('click', function(){
            todo.classList.add('important-btn');
        });
        }


    }
}

removeLi = (todo) =>{
    todo.innerText = `${mondayInput.value}`;
    todo.remove();
    i--;

    //makeimportant button
}
