import styles from "./detail-task.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import {IconButton} from "@mui/material";

export const DetailTask = () => {
  return(
    <>
        <div className={styles.details__time_desc}>
          <span className={styles.details__date}>28.07.2021</span>
          <span className="details__time">12 pm</span>
        </div>
        <p className={styles.details__desc}>The monkey-rope is found in all
          whalers; but it was only in the Pequod
          that the monkey and his holder.</p>
        <span
          className={`${styles.details__status} ${styles.status_completed}`}>Completed</span>
        <IconButton aria-label="delete" className={styles.task__button_del}>
          <DeleteIcon/>
        </IconButton>
    </>
  )

}
