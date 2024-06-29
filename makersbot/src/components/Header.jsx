import React from 'react'
import './header-styles.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
        height: '4rem',
        padding: '0 20%',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '#D3D3D3 2px solid',
        justifyContent: 'space-between'
    }}>
        <Link to='/' style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit'
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
            </Link>

        <nav>
            <ul style={{listStyleType: 'none', display: 'flex'}}>
                <Link to={'/'} 
                        style={{textDecoration: 'none',
                                color: 'inherit'}}> 
                        <li className='list-item-nav-bar'>Home</li> 
                </Link>

                <Link to={'/chatbot'} 
                    style={{textDecoration: 'none',
                            color: 'inherit'}}> 
                    <li className='list-item-nav-bar'>Chatbot</li> 
                </Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header