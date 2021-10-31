import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { Container, Button, Box, Paper } from '@mui/material';

function Review() {
    //grab feedback from the store
    const feedback = useSelector(store => store.feedbackReducer)
    //history to send to thank you page
    const history = useHistory();
    //empty redux state with dispatch
    const dispatch = useDispatch();

    //POST to database!
    const handleSubmitAllFeedback = () => {
        axios.post('/feedback', feedback)
            .then(response => {
                // dispatch action to reset cart
                dispatch({
                    type: 'EMPTY_STATE'
                })
                //push to thank you page
                history.push('/ThankYou')
            })
            .catch(error => {
                console.log('ERROR IN POST', error);
                alert('POST ghost')
            })
    } //end handleSubmitAllFeedback

    //back button
    const handleSubmitBack = () => {
        history.push('/comments')
    }

    return (
        <>
        <Container className="valueIn" fixed component={Paper}>
            <div>
                <h1>Review Your Feedback</h1>
            </div>
            <h2>Feelings: {feedback.feeling}</h2>
            <h2>Understanding: {feedback.understanding}</h2>
            <h2>Support: {feedback.support}</h2>
            <h2>Comments: {feedback.comments}</h2>

            <Button className="submitBtn"
                variant="contained"
                size="large"
                color="warning"
                onClick={handleSubmitAllFeedback}>Submit</Button>
            <Box className="btnContainerReview">
                <Button className="submitBtn "
                    variant="outlined"
                    size="large"
                    color="error"
                    onClick={handleSubmitBack}>Back</Button>
            </Box>
            </Container>
        </>

    )







}//end Review

export default Review;