import React from 'react';
import styles from './Feedback.module.scss';

const Feedback = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={`col-auto ${styles.heading}`}>
              <h3>Client Feedback</h3>
            </div>
            <div className={`col-auto ${styles.dots}`}>
              <ul>
                <li>
                  <a className={styles.active} href='#slide1'>
                    <span className={styles.dot}></span>
                  </a>
                </li>
                <li>
                  <a href='#slide2'>
                    <span className={styles.dot}></span>
                  </a>
                </li>
                <li>
                  <a href='#slide3'>
                    <span className={styles.dot}></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.quote}>
            <span className={styles.icon}>&rdquo;</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel feugiat
              elit, ut convallis velit. Fusce commodo libero sed ultrices pharetra.
            </p>
          </div>
          <div className={styles.author}>
            <img
              src='https://images.pexels.com/photos/3536424/pexels-photo-3536424.jpeg?auto=compress&cs=tinysrgb&w=800'
              alt='Avatar'
              width='50'
              height='50'
            />
            <div className={styles.details}>
              <span className={styles.name}>John Doe</span>
              <span className={styles.position}>CEO, Company Name</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
