import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledInputText from 'components/InputText'

export default class TodoInput extends Component {
  // props
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    editing: PropTypes.bool
  }

  // state
  constructor(props) {
    super()

    this.state = {
      $el: null,
      text: props.text || '',
      cache: ''
    }
  }

  // methods
  handlerInput = e => {
    this.setState({ text: e.target.value })
  }
  handlerKeyup = e => {
    if (!this.props.newTodo) {
      switch (e.key) {
        case 'Escape':
          this.setState({ text: this.state.cache })
          this.props.onSave(this.state.cache)
          break
        case 'Enter':
          this.props.onSave(this.state.text)
          break
        default:
          break
      }
    }
  }
  handlerBlur = () => {
    if (this.props.editing) {
      this.props.onSave(this.state.text)
    }
  }

  // hook
  componentDidUpdate = props => {
    if (this.props.editing && !props.editing) {
      this.setState({ cache: this.props.text })
      this.$el.focus()
    }
  }

  // render
  render() {
    return (
      <StyledInputText
        edit
        ref={input => (this.$el = input)}
        value={this.state.text}
        onBlur={this.handlerBlur}
        onChange={this.handlerInput}
        onKeyUp={this.handlerKeyup}
      />
      // <input
      //   className="edit"
      //   type="text"
      //   ref={input => (this.$el = input)}
      //   value={this.state.text}
      //   onBlur={this.handlerBlur}
      //   onChange={this.handlerInput}
      //   onKeyUp={this.handlerKeyup}
      // />
    )
  }
}
