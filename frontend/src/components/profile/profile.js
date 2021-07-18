import React from 'react';
import ChoiceBox from '../choices/choice_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            choices: []
        }
    }

    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserChoices(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ choices: newState.choices });
    }

    render() {
        if (this.state.choices.length === 0) {
            return (<div>This user has no Choices</div>)
        } else {
            return (
                <div>
                    <h2>All of This User's Choices</h2>
                    {this.state.choices.map(choice => (
                        <ChoiceBox key={choice._id} text={choice.text} />
                    ))}
                </div>
            );
        }
    }
}

export default Profile;