import ContentCard from "../Layout/ContentCard";
import Divider from "../Layout/Divider";
import InLogo from '../assets/LI-In-Bug.png';
import GitHubLogo from '../assets/github-mark.png';
import ContactForm from "../components/ContactForm";
import classes from './Contact.module.css';

const ContactPage = () => {

  return (
    <ContentCard>
      <h1>Contact</h1>
      <Divider />
      <section className={classes.contactLinks}>
        <div className={classes.contactOption}>
          <div className={classes.contactLogo}>
            <a 
              href="/" 
              target="_blank"
              rel="external"
            >
              <img 
                src={InLogo}
                className={classes.logos}
                alt="LinkedIn logo and link" 
              />
            </a>
          </div>
          <div className={classes.contactText}>
            <p>View my profile on <a href="/" target="_blank" rel="external">LinkedIn<sup className={classes.superscript}>&reg;</sup></a></p>
          </div>
        </div>
        <div className={classes.contactOption}>
          <div className={classes.contactLogo}>
            <a 
              href="https://github.com/Jessiroo" 
              target="_blank"
              rel="external"
            >
              <img 
                src={GitHubLogo}
                className={classes.logos}
                alt="GitHub logo and link" 
              /> 
            </a>
          </div>
          <div className={classes.contactText}>
            <p>Check me out on <a href="https://github.com/Jessiroo" target="_blank" rel="external">GitHub<sup className={classes.superscript}>&reg;</sup></a></p>
          </div>
        </div>
      </section>
      <h2>Or...</h2>
      <ContactForm />
    </ContentCard>
  );
};

export default ContactPage;