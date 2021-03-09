import Tool from './Tool'

export default class Brush extends Tool {
    constructor(canvas) {
        super(canvas)
        this.listen()
    }
    
    listen() {
        // прослушивание событий мыши
        this.canvas.onmousedown = this.mouseDownHandler
        this.canvas.onmouseup = this.mouseUpHandler
        this.canvas.onmousemove = this.mouseMoveHandler
        // прослушивание событий тачскрина
        this.canvas.addEventListener("touchstart", this.mouseDownHandler)
        this.canvas.addEventListener("touchend", this.mouseUpHandler)
        this.canvas.addEventListener("touchmove", this.mouseMoveHandler)
    }

    mouseDownHandler = e => {
        console.log("onMouseDown or  touchStart")
        this.mouseDown = true
        this.ctx.beginPath()
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }

    mouseUpHandler = () => {
        console.log("onMouseUp or touchEnd")
        this.mouseDown = false
    }

    mouseMoveHandler = e => {
        console.log("onMouseMove or touchMove")
        if (this.mouseDown) {
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
    }

    draw(x, y) {
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
    }

}