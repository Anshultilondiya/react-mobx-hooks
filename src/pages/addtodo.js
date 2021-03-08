import React , {useState} from "react";

import {useTodoStore} from "../contextProviders/todoContext";

const AddTodo = ()=>{
    const [todoText, setTodoText] =useState("")
    const todoStore = useTodoStore();
    return(
        <div>
            <h3>Add to Todo List</h3>
            <h4>Current Text = {todoText}</h4>
        <input
        value={todoText}
        onChange={(e)=> setTodoText(e.target.value)}
        type="text"
        />
        <button onClick={()=> todoStore.addTodo(todoText)}>Add Todo</button>
        </div>
    )
}

export default AddTodo