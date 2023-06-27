import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>Chef Aida</code>
        </p>
      </div>

      <div className={styles.center}>
        Sanjays Dall-e 
      </div>

      <div className={styles.grid}>
        <button
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Submit <span>&gt;</span>
          </h2>
          <p>
            Your image request
          </p>
        </button>
      </div>
    </main>
  )
}
