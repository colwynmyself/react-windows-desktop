import React from 'react'
import PropTypes from 'prop-types'

import { Window, TitleBar } from 'react-desktop/windows'
import { DragSource } from 'react-dnd'

const windowSpec = {
    beginDrag(props) {
        return {
            id: props.id,
            top: props.top,
            left: props.left,
        }
    },
}

function windowCollect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

class DraggableWindowComponent extends React.Component {
    render() {
        const { isDragging, connectDragSource, top, left } = this.props

        return connectDragSource(<div style={{ marginTop: `${top}px`, marginLeft: `${left}px` }} id={this.props.id}>
            <Window
                chrome
                color={this.props.color}
                theme={this.props.theme}
                padding="12px"
                width="500"
                height="300"
            >
                <TitleBar title="Draggable Window" controls />
                <p>Content</p>
            </Window>
        </div>)
    }
}

DraggableWindowComponent.defaultProps = {
    color: '#cc7f29',
    theme: 'light',
    top: 0,
    left: 0,
}

DraggableWindowComponent.propTypes = {
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    color: PropTypes.string,
    theme: PropTypes.string,
    top: PropTypes.number,
    left: PropTypes.number,
}

export const DraggableWindow = DragSource('window', windowSpec, windowCollect)(DraggableWindowComponent)
