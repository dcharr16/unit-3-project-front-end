import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Welcome, {user ? user.name : "to Mikey's list"}</h1>
    </main>
  )
}

export default Landing
