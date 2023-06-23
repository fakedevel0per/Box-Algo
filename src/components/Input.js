import React, { useState } from 'react'

const Input = (props) => {
  const [tempInput, setTempInput] = useState({ Rows: '', Columns: '' });
  const [tempColor, setTempColor] = useState('#ff0000');

  const onInput = (e) => {
    setTempInput({ ...tempInput, [e.target.name]: e.target.value });
  }
  const onColor = (e) => {
    setTempColor(e.target.value);
  }
  const go = () => {
    props.setInput(tempInput);
  }
  const colorDiagonals = () => {
    props.setColor(tempColor);
  }
  return (
    <div>
      <input placeholder='Rows' onChange={onInput} name='Rows' value={tempInput.Rows} />  X
      <input style={{ marginLeft: '10px' }} placeholder='Columns' onChange={onInput} name='Columns' value={tempInput.Columns} />
      <button style={{ marginLeft: '10px' }} onClick={go}>Go</button>
      <div style={{ marginTop: '10px', alignItems: 'center' }} >
        <input type='color' value={tempColor} onChange={onColor}></input>
        <button style={{ marginLeft: '10px' }} onClick={colorDiagonals}>Color Diagonals</button>
      </div>
    </div>
  )
}

export default Input
