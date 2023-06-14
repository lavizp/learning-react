import React from 'react'
import "./proj.css"
function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <p className="footer-text">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer