import { Fragment } from "react";

import GitHubMark from "./GitHubLogo";
import MinorDivider from "../Layout/MinorDivider";
import classes from './PortfolioPiece.module.css';

const PortfolioPiece = (props) => {
  return (
    <Fragment>
      <div className={classes.portfolioPiece}>
        <a 
          href={props.hostedURL}
          target="_blank"
          rel="external noreferrer"
          className={classes.link}
        ><h2>{props.header}</h2></a>
        <a 
          href={props.hostedURL}
          target="_blank"
          rel="external noreferrer"
          className={classes.portfolioPieceImage}
        >
          <img 
            src={props.siteImage} 
            alt={props.altImgText} 
          />
        </a>
        <p>{props.children}</p>
        <a 
          href={props.gitHubLink}
          target="_blank"
          rel="external noreferrer"
        >
          <GitHubMark />
        </a>
      </div>
      <MinorDivider />
    </Fragment>
  );
};

export default PortfolioPiece;