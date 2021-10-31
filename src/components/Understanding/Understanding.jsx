import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Container, Button, sizing } from '@mui/material';
import Paper from '@mui/material/Paper';

function Understanding() {
    const formData = useSelector(store => store.feedbackReducer)
    const [understanding, setUnderstanding] = useState(formData.understanding || 0);
    const [hover, setHover] = React.useState(-1);
    //navigate to the next page with history
    const history = useHistory();
    // trigger that sends data to reducer
    const dispatch = useDispatch();


    //function that will dispatch data to reducer 
    //and use history
    const handleSubmitUnderstanding = () => {
        event.preventDefault();
        //conditional for input value
        if (understanding === '') {
            alert('Please fill in field')
        } else if (understanding > 5 || understanding < 0.5) {
            alert('Please pick your number of heart containers')
        } else {
            //send info off with trigger
            dispatch({
                type: 'SUBMIT_UNDERSTANDING',
                payload: understanding
            });
            history.push('/support')
        }
    }

    //back button
    const handleSubmitBack = () => {
        history.push('/')
    }

    //styling from MUI
    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
            color: "#ff6d75"
        },
        "& .MuiRating-iconHover": {
            color: "#ff3d47"
        }
    });

    const labels = {
        0.5: 'Some help please',
        1: 'Some help please+',
        1.5: 'Could be better',
        2: 'Could be better+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    return (
        <>
            <Container className="valueIn" fixed component={Paper}>
                <h1>How do you feel you are understanding the material?</h1>
                <Box>
                    <StyledRating className="hearts"
                        name="hover-feedback"
                        value={understanding}
                        defaultValue={understanding}
                        onChange={(event, newValue) => {
                            setUnderstanding(newValue);

                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />

                    {understanding !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : understanding]}</Box>
                    )}

                </Box>


                <Button className="submitBtn"
                    variant="outlined"
                    size="large"
                    color="error"
                    onClick={handleSubmitBack}>Back</Button>

                <Button className="submitBtn"
                    variant="outlined"
                    size="large"
                    color="warning"
                    onClick={handleSubmitUnderstanding}>Next</Button>


            </Container>
        </>
    )

}//end Understanding

export default Understanding;