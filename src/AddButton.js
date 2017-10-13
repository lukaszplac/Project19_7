import React from 'react';

const Comment = ({addComment}) => {
	return (<button onClick={() => addComment(prompt("Write a comment"))}>Add Comment</button>);
};

export default Comment;