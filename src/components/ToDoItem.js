import React from "react";

const ToDoItem = (props) => {

  return (
    <div className="ToDoItem">   
      <p onClick={ () => props.completeItem(props.info.id)} 
        className={ `${props.info.completed ? "completed": ""}` } >
        {props.info.seq + '. ' + props.info.value}
      </p> 
      <div>
        <button className='ToDoItemBtn' onClick={() => props.editItem(props.info.id)}>Edit</button>
        <button className='ToDoItemBtn' onClick={() => props.deleteItem(props.info.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ToDoItem;

