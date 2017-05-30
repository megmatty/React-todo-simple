import React, { Component } from 'react';
import styles from './App.css'

class Form extends Component {

  constructor() {
    super();
    this.state = {
      item: '',
      list: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({
      item: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      item: this.state.item,
      list: this.state.list.concat(this.state.item)
    });
    this.setState({
      item: ''
    });
  }

  handleDelete(id) {
    console.log(id);
    this.setState({
      list: this.state.list.slice(0, id).concat(this.state.list.slice(id+1))
    });
  }

  render() {
    return (
      <div className='container'>
        <input
          placeholder='Add item'
          type='text'
          value={this.state.item}
          onChange={this.handleChange}
        />
        <button 
          type='submit'
          onClick={this.handleSubmit}
        >Add</button>
        <ul>
         {this.state.list.map((item, index) => (
            <li
              id={index}
              key={index}
              onClick={this.handleDelete.bind(this, index)}
            >{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h2>React ToDo List</h2>
        <Form />
      </div>
    );
  }
}

export default App;
