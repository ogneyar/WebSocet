import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import canvasState from '../store/canvasState'
import '../styles/canvas.scss'


const Canvas = observer(() => {
    useEffect(() => {
        canvasState.setCanvas()
    }, [])

    return (
        <div className="canvas">
            <canvas width={600} height={400} />
        </div>
    )
})

export default Canvas
