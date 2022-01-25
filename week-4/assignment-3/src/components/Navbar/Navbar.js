import { useState } from 'react'
import { FaReact, FaRegTimesCircle } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

import styles from './Navbar.module.css'

const Navbar = () => {
  const [isShow, setIsShow] = useState(false)

  const handleShow = () => setIsShow(!isShow)

  const navClasses = `${styles.nav} ${isShow ? styles.show : ''}`

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <FaReact className={styles.icon} />
        </div>

        <nav className={navClasses}>
          <ul className={styles['nav-list']}>
            <li className={styles['nav-item']}>
              <a href='/' className={styles['nav-link']}>
                Home
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a href='/' className={styles['nav-link']}>
                About
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a href='/' className={styles['nav-link']}>
                Works
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a href='/' className={styles['nav-link']}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.hamburger} onClick={handleShow}>
          {isShow ? (
            <FaRegTimesCircle className={styles.icon} />
          ) : (
            <GiHamburgerMenu className={styles.icon} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
