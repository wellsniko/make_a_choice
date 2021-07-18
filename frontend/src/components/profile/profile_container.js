import { connect } from 'react-redux';
import { fetchUserChoices } from '../../actions/choice_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
    return {
        choices: Object.values(state.choices.user),
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserChoices: id => dispatch(fetchUserChoices(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);