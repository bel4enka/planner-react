import styles from "./detail-task.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
} from "@mui/material";
import {observer} from "mobx-react-lite";
import {FC} from "react";
import {TTodo} from "../../type/type";
import {pink} from "@mui/material/colors";
import todoStore from "../../store";

export const DetailTask = observer((props: { item: TTodo, date: string, time: string}) => {

  const {item, date, time} = props;

  return(
    <>
      <h2
      className={styles.details__header}>{item.content}</h2>
        <div className={styles.details__time_desc}>
          <span className={`${styles.details__date} ${styles.date_ellipse}`}>{date}</span>
          <span className={styles.details__time}>{time}</span>
        </div>
        <p className={styles.details__desc}>{item.description}</p>
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
        labelPlacement="end"
      />
        <IconButton aria-label="delete" className={styles.task__button_del} onClick={() => todoStore.dellTodoAsync(item.id)}>
          <DeleteIcon/>
        </IconButton>
      </FormGroup>

    </>
  )

})
