import { Link, useNavigate } from "react-router-dom";

import ContentCard from "../Layout/ContentCard";
import Divider from "../Layout/Divider";
import InLogo from '../assets/LI-In-Bug.png';
import GitHubLogo from '../assets/github-mark.png';
import ContactForm from "../components/ContactForm";
import classes from './Contact.module.css';

const ContactPage = () => {
  const navigate = useNavigate();

  const linkClickHandler = (url) => {
    navigate(url);
  };

  return (
    <ContentCard>
      <h1>Contact</h1>
      <Divider />
      <section className={classes.contactLinks}>
        <div className={classes.contactOption}>
          <div className={classes.contactLogo}>
            <img 
              src={InLogo}
              className={classes.logos}
              alt="LinkedIn logo and link" 
              onClick={linkClickHandler.bind(null, '/')}
            />
          </div>
          <div className={classes.contactText}>
            <p>View my profile on <Link to="/">LinkedIn<sup className={classes.superscript}>&reg;</sup></Link></p>
          </div>
        </div>
        <div className={classes.contactOption}>
          <div className={classes.contactLogo}>
            <img 
              src={GitHubLogo}
              className={classes.logos}
              alt="GitHub logo and link" 
              onClick={linkClickHandler.bind(null, '/')}
            /> 
          </div>
          <div className={classes.contactText}>
            <p>Check me out on <Link to="/">GitHub<sup className={classes.superscript}>&reg;</sup></Link></p>
          </div>
        </div>
      </section>
      <h2>Or...</h2>
      <ContactForm />
    </ContentCard>
  );
};

export default ContactPage;