import React, { useState, useEffect } from 'react'

const Sidebar = ({isEnglish}) => {
  const [message, setMessage] = useState('Customize this site')

  useEffect(() => {

    if (isEnglish === false){
      setMessage('Tilpass dette nettstedet')
    } else {
      setMessage('Customize this site')
    }
  
  });
  return (
    <div className="sidebar">
    <h1>This is a portfolio website in the making</h1>

    <h3>Come back latter to enjoy the full experience</h3>
    <h2>{message}</h2>
    </div>
  )
}

export default Sidebar