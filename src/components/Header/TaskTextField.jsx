import React, { Component } from "react"
import "./task-text-field.css"

class TaskTextField extends Component {
  state = {
    assignee: "",
    title: "",
    deadline: "",
    description: ""
  }

  changeInput = type => event => {
    const { value } = event.target
    this.setState({
      [type]: value
    })
  }

  handleSubmit = () => {
    this.props.onSubmit(
      this.state.title,
      this.state.description,
      this.state.assignee,
      this.state.deadline
    )
    this.setState({ assignee: "", title: "", description: "", deadline: "" })
  }

  render() {
    const { assignee, title, deadline, description } = this.state

    return (
      <div className="task-text-field-container">
        <div className="flex-container">
          <p className="flex-item">Assignee:</p>
          <input
            type="text"
            value={assignee}
            placeholder="Input your task assignee here"
            onChange={this.changeInput("assignee")}
            className="raw-item"
          />
        </div>

        <div className="flex-container">
          <p className="flex-item">Task title:</p>
          <input
            type="text"
            placeholder="Input your task title here"
            value={title}
            onChange={this.changeInput("title")}
            className="raw-item"
          />
        </div>

        <div className="flex-container">
          <p className="flex-item">Deadline:</p>
          <input
            type="date"
            value={deadline}
            onChange={this.changeInput("deadline")}
            className="raw-item"
          />
        </div>

        <div className="flex-container">
          <p className="flex-item">Task description:</p>
          <textarea
            cols="30"
            rows="5"
            value={description}
            placeholder="Input your task description here"
            onChange={this.changeInput("description")}
            className="raw-item"
          ></textarea>
        </div>

        <div className="button-submit-container">
          <button onClick={this.handleSubmit} className="button-submit">
            Add task
          </button>
        </div>
      </div>
    )
  }
}

export default TaskTextField
