import React from 'react';
import './home-page-styles.css';

function HomePage() {
  return (
    <div style={{
        //height: '90vh',
        display: 'flex',
        justifyContent: 'center'
    }}
    >
        <section style={{
            width: '60%',
            padding: '40px'
        }}>
            
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '2rem'}}>
                <img src="./makers-logo.png" style={{height: '10rem'}} alt="" />
                <h1 style={{
                    fontSize: '3rem',
                    paddingLeft: '2rem'
                }}>Makers Chatbot</h1>
            </div>

                <div className="section">
                    <h2>Key Features and Functionality</h2>
                    <div className="highlight">
                        <p><strong>Real-Time Inventory Updates:</strong> Our ChatBot provides instant updates on product availability, including detailed insights into current stock levels and specific product attributes.</p>
                    </div>
                    <div className="highlight">
                        <p><strong>Personalized Customer Engagement:</strong> Utilizing advanced AI, our ChatBot engages customers in natural conversations. It responds to inquiries about product details, prices, and availability, ensuring a tailored shopping experience.</p>
                    </div>
                    <div className="highlight">
                        <p><strong>Enhanced Customer Service:</strong> The ChatBot reduces response times and enhances customer satisfaction by providing immediate assistance and resolving queries effectively.</p>
                    </div>
                </div>

                <div className="section">
                    <h2>Why Choose Our ChatBot?</h2>
                    <ul className="list">
                        <li>Technical Superiority: Built on robust AI algorithms for reliable performance and scalability.</li>
                        <li>Business Impact: Increases sales conversions and enhances customer retention through personalized recommendations.</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Exposition Highlights</h2>
                    <p>In our recent exposition, we showcased how our ChatBot exceeds industry standards for ecommerce automation in a concise 1-minute 30-second presentation.</p>
                </div>

                <div className="section">
                    <h2>Value Proposition</h2>
                    <p>Acquiring our ChatBot will revolutionize Makers Tech's ecommerce strategy:</p>
                    <ul className="list">
                        <li>Boosts operational efficiency.</li>
                        <li>Elevates customer engagement.</li>
                        <li>Increases revenue through enhanced sales capabilities.</li>
                    </ul>
                </div>

            
        </section>
    </div>
  )
}

export default HomePage