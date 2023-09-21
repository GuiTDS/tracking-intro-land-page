import styles from './MainPage.module.css';
import logo from '../assets/images/logo.svg';
import hamburguerLogo from '../assets/images/icon-hamburger.svg';
import closeIcon from '../assets/images/icon-close.svg';
import { useState } from 'react';
import classNames from 'classnames';
import ilustration from '../assets/images/illustration-devices.svg';
const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const icon = isOpen ? closeIcon : hamburguerLogo;



    return (
        <>
            <div className={styles.container__navigation}>
                <img src={ilustration} alt='Background illustration' id={styles.ilustration} />
                <nav className={styles.navigation}>
                    <img src={logo} alt='Logo' className={styles.navigation__logo} />

                    <div>
                        <img src={icon} alt='hamburguer icon' className={styles.navigation__icon} onClick={() => setIsOpen(!isOpen)} />
                        <ul className={classNames({
                            [styles.navigation__list]: true,
                            [styles[`navigation__list-active`]]: isOpen,
                        })}>
                            <li>PRODUCT</li>
                            <li>FEATURES</li>
                            <li>PRINCING</li>
                            <hr></hr>
                            <li>LOGIN</li>
                        </ul>
                    </div>
                </nav>
            </div>

            <section className={styles.info}>
               <p><span>NEW</span> MONOGRAPH DASHBOARD</p>
               <h1>POWERFUL INSIGHTS INTO YOUR TEAM</h1>
               <p className={styles.info__style}>Project planning and time tracking for agile teams</p>
               <div className={styles.info__button}>
                <button>
                    SCHEDULE A DEMO
                </button>
                <p>TO SEE A PREVIEW</p>
               </div>
            </section>

        </>
    );
}

export default MainPage;