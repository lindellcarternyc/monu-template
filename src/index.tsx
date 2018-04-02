import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import './assets/fontawesome-all.css'

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
