import React, { Component } from 'react'


import './task-text-field.css'

class TaskTextField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      assignee: '',
      title: '',
      deadline: '',
      description: '',
      value: '',
      active: true,
    }

    this.handleChangeAssignee = this.handleChangeAssignee.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeDeadline = this.handleChangeDeadline.bind(this)
    this.handleChangeDescription = this.handleChangeDescription.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addActiveClass = this.addActiveClass.bind(this)
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value })
  }

  handleChangeAssignee(event) {
    this.setState({ assignee: event.target.value })
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value })
  }

  handleChangeDeadline(event) {
    this.setState({ deadline: event.target.value })
  }

  handleSubmit() {
    this.props.onSubmit(
      this.state.title,
      this.state.description,
      this.state.assignee,
      this.state.deadline)
    this.setState({ assignee: '', title: '', description: '', deadline: '', })
  }

  addActiveClass() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <div className="task-text-field-container">
        <div className="flex-container">
          <p className="flex-item">Assignee:</p>
          <input
            type="text"
            value={this.state.assignee}
            placeholder="Input your task assignee here"
            onChange={this.handleChangeAssignee}
            className="raw-item"
          />
        </div>

        <div className="flex-container">
          <p className="flex-item">Task title:</p>
          <input
            type="text"
            placeholder="Input your task title here"
            value={this.state.title}
            onChange={this.handleChangeTitle}
            className="raw-item"
          />
        </div>

        <div className="flex-container">
          <p className="flex-item">Deadline:</p>
          <input 
            type="date"
            value={this.state.deadline}
            onChange={this.handleChangeDeadline}
            className="raw-item"
          />
        </div>

        <div className="flex-container">
          <p className="flex-item">Task description:</p>
          <textarea
            cols="30"
            rows="5"
            value={this.state.description}
            placeholder="Input your task description here"
            onChange={this.handleChangeDescription}
            className="raw-item"
          >
          </textarea>
        </div>

        <div className="button-submit-container">
          <button
            onClick={this.handleSubmit}
            className="button-submit"
          >Add task</button>
        </div>
      </div>
    )
  }
}

export default TaskTextField