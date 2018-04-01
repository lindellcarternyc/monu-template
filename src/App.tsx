import * as React from 'react'

import { Button } from './components/button/Button'
import { ActionButton } from './components/button/ActionButton'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button text="Hello World" />
        <ActionButton text="Hello Again" />
      </div>
    )
  }
}

export default App
