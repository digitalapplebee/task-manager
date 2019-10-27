import React, { Component } from "react"
import TaskRow from "./TaskRow"
import Footer from "../Footer/Footer"
import "./task-list.css"

class TaskList extends Component {
  state = {
    currentFilter: "all"
  }

  handleCompleteTask(task_id) {
    return () => this.props.actions.completeTask(task_id)
  }

  handleRemoveTask(task_id) {
    return () => this.props.actions.removeTask(task_id)
  }

  handleFilter(filter) {
    this.setState({
      currentFilter: filter
    })
  }

  handleRemoveCompleted() {
    this.props.actions.removeCompleted()
  }

  handleCompleteAll() {
    this.props.actions.completeAll()
  }

  handleEditTask(task_id, task_title, task_description, assignee, deadline) {
    this.props.actions.editTask(
      task_id,
      task_title,
      task_description,
      assignee,
      deadline
    )
  }

  render() {
    const { tasks } = this.props
    const { currentFilter } = this.state

    const filteredTasks = tasks.filter(({ completed }) => {
      switch (currentFilter) {
        case "completed":
          return completed
        case "active":
          return !completed
        default:
          return true
      }
    })

    return (
      <div>
        <div className="task-list-container">
          {filteredTasks.map(task => (
            <TaskRow
              key={task.task_id}
              task={task}
              handleEditTask={this.handleEditTask.bind(this)}
              handleCompleteTask={this.handleCompleteTask.bind(this)}
              handleRemoveTask={this.handleRemoveTask.bind(this)}
            />
          ))}
        </div>
        <Footer
          tasks={tasks}
          handleFilter={this.handleFilter.bind(this)}
          currentFilter={currentFilter}
          handleRemoveCompleted={this.handleRemoveCompleted.bind(this)}
          handleCompleteAll={this.handleCompleteAll.bind(this)}
        />
      </div>
    )
  }
}

export default TaskList
