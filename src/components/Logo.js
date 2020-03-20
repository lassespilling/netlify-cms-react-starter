import React from 'react'

import './Logo.scss'

export default ({ inverted, size, color }) => (
  <>
    <svg
      className="Logo"
      style={{
        fill: `${color}`,
        height: `${size}`,
        width: `${size}`,
      }}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30.63 30.6"
    >
      <defs></defs>
      <path
        class="cls-1"
        d="M19.2,27.5c-1.5-7.6-9.4-7-13.6-11.8-1.7-1.9-2.4-4.5-3.1-7.1A15.35,15.35,0,0,0,8.8,29.4a15.18,15.18,0,0,0,7.3,1.8,24.52,24.52,0,0,0,2.7-.2A6.8,6.8,0,0,0,19.2,27.5Z"
        transform="translate(-0.68 -0.6)"
      />
      <path
        class="cls-1"
        d="M16,.6A15.58,15.58,0,0,0,3.4,7c.5,2.5,1.7,4.3,4.8,5.8a24.87,24.87,0,0,0,7.1,1.9c5.5.9,10.8,2.1,14.4,6.7a1.76,1.76,0,0,0,.4.5A15.44,15.44,0,0,0,21.9,1.7,17.13,17.13,0,0,0,16,.6Z"
        transform="translate(-0.68 -0.6)"
      />
    </svg>
  </>
)
