import React from 'react'
import "./PhoneMock.css"

function PhoneMockUp() {
  return (
     <div className="phone-mockup">
      <div className="screen-wrapper">
        <iframe
          className="phone-screen"
          src="/invite/index.html" // bu yerga ichki sahifangiz yoki link qo'yasiz
          title="Invitation Page"
          allow="autoplay; fullscreen"
          sandbox="allow-same-origin allow-scripts allow-forms"
        />
      </div>
    </div>
  )
}

export default PhoneMockUp