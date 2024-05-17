import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Card from '@mui/material/Card';
import '../authentication/authStyles.css';
import { useNavigate } from 'react-router-dom';
const AddNewWallet = () => {

    const navigate = useNavigate();
    const initialValues = {
        chase:'',
        accountName:''
    }
    const validationSchema = Yup.object({
        chase:Yup.string().required('Chase is required!'),
        accountName:Yup.string().required('Account Name is required!')
    });
    const handleSubmit = (values,{resetForm})=>{
        console.log(values);
        navigate('/home');
        resetForm();
    }
  return (
    <>
    <div className='make-center layout-bg-color layout-fixed-height'>
        <h4>Add New Wallet</h4>
        <Card className='addNewAccount-card'>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form className='make-center space-around'>
                    <div>
                    <Field type='text' name='chase' placeholder='Chase' className='inputField'/>
                    <div className='error'><ErrorMessage  name='chase'/></div>
                    </div>
                    <div>
                    <Field as='select' name='accountName' placeholder='Account Name' className='inputField'>
                        <option defaultValue='Account Name'>Account Name</option>
                        <option>SBI</option>
                        <option>SBH</option>
                        <option>Bank Of Baroda</option>
                    </Field>
                    <div className='error'><ErrorMessage  name='accountName'/></div>
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

export default AddNewWallet;