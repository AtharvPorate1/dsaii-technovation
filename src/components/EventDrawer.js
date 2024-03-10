import React from 'react';
import { MenuBookOutlined } from '@mui/icons-material';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import styles from '../styles/Home.module.scss';
import cx from 'classnames';

const EventDrawer = ({title, desc, type}) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  console.log(title, desc, type)

  return (
    <div>
      <IconButton
        size='large'
        edge="start"
        color="inherit"
        aria-label='logo'
        onClick={() => setIsDrawerOpen(true)} // corrected syntax
      >
        <MenuBookOutlined />
      </IconButton>
      <Drawer
        anchor='bottom'
        open={isDrawerOpen} 
        onClose={()=> setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 700, height: 400, overflowY: 'scroll' }}>
        <header className={cx(styles.introContent, styles.sectionHeader, 'container',)}>
          <h2 className={styles.heading}>
            <span style={{ marginRight: '3ch', color:'#15293D' }}>Anticipating</span>
            <span className={styles._ar} style={{color:'#15293D',}}>Future</span>
          </h2>
          <p className={styles.subtitle}>
          Get ready for the ultimate experience at Technovation 2.0, the flagship event of DSAII- Data Science and Artificial Intelligence Inquisitive Club! Dive into our tech events: TechNova for showcasing your brilliant projects, Diplomatrix for widening your research horizons, and Bug Buster to flex your debugging skills. But that's not all! Join the excitement of Suit Up!, where escape rooms lead to courtroom showdowns, and Nerf Arena, for an epic foam dart battle. It's innovation, intellect, and adrenaline all in one!          </p>
          {/* TECHNOVATION WAS A STIMULATING AND ENRICHING EVENT HELD ON 24TH-25TH APRIL 2023. IT FEATURED A HACKATHON AND PROJECT COMPETITION INITIATED BY THE DSAII CLUB. THE EVENT AIMED TO BRING TOGETHER TALENTED ENGINEERING STUDENTS FROM ACROSS THE COUNTRY, PROVIDING THEM WITH A PLATFORM TO SHOWCASE THEIR SKILLS AND COMPETE IN THEIR RESPECTIVE DOMAINS. THE EVENT SERVED AS A PLATFORM FOR BUDDING INNOVATORS TO DEMONSTRATE THEIR INGENUITY AND CREATIVITY          </p> */}
          
          <div className={styles['header-btn-wrapper']}>
            {/* <NavLink to='/gallery' className={cx('btn', styles['intro-header-btn'])}>
              <span className={cx('btn-subtitle', styles['intro-btn-subtitle'])}>DSAII'24 in reels</span>
              <span className={cx('btn-text', styles['intro-btn-text'])}>Gallery</span>
              <LinkIcon /> */}
            {/* </NavLink> */}
          </div>
        </header>
          <Typography variant="h6" component="div">Bottom panel</Typography>

        </Box>
      </Drawer>
    </div>
  );
}

export default EventDrawer;
