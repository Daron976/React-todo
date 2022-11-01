/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

class TodoContainer extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const availableTodos = JSON.parse(localStorage.getItem('todos'));
    if (availableTodos) {
      this.setState({
        todos: availableTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState !== todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  toggleBoolean = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.filter((todo) => todo.id !== id),
      ],
    });
  }

  addTodo = (title) => {
    const { todos } = this.state;
    const newItem = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [
        ...todos,
        newItem,
      ],
    });
  }

  update = (newTitle, id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      }),
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodo={this.addTodo} />
          <TodosList
            todos={todos}
            toggleBoolean={this.toggleBoolean}
            deleteTodo={this.deleteTodo}
            update={this.update}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
