import React, { Component } from 'react'
import TaskTextField from './TaskTextField'

class Header extends Component {
  render() {
    const { addTask } = this.props.actions

    return (
      <TaskTextField onSubmit={(task_title, task_description, assignee, deadline) => addTask(task_title, task_description, assignee, deadline)} />
    )
  }
}

export default Header