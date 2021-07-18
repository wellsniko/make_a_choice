import React from 'react';
import ChoiceBox from './choice_box';

class ChoiceCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            newChoice: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ newChoice: nextProps.newChoice.text });
    }

    handleSubmit(e) {
        e.preventDefault();
        let choice = {
            text: this.state.text
        };

        this.props.composeChoice(choice);
        this.setState({ text: '' })
    }

    update() {
        return e => this.setState({
            text: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="textarea"
                            value={this.state.text}
                            onChange={this.update()}
                            placeholder="Write your choice..."
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
                <ChoiceBox text={this.state.newChoice} />
            </div>
        )
    }
}

export default ChoiceCompose;