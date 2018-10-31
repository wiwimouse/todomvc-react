import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from 'constants/TodoFilters'

const getTodos = state => state.todos
const getTodoFilter = state => state.todoFilter

export const visibleTodos = createSelector([getTodos, getTodoFilter], (todos, todoFilter) => {
  switch (todoFilter) {
    case SHOW_ALL:
      return todos
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    default:
      throw new Error('Unknown filter: ' + todoFilter)
  }
})

export const completedTodoCount = createSelector(getTodos, todos => {
  return todos.reduce((count, todo) => {
    return todo.completed ? count + 1 : count
  }, 0)
})
