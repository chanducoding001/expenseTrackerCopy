import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
// import Card from 'react-bootstrap/Card';
import Card from '@mui/material/Card';
import '../authentication/authStyles.css';
import './componentsStyles.css';
import { useNavigate } from 'react-router-dom';
const AddNewAccount = () => {

    const navigate = useNavigate();
    const initialValues = {
        name:'',
        accountType:''
    }
    const validationSchema = Yup.object({
        name:Yup.string().required('Name is required!'),
        accountType:Yup.string().required('Account type is required!')
    });
    const handleSubmit = (values,{resetForm})=>{
        console.log(values);
        navigate('/home/addNewWallet');
        resetForm();
    }
  return (
    <>
    <div className='make-center layout-bg-color layout-fixed-height'>
        <h4>Add New Account</h4>
        <Card className='addNewAccount-card'>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className='make-center space-around' 
                >

                    <div>
                    <Field type='text' name='name' placeholder='Name' className='inputField'/>
                    <div className='error'><ErrorMessage  name='name'/></div>
                    </div>
                    <div>
                    <Field as='select' name='accountType' placeholder='Account Type' className='inputField'>
                        <option defaultValue='Account Type'>Account Type</option>
                        <option>Current</option>
                        <option>Savings</option>
                    </Field>
                    <div className='error'><ErrorMessage  name='accountType'/></div>
                    </div>
                    <button className='reUsableBtn' type='submit'>Continue</button>
                    <button className='reUsableBtn' type='reset'>Reset Details</button>
                </Form>
            </Formik>
        </Card>
    </div>
    </>
)
}

export default AddNewAccount;