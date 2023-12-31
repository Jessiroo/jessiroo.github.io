import ContentCard from "../Layout/ContentCard";
import Divider from "../Layout/Divider";
import MinorDivider from "../Layout/MinorDivider";
import classes from './Qualifications.module.css';

const QualificationsPage = () => {
  return (
    <ContentCard>
      <h1>Work History & Qualifications</h1>
      <Divider />
      <p>Dedicated and innovative Software Engineer with a strong foundation in web development, specializing in HTML, CSS, JavaScript, React.js, React Router, Redux, Node.js, Express, and MongoDB. Adept at designing and implementing user-friendly interfaces and scalable web applications. Possesses a keen eye for detail and a passion for crafting elegant, efficient code. Excels in collaborative team environments and is committed to continuous learning and professional growth. Ready to leverage my skills and enthusiasm to contribute effectively to dynamic software development projects. </p>
      <MinorDivider />
      <section className={classes.lists}>
        <div className={classes.qualities}>
          <h2>Qualifications:</h2>
          <div className={classes.qualitiesList}>
            <ul>
              <li>HTML, CSS & JavaScript</li>
              <li>React.js</li>
              <li>React Router & Redux</li>
              <li>Node.js & Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        <div className={classes.qualities}>
          <h2>Personal Qualities:</h2>
          <div className={classes.qualitiesList}>
            <ul>
              <li>Varied skillset with ability to learn new concepts quickly</li>
              <li>Complex critical thinking and problem solving abilities</li>
              <li>Meticulous attention to detail</li>
              <li>Work well individually or as part of a team</li>
            </ul>
          </div>
        </div>
      </section>
      <MinorDivider />
      <section className={classes.workHistory}>
        <h2>Experience:</h2>
        <div className={classes.workLocation}>
          <p><b><u>Seeking Software Engineering Position</u></b></p>
          <p><b>Mar. 2022 - Present</b></p>
        </div>
        <ul>
          <li>Utilizing JavaScript, HTML, and CSS to produce modern web applications</li>
          <li>Creating web applications using core principles of the React.js ecosystem including components, hooks, state management, reducers, context, etc.</li>
          <li>Building a variety of front-end single-page applications (SPA’s) and working with RESTful API’s</li>
          <li>Using packages such as React Router and Redux to create more complicated and functional applications</li>
          <li>Producing high-quality, scalable, and maintainable web applications utilizing responsive design principles, performance optimization, and ensuring accessibility and functionality across multiple devices with a satisfying UI/UX </li>
          <li>Working with technologies like NPM and Git for version control</li>
          <li>Troubleshooting and problem solving issues when they arise</li>
          <li>Producing clean, maintainable, reusable, and scalable components and code</li>
          <li>Creating full stack applications using Node.js, Express.js, and MongoDB, or backend services such as Firebase</li>
        </ul>
      </section>
      <MinorDivider />
      <section className={classes.workHistory}>
        <h2>Work History:</h2>
        <div className={classes.workLocation}> 
          <p><b><u>Intensive Care Nurse</u></b></p>
          <p><b>Sept. 2018 - Aug. 2022</b></p>
        </div>
        <p><i>Shock Trauma Intensive Care Unit - Intermountain Medical Center</i></p>
        <ul>
          <li>Utilized complex critical thinking and problem solving caring for patients with a variety of multisystem disorders and traumas</li>
          <li>Personally managed a 1-2 patient workload in the intensive care setting while maintaining awareness of other patient and nursing needs</li>
          <li>Practiced prioritization and time management in a high-stakes environment</li>
          <li>Collaborated closely with physician teams to ensure appropriate care</li>
          <li>Employed interdisciplinary teamwork in critical situations</li>
        </ul>
        <div className={classes.workLocation}> 
          <p><b><u>Registered Nurse</u></b></p>
          <p><b>Jan. 2017 - Sept. 2018</b></p>
        </div>
        <p><i>Acute Cardiovascular Unit - Intermountain Medical Center</i></p>
        <ul>
          <li>Cared for patients with a variety of cardiac, pulmonary, and thoracic conditions</li>
          <li>Collaborated physicians and other healthcare disciplines</li>
          <li>Managed a 4-6 patient workload in a cardiovascular specialty step-down unit</li>
        </ul>
      </section>   
    </ContentCard>
  );
};

export default QualificationsPage;