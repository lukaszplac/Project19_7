import React from 'react';
import './App.css';
import CommentsList from './CommentsList';
import CommentsListContainer from './CommentsListContainer';

const App = () => {
  return (
    <div className="App">
    	<CommentsListContainer>
    		<CommentsList />
    	</CommentsListContainer>
    </div>
  );
};

export default App;
