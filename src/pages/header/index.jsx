import { Minus, Plus } from '@phosphor-icons/react'
import React from 'react'
import './style.css'

export function Header() {
  return (
    <div className="tray-container">
      <strong>
        expo<span>CLI</span>
      </strong>

      <div className="tray-actions">
        <button type="button">
          <Minus size={12} />
        </button>
        <button type="button">
          <Plus size={12} />
        </button>
      </div>
    </div>
  )
}
