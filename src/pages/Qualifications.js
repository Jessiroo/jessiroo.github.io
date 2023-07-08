import ContentCard from "../Layout/ContentCard";
import Divider from "../Layout/Divider";
import classes from './Qualifications.module.css';

const QualificationsPage = () => {
  return (
    <ContentCard>
      <h1>Work History & Qualifications</h1>
      <Divider />
      <section className={classes.lists}>
        <div className={classes.qualities}>
          <h2>Qualifications:</h2>
          <div className={classes.qualitiesList}>
            <ul>
              <li>HTML, CSS & JavaScript</li>
              <li>React.js</li>
              <li>React Router & Redux</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        <div className={classes.qualities}>
          <h2>Personal Qualities:</h2>
          <div className={classes.qualitiesList}>
            <ul>
              <li>Varied skillset with ability to learn new concepts quickly</li>
              <li>Complex critical thinking and problem-solving abilities</li>
              <li>Meticulous attention to detail</li>
              <li>Work well individually or as part of a team</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={classes.workHistory}>
        <h2>Work History:</h2>
        <div className={classes.workLocation}> 
          <p><b><u>Intensive Care Nurse</u></b></p>
          <p><b>Sept. 2018 - Aug. 2022</b></p>
        </div>
        <p><i>Shock Trauma Intensive Care Unit - Intermountain Medical Center</i></p>
        <ul>
          <li>Utilized complex critical thinking and problem-solving caring for patients with a variety of multisystem disorders and traumas</li>
          <li>Personally managed a 1-2 patient workload in the intensive care setting while maintaining awareness of other patient and nursing needs</li>
          <li>Practiced prioritization and time-management in a high-stakes environment</li>
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