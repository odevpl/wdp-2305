import React from 'react';
import styles from './BlogBox.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons';
const BlogBox = () => {
  return (
    <div className='col-4'>
      <div className={styles.topOfContainer}>
        <div className={styles.dateBox}>
          <div className={'col-6 ' + styles.date}>
            <FontAwesomeIcon icon={faCalendarDay} />
            <p>15 JAN 2016</p>
          </div>
          <div className={'col-6 ' + styles.comments}>
            <FontAwesomeIcon icon={faComment} />
            <p>4 comments</p>
          </div>
        </div>
      </div>
      <div className={styles.bottomOfContainer}>
        <div className={styles.description}>
          <h6>Products that fight static</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu iaculis
            nisl. Sed ac mattis nibh, et venenatis justo. Suspendisse pretium lacinia
            neque a gravida. Donec eu nisl quis lacus porta porta. Vivamus sollicitudin
            leo vitae eros facilisis varius. Mauris rutrum leo sapien. Cras non lectus
            at elit volutpat maximus laoreet in ex. Vestibulum a enim fermentum, aliquet
            nisl vel, elementum lacus.
          </p>
        </div>
        <Button className={styles.button} variant='outline'>
          Read More
        </Button>
      </div>
    </div>
  );
};

export default BlogBox;
