import './App.css';
import {useState, useEffect} from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About';

function App() {
  let [TodosObj, setTodosObj] = useState(()=>{
    let SavedTodos = localStorage.getItem("todos")
    return SavedTodos ? JSON.parse(SavedTodos) : []
  })

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(TodosObj))
  },[TodosObj])

  function deleteBtnClc(TodoItem){
    console.log("delete button Clicked")
    console.log(TodoItem)
    setTodosObj(TodosObj = TodosObj.filter((ti)=>{
      return ti !== TodoItem
    }))
    console.log(TodosObj)
  }

  function AddBtnClc(NewTodo){
    console.log("Add button Clicked")
    let newid;
    if(TodosObj.length!==0){
      newid = TodosObj[TodosObj.length-1].id + 1;
    }else{
      newid = 1;
    }
    NewTodo = {id: newid, ...NewTodo}
    console.log(NewTodo)
    setTodosObj(TodosObj = [...TodosObj, NewTodo])
    console.log(TodosObj)
  }

  return (
    <Router>
      <Navbar title="My Todo App" SearchBarFlag={true}/>
      
      <Routes>
        <Route exact path="/"
            element = {
              <>
                <AddTodo AddBtnClc={AddBtnClc}/>
                <Todos TodosObj={TodosObj} deleteBtnClc={deleteBtnClc}/>
              </>
            }
        />

        <Route exact path="/about"
            element = {
              <>
                <About />
              </>
            }
        />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
