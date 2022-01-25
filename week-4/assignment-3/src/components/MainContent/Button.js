import styles from './Button.module.css'

const Button = ({ handleClick, isShowMore }) => {
  return (
    <button className={styles.btn} onClick={handleClick}>
      {isShowMore ? 'Hide' : 'See More'}
    </button>
  )
}

export default Button
