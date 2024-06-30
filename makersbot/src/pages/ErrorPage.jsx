import React from 'react'
import './error-page-styles.css';

function ErrorPage() {
  return (
    <div className='error-page-wrapper'>
        <h1>404 - Not Found</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    </div>
  )
}

export default ErrorPage