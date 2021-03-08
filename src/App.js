import './App.css';
import React from "react";
import {useTodoStore} from "./contextProviders/todoContext";
import {useObserver} from "mobx-react";
import Home from "./pages/home";
import AddTodo from "./pages/addtodo";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";



function App() {

    const todoStore = useTodoStore();

    return useObserver(()=>{
       return ( <div className="App">
               <BrowserRouter>
               <ul>
                   <li><Link to='/'>Home</Link></li>
                   <li><Link to='/add'>Add</Link></li>
               </ul>

                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='/add' >
                        <AddTodo/>
                    </Route>
                </Switch>
            </BrowserRouter>
            <br/>
            <ul>
                {todoStore.todoList.map(el=>{
                    return(
                        <li key={el.id}>{el.text}</li>
                    )
                })}
            </ul>
        </div>
       )
    })


}

export default App;
