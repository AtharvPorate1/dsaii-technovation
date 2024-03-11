import { NavLink } from 'react-router-dom';
import styles from '../styles/Events.module.scss';
import cx from 'classnames';
import { events } from '../data/data';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SupportLink from '../components/SupportLink';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';
import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import { ReactComponent as ScrollDownIcon } from '../media/icons/select-down-icon.svg';



const timeCompare = (a, b) => {
  if (events[a].time < events[b].time) {
    return -1;
  } else if (events[a].time === events[b].time) {
    return 0;
  } else {
    return 1;
  }
}

const Events = ({ user }) => {
  const eventFigureWrapper = useRef(null);
  const [currentDay, setCurrentDay] = useState(0);
  const [activeEventId, setActiveEventId] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const wrapper = eventFigureWrapper.current;
    const figures = document.querySelectorAll(`.${styles['current-figure']}`);

    const stickEventFigure = () => {
      const stickFigure = (el, figure) => {
        if (el.getBoundingClientRect().top > (window.innerHeight - figure.getBoundingClientRect().width)) {
          figure.style.position = 'absolute';
          figure.style.top = '0';
        } else if (el.getBoundingClientRect().bottom > window.innerHeight) {
          figure.style.position = 'fixed';
          figure.style.bottom = '0';
          figure.style.top = 'unset';
        } else {
          figure.style.position = 'absolute';
          figure.style.bottom = '0';
          figure.style.top = 'unset';
        }
      }

      figures.forEach(figure => {
        stickFigure(wrapper, figure);
      })
    }

    window.addEventListener('scroll', stickEventFigure)

    return () => {
      window.removeEventListener('scroll', stickEventFigure);
    }
  }, [currentDay])

  return (
    <motion.div className={cx(styles.events, 'page-transition', 'container')}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      
      <header className={cx('page-header', styles['page-header'])}>
        <h1 className='heading'>
          <span>Event</span>
          <span>Schedule</span>
        </h1>
        <div className={cx(styles['header-btn-wrapper'])}>
          <NavLink to='/gallery' className={cx('btn', styles['intro-header-btn'])}>
            <span className={cx('btn-subtitle', styles['intro-btn-subtitle'])}>DSAII'24 in reels</span>
            <span className={cx('btn-text', styles['intro-btn-text'])}>Gallery</span>
            <LinkIcon />
          </NavLink>
        </div>
        <div className={cx('subtitle', styles['header-subtitle'])}>
          <h2>April.1-2</h2>
          <div>2024</div>
        </div>
      </header>
      <main className={cx(styles['main-content'])}>
        <nav className={styles['schedule-nav']}>
          <ul className={styles.tabs}>
            {['1 Apr.', '2 Apr.'].map((day, i) => (
              <ScheduleNavBtn key={day}
                currentDay={currentDay} day={i}
                label={day} handleDayChange={setCurrentDay} />
            ))}
          </ul>
        </nav>
        <section ref={eventFigureWrapper} className={styles['event-list-wrapper']}  >
          <ul className={styles['event-list']}>
            {Object.keys(events).filter(id => events[id].day === currentDay)
              .sort(timeCompare)
              .map(id => <EventLI key={id} {...events[id]} handleHover={setActiveEventId}/>)}
          </ul>
          <div className={styles['event-figures']}>
            <div className={styles.figures}>
              {Object.keys(events).filter(id => events[id].day === currentDay)
                .map(id => <EventFigure key={id} {...events[id]} isActive={activeEventId === id} />)}
            </div>
          </div>
        </section>
      </main>
      <div className='container'>
        <SupportLink />
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
    <div style={{
  flex: '1',
  minWidth: '200px',
  marginBottom: '20px',
  justifySelf: 'center',
  textAlign: 'center', // Added text-align center for centering the image
  '@media (max-width: 600px)': { // Media query for mobile view
    flex: '1', // Adjust flex property to allow centering
    width: '100%', // Set width to 100% to make it fill the container
    marginBottom: '10px' // Adjust margin for better spacing
  }
}}>
  {/* <img alt='' src={figureSrc} style={{ width: '80%', height: 'auto' }} /> */}
</div>

    <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
      <ScrollDownIcon />
    </div>
    <div style={{ flex: '2', minWidth: '200px', paddingLeft: '20px', alignItems:'center' }}>
      <Typography variant="h3" sx={{ marginBottom: '20px', fontFamily:'Roboto' }}></Typography>
      {/* <Typography variant="h4" sx={{ color: 'red', marginBottom: '10px' }}>Title</Typography> */}
      {/* <Typography variant="body1" sx={{ marginBottom: '20px' }}>Event title goes here</Typography> */}

      <Typography variant="h4" sx={{ marginBottom: '10px',fontFamily:'Roboto' }}>Description</Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px', fontFamily:'Roboto' }}></Typography>
      <Typography variant="h5" sx={{ marginBottom: '10px',fontFamily:'Roboto' }}>Team :</Typography>
      
      {/* <Typography variant="h4" sx={{ marginBottom: '10px',fontFamily:'fantasy' }}>Description</Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px', fontFamily:'fantasy' }}>{desc}</Typography> */}

      <Typography variant="h5" sx={{ marginBottom: '10px', fontFamily:'Roboto' }}>Type :</Typography>
      <Typography variant="h5" sx={{ marginBottom: '10px', fontFamily:'Roboto' }}>Fee : </Typography>
      <Typography variant="h5" sx={{ marginBottom: '10px', fontFamily:'Roboto' }}>Time : </Typography>
      
      <Button variant="contained" style={{backgroundColor:'#991E41'}} sx={{ marginBottom: '20px', fontFamily:'Roboto' }}>Register</Button> 
      {/* <Typography variant="h4" sx={{  marginBottom: '10px' }}>Registration Status</Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>Registration status goes here</Typography> */}

      {/* Add more event details as needed */}
    </div>
  </Box>
</Drawer>
      </div>
    </motion.div>
  )
}

const ScheduleNavBtn = ({ day, currentDay, handleDayChange, label }) => (
  <li className={cx(styles.tab, { [styles.active]: currentDay === day })}>
    <button
      onClick={(e) => { e.preventDefault(); handleDayChange(day) }}
      className={styles['tab-btn']}
      type='button'
    >{label}</button>
  </li>
)

const EventLI = ({ id, title, type, isRegistrationOpen, venue, time, handleHover }) => {
  return (
    <li className={cx(styles['event-li'])}>
      <article className={styles['event-li-inner']}
        onMouseOut={e => { handleHover(null) }}
        onMouseOver={e => { handleHover(id) }}
      >
        <div className={styles.title}>
          {type === 'Contest'
            ? <p className={cx({ [styles.closed]: !isRegistrationOpen })}>{isRegistrationOpen ? 'Registrations open!' : 'Registrations closed!'}</p>
            : <p>{type} </p>}
          <h4>{title}</h4>
        </div>
        <div className={styles.venue} >
          <Button variant="contained" style={{backgroundColor:'#991E41'}} sx={{ marginBottom: '20px', fontFamily:'Roboto' }}>Register</Button>
        </div>
        <div className={styles.time}>
          <p>{time}</p>
        </div>
      </article>
    </li>
  )
}

const EventFigure = ({ id, title, figureSrc, isActive = false }) => (
  figureSrc && <article key={id}
    className={cx(styles['current-figure'], { [styles.active]: isActive })}>
    <figure className={styles['img-wrapper']}>
      <img alt={title} src={figureSrc} />
    </figure>
  </article>
)

export default Events;