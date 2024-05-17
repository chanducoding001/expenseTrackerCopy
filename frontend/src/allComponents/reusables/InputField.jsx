import React from 'react'
import './reUsableStyles.css';
import {Field} from 'formik';

const InputField = (props) => {
    const {placeholder,onChange,type} = props;

  return (
    <>
    <Field/>
    </>
  )
}

export default InputField;