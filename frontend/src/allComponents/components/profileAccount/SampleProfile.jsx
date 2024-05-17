import React from 'react';
import './sampleProfileStyles.css';
import { Link, NavLink } from 'react-router-dom';

const SampleProfile = (props) => {
    const {icon,text,color,to} = props;

  return (
    <>
    <Link className='smaple-profile-container' to={to}>
        <div className='sample-profile-icon sample-profile-icon-left-padding'style={{color}}>{icon}</div>
        <div className='sample-profile-text sample-profile-icon-left-padding'>{text}</div>
    </Link>
    </>
  )
}

export default SampleProfile;