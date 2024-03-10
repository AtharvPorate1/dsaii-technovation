import { Link, NavLink } from 'react-router-dom';
import styles from './HighlightCard.module.scss';

import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
// import styles from '../styles/Home.module.scss';
import cx from 'classnames';
import { useState } from 'react';
import { ReactComponent as ScrollDownIcon } from '../media/icons/select-down-icon.svg';
import{ events } from '../data/data';








const HighlightCard = ({ figureSrc, title, desc, type, isRegistrationOpen, user,teamSize, fee, time }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  return(
    <>
    <article 
          className={styles.card} 
          onClick={() => setIsDrawerOpen(true)}
     >
      
      <figure>
        <img alt='' src={figureSrc} />
        
      </figure>
      <main>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardSubtitle}>
          <div className={styles.desc}>
          {/* <EventDrawer title={title} desc={desc} type={type} /> */}
          </div>
          {type === 'Contest' && isRegistrationOpen ? (
            <div className={styles.type}>Registrations open</div>
          ) : <div className={styles.type}>{type}</div>}
        </div>
      </main>
      {type === 'Contest' && isRegistrationOpen && (
        user ? <NavLink className={styles.link} to='/register'>Register</NavLink>
          : <NavLink className={styles.link} to='/signup'>Register</NavLink>
      )}
    </article>
    <Drawer
  anchor='bottom'
  open={isDrawerOpen} 
  onClose={()=> setIsDrawerOpen(false)}
>
  <Box sx={{ 
    width: '100%',
    height: 400, 
    overflowY: 'scroll',
    backgroundColor: 'beige',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: 'black',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative' // Added position relative to the parent box
  }}>
    <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
      <img alt='' src={figureSrc} style={{ width: '80%', height: 'auto' }} />
    </div>
    <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
      <ScrollDownIcon />
    </div>
    <div style={{ flex: '2', minWidth: '200px', paddingLeft: '20px' }}>
      <Typography variant="h3" sx={{ marginBottom: '20px', fontFamily:'Roboto' }}>{title}</Typography>
      {/* <Typography variant="h4" sx={{ color: 'red', marginBottom: '10px' }}>Title</Typography> */}
      {/* <Typography variant="body1" sx={{ marginBottom: '20px' }}>Event title goes here</Typography> */}

      <Typography variant="h4" sx={{ marginBottom: '10px',fontFamily:'Roboto' }}>Description</Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px', fontFamily:'Roboto' }}>{desc}</Typography>
      <Typography variant="h5" sx={{ marginBottom: '10px',fontFamily:'Roboto' }}>Team :{teamSize}</Typography>
      
      {/* <Typography variant="h4" sx={{ marginBottom: '10px',fontFamily:'fantasy' }}>Description</Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px', fontFamily:'fantasy' }}>{desc}</Typography> */}

      <Typography variant="h5" sx={{ marginBottom: '10px', fontFamily:'Roboto' }}>Type : {type}</Typography>
      <Typography variant="h5" sx={{ marginBottom: '10px', fontFamily:'Roboto' }}>Fee : {fee}</Typography>
      <Typography variant="h5" sx={{ marginBottom: '10px', fontFamily:'Roboto' }}>Time : {time}</Typography>
      
      <Button variant="contained" style={{backgroundColor:'#991E41'}} sx={{ marginBottom: '20px', fontFamily:'Roboto' }}>Register</Button> 
      {/* <Typography variant="h4" sx={{  marginBottom: '10px' }}>Registration Status</Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>Registration status goes here</Typography> */}

      {/* Add more event details as needed */}
    </div>
  </Box>
</Drawer>

    </>
  )
}
  // <Link to="/events">

  // </Link>


export default HighlightCard;

