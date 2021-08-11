import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>get up, stand up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Standup Picker Thing
        </h1>

        <p className={styles.description}>
          Stuff
        </p>
      </main>

      <footer className={styles.footer}>
        the footer
      </footer>
    </div>
  )
}
