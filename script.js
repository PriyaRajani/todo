const input = document.getElementById("add-input");
const addBtn = document.getElementById("add-btn");

const todoCards = document.querySelector(".todo-cards");
let form = document.getElementById("todo-form");
let todoArr = [];
let count = 0;

function deleteTodo(id) {
  let num = id.slice(4);
  let contId = "container-" + num;
  let ele = document.getElementById(contId);
  todoCards.removeChild(ele);
  let arrIdx = Number(num);
  todoArr = todoArr.filter((t) => t.id !== arrIdx);
}

function addTodo(repeat) {
  let todo = input.value.trim();

  count++;
  todoCards.classList.remove("hidden");
  if (todoArr.length > 0) {
    for (const t of todoArr) {
      if (t.name === todo) {
        alert("the given todo already exists");
        repeat = true;
        return;
      }
    }
  }
  if (!repeat) {
    todoCards.innerHTML += `
       <div class="todo" id="container-${count}">
        <div class="left-container">
          <label class="check-container" for="check-${count}">
            <input type="checkbox" id="check-${count}" />
            <span class="demo"></span>
            <p id="todo-${count}" title="${todo}">${todo}</p>
          </label>
        </div>

        <div class="right-container">
          <button type="button" class="delete-btn btns" id="del-${count}"onclick=deleteTodo('del-${count}')>
            <i class="fa-solid fa-trash" style="color: grey"></i>
          </button>
            <button type="button" class="edit-btn btns" id="edit-${count}"onclick =openEditModal(${count},false)>
            <i class="fa-solid fa-pen-to-square" style="color: grey"></i>
          </button>
        </div>
      </div>`;

    todoArr.push({ id: count, name: todo });
    // console.log(todoArr)
  }
}

function openEditModal(todoId) {
  const overlayElement = document.getElementById("overlay");
  overlayElement.style.display = "flex";
  const form = document.getElementById("overlay-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let editInput = document.getElementById("edit-input");
    let newTodo = editInput.value.trim();
    let oldTodo = "";
    for (const t of todoArr) {
      if (t.id === todoId) {
        oldTodo = t.name;
      }
    }
  

    if (newTodo !== oldTodo ) {
      let para = document.getElementById(`todo-${todoId}`);
      para.textContent = newTodo;

      for (const t of todoArr) {
        if (t.id === todoId) {
          t.name = newTodo;
        }
      }
    }
    overlayElement.style.display = "none";
  });
}

function closeEditModal() {
  const overlayElement = document.getElementById("overlay");
  overlayElement.style.display = "none";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(false);
});
