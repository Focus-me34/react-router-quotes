import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false)

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const startEnteringHandler = () => {
    setIsEntering(true)
  }

  const finishEnteringHandler = () => {
    setIsEntering(false)
  }

  return (
    <>
    {/* We don't use the location argument as it is not needed.
    We don't need to inject element from this location to the message being propmt to the user */}
      <Prompt when={isEntering} message={(location) => "Are you sure you want to leave? All your data would be lost!"}></Prompt>
      <Card>
        <form onFocus={startEnteringHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
