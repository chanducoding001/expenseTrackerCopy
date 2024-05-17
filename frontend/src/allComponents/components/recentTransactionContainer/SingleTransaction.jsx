import React from 'react';
import './singleTransaction.css';

const SingleTransaction = (props) => {
    const {icon,title,text,spent,dateTime} = props;
  return (
    <>
    <div className='single-transaction-container carousel-container'>
        
        <div className='single-transaction-title-text'>
            <div className='single-transaction-icon'>{icon}</div>
            <div className='single-transaction-text'>
                <h4>{title}</h4>
                <h6>{text}</h6>
            </div>
        </div>
        <div className='single-transaction-spent-time'>
            <h4>{spent}</h4>
            <h6>{dateTime}</h6>
        </div>
    </div>
    </>
  )
}

export default SingleTransaction;