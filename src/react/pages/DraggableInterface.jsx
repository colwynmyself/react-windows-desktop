import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import { DraggableArea } from '../components/DraggableArea.jsx'

function DraggableInterfaceComponent() {
    return (<div style={{ width: '100%', height: '100%', position: 'fixed', border: '1px solid #eee' }}>
        <DraggableArea />
    </div>)
}

export const DraggableInterface = DragDropContext(HTML5Backend)(DraggableInterfaceComponent)
