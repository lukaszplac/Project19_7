import React from 'react';

const Comment = ({comment, votes, id, thumbUpComment, thumbDownComment, remove}) => {
	return (<li>{comment}
				<span> votes: {votes}</span> 
				<button onClick={() => thumbUpComment(id)}>Thumb up</button>
				<button onClick={() => thumbDownComment(id)}>Thumb down</button>
				<button onClick={() => remove(id)}>Remove</button>
			</li>);
};

export default Comment;