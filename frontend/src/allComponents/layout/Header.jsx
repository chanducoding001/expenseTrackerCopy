import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import './headerStyles.css';

const Header = () => {
    const navigate = useNavigate();

    const notifyPage = ()=>{
        navigate('/home/notifications')
    }
  return (
    <>
    <div className='layout-header'>
      <div className='profile-img-text-container'>
      <div className='profile-img-container'>
        <img src='/images/profile1.jpeg'  className='profile-img'/>
      </div>
      <div>
        <h6 style={{color:'#91919F'}}>Username</h6>
        <h4 style={{fontWeight:'600',color:'#161719'}}>Bill Gates</h4>
      </div>
      </div>
        <div className='notify-btn-container'>
        <button onClick={notifyPage}>
          <div>{<NotificationsIcon style={{fontSize:'3rem',color:'orange'}}/>}</div>
        <div className='notify-count'>5</div>
        </button>
        </div>
    </div>
    </>
  )
}

export default Header;