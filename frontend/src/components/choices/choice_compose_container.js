import { connect } from 'react-redux';
import { composeChoice } from '../../actions/choice_actions';
import ChoiceCompose from './choice_compose';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newChoice: state.choices.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        composeChoice: data => dispatch(composeChoice(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceCompose);