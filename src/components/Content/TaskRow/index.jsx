import React, { Component } from "react"
import { NotificationContainer, NotificationManager } from "react-notifications"
import "react-notifications/lib/notifications.css"
import "./task-row.css"

class TaskRow extends Component {
  constructor(props) {
    super(props)

    const { task } = this.props

    this.state = {
      active: false,
      editing: false,
      id: task.task_id,
      assignee: task.assignee,
      title: task.task_title,
      deadline: task.deadline,
      description: task.task_description
    }
  }

  addActiveClass = () =>
    this.setState(prevState => ({ active: !prevState.active }))

  handleEditing = () => this.setState({ editing: true })

  handleEditingDone = event => {
    if (event.keyCode === 13) {
      this.setState({ editing: false })
      this.handleDataSubmit()
    }
  }

  changeInput = type => event => {
    const { value } = event.target
    this.setState({
      [type]: value
    })
  }

  handleDataSubmit = () => {
    const { id, title, description, assignee, deadline } = this.state
    this.props.handleEditTask(id, title, description, assignee, deadline)

    NotificationManager.success("Data updated", "Done")
  }

  render() {
    const { task, handleRemoveTask, handleCompleteTask } = this.props
    const { active, assignee, title, deadline, description } = this.state

    let viewStyle = {}
    let editStyle = {}

    if (this.state.editing) {
      viewStyle.display = "none"
    } else {
      editStyle.display = "none"
    }

    return (
      <div className="task-row-container">
        <div className="task-row-item">
          <div className="task-row-checkbox">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleCompleteTask(task.task_id)}
            />
            <span className="chechmark"></span>
          </div>

          <div style={{ width: "100%" }}>
            <div
              className={active ? "accordion" : "accordion active"}
              style={task.completed ? styles.completed : styles.notCompleted}
            >
              <div className="task-row-container-items">
                <div>
                  <span style={viewStyle} onDoubleClick={this.handleEditing}>
                    [{task.assignee}]
                  </span>
                  <input
                    type="text"
                    onChange={this.changeInput("assignee")}
                    onKeyDown={this.handleEditingDone}
                    value={assignee}
                    style={editStyle}
                  />
                </div>
                <div>
                  <span style={viewStyle} onDoubleClick={this.handleEditing}>
                    Task title: {task.task_title}
                  </span>
                  <input
                    type="text"
                    onChange={this.changeInput("title")}
                    onKeyDown={this.handleEditingDone}
                    value={title}
                    style={editStyle}
                  />
                </div>

                <div>
                  <span style={viewStyle} onDoubleClick={this.handleEditing}>
                    Deadline: {task.deadline}
                  </span>
                  <input
                    type="date"
                    onKeyDown={this.handleEditingDone}
                    onChange={this.changeInput("deadline")}
                    value={deadline}
                    valuedefault={deadline}
                    style={editStyle}
                  />
                </div>
              </div>
            </div>
            <div
              className={active ? "panel panelNotActive" : "panel panelActive"}
            >
              <textarea
                className="description"
                value={description}
                onChange={this.changeInput("description")}
              ></textarea>
              <button
                onClick={this.handleDataSubmit}
                className="task-row-description-save__button"
              >
                Save description
              </button>
            </div>
          </div>
          {active ? (
            <button
              onClick={this.addActiveClass}
              className="accordion up-down-arrow"
            >
              &uarr;
            </button>
          ) : (
            <button
              onClick={this.addActiveClass}
              className="accordion up-down-arrow"
            >
              &darr;
            </button>
          )}
        </div>
        <button
          onClick={handleRemoveTask(task.task_id)}
          className="task-row-remove-button"
        >
          &#x0078;
        </button>
        <NotificationContainer />
      </div>
    )
  }
}

const styles = {
  completed: {
    color: "gray",
    textDecoration: "line-through",
    backgroundColor: "rgba(242,60,80,0.4)"
  },
  notCompleted: {
    backgroundColor: "rgba(54,177,191,0.4)"
  }
}

export default TaskRow
