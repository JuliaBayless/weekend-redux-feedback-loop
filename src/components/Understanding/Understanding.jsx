import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

function Understanding() {
    const formData = useSelector(store => store.feedbackReducer)
    const [understanding, setUnderstanding] = useState(formData.understanding || '');
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
        } else if (understanding > 5 || understanding < 0) {
            alert('Please fill in field with numbers between 0 - 5')
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


    return (
        <>
            <h1>How do you feel you are understanding the material?</h1>
            <p>Please rate between a 0-5</p>
            <div className="inputBox">
                <input type="number"
                    max="5"
                    min="0"
                    value={understanding}
                    onChange={(event) => setUnderstanding(event.target.value)}
                />
                <button className="Submit"
                    onClick={handleSubmitUnderstanding}>Next</button>
                    <div>
                <button className="backBtn" onClick={handleSubmitBack}>Back</button>
                </div>
            </div>
        </>
    )

}//end Understanding

export default Understanding;