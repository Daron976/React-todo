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
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deply to live server',
          completed: false,
        },
      ],
    };
  }

  toggleBoolean = (id) => {
    // const { todos } = this.state;
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

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <InputTodo addTodo={this.addTodo} />
        <TodosList
          todos={todos}
          toggleBoolean={this.toggleBoolean}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
