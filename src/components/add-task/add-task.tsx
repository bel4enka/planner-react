import styles from './add-task.module.css'
import { useFormik } from 'formik';
import {TodoContext} from '../../store/context'
import {useContext} from "react";
import {observer} from "mobx-react-lite";
import todoStore from '../../store/index'
import {toJS} from "mobx";

export const AddTask = observer(( props:any) => {
  const toggleModal = props.onClose
  const formik = useFormik({
    initialValues: {
      content: '',
      description: '',
      date: '',
      due_string: '',
      color: ''
    },
    onSubmit: values => {
      todoStore.addTodoAsync(formik.values)
      formik.resetForm();
      toggleModal()
    },
  });
  return (
    <>
        <form className="form form__add-task" name="add-task" onSubmit={formik.handleSubmit}>
            <label className="form__label" htmlFor="topic">Topic</label>
            <input id="content"
                   name="content"
                   type="content"
                   onChange={formik.handleChange}
                   value={formik.values.content}
            />
            <label className="form__label" htmlFor="desc">Description</label>
            <input id="description"
                   name="description"
                   type="description"
                   onChange={formik.handleChange}
                   value={formik.values.description}
            />
            <input type="date"
                   onChange={formik.handleChange}
                   id="date"
                   name="date"
                   value={formik.values.date}
            />

            <label className="form__label"
                   htmlFor="due_string">Notification</label>
            <select
              onChange={formik.handleChange}
                    className="form__item form__item_el_notification"
                    id="notification" name="due_string">
              <option value={formik.values.due_string}>this hour</option>
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
})
