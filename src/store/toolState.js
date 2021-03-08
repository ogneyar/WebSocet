import { makeAutoObservable } from "mobx";

class ToolState {
    tool = null
    defaultWidth = 5
    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool) {
        this.tool = tool        
        this.tool.lineWidth = document.getElementById("line-width").value
    }

    setFillColor(color) {
        this.tool.fillColor = color       
    }

    setStrokeColor(color) {
        this.tool.strokeColor = color
    }

    setLineWidth(width) {
        this.tool.lineWidth = width
    }

}

export default new ToolState()