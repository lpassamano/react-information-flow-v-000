import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'
import { updateColor, updateChildColor } from './updateColor.js'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: props.color,
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      color: nextProps.color,
      childColor: getReducedColor(nextProps.color)
    })
  }

  render() {
    return (
      <div className="tier2" onClick={this.props.handleChildClick} style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={updateChildColor.bind(this)} />
        <Tier3 color={this.state.childColor} handleChildClick={updateChildColor.bind(this)} />
      </div>
    )
  }
}
