import Tool from './Tool'

export default class Eraser extends Tool {
    radius = 10

    constructor(canvas) {
        super(canvas)
        this.listen()
    }

    listen() {
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)        
    }

    mouseUpHandler(e) {
        this.mouseDown = false
    }

    mouseDownHandler(e) {
        this.mouseDown = true
        this.ctx.beginPath()
        this.saved = this.canvas.toDataURL()
        this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)        
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            this.saved = this.canvas.toDataURL()
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
    }

    draw(x, y) {
        const img = new Image()
        img.src = this.saved
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()            
            // this.ctx.arc(x, y, this.radius, 0, Math.PI*2, true)
            this.ctx.rect(x, y, 15, 15)
            this.ctx.fillStyle = "#fff"
            this.ctx.fill()
        }
    }

}