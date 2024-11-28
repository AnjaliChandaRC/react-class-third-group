import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const path = useLocation().pathname
  return (
    <div>
      {path === "/about" ? "text 1" : "text 2"}
    </div>
  )
}

export default Footer