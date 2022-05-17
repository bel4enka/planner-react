import { FC, useState} from "react";
import {observer} from "mobx-react-lite";
import todoStore from "../../store";
import {toJS} from "mobx";
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../task-list/task-list.module.css'
import {Checkbox, FormControlLabel, FormGroup, IconButton} from "@mui/material";
import Modal from "../modal/modal";
import {DetailTask} from "../detail-task/detail-task";
import {pink, red} from "@mui/material/colors";


export const TaskItem:FC<any> = observer(({item}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [disclose, setDisclose] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
  }
  function toggleDisclose() {
    setDisclose(!disclose)
  }

  function deleteTask (id:any) {
    todoStore.dellTodoAsync(id)
  }

  const formatDate = (date: string) =>  {
    const d = new Date(date)
    return `${d.getFullYear()}.${d.getMonth()+1}.${d.getDate()}`
  }
  const formatHours = (date:string) => {
    const d = new Date(date)
    return `${d.getHours()}: ${d.getMinutes()}`
  }
  return(
    <>
      <li className={styles.task_list__task} key={item.id}>
        <a onClick={toggleDisclose} className={`${styles.task__link} ${styles.task}`}>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="top"
              control={<Checkbox
                sx={{ color: pink[800],
                  '&.Mui-checked': {
                    color: pink[900],
                  },
                  '& .MuiSvgIcon-root': {
                    fontSize: 20}
                }}
              onChange={()=>todoStore.completeTodoAsync(item.id)}/>}
              label="Done"
              labelPlacement="top"
            /></FormGroup>

          {/*<input id="task-checked" type="checkbox" className={styles.task__competed}/>*/}
          <label htmlFor="task-checked"
                 className={styles.task__competed_input}></label>
          <span className={styles.task__name}>{item.content}</span>

          <span className={styles.task__date}>{formatDate(item.created)}</span>
          <span className={styles.task__time}>{formatHours(item.created)}</span>
        </a>
        {disclose &&
          <div className={styles.task__options}>
            <a href={'#'} onClick={toggleModal}
               className={styles.task__details}>View details</a>
            <IconButton aria-label="delete" className={styles.task__button_del} onClick={() => deleteTask(item.id)}>
              <DeleteIcon/>
            </IconButton>
          </div>
        }
        <span className={styles.task__desc}></span>
      </li>

      {isOpen &&
        <Modal onClose={toggleModal} title={''}>
          <DetailTask  />
        </Modal>
      }
    </>

  )
})
