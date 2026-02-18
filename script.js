const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

function renderList(todos) {
  if (todos.length === 0) {
    list.innerHTML = '<div class="empty">No tasks yet!</div>';
    return;
  }
  list.innerHTML = todos
    .map(
      (todo, i) => `
      <div class="todo-item ${todo.done ? "done" : ""}">
        <input type="checkbox" ${todo.done ? "checked" : ""} onchange="toggleTodo(${i})" />
        <span class="todo-text">${todo.text}</span>
        <button class="delete-btn" onclick="deleteTodo(${i})">✕</button>
      </div>`,
    )
    .join("");
}

function getTodos() {
  return JSON.parse(localStorage.getItem("todos") || "[]");
}

function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderList(todos);
}

function addTodo() {
  const text = input.value.trim();
  if (!text) return;
  const todos = getTodos();
  todos.push({ text, done: false });
  saveTodos(todos);
  input.value = "";
  input.focus();
}

function toggleTodo(index) {
  const todos = getTodos();
  todos[index].done = !todos[index].done;
  saveTodos(todos);
}

function deleteTodo(index) {
  const todos = getTodos();
  todos.splice(index, 1);
  saveTodos(todos);
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});

renderList(getTodos());
