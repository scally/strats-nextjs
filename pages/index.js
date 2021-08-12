import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import getDayOfYear from 'date-fns/getDayOfYear'

const fetchToday = async url => {
  const res = await fetch(url)
  return res.json()
}

export const getServerSideProps = async () => ({
  props: {
    dayOfYear: getDayOfYear(new Date())
  }
})

export default function Home({dayOfYear}) {
  const { data, error } = useSWR('/api/today', fetchToday)

  return (
    <div className={styles.container}>
      <Head>
        <title>🗓Interop Standup🗓</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Interop Standup
        </h1>

        <p className={styles.description}>
          Standup brought to you by: 
        </p>
        {
          (!!error || !data) ? <div>Loading</div> : 
          (
            <div>
              <h3>🎉 {data.today}🎉</h3>
              <p>or alternatively: </p>
              <h4>🎉 {data.alternative}🎉</h4>
            </div>
          )
        }
      </main>

      <footer className={styles.footer}>
        Today is day {dayOfYear}
      </footer>
    </div>
  )
}
