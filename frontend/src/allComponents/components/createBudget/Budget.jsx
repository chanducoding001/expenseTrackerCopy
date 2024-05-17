
// import React, { useRef } from 'react';
// import AttachFile from '@mui/icons-material/AttachFile';
// import { Field, Formik, Form } from 'formik';

// const Budget = () => {
//   const inputRef = useRef(null);
//   const initialValues={ attach: null };
//   console.log(initialValues);
//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={(values, { setSubmitting }) => {
//         // Submit logic here
//       }}
//     >
//       {({ values, setFieldValue }) => (
//         <Form>
//           <div style={{ position: 'relative' }}>
//             <Field name="attach">
//               {({ field }) => (
//                 <>
//                   <input
//                     type="file"
//                     style={{ display: 'none' }}
//                     ref={(ref) => {
//                       inputRef.current = ref;
//                       field.ref = ref;
//                     }}
//                     onChange={(e) => {
//                       console.log('file changing',e.target.files[0]);
//                       setFieldValue('attach', e.target.files[0]); // Set form value
//                     }}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => {
//                       if (inputRef.current) {
//                         inputRef.current.click(); // Trigger click on the file input
//                       }
//                     }}
//                     style={{ position: 'relative' }}
//                   >
//                     <span>
//                       <AttachFile />
//                     </span>
//                     Attach File
//                   </button>
//                 </>
//               )}
//             </Field>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default Budget;


import React from 'react'
import MonthCarousel from './MonthCarousel';
import './createBudgetStyles.css';
const Budget = () => {
  return (
    <>
    <div className='budget-container'>
      <div className='monthly-carousel-container'><MonthCarousel/></div>
      <div className='budget-lists-container'>
        <div className='budget-lists'>Budget Lists
        
        </div>
        <div className='create-budget-btn-container'><button className='reUsableBtn'>Create Budget</button></div>
      </div>
    </div>
    </>
  )
}

export default Budget;