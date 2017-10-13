import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUp, thumbDown, removeComment} from './store/actions'

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUp(id)),
  thumbDownComment: (id) => dispatch(thumbDown(id)),
  remove: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);