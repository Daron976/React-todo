import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos, toggleBoolean, deleteTodo } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleBoolean={toggleBoolean}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.number.isRequired, PropTypes.string.isRequired],
  )).isRequired,
  toggleBoolean: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodosList;
