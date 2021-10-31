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



function Feelings() {

    const formData = useSelector(store => store.feedbackReducer)
    const [feeling, setFeeling] = useState(formData.feeling || 0);
    const [hover, setHover] = React.useState(-1);

    //navigate to the next page with history
    const history = useHistory();
    // trigger that sends data to reducer
    const dispatch = useDispatch();


    //function that will dispatch data to reducer 
    //and use history
    const handleSubmitFeelings = () => {
        event.preventDefault();
        //conditional for input value 
        if (feeling === '') {
            alert('Please fill in field')
        } else if (feeling > 5 || feeling < 0.5) {
            alert('Please pick your number of heart containers')
        } else {
            event.preventDefault();
            //send info off with trigger
            dispatch({
                type: 'SUBMIT_FEELING',
                payload: feeling
            });
            history.push('/understanding')
        }
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

    console.log(feeling);
    return (
        <>
            <Container className="valueIn" fixed component={Paper}>
                <h1>How are you feeling today?</h1>

                <Box>
                    <StyledRating className="hearts"
                        name="hover-feedback"
                        value={feeling}
                        defaultValue={feeling}
                        onChange={(event, newValue) => {
                            setFeeling(newValue);

                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />

                    {feeling !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : feeling]}</Box>
                    )}
                    
                </Box>

                <Button className="submitBtn"
                    variant="outlined"
                    size="large"
                    color="warning"
                    onClick={handleSubmitFeelings}>Next</Button>

            </Container>
        </>
    )

}//end Feelings

export default Feelings;