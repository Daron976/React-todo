import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo, toggleBoolean, deleteTodo } = props;
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleBoolean(todo.id)}
      />
      {' '}
      {todo.title}
      {' '}
      <button type="button" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  toggleBoolean: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
