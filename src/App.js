import React from 'react';
import './App.css';
import CommentsList from './CommentsList';
import CommentsListContainer from './CommentsListContainer';
import AddContainer from './AddContainer';


const App = () => {
  return (
  	<div className="App">
	    <AddContainer>
	    </AddContainer>
	    <CommentsListContainer>
	    		<CommentsList />
	    </CommentsListContainer>
    </div>
  );
};

export default App;
