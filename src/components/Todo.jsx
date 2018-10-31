import React from 'react'
import { connect } from 'react-redux'
import { completeAllTodos } from 'store/actions'
import TodoHeader from './TodoHeader'
import TodoFilter from './TodoFilter'
import TodoList from 'components/TodoList'

const Todo = ({ completeAllTodos }) => {
  return (
    <section className="todoapp">
      <TodoHeader />
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" onChange={completeAllTodos} />
        <label htmlFor="toggle-all" />
        <TodoList />
      </section>
      <TodoFilter />
    </section>
  )
}

export default connect(
  null,
  { completeAllTodos }
)(Todo)
