import { useState } from 'react'

import styles from './BoxSection.module.css'
import Boxes from './Boxes'
import Button from './Button'

const BoxSection = () => {
  const [isShowMore, setIsShowMore] = useState(false)

  const handleShowMore = () => setIsShowMore(!isShowMore)

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Section Title</h2>
      <Boxes />
      <Button handleClick={handleShowMore} isShowMore={isShowMore} />
      {isShowMore ? <Boxes /> : ''}
    </div>
  )
}

export default BoxSection
