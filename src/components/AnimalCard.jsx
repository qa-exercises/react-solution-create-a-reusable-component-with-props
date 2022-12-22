import React from 'react'

export default function AnimalCard({ symbol, name, classification }) {
  return (
    <div className="animal-card">
      <div className="symbol">{symbol}</div>
      <h2>{name}</h2>
      <p>
        <b>Classification:</b> {classification}
      </p>
    </div>
  )
}
