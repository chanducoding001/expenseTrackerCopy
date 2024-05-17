import React from 'react';
import useCreateExpense from './useCreateExpense';
import * as Yup from 'yup';

const initialValues = {
    isTransaction:true
}
const validationSchema = Yup.object({});

const CreateTransaction = () => {
    
    const customData = {
        initialValues,
        validationSchema,
        handleSubmit,
        bgColor:'blueViolet',
    title:'Transaction',
    }
    const CreateTransactionHook = useCreateExpense(customData);
    function handleSubmit(values,{resetForm}){
        console.log(values);
        resetForm();
    }

  return (
    <>
    <div className='layout-dynamic-height'>{CreateTransactionHook}</div>
    </>
  )
}

export default CreateTransaction;