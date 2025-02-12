import React from 'react'

function App() {
  let a=20;
  let mystyle={
    backgroundColor:'cyan',
    color:'blue',
    border:'10px solid black',
    height:'100px'
  }
  return (
    <div style={{color:'red'}}>
      <h2>ABES Engineering College</h2>
      <div style={mystyle}>{a}</div>
    </div>
  )
}

export default App