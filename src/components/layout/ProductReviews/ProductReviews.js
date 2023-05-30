import React, { useState } from 'react';
import styles from './ProductReviews.module.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductReviews = () => {
  const [reviewsCount, setReviewsCount] = useState(0);
  const [menuTab, setMenuTab] = useState('reviews');
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    formReview: '',
    rating: 0,
  });
  const [hover, setHover] = useState(0);
  const [reviews, setReviews] = useState([]);
  const { userName, email, formReview, rating } = formData;
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles['reviews-container']}>
          <div className={styles.menu}>
            <ul onClick={e => setMenuTab(e.target.getAttribute('name'))}>
              <li
                name='description'
                className={menuTab === 'description' ? styles.active : ''}
              >
                description
              </li>
              <li name='reviews' className={menuTab === 'reviews' ? styles.active : ''}>
                reviews({reviewsCount})
              </li>
              <li
                name='specification'
                className={menuTab === 'specification' ? styles.active : ''}
              >
                specification
              </li>
              <li
                name='custom tab'
                className={menuTab === 'custom tab' ? styles.active : ''}
              >
                custom tab
              </li>
            </ul>
          </div>
          {menuTab === 'description' && (
            <div className={clsx(styles.description, styles.tab)}>description</div>
          )}
          {menuTab === 'reviews' && (
            <div className={clsx(styles.reviews, styles.tab)}>
              {reviews.length != 0 ? (
                reviews.map(review => <div key={review.id}>review</div>)
              ) : (
                <p className='text-muted small'>
                  There are no reviews of this product.
                </p>
              )}
              <p>Add a review</p>
              <Form action='' className={styles['review-form']}>
                <p className='text-muted small'>Your Rating</p>
                <div className={styles.rating}>
                  <div>
                    <p className='text-muted small my-auto'>Bad</p>
                  </div>
                  <div className={styles['stars']}>
                    {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <button
                          type='button'
                          key={index}
                          className={
                            index <= (hover || rating) ? styles['on'] : styles['off']
                          }
                          onClick={() =>
                            setFormData(prev => ({
                              ...prev,
                              rating: index,
                            }))
                          }
                          onMouseEnter={() => setHover(index)}
                          onMouseLeave={() => setHover(rating)}
                        >
                          <span className={styles['star']}>
                            <FontAwesomeIcon className={styles.icon} icon={faStar} />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <div>
                    <p className='text-muted small my-auto'>Good</p>
                  </div>
                </div>
                <Form.Group className='mb-3' controlId='formReview'>
                  <Form.Label className='text-muted small'>Your Review</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={3}
                    value={formReview}
                    onChange={e => {
                      setFormData(prev => ({
                        ...prev,
                        shortDescription: e.target.value,
                      }));
                    }}
                  />
                </Form.Group>
                <div className={styles['email-segment'] + ' row'}>
                  <div className='col-5'>
                    <Form.Group className='mb-3' controlId='formName'>
                      <Form.Control
                        type='text'
                        placeholder='Name*'
                        value={userName}
                        onChange={e => {
                          setFormData(prev => ({
                            ...prev,
                            title: e.target.value,
                          }));
                        }}
                      />
                    </Form.Group>
                  </div>
                  <div className='col-5'>
                    <Form.Group className='mb-3 ' controlId='formEmail'>
                      <Form.Control
                        type='email'
                        placeholder='Email*'
                        value={email}
                        onChange={e => {
                          setFormData(prev => ({
                            ...prev,
                            author: e.target.value,
                          }));
                        }}
                      />
                    </Form.Group>
                  </div>
                  <div className='col-2 px-1'>
                    <Button
                      className={styles['form-button']}
                      variant='primary'
                      type='submit'
                    >
                      continue
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          )}
          {menuTab === 'specification' && (
            <div className={clsx(styles.specification, styles.tab)}>specification</div>
          )}
          {menuTab === 'custom tab' && (
            <div className={clsx(styles.custom, styles.tab)}>custom</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
