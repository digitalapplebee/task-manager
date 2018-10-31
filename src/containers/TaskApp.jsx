import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as taskActions from '../actions/tasks'

import { MuiThemeProvider } from 'material-ui/styles'

import Header from '../components/Header/Header'
import TaskList from '../components/Content/TaskList'

import './task-app.css'

const TaskApp = ({ tasks, actions }) => (
  // <div className="app-container">
    <MuiThemeProvider>
      <div className="app-container">
        <div
          className="app-content"
        >
          <Header actions={actions} />
          <TaskList
            tasks={tasks}
            actions={actions}
          />
        </div>
      </div>
    </MuiThemeProvider>

  // </div>
)

const mapStateToProps = ({ tasks }) => ({
  tasks,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(taskActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskApp)