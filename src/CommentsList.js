import React from 'react';
import Comment from './Comment';

const CommentsList = ({comments}) => {
	console.log("comm: ", comments);
	return (<ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>);
}
export default CommentsList;