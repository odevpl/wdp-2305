import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {
  const history = useHistory();

  const handleLogin = () => {
    // Tutaj można dodać logikę logowania
    // Po zalogowaniu, przekieruj użytkownika na stronę główną
    history.push('/');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <div className={styles.loginHeader}></div>
        <form className={styles.loginForm}>
          <label htmlFor='username'>Email</label>
          <input type='text' id='username' />

          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />

          <div className={styles.passwordRecovery}>
            <p>
              Nie pamiętasz hasła?{' '}
              <a className={styles.forgotPassword} href='#'>
                Przypomnij hasło
              </a>
            </p>
          </div>

          <div className={styles.buttonContainer}>
            <button type='button' onClick={handleLogin}>
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
