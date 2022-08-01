// API calls
const BASE_URL = 'http://localhost:3000';
const tasksPath = 'todos';

// Input value
let input = document.querySelector('.input_todo_list').value;
let container = document.querySelector('.container_todo_list');
// let container = document.createElement('div')
const task = `
      <article class="todo_list_item">
        <p class="text_todo_list">${input.text}</p>
        <div class="div_todolist_buttons">
            <button type="button" class="button_edit_todo" onclick="handleEdit()">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" 
                data-testid="EditIcon" aria-label="fontSize large">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 
                17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 
                0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                </svg>
            </button>
            <button type="button" class="button_delete_todo" onclick="handleDelete()">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" 
                data-testid="DeleteIcon" aria-label="fontSize large"><path d="M6 19c0 1.1.9 2 2 
                2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                </svg>
            </button>
        </div>
    </article>`;

const handleSubmit = () => {
    console.log(input)
    // container.body.appendChild(tasks)
    container.innerHTML = container.join(task)
}

const handleEdit = () => {

}

const handleDelete = () => {
    
}


    


/*  MAIN HANDLE SUBMIT WITH FETCH

const handleSubmit = () => {
    fetch(`${BASE_URL}/${tasksPath}`)
  .then((response) => response.json())
  .then((data) => {
    const tasks = data.map((task) => {
      return `
      <article class="todo_list_item">
        <p class="text_todo_list">${task.title}</p>
        <div class="div_todolist_buttons">
            <button type="button" class="button_edit_todo" onclick="handleEdit()">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" 
                data-testid="EditIcon" aria-label="fontSize large">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 
                17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 
                0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                </svg>
            </button>
            <button type="button" class="button_delete_todo" onclick="handleDelete()">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" 
                data-testid="DeleteIcon" aria-label="fontSize large"><path d="M6 19c0 1.1.9 2 2 
                2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                </svg>
            </button>
        </div>
    </article>`
    });
    document.querySelector(".container_todo_list").innerHTML = tasks.join("");})
}

*/