import {connect} from 'react-redux';
import CommentsList from './CommentsList';

const mapStateToProps = state => ({
  comments: state.comments,
  users: state.users
});

export default connect(mapStateToProps)(CommentsList);