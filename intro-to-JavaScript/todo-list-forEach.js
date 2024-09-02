const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
}];

renderList();

function renderList(){
    let todoListHTML = '';


    todoList.forEach((todoObject, index) => {
        const { name , dueDate } = todoObject;
        const html = `
        <div>${name}</div> 
        <div>${dueDate}</div> 
        <button class="delete-todo-buttons js-delete-todo-button">Delete</button>`;

        todoListHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index)=>{
            deleteButton.addEventListener('click', ()=>{
                todoList.splice(index, 1);
                renderList();
            });
        });

        
}

document.querySelector('.js-add-todo-button')
    .addEventListener('click', ()=>{
        addTodo();
    });


function addTodo(){
    const inElement = document.querySelector('.js-name-input');

    const name = inElement.value;
    const date = document.querySelector('.js-date-input');

    const inDate = date.value;
    //console.log(name);
    todoList.push({
        //name: name,
        name,
        dueDate: inDate
    });

    inElement.value = '';

    renderList();
}