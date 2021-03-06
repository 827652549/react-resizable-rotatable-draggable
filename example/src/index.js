import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import ResizableRect from 'react-resizable-rotatable-draggable'

class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      width: 100,
      height: 100,
      x: 100,
      y: 100,
      rotateAngle: 0
    }
  }

  handleResize = ({ x, y, width, height }, isShiftKey, type) => {
    this.setState({
      x: x,
      y: y,
      width: Math.round(width),
      height: Math.round(height)
    })
  }

  handleRotate = (rotateAngle) => {
    this.setState({ rotateAngle })
  }

  handleDrag = (deltaX, deltaY) => {
    this.setState({
      x: this.state.x + deltaX,
      y: this.state.y + deltaY
    })
  }

  handleRotateEnd = () => console.log('RotateEnd')

  handleRotateStart = () => console.log('RotateStart')

  render () {
    const { x, y, width, height, rotateAngle } = this.state
    return <ResizableRect {...{
      x,
      y,
      width,
      height,
      rotateAngle,
      // aspectRatio: false,
      minWidth: -Infinity,
      minHeight: -Infinity,
      zoomable: 'n, w, s, e, nw, ne, se, sw',
      // rotatable: true,
      onRotateStart: this.handleRotateStart,
      onRotate: this.handleRotate,
      onRotateEnd: this.handleRotateEnd,
      // onResizeStart: this.handleResizeStart,
      onResize: this.handleResize,
      // onResizeEnd: this.handleUp,
      // onDragStart: this.handleDragStart,
      onDrag: this.handleDrag
      // onDragEnd: this.handleDragEnd,
    }} />
  }
}

const initExample = (rootElement = document.getElementById('root')) => ReactDOM.render(
  <App />,
  rootElement
)

export { initExample }
