import types from '../actions/actionTypes'

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_TASK:
      return [
        ...state,
        {
          task_id: state.length+1,
          assignee: action.assignee,
          task_title: action.task_title,
          deadline: action.deadline,
          task_description: action.task_description,
          completed: false,
        },
      ]
      case types.EDIT_TASK:
      return state.map(task =>
        task.task_id === action.task_id ? {
          ...task,
          task_id: action.task_id,
          task_description: action.task_description,
          task_title: action.task_title,
          deadline: action.deadline,
          assignee: action.assignee,
        } :
        task
      )
    case types.REMOVE_TASK:
      return state.filter(task => task.task_id !== action.task_id)
    case types.COMPLETE_TASK:
      return state.map(task =>
        task.task_id === action.task_id ? {
          ...task,
          completed: !task.completed,
        } :
        task
      )
    case types.TOGGLE_COMPLETED_ALL:
      const alreadyCompleted = state.every(({
        completed
      }) => completed)
      return state.map(task => ({
        ...task,
        completed: !alreadyCompleted
      }))
    case types.REMOVE_COMPLETED:
      return state.filter(task => task.completed === false)
    default:
      return state
  }
}