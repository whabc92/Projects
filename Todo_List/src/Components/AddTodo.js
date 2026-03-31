import './AddTodo.css'
import {useState} from 'react'

function AddTodo(props) {
    let [NewTodo, setNewTodo] = useState({title:"", desc:""})
    let [Title, setTitle] = useState("")
    let [Desc, setDesc] = useState("")

    function FormSubmit (e) {
        e.preventDefault();
        if(Title==="" || Desc ===""){
            alert("title or desc cannot be null")
        }else{
            console.log("Form Submitted")
            setNewTodo(NewTodo = {
                title: Title,
                desc: Desc
            })
            props.AddBtnClc(NewTodo)
            setTitle("")
            setDesc("")
        }
    }

    return(
        <>
            <div className="container">
                <h3>Welcome to AddTodos</h3>
                <form onSubmit={FormSubmit}>
                    <input type="text" placeholder="Enter title here" value={Title} onChange={(e)=>setTitle(e.target.value)}></input>
                    <input type="text" placeholder="Enter desc here" value={Desc} onChange={(e)=>setDesc(e.target.value)}></input>
                    <button typr="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddTodo