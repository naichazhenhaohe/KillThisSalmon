import React from 'react'

export default function Header(props) {
  return (
    <div className="logo main-container">
      <img src={`/images/logo/battle-${props.mode}.png`} alt="turf war logo" />
    </div>
  )
}
