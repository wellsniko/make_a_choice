import React from 'react';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            handle:'',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/choices');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            handle: this.state.handle,
            password: this.state.password
        };

        this.props.login(user);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <Avatar style={{ color: "#000000" }} ></Avatar>
                <Container component="main" maxWidth="xs">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <br />
                        <input type="text"
                            value={this.state.handle}
                            onChange={this.update('handle')}
                            placeholder="Handle"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="submit" value="Submit" />
                        {this.renderErrors()}
                        
                    </div>
                </form>
                </Container>
            </div>
        );
    }
}

export default withRouter(LoginForm);
