import { NavLink } from "react-router-dom"

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
   
      <nav className={styles.navbar}>
        <NavLink className={styles.brand} to='/'>
          <h2>Mini<span>Blog</span></h2>
          </NavLink>
          <ul className={styles.links_list}>
            <li>
              <NavLink className={({isActive}) => (isActive ? styles.active : "")} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => (isActive ? styles.active : "")} to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => (isActive ? styles.active : "")} to='/register'>Cadastro</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => (isActive ? styles.active : "")} to='/about'>Sobre</NavLink>
            </li>
          </ul>
        

      </nav>

  )
}

export default Navbar