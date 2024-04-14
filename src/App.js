import { useState } from 'react';
import './app.css'
import Switch from './components/Switch';

function App() {
  const [status,setStatus]= useState(false)
  
  return (
    <div className="App">
      {
        status? <h1>Learn React</h1>:null
      }
      
         <button className='show'
            onClick={()=>setStatus(true)}>
              Show</button>
         <button className='hide'
            onClick={()=>setStatus(false)}>
              Hide</button>

         <button className='toggle'
            onClick={()=>setStatus(!status)}>
              Toggle</button>

          <Switch  />
    </div>
  );
}

export default App;
