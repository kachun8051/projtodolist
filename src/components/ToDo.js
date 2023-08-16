import React, { useState } from 'react';
import ToDoAdd from "./ToDoAdd";
import ToDoItem from "./ToDoItem";
import ToDoEdit from "./ToDoEdit";
import { v4 } from "uuid";

const ToDo = () => {

    const [ data, setData ] = useState([]);

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
        setData([...data, obj]);
    };

    const editToDoItem = (id) => {    
        setData( 
          data.map((x) => (x.id === id ? {...x, editMode: true}: x))
        );
      }
    
      const editToDoData = (id, val) => {
        setData(
          data.map( (x) => (x.id === id ? {...x, value: val, editMode: false}: x))
        );
      }
    
      const deleteToDoItem = (id) => {
        setData( data.filter( (data) => data.id !== id ) );
      }

    return (
        <div className="ToDoBox">
            <h1>To Do List 2025</h1>
            <ToDoAdd action={ addToDoItem }></ToDoAdd>
            { console.log(data) }
            {
                data.map( (x) => (
                x.editMode ? 
                (<ToDoEdit key={x.id} info={x} editItem={editToDoData} />) : 
                (<ToDoItem key={x.id} info={x} editItem={editToDoItem} 
                    deleteItem={deleteToDoItem} ></ToDoItem>)          
                )) 
            }
    </div>
    );
};

export default ToDo;