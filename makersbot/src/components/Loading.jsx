import React from 'react';
import './loading-styles.css'; // Assuming you will style the loader using a CSS file

const Loading = () => {
    return (
        <div className="loading-container">
            <img src="./makers-logo-black.png" className='loading-image' alt="" />
        </div>
    );
};

export default Loading;
