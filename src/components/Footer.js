import React from 'react'

import sytles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
      <footer className={sytles.footer}>
        <h3>Escreva sobre o que você deseja!</h3>
        <p>MiniBlog &copy; 2022</p>
      </footer>
    </div>
  )
}

export default Footer