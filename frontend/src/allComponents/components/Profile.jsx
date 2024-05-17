import React from 'react'
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import SettingsIcon from '@mui/icons-material/Settings';
import IosShareIcon from '@mui/icons-material/IosShare';
import LogoutIcon from '@mui/icons-material/Logout';
import SampleProfile from './profileAccount/SampleProfile';
import './profileAccount/sampleProfileStyles.css';
import { useNavigate } from 'react-router-dom';
const Profile = () => {

  const navigate = useNavigate();

  const styles={
    fontSize:'3rem'
  }
  const data = [
              {
                icon:<FolderSharedIcon style={styles}/>,
                styles,
                text:'Account',
                color:'blue',
                // handleProfileAccountNavigate:()=>{
                //   navigate('/home/profileAccount')
                // }
                to:'/home/profileAccount'
              },  
              {
                icon:<SettingsIcon style={styles}/>,
                styles,
                text:'Settings',
                color:'blue',
                to:'/home/profileSettings'
              },  
              {
                icon:<IosShareIcon style={styles}/>,
                styles,
                text:'Export Data',
                color:'blue',
                to:'/home/profileDataExport'
              },  
              
  ];

  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login',{replace:true});
  }
  return (
    <div className='make-center layout-fixed-height layout-bg-color'>
    <div className='profile-container carousel-container'>
      {
        data?.map((e,i)=>{return <SampleProfile 
          key={i} icon={e?.icon} text={e?.text} color={e?.color}
          to={e?.to}
          />})
      }
      <button className='smaple-profile-container sample-profile-logout-btn' onClick={handleLogout}>
        <div className='sample-profile-icon sample-profile-icon-left-padding'style={{color:'red'}}><LogoutIcon style={styles}/></div>
        <div className='sample-profile-text sample-profile-icon-left-padding'>Logout</div>
    </button>
    </div>
    </div>
  )
}

export default Profile;