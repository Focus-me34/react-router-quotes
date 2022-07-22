import { useEffect, useState } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';
import { getAllComments } from '../../lib/api';
import useHttp from '../../hooks/use-http';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, error, data: comments } = useHttp(getAllComments, true);
  const [pullComments, setPullComments] = useState(true)
  const { quoteId } = useParams();

  useEffect(() => {
    // ? We pull all the comments on page load and when values in dependency array changes
    sendRequest(quoteId);
    setPullComments(false);
  }, [sendRequest, quoteId, pullComments])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  // ! We use this function in the chil component, to detect if we need to pull the comment list again or not
  const AddedCommentHandler = (quoteId) => {
    setIsAddingComment(false);
    sendRequest(quoteId);
    setPullComments(true)
  }

  // ? We change the content to display based on the status of the HTTP request
  let content
  if (status === "pending") {
    content = <div className="centered"><LoadingSpinner></LoadingSpinner></div>
  } else if (status === "completed" && (error)) {
    content = <><p>An error occured while loading the comments</p><p>{error}</p></>
  } else if (status === "completed") {
    content = <CommentsList comments={comments} ></CommentsList>
  }

  if (error) {
    return <><p>An error occured while loading the comments</p><p>{error}</p></>
  }

  return (
    <section className={classes.comments}>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm addComment={AddedCommentHandler} />}
      <h2>User Comments</h2>
      {content}
    </section>
  );
};

export default Comments;
