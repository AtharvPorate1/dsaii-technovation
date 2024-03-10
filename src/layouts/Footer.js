import styles from '../styles/Footer.module.scss';
import logo from '../media/logo/atulyamLogo.png'

import echoOfArunachal from '../media/logo/echo_arunachal.png'
import hotelObsidianBlue from '../media/logo/hotel-obsidian-blue.png'
import bye from '../media/bye.png';
import cx from 'classnames'
import { ReactComponent as MailIcon } from '../media/icons/mail.svg';
import { ReactComponent as WAIcon } from '../media/icons/wa.svg';
import { useState } from 'react';

const Footer = () => {
  const [devTeam, setDevTeam] = useState(false);

  return (
    <footer className='container'>
      <div className={styles.MainFooterContent}>
        <div className={cx(styles.footerItems)} id="footerContent">
          <div className={styles.QuotesContainer}>
            <div className={styles.quotes} >Tech Set Go !</div>
          </div>

          <div>
            <div className={styles.LogoContainer}>
              {/* <img src={logo} alt=""></img> */}
              {/* <div className={styles.title}>DSAII'24</div> */}
            </div>
          </div>
          <div className={styles['sponsor-wrapper']}>
            <div className={styles.sponsor}>
              {/* <p style={{ textAlign: "center", fontSize: '1.2rem' }}>Our Sponsors</p> */}
              
            
              <div className={styles.sponsorImgs}>
                {/* <img className={styles.sponsors} src={echoOfArunachal} alt=""></img>
                <img className={styles.sponsors} src={hotelObsidianBlue} alt=""></img> */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerItems}>
          <div >
            <p>Contact us</p>
            <ul className={styles.SocialHandles}>
              <li className={cx(styles['handle-wrapper'])}>
                <a className={styles.handle} target='_blank' rel='noreferrer' href="https://www.facebook.com/">
                  <svg role="presentation" aria-label="Facebook" aria-hidden="true">
                    <use href="/media/icons/sprite.svg#social-facebook"></use>
                  </svg>
                </a>
              </li>
              <li className={cx(styles['handle-wrapper'])}>
                <a className={styles.handle} target='_blank' rel='noreferrer' href="https://www.instagram.com/technovation.dit/">
                  <svg role="presentation" aria-label="Twitter" aria-hidden="true">
                    <use href="/media/icons/sprite.svg#social-instagram"></use>
                  </svg>
                </a>
              </li>
              <li className={cx(styles['handle-wrapper'])}>
                <a className={styles.handle} target='_blank' rel='noreferrer' href="mailto:">
                  <MailIcon />
                </a>
              </li>
              <li className={cx(styles['handle-wrapper'])}>
                <a className={styles.handle} target='_blank' rel='noreferrer' href="/">
                  <WAIcon />
                </a>
              </li>
            </ul>
          </div>

          {/* <div className={styles.thanks}>
            <span>Thank you</span>
            <br />
            <span>for your support</span>
          </div> */}
          <div>
            {/* <img src={bye} style={{ height: "160px", width: "auto" }} alt=""></img> */}
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.team}>
          {/* <span>
            Handcrafted with 🖤 by
            <button className={cx(styles.devteamBtn, {
              [styles.on]: devTeam
            })} onClick={(e) => { e.preventDefault(); setDevTeam(!devTeam) }}>
              Web Dev Team
            </button>
          </span> */}
          <span className={styles.sep}>~</span>
          <span>&copy; 2023 DSAII DYPIT Pimpri</span>
          {devTeam && (
            <ul className={styles.devteam}>
              {/* <li><a className={cx('link', styles.ln)} target='_blank' rel='noreferrer' href="https://github.com/tripathics">@tripathics</a></li>
              <li><a className={cx('link', styles.ln)} target='_blank' rel='noreferrer' href="https://github.com/pursottam6003">@pursottam6003</a></li>
              <li><a className={cx('link', styles.ln)} target='_blank' rel='noreferrer' href="https://github.com/daknya">@daknya</a></li> */}
              <li><a className={cx('link', styles.ln)} target='_blank' rel='noreferrer' href="https://github.com/AtharvPorate1">@porate</a></li> 
            </ul>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer