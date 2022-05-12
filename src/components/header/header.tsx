import logo from '../../img/logo.svg'
import styles from './header.module.css'
import todoStore from "../../store";
import {useEffect, useContext} from "react";
import { observer } from "mobx-react-lite"
import {TodoContext} from '../../store/context'


// @ts-ignore
export const Header = observer(() => {
  const {secondsPassed, loading, increaseTimer} = useContext(TodoContext)


  console.log(secondsPassed, loading)

  return (
        <header className={`${styles.section_top} ${styles.center}`}>
            <img className={`${styles.logo} ${styles.center}`} src={logo} alt="logo"/>
          <button onClick={() => increaseTimer()}>{secondsPassed}</button>
                <nav className={styles.switch}>
                    <ul className={styles.switch__items}>
                        <li className={styles.switch__item}>
                            <a href="#"
                               className={`${styles.switch__link} ${styles.switch__item_month} ${styles.switch__link_active}`}>Monthly
                            </a></li>
                        <li className={styles.switch__item}>
                            <a href="#"
                               className=
                                   {`${styles.switch__link} ${styles.switch__item_day}`}>Daily</a>
                        </li>
                    </ul>
                </nav>
        </header>
    )
})
