import React from 'react';

const Comment = ({comment, votes}) => {
	return (<li>{comment} <span>votes: {votes}</span></li>);
};

export default Comment;