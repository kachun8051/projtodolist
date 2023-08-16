import React, { useState, useEffect } from 'react';
import ToDoAdd from "./ToDoAdd";
import ToDoItem from "./ToDoItem";
import ToDoEdit from "./ToDoEdit";
import { v4 } from "uuid";

const ToDoLs = () => {

    const [ data, setData ] = useState([]);

    useEffect(
        () => {
            // retrieve the data from local storage
            const savedData = JSON.parse(localStorage.getItem("tododata")) || [];
            setData(savedData);
        }, []
    );

    const addToDoItem = (x) => {
        let newseq = 0;
        if (data.length === 0) {
            newseq = 1;
        } 
        else {
            let lastobj = data[data.length-1];
            newseq = lastobj.seq+1;
        }
        let obj = {id: v4(), seq: newseq, value: x, editMode: false, completed: false};
        const newData = [...data, obj];
        setData(newData);
        localStorage.setItem("tododata", JSON.stringify(newData));
    };

    const editToDoItem = (id) => {    
        const newData = data.map((x) => (x.id === id ? {...x, editMode: true}: x));
        setData(newData);
        // no need to store in local storage because value has NOT changed
        // localStorage.setItem("tododata", JSON.stringify(newData));
      }
    
      const editToDoData = (id, val) => {
        const newData = data.map( (x) => (x.id === id ? {...x, value: val, editMode: false}: x)); 
        setData(newData);
        localStorage.setItem("tododata", JSON.stringify(newData));
      }
    
      const deleteToDoItem = (id) => {
        const newData = data.filter( (data) => data.id !== id );
        setData(newData);
        localStorage.setItem("tododata", JSON.stringify(newData));
      }

      const completeToDoItem = (id) => {
        const newData = data.map((x) => (x.id === id ? {...x, completed: !x.completed}: x));
        setData( newData );
        localStorage.setItem("tododata", JSON.stringify(newData));
      }

  return (
    <div className="ToDoBox">
        <h1>To Do List 2025</h1>
            <ToDoAdd action={ addToDoItem }></ToDoAdd>
            { console.log(data) }
            {
                data.map( (x) => (
                x.editMode ? 
                (<ToDoEdit key={x.id} info={x} completeItem={completeToDoItem} editItem={editToDoData} />) : 
                (<ToDoItem key={x.id} info={x}  completeItem={completeToDoItem} editItem={editToDoItem} 
                    deleteItem={deleteToDoItem} ></ToDoItem>)          
                )) 
            }
    </div>
  )
}

export default ToDoLs;