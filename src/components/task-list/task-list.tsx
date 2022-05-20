import styles from './task-list.module.css'
import {useEffect, useState} from "react";
import Modal from "../modal/modal";
import {DetailTask} from "../detail-task/detail-task";
import {Button, IconButton} from "@mui/material";
import todoStore from "../../store";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";
import {TDue, TTodo} from "../../type/type";
import {formatDate, formatDateCurrent} from "../utils/utils";
import {TaskItem} from "../task-item/task-item";


export const TaskList = observer(() => {

  useEffect(() => {
    todoStore.getTaskAsync()
  },[todoStore.responseTask])

 const tasksMonthly = () => {
   const currentMonthly = () => new Date().getMonth()
   const data = (created:string) => new Date(created).getMonth()
  return todoStore.todos.filter(item => {
     return data(item.created) === currentMonthly()
    })
 }
  const tasksOfDay = () => {

    return todoStore.todos.filter(item => {
      return formatDate(item.created) === formatDateCurrent(todoStore.currentDateCalendar)

    })
  }

  return (

    <section className={`${styles.tasks} ${styles.section_task}`}>
      <p className={styles.tasks__head}>
        <span className={`${styles.tasks__caption} ${todoStore.showTask === 'month'?styles.tasks__caption_active:null}`}>This
          month</span>
        <span className={`${styles.tasks__caption} ${todoStore.showTask === 'day'?styles.tasks__caption_active:null}`}>
          Highlighted</span>
      </p>
      {todoStore.todos.length &&
      <ul className={`${styles.tasks_list} ${styles.center}`}>
        {todoStore.showTask === 'month' ?

          tasksMonthly().map((item) =>
            <TaskItem key={item.id} item={item}/>) :

          tasksOfDay().map((item) =>
          <TaskItem key={item.id} item={item}/>)
        }
      </ul>
      }

    </section>
  )
})
