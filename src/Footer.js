import React from 'react'

const Footer = ({length}) => {
    
  return (
    <footer>
      <p style={{textAlign:"center"}}>{length} list {length <=1 ? "item" : "items"}</p>
    </footer>
  )
}

export default Footer