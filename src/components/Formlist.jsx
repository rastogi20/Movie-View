import React from 'react'
import { Form } from 'react-router-dom'
import styles from "./Formlist.module.css"
function Formlist({searchTerm}) {
  return (
    <Form className={`container ${styles.form}`}>
        <input type="text" name='search' id='search' defaultValue={searchTerm} />
        <button type='submit'>Search</button>

    </Form>
  )
}

export default Formlist