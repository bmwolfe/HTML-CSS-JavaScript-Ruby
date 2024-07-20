const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
}];

renderList();

function renderList(){
    let todoListHTML = '';

    for(let i = 0; i< todoList.length; i++){
        const todoObject = todoList[i];
        //const name = todoObject;
        //const dueDate = todoObject.dueDate;
        const { name , dueDate } = todoObject;
        const html = `
        <div>${name}</div> 
        <div>${dueDate}</div> 
        <button onclick = "
            todoList.splice(${i}, 1);
            renderList();
        " class="delete-todo-buttons">delete</button>`;

        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


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