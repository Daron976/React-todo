import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEdit] = useState(false);

  const editItem = () => {
    setEdit(true);
  };

  const editedItem = (e) => {
    if (e.key === 'Enter') {
      setEdit(false);
    }
  };

  const view = {};
  const edit = {};

  if (editing) {
    view.display = 'none';
  } else {
    edit.display = 'none';
  }

  const completedItem = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const {
    todo, toggleBoolean, deleteTodo, update,
  } = props;

  return (
    <li key={todo.id} className={styles.item}>
      <div onDoubleClick={editItem} style={view}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => toggleBoolean(todo.id)}
        />
        <button type="button" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
        <span style={todo.completed ? completedItem : null}>
          {todo.title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={edit}
        onChange={(e) => {
          update(e.target.value, todo.id);
        }}
        onKeyDown={editedItem}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  toggleBoolean: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};

export default TodoItem;
