import styles from './add-task.module.css'
import { useFormik } from 'formik';
import {TodoContext} from '../../store/context'
import {useContext} from "react";

export const AddTask = () => {
  const  {addTodo} = useContext(TodoContext)
  const  todos = useContext(TodoContext)
  const formik = useFormik({
    initialValues: {
      name: '',
      desc: '',
      date: '',
      notification: '',
      color: ''
    },
    onSubmit: values => {
      addTodo(formik.values)

    },
  });
  console.log(todos)
  return (
    <>
        <form className="form form__add-task" name="add-task" onSubmit={formik.handleSubmit}>
            <label className="form__label" htmlFor="topic">Topic</label>
            <input id="name"
                   name="name"
                   type="name"
                   onChange={formik.handleChange}
                   value={formik.values.name}
            />
            <label className="form__label" htmlFor="desc">Description</label>
            <input id="desc"
                   name="desc"
                   type="desc"
                   onChange={formik.handleChange}
                   value={formik.values.desc}
            />
            <input type="date"
                   onChange={formik.handleChange}
                   id="date"
                   name="date"
                   value={formik.values.date}
            />

            <label className="form__label"
                   htmlFor="notification">Notification</label>
            <select
              onChange={formik.handleChange}
                    className="form__item form__item_el_notification"
                    id="notification" name="notification">
              <option value={formik.values.notification}>this hour</option>
              <option
                onChange={formik.handleChange}
              >10 mins before</option>
              <option
                onChange={formik.handleChange}
              >20 mins before</option>
              <option
                onChange={formik.handleChange}
              >30 mins before</option>
            </select>
            <label className="form__label" htmlFor="color">Choose color</label>
            <input
              value={formik.values.color}
                   onChange={formik.handleChange}
                   type="color"
                   className="form__item form__item_el_color"
                   id="color" name="color"/>
            <button type="submit"
                    className="popup__button popup__button__add-task">Add
            </button>
        </form>
    </>
  )
}
