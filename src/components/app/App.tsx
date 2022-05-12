import React, {createContext, useContext} from 'react';
import {Header} from "../header/header";
import styles from './app.module.css'
import { MyCalendar} from "../calendar/calendar";
import {TaskList} from "../task-list/task-list";
import {Footer} from "../footer/footer";
import todoStore from '../../store'
import {TodoContext} from '../../store/context'

const App = () => {

  return (
    <div className={styles.page}>
        <Header/>
        <MyCalendar/>
        <TaskList/>
        <Footer/>
    </div>
  );
}

export default App;
