import React, { Component } from 'react'
import PropType from 'prop-types'
import classnames from 'classnames'
import TodoInput from 'components/TodoInput'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropType.object.isRequired,
    editTodo: PropType.func.isRequired,
    deleteTodo: PropType.func.isRequired,
    completeTodo: PropType.func.isRequired
  }

  // state
  state = {
    editing: false
  }

  // methods
  handlerDoubleClick = () => {
    this.setState({ editing: true })
  }
  handlerSave = text => {
    const { id } = this.props.todo

    if (text.length) {
      this.props.editTodo(id, text)
    } else {
      this.props.deleteTodo(id)
    }

    this.setState({ editing: false })
  }

  // render
  render() {
    const { todo, deleteTodo, completeTodo } = this.props
    const { completed, text } = todo
    const { editing } = this.state

    return (
      <li className={classnames({ todo: true, completed: completed, editing: editing })}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={completed} onChange={() => completeTodo(todo.id)} />
          <label onDoubleClick={this.handlerDoubleClick}>{text}</label>
          <button className="destroy" onClick={() => deleteTodo(todo.id)} />
        </div>
        <TodoInput text={todo.text} editing={editing} onSave={this.handlerSave} />
      </li>
    )
  }
}
