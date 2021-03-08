import React from "react";
import {useTodoStore} from "../contextProviders/todoContext";

const Home = ()=>{

    const todoStore = useTodoStore();

    return (

        <div>
            <h4>Todo List</h4>
            <ul>
                {todoStore.todoList.map((el)=>{
                    return (<li key={el.id}>
                        {el.text}
                        <button onClick={()=>todoStore.removeTodo(el.id)}>
                            Delete
                        </button>
                    </li>)
                })}
            </ul>
        </div>

    )
}

export default Home