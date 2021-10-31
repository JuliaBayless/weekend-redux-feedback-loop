import { useHistory } from "react-router";
import { Container, Button, Paper } from '@mui/material';

function ThankYou() {
    //push to start of survey
    const history = useHistory();

    const handleSubmitStartOver = () => {
        history.push('/')
    }

    return (
        <>
            <Container className="valueIn" fixed component={Paper}>
            <h1>Thank You!</h1>
            <p>You're feedback has been submitted!</p>
            <p>If you'd like to leave new feedback, just click the button</p>

            <Button className="submitBtn "
                variant="outlined"
                size="large"
                color="warning"
                onClick={handleSubmitStartOver}>Leave New FeedBack</Button>
        </Container>
        </>
    )

}//end ThankYou

export default ThankYou;