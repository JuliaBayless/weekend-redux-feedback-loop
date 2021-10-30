import { useHistory } from "react-router";
import { useDispatch } from "react-redux"
import { useState } from "react";

function Understanding() {
    const [understanding, setUnderstanding] = useState('');
    //navigate to the next page with history
    const history = useHistory();
    // trigger that sends data to reducer
    const dispatch = useDispatch();


    //function that will dispatch data to reducer 
    //and use history
    const handleSubmitUnderstanding = () => {
        event.preventDefault();
        //send info off with trigger
        dispatch({
            type: 'SUBMIT_UNDERSTANDING',
            payload: understanding
        });
        history.push('/support')
    }

    return (
        <>
            <h1>How do you feel you are understanding the material?</h1>
            <p>Please rate between a 0-5</p>
            <div className="inputBox">
                <input type="number"
                    max="5"
                    min="0"
                    onChange={(event) => setUnderstanding(event.target.value)}
                />
                <button className="Submit"
                    onClick={handleSubmitUnderstanding}>Next</button>
            </div>
        </>
    )

}//end Understanding

export default Understanding;