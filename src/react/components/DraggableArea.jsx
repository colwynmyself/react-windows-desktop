import React from 'react'
import PropTypes from 'prop-types'

import { DropTarget } from 'react-dnd'
import { DraggableWindow } from '../components/DraggableWindow.jsx'

const draggableAreaSpec = {
    drop(props, monitor, component) {
        const item = monitor.getItem()
        const delta = monitor.getDifferenceFromInitialOffset()
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)

        component.moveWindow(item.id, left, top)
    },
}

function draggableAreaCollect(connect) {
    return {
        connectDropTarget: connect.dropTarget(),
    }
}

class DraggableAreaComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            windows: [{
                id: 'a',
                top: 0,
                left: 0,
            }, {
                id: 'b',
                top: 10,
                left: 200,
            }, {
                id: 'c',
                top: 100,
                left: 300,
            }],
        }
    }

    moveWindow(id, left, top) {
        this.setState(lastState => Object.assign({}, lastState, {
            windows: lastState.windows.map(w => {
                if (w.id !== id) return w
                return Object.assign({}, w, {
                    top,
                    left,
                })
            }),
        }))
    }

    render() {
        const { connectDropTarget } = this.props

        return connectDropTarget(<div style={{ width: '100%', height: '100%', position: 'fixed' }}>
            {this.state.windows.map(window => <DraggableWindow key={window.id} id={window.id} top={window.top} left={window.left} />)}
        </div>)
    }
}

DraggableAreaComponent.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
}

export const DraggableArea = DropTarget('window', draggableAreaSpec, draggableAreaCollect)(DraggableAreaComponent)
