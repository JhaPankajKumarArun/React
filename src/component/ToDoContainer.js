import React, { useState } from 'react'
import ToDoItem from './ToDoItem';
function ToDoContainer() {
    const  [toDoList,setToDoList] = useState( [
            { id: 1, name: 'Go to market', desc: 'Go to market by 10 AM' },
            { id: 2, name: 'Purchase book', desc: 'Purchase book from nearest book store' },
            { id: 3, name: 'Guest arrival', desc: 'Attending guest' },
    ])
    const divWrapper = {
        marginTop: '35px'
    };
    function delToDo(todoItem){
        const newList= toDoList.filter(item => item.id !== todoItem.id)
        setToDoList(newList);
    }
    return ( 
        <>
            <h1 style={{ textAlign: "center" }}>Todo Board</h1>
            <div className="row " style={divWrapper}>
                {
                    toDoList.map((toDoItem) => {
                        return <ToDoItem toDoItem={toDoItem} deleteToDo={delToDo} key={toDoItem.id}></ToDoItem>
                    })
                }
            </div>
        </>
    );
}

export default ToDoContainer