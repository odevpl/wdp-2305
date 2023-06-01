import styles from './Register.module.scss';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Register = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [input, setInput] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [error, setError] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  let history = useHistory();
  const handleClick = e => {
    if (
      input.name.length === 0 ||
      (input.name.length < 3 && input.surname.length === 0) ||
      (input.surname.length < 3 &&
        input.email.length === 0 &&
        input.password.length === 0) ||
      (input.password.length < 3 && input.repeatPassword.length === 0) ||
      input.repeatPassword.length < 3
    ) {
      e.stopPropagation();
    } else if (
      input.name.length !== 0 &&
      input.surname.length !== 0 &&
      input.email.length !== 0 &&
      input.password.length !== 0 &&
      input.repeatPassword.length !== 0
    ) {
      history.push('/');
    }
  };

  const showPassword = () => {
    setPasswordShow(!passwordShow);
  };

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: '' };

      switch (name) {
        case 'name':
          if (!value) {
            stateObj[name] = 'Please enter name.';
          }
          break;

        case 'surname':
          if (!value) {
            stateObj[name] = 'Please enter a surname.';
          }
          break;

        case 'email':
          if (!value) {
            stateObj[name] = 'Please enter a email.';
          }
          break;

        case 'password':
          if (!value) {
            stateObj[name] = 'Please enter a password.';
          } else if (input.repeatPassword && value !== input.repeatPassword) {
            stateObj['repeatPassword'] = 'Password and Repeat password does not match.';
          } else {
            stateObj['repeatPassword'] = input.repeatPassword
              ? ''
              : error.repeatPassword;
          }
          break;

        case 'repeatPassword':
          if (!value) {
            stateObj[name] = 'Please Repeat password.';
          } else if (input.password && value !== input.password) {
            stateObj[name] = 'Password and Repeat password does not match.';
          }
          break;

        default:
          break;
      }
      return stateObj;
    });
  };

  return (
    <section>
      <div className={styles.register}>
        <div className={styles.formulage}>
          <div className={styles.checkAccount}>
            <input type='radio' name='haveAccount' />
            <span>Mam konto</span>
            <input type='radio' name='haveAccount' />
            <span>Nie mam konta</span>
          </div>
          <label>Podaj dane do rejestracji</label>
          <form className={styles.form} onInvalid={validateInput}>
            <input
              onBlur={validateInput}
              required
              type='text'
              value={input.name}
              onChange={onInputChange}
              name='name'
              placeholder='Imię *'
              minLength='3'
              maxLength='30'
            ></input>
            {error.name && <span className={styles.error}>{error.name}</span>}

            <input
              required
              type='text'
              placeholder='Nazwisko *'
              name='surname'
              value={input.surname}
              onChange={onInputChange}
              onBlur={validateInput}
              minLength='3'
              maxLength='30'
            ></input>
            {error.surname && <span className={styles.error}>{error.surname}</span>}

            <input
              required
              type='email'
              placeholder='E-mail *'
              name='email'
              value={input.email}
              onChange={onInputChange}
              onBlur={validateInput}
            ></input>
            {error.email && <span className={styles.error}>{error.email}</span>}

            <input
              required
              type={passwordShow ? 'text' : 'password'}
              placeholder='Hasło *'
              name='password'
              value={input.password}
              onChange={onInputChange}
              onBlur={validateInput}
              minLength='3'
            ></input>
            {error.password && <span className={styles.error}>{error.password}</span>}

            <input
              required
              type={passwordShow ? 'text' : 'password'}
              placeholder='Powtórz Hasło *'
              minLength='3'
              name='repeatPassword'
              value={input.repeatPassword}
              onChange={onInputChange}
              onBlur={validateInput}
            ></input>
            {error.repeatPassword && (
              <span className={styles.error}>{error.repeatPassword}</span>
            )}

            <div className={styles.toggleSwitch}>
              <label className={styles.switch}>
                <input type='checkbox' onClick={showPassword} />
                <span className={styles.slider}>
                  <p className={styles.sliderText}>Pokaż hasło</p>
                </span>
              </label>
            </div>
            <div className={styles.checkBoxInput}>
              <div className={styles.singleInput}>
                <input type='checkbox' />
                <label className={styles.choseAll}> Zaznacz wszystkie</label>
              </div>
              <div className={styles.singleInput}>
                <input type='checkbox' />
                <label>
                  {' '}
                  Akceptuje warunki
                  <a href='#' className={styles.regulations}>
                    {' '}
                    regulaminu
                  </a>
                  *
                </label>
              </div>
              <div className={styles.singleInput}>
                <input type='checkbox' />
                <label> Tak, tak! Chcę otrzymywać JEŻowy newsletter</label>
              </div>
            </div>
            <div className={styles.navigation}>
              <a href='/'>{'<'} Wróć</a>
              <a href='/'>
                <button type='submit' className={styles.button} onClick={handleClick}>
                  Zarejestruj się
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
