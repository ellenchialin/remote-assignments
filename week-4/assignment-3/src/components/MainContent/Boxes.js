import styles from './Boxes.module.css'

const Boxes = () => {
  return (
    <section>
      <div className={styles.boxes}>
        <div className={styles.box}>Content Box 1</div>
        <div className={styles.box}>Content Box 2</div>
        <div className={styles.box}>Content Box 3</div>
        <div className={styles.box}>Content Box 4</div>
      </div>
    </section>
  )
}

export default Boxes
