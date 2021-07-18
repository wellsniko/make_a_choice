import React from 'react';
import { withRouter } from 'react-router-dom';
import ChoiceBox from './choice_box';

class Choice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            choices: []
        }
    }

    componentWillMount() {
        this.props.fetchChoices();
    }

    componentWillReceiveProps(newState) {
        this.setState({ choices: newState.choices });
    }

    render() {
        if (this.state.choices.length === 0) {
            return (<div>There are no Choices</div>)
        } else {
            return (
                <div>
                    <h2>All Choices</h2>
                    {this.state.choices.map(choice => (
                        <ChoiceBox key={choice._id} text={choice.text} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Choice);