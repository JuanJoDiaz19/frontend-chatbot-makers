import React from 'react'
import './footer-styles.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-column">
                <h3>Makers Tech</h3>
                <p>&copy; 2024 Makers Tech. Todos los derechos reservados.</p>
                <ul className="social-media">
                    <li><a href="#" target="_blank">Facebook</a></li>
                    <li><a href="#" target="_blank">Twitter</a></li>
                    <li><a href="#" target="_blank">LinkedIn</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Desarrollado por</h3>
                <ul>
                    <li>Juan Jose Diaz</li>
                    <li>Camila Amaya</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer