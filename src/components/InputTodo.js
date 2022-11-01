/* eslint-disable */ 
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
  }

  textInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submission = (e) => {
    e.preventDefault();
    const { title } = this.state;
    if (title.trim()) {
      this.props.addTodo(title);
      this.setState({
        title: '',
      });
    } else {
      alert("Please write item")
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.submission}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Add todo..."
          value={title}
          onChange={this.textInput}

        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default InputTodo;
