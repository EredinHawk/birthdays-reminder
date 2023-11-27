import Link from 'next/link';
import styles from './home.module.css'

export default function Page() {
    return (
        <div>

            <header className={styles.header}>
                <div className={styles.container}>
                    <Link href={'/'}>
                        <img src='./logo.png' alt='logo.png' className={styles.logo}></img>
                    </Link>

                    <nav className={styles.links}>
                        <Link href={'/login/autentification'} className={styles.link}>
                            Войти
                        </Link>

                        <Link href={'/login/registration'} className={styles.link}>
                            Регистрация
                        </Link>
                    </nav>
                </div>

                <h1 className={styles.h1}>Birthdays Reminder</h1>
                <hr className={styles.hr}></hr>
                <p className={styles.p}>Удобный инструмент для твоей памяти</p>
            </header>
            
            <main className={styles.main}>
                <div>
                    <p className={styles.p}>Что такое BR?<br/><br/>
                    Это простой сервис, с простой задачей - вовремя напоминать тебе про день рождения контактов.</p>
                </div>
                <p className={styles.p}>Как пользоваться сервисом?</p>
                <div className={styles.instruktion}>
                    <div className={styles.circle}>
                        <a className={styles.numbers}>1</a>
                        <p>Пройди регистрацию</p>
                    </div>
                    <div className={styles.circle}>
                        <a className={styles.numbers}>2</a>
                        <p>Войди в свой профиль</p>
                    </div>
                    <div className={styles.circle}>
                        <a className={styles.numbers}>3</a>
                        <p>Создай контакт</p>
                    </div>
                    <div className={styles.circle}>
                        <a className={styles.numbers}>4</a>
                        <p>Выбери когда напонить</p>
                    </div>
                </div>

            </main>

            <footer>
                <p>Подвал</p>
            </footer>
        </div>
    );
}