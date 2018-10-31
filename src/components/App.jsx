import React from 'react'
import { injectGlobal } from 'styled-components'
import AppFooter from 'components/AppFooter'
import Todo from 'components/Todo'

const GlobalStyle = injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
  }
`

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Todo />
        <AppFooter />
      </div>
    )
  }
}
