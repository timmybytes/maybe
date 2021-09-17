import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 
  
  
  
const App = () => {
  const [yesno, setYesno] = useState({})
  const [renew, setRenew] = useState(false)
  
  useEffect(() => {
    fetch('https://yesno.wtf/api')
      .then(response => response.json())
      .then(json => setYesno(json));
  }, [renew])
  
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1>{yesno.answer}</h1>
      <img style={{width: '100%', height: 'auto', maxWidth: '90vw'}} src={yesno.image} alt='yesno' />
      <button onClick={() => setRenew(!renew)}>Ask again</button>
    </div>
  )    
}

ReactDOM.render(<App />, document.getElementById('root'));
