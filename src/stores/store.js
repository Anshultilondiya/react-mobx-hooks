import {nanoid} from 'nanoid'

export function createTodoStore(){
    return{
        todoList : [],
        addTodo(text){
            this.todoList.push({
                text, id: nanoid()
            });
            console.log("New Item Added")
            console.log(text)
            console.log(this.todoList)
        },
        removeTodo(id){
            this.todoList = this.todoList.filter(todo=> todo.id !== id)
        }
    }
}