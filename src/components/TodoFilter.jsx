import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from 'constants/TodoFilters'
import { clearCompleted, setVisibilityFilter } from 'store/actions'
import { completedTodoCount } from 'store/selectors'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const Link = ({ children, active, setFilter }) => {
  return (
    <a className={classnames({ selected: active })} style={{ cursor: 'pointer' }} onClick={setFilter}>
      {children}
    </a>
  )
}
const ConnectedLink = connect(
  (state, { filter }) => ({
    active: filter === state.todoFilter
  }),
  (dispatch, { filter }) => ({
    setFilter: () => dispatch(setVisibilityFilter(filter))
  })
)(Link)
const TodoFilter = ({ clearCompleted, activeCount, completedCount }) => {
  let itemWord = activeCount === 1 ? 'item' : 'items'

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> {itemWord} left
      </span>
      <ul className="filters">
        {Object.entries(FILTER_TITLES).map(([filter, title]) => (
          <li key={filter}>
            <ConnectedLink filter={filter}>{title}</ConnectedLink>
          </li>
        ))}
      </ul>
      {!!completedCount && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  )
}

export default connect(
  state => {
    let completedCount = completedTodoCount(state)
    let activeCount = state.todos.length - completedCount

    return {
      activeCount,
      completedCount
    }
  },
  { clearCompleted }
)(TodoFilter)
