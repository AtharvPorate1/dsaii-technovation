import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import styles from '../styles/Home.module.scss';

import { ReactComponent as ScheduleIcon } from '../media/icons/schedule.svg';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';
import Carousel from '../components/Carousel';
import HighlightCard from '../components/HighlightCard';

import { events, highlights } from '../data/data';
import { mainCoordinators, coordinators } from '../data/data'
import Hero from '../components/Hero';
import { motion } from 'framer-motion'

const tags = [
  'coding', 'programming', 'web development', 'software engineering', 'networking', 'data science',
  'cybersecurity', 'artificial intelligence', 'machine learning', 'robotics', 'virtual reality',
  'augmented reality', 'blockchain', 'Internet of Things (IoT)', 'cloud computing'
];


const Home = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <section className={cx(styles["intro-section"], styles['home-section'])}>
        <div className={styles['intro-bg']}>
          <div className={styles.rail}>
            {tags.map((tag, i) => <span key={i}>{tag} </span>)}
          </div>
          <div className={styles.rail}>
            {tags.map((tag, i) => <span key={i}>{tag} </span>)}
          </div>
          <div className={styles.rail}>
            {tags.map((tag, i) => <span key={i}>{tag} </span>)}
          </div>
        </div>
        <header className={cx(styles.introContent, styles.sectionHeader, 'container',)}>
          <h2 className={styles.heading}>
            <span style={{ marginRight: '3ch', color:'#15293D' }}>Technovation</span>
            <span className={styles._ar} style={{color:'#15293D',}}>2024</span>
          </h2>
          <p className={styles.subtitle}></p>
          {/* TECHNOVATION WAS A STIMULATING AND ENRICHING EVENT HELD ON 24TH-25TH APRIL 2023. IT FEATURED A HACKATHON AND PROJECT COMPETITION INITIATED BY THE DSAII CLUB. THE EVENT AIMED TO BRING TOGETHER TALENTED ENGINEERING STUDENTS FROM ACROSS THE COUNTRY, PROVIDING THEM WITH A PLATFORM TO SHOWCASE THEIR SKILLS AND COMPETE IN THEIR RESPECTIVE DOMAINS. THE EVENT SERVED AS A PLATFORM FOR BUDDING INNOVATORS TO DEMONSTRATE THEIR INGENUITY AND CREATIVITY          </p> */}
          <div className={styles['header-btn-wrapper']}>
            <NavLink to='/gallery' className={cx('btn', styles['intro-header-btn'])}>
              <span className={cx('btn-subtitle', styles['intro-btn-subtitle'])}>DSAII'24 in reels</span>
              <span className={cx('btn-text', styles['intro-btn-text'])}>Gallery</span>
              <LinkIcon />
            </NavLink>
          </div>
        </header>
      </section>

      <section className={cx(styles['home-section'], 'container', styles.highlights)}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.heading} style={{transform:'translateX(-0.15ch)'}}>
            <span>Highlights</span>
          </h2>
        </header>

        <main>
          <div className={styles.hlgallery}>
            {highlights.map(id => <HighlightCard user={user} key={id} {...events[id]} />)}
            <div className={styles['btn-wrapper']}>
              <NavLink to='/events' className='btn'>
                <span className='btn-subtitle'>Events</span>
                <span className='btn-text'>Full Event<br />Schedule</span>
                <ScheduleIcon />
              </NavLink>
            </div>
          </div>
        </main>
      </section>

      <section className={cx(styles['home-section'], styles.coordinators)}>
        <header className={cx(styles.sectionHeader, 'container')}>
          <h2 className={styles.headingTeam}>
            <span style={{ marginRight: '3ch' }}>Our</span>
            <span className={styles._ar}>Team</span>
          </h2>
          <div className={cx(styles.subtitle, 'container')} id='coordinatorsList'>
            <ul>
              {coordinators.filter((val, i) => i <= 22).map(val => <li key={val.name}> {val.name}</li>)}
            </ul>
            <ul>
              {coordinators.filter((val, i) => i > 22).map(val => <li key={val.name}> {val.name}</li>)}
            </ul>
          </div>
        </header>
        <main>
          <Carousel cardsList={mainCoordinators} />
        </main>
      </section>
    </motion.div>
  )
}

export default Home;