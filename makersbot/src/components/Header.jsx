import React from 'react'
import './header-styles.css';

function Header() {
  return (
    <header style={{
        height: '4rem',
        padding: '0 8rem',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '#D3D3D3 2px solid',
        justifyContent: 'space-between'
    }}>
        <div style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <img 
                src="./makers-logo.png" 
                alt="Makers logo"
                style={{height: '40px'}} 
            />
            <h2
                style={{
                    marginLeft: '1rem'
                }}
            >Makers Chatbot</h2>
        </div>

        <nav>
            <ul style={{listStyleType: 'none', display: 'flex'}}>
                <li className='list-item-nav-bar'>Inicio</li>
                <li className='list-item-nav-bar'>ChatBot</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header