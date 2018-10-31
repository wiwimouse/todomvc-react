import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTodo } from 'store/actions'
import StyledInputText from 'components/InputText'

const Header = class TodoHeader extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    text: ''
  }

  handlerChange = e => {
    this.setState({ text: e.target.value })
  }

  handlerKeyup = e => {
    if (e.key === 'Enter') {
      this.props.onSubmit(this.state.text)
      this.setState({ text: '' })
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <StyledInputText
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.text}
          onChange={this.handlerChange}
          onKeyUp={this.handlerKeyup}
        />
        {/* <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.text}
          onChange={this.handlerChange}
          onKeyUp={this.handlerKeyup}
        /> */}
      </header>
    )
  }
}

export default connect(
  null,
  { onSubmit: addTodo }
)(Header)
