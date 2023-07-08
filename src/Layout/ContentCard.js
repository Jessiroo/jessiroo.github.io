import { Fragment } from 'react';

import Decoration from '../assets/Decoration2.png';
import classes from './ContentCard.module.css';

const ContentCard = (props) => {
  return (
    <Fragment>
      <img 
        src={Decoration} 
        className={classes.contentCardDecoration} 
        alt=''
      />
      <div className={classes.contentCard}>
        {props.children}
      </div>
    </Fragment>
  );
};

export default ContentCard;