import React from 'react'

import sytles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
      <footer className={sytles.footer}>
        <p>Escreva sobre o que você deseja!</p>
        <p>MiniBlog &copy; 2022</p>
      </footer>
    </div>
  )
}

export default Footer