import logo from '../../img/logo.svg'
import styles from './header.module.css'
import { useContext} from "react";
import { observer } from "mobx-react-lite"
import {TodoContext} from '../../store/context'


export const Header = observer(() => {
  const toDo = useContext(TodoContext)

  return (
        <header className={`${styles.section_top} ${styles.center}`}>
            <img className={`${styles.logo} ${styles.center}`} src={logo} alt="logo"/>
          <button onClick={() => toDo.increaseTimer()}>{toDo.secondsPassed}</button>
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
