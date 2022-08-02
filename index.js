// API calls
const BASE_URL = 'http://localhost:3000';
const tasksPath = 'todos';

// Input value
let input = "";
let container = document.getElementById('container__todo__list');
let inputText = document.getElementById('text__todo__list');

let task = `
    <article class="todo__list__item">
        <p id="text__todo__list">${input}</p>
        <div class="div__todolist__buttons">
            <button type="button" class="button__edit__todo" onclick="handleEdit()">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" 
                data-testid="EditIcon" aria-label="fontSize large">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 
                17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 
                0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                </svg>
            </button>
            <button type="button" class="button__delete__todo" onclick="handleDelete(this)">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" 
                data-testid="DeleteIcon" aria-label="fontSize large"><path d="M6 19c0 1.1.9 2 2 
                2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                </svg>
            </button>
        </div>
    </article>
    `;

const handleInput = (val) => {
    input = val;
}

const handleSubmit = () => {
    container.innerHTML = task;

}

const handleEdit = () => {
    inputText = document.createElement("input");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("id", "editInput");
    document.getElementById("editInput").addEventListener("keypress", function(e){
        if(e.key == 'Enter'){
            inputText = `<p id="text__todo__list">${editInput.value}</p>`
        }
    });
}

const handleDelete = (e) => {
    e.parentNode.parentNode.remove();
}

const getTodos = () => {
    return fetch(`${BASE_URL}/${tasksPath}`).then((response) => {
      return response.json()
    })
}

const updateTodos = () => {
    return fetch(`${BASE_URL}/${tasksPath}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
            { 
                title: todo,
                completed: true 
            }
        ),
      }).then((res) => res.json());
}

const updateTodo = (id) => {
    const updateTodo = (`${BASE_URL}/${tasksPath}/${id}`);
    return fetch(updateTodo,{
        method : "PUT"
    })
}

const addTodos = () => {
    return fetch(`${BASE_URL}/${tasksPath}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
            { 
                title: todo,
                completed: false 
            }
        ),
      }).then((res) => res.json());
}

const deleteTodos = (id) => {
    const deleteTodo = (`${BASE_URL}/${tasksPath}/${id}`);
    return fetch(deleteTodo,{
        method : "DELETE"
    })
}