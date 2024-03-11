import styles from '../styles/Gallery.module.scss';
import cx from 'classnames';
import 'react-html5video/dist/styles.css';
import { motion } from 'framer-motion';
import WovenImageList from '../components/GalleryComp';
import { ImageList, ImageListItem } from '@mui/material';
import Image1 from '../media/gallery/DSC_4277.jpg';
import Image2 from '../media/gallery/DSC_4280.jpg';
import Image3 from '../media/gallery/DSC_4669.jpg';
import Image4 from '../media/gallery/DSC_4780.jpg';
import Image5 from '../media/gallery/DSC_4441.jpg';
import Image6 from '../media/gallery/IMG_5511.jpg';




const Gallery = ({ user }) => {

  const Video = ({ embedId }) => {
    return (
      <div style={{
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: 'relative',
        height: "50vh"
      }}>
        <iframe
          style={{
            left: "6%",
            top: "18%",
            height: "65%",
            width: "90%",
            position: "absolute"

          }}
          width="653"
          height="280"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope; pictures-in-picture"
          allowFullScreen
          title='Embeded Youtube'
        />
      </div>
    );
  };

  const Image = ({ src, alt, width, height }) => {
    return (
      <div className={styles.imageContainer}>
        <img
          src={src}
          alt={alt}
          className={styles.image}
          width={width}
          height={height}
        />
      </div>
    );
  };

  return (
    <motion.div className={cx(styles.events, 'page-transition', 'container')}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <header className={cx('page-header', styles['page-header'])}>
        <h1 className='heading'>
          <span>Gallery</span>
        </h1>
        <div className={cx('subtitle', styles['header-subtitle'])}>
          <h2>Apr.1-2</h2>
          <div>Technovation'23</div>
        </div>
      </header>
      <main className={cx(styles['main-content'])}>
        <div className={cx(styles['gallery'])}>
          
          <Image src={Image1} alt="ak" width="50vw" height="auto" />
          <Image src={Image2} alt="ak" width="50vw" height="auto" />
          <Image src={Image3} alt="ak" width="50vw" height="auto" />
          <Image src={Image4} alt="ak" width="50vw" height="auto" />
          <Image src={Image5} alt="ak" width="50vw" height="auto" />
          <Image src={Image6} alt="ak" width="50vw" height="auto" />

        </div>
      </main>
    </motion.div>
  );
};

export default Gallery;
