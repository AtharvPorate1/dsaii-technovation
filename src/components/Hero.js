import { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { eventStartDate } from "../data/data";
import { ReactComponent as ScrollDownIcon } from '../media/icons/down.svg';
import HeroVideo from '../media/medium.mp4';
import HeroImage from '../media/webbg.svg';
import styles from './Hero.module.scss';
import EventDrawer from "./EventDrawer";

const Hero = () => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const navEl = document.getElementById('nav');
    const heroEl = document.getElementById('hero');
    const heroLogoLetters = document.querySelectorAll('.shouldAnimate');
    const coordinatorNames = document.getElementById('coordinatorsList');

    const parallaxAnimate = () => {
      // animate hero logo letters
      const offsetTop = heroLogoLetters[0].offsetTop;
      const speed = 0.04;
      for (let i = 0; i < heroLogoLetters.length; i++) {
        /** @type {HTMLElement} */
        let el = heroLogoLetters[i];
        const shift = Math.abs(3 - i) * speed * (offsetTop - el.getBoundingClientRect().top);
        el.style.transform = 'translate3d(0, ' + shift.toFixed(3) + 'px, 0)';
      }

      // parallax animate coordinators
      let coordNamesTopOffset = coordinatorNames.getBoundingClientRect().top;
      coordinatorNames.style.transform = 'translate3d(0, ' + speed * coordNamesTopOffset.toFixed(3) + 'px, 0)';
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navEl.style.position = 'absolute';
          navEl.style.top = '100vh';
        } else {
          navEl.style.position = 'fixed';
          navEl.style.top = '0';
        }
      })
    })

    if (heroEl) observer.observe(heroEl);
    if (heroLogoLetters.length > 0) {
      window.addEventListener('scroll', parallaxAnimate);
    }

    return () => {
      window.removeEventListener('scroll', parallaxAnimate);
      observer.disconnect()
      navEl.style.position = 'fixed';
      navEl.style.top = '0';
    }
  }, [])

  return (
    <div className={styles.hero} id="hero">
      <img className={styles['hero-bg']} src={HeroImage} alt="" />
      <div className={styles.grain}></div>
      <video className={styles['hero-bg']}  autoPlay={true} muted={true} loop={true}>
        <source src="webbg.svg" />
      </video>
      <div className={styles.content}>
        <h1 className={styles.logo}>
          <span className='shouldAnimate'>T</span>
          <span className='shouldAnimate'>E</span>
          <span className='shouldAnimate'>C</span>
          <span className='shouldAnimate'>H</span>
          <span className='shouldAnimate'>N</span>
          <span className='shouldAnimate'>O</span>
          <span className='shouldAnimate'>V</span>
          <span className='shouldAnimate'>A</span>
          <span className='shouldAnimate'>T</span>
          <span className='shouldAnimate'>I</span>
          <span className='shouldAnimate'>O</span>
          <span className='shouldAnimate'>N</span>
          <span className='shouldAnimate'>2.</span>
          <span className='shouldAnimate'>0</span>
        </h1>
        
        <div className={styles.label}>Days</div>
        
        <div className={styles.timeline}>
          {!isLive && (<>
            <p>On 1st and 2nd Apr.</p>
            <CountdownTimer countdownDate={eventStartDate} handleTimerComplete={setIsLive} />
          </>)}
        </div>
      </div>
      <div className={styles.scrollDown} aria-hidden='true'>
        <ScrollDownIcon />
      </div>
    </div>
  )
}

export default Hero;