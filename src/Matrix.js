import React, { Component } from 'react';
import { pattern2 } from './data';
import Cell from "./Cell"

export default class Matrix extends Component {
  constructor(props){
    super(props)
  }
  
  genRow = (vals) => (
    vals.map(val => {
      return <Cell value={val}/>
    })
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

Matrix.defaultProps = {
  values: pattern2,
}