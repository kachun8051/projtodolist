import React, { useState } from 'react';

const ToDoEdit = (props) => {

  const [ input, setInput ] = useState(props.info.value);

  const setInputData = (e) => {
    e.preventDefault();
    props.editItem(props.info.id, input);
  };

  return (
    <form onSubmit={setInputData} className="ToDoEdit">
      <input style={{ backgroundColor: 'white' }} type="text" 
        value={input} onChange={ (e) => setInput(e.target.value)} />
      <button type="submit" className=""> Update </button>
    </form>
  );
}

export default ToDoEdit;