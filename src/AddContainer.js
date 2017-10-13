import {connect} from 'react-redux';
import AddButton from './AddButton';
import {addComment} from './store/actions'

const mapDispatchToProps = dispatch => ({
  addComment: (comment) => dispatch(addComment(comment))
});

export default connect(null, mapDispatchToProps)(AddButton);