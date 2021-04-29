import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
    // this assigns a respective color value to each cell
    // ask how Matrix knows the vals are coming from data.js, I know we assigned
    // the values from pattern1 in index.js
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
    // genMatrix is an instance method which maps this.props.values to an array of JSX
    // every 'row' in this.props.values will create a <div className="row">
  }
  // shows what our Matrix component looks like
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}
// ask about syntax here