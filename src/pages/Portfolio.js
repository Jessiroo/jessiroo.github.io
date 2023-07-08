import ContentCard from "../Layout/ContentCard";
import Divider from "../Layout/Divider";
import GitHubMark from "../components/GitHubLogo";
import classes from './Portfolio.module.css';

import HappyPaws from '../assets/HappyPaws.png';
import ReactMeals from '../assets/ReactMeals.png';
import HardHat from '../assets/HardHat.jpeg';

const PortfolioPage = () => {

  return (
    <ContentCard>
      <h1>Portfolio</h1>
      <Divider />
      <p>Please check out some of the projects I have worked on. Each includes a link to the hosted site and the GitHub repo.</p>
      <section>
        <div className={classes.portfolioPiece}>
          <a 
            href="https://bright-cranachan-cecabf.netlify.app/"
            target="_blank"
            rel="external noreferrer"
            className={classes.link}
          ><h2>Happy Paws</h2></a>
          <a 
            href="https://bright-cranachan-cecabf.netlify.app/"
            target="_blank"
            rel="external noreferrer"
            className={classes.portfolioPieceImage}
          >
            <img 
              src={HappyPaws} 
              alt='Pet adoption website homepage.' 
            />
          </a>
          <p>This was the first solo project I worked on. It was originally intended to be a small project to practice with, but it quickly grew as I kept coming up with new ideas to expand upon it with new features and functionalities. It has fetch and post requests, makes use of React Router, has a featured carousel, filtering, custom hooks, context, and more...</p>
          <a 
            href="https://github.com/Jessiroo/happy-paws"
            target="_blank"
            rel="external noreferrer"
          >
            <GitHubMark />
          </a>
        </div>
        <div className={classes.portfolioDivider}/>
        <div className={classes.portfolioPiece}>
          <a 
            href="https://effervescent-choux-5431b3.netlify.app/"
            target="_blank"
            rel="external noreferrer"
            className={classes.link}
          ><h2>React Meals</h2></a>
          <a 
            href="https://effervescent-choux-5431b3.netlify.app/"
            target="_blank"
            rel="external noreferrer"
            className={classes.portfolioPieceImage}
          >
            <img 
              src={ReactMeals} 
              className={classes.portfolioPieceImage}
              alt='React Meals website homepage.' 
            />
          </a>
          <p>This was one of the projects I worked on while doing Maximilian Schwarzmüller's course: React - The Complete Guide. In order to maximize my learning from the course I would frequently pause the video and code ahead of the instructor. During large projects like this, I would look ahead to see what the desired end-product looked like and attempt to re-create it ahead of time. Once finished, I would start another project and code along with the instructor to get more practice and see how our solutions differed. This was my code-ahead version of this project.</p>
          <a 
            href="https://github.com/Jessiroo/react-meals"
            target="_blank"
            rel="external noreferrer"
          >
            <GitHubMark />
          </a>
        </div>
        <div className={classes.portfolioDivider}/>
        <div className={classes.portfolioPiece}>
          <h2>More Coming Later...</h2>
          <div className={classes.comingSoon}>
            <img 
              src={HardHat} 
              className={classes.portfolioPieceImage}
              alt='Coming soon...' 
            />
          </div>
        </div>
      </section>
    </ContentCard>
  );
};

export default PortfolioPage;