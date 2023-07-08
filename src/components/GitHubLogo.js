import GitHubLogo from '../assets/github-mark.png';
import GitHubLogoWhite from '../assets/github-mark-white.png';
import classes from './GitHubLogo.module.css';

const GitHubMark = (props) => {
  return (
    <div className={classes.githubLogo}>
      <div 
        className={classes.logos}
        onClick={props.onClick}
      >
        <img 
          src={GitHubLogo} 
          className={classes.logo} 
          alt='GitHub repo link' 
        />
        <img 
          src={GitHubLogoWhite} 
          className={classes.logoWhite}
          alt='GitHub repo link' 
        />
      </div>
    </div>
  );
};

export default GitHubMark;