import React from 'react';
import styles from './ChatBot.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWindowClose,
  faSync,
  faRobot,
  faPaperPlane,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';

const ChatBot = () => {
  const [activeChat, setActiveChat] = useState(true);

  const handleClick = e => {
    e.preventDefault();
    setActiveChat(!activeChat);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.chatBot}>
          {activeChat && (
            <div className={styles.chatWindow}>
              <div className={styles.chatHeadline}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faSync}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faWindowClose}
                  onClick={handleClick}
                ></FontAwesomeIcon>
              </div>
              <div className={clsx(styles.chatBody)}>
                <div className='row p-3'>
                  <div className='col-2'>
                    <FontAwesomeIcon icon={faRobot}></FontAwesomeIcon>
                  </div>
                  <div className={clsx('col-10 p-2 my-2', styles.message)}>
                    <p className='m-0'>W czym mogę pomóc?</p>
                  </div>
                  <div className={clsx('col-12 py-2 my-2', styles.topic)}>
                    <p className='m-0'>Wybierz temat</p>
                  </div>
                </div>
              </div>
              <div className={styles.chatMessageArea}>
                <Form className={clsx('row')}>
                  <Form.Group
                    controlId='exampleForm.ControlTextarea1'
                    className='col-10 py-1'
                  >
                    <Form.Control
                      as='textarea'
                      rows={1}
                      placeholder='Write your question'
                    />
                  </Form.Group>
                  <Button type='submit' className='col-1 p-0'>
                    <FontAwesomeIcon
                      className='arrow'
                      icon={faPaperPlane}
                    ></FontAwesomeIcon>
                  </Button>
                </Form>
              </div>
              <div className={styles.chatFooter}>
                <FontAwesomeIcon
                  className={styles.footerIcon}
                  icon={faComments}
                ></FontAwesomeIcon>
              </div>
            </div>
          )}
          <div className={styles.chatButton}>
            <Button
              variant='small'
              className={clsx(styles.button, activeChat && styles.active)}
              onClick={handleClick}
            >
              Potrzebujesz pomocy, napisz!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
