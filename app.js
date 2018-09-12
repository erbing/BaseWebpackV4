import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

const APP = () => (
    <div className="app">
        <h3>Hello, World</h3>
    </div>
)

ReactDom.render((
    <BrowserRouter>
        <APP />
    </BrowserRouter>
), document.getElementById('root'))
