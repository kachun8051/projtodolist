import React, { useState } from 'react';

const ToDoEdit = (props) => {

  const [ input, setInput ] = useState(props.info.value);

  const setInputData = (e) => {
    e.preventDefault();
    props.editItem(props.info.id, input);
  };

  const handleOnFocus = (e) => {
    e.target.select();
  };

  return (
    <form onSubmit={setInputData} className="ToDoEdit">
      <input style={{ backgroundColor: 'white' }} type="text" 
        value={input} 
        onChange={ (e) => setInput(e.target.value)}
        onFocus={ handleOnFocus }
        autoFocus = {true}
      />
      <button type="submit" className="ToDoItemBtn"> Update </button>
    </form>
  );
}

export default ToDoEdit;