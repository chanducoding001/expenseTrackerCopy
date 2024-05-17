// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import React, { useState } from 'react'

// const CreateExpense = () => {
//   const initialValues = {
//     money:'$0',
//     category:'',
//     attachments:'',
//     description:'',
//     wallet:'',
//     repeat:false
//   }
//   const [expenses,setExpenses] = useState(initialValues);
//   const categories = ['Shopping','Food','Subscriptions'];
//   const wallets = ['Wallet','Bank Account'];

//   return (
//     <>
//     <div className='create-expense-container'>
//       <h4>Expense</h4>
//       <div>
//         <h6>Home much?</h6>
//         <Formik>
//           {
//             ({values,setFieldValue})=>(
//               <Form>
//                 <div>
//                 <Field name='money' className='create-expense-input'/>
//                 <div><ErrorMessage name='money'/></div>
//                 </div>
//                 <div className='second-wrapper'>
//                   <Field as='select' name='category'>
//                     <option defaultValue='Category'>Category</option>
//                     {
//                       categories.map((e,i)=>{
//                         return <option key={i}>{e}</option>
//                       })
//                     }
//                   </Field>
//                   <div><ErrorMessage name='category'/></div>
//                 </div>
//                 <div>
//                   <Field name='description'/>
//                   <div><ErrorMessage name='description'/></div>
//                 </div>
//                 <div>
//                   <Field as='select' name='wallet'>
//                     <option defaultValue='Wallet'>Wallet</option>
//                     {
//                       wallets.map((e,i)=>{
//                         return <option key={i}>{e}</option>
//                       })
//                     }
//                   </Field>
//                   <div><ErrorMessage name='wallet'/></div>
//                 </div>
//                 <div><button name='attachments' type='button'>Attachments</button></div>
//                 <div>
//                   <div><h4>Repeat</h4><h6>Repeat Transactions</h6></div>
//                   <Field as='radio' name='repeat'/>
//                   <div><ErrorMessage name='repeat'/></div>
//                 </div>
//                 <div><button type='submit'>Continue</button></div>
//               </Form>
//             )
//           }
//         </Formik>
//       </div>
//     </div>
//     </>
//   )
// }

// export default CreateExpense;


import React from 'react'
import useCreateExpense from './useCreateExpense'
import * as Yup from 'yup';
import CreateIncome from './CreateIncome';
import '../../components/componentsStyles.css';

export const initialValues = {
  money:'',
  category:'',
  attachments:'',
  description:'',
  wallet:'',
  repeat:false
}
export const validationSchema = Yup.object({
  money:Yup.string().required('Money is required!'),
  category:Yup.string().required('Category is required!'),
  // attachments:Yup.string().required('Attachments is required!'),
  description:Yup.string().required('Description is required!'),
  wallet:Yup.string().required('Wallet is required!'),
  // repeat:Yup.string().required('Money is required!')
});

const CreateExpense = () => {
  
  const handleSubmit = (values,{resetForm})=>{
    console.log(values);
    resetForm();
  }
  const handleAttachments = (values,setFieldValue)=>{
    console.log('create expense attachments');
  }
  const customData = {
    initialValues,
    validationSchema,
    handleSubmit,
    bgColor:'red',
    title:'Expense',
    handleAttachments
  }
  const CreateExpensesHook = useCreateExpense(customData);
  return (
    <>
    <div className='layout-dynamic-height'>{CreateExpensesHook}</div>
    </>
  )
}

export default CreateExpense