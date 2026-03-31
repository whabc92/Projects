import './Todo.css'

function Todo (props) {
    return (
        <div className="TodoStyle">
            <h3>{props.TodoItem.title}</h3>
            <p>{props.TodoItem.desc}</p>
            <button type="button" onClick={()=>props.deleteBtnClc(props.TodoItem)}>Delete</button>
        </div>
    )
}

export default Todo