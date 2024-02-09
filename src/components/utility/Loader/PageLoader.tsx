import styles from './FlowerSpinner.module.css'

const PageLoader = () => {
  return (
    <main className={styles.container}>
      <div className={styles.flower}>
      </div>
      <div className='mt-28 font-sans text-2xl'>
        <h3>Page Loading.....  Please Wait</h3>
      </div>
      
    </main>
  )
}

export default PageLoader
