import { connect } from 'react-redux';
import { fetchChoices } from '../../actions/choice_actions';
import Choices from './choices';

const mapStateToProps = (state) => {
    return {
        choices: Object.values(state.choices.all),
        user: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchChoices: () => dispatch(fetchChoices())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Choices);