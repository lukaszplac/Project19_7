import React from 'react';
import './App.css';
import CommentsList from './CommentsList';
import CommentsListContainer from './CommentsListContainer';
import AddContainer from './AddContainer';
import DevTools from './DevTools';


const App = () => {
  return (
  	<div className="App">
	    <AddContainer>
	    </AddContainer>
	    <CommentsListContainer>
	    		<CommentsList />
	    </CommentsListContainer>
	    <DevTools />
    </div>
  );
};

export default App;
