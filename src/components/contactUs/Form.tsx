import styles from './contactUs.module.css'
const Form = () => {
  return (
    <form className="mt-[2.32rem] border rounded-2xl py-8 px-7 border-formBorder lg:flex-[1.3] lg:mt-0">
      <div className={styles.divContainer}>
        <div className={`${styles.inputDiv} lg:flex-1`}>
          <label className={`${styles.formLabel}`}>First Name (required)</label>
          <input className={`${styles.formInput}`} type='text' />
        </div>
        <div className={`${styles.inputDiv} lg:flex-1`}>
          <label className={`${styles.formLabel}`}>Last Name (required)</label>
          <input className={`${styles.formInput}`} type='text' />
        </div>
      </div>
      <div className={styles.divContainer}>
        <div className={`${styles.inputDiv} lg:flex-1`}>
          <label className={`${styles.formLabel}`}> Email (required)</label>
          <input className={`${styles.formInput}`} type='text' />
        </div>
        <div className={`${styles.inputDiv} lg:flex-1`}>
          <label className={`${styles.formLabel}`}>Phone Number (required)</label>
          <input className={`${styles.formInput}`} type='text' />
        </div>
      </div>
      <div>
        <div className={`${styles.inputDiv}`}>
          <label className={`${styles.formLabel}`}> Subject (immediate need)</label>
          <input className={`${styles.formInput}`} type='text' />
        </div>
      </div>
      <div className={`${styles.inputDiv}`}>
        <label className={`${styles.formLabel}`}> Your Message</label>
        <textarea className='outline-none border border-formBorder rounded-[0.25rem] w-full h-[11.25rem]  p-2' />
      </div>
      <button className='btn w-full text-textPrimary h-[3.4375rem] lg:max-w-[16.5625rem] lg:mx-auto lg:flexCenter'>Get in Touch</button>
    </form>
  )
}

export default Form
