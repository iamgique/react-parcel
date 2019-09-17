import React from 'react'
import { Alert, Badge } from 'reactstrap';
import '../styles/style.scss'
import logo from '../../assets/images/react.png'

const App = () => (
  <div className="App">
    <Alert color="primary">
      This is a demo react with <a href="https://parceljs.org/" className="alert-link">parceljs</a>.
      Using module bundler to prove whether is it faster and easier than create-react-app or webpack?
        <Badge color="secondary">Import reactstrap (bootstrap)</Badge>
    </Alert>
    <div className="nav-style">
      Import by own style
    </div>
    <img src={logo} alt="React ICON" />
  </div>
)

export default App
