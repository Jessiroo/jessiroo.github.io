import DividerImage from '../assets/Divider.png';
import classes from './Divider.module.css';

const Divider = () => {
  return (
    <div className={classes.divider}>
      <img src={DividerImage} alt="" />
    </div>
  );
};

export default Divider;