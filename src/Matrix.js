import React, { Component } from 'react';
import Cell from "./Cell"
export default class Matrix extends Component {
  static defaultProps = {
      values: Array(10).fill(Array(10).fill("#F00"))
  }
  genRow = (vals) => (
    vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}
