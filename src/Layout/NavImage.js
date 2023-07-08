import MainImage from '../assets/Jessie.jpg';
import classes from './NavImage.module.css';

const NavImage = () => {
  return (
    <div className={classes.navImage}>
      <div className={classes.imageDecoration1}>
        <div className={classes.imageDecoration2}>
          <img 
            src={MainImage} 
            className={classes.image} 
            alt='Jessie' 
          />
        </div>
      </div>
    </div>
  );
};

export default NavImage;