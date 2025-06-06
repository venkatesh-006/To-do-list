import React from 'react'
import './Header.css';

const Header = (props) => {
  return (
    <header className="header">
        <h1 className="title">{props.title}</h1></header>
  )
}

export default Header