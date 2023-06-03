import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Login.module.scss';
import { useRef } from 'react';
import { useState } from 'react';

const Login = () => {
  const login = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const handleLogin = event => {
    event.preventDefault();

    const enteredLogin = login.current.value;
    const enteredPassword = password.current.value;

    if (enteredLogin === 'admin' && enteredPassword === 'pass') {
      history.push('/');
    } else {
      if (enteredLogin !== 'admin' && enteredPassword !== 'pass') {
        setErrorMessage('Login i hasło niepoprawne');
      } else if (enteredLogin !== 'admin') {
        setErrorMessage('Login niepoprawny');
      } else if (enteredPassword !== 'pass') {
        setErrorMessage('Hasło niepoprawne');
      }
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <div className={styles.loginHeader}></div>
        <form className={styles.loginForm}>
          <label htmlFor='username'>Email</label>
          <input type='text' id='username' ref={login} />

          <label htmlFor='password'>Password</label>
          <input type='password' id='password' ref={password} />

          <div className={styles.passwordRecovery}>
            <p>
              Nie pamiętasz hasła?{' '}
              <a className={styles.forgotPassword} href='#'>
                Przypomnij hasło
              </a>
            </p>
          </div>

          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          <div className={styles.buttonContainer}>
            <button type='submit' onClick={handleLogin}>
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
