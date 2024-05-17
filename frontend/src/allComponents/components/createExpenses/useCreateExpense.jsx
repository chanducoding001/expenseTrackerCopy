import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useRef, useState } from 'react'
import './createExpenseStyles.css';
import '../../authentication/authStyles.css';
import '../../components/componentsStyles.css';
import { Switch } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const useCreateExpense = (props) => {
  const inputRef = useRef(null);
  const {initialValues,validationSchema,handleSubmit,bgColor,title,handleAttachments} = props; 
  const {isTransaction} = initialValues;
  const categories = ['Shopping','Food','Subscriptions'];
  const wallets = ['Wallet','Bank Account'];
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <>
    <div className='create-expense-container'  style={{backgroundColor:bgColor}}>
      <h4 className='heading-title'>{title}</h4>
      <div>
        <h6 className='how-much-money'>Home much?</h6>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {
            ({values,setFieldValue})=>(
              <Form className='create-expense-income-hook-form-container'>
                <div className='create-expense-input-wrapper'>
                <Field name='money' className='create-expense-input' placeholder='$0'/>
                <div><ErrorMessage name='money'/></div>
                </div>
                <div className='make-center' style={{width:'100%',
                backgroundColor:'white',borderRadius:'20px 20px 0 0'
                ,padding:'20px'
                }}>
                  {/* {
                    !isTransaction ? <> */}
                    <div className='create-expense-second-wrapper'>
                      {
                        !isTransaction ? <div className='create-expense-field-margin'>
                        <Field as='select' className='inputField' name='category'>
                          <option defaultValue='Category'>Category</option>
                          {
                            categories.map((e,i)=>{
                              return <option key={i}>{e}</option>
                            })
                          }
                        </Field>
                        <div><ErrorMessage name='category'/></div>
                      </div>:
                      <>
                      <div className='create-expense-field-margin'>
                    <Field name='from' className='inputField' placeholder='From'/>
                    <div><ErrorMessage name='from'/></div>
                  </div>
                  <div className='create-expense-field-margin'>
                    <Field name='to' className='inputField' placeholder='To'/>
                    <div><ErrorMessage name='to'/></div>
                  </div>
                      </>
                      }
                  
                  <div className='create-expense-field-margin'>
                    <Field name='description' className='inputField' placeholder='Description'/>
                    <div><ErrorMessage name='description'/></div>
                  </div>
                  {
                    !isTransaction && <div  className='create-expense-field-margin'>
                    <Field as='select' name='wallet' className='inputField'>
                      <option defaultValue='Wallet'>Wallet</option>
                      {
                        wallets.map((e,i)=>{
                          return <option key={i}>{e}</option>
                        })
                      }
                    </Field>
                    <div><ErrorMessage name='wallet'/></div>
                  </div>
                  }
                  
                  <div>
                    <input name='attachments' type='file' hidden
                    />
                    <button className='inputField' 
                    type='button' 
                      // onClick={()=>{handleAttachments(values,setFieldValue)}}
                      >
                      <span>{<AttachFileIcon/>}</span>Attachments</button>
                    </div>
                    {
                      !isTransaction && <div style={{
                        width:'100%',backgroundColor:'white',
                        display:'flex',justifyContent:'space-between',
                        alignItems:'center',flex:1,
                        }}  className='create-expense-field-margin'>
                        <div style={{flex:2}}><h4>Repeat</h4><h6>Repeat Transactions</h6></div>
                        <div style={{flex:1}}><Switch {...label} /></div>
                        
                      </div>
                    }
                  
                  {/* repeat components */}
                  <div className='make-center create-expense-field-margin'
                  style={{flexDirection:'row',justifyContent:'space-between'}}
                  >
                    <button className='reUsableBtn' type='submit'>Continue</button>
                    <button className='reUsableBtn' type='reset'>Reset Fields</button>
                    </div>
                  </div>
                    {/* </> :<>This is transaction page</>
                  } */}
                </div>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
    </>
  )
}

export default useCreateExpense;