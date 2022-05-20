import { useFormik } from 'formik';
import {observer} from "mobx-react-lite";
import todoStore from '../../store/index'
import { Button, Grid, TextField} from "@mui/material";

export const AddTask = observer(( props:any) => {
  const toggleModal = props.onClose
  const formik = useFormik({
    initialValues: {
      content: '',
      description: '',
      date: '',
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
          <Grid
            container
            spacing={5}
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch">
          <Grid item xs={5}>
              <TextField
                  fullWidth
                  label={'Name'}
                   id="content"
                   name="content"
                   type="content"
                   onChange={formik.handleChange}
                   value={formik.values.content}
                  variant="standard"
            />
          </Grid>
            <Grid item xs={8}>
                <TextField
                   fullWidth
                   label={'Description'}
                   id="description"
                   name="description"
                   type="description"
                   onChange={formik.handleChange}
                   value={formik.values.description}
                   variant="standard"
            />
            </Grid>
            <Grid item xs={8}>
            <TextField
                  fullWidth
                  type="date"
                   onChange={formik.handleChange}
                   id="date"
                   name="date"
                   value={formik.values.date}
                  variant="standard"
            />
            </Grid>
            <Grid item xs={8}>

              <TextField
                fullWidth
                type="color"
                onChange={formik.handleChange}
                id="color"
                name="color"
                value={formik.values.color}
                variant="standard"
              />
            {/*<label className="form__label" htmlFor="color">Choose color</label>*/}
            {/*<input*/}
            {/*  value={formik.values.color}*/}
            {/*       onChange={formik.handleChange}*/}
            {/*       type="color"*/}
            {/*       className="form__item form__item_el_color"*/}
            {/*       id="color" name="color"/>*/}
            </Grid>
              <Grid item xs={8}>
          <Button variant="contained" type="submit" size="large">
            Add
          </Button>
              </Grid>
          </Grid>
        </form>
    </>
  )
})
