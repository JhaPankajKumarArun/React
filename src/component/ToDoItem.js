import React from 'react'
function ToDoItem(props) {
    console.log(props);
    return (
        <>
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.toDoItem.name}</h5>
                        <p className="card-text">{props.toDoItem.desc}</p>
                        <button className="btn btn-primary" onClick={()=>{props.deleteToDo(props.toDoItem)}}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ToDoItem
