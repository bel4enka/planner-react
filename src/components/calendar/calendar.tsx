import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './calendar.module.css'
import todoStore from "../../store";

export const MyCalendar = () =>  {
  // const [value, onChange] = useState(new Date());
  return (
    <section className={`${styles.section_calendar} ${styles.center}`}>
      <Calendar
        tileClassName={`${styles.title}`}
        className={`${styles.calendar}`}
        onChange={todoStore.onChangeCurrentDateCalendar}
        value={todoStore.currentDateCalendar}
        selectRange={false}
      />
    </section>

  )
}
