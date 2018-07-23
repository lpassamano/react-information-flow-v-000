import { getRandomColor, getReducedColor } from './randomColorGenerator.js'

export function updateColor(event) {
  event.stopPropagation();
  const newColor = getRandomColor();
  this.setState({
    color: newColor,
    childColor: getReducedColor(newColor)
  });
}

export function updateChildColor(event) {
  event.stopPropagation();
  this.setState({
    childColor: getRandomColor()
  })
}
