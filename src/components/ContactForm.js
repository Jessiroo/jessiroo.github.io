import useInput from '../hooks/use-input';
import classes from './ContactForm.module.css';

// VALIDATION FUNCTIONS
const inputValidator = (value) => value.trim() !== '';
const emailValidator = (value) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  };
  return false;
};

// COMPONENT
const ContactForm = () => {
  // FORM VALUES & HANDLERS
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputValueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetHandler: nameResetHandler,
  } = useInput(inputValidator);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputValueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetHandler: emailResetHandler,
  } = useInput(emailValidator);

  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    inputValueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    resetHandler: messageResetHandler,
  } = useInput(inputValidator);

  // SUBMIT HANDLER
  const submitFormHandler = (event) => {
    event.preventDefault();

    let contactForm = document.querySelector("form");
    contactForm.submit();

    nameResetHandler();
    emailResetHandler();
    messageResetHandler();
  };

  // FORM VALIDITY
  let formIsValid = false;
  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  // RESPONSIVE STYLING CLASSES
  const nameInputClasses = `${classes.input} ${nameHasError ? classes.invalid : ''}`;
  const emailInputClasses = `${classes.input} ${emailHasError ? classes.invalid : ''}`;
  const messageInputClasses = `${classes.input} ${messageHasError ? classes.invalid : ''}`;

  // COMPONENT RETURN
  return (
    <form
      action="https://formspree.io/f/mwkdenjz"
      method="POST"
      className={classes.contactForm}
    >
      <div className={nameInputClasses}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p className={classes.errorText}>Please enter a name.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email:</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className={classes.errorText}>Please enter a valid email address.</p>}
      </div>
      <div className={messageInputClasses}>
        <label htmlFor="message">Message:</label>
        <textarea 
          id="message"
          name="question"
          maxLength="1000"
          rows="5"
          className={classes.messageArea}
          value={messageValue}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
        {messageHasError && <p className={classes.errorText}>Please enter a message.</p>}
      </div>
      {formIsValid && 
        <div className={classes.submit}>
          <button type="button" onClick={submitFormHandler}>Send</button>
        </div>
      }
    </form>
  );
};

export default ContactForm;