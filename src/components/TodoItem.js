import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  editItem = () => {
    this.setState({
      editing: true,
    });
  };

  editedItem = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        editing: false,
      });
    }
  }

  render() {
    const { editing } = this.state;

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
    } = this.props;
    return (
      <li key={todo.id} className={styles.item}>
        <div onDoubleClick={this.editItem} style={view}>
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
          onKeyDown={this.editedItem}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  toggleBoolean: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};

export default TodoItem;
