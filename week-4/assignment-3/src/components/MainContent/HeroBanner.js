import { useState } from 'react'
import styles from './HeroBanner.module.css'

const HeroBanner = () => {
  const [textIsChanged, setTextIsChanged] = useState(false)

  const handleTextChange = () => {
    setTextIsChanged(!textIsChanged)
  }

  return (
    <div className={styles.heroMessage} onClick={handleTextChange}>
      <h1>{textIsChanged ? 'Have a good time 😎' : 'Hi There!'}</h1>
    </div>
  )
}

export default HeroBanner
