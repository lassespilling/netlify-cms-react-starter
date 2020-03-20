import React from 'react'

const Icon = ({ i, size, pos, top, left, right, bottom }) => {
  return (
    <div
      style={{
        fontSize: size + 'rem',
        position: `${pos}`,
        top: `${top}`,
        left: `${left}`,
        right: `${right}`,
        bottom: `${bottom}`,
      }}
    >
      {i}
    </div>
  )
}

export default Icon
