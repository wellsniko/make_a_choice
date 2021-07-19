import { useState, useEffect } from 'react';
import {useSelector, useStore} from 'react-redux'
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
// import Header from '../components/Header'

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%',
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));

export const Profile = (props)=> {
    const store = useSelector(store => store)


    const history = useHistory();
    const initialFormData = Object.freeze({
        ethnicity: '',
        gender: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        return axios.put(`/api/users/${store.session.user.id}`, formData)
    

    };

    // const classes = useStyles();

    return (
        <div>

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div> 
                    {/* className={classes.paper} */}
                    <Avatar style={{ color: "#000000" }} ></Avatar>
                    <Typography component="h1" variant="h5">
                        Fill in your details
                    </Typography>
                    <form >
                        {/* className={classes.form} noValidate */}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="ethnicity"
                            label="Ethnicity"
                            name="ethnicity"
                            autoComplete="ethnicity"
                            autoFocus
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="gender"
                            label="Gender"
                            type="gender"
                            id="gender"
                            // autoComplete="current-password"
                            onChange={handleChange}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            // color="#8B0000"
                            // className={classes.submit}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
}










// import React from 'react';
// import ChoiceBox from '../choices/choice_box';

// class Profile extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             choices: []
//         }
//     }

//     componentWillMount() {
//         console.log(this.props.currentUser.id)
//         this.props.fetchUserChoices(this.props.currentUser.id);
//     }

//     componentWillReceiveProps(newState) {
//         this.setState({ choices: newState.choices });
//     }

//     render() {
//         if (this.state.choices.length === 0) {
//             return (<div>This user has no Choices</div>)
//         } else {
//             return (
//                 <div>
//                     <h2>All of This User's Choices</h2>
//                     {this.state.choices.map(choice => (
//                         <ChoiceBox key={choice._id} text={choice.text} />
//                     ))}
//                 </div>
//             );
//         }
//     }
// }

// export default Profile;