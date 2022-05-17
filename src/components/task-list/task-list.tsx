import styles from './task-list.module.css'
import {useEffect, useState} from "react";
import Modal from "../modal/modal";
import {DetailTask} from "../detail-task/detail-task";
import {Button, IconButton} from "@mui/material";
import todoStore from "../../store";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";
import {TDue, TTodo} from "../../type/type";
import {TaskItem} from "../task-item/task-item";


export const TaskList = observer(() => {

  useEffect(() => {
    todoStore.getTaskAsync()
  },[todoStore.responseTask])
  console.log(toJS(todoStore.todos))


  return (
    <section className={`${styles.tasks} ${styles.section_task}`}>
      <p className={styles.tasks__head}>
        <a href="#" className={`${styles.tasks__caption} ${styles.tasks__caption_active}`}>This
          month</a>
        <a href="#" className={styles.tasks__caption}>
          Highlighted</a>
      </p>
      {todoStore.todos.length &&
      <ul className={`${styles.tasks_list} ${styles.center}`}>

        {todoStore.todos.map((item:any) =>
          <TaskItem key={item.id} item={item} />
        )}
      </ul>
      }

    </section>
  )
})
