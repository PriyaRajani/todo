const input = document.getElementById('add-input');
const addBtn = document.getElementById('add-btn');

const todoCards = document.querySelector('.todo-cards');
let form = document.getElementById('todo-form')
let todoArr = [];
let count = 0;

 function deleteTodo(id){
    let num = id.slice(4);
    let contId = 'container-'+num;
    let ele = document.getElementById(contId)
    todoCards.removeChild(ele)
    let arrIdx = Number(num);
    todoArr = todoArr.filter(t=>t.id !== arrIdx)
 }
 function editTodo(id,todo,repeat){
    todo = todo.trim();
    let num = id.slice(5);
    let pId = `todo-${num}`;
    let edId = `edit-${num}`;
   //  todo = document.getElementById(pId).textContent.trim();
   //  console.log(todo);
    let newTodo =  prompt('enter new todo',todo)
    newTodo = newTodo.trim();
    if(newTodo === null){
      alert('you clicked cancel')
      return;
    }
    if(newTodo === ''){
      alert('your todo was empty enter again to edit !')
      return;
    }
    if(todoArr.length > 0){
               for(const t of todoArr){
                  if(t.name === newTodo){
                     alert('the given todo already exists');
                     repeat = true;
                     // console.log(repeat);
                     return ;
                  }
                 
               }
            }
    if(newTodo !== todo && !repeat){
            let para = document.getElementById(pId);
            para.textContent = newTodo;   
           
            for(const t of todoArr){
               if(t.name === todo){
                  t.name = newTodo;
                  
               }
            }
            
    }
 }
 function addTodo(repeat){
   //  let repeat = false;
    let todo = input.value.trim();
    
    count++;
    todoCards.classList.remove("hidden");
            if(todoArr.length > 0){
               for(const t of todoArr){
                  if(t.name === todo){
                     alert('the given todo already exists');
                     repeat = true;
                     // console.log(repeat);
                     return ;
                  }
                 
               }
              
            }
            if(!repeat){
            todoCards.innerHTML += 
            `
       <div class="todo" id="container-${count}">
        <div class="left-container">
          <label class="check-container" for="check-${count}">
            <input type="checkbox" id="check-${count}" />
            <span class="demo"></span>
            <p id="todo-${count}">${todo}</p>
          </label>
        </div>

        <div class="right-container">
          <button type="button" class="delete-btn btns" id="del-${count}"onclick=deleteTodo('del-${count}')>
            <i class="fa-solid fa-trash" style="color: grey"></i>
          </button>
          <button type="button" class="edit-btn btns" id="edit-${count}"onclick =editTodo('edit-${count}','${todo}',false)>
            <i class="fa-solid fa-pen-to-square" style="color: grey"></i>
          </button>
        </div>
      </div>
            `
            
            todoArr.push({id:count,name:todo})
            // console.log(todoArr)
            }
 }
 form.addEventListener("submit",(e)=>{
    e.preventDefault();
    addTodo(false)
 })
    
   
   
    
