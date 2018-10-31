import types from './actionTypes'

export const addTask = (task_title, task_description, assignee, deadline) => ({
  type: types.ADD_TASK,
  task_title,
  task_description,
  assignee,
  deadline,
})

export const editTask = (task_id,task_title,task_description, assignee, deadline) => ({
  type: types.EDIT_TASK,
  task_id,
  task_title,
  task_description,
  assignee,
  deadline,
})

export const removeTask = (task_id) => ({
  type: types.REMOVE_TASK,
  task_id,
})

export const completeTask = (task_id) => ({
  type: types.COMPLETE_TASK,
  task_id,
})

export const completeAll = () => ({
  type: types.TOGGLE_COMPLETED_ALL,
})

export const removeCompleted = () => ({
  type: types.REMOVE_COMPLETED,
})