import {
  Link
} from 'react-router-dom'
import styles from './header.module.css'


const Header = () => {
  return (
    
    <header className={styles.header}>
      
      <nav role="navigation" className="bg-green-500" >
        <div className={styles.menuToggle}>

          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul className={styles.menu}>
            <li>
              <Link to="/">
                <img src="logo.png" alt="Logo" />
              </Link>
            </li> 
            <li>
            <li><button type="button" className="">Valider</button></li>
            <Link to="/"class="">Inscription ou Connexion</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>

        <ul className={styles.menu2} inline-block shadow-lg>
          <li ><button className="text-blue-800 dark:text-white text-xl font-medium mb-2">Connexion</button>
          </li>
          <li><button type="button" className="">Valider</button></li>

          <li class="">Inscription</li>
          <li class="">Menu</li>
        </ul>
      </nav >
      
    </header>
  )
}

export default Header
