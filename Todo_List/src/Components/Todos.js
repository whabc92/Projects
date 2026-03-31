import './Todos.css'
import Todo from './Todo'

function Todos (props) {
    return(
        <div className="TodosStyle">
            <h3 className="Heading">Todos List</h3>
            {
                (props.TodosObj.length === 0) ? <h3 className="NoTodo">No Todos Are Present</h3> :
                props.TodosObj.map((TodoItem)=>{
                    return <Todo TodoItem={TodoItem} key={TodoItem.id} deleteBtnClc={props.deleteBtnClc}/>
                })
            }
        </div>
    )
}

export default Todos