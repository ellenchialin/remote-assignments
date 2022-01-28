import styles from './Boxes.module.css'

const Boxes = () => {
  const boxContent = [
    { id: 1, body: 'Content Box 1' },
    { id: 2, body: 'Content Box 2' },
    { id: 3, body: 'Content Box 3' },
    { id: 4, body: 'Content Box 4' },
  ]

  return (
    <section>
      <div className={styles.boxes}>
        {boxContent.map((box) => (
          <div key={box.id} className={styles.box}>
            {box.body}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Boxes
