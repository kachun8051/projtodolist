import React, { useState } from 'react'

const ToDoAdd = (props) => {

  const [input, setInput] = useState("");
  
  const setInputData = (e) => {
    e.preventDefault();
    if (input) {
        props.action(input);
        setInput("");
    }
  };

  return (
    <>
        <form onSubmit={setInputData} className="ToDoAdd">
            <input style={{ height: 'fit-content' }} type="text" value={input} onChange={ (e) => setInput(e.target.value) }></input>
            <button type="submit" className="ToDoAddBtn">
                Add
            </button>
        </form>
    </>
  )
}

export default ToDoAdd;