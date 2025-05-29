const input = document.getElementById('add-input');
const addBtn = document.getElementById('add-btn');

const todoCards = document.querySelector('.todo-cards');
let form = document.getElementById('todo-form')
let todoArr = [];
let count = 0;

 function deleteTodo(id){
    let num = id[4];
    let contId = 'container-'+num;
    let ele = document.getElementById(contId)
    todoCards.removeChild(ele)
    let arrIdx = Number(num);
    todoArr = todoArr.filter(t=>t.id !== arrIdx)
 }
 function editTodo(id,todo,repeat){
    let num = id[5];
    let pId = `todo-${num}`;
    let edId = `edit-${num}`;
    todo = document.getElementById(pId).textContent;
    let newTodo =  prompt('enter new todo',todo)
    if(newTodo === null){
      alert('you clicked cancel')
      return;
    }
    if(newTodo === ''){
      alert('your todo was empty enter again to edit !')
      return;
    }
    if(todoArr.length > 0){
               todoArr.every(t=>{
                  if(t.name === newTodo){
                     alert('the given todo already exists');
                     repeat = true;
                     return;
                  }
               })
            }
    if(newTodo !== todo && !repeat){
            let para = document.getElementById(pId);
            para.textContent = newTodo;   
            // todoArr.every(t=>{
            //    if(t.name === todo){
            //       t.name = newTodo;
            //       // console.log(todoArr)
            //    }
            // })
            for(const t of todoArr){
               if(t.name === todo){
                  t.name = newTodo;
                  // console.log(todoArr)
               }
            }
            
    }
 }
 function addTodo(repeat){
   //  let repeat = false;
    let todo = input.value;
    
    count++;
    todoCards.classList.remove("hidden");
            if(todoArr.length > 0){
               for(const t of todoArr){
                  if(t.name === todo){
                     alert('the given todo already exists');
                     repeat = true;
                     console.log(repeat);
                     return ;
                  }
                 
               }
               // todoArr.every(t=>{
               //    if(t.name === todo){
               //       alert('the given todo already exists');
               //       repeat = true;
               //       console.log(repeat);
               //       return ;
               //    }
               //    console.log(repeat);
               // })
               //console.log(repeat)
            }
            if(!repeat){
            todoCards.innerHTML += 
            `
            <div class ='container' id='container-${count}'>
            <div class='card'>
                 <p id='todo-${count}'>${todo}</p> 
             
            </div>
            
              <button type='button' class='delete-btn btns'id='del-${count}'onclick=deleteTodo('del-${count}')>⛔</button>
              <button type ='button'  class='edit-btn btns'id='edit-${count}'onclick =editTodo('edit-${count}','${todo}',false)>✏️</button>
            <div>
            </div>
            `
            
            todoArr.push({id:count,name:todo})
            }
 }
 form.addEventListener("submit",(e)=>{
    e.preventDefault();
    addTodo(false)
 })
    
   
   
    
