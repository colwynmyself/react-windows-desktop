import 'normalize-css'

import React from 'react'
import { render } from 'react-dom'

import { DraggableInterface } from './pages/DraggableInterface.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            color: '#cc7f29',
            theme: 'light',
        }
    }

    render() {
        return (<div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <h1>Draggable Window Test</h1>
            <DraggableInterface />
        </div>)
    }
}

render(<App />, document.getElementById('app'))
