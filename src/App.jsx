import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('#48fea9');

  const handleColorChange = (e) => {
    setColor(e.target.value); 
  };
  return (
    <>
      <div>
        <h1>Color Picker</h1>
        <div 
          style={{
            backgroundColor: color,  
            width: '300px',           
            height: '300px',          
            marginTop: '20px',        
            border: '2px solid lightgray', 
            borderRadius: '40px',     
            display: 'flex',          
            flexDirection: 'column',  
            alignItems: 'center',     
            justifyContent: 'center'  
          }}
        >
          <h2>Selected Color</h2>
  
          <h3>{color}</h3>
        </div>
  
        <h2>Select a color</h2>
        <input 
          type="color" 
          value={color} 
          onChange={handleColorChange} 
          style={{ width: '70px', height: '40px', borderRadius: '5px', border: '2px solid lightgray'}} 
        />
      </div>
    </>
  )
  
  
  
}

export default App
