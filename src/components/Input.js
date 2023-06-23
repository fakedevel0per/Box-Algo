import React from 'react'

const Input = (props) => {
    const onInput=(e)=>{
        props.setInput({...props.input, [e.target.name]: e.target.value})
    }
    const onColor =(e)=>{
        props.setColor(e.target.value);
    }
  return (
    <div>
      <input placeholder='Rows' onChange={onInput} name='Rows' value={props.input.Rows}/>  X 
      <input style={{marginLeft:'10px'}} placeholder='Columns' onChange={onInput} name='Columns' value={props.input.Columns}/>
      <button style={{marginLeft:'10px'}} >Go</button>
      <div  style={{marginTop: '10px', alignItems: 'center'}} >
        <input type='color'value={props.color} onChange={onColor}></input>
        <button style={{marginLeft: '10px'}}>Color Diagonals</button>
      </div>
    </div>
  )
}

export default Input
