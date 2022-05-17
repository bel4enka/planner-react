import styles from './footer.module.css'
import Modal from "../modal/modal";
import {AddTask} from "../add-task/add-task";
import {useState} from "react";
import todoStore from "../../store";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
  }
  return (
    <footer className={styles.menu_bar}>
      <ul className={styles.menu}>
        <li>
          <a href="#" className={styles.task}></a>
        </li>
        <li>
          <a href="#" className={styles.time}></a>
        </li>
        <li>
          <a onClick={toggleModal} href="#" className={styles.add}></a>
        </li>
        <li>
          <a href="#" className={styles.reminder}></a>
        </li>
        <li>
          <a href="#" className={styles.profile}></a>
        </li>
      </ul>
      {todoStore.open || isOpen &&
        <Modal onClose={toggleModal} title={'Create New Tasks'}>
          <AddTask onClose={toggleModal} />
        </Modal>
      }
    </footer>
  )
}
