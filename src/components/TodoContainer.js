/* eslint no-param-reassign: ["error", { "props": false }] */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer = () => {
  const initialTodo = () => {
    const availableTodos = JSON.parse(localStorage.getItem('todos'));
    return availableTodos || [];
  };

  const [todos, setTodos] = useState([initialTodo]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleBoolean = (id) => {
    setTodos((
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    ));
  };

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodo = (title) => {
    const newItem = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newItem]);
  };

  const update = (newTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      }),
    );
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodo={addTodo} />
        <TodosList
          todos={todos}
          toggleBoolean={toggleBoolean}
          deleteTodo={deleteTodo}
          update={update}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
