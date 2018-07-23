import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'
import { updateColor, updateChildColor } from './updateColor.js'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  render() {
    return (
      <div onClick={updateColor.bind(this)} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} handleChildClick={updateChildColor.bind(this)} />
        <Tier2 color={this.state.childColor} handleChildClick={updateChildColor.bind(this)} />
      </div>
    )
  }
}
