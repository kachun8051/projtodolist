import React from "react";

const ToDoItem = (props) => {

  return (
    <div className="ToDoItem">      
      <p>{props.info.seq + '. ' + props.info.value}</p>
      <div>
        <button onClick={() => props.editItem(props.info.id)}>Edit</button>
        <button onClick={() => props.deleteItem(props.info.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ToDoItem;

