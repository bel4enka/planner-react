import styles from './task-list.module.css'
import {useState} from "react";
import Modal from "../modal/modal";
import {DetailTask} from "../detail-task/detail-task";
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, IconButton} from "@mui/material";

export const TaskList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [disclose, setDisclose] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
  }
  function toggleDisclose() {
    setDisclose(!disclose)
  }
  return (
    <section className={`${styles.tasks} ${styles.section_task}`}>
      <p className={styles.tasks__head}>
        <a href="#" className={`${styles.tasks__caption} ${styles.tasks__caption_active}`}>This
          month</a>
        <a href="#" className={styles.tasks__caption}>
          Highlighted</a>
      </p>

      <ul className={`${styles.tasks_list} ${styles.center}`}>
        <li className={styles.task_list__task}>
          <a onClick={toggleDisclose} className={`${styles.task__link} ${styles.task}`}>
            <input id="task-checked" type="checkbox" className={styles.task__competed}/>
              <label htmlFor="task-checked"
                     className={styles.task__competed_input}></label>
              <span className={styles.task__name}>learn English</span>
              <span className={styles.task__date}>28.07.2021</span>
              <span className={styles.task__time}>12 pm</span>
          </a>
          {disclose &&
            <div className={styles.task__options}>
            <a href={'#'} onClick={toggleModal}
               className={styles.task__details}>View details</a>
            <IconButton aria-label="delete" className={styles.task__button_del}>
              <DeleteIcon/>
            </IconButton>
          </div>
          }
          <span className={styles.task__desc}></span>
        </li>
      </ul>
      {isOpen &&
        <Modal onClose={toggleModal} title={''}>
          <DetailTask  />
        </Modal>
      }
    </section>
  )
}
