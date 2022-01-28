import { useState } from 'react'
import { FaReact, FaRegTimesCircle } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

import styles from './Navbar.module.css'

const Navbar = () => {
  const [isShow, setIsShow] = useState(false)

  const handleShow = () => setIsShow(!isShow)

  const navItem = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Works' },
    { id: 4, name: 'Contact' },
  ]

  const navClasses = `${styles.nav} ${isShow ? styles.show : ''}`

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <FaReact />
        </div>

        <nav className={navClasses}>
          <ul className={styles.navList}>
            {navItem.map((item) => (
              <li key={item.id}>
                <a href='/' className={styles.navLink}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.hamburger} onClick={handleShow}>
          {isShow ? <FaRegTimesCircle /> : <GiHamburgerMenu />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
