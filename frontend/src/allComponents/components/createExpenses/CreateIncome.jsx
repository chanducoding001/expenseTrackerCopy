import React from 'react'
import useCreateExpense from './useCreateExpense';
import * as Yup from 'yup';
import { initialValues,validationSchema } from './CreateExpense';
const CreateIncome = () => {
    // const initialValues = {};
    // const validationSchema = Yup.object({});
    const handleSubmit = (values,{resetForm})=>{console.log(values);resetForm()};
    const handleAttachments = (values,setFieldValue)=>{
      console.log('create income attachments');
    }
    const customeData = {
        initialValues,
        validationSchema,
        handleSubmit,
        bgColor:'green',
        title:'Income',
        handleAttachments
    }
    const CreateIncomeHook = useCreateExpense(customeData);
  return (
    <>
    {CreateIncomeHook}
    </>
  )
}

export default CreateIncome;