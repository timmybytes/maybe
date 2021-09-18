import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 
  
const App = () => {
  const [yesno, setYesno] = useState({})
  const [renew, setRenew] = useState(false)
  
  useEffect(() => {
    fetch('https://yesno.wtf/api')
      .then(
        response => response.json())
      .then(
        json => setYesno(json));
  }, [renew])
  
  
  return (
    <div 
      style={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}
    >
      <h1 
        style={{
          fontSize: '2.5rem'
        }}>{yesno.answer}</h1>
      <img 
        style={{
          width: '100%', 
          height: 'auto', 
          maxWidth: '90vw',
          borderRadius: '4px'
          }} 
        src={yesno.image} 
        alt='yesno' 
      />
      <button 
        onClick={
          () => setRenew(!renew)
        }
        style={{
          outline: 'none',
          border: 'none',
          borderRadius: '4px',
          padding: '.5rem 1rem',
          fontSize: '1rem',
          margin: '1rem',
          boxShadow: 
            '2px 2px 10px rgba(0,0,0,0.3)'
        }}
      >
        Ask again
      </button>
    </div>
  )    
}

ReactDOM.render(<App />, document.getElementById('root'));
