import React from 'react'
import './Figure.css'
const Figure = (props) => {
  let isPattern = true;
  if (props.input.Columns === '0' || props.input.Columns === '' || props.input.Rows === '0' || props.input.Rows === '') {
    isPattern = false;
  }
  const createBox = (row, col, color) => {
    let table='';
    for (let i = 0; i < row; i++) {
      table += '<tr>';
      for (let j = 0; j < col; j++) {
        table += '<td></td>';
      }
      table += '</tr>';
    }
    return table;
  }

  return (
    <div>
      you got {props.input.Rows} X {props.input.Columns} figure with {props.color} Diagonals
      <table dangerouslySetInnerHTML={{__html: createBox(props.input.Rows, props.input.Columns, props.Color)}}></table>
      {/* <table><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table> */}
    </div>
  )
}

export default Figure
