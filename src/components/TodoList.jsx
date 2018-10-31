import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from 'store/actions'
import { visibleTodos } from 'store/selectors'
import TodoItem from 'components/TodoItem'

const TodoList = ({ filterdTodos, actions }) => {
  return (
    <ul className="todo-list">
      {filterdTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} {...actions} />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  filterdTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(
  state => ({
    filterdTodos: visibleTodos(state)
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)(TodoList)
