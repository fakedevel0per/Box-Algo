import { useState } from 'react';
import './App.css';
import Figure from './components/Figure';
import Input from './components/Input';

function App() {
  const [input, setInput] = useState({Rows: '', Columns: ''});
  const [color, setColor] = useState('#ff0000');
  return (
    <div className="App" >
      <h2>Enter Rows and Columns to Print</h2>
      <Input setColor={setColor} setInput={setInput} input={input} color={color}/>
      <Figure input={input} color={color}/>
    </div>
  );
}

export default App;
