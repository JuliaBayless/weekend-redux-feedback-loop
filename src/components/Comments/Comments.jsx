import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Button, Paper, Box, TextField } from '@mui/material';

function Comments() {
    const formData = useSelector(store => store.feedbackReducer)
    const [comment, setComment] = useState(formData.comments || '');
    //navigate to the next page with history
    const history = useHistory();
    // trigger that sends data to reducer
    const dispatch = useDispatch();


    //function that will dispatch data to reducer 
    //and use history
    const handleSubmitComment = () => {
        event.preventDefault();
        //send info off with trigger
        dispatch({
            type: 'SUBMIT_COMMENTS',
            payload: comment
        });
        history.push('/review')
    }

    //back button
    const handleSubmitBack = () => {
        history.push('/understanding')
    }

    return (
        <>
            <Container className="valueIn" fixed component={Paper}>
                <h1>Would you like to leave a comment?</h1>

                <TextField fullWidth
                    id="outlined-basic"
                    label="Comment Here"
                    variant="outlined"
                    type="text"
                    color="warning"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                />
                <Box>
                    <Button className="submitBtn"
                        variant="outlined"
                        size="large"
                        color="error"
                        onClick={handleSubmitBack}>Back</Button>

                    <Button className="submitBtn"
                        variant="outlined"
                        size="large"
                        color="warning"
                        onClick={handleSubmitComment}>Next</Button>
                </Box>
            </Container>
        </>
    )


}//end Comments

export default Comments;