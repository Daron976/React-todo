/* eslint-disable */ 
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const  InputTodo = (props) => {
  const [title, setTitle] = useState('')

  const textInput = (e) => {
    setTitle(e.target.value)
  }

  const submission = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodo(title);
      setTitle('');
    } else {
      alert("Please write item")
    }
  }
  return (
    <form onSubmit={submission} className="form-container">
      <input
        type="text"
        id="title"
        className="input-text"
        name="title"
        placeholder="Add todo..."
        value={title}
        onChange={textInput}

      />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
}

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default InputTodo;
