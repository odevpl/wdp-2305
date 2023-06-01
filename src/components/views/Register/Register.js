import styles from './Register.module.scss';
import React from 'react';

const Register = () => (
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
        <form className={styles.form}>
          <input
            type='text'
            name='name'
            placeholder='Imię *'
            minLength='3'
            maxLength='30'
          ></input>

          <input
            required
            type='text'
            placeholder='Nazwisko *'
            name='surname'
            minLength='3'
            maxLength='30'
          ></input>

          <input required type='email' placeholder='E-mail *' name='email'></input>

          <input required placeholder='Hasło *' name='password' minLength='3'></input>

          <input
            required
            placeholder='Powtórz Hasło *'
            minLength='3'
            name='repeatPassword'
          ></input>

          <div className={styles.toggleSwitch}>
            <label className={styles.switch}>
              <input type='checkbox' />
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
              <label> Akceptuje warunki regulaminu*</label>
            </div>
            <div className={styles.singleInput}>
              <input type='checkbox' />
              <label> Tak, tak! Chcę otrzymywać JEŻowy newsletter</label>
            </div>
          </div>
          <div className={styles.navigation}>
            <a href='/'>{'<'} Wróć</a>
            <a href='/'>
              <button type='submit' className={styles.button}>
                Zarejestruj się
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Register;
