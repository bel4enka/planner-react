import logo from '../../img/logo.svg'
import styles from './header.module.css'
import { useContext} from "react";
import { observer } from "mobx-react-lite"
import {TodoContext} from '../../store/context'


export const Header = observer(() => {
  const toDo = useContext(TodoContext)
  const classNameActiveMonth = () => {
    if(toDo.showTask === 'month') {
     return `styles.switch__link_active`
    } return
  }

  const classNameActiveDay = () => {
    return toDo.showTask === 'day'?`styles.switch__link_active`:null
  }

  return (
        <header className={`${styles.section_top} ${styles.center}`}>
            <img className={`${styles.logo} ${styles.center}`} src={logo} alt="logo"/>
          {/*<button onClick={() => toDo.increaseTimer()}>{toDo.secondsPassed}</button>*/}
                <nav className={styles.switch}>
                    <ul className={styles.switch__items}>
                        <li onClick={() => toDo.showTasks('month')} className={styles.switch__item}>
                            <a href="#"
                               className={`${styles.switch__link}  ${toDo.showTask === 'month'?styles.switch__link_active:null}`}>Monthly
                            </a></li>
                        <li onClick={() => toDo.showTasks('day')} className={`${styles.switch__item}`}>
                            <a href="#"
                               className=
                                   {`${styles.switch__link} ${toDo.showTask === 'day'?styles.switch__link_active:null}`}>Daily</a>
                        </li>
                    </ul>
                </nav>
        </header>
    )
})
